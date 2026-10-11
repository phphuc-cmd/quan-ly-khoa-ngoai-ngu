/**
 * ===================================================================
 * CỔNG THÔNG TIN & QUẢN LÝ KHOA NGOẠI NGỮ - ĐẠI HỌC BÌNH DƯƠNG (BDU)
 * Application Logic, State Engine & Interactive Modules (script.js)
 * ===================================================================
 */

// Global State
let state = (typeof window !== 'undefined' && window.__OFFLINE_INITIAL_STATE__) ? window.__OFFLINE_INITIAL_STATE__ : {
  currentTab: 'tab-portal-students',
  evidenceViewMode: 'cards',
  taskViewMode: 'table',
  activeFolderFilter: 'ALL',
  sliderIndex: 0,
  sliderTimer: null,
  charts: {},
  customReportHtml: null,
  reportCategory: 'week', // 'week' | 'month' | 'quarter' | 'year'
  reportPeriod: 'Tuần 09 (24/08 - 30/08/2026)',
  reportDocNum: '35/BC-KNN-W09',
  reportSigner: 'TS. Nguyễn Văn A',
  reportSignerTitle: 'TRƯỞNG KHOA NGOẠI NGỮ',
  reportDate: new Date().toISOString().slice(0, 10),
  reportTemplateKey: null,
  isEditingReport: false,

  // Alpha sorting flags
  sortInfoAsc: true,
  sortStaffAsc: true,
  sortLecturersAsc: true,
  sortCollaboratorsAsc: true,
  sortStudentsAsc: true,
  sortWorkMatrixAsc: true,
  activeInfoCategory: 'all',

  // 1. Lãnh đạo Khoa
  leadership: [
    {
      id: 1,
      code: 'BCH-01',
      name: 'TS. Nguyễn Văn A',
      title: 'Trưởng Khoa Ngoại Ngữ',
      role: 'Lãnh đạo Khoa',
      dept: 'Ban Chủ Nhiệm Khoa',
      degree: 'TS.',
      email: 'anv@bdu.edu.vn',
      phone: '0903 111 222',
      duty: 'Phụ trách chung toàn diện hoạt động Khoa; Chiến lược phát triển chương trình Ngôn ngữ Anh; Kiểm định chất lượng AUN-QA; Đối ngoại & Hợp tác quốc tế.'
    },
    {
      id: 2,
      code: 'BCH-02',
      name: 'ThS. Trần Thị C',
      title: 'Phó Trưởng Khoa / Trưởng Tổ Dịch',
      role: 'Lãnh đạo Khoa',
      dept: 'Ban Chủ Nhiệm Khoa',
      degree: 'ThS.',
      email: 'ctt@bdu.edu.vn',
      phone: '0903 222 333',
      duty: 'Phụ trách công tác chuyên môn đào tạo; Quản lý khảo thí và chuẩn đầu ra tiếng Anh; Đề cương chi tiết học phần; Nghiên cứu khoa học giảng viên.'
    },
    {
      id: 3,
      code: 'BCH-03',
      name: 'TS. Lê Văn D',
      title: 'Trưởng Bộ Môn Ngôn Ngữ Anh',
      role: 'Lãnh đạo Khoa',
      dept: 'Bộ Môn Ngôn Ngữ Anh',
      degree: 'TS.',
      email: 'dlv@bdu.edu.vn',
      phone: '0903 333 444',
      duty: 'Quản lý học thuật các tổ chuyên môn (Biên-Phiên dịch, Business English, TESOL); Phân công giảng dạy; Phát triển học liệu và giáo trình số hóa.'
    },
    {
      id: 4,
      code: 'BCH-04',
      name: 'PGS.TS. Đỗ Quốc Huy',
      title: 'Cố Vấn Cấp Cao / Chủ Tịch HĐKH',
      role: 'Lãnh đạo Khoa',
      dept: 'Hội Đồng Khoa Học',
      degree: 'PGS.TS.',
      email: 'huydq@bdu.edu.vn',
      phone: '0903 666 777',
      duty: 'Định hướng nghiên cứu khoa học chuyên sâu; Thẩm định các đề tài NCKH sinh viên & giảng viên; Cố vấn xuất bản quốc tế và liên kết đào tạo.'
    }
  ],

  // 2. Cán bộ Nhân viên / Giáo vụ
  staff: [
    {
      id: 1,
      code: 'NV-BDU-01',
      name: 'Nguyễn Thị Thu Hà',
      role: 'Chuyên viên Giáo vụ Trưởng',
      dept: 'Giáo Vụ Khoa',
      office: 'Phòng A1-204',
      email: 'hantt@bdu.edu.vn',
      phone: '0908 123 456',
      tasks: 'Quản lý lịch giảng dạy, điều phối phòng học, lập lịch thi kết thúc học phần, quản lý bảng điểm và tổng hợp chứng chỉ ngoại ngữ nộp về BGH.'
    },
    {
      id: 2,
      code: 'NV-BDU-02',
      name: 'Phạm Hồng Nhung',
      role: 'Chuyên viên Quản lý Sinh viên & Học bổng',
      dept: 'Quản Lý Sinh Viên',
      office: 'Phòng A1-204',
      email: 'nhungph@bdu.edu.vn',
      phone: '0908 234 567',
      tasks: 'Tiếp nhận hồ sơ tân sinh viên K28, quản lý điểm rèn luyện, xét duyệt học bổng khuyến khích học tập, giải quyết chế độ chính sách sinh viên.'
    },
    {
      id: 3,
      code: 'NV-BDU-03',
      name: 'Lê Minh Tuấn',
      role: 'Chuyên viên Học vụ & Khảo thí',
      dept: 'Học Vụ & Khảo Thí',
      office: 'Phòng A1-205',
      email: 'tuanlm@bdu.edu.vn',
      phone: '0908 345 678',
      tasks: 'Rà soát điều kiện tốt nghiệp, đối soát chứng chỉ IELTS/VSTEP chuẩn đầu ra, tiếp nhận đơn phúc khảo bài thi tiếng Anh, xuất bảng điểm học tập.'
    },
    {
      id: 4,
      code: 'NV-BDU-04',
      name: 'Trần Bảo Ngọc',
      role: 'Chuyên viên Hành chính & Văn thư',
      dept: 'Hành Chính Tổng Hợp',
      office: 'Phòng A1-204',
      email: 'ngoctb@bdu.edu.vn',
      phone: '0908 456 789',
      tasks: 'Soạn thảo công văn, tờ trình gửi Ban Giám Hiệu, lưu trữ văn bản đến/đi, quản lý con dấu Khoa và tổng hợp minh chứng phục vụ kiểm định chất lượng.'
    },
    {
      id: 5,
      code: 'NV-BDU-05',
      name: 'Đặng Thanh Tâm',
      role: 'Chuyên viên Hợp tác Doanh nghiệp & Việc làm',
      dept: 'Hành Chính Tổng Hợp',
      office: 'Phòng A1-205',
      email: 'tamdt@bdu.edu.vn',
      phone: '0908 567 890',
      tasks: 'Kết nối doanh nghiệp FDI tiếp nhận sinh viên thực tập Biên-Phiên dịch & Tiếng Anh Thương Mại; Tổ chức Career Day và khảo sát việc làm cựu SV.'
    }
  ],

  // 3. Giảng viên Cơ hữu
  lecturers: [
    {
      id: 1,
      code: 'GV-BDU-01',
      name: 'TS. Nguyễn Văn A',
      degree: 'TS.',
      department: 'Bộ môn Ngôn ngữ Anh',
      position: 'Trưởng Khoa Ngoại Ngữ',
      status: 'Đang công tác',
      email: 'anv@bdu.edu.vn',
      phone: '0903 111 222',
      advisingClass: '28NNA01 (K28)',
      office: 'Phòng A2-101',
      modules: 'ENG101 (Tiếng Anh Giao Tiếp 1), Ngôn ngữ học ứng dụng',
      research: 'Ứng dụng Generative AI trong dạy học Ngoại ngữ & Đánh giá năng lực viết'
    },
    {
      id: 2,
      code: 'GV-BDU-02',
      name: 'ThS. Trần Thị C',
      degree: 'ThS.',
      department: 'Tổ Biên - Phiên Dịch Tiếng Anh',
      position: 'Phó Trưởng Khoa / Trưởng Tổ Dịch',
      status: 'Đang công tác',
      email: 'ctt@bdu.edu.vn',
      phone: '0903 222 333',
      advisingClass: '27NNA01 (K27)',
      office: 'Phòng A2-102',
      modules: 'ENG201 (Biên Dịch Nâng Cao), Kỹ năng Viết học thuật (Academic Writing)',
      research: 'Lý thuyết dịch thuật ứng dụng, Phân tích diễn ngôn & Hậu kỳ dịch máy'
    },
    {
      id: 3,
      code: 'GV-BDU-03',
      name: 'TS. Lê Văn D',
      degree: 'TS.',
      department: 'Tổ Tiếng Anh Thương Mại',
      position: 'Trưởng Tổ Chuyên Môn Business English',
      status: 'Đang công tác',
      email: 'dlv@bdu.edu.vn',
      phone: '0903 333 444',
      advisingClass: '26NNA02 (K26)',
      office: 'Phòng A2-103',
      modules: 'ENG301 (Tiếng Anh Thương Mại & Đàm Phán), Thuyết trình tiếng Anh',
      research: 'Giao tiếp liên văn hóa trong doanh nghiệp FDI và Đàm phán quốc tế'
    },
    {
      id: 4,
      code: 'GV-BDU-04',
      name: 'ThS. Hoàng Văn E',
      degree: 'ThS.',
      department: 'Tổ Phương Pháp Giảng Dạy (TESOL/ELT)',
      position: 'Giảng viên chính / Cố vấn CLB ETC',
      status: 'Đang công tác',
      email: 'ehv@bdu.edu.vn',
      phone: '0903 444 555',
      advisingClass: '25NNA01 (K25)',
      office: 'Phòng A2-104',
      modules: 'ENG305 (Văn Hóa & Văn Học Anh - Mỹ), Phương pháp giảng dạy tiếng Anh',
      research: 'Ứng dụng Blended Learning và Gamification trong phát triển phản xạ phát âm'
    },
    {
      id: 5,
      code: 'GV-BDU-05',
      name: 'ThS. Emily Watson',
      degree: 'ThS.',
      department: 'Tổ Kỹ Năng & Tiếng Anh Học Thuật',
      position: 'Chuyên gia Bản ngữ / Cố vấn IELTS',
      status: 'Đang công tác',
      email: 'emily.w@bdu.edu.vn',
      phone: '0903 555 666',
      advisingClass: '28NNA02 (K28)',
      office: 'Phòng A2-105',
      modules: 'ENG401 (Luyện thi IELTS Chuyên Sâu), Advanced Public Speaking',
      research: 'Đo lường năng lực diễn đạt tự nhiên (Fluency & Coherence) theo chuẩn IELTS'
    },
    {
      id: 6,
      code: 'GV-BDU-06',
      name: 'PGS.TS. Đỗ Quốc Huy',
      degree: 'PGS.TS.',
      department: 'Bộ môn Ngôn ngữ Anh',
      position: 'Cố vấn Cấp cao / Hội đồng KH Khoa',
      status: 'Đang công tác',
      email: 'huydq@bdu.edu.vn',
      phone: '0903 666 777',
      advisingClass: '26NNA01 (K26)',
      office: 'Phòng A2-101',
      modules: 'Phương pháp Nghiên cứu Khoa học Ngôn ngữ Anh, Ngữ nghĩa học',
      research: 'Đánh giá năng lực ngoại ngữ chuẩn VSTEP và CEFR cho sinh viên đại học'
    }
  ],

  // 4. Cố vấn Học tập (GVCN)
  advisors: [
    { id: 1, code: 'CV-K28-01', name: 'TS. Nguyễn Văn A', classAssigned: '28NNA01', cohort: 'K28', major: 'Biên - Phiên Dịch Tiếng Anh', studentsCount: 45, room: 'A2-101', email: 'anv@bdu.edu.vn', schedule: 'Thứ 2 hàng tuần (14:00 - 16:30)', status: 'Hoàn thành 100%' },
    { id: 2, code: 'CV-K28-02', name: 'ThS. Emily Watson', classAssigned: '28NNA02', cohort: 'K28', major: 'Tiếng Anh Thương Mại', studentsCount: 42, room: 'A2-105', email: 'emily.w@bdu.edu.vn', schedule: 'Thứ 4 hàng tuần (09:00 - 11:30)', status: 'Hoàn thành 100%' },
    { id: 3, code: 'CV-K27-01', name: 'ThS. Trần Thị C', classAssigned: '27NNA01', cohort: 'K27', major: 'Biên - Phiên Dịch Tiếng Anh', studentsCount: 38, room: 'A2-102', email: 'ctt@bdu.edu.vn', schedule: 'Thứ 3 hàng tuần (13:30 - 16:00)', status: 'Hoàn thành 100%' },
    { id: 4, code: 'CV-K27-02', name: 'ThS. Trương Ngọc Hân', classAssigned: '27NNA02', cohort: 'K27', major: 'Phương Pháp Giảng Dạy (TESOL)', studentsCount: 40, room: 'A2-102', email: 'hantn.trans@bdu.edu.vn', schedule: 'Thứ 5 hàng tuần (14:00 - 16:00)', status: 'Hoàn thành 95%' },
    { id: 5, code: 'CV-K26-01', name: 'PGS.TS. Đỗ Quốc Huy', classAssigned: '26NNA01', cohort: 'K26', major: 'Tiếng Anh Thương Mại & Du Lịch', studentsCount: 36, room: 'A2-101', email: 'huydq@bdu.edu.vn', schedule: 'Thứ 6 hàng tuần (08:30 - 11:00)', status: 'Hoàn thành 100%' },
    { id: 6, code: 'CV-K26-02', name: 'TS. Lê Văn D', classAssigned: '26NNA02', cohort: 'K26', major: 'Biên - Phiên Dịch Tiếng Anh', studentsCount: 35, room: 'A2-103', email: 'dlv@bdu.edu.vn', schedule: 'Thứ 4 hàng tuần (14:00 - 16:30)', status: 'Hoàn thành 100%' },
    { id: 7, code: 'CV-K25-01', name: 'ThS. Hoàng Văn E', classAssigned: '25NNA01', cohort: 'K25', major: 'Phương Pháp Giảng Dạy (TESOL)', studentsCount: 32, room: 'A2-104', email: 'ehv@bdu.edu.vn', schedule: 'Thứ 2 hàng tuần (08:30 - 11:00)', status: 'Hoàn thành 100%' }
  ],

  // 5. Cộng tác viên & Thỉnh giảng
  collaborators: [
    {
      id: 1,
      code: 'CTV-2026-01',
      name: 'ThS. Nguyễn Hồng Phúc',
      role: 'Giảng viên thỉnh giảng',
      degree: 'ThS.',
      org: 'Trường ĐH Ngoại Thương CS2',
      courses: 'Tiếng Anh Thương Mại, Logistics & Hợp đồng Thương mại Quốc tế',
      hours: 45,
      contract: 'Đang hiệu lực',
      rating: 'Xuất sắc',
      email: 'phucnh.collab@bdu.edu.vn',
      phone: '0981 112 233'
    },
    {
      id: 2,
      code: 'CTV-2026-02',
      name: 'ThS. Phạm Thanh Trúc',
      role: 'Trợ giảng (TA)',
      degree: 'ThS.',
      org: 'Khoa Ngoại Ngữ BDU',
      courses: 'Trợ giảng ENG101 & CLB Thực hành Nghe - Nói IELTS',
      hours: 60,
      contract: 'Đang hiệu lực',
      rating: 'Xuất sắc',
      email: 'tructp.ta@bdu.edu.vn',
      phone: '0982 223 344'
    },
    {
      id: 3,
      code: 'CTV-2026-03',
      name: 'Ông Mark Davis',
      role: 'Chuyên gia Doanh nghiệp',
      degree: 'Giám đốc Nhân sự',
      org: 'Tập đoàn Tetra Pak Bình Dương',
      courses: 'Tập huấn Phỏng vấn Tiếng Anh & Văn hóa Doanh nghiệp Đa Quốc Gia',
      hours: 20,
      contract: 'Đang hiệu lực',
      rating: 'Xuất sắc',
      email: 'mark.davis@tetrapak.com',
      phone: '0983 334 455'
    },
    {
      id: 4,
      code: 'CTV-2026-04',
      name: 'CN. Lê Hoàng Long',
      role: 'CTV Đoàn Hội / CLB',
      degree: 'Cử nhân',
      org: 'CLB Tiếng Anh ETC - Khoa Ngoại Ngữ',
      courses: 'Điều phối viên English Speaking Club & BDU English Debate',
      hours: 40,
      contract: 'Đang hiệu lực',
      rating: 'Tốt',
      email: 'longlh.etc@bdu.edu.vn',
      phone: '0984 445 566'
    },
    {
      id: 5,
      code: 'CTV-2026-05',
      name: 'ThS. Trương Ngọc Hân',
      role: 'Giảng viên thỉnh giảng',
      degree: 'ThS.',
      org: 'Công ty Cổ phần Dịch Thuật & Công Nghệ Quốc Tế',
      courses: 'Kỹ năng Biên Phiên Dịch Hội Nghị Cabin & CAT Tools',
      hours: 30,
      contract: 'Chờ gia hạn',
      rating: 'Tốt',
      email: 'hantn.trans@bdu.edu.vn',
      phone: '0985 556 677'
    },
    {
      id: 6,
      code: 'CTV-2026-06',
      name: 'CN. Vương Bảo Hân',
      role: 'Trợ giảng (TA)',
      degree: 'Cử nhân',
      org: 'Bộ môn Ngôn ngữ Anh BDU',
      courses: 'Trợ giảng Luyện đề VSTEP B2 & Ngữ pháp Ứng dụng',
      hours: 50,
      contract: 'Đang hiệu lực',
      rating: 'Xuất sắc',
      email: 'hanvb.ta@bdu.edu.vn',
      phone: '0986 667 788'
    }
  ],

  // 6. Sinh viên Ngôn ngữ Anh
  students: [
    { id: 1, code: '28NN0101', name: 'Nguyễn Văn An', cohort: 'K28', major: 'Biên - Phiên Dịch Tiếng Anh', gpa: 3.65, status: 'Bằng khen', advisor: 'TS. Nguyễn Văn A', email: '28nn0101@student.bdu.edu.vn', phone: '0912 345 678' },
    { id: 2, code: '28NN0102', name: 'Trần Thị Bích', cohort: 'K28', major: 'Tiếng Anh Thương Mại', gpa: 3.42, status: 'Đang học', advisor: 'TS. Nguyễn Văn A', email: '28nn0102@student.bdu.edu.vn', phone: '0913 456 789' },
    { id: 3, code: '27NN0201', name: 'Lê Hoàng Cường', cohort: 'K27', major: 'Biên - Phiên Dịch Tiếng Anh', gpa: 1.85, status: 'Cảnh báo', advisor: 'ThS. Trần Thị C', email: '27nn0201@student.bdu.edu.vn', phone: '0914 567 890' },
    { id: 4, code: '27NN0202', name: 'Phạm Minh Đức', cohort: 'K27', major: 'Phương Pháp Giảng Dạy (TESOL)', gpa: 3.10, status: 'Đang học', advisor: 'ThS. Trần Thị C', email: '27nn0202@student.bdu.edu.vn', phone: '0915 678 901' },
    { id: 5, code: '26NN0301', name: 'Hoàng Thị Dung', cohort: 'K26', major: 'Tiếng Anh Du Lịch', gpa: 3.88, status: 'Bằng khen', advisor: 'TS. Lê Văn D', email: '26nn0301@student.bdu.edu.vn', phone: '0916 789 012' },
    { id: 6, code: '26NN0302', name: 'Vũ Đức Em', cohort: 'K26', major: 'Biên - Phiên Dịch Tiếng Anh', gpa: 2.75, status: 'Đang học', advisor: 'TS. Lê Văn D', email: '26nn0302@student.bdu.edu.vn', phone: '0917 890 123' },
    { id: 7, code: '25NN0401', name: 'Đỗ Thị Giang', cohort: 'K25', major: 'Tiếng Anh Thương Mại', gpa: 3.55, status: 'Bằng khen', advisor: 'ThS. Hoàng Văn E', email: '25nn0401@student.bdu.edu.vn', phone: '0918 901 234' },
    { id: 8, code: '25NN0402', name: 'Bùi Văn Hùng', cohort: 'K25', major: 'Phương Pháp Giảng Dạy (TESOL)', gpa: 1.92, status: 'Nghỉ học', advisor: 'ThS. Hoàng Văn E', email: '25nn0402@student.bdu.edu.vn', phone: '0919 012 345' }
  ],

  // 7. Bảng Thống Kê Phân Công Công Việc Cụ Thể (Work Matrix)
  workMatrix: [
    { id: 1, name: 'TS. Nguyễn Văn A', code: 'BCH-01', category: 'Lãnh đạo Khoa', role: 'Trưởng Khoa', unit: 'Ban Chủ Nhiệm / Bộ Môn NNA', tasks: 'Chỉ đạo toàn diện, Kiểm định AUN-QA, Cố vấn lớp 28NNA01, Giảng dạy ENG101, Hướng dẫn NCKH Sinh viên', status: 'Đang thực hiện', progress: '95%' },
    { id: 2, name: 'ThS. Trần Thị C', code: 'BCH-02', category: 'Lãnh đạo Khoa', role: 'Phó Trưởng Khoa', unit: 'Tổ Biên - Phiên Dịch', tasks: 'Quản lý đào tạo chuyên môn, Rà soát đề cương học phần, Cố vấn lớp 27NNA01, Giảng dạy ENG201 Biên Dịch Nâng Cao', status: 'Đang thực hiện', progress: '90%' },
    { id: 3, name: 'TS. Lê Văn D', code: 'BCH-03', category: 'Lãnh đạo Khoa', role: 'Trưởng Bộ Môn', unit: 'Tổ Tiếng Anh Thương Mại', tasks: 'Điều phối chương trình Business English, Cố vấn lớp 26NNA02, Giảng dạy ENG301, Tổ chức thi kết thúc môn', status: 'Đang thực hiện', progress: '92%' },
    { id: 4, name: 'PGS.TS. Đỗ Quốc Huy', code: 'BCH-04', category: 'Lãnh đạo Khoa', role: 'Cố Vấn Cấp Cao', unit: 'Hội Đồng Khoa Học Khoa', tasks: 'Thẩm định đề tài NCKH, Cố vấn học tập lớp 26NNA01, Giảng dạy Phương pháp NCKH Ngôn ngữ Anh', status: 'Đang thực hiện', progress: '100%' },
    { id: 5, name: 'Nguyễn Thị Thu Hà', code: 'NV-BDU-01', category: 'Nhân viên / Giáo vụ', role: 'Chuyên viên Giáo vụ Trưởng', unit: 'Văn Phòng Giáo Vụ', tasks: 'Xếp thời khóa biểu học kỳ 1, Lập lịch thi chứng chỉ IELTS/VSTEP, Tiếp nhận và nhập điểm học phần', status: 'Đang thực hiện', progress: '88%' },
    { id: 6, name: 'Phạm Hồng Nhung', code: 'NV-BDU-02', category: 'Nhân viên / Giáo vụ', role: 'Chuyên viên Quản lý SV', unit: 'Quản Lý Sinh Viên', tasks: 'Hoàn thiện danh sách tân sinh viên K28, Tổng hợp điểm rèn luyện 5W, Xét duyệt hồ sơ học bổng', status: 'Đang thực hiện', progress: '85%' },
    { id: 7, name: 'Lê Minh Tuấn', code: 'NV-BDU-03', category: 'Nhân viên / Giáo vụ', role: 'Chuyên viên Học vụ', unit: 'Học Vụ & Khảo Thí', tasks: 'Đối soát chuẩn đầu ra tiếng Anh khóa K25 tốt nghiệp, Tiếp nhận đơn phúc khảo, Xuất bảng điểm chính quy', status: 'Đang thực hiện', progress: '90%' },
    { id: 8, name: 'Trần Bảo Ngọc', code: 'NV-BDU-04', category: 'Nhân viên / Giáo vụ', role: 'Chuyên viên Hành chính', unit: 'Hành Chính Tổng Hợp', tasks: 'Soạn thảo Báo cáo BGH định kỳ Tuần/Tháng/Quý/Năm, Quản lý lưu trữ văn thư và hồ sơ minh chứng kiểm định', status: 'Đang thực hiện', progress: '95%' },
    { id: 9, name: 'Đặng Thanh Tâm', code: 'NV-BDU-05', category: 'Nhân viên / Giáo vụ', role: 'Chuyên viên Hợp tác DN', unit: 'Hợp Tác Doanh Nghiệp', tasks: 'Liên hệ 15 doanh nghiệp FDI tiếp nhận SV thực tập tiếng Anh, Tổ chức tọa đàm nghề nghiệp sinh viên', status: 'Đang thực hiện', progress: '80%' },
    { id: 10, name: 'ThS. Hoàng Văn E', code: 'GV-BDU-04', category: 'Giảng viên cơ hữu', role: 'Giảng viên chính', unit: 'Tổ TESOL / ELT', tasks: 'Giảng dạy ENG305 Văn Hóa Anh - Mỹ, Cố vấn lớp 25NNA01, Phụ trách chuyên môn CLB Tiếng Anh ETC', status: 'Đang thực hiện', progress: '90%' },
    { id: 11, name: 'ThS. Emily Watson', code: 'GV-BDU-05', category: 'Giảng viên cơ hữu', role: 'Chuyên gia Bản ngữ', unit: 'Tổ Kỹ Năng & IELTS', tasks: 'Giảng dạy ENG401 IELTS Chuyên Sâu, Cố vấn lớp 28NNA02, Huấn luyện đội tuyển Olympic Tiếng Anh BDU', status: 'Đang thực hiện', progress: '100%' },
    { id: 12, name: 'ThS. Nguyễn Hồng Phúc', code: 'CTV-2026-01', category: 'Cộng tác viên', role: 'Giảng viên thỉnh giảng', unit: 'Khoa Ngoại Thương / BDU', tasks: 'Giảng dạy học phần Tiếng Anh Hợp Đồng Thương Mại (45 tiết), Hướng dẫn thực hành đàm phán hợp đồng', status: 'Đang thực hiện', progress: '75%' },
    { id: 13, name: 'ThS. Phạm Thanh Trúc', code: 'CTV-2026-02', category: 'Cộng tác viên', role: 'Trợ giảng (TA)', unit: 'Bộ Môn Ngôn Ngữ Anh', tasks: 'Trợ giảng các lớp ENG101, Chấm bài luyện phát âm, Điều phối câu lạc bộ luyện nói tiếng Anh hàng tuần', status: 'Đang thực hiện', progress: '90%' },
    { id: 14, name: 'CN. Lê Hoàng Long', code: 'CTV-2026-04', category: 'Cộng tác viên', role: 'Điều phối viên CLB', unit: 'Đoàn Khoa / CLB ETC', tasks: 'Tổ chức cuộc thi BDU English Debate 2026, Quản lý góc sinh hoạt English Speaking Zone tại giảng đường', status: 'Đang thực hiện', progress: '100%' }
  ],

  evidenceFolders: [
    { id: 'f1', name: '01_Hoat_Dong_Doan_Hoi_ETC', category: 'ĐTN/Hội SV', driveUrl: 'https://drive.google.com' },
    { id: 'f2', name: '02_Hoc_Thuat_IELTS_VSTEP', category: 'Học thuật', driveUrl: 'https://drive.google.com' },
    { id: 'f3', name: '03_Ren_Luyen_Ne_Nep', category: 'Rèn luyện', driveUrl: 'https://drive.google.com' },
    { id: 'f4', name: '04_Hoi_Thao_NCKH_English', category: 'Học thuật', driveUrl: 'https://drive.google.com' },
    { id: 'f5', name: '05_English_Debate_Speaking', category: 'ĐTN/Hội SV', driveUrl: 'https://drive.google.com' }
  ],

  evidence: [
    { id: 1, folderId: 'f2', title: 'Chứng chỉ Tiếng Anh Quốc Tế IELTS 7.5 Academic', category: 'Học thuật', datetime: '2026-08-15', location: 'IDP Education / BDU Testing Hub', studentCode: '28NN0101', studentName: 'Nguyễn Văn An', issuer: 'IDP IELTS Australia', points: 20, imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80', driveUrl: 'https://drive.google.com' },
    { id: 2, folderId: 'f1', title: 'Chiến dịch Mùa Hè Xanh 2026 - Dạy Tiếng Anh Tình Nguyện', category: 'ĐTN/Hội SV', datetime: '2026-07-20', location: 'Bến Cát, Bình Dương', studentCode: '28NN0102', studentName: 'Trần Thị Bích', issuer: 'Đoàn Trường ĐH Bình Dương', points: 15, imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80', driveUrl: 'https://drive.google.com' },
    { id: 3, folderId: 'f2', title: 'Chứng chỉ Năng Lực Ngoại Ngữ VSTEP Bậc 5 (C1)', category: 'Học thuật', datetime: '2026-06-10', location: 'Trung tâm Khảo thí Ngoại ngữ BDU', studentCode: '25NN0401', studentName: 'Đỗ Thị Giang', issuer: 'Hội đồng Khảo thí VSTEP', points: 20, imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80', driveUrl: 'https://drive.google.com' },
    { id: 4, folderId: 'f3', title: 'Giấy chứng nhận Hiến Máu Tình Nguyện & Tình Nguyện Viên BDU', category: 'Rèn luyện', datetime: '2026-05-18', location: 'Sảnh Khu A - BDU Campus', studentCode: '26NN0301', studentName: 'Hoàng Thị Dung', issuer: 'Hội Chữ Thập Đỏ Tỉnh', points: 10, imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&auto=format&fit=crop&q=80', driveUrl: 'https://drive.google.com' },
    { id: 5, folderId: 'f5', title: 'Tổ chức BDU English Debate & Career Workshop 2026', category: 'ĐTN/Hội SV', datetime: '2026-08-10', location: 'Hội trường 1 - BDU', studentCode: '26NN0302', studentName: 'Vũ Đức Em', issuer: 'Khoa Ngoại Ngữ & CLB ETC', points: 10, imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80', driveUrl: 'https://drive.google.com' },
    { id: 6, folderId: 'f4', title: 'Giải Nhất Báo Cáo NCKH Ngôn Ngữ Anh Sinh Viên 2026', category: 'Học thuật', datetime: '2026-05-25', location: 'Phòng Hội thảo 2 - BDU', studentCode: '28NN0101', studentName: 'Nguyễn Văn An', issuer: 'Hội đồng Khoa học BDU', points: 25, imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80', driveUrl: 'https://drive.google.com' }
  ],

  training: [
    { id: 1, code: 'ENG101', name: 'Tiếng Anh Giao Tiếp Quốc Tế 1', lecturer: 'TS. Nguyễn Văn A', program: 'Đại học Chính quy', totalLessons: 15, completedLessons: 8, attendance: 95 },
    { id: 2, code: 'ENG201', name: 'Biên Dịch Anh - Việt Nâng Cao & CAT Tools', lecturer: 'ThS. Trần Thị C', program: 'Đại học Chính quy', totalLessons: 15, completedLessons: 6, attendance: 90 },
    { id: 3, code: 'ENG301', name: 'Tiếng Anh Thương Mại & Đàm Phán Doanh Nghiệp', lecturer: 'TS. Lê Văn D', program: 'Đại học Chính quy', totalLessons: 15, completedLessons: 7, attendance: 88 },
    { id: 4, code: 'ENG305', name: 'Văn Hóa & Văn Học Các Nước Nói Tiếng Anh', lecturer: 'ThS. Hoàng Văn E', program: 'Chính quy & Liên thông', totalLessons: 15, completedLessons: 9, attendance: 82 },
    { id: 5, code: 'ENG401', name: 'Luyện Thi Chuẩn Đầu Ra IELTS 6.5 & VSTEP B2', lecturer: 'ThS. Emily Watson', program: 'Đại học Chính quy', totalLessons: 15, completedLessons: 5, attendance: 96 }
  ],

  tasks: [
    { id: 1, role: 'Giáo Vụ', title: 'Rà soát hồ sơ nhập học Tân Sinh Viên Ngôn Ngữ Anh Khóa K28', assignee: 'Giáo Vụ Khoa', deadline: '2026-09-05', priority: 'Cao', status: 'Đang Thực Hiện' },
    { id: 2, role: 'Giáo Vụ', title: 'Xếp lịch thi chuẩn đầu ra IELTS/VSTEP & TKB Học Kỳ 1', assignee: 'Giáo Vụ Khoa', deadline: '2026-09-15', priority: 'Cao', status: 'Chưa Thực Hiện' },
    { id: 3, role: 'GVCN', title: 'Tổ chức họp lớp Chủ nhiệm đầu năm & Phổ biến quy chế chuẩn đầu ra', assignee: 'ThS. Trần Thị C', deadline: '2026-09-08', priority: 'Trung bình', status: 'Đang Thực Hiện' },
    { id: 4, role: 'GVCN', title: 'Thông báo cảnh báo học vụ và tư vấn lộ trình cho sinh viên GPA < 2.0', assignee: 'TS. Lê Văn D', deadline: '2026-09-03', priority: 'Cao', status: 'Chưa Thực Hiện' },
    { id: 5, role: 'Đoàn Khoa', title: 'Tổ chức Cuộc thi Rung Chuông Vàng Tiếng Anh & BDU English Debate 2026', assignee: 'Đoàn Khoa & CLB ETC', deadline: '2026-09-20', priority: 'Trung bình', status: 'Hoàn Thành' },
    { id: 6, role: 'Đoàn Khoa', title: 'Phát động phong trào English Speaking Zone tại BDU Campus', assignee: 'Đoàn Khoa BDU', deadline: '2026-08-28', priority: 'Thấp', status: 'Hoàn Thành' }
  ],

  research: [
    { id: 1, code: 'NCKH-2026-01', title: 'Ứng dụng Generative AI trong Nâng cao Kỹ năng Viết Học thuật Tiếng Anh (Academic Writing) cho Sinh viên BDU', mentor: 'TS. Nguyễn Văn A', students: 'Nguyễn Văn An, Vũ Đức Em', level: 'Cấp Trường', output: '01 Bài báo Khoa học & Phần mềm trợ giảng AI', status: 'Đang triển khai' },
    { id: 2, code: 'NCKH-2026-02', title: 'Đánh giá tính chính xác của dịch máy thần kinh (NMT) trong biên dịch tài liệu thương mại Anh - Việt', mentor: 'ThS. Trần Thị C', students: 'Trần Thị Bích, Đỗ Thị Giang', level: 'Cấp Khoa', output: '01 Kỷ yếu Hội nghị NCKH Quốc gia', status: 'Đã nghiệm thu' },
    { id: 3, code: 'NCKH-2026-03', title: 'Khảo sát các yếu tố gây lo âu giao tiếp tiếng Anh (Foreign Language Anxiety) của sinh viên năm nhất', mentor: 'ThS. Emily Watson', students: 'Phạm Minh Đức', level: 'Cấp Khoa', output: '01 Báo cáo nghiên cứu thực nghiệm', status: 'Đang triển khai' },
    { id: 4, code: 'NCKH-2026-04', title: 'Phương pháp Shadowing và Peer-feedback trong nâng cao độ trôi chảy khẩu ngữ IELTS Speaking', mentor: 'ThS. Hoàng Văn E', students: 'Hoàng Thị Dung', level: 'Cấp Trường', output: '01 Bài báo kỷ yếu Hội thảo Quốc tế TESOL', status: 'Đã nghiệm thu' }
  ]
};

// Toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `bdu-toast ${type}`;
  let icon = '<i class="fa-solid fa-info-circle text-primary"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check text-success"></i>';
  if (type === 'danger') icon = '<i class="fa-solid fa-circle-exclamation text-danger"></i>';
  if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation text-amber"></i>';
  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease-out';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// Live Clock
function initClock() {
  const el = document.getElementById('systemLiveClock');
  if (!el) return;
  function update() {
    const now = new Date();
    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    el.innerHTML = `<i class="fa-regular fa-clock"></i> ${days[now.getDay()]}, ${d}/${m}/${y} • <strong>${hh}:${mm}:${ss}</strong>`;
  }
  update();
  setInterval(update, 1000);
}

// Hero Slider
function initHeroSlider() {
  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('#sliderDots .dot');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  if (!track || !dots.length) return;

  function goToSlide(idx) {
    state.sliderIndex = (idx + 3) % 3;
    track.style.transform = `translateX(-${state.sliderIndex * 33.3333}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === state.sliderIndex));
  }

  if (prevBtn) prevBtn.onclick = () => goToSlide(state.sliderIndex - 1);
  if (nextBtn) nextBtn.onclick = () => goToSlide(state.sliderIndex + 1);
  dots.forEach(d => d.onclick = (e) => goToSlide(parseInt(e.target.dataset.index)));

  state.sliderTimer = setInterval(() => goToSlide(state.sliderIndex + 1), 6000);
}

// Vietnamese Alpha Sorting Helpers
function getVietnameseSortKey(fullName) {
  if (!fullName) return '';
  const clean = fullName.replace(/^(PGS\.TS\.|GS\.TS\.|TS\.|ThS\.|CN\.|BS\.|Thầy|Cô|Ông|Bà)\s+/i, '').trim();
  const parts = clean.split(/\s+/);
  if (parts.length === 1) return parts[0];
  const firstName = parts[parts.length - 1]; // Tên chính (An, Bích, Cường, Dũng,...)
  const rest = parts.slice(0, -1).join(' '); // Họ và chữ lót
  return `${firstName} ${rest}`;
}

function sortVietnamese(arr, key = 'name', asc = true) {
  return [...arr].sort((a, b) => {
    const valA = getVietnameseSortKey(a[key] || '');
    const valB = getVietnameseSortKey(b[key] || '');
    const cmp = valA.localeCompare(valB, 'vi', { sensitivity: 'base', numeric: true });
    return asc ? cmp : -cmp;
  });
}

function toggleSortInfoDirectory() {
  state.sortInfoAsc = !state.sortInfoAsc;
  renderInfoDirectory();
  showToast(`Đã sắp xếp danh bạ tổng hợp theo Alpha ${state.sortInfoAsc ? 'A ➔ Z' : 'Z ➔ A'}`, 'info');
}

function toggleSortStaff() {
  state.sortStaffAsc = !state.sortStaffAsc;
  renderStaff();
  showToast(`Đã sắp xếp danh sách Nhân viên theo Alpha ${state.sortStaffAsc ? 'A ➔ Z' : 'Z ➔ A'}`, 'info');
}

function toggleSortLecturers() {
  state.sortLecturersAsc = !state.sortLecturersAsc;
  renderLecturers();
  showToast(`Đã sắp xếp danh sách Giảng viên theo Alpha ${state.sortLecturersAsc ? 'A ➔ Z' : 'Z ➔ A'}`, 'info');
}

function toggleSortCollaborators() {
  state.sortCollaboratorsAsc = !state.sortCollaboratorsAsc;
  renderCollaborators();
  showToast(`Đã sắp xếp danh sách Cộng tác viên theo Alpha ${state.sortCollaboratorsAsc ? 'A ➔ Z' : 'Z ➔ A'}`, 'info');
}

function toggleSortStudents() {
  state.sortStudentsAsc = !state.sortStudentsAsc;
  renderStudents();
  showToast(`Đã sắp xếp danh sách Sinh viên theo Alpha ${state.sortStudentsAsc ? 'A ➔ Z' : 'Z ➔ A'}`, 'info');
}

function toggleSortWorkMatrix() {
  state.sortWorkMatrixAsc = !state.sortWorkMatrixAsc;
  renderWorkMatrix();
  showToast(`Đã sắp xếp bảng Thống kê Phân công theo Alpha ${state.sortWorkMatrixAsc ? 'A ➔ Z' : 'Z ➔ A'}`, 'info');
}

// Tab Switcher (khớp index.html 9 mục)
const TAB_TITLES = {
  'tab-portal-students': '1. Hồ Sơ Sinh Viên & Cán Bộ Giảng Viên',
  'tab-evidence': '2. Kho Minh Chứng Hoạt Động (5W)',
  'tab-training': '3. Tiến Độ Đào Tạo & Chuyên Cần',
  'tab-tasks': '4. Quản Lý Công Việc Đoàn - CLB',
  'tab-research': '5. NCKH Sinh Viên & Đề Tài',
  'tab-dashboard': '6. Thống Kê Dashboard & KPIs',
  'tab-reports': '7. Báo Cáo Hành Chính Ban Giám Hiệu',
  'tab-forms': '8. Mẫu Giấy Tờ Hành Chính BDU',
  'tab-ai-exam': '9. Tạo Đề Thi AI (Chuẩn Khoa)'
};

function safeCall(fn, ...args) {
  try {
    if (typeof fn === 'function') fn(...args);
  } catch (err) {
    console.error('[BDU] Lỗi khi hiển thị mục:', err);
  }
}

function switchToTab(tabId) {
  if (!document.getElementById(tabId)) tabId = 'tab-portal-students';
  state.currentTab = tabId;
  document.querySelectorAll('.bdu-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabId);
  });
  document.querySelectorAll('.bdu-tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });

  const topTitle = document.getElementById('topbarActiveTabName');
  if (topTitle && TAB_TITLES[tabId]) topTitle.textContent = TAB_TITLES[tabId];

  // Close mobile sidebar
  const sb = document.getElementById('bduSidebar');
  const bd = document.getElementById('bduSidebarBackdrop');
  if (sb) sb.classList.remove('mobile-open');
  if (bd) bd.classList.remove('active');

  // Mỗi mục render độc lập: lỗi một mục không làm hỏng việc chuyển mục
  if (tabId === 'tab-portal-students') safeCall(renderPersonnelHub);
  if (tabId === 'tab-evidence') safeCall(renderEvidenceHub);
  if (tabId === 'tab-training') safeCall(renderTrainingTable);
  if (tabId === 'tab-tasks') safeCall(renderTaskView);
  if (tabId === 'tab-research') safeCall(renderResearchTable);
  if (tabId === 'tab-dashboard') safeCall(renderDashboard);
  if (tabId === 'tab-reports') safeCall(renderAdministrativeReport);
  if (tabId === 'tab-forms') safeCall(typeof renderFormsHub === 'function' ? renderFormsHub : null);
  if (tabId === 'tab-ai-exam') safeCall(typeof renderAiExamGate === 'function' ? renderAiExamGate : null);

  safeCall(updateCounters);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCounters() {
  const elStaff = document.getElementById('navBadgeStaff');
  const elLec = document.getElementById('navBadgeLecturers');
  const elCol = document.getElementById('navBadgeCollaborators');
  const elStu = document.getElementById('navBadgeStudents');
  const elEvi = document.getElementById('navBadgeEvidence');
  const elTra = document.getElementById('navBadgeCourses');
  const elTas = document.getElementById('navBadgeTasks');
  const elRes = document.getElementById('navBadgeResearch');

  if (elStaff) elStaff.textContent = state.staff.length;
  if (elLec) elLec.textContent = state.lecturers.length;
  if (elCol) elCol.textContent = state.collaborators.length;
  if (elStu) elStu.textContent = state.students.length;
  if (elEvi) elEvi.textContent = state.evidence.length;
  if (elTra) elTra.textContent = state.training.length;
  if (elTas) elTas.textContent = state.tasks.filter(t => t.status !== 'Hoàn Thành').length;
  if (elRes) elRes.textContent = state.research.length;
}

// 1. Info Hub Rendering (Section 1)
function renderInfoHub() {
  renderInfoDirectory();
  renderWorkMatrix();
}

function filterInfoCategory(category) {
  state.activeInfoCategory = category;
  document.querySelectorAll('.info-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderInfoDirectory();
}

function renderInfoDirectory() {
  const container = document.getElementById('infoDirectoryContainer');
  if (!container) return;

  const category = state.activeInfoCategory || 'all';
  let allEntries = [];

  if (category === 'all' || category === 'leadership') {
    allEntries.push(...state.leadership.map(l => ({ ...l, typeLabel: 'Lãnh đạo Khoa', badgeClass: 'bdu-badge-primary', icon: 'fa-user-tie' })));
  }
  if (category === 'all' || category === 'lecturers') {
    allEntries.push(...state.lecturers.map(l => ({ ...l, typeLabel: 'Giảng viên cơ hữu', badgeClass: 'bdu-badge-success', icon: 'fa-chalkboard-user', duty: l.modules })));
  }
  if (category === 'all' || category === 'advisors') {
    allEntries.push(...state.advisors.map(a => ({ ...a, typeLabel: 'Cố vấn học tập', badgeClass: 'bdu-badge-info', icon: 'fa-user-graduate', duty: `Phụ trách lớp ${a.classAssigned} (${a.major}) • Lịch tiếp SV: ${a.schedule}` })));
  }
  if (category === 'all' || category === 'staff') {
    allEntries.push(...state.staff.map(s => ({ ...s, typeLabel: 'Nhân viên giáo vụ', badgeClass: 'bdu-badge-warning', icon: 'fa-id-card-clip', duty: s.tasks })));
  }
  if (category === 'all' || category === 'collaborators') {
    allEntries.push(...state.collaborators.map(c => ({ ...c, typeLabel: 'Cộng tác viên & Thỉnh giảng', badgeClass: 'bdu-badge-purple', icon: 'fa-handshake', duty: `${c.courses} • ${c.org}` })));
  }

  // Alpha Sort
  allEntries = sortVietnamese(allEntries, 'name', state.sortInfoAsc);

  container.innerHTML = allEntries.map(item => {
    const initials = item.name.replace(/^(TS\.|ThS\.|PGS\.TS\.|GS\.TS\.|CN\.|Ông|Bà)\s*/i, '').split(' ').map(n => n[0]).slice(-2).join('').toUpperCase();
    return `
      <div class="student-profile-card">
        <div class="student-card-top">
          <div class="student-avatar-circle" style="background: linear-gradient(135deg, var(--bdu-primary) 0%, #002d45 100%);">
            ${initials}
          </div>
          <div class="student-name-wrap">
            <h4 title="${item.name}">${item.name}</h4>
            <div style="margin-top:2px;">
              <span class="bdu-badge ${item.badgeClass}"><i class="fa-solid ${item.icon} mr-1"></i> ${item.typeLabel}</span>
            </div>
          </div>
        </div>
        <div class="student-details-list">
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-id-badge"></i> Chức Vụ:</span><span class="val" style="font-weight:700; color:var(--text-main);">${item.title || item.role || item.position}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-sitemap"></i> Đơn Vị:</span><span class="val">${item.dept || item.department || item.org || 'Khoa Ngoại Ngữ'}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-envelope"></i> Email:</span><span class="val" style="font-size:11px;">${item.email || 'N/A'}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-briefcase"></i> Phụ Trách:</span><span class="val" style="font-size:11.5px; color:var(--text-muted);">${item.duty || item.tasks || 'N/A'}</span></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderWorkMatrix() {
  const tbody = document.getElementById('matrixTableBody');
  if (!tbody) return;

  const roleFilter = document.getElementById('filterMatrixRole')?.value || 'ALL';
  const q = (document.getElementById('searchMatrix')?.value || '').toLowerCase().trim();

  let filtered = state.workMatrix.filter(m => {
    const mRole = roleFilter === 'ALL' || m.category === roleFilter;
    const mQ = !q || m.name.toLowerCase().includes(q) || m.tasks.toLowerCase().includes(q) || m.unit.toLowerCase().includes(q);
    return mRole && mQ;
  });

  filtered = sortVietnamese(filtered, 'name', state.sortWorkMatrixAsc);

  tbody.innerHTML = filtered.map((m, idx) => {
    const initials = m.name.replace(/^(TS\.|ThS\.|PGS\.TS\.|GS\.TS\.|CN\.)\s*/i, '').split(' ').map(n => n[0]).slice(-2).join('').toUpperCase();
    return `
      <tr>
        <td style="text-align:center; font-weight:700;">${idx + 1}</td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="width:28px; height:28px; border-radius:50%; background:var(--bdu-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700;">${initials}</div>
            <div>
              <strong style="color:var(--text-main);">${m.name}</strong>
              <div style="font-size:11px; color:var(--text-muted);">${m.code}</div>
            </div>
          </div>
        </td>
        <td><span class="bdu-badge bdu-badge-primary">${m.category}</span></td>
        <td><strong>${m.role}</strong></td>
        <td>${m.unit}</td>
        <td style="font-size:12.5px; line-height:1.4;">${m.tasks}</td>
        <td style="text-align:center;">
          <span class="bdu-badge bdu-badge-success">${m.status} (${m.progress})</span>
        </td>
      </tr>
    `;
  }).join('');
}

// 2. Staff Rendering (Section 2)
function renderStaff() {
  const grid = document.getElementById('staffGrid');
  const taskTbody = document.getElementById('staffTaskTableBody');
  if (!grid) return;

  const deptVal = document.getElementById('filterStaffDept')?.value || 'ALL';
  const q = (document.getElementById('searchStaff')?.value || '').toLowerCase().trim();

  let filtered = state.staff.filter(s => {
    const mDept = deptVal === 'ALL' || s.dept === deptVal;
    const mQ = !q || s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q) || s.tasks.toLowerCase().includes(q);
    return mDept && mQ;
  });

  filtered = sortVietnamese(filtered, 'name', state.sortStaffAsc);

  const totalBadge = document.getElementById('staffTotalBadge');
  if (totalBadge) totalBadge.textContent = `${filtered.length} Nhân Viên`;

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--text-muted);">Không tìm thấy nhân viên phù hợp.</div>`;
  } else {
    grid.innerHTML = filtered.map(s => {
      const initials = s.name.split(' ').map(n => n[0]).slice(-2).join('').toUpperCase();
      return `
        <div class="student-profile-card">
          <div class="student-card-top">
            <div class="student-avatar-circle" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
              ${initials}
            </div>
            <div class="student-name-wrap">
              <h4 title="${s.name}">${s.name}</h4>
              <span>Mã NV: <strong>${s.code}</strong> • <strong style="color:var(--bdu-accent);">${s.dept}</strong></span>
            </div>
          </div>
          <div class="student-details-list">
            <div class="student-row"><span class="lbl"><i class="fa-solid fa-id-badge"></i> Chức Danh:</span><span class="val" style="font-weight:700; color:var(--text-main);">${s.role}</span></div>
            <div class="student-row"><span class="lbl"><i class="fa-solid fa-door-open"></i> Phòng:</span><span class="val">${s.office}</span></div>
            <div class="student-row"><span class="lbl"><i class="fa-solid fa-phone"></i> Điện Thoại:</span><span class="val">${s.phone}</span></div>
            <div class="student-row"><span class="lbl"><i class="fa-solid fa-envelope"></i> Email:</span><span class="val" style="font-size:11px;">${s.email}</span></div>
            <div class="student-row"><span class="lbl"><i class="fa-solid fa-list-check"></i> Nhiệm Vụ:</span><span class="val" style="font-size:11.5px; color:var(--text-muted);">${s.tasks}</span></div>
          </div>
          <div class="student-card-foot">
            <span class="badge badge-student-active"><i class="fa-solid fa-circle" style="font-size:6px;"></i> Đang công tác</span>
            <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteStaff(${s.id})" title="Xóa"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Staff Task Assignment Table
  if (taskTbody) {
    taskTbody.innerHTML = state.staff.map((s, idx) => `
      <tr>
        <td style="text-align:center; font-weight:700;">${idx + 1}</td>
        <td><strong>${s.name}</strong> <small style="color:var(--text-muted); display:block;">${s.code}</small></td>
        <td><span class="bdu-badge bdu-badge-primary">${s.role}</span></td>
        <td>${s.dept}</td>
        <td style="font-size:12.5px;">${s.tasks}</td>
        <td style="text-align:center;"><span class="bdu-badge bdu-badge-success">Đang thực hiện</span></td>
      </tr>
    `).join('');
  }
}

function deleteStaff(id) {
  if (confirm('Bạn có chắc chắn muốn xóa nhân viên này?')) {
    state.staff = state.staff.filter(s => s.id !== id);
    renderStaff();
    updateCounters();
    showToast('Đã xóa hồ sơ nhân viên thành công!', 'info');
  }
}

// 3. Lecturers Rendering (Section 3)
function renderLecturers() {
  const grid = document.getElementById('lecturerGrid');
  if (!grid) return;
  const deptVal = document.getElementById('filterLecturerDept')?.value || 'ALL';
  const degVal = document.getElementById('filterLecturerDegree')?.value || 'ALL';
  const statVal = document.getElementById('filterLecturerStatus')?.value || 'ALL';
  const q = (document.getElementById('searchLecturer')?.value || '').toLowerCase().trim();

  let filtered = state.lecturers.filter(l => {
    const mDept = deptVal === 'ALL' || l.department === deptVal;
    const mDeg = degVal === 'ALL' || l.degree.includes(degVal);
    const mStat = statVal === 'ALL' || l.status === statVal;
    const mQ = !q || l.name.toLowerCase().includes(q) || l.code.toLowerCase().includes(q) || l.email.toLowerCase().includes(q);
    return mDept && mDeg && mStat && mQ;
  });

  filtered = sortVietnamese(filtered, 'name', state.sortLecturersAsc);

  const totalBadge = document.getElementById('lecturerTotalBadge');
  if (totalBadge) totalBadge.textContent = `${filtered.length} Giảng Viên`;

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--text-muted);">Không tìm thấy giảng viên phù hợp.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(l => {
    const initials = l.name.replace(/^(TS\.|ThS\.|PGS\.TS\.|GS\.TS\.|CN\.)\s*/i, '').split(' ').map(n => n[0]).slice(-2).join('').toUpperCase();
    return `
      <div class="student-profile-card">
        <div class="student-card-top">
          <div class="student-avatar-circle" style="background: linear-gradient(135deg, var(--bdu-primary) 0%, #002d45 100%);">
            ${initials}
          </div>
          <div class="student-name-wrap">
            <h4 title="${l.name}">${l.name}</h4>
            <span>Mã CB: <strong>${l.code}</strong> • <strong style="color: var(--bdu-primary);">${l.degree}</strong></span>
          </div>
        </div>
        <div class="student-details-list">
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-sitemap"></i> Bộ Môn:</span><span class="val">${l.department.replace('Bộ môn ', '')}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-id-badge"></i> Chức Vụ:</span><span class="val" style="color:var(--text-main); font-weight:700;">${l.position}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-user-group"></i> Cố Vấn:</span><span class="val" style="color:var(--bdu-primary); font-weight:700;">${l.advisingClass || 'Không'}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-envelope"></i> Email:</span><span class="val" style="font-size:11px;">${l.email}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-book-open"></i> Học Phần:</span><span class="val" style="font-size:11.5px; color:var(--text-muted);">${l.modules}</span></div>
        </div>
        <div class="student-card-foot">
          <span class="badge badge-student-active"><i class="fa-solid fa-circle" style="font-size:6px;"></i> ${l.status}</span>
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteLecturer(${l.id})" title="Xóa"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

function deleteLecturer(id) {
  if (confirm('Bạn có chắc chắn muốn xóa giảng viên này?')) {
    state.lecturers = state.lecturers.filter(l => l.id !== id);
    renderLecturers();
    updateCounters();
    showToast('Đã xóa giảng viên thành công!', 'info');
  }
}

// 4. Collaborators Rendering (Section 4)
function renderCollaborators() {
  const grid = document.getElementById('collaboratorGrid');
  if (!grid) return;
  const roleVal = document.getElementById('filterCollabRole')?.value || 'ALL';
  const q = (document.getElementById('searchCollaborator')?.value || '').toLowerCase().trim();

  let filtered = state.collaborators.filter(c => {
    const mRole = roleVal === 'ALL' || c.role === roleVal;
    const mQ = !q || c.name.toLowerCase().includes(q) || c.org.toLowerCase().includes(q) || c.courses.toLowerCase().includes(q);
    return mRole && mQ;
  });

  filtered = sortVietnamese(filtered, 'name', state.sortCollaboratorsAsc);

  const totalBadge = document.getElementById('collaboratorTotalBadge');
  if (totalBadge) totalBadge.textContent = `${filtered.length} Cộng Tác Viên`;

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--text-muted);">Không tìm thấy cộng tác viên phù hợp.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(c => {
    const initials = c.name.replace(/^(TS\.|ThS\.|CN\.|Ông|Bà)\s*/i, '').split(' ').map(n => n[0]).slice(-2).join('').toUpperCase();
    return `
      <div class="student-profile-card">
        <div class="student-card-top">
          <div class="student-avatar-circle" style="background: linear-gradient(135deg, #d97706 0%, #78350f 100%);">
            ${initials}
          </div>
          <div class="student-name-wrap">
            <h4 title="${c.name}">${c.name}</h4>
            <span>Mã CTV: <strong>${c.code}</strong> • ${c.degree}</span>
          </div>
        </div>
        <div class="student-details-list">
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-tag"></i> Phân Loại:</span><span class="badge badge-role">${c.role}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-building-columns"></i> Đơn Vị:</span><span class="val">${c.org}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-chalkboard-user"></i> Học Phần:</span><span class="val" style="color:var(--bdu-primary); font-weight:700;">${c.courses}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-clock"></i> Khối Lượng:</span><span class="val">${c.hours} Giờ / Kỳ (${c.contract})</span></div>
        </div>
        <div class="student-card-foot">
          <span class="badge badge-student-active">${c.contract}</span>
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteCollaborator(${c.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

function deleteCollaborator(id) {
  if (confirm('Bạn có chắc chắn muốn xóa cộng tác viên này?')) {
    state.collaborators = state.collaborators.filter(c => c.id !== id);
    renderCollaborators();
    updateCounters();
    showToast('Đã xóa cộng tác viên thành công!', 'info');
  }
}

// 5. Students Rendering (Section 5)
function renderStudents() {
  const grid = document.getElementById('studentGrid');
  if (!grid) return;
  const cohVal = document.getElementById('filterStudentCohort')?.value || 'ALL';
  const majVal = document.getElementById('filterStudentMajor')?.value || 'ALL';
  const statVal = document.getElementById('filterStudentStatus')?.value || 'ALL';
  const q = (document.getElementById('searchStudent')?.value || '').toLowerCase().trim();

  let filtered = state.students.filter(s => {
    const mCoh = cohVal === 'ALL' || s.cohort === cohVal;
    const mMaj = majVal === 'ALL' || s.major === majVal;
    const mStat = statVal === 'ALL' || s.status === statVal;
    const mQ = !q || s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q) || s.advisor.toLowerCase().includes(q);
    return mCoh && mMaj && mStat && mQ;
  });

  filtered = sortVietnamese(filtered, 'name', state.sortStudentsAsc);

  const totalBadge = document.getElementById('studentTotalBadge');
  if (totalBadge) totalBadge.textContent = `${filtered.length} Sinh Viên`;

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--text-muted);">Không tìm thấy hồ sơ sinh viên phù hợp.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    let statusClass = 'badge-student-active';
    let cardBorder = '';
    if (s.status === 'Bằng khen') { statusClass = 'badge-student-award'; cardBorder = 'award-border'; }
    if (s.status === 'Cảnh báo') { statusClass = 'badge-student-warn'; cardBorder = 'warn-border'; }
    if (s.status === 'Nghỉ học') { statusClass = 'badge-student-leave'; cardBorder = 'leave-border'; }
    const initials = s.name.split(' ').map(n => n[0]).slice(-2).join('').toUpperCase();

    return `
      <div class="student-profile-card ${cardBorder}">
        <div class="student-card-top">
          <div class="student-avatar-circle">${initials}</div>
          <div class="student-name-wrap">
            <h4 title="${s.name}">${s.name}</h4>
            <span>MSSV: <strong>${s.code}</strong> • ${s.cohort}</span>
          </div>
        </div>
        <div class="student-details-list">
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-graduation-cap"></i> Chuyên Ngành:</span><span class="val">${s.major}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-chart-line"></i> GPA:</span><span class="val" style="color:${s.gpa < 2.0 ? 'var(--bdu-red)' : 'var(--bdu-primary)'}; font-weight:800;">${s.gpa.toFixed(2)}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-user-tie"></i> Cố Vấn:</span><span class="val">${s.advisor}</span></div>
          <div class="student-row"><span class="lbl"><i class="fa-solid fa-envelope"></i> Email:</span><span class="val" style="font-size:11px;">${s.email}</span></div>
        </div>
        <div class="student-card-foot">
          <span class="badge ${statusClass}"><i class="fa-solid fa-circle" style="font-size:6px;"></i> ${s.status}</span>
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteStudent(${s.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

function deleteStudent(id) {
  if (confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
    state.students = state.students.filter(s => s.id !== id);
    renderStudents();
    updateCounters();
    showToast('Đã xóa hồ sơ sinh viên!', 'info');
  }
}

// 5. Evidence Hub Rendering
function renderEvidenceHub() {
  populateFolderSelect();
  renderFolderGrid();
  renderEvidenceMainArea();
}

function populateFolderSelect() {
  const filterSelect = document.getElementById('filterEvidenceFolder');
  const modalSelect = document.getElementById('evFolderSelect');
  const optionsHtml = state.evidenceFolders.map(f => `<option value="${f.id}">📁 ${f.name} (${f.category})</option>`).join('');
  if (filterSelect) filterSelect.innerHTML = `<option value="ALL">📁 Tất cả thư mục Drive</option>` + optionsHtml;
  if (modalSelect) modalSelect.innerHTML = optionsHtml;

  const stuSelect = document.getElementById('evStudentSelect');
  if (stuSelect) {
    stuSelect.innerHTML = state.students.map(s => `<option value="${s.code}">${s.name} - MSSV: ${s.code} (${s.cohort})</option>`).join('');
  }
}

function renderFolderGrid() {
  const grid = document.getElementById('folderGrid');
  if (!grid) return;
  grid.innerHTML = state.evidenceFolders.map(f => {
    const fileCount = state.evidence.filter(e => e.folderId === f.id).length;
    const isActive = state.activeFolderFilter === f.id;
    return `
      <div class="bdu-folder-card ${isActive ? 'active' : ''}" onclick="navigateToFolder('${f.id}')">
        <i class="fa-brands fa-google-drive folder-icon"></i>
        <div class="folder-info">
          <h4>${f.name}</h4>
          <span>${fileCount} minh chứng • ${f.category}</span>
        </div>
      </div>
    `;
  }).join('');
}

function navigateToFolder(fId) {
  state.activeFolderFilter = fId;
  const select = document.getElementById('filterEvidenceFolder');
  if (select) select.value = fId;
  renderFolderGrid();
  renderEvidenceMainArea();
}

function setEvidenceViewMode(mode) {
  state.evidenceViewMode = mode;
  document.querySelectorAll('.bdu-view-switcher .view-btn').forEach(b => {
    b.classList.toggle('active', b.id === `btnView${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
  });
  renderEvidenceMainArea();
}

function renderEvidenceMainArea() {
  const container = document.getElementById('evidenceMainDisplayArea');
  if (!container) return;

  const fVal = state.activeFolderFilter;
  const catVal = document.getElementById('filterEvidenceCat')?.value || 'ALL';
  const q = (document.getElementById('searchEvidence')?.value || '').toLowerCase().trim();

  const filtered = state.evidence.filter(e => {
    const mFold = fVal === 'ALL' || e.folderId === fVal;
    const mCat = catVal === 'ALL' || e.category === catVal;
    const mQ = !q || e.title.toLowerCase().includes(q) || e.studentName.toLowerCase().includes(q) || e.location.toLowerCase().includes(q);
    return mFold && mCat && mQ;
  });

  const totalBadge = document.getElementById('evidenceTotalBadge');
  if (totalBadge) totalBadge.textContent = `${filtered.length} Minh Chứng`;

  if (!filtered.length) {
    container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted); background:var(--bg-card); border-radius:var(--radius-md);">Chưa có minh chứng hoạt động nào.</div>`;
    return;
  }

  if (state.evidenceViewMode === 'cards' || state.evidenceViewMode === 'gallery') {
    container.innerHTML = `
      <div class="bdu-evidence-gallery">
        ${filtered.map(ev => `
          <div class="bdu-evidence-card">
            <div class="evidence-thumb-wrap">
              <img src="${ev.imageUrl}" alt="${ev.title}" class="evidence-thumb-img">
              <span class="evidence-points-chip">+${ev.points} ĐRL</span>
            </div>
            <div class="evidence-content-body">
              <div style="margin-bottom:6px;"><span class="badge badge-role">${ev.category}</span></div>
              <h4>${ev.title}</h4>
              <div class="evidence-5w-meta">
                <div class="meta-5w-item"><i class="fa-solid fa-user"></i> <span>${ev.studentName} (${ev.studentCode})</span></div>
                <div class="meta-5w-item"><i class="fa-solid fa-calendar-day"></i> <span>${ev.datetime}</span></div>
                <div class="meta-5w-item"><i class="fa-solid fa-location-dot"></i> <span>${ev.location}</span></div>
                <div class="meta-5w-item"><i class="fa-solid fa-stamp"></i> <span>${ev.issuer}</span></div>
              </div>
              <div class="evidence-card-foot">
                <a href="${ev.driveUrl}" target="_blank" class="bdu-btn bdu-btn-secondary bdu-btn-sm" style="color:var(--gdrive-color);">
                  <i class="fa-brands fa-google-drive"></i> Link Drive
                </a>
                <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteEvidence(${ev.id})"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  if (state.evidenceViewMode === 'table') {
    container.innerHTML = `
      <div class="bdu-table-card">
        <table class="bdu-data-table">
          <thead>
            <tr>
              <th>What (Minh Chứng)</th>
              <th>Phân Loại</th>
              <th>Who (Sinh Viên)</th>
              <th>When</th>
              <th>Where</th>
              <th>Issuer</th>
              <th>Điểm RL</th>
              <th>Link Drive</th>
              <th class="no-print">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(ev => `
              <tr>
                <td><strong>${ev.title}</strong></td>
                <td><span class="badge badge-role">${ev.category}</span></td>
                <td>${ev.studentName} <small class="text-muted">(${ev.studentCode})</small></td>
                <td>${ev.datetime}</td>
                <td>${ev.location}</td>
                <td>${ev.issuer}</td>
                <td><span class="badge badge-student-award">+${ev.points} ĐRL</span></td>
                <td><a href="${ev.driveUrl}" target="_blank" class="text-gdrive" style="font-weight:600;"><i class="fa-brands fa-google-drive"></i> Drive</a></td>
                <td class="no-print">
                  <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteEvidence(${ev.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  if (state.evidenceViewMode === 'points') {
    const studentMap = {};
    state.students.forEach(s => studentMap[s.code] = { student: s, count: 0, total: 0 });
    state.evidence.forEach(e => {
      if (studentMap[e.studentCode]) {
        studentMap[e.studentCode].count++;
        studentMap[e.studentCode].total += (e.points || 0);
      }
    });

    container.innerHTML = `
      <div class="bdu-table-card">
        <table class="bdu-data-table">
          <thead>
            <tr>
              <th>MSSV</th>
              <th>Họ và Tên Sinh Viên</th>
              <th>Khóa</th>
              <th>Chuyên Ngành</th>
              <th>Số Minh Chứng Đã Nộp</th>
              <th>Tổng Điểm Rèn Luyện</th>
              <th>Xếp Loại RL</th>
            </tr>
          </thead>
          <tbody>
            ${Object.values(studentMap).map(item => `
              <tr>
                <td><strong>${item.student.code}</strong></td>
                <td>${item.student.name}</td>
                <td>${item.student.cohort}</td>
                <td>${item.student.major}</td>
                <td>${item.count} minh chứng</td>
                <td><strong style="color:var(--bdu-primary); font-size:15px;">+${item.total} ĐRL</strong></td>
                <td><span class="badge ${item.total >= 30 ? 'badge-student-award' : 'badge-student-active'}">${item.total >= 30 ? 'Xuất sắc' : 'Tốt'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

function deleteEvidence(id) {
  if (confirm('Bạn có chắc chắn muốn xóa minh chứng này?')) {
    state.evidence = state.evidence.filter(e => e.id !== id);
    renderEvidenceMainArea();
    updateCounters();
    showToast('Đã xóa minh chứng!', 'info');
  }
}

// 6. Training Rendering
function renderTrainingTable() {
  const tbody = document.getElementById('trainingTableBody');
  if (!tbody) return;
  const progVal = document.getElementById('filterTrainingProgram')?.value || 'ALL';
  const q = (document.getElementById('searchTraining')?.value || '').toLowerCase().trim();

  const filtered = state.training.filter(t => {
    const mProg = progVal === 'ALL' || t.program === progVal;
    const mQ = !q || t.name.toLowerCase().includes(q) || t.code.toLowerCase().includes(q) || t.lecturer.toLowerCase().includes(q);
    return mProg && mQ;
  });

  const avg = state.training.length ? Math.round(state.training.reduce((a, b) => a + b.attendance, 0) / state.training.length) : 0;
  const avgBadge = document.getElementById('trainingAvgBadge');
  if (avgBadge) avgBadge.textContent = `Chuyên cần TB: ${avg}%`;

  tbody.innerHTML = filtered.map(t => {
    const pct = Math.round((t.completedLessons / t.totalLessons) * 100);
    const isWarn = t.attendance < 80;
    return `
      <tr>
        <td><strong>${t.code}</strong></td>
        <td><strong>${t.name}</strong></td>
        <td>${t.lecturer}</td>
        <td><span class="badge badge-role">${t.program}</span></td>
        <td>
          <div class="progress-track"><div class="progress-bar" style="width: ${pct}%;"></div></div>
          <span>${t.completedLessons}/${t.totalLessons} buổi (${pct}%)</span>
        </td>
        <td><strong style="color:${isWarn ? 'var(--bdu-red)' : 'var(--bdu-green)'}; font-size:14px;">${t.attendance}%</strong></td>
        <td><span class="badge ${isWarn ? 'badge-student-warn' : 'badge-student-active'}">${isWarn ? 'Nguy cơ cấm thi' : 'Bình thường'}</span></td>
        <td class="no-print">
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm" onclick="incrementLesson(${t.id})">+1 Buổi</button>
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteTraining(${t.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  }).join('');
}

function incrementLesson(id) {
  const item = state.training.find(t => t.id === id);
  if (item && item.completedLessons < item.totalLessons) {
    item.completedLessons++;
    renderTrainingTable();
    showToast(`Đã cộng 1 buổi giảng dạy cho môn ${item.name}`, 'success');
  }
}

function deleteTraining(id) {
  if (confirm('Xóa học phần này?')) {
    state.training = state.training.filter(t => t.id !== id);
    renderTrainingTable();
    updateCounters();
    showToast('Đã xóa học phần!', 'info');
  }
}

// 7. Tasks & Events Rendering
function setTaskViewMode(mode) {
  state.taskViewMode = mode;
  document.getElementById('btnTaskViewTable')?.classList.toggle('active', mode === 'table');
  document.getElementById('btnTaskViewKanban')?.classList.toggle('active', mode === 'kanban');
  const tv = document.getElementById('taskTableView');
  const kv = document.getElementById('taskKanbanView');
  if (tv) tv.style.display = mode === 'table' ? 'block' : 'none';
  if (kv) kv.style.display = mode === 'kanban' ? 'grid' : 'none';
  renderTaskView();
}

function renderTaskView() {
  const roleVal = document.getElementById('filterTaskRole')?.value || 'ALL';
  const statVal = document.getElementById('filterTaskStatus')?.value || 'ALL';
  const q = (document.getElementById('searchTask')?.value || '').toLowerCase().trim();

  const filtered = state.tasks.filter(t => {
    const mRole = roleVal === 'ALL' || t.role === roleVal;
    const mStat = statVal === 'ALL' || t.status === statVal;
    const mQ = !q || t.title.toLowerCase().includes(q) || t.assignee.toLowerCase().includes(q);
    return mRole && mStat && mQ;
  });

  const pendingBadge = document.getElementById('taskPendingBadge');
  if (pendingBadge) {
    const pCount = state.tasks.filter(t => t.status !== 'Hoàn Thành').length;
    pendingBadge.textContent = `${pCount} Việc Cần Làm`;
  }

  if (state.taskViewMode === 'table') {
    const tbody = document.getElementById('taskTableBody');
    if (!tbody) return;
    tbody.innerHTML = filtered.map((t, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${t.title}</strong></td>
        <td><span class="badge badge-role">${t.role}</span></td>
        <td>${t.assignee}</td>
        <td>${t.deadline}</td>
        <td><span class="badge ${t.priority === 'Cao' ? 'badge-priority-high' : 'badge-priority-mid'}">${t.priority}</span></td>
        <td><span class="badge ${t.status === 'Hoàn Thành' ? 'badge-task-done' : (t.status === 'Đang Thực Hiện' ? 'badge-task-in-progress' : 'badge-task-todo')}" style="cursor:pointer;" onclick="cycleTaskStatus(${t.id})">${t.status}</span></td>
        <td class="no-print">
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm" onclick="cycleTaskStatus(${t.id})">Đổi Tiến Độ</button>
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteTask(${t.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `).join('');
  } else {
    const todo = filtered.filter(t => t.status === 'Chưa Thực Hiện');
    const doing = filtered.filter(t => t.status === 'Đang Thực Hiện');
    const done = filtered.filter(t => t.status === 'Hoàn Thành');

    document.getElementById('kanbanCountTodo').textContent = todo.length;
    document.getElementById('kanbanCountDoing').textContent = doing.length;
    document.getElementById('kanbanCountDone').textContent = done.length;

    const renderCard = (t) => `
      <div class="kanban-card">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span class="badge badge-role" style="font-size:10px;">${t.role}</span>
          <span class="badge ${t.priority === 'Cao' ? 'badge-priority-high' : 'badge-priority-mid'}" style="font-size:10px;">${t.priority}</span>
        </div>
        <h5>${t.title}</h5>
        <div class="kanban-card-meta">
          <div><i class="fa-solid fa-user-check"></i> ${t.assignee}</div>
          <div><i class="fa-regular fa-calendar"></i> ${t.deadline}</div>
        </div>
        <div class="kanban-card-actions">
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm" onclick="cycleTaskStatus(${t.id})">${t.status === 'Hoàn Thành' ? 'Làm Lại' : 'Tiếp Theo'}</button>
          <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteTask(${t.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `;

    document.getElementById('kanbanListTodo').innerHTML = todo.map(renderCard).join('') || '<div style="text-align:center; padding:15px; color:var(--text-muted);">Trống</div>';
    document.getElementById('kanbanListDoing').innerHTML = doing.map(renderCard).join('') || '<div style="text-align:center; padding:15px; color:var(--text-muted);">Trống</div>';
    document.getElementById('kanbanListDone').innerHTML = done.map(renderCard).join('') || '<div style="text-align:center; padding:15px; color:var(--text-muted);">Trống</div>';
  }
}

function cycleTaskStatus(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;
  const list = ['Chưa Thực Hiện', 'Đang Thực Hiện', 'Hoàn Thành'];
  task.status = list[(list.indexOf(task.status) + 1) % list.length];
  renderTaskView();
  updateCounters();
  showToast(`Cập nhật tiến độ: ${task.status}`, 'success');
}

function deleteTask(id) {
  if (confirm('Xóa công việc này?')) {
    state.tasks = state.tasks.filter(t => t.id !== id);
    renderTaskView();
    updateCounters();
    showToast('Đã xóa công việc!', 'info');
  }
}

// 8. Research Rendering
function renderResearchTable() {
  const tbody = document.getElementById('researchTableBody');
  if (!tbody) return;
  const levelVal = document.getElementById('filterResearchLevel')?.value || 'ALL';
  const q = (document.getElementById('searchResearch')?.value || '').toLowerCase().trim();

  const filtered = state.research.filter(r => {
    const mLevel = levelVal === 'ALL' || r.level === levelVal;
    const mQ = !q || r.title.toLowerCase().includes(q) || r.mentor.toLowerCase().includes(q) || r.students.toLowerCase().includes(q);
    return mLevel && mQ;
  });

  const badgeEl = document.getElementById('researchCountBadge');
  if (badgeEl) badgeEl.textContent = `${filtered.length} Đề Tài`;

  tbody.innerHTML = filtered.map(r => `
    <tr>
      <td><strong>${r.code}</strong></td>
      <td><strong>${r.title}</strong></td>
      <td>${r.students}</td>
      <td>${r.mentor}</td>
      <td><span class="badge badge-role">${r.level}</span></td>
      <td>${r.output}</td>
      <td><span class="badge ${r.status === 'Đã nghiệm thu' ? 'badge-student-award' : 'badge-task-in-progress'}" style="cursor:pointer;" onclick="toggleResearchStatus(${r.id})">${r.status}</span></td>
      <td class="no-print">
        <button class="bdu-btn bdu-btn-secondary bdu-btn-sm" onclick="toggleResearchStatus(${r.id})">${r.status === 'Đã nghiệm thu' ? 'Mở lại' : 'Nghiệm thu'}</button>
        <button class="bdu-btn bdu-btn-secondary bdu-btn-sm bdu-btn-icon-only text-danger" onclick="deleteResearch(${r.id})"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

function toggleResearchStatus(id) {
  const r = state.research.find(item => item.id === id);
  if (!r) return;
  r.status = r.status === 'Đã nghiệm thu' ? 'Đang triển khai' : 'Đã nghiệm thu';
  renderResearchTable();
  showToast(`Đã đổi trạng thái đề tài: ${r.status}`, 'success');
}

function deleteResearch(id) {
  if (confirm('Xóa đề tài NCKH này?')) {
    state.research = state.research.filter(r => r.id !== id);
    renderResearchTable();
    updateCounters();
    showToast('Đã xóa đề tài NCKH!', 'info');
  }
}

// 9. Dashboard Analytics & Charts
function renderDashboard() {
  document.getElementById('dashTotalStudents').textContent = state.students.length;
  const avgAtt = state.training.length ? Math.round(state.training.reduce((a, b) => a + b.attendance, 0) / state.training.length) : 0;
  document.getElementById('dashAvgAttendance').textContent = `${avgAtt}%`;
  const doneTasks = state.tasks.filter(t => t.status === 'Hoàn Thành').length;
  const pctTasks = state.tasks.length ? Math.round((doneTasks / state.tasks.length) * 100) : 0;
  document.getElementById('dashTaskCompleted').textContent = `${pctTasks}%`;
  document.getElementById('dashTotalResearch').textContent = state.research.length;

  const dl = document.getElementById('dashUpcomingDeadlines');
  if (dl) {
    const up = state.tasks.filter(t => t.status !== 'Hoàn Thành').slice(0, 4);
    dl.innerHTML = up.map(t => `
      <li>
        <div><strong>${t.title}</strong><div style="font-size:11.5px; color:var(--text-muted);">${t.assignee} (${t.role})</div></div>
        <span class="badge ${t.priority === 'Cao' ? 'badge-priority-high' : 'badge-priority-mid'}">${t.deadline}</span>
      </li>
    `).join('');
  }

  const al = document.getElementById('dashAwardeeList');
  if (al) {
    const aw = state.students.filter(s => s.status === 'Bằng khen' || s.gpa >= 3.5).slice(0, 4);
    al.innerHTML = aw.map(s => `
      <li>
        <div><strong>${s.name}</strong> (${s.code})<div style="font-size:11.5px; color:var(--text-muted);">${s.major}</div></div>
        <span class="badge badge-student-award">GPA: ${s.gpa.toFixed(2)}</span>
      </li>
    `).join('');
  }

  if (typeof Chart !== 'undefined') {
    // Chart 1
    const c1 = document.getElementById('chartStudentStatus');
    if (c1) {
      if (state.charts.c1) state.charts.c1.destroy();
      const counts = { 'Đang học': 0, 'Bằng khen': 0, 'Cảnh báo': 0, 'Nghỉ học': 0 };
      state.students.forEach(s => counts[s.status] = (counts[s.status] || 0) + 1);
      state.charts.c1 = new Chart(c1, {
        type: 'pie',
        data: {
          labels: Object.keys(counts),
          datasets: [{ data: Object.values(counts), backgroundColor: ['#10B981', '#F59E0B', '#D32F2F', '#94A3B8'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }

    // Chart 2
    const c2 = document.getElementById('chartTaskRole');
    if (c2) {
      if (state.charts.c2) state.charts.c2.destroy();
      const roles = ['Giáo Vụ', 'GVCN', 'Đoàn Khoa'];
      const counts = roles.map(r => state.tasks.filter(t => t.role === r).length);
      state.charts.c2 = new Chart(c2, {
        type: 'bar',
        data: {
          labels: ['Giáo Vụ', 'GVCN', 'Đoàn Khoa'],
          datasets: [{ label: 'Nhiệm vụ', data: counts, backgroundColor: '#005F87' }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }

    // Chart 3
    const c3 = document.getElementById('chartEvidenceCategory');
    if (c3) {
      if (state.charts.c3) state.charts.c3.destroy();
      const evCounts = { 'ĐTN/Hội SV': 0, 'Học thuật': 0, 'Rèn luyện': 0 };
      state.evidence.forEach(e => evCounts[e.category] = (evCounts[e.category] || 0) + 1);
      state.charts.c3 = new Chart(c3, {
        type: 'doughnut',
        data: {
          labels: Object.keys(evCounts),
          datasets: [{ data: Object.values(evCounts), backgroundColor: ['#005F87', '#0F9D58', '#F59E0B'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }

    // Chart 4
    const c4 = document.getElementById('chartResearchStatus');
    if (c4) {
      if (state.charts.c4) state.charts.c4.destroy();
      const resCounts = { 'Cấp Khoa': 0, 'Cấp Trường': 0 };
      state.research.forEach(r => resCounts[r.level] = (resCounts[r.level] || 0) + 1);
      state.charts.c4 = new Chart(c4, {
        type: 'bar',
        data: {
          labels: Object.keys(resCounts),
          datasets: [{ label: 'Đề tài', data: Object.values(resCounts), backgroundColor: ['#0284c7', '#D32F2F'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }
  }
}

// 10. BGH Administrative Report Engine (Weekly, Monthly, Quarterly, Annual & Thematic)

const REPORT_PERIOD_PRESETS = {
  week: [
    { label: 'Tuần 09 (24/08/2026 - 30/08/2026) [Hiện tại]', docNum: '35/BC-KNN-W09' },
    { label: 'Tuần 08 (17/08/2026 - 23/08/2026)', docNum: '32/BC-KNN-W08' },
    { label: 'Tuần 07 (10/08/2026 - 16/08/2026)', docNum: '29/BC-KNN-W07' },
    { label: 'Tuần 06 (03/08/2026 - 09/08/2026)', docNum: '26/BC-KNN-W06' },
    { label: 'Tuần 10 (31/08/2026 - 06/09/2026) [Kế hoạch]', docNum: '38/BC-KNN-W10' }
  ],
  month: [
    { label: 'Tháng 08/2026 (Định kỳ Tháng 8) [Hiện tại]', docNum: '128/BC-KNN-T08' },
    { label: 'Tháng 07/2026 (Định kỳ Tháng 7)', docNum: '115/BC-KNN-T07' },
    { label: 'Tháng 06/2026 (Định kỳ Tháng 6)', docNum: '102/BC-KNN-T06' },
    { label: 'Tháng 09/2026 (Dự thảo Kế hoạch)', docNum: '140/BC-KNN-T09' }
  ],
  quarter: [
    { label: 'Quý III/2026 (Tháng 7 - Tháng 9/2026) [Hiện tại]', docNum: '42/BC-KNN-Q3' },
    { label: 'Quý II/2026 (Tháng 4 - Tháng 6/2026)', docNum: '36/BC-KNN-Q2' },
    { label: 'Quý I/2026 (Tháng 1 - Tháng 3/2026)', docNum: '28/BC-KNN-Q1' },
    { label: 'Sơ kết Học kỳ I (Năm học 2026 - 2027)', docNum: '55/BC-KNN-HK1' }
  ],
  year: [
    { label: 'Tổng kết Năm học 2026 - 2027 [Hiện tại]', docNum: '2026/BC-KNN-NH2627' },
    { label: 'Tổng kết Năm học 2025 - 2026', docNum: '2025/BC-KNN-NH2526' },
    { label: 'Chiến lược Phát triển Khoa 2026 - 2030', docNum: '88/BC-KNN-CL30' }
  ]
};

function populateReportPeriodDropdown() {
  const select = document.getElementById('selectReportPeriod');
  const lbl = document.getElementById('lblReportPeriodSelect');
  if (!select) return;

  const cat = state.reportCategory || 'week';
  const presets = REPORT_PERIOD_PRESETS[cat] || REPORT_PERIOD_PRESETS.week;

  if (lbl) {
    if (cat === 'week') lbl.innerHTML = '<i class="fa-regular fa-clock"></i> Chọn Tuần Báo Cáo:';
    else if (cat === 'month') lbl.innerHTML = '<i class="fa-regular fa-calendar"></i> Chọn Tháng Báo Cáo:';
    else if (cat === 'quarter') lbl.innerHTML = '<i class="fa-solid fa-chart-pie"></i> Chọn Quý / Học Kỳ:';
    else lbl.innerHTML = '<i class="fa-solid fa-award"></i> Chọn Năm Học / Niên Khóa:';
  }

  select.innerHTML = presets.map((p, idx) => `
    <option value="${p.label}" data-doc="${p.docNum}" ${idx === 0 ? 'selected' : ''}>${p.label}</option>
  `).join('');

  if (presets[0]) {
    state.reportPeriod = presets[0].label;
    state.reportDocNum = presets[0].docNum;
    const docInput = document.getElementById('inputReportDocNum');
    if (docInput) docInput.value = state.reportDocNum;
  }
}

function switchReportCategory(category) {
  state.reportCategory = category;
  state.reportTemplateKey = null;
  state.customReportHtml = null;

  document.querySelectorAll('.bdu-report-cat-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`catCard${category.charAt(0).toUpperCase() + category.slice(1)}`);
  if (activeCard) activeCard.classList.add('active');

  populateReportPeriodDropdown();
  renderAdministrativeReport();
  showToast(`Đã chuyển sang ${getCategoryTitle(category)}`, 'info');
}

function openReportCategory(category) {
  switchToTab('tab-reports');
  switchReportCategory(category);
}

function getCategoryTitle(cat) {
  switch (cat) {
    case 'week': return 'Báo Cáo Tuần';
    case 'month': return 'Báo Cáo Tháng';
    case 'quarter': return 'Báo Cáo Quý / Học Kỳ';
    case 'year': return 'Báo Cáo Năm Học';
    default: return 'Báo Cáo Hành Chính';
  }
}

function onReportPeriodChange() {
  const select = document.getElementById('selectReportPeriod');
  if (!select) return;
  const opt = select.options[select.selectedIndex];
  if (opt) {
    state.reportPeriod = opt.value;
    const doc = opt.getAttribute('data-doc');
    if (doc) {
      state.reportDocNum = doc;
      const docInput = document.getElementById('inputReportDocNum');
      if (docInput) docInput.value = doc;
    }
  }
  state.customReportHtml = null;
  renderAdministrativeReport();
}

function onReportMetaChange() {
  const docInput = document.getElementById('inputReportDocNum');
  const signerSelect = document.getElementById('selectReportSigner');
  const dateInput = document.getElementById('inputReportDate');

  if (docInput) state.reportDocNum = docInput.value.trim() || '.../BC-KNN';
  if (signerSelect) {
    const val = signerSelect.value;
    const [name, title] = val.split('|');
    state.reportSigner = name || 'TS. Nguyễn Văn A';
    state.reportSignerTitle = title || 'TRƯỞNG KHOA NGOẠI NGỮ';
  }
  if (dateInput && dateInput.value) {
    state.reportDate = dateInput.value;
  }
  renderAdministrativeReport();
}

function toggleReportEditMode() {
  state.isEditingReport = !state.isEditingReport;
  const paper = document.getElementById('reportContentArea');
  const notice = document.getElementById('reportEditNotice');
  const btnLbl = document.getElementById('lblEditReportBtn');

  if (paper) {
    paper.contentEditable = state.isEditingReport ? 'true' : 'false';
    if (state.isEditingReport) {
      paper.classList.add('is-editing');
      if (notice) notice.style.display = 'flex';
      if (btnLbl) btnLbl.textContent = 'Khóa & Lưu Soạn Thảo';
      showToast('Đã kích hoạt chế độ soạn thảo văn bản trực tiếp.', 'warning');
    } else {
      paper.classList.remove('is-editing');
      if (notice) notice.style.display = 'none';
      if (btnLbl) btnLbl.textContent = 'Chỉnh Sửa Trực Tiếp';
      state.customReportHtml = paper.innerHTML;
      showToast('Đã lưu nội dung chỉnh sửa của báo cáo.', 'success');
    }
  }
}

function saveReportEdits() {
  if (state.isEditingReport) {
    toggleReportEditMode();
  }
}

function resetReportToLive() {
  state.customReportHtml = null;
  state.reportTemplateKey = null;
  state.isEditingReport = false;
  const paper = document.getElementById('reportContentArea');
  const notice = document.getElementById('reportEditNotice');
  const btnLbl = document.getElementById('lblEditReportBtn');
  if (paper) {
    paper.contentEditable = 'false';
    paper.classList.remove('is-editing');
  }
  if (notice) notice.style.display = 'none';
  if (btnLbl) btnLbl.textContent = 'Chỉnh Sửa Trực Tiếp';

  renderAdministrativeReport();
  showToast('Đã đồng bộ lại dữ liệu báo cáo trực tiếp từ hệ thống!', 'success');
}

function loadReportTemplate(templateKey) {
  state.reportTemplateKey = templateKey;
  state.customReportHtml = null;
  renderAdministrativeReport();
  showToast(`Đã tải Mẫu Báo Cáo Chuyên Đề: ${templateKey.toUpperCase()}`, 'info');
}

function printReportDocument() {
  window.print();
}

// Sub-generator: Header & Signature
function getReportHeaderHtml(docNum, reportDateStr) {
  const d = reportDateStr ? new Date(reportDateStr) : new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `
    <div class="report-national-header">
      <div class="report-org">
        <strong>BỘ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
        <strong>TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong><br>
        <strong>KHOA NGOẠI NGỮ</strong><br>
        <span>Số: <strong>${docNum || state.reportDocNum || '35/BC-KNN'}</strong></span>
      </div>
      <div class="report-national">
        <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
        <strong>Độc lập - Tự do - Hạnh phúc</strong><br>
        <div style="width: 140px; height: 1px; background: #000; margin: 4px auto 8px;"></div>
        <em>Bình Dương, ngày ${day} tháng ${month} năm ${year}</em>
      </div>
    </div>
  `;
}

function getReportSignatureHtml() {
  const signerName = state.reportSigner || 'TS. Nguyễn Văn A';
  const signerTitle = state.reportSignerTitle || 'TRƯỞNG KHOA NGOẠI NGỮ';

  return `
    <div class="report-signature-grid">
      <div class="sig-col">
        <strong>NƠI NHẬN:</strong><br>
        <div style="text-align: left; font-size: 11.5px; margin-top: 4px; line-height: 1.4;">
          - Ban Giám Hiệu (để b/c);<br>
          - Phòng Đào tạo, QLKH;<br>
          - Các Bộ môn & Cố vấn HT;<br>
          - Lưu: VT, KNN.
        </div>
      </div>
      <div class="sig-col">
        <strong>${signerTitle}</strong><br>
        <small>(Ký, ghi rõ họ tên và đóng dấu)</small><br><br><br><br>
        <strong>${signerName}</strong>
      </div>
    </div>
  `;
}

// 1. Weekly Report Generator
function generateWeeklyReportHtml() {
  const totalStu = state.students.length;
  const activeStu = state.students.filter(s => s.status === 'Đang học').length;
  const warnStu = state.students.filter(s => s.status === 'Cảnh báo').length;
  const totalCourses = state.training.length;
  const avgAtt = totalCourses ? Math.round(state.training.reduce((a, b) => a + b.attendance, 0) / totalCourses) : 0;
  const totalTasks = state.tasks.length;
  const doneTasks = state.tasks.filter(t => t.status === 'Hoàn Thành').length;
  const inProgTasks = state.tasks.filter(t => t.status === 'Đang Thực Hiện').length;
  const weekEvi = state.evidence.slice(0, 3);
  const weekPoints = weekEvi.reduce((a, b) => a + (b.points || 0), 0);

  const courseRows = state.training.map((c, i) => `
    <tr>
      <td style="text-align:center;">${i + 1}</td>
      <td><strong>${c.code}</strong> - ${c.name}</td>
      <td>${c.lecturer}</td>
      <td style="text-align:center;">${c.students} SV</td>
      <td style="text-align:center; font-weight:700; color:${c.attendance >= 90 ? '#15803d' : '#b91c1c'};">${c.attendance}%</td>
      <td>${c.attendance >= 90 ? 'Lớp học nghiêm túc, đúng giờ' : 'Cần tăng cường nhắc nhở điểm danh'}</td>
    </tr>
  `).join('');

  return `
    ${getReportHeaderHtml(state.reportDocNum, state.reportDate)}

    <div class="report-main-title">
      <h2>BÁO CÁO CÔNG TÁC HỌC VỤ & ĐÀO TẠO TUẦN</h2>
      <p>Thời gian thực hiện: <strong>${state.reportPeriod}</strong></p>
      <p style="margin-top: 4px;">Kính gửi: <strong>BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong></p>
    </div>

    <div class="report-body">
      <p>Căn cứ Lịch công tác tuần của Trường Đại học Bình Dương; Khoa Ngoại Ngữ trân trọng báo cáo Ban Giám Hiệu tình hình giảng dạy, quản lý sinh viên và các hoạt động trọng tâm diễn ra trong tuần như sau:</p>

      <h4>I. TÌNH HÌNH GIẢNG DẠY & NỀ NẾP LỚP HỌC TRONG TUẦN</h4>
      <p>- Tổng số học phần đang vận hành trong tuần: <strong>${totalCourses} lớp học phần</strong> thuộc các chuyên ngành Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật Bản và Ngôn ngữ Hàn Quốc.</p>
      <p>- Tỷ lệ chuyên cần bình quân toàn Khoa trong tuần: đạt <strong>${avgAtt}%</strong> (Sinh viên tham gia đầy đủ, đúng giờ quy định).</p>
      <p>- Tình hình thực hiện giờ giảng của Giảng viên: 100% giảng viên cơ hữu và thỉnh giảng lên lớp đúng lịch phân công, áp dụng phương pháp tương tác thực hành.</p>

      <table class="report-table-formal">
        <thead>
          <tr>
            <th style="width: 40px;">STT</th>
            <th>Học Phần</th>
            <th>Giảng Viên Phụ Trách</th>
            <th style="width: 70px;">Sĩ Số</th>
            <th style="width: 90px;">Chuyên Cần</th>
            <th>Đánh Giá Nề Nếp</th>
          </tr>
        </thead>
        <tbody>
          ${courseRows}
        </tbody>
      </table>

      <h4>II. CÔNG TÁC HỌC VỤ, CỐ VẤN HỌC TẬP (GVCN) & TÂN SINH VIÊN</h4>
      <p>- Tổng số sinh viên toàn khoa: <strong>${totalStu} sinh viên</strong> (Đang học: ${activeStu}, Cảnh báo học vụ theo dõi sát: ${warnStu} SV).</p>
      <p>- Đội ngũ GVCN đã tổ chức họp sinh hoạt lớp định kỳ tuần, tư vấn phương pháp học tập ngoại ngữ cho <strong>Tân sinh viên Khóa 28 (K28)</strong> và hướng dẫn đăng ký học phần bổ trợ.</p>
      <p>- Xử lý kịp thời 100% các yêu cầu xác nhận bảng điểm, giấy xác nhận sinh viên và hỗ trợ học bổng chính sách.</p>

      <h4>III. TIẾN ĐỘ THỰC HIỆN NHIỆM VỤ 3 KHỐI VAI TRÒ TRONG TUẦN</h4>
      <p>- Đã hoàn thành <strong>${doneTasks}/${totalTasks} nhiệm vụ</strong> (${totalTasks ? Math.round((doneTasks/totalTasks)*100) : 0}% khối lượng được giao trong tuần).</p>
      <p>- Đang triển khai khẩn trương <strong>${inProgTasks} nhiệm vụ</strong> (chuẩn bị đề cương giữa kỳ, rà soát học liệu LMS, cập nhật hồ sơ kiểm định).</p>

      <h4>IV. HOẠT ĐỘNG PHONG TRÀO, MINH CHỨNG 5W & CLB NGOẠI NGỮ</h4>
      <p>- Trong tuần đã tiếp nhận và thẩm định <strong>${weekEvi.length} minh chứng 5W</strong> hoạt động rèn luyện mới, ghi nhận cộng dồn <strong>+${weekPoints} điểm rèn luyện</strong> cho sinh viên.</p>
      <p>- CLB Tiếng Anh ETC và CLB Hán Ngữ duy trì buổi sinh hoạt Speaking Club với chủ đề "AI in Language Learning", thu hút hơn 45 sinh viên tham gia sôi nổi.</p>

      <h4>V. KẾ HOẠCH TRỌNG TÂM TUẦN TIẾP THEO</h4>
      <p>1. Tổ chức kiểm tra đánh giá tiến độ học tập giữa kỳ cho các lớp Tiếng Anh giao tiếp và Hán ngữ thương mại.</p>
      <p>2. Đôn đốc các nhóm sinh viên NCKH hoàn thiện báo cáo giai đoạn 1 nộp Hội đồng nghiệm thu cấp Khoa.</p>
      <p>3. Phối hợp Phòng Tuyển sinh & Truyền thông tổ chức Workshop hướng nghiệp sinh viên K25, K26.</p>

      <h4>VI. ĐỀ XUẤT & KIẾN NGHỊ BAN GIÁM HIỆU</h4>
      <p>- Kính đề nghị Ban Giám Hiệu phê duyệt kế hoạch mời 02 Chuyên gia Doanh nghiệp FDI tham gia thỉnh giảng chuyên đề phiên dịch thương mại trong tháng tới.</p>
    </div>

    ${getReportSignatureHtml()}
  `;
}

// 2. Monthly Report Generator
function generateMonthlyReportHtml() {
  const totalStu = state.students.length;
  const activeStu = state.students.filter(s => s.status === 'Đang học').length;
  const awardStu = state.students.filter(s => s.status === 'Bằng khen').length;
  const warnStu = state.students.filter(s => s.status === 'Cảnh báo').length;

  const totalCourses = state.training.length;
  const avgAtt = totalCourses ? Math.round(state.training.reduce((a, b) => a + b.attendance, 0) / totalCourses) : 0;
  const totalEvi = state.evidence.length;
  const totalPts = state.evidence.reduce((a, b) => a + (b.points || 0), 0);
  const totalTasks = state.tasks.length;
  const doneTasks = state.tasks.filter(t => t.status === 'Hoàn Thành').length;
  const totalRes = state.research.length;
  const doneRes = state.research.filter(r => r.status === 'Đã nghiệm thu').length;

  // Cohort breakdown
  const cohorts = ['K25', 'K26', 'K27', 'K28'];
  const cohortStats = cohorts.map(c => {
    const list = state.students.filter(s => s.cohort === c);
    const avgGpa = list.length ? (list.reduce((a, b) => a + b.gpa, 0) / list.length).toFixed(2) : '0.00';
    return `
      <tr>
        <td style="text-align:center; font-weight:700;">Khóa ${c}</td>
        <td style="text-align:center;">${list.length} SV</td>
        <td style="text-align:center;">${avgGpa}</td>
        <td style="text-align:center;">${list.filter(s => s.status === 'Bằng khen').length}</td>
        <td style="text-align:center;">${list.filter(s => s.status === 'Cảnh báo').length}</td>
        <td>Đạt chỉ tiêu rèn luyện tháng</td>
      </tr>
    `;
  }).join('');

  return `
    ${getReportHeaderHtml(state.reportDocNum, state.reportDate)}

    <div class="report-main-title">
      <h2>BÁO CÁO TỔNG KẾT CÔNG TÁC THÁNG</h2>
      <p>Kỳ báo cáo: <strong>${state.reportPeriod}</strong></p>
      <p style="margin-top: 4px;">Kính gửi: <strong>BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong></p>
    </div>

    <div class="report-body">
      <p>Khoa Ngoại Ngữ kính trình Ban Giám Hiệu bản Báo cáo tổng kết toàn diện hoạt động đào tạo, quản trị học vụ, nghiên cứu khoa học và công tác sinh viên trong tháng với các nội dung trọng tâm như sau:</p>

      <h4>I. CÔNG TÁC ĐÀO TẠO & QUẢN TRỊ HỌC VỤ</h4>
      <p>- Tổng số sinh viên hiện diện: <strong>${totalStu} sinh viên</strong>. Trong đó: ${activeStu} sinh viên học tập bình thường, ${awardStu} sinh viên đạt thành tích xuất sắc, ${warnStu} sinh viên thuộc diện cần giám sát học vụ đặc biệt.</p>
      <p>- Triển khai đầy đủ <strong>${totalCourses} học phần</strong> đúng tiến độ khung chương trình đào tạo của Nhà trường, tỷ lệ chuyên cần trung bình toàn khóa đạt <strong>${avgAtt}%</strong>.</p>
      
      <table class="report-table-formal">
        <thead>
          <tr>
            <th>Khóa Đào Tạo</th>
            <th>Quy Mô SV</th>
            <th>GPA Trung Bình</th>
            <th>Khen Thưởng</th>
            <th>Cảnh Báo</th>
            <th>Đánh Giá Chung</th>
          </tr>
        </thead>
        <tbody>
          ${cohortStats}
        </tbody>
      </table>

      <h4>II. HOẠT ĐỘNG MINH CHỨNG 5W & ĐÁNH GIÁ ĐIỂM RÈN LUYỆN</h4>
      <p>- Kho minh chứng số hóa 5W (Who - What - When - Where - Why) trên Google Drive đã tiếp nhận và thẩm định chuẩn xác <strong>${totalEvi} hồ sơ minh chứng</strong>.</p>
      <p>- Tổng số điểm rèn luyện được quy đổi và ghi nhận: <strong>+${totalPts} điểm</strong>, đảm bảo công bằng, minh bạch và thúc đẩy phong trào thi đua học tập.</p>

      <h4>III. NGHIÊN CỨU KHOA HỌC (NCKH) & ĐỔI MỚI SÁNG TẠO</h4>
      <p>- Tổng số đề tài NCKH sinh viên cấp Khoa và Trường đang quản lý: <strong>${totalRes} đề tài</strong>.</p>
      <p>- Số lượng đề tài đã hoàn tất nghiệm thu đạt loại Xuất sắc & Tốt: <strong>${doneRes} đề tài</strong>.</p>
      <p>- Giảng viên khoa đã hoàn thành 02 bài báo khoa học chuẩn bị đăng trên Tạp chí Khoa học & Công nghệ Đại học Bình Dương.</p>

      <h4>IV. TIẾN ĐỘ THỰC HIỆN NHIỆM VỤ 3 KHỐI VAI TRÒ</h4>
      <p>- Tỷ lệ hoàn thành nhiệm vụ được giao trong tháng: đạt <strong>${doneTasks}/${totalTasks} nhiệm vụ</strong> (${totalTasks ? Math.round((doneTasks/totalTasks)*100) : 0}%).</p>
      <p>- Khối Giáo vụ: Hoàn thành xếp lịch thi giữa kỳ, kiểm tra cơ sở vật chất phòng Lab ngoại ngữ.</p>
      <p>- Khối GVCN: Hoàn tất 100% biên bản họp lớp và gửi thông báo kết quả học tập đến phụ huynh.</p>
      <p>- Khối Đoàn - Hội: Tổ chức thành công chuỗi tọa đàm văn hóa quốc tế và Ngày hội Ngoại ngữ BDU 2026.</p>

      <h4>V. PHƯƠNG HƯỚNG CÔNG TÁC THÁNG TIẾP THEO</h4>
      <p>1. Hoàn tất công tác chấm thi và nhập điểm học phần đợt 1 lên cổng thông tin.</p>
      <p>2. Khảo sát nhu cầu thực tập tốt nghiệp và liên kết các doanh nghiệp FDI tại KCN VSIP 1, 2 và Mỹ Phước.</p>
      <p>3. Rà soát chuẩn đầu ra ngoại ngữ quốc tế (TOEIC, IELTS, HSK, TOPIK) cho sinh viên khóa K25 chuẩn bị tốt nghiệp.</p>
    </div>

    ${getReportSignatureHtml()}
  `;
}

// 3. Quarterly Report Generator
function generateQuarterlyReportHtml() {
  const totalStu = state.students.length;
  const activeStu = state.students.filter(s => s.status === 'Đang học').length;
  const awardStu = state.students.filter(s => s.status === 'Bằng khen').length;
  const warnStu = state.students.filter(s => s.status === 'Cảnh báo').length;
  const totalLec = state.lecturers.length;
  const totalCollab = state.collaborators.length;
  const totalCourses = state.training.length;
  const avgAtt = totalCourses ? Math.round(state.training.reduce((a, b) => a + b.attendance, 0) / totalCourses) : 0;
  const totalRes = state.research.length;
  const doneRes = state.research.filter(r => r.status === 'Đã nghiệm thu').length;

  return `
    ${getReportHeaderHtml(state.reportDocNum, state.reportDate)}

    <div class="report-main-title">
      <h2>BÁO CÁO SƠ KẾT HOẠT ĐỘNG QUÝ & HỌC KỲ</h2>
      <p>Kỳ sơ kết: <strong>${state.reportPeriod}</strong></p>
      <p style="margin-top: 4px;">Kính gửi: <strong>BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong></p>
    </div>

    <div class="report-body">
      <p>Thực hiện kế hoạch năm học của Trường Đại học Bình Dương; Khoa Ngoại Ngữ trân trọng báo cáo sơ kết công tác quản trị, chất lượng đào tạo và nghiên cứu khoa học theo Quý với các kết quả cụ thể như sau:</p>

      <h4>I. ĐÁNH GIÁ CHỈ TIÊU ĐÀO TẠO & ĐỘI NGŨ NHÂN SỰ</h4>
      <p>- Đội ngũ giảng viên cơ hữu: <strong>${totalLec} Giảng viên</strong> (100% đạt trình độ Thạc sĩ, Tiến sĩ, Phó Giáo sư đúng chuyên ngành).</p>
      <p>- Đội ngũ Chuyên gia Doanh nghiệp & Giảng viên thỉnh giảng: <strong>${totalCollab} Chuyên gia/CTV</strong> tham gia giảng dạy các học phần ứng dụng thực tế.</p>
      <p>- Tỷ lệ giảng viên/sinh viên đạt chuẩn 1:18, đảm bảo môi trường thực hành giao tiếp ngoại ngữ đạt chuẩn chất lượng cao.</p>

      <table class="report-table-formal">
        <thead>
          <tr>
            <th>Chỉ Tiêu Đánh Giá</th>
            <th>Kế Hoạch Quý</th>
            <th>Thực Hiện</th>
            <th>Tỷ Lệ Đạt</th>
            <th>Đánh Giá Chất Lượng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chuyên cần học phần</td>
            <td style="text-align:center;">&ge; 85%</td>
            <td style="text-align:center; font-weight:700;">${avgAtt}%</td>
            <td style="text-align:center; color:#15803d; font-weight:700;">103.5%</td>
            <td>Vượt chỉ tiêu cam kết</td>
          </tr>
          <tr>
            <td>Minh chứng 5W thẩm định</td>
            <td style="text-align:center;">&ge; 50 MC</td>
            <td style="text-align:center; font-weight:700;">${state.evidence.length} MC</td>
            <td style="text-align:center; color:#15803d; font-weight:700;">100%</td>
            <td>Lưu trữ số hóa đồng bộ</td>
          </tr>
          <tr>
            <td>Đề tài NCKH nghiệm thu</td>
            <td style="text-align:center;">&ge; 3 đề tài</td>
            <td style="text-align:center; font-weight:700;">${doneRes}/${totalRes} đề tài</td>
            <td style="text-align:center; color:#15803d; font-weight:700;">100%</td>
            <td>Chất lượng ứng dụng tốt</td>
          </tr>
          <tr>
            <td>Xử lý cảnh báo học vụ</td>
            <td style="text-align:center;">&le; 5% SV</td>
            <td style="text-align:center; font-weight:700;">${((warnStu/totalStu)*100).toFixed(1)}%</td>
            <td style="text-align:center; color:#15803d; font-weight:700;">Đạt</td>
            <td>GVCN can thiệp kịp thời</td>
          </tr>
        </tbody>
      </table>

      <h4>II. PHÂN LOẠI CHẤT LƯỢNG HỌC TẬP & PHONG TRÀO SINH VIÊN</h4>
      <p>- Toàn khoa có <strong>${awardStu} sinh viên</strong> xuất sắc được đề nghị Hội đồng Thi đua Khen thưởng Trường trao học bổng Khuyến khích học tập.</p>
      <p>- Hệ thống 5W Evidence System hoạt động ổn định, 100% dữ liệu minh chứng phục vụ đắc lực cho công tác kiểm định chất lượng cấp cơ sở giáo dục và kiểm định chương trình đào tạo CTĐT AUN-QA.</p>

      <h4>III. BÀI HỌC KINH NGHIỆM & GIẢI PHÁP TRỌNG TÂM QUÝ TIẾP THEO</h4>
      <p>1. Tiếp tục tăng cường ứng dụng công nghệ số và Generative AI trong việc hỗ trợ sinh viên tự luyện phát âm và kỹ năng viết học thuật.</p>
      <p>2. Mở rộng ký kết thỏa thuận hợp tác (MOU) với các doanh nghiệp FDI Hàn Quốc, Nhật Bản, Đài Loan và Châu Âu trên địa bàn tỉnh Bình Dương.</p>
      <p>3. Hoàn thiện công tác chuẩn bị đón đoàn đánh giá ngoài kiểm định chất lượng giáo dục.</p>
    </div>

    ${getReportSignatureHtml()}
  `;
}

// 4. Annual Report Generator
function generateAnnualReportHtml() {
  const totalStu = state.students.length;
  const activeStu = state.students.filter(s => s.status === 'Đang học').length;
  const awardStu = state.students.filter(s => s.status === 'Bằng khen').length;
  const totalLec = state.lecturers.length;
  const totalCollab = state.collaborators.length;
  const totalRes = state.research.length;
  const doneRes = state.research.filter(r => r.status === 'Đã nghiệm thu').length;

  return `
    ${getReportHeaderHtml(state.reportDocNum, state.reportDate)}

    <div class="report-main-title">
      <h2>BÁO CÁO TỔNG KẾT TOÀN DIỆN NĂM HỌC</h2>
      <p>Năm học: <strong>${state.reportPeriod}</strong></p>
      <p style="margin-top: 4px;">Kính gửi: <strong>HỘI ĐỒNG TRƯỜNG & BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong></p>
    </div>

    <div class="report-body">
      <p>Khoa Ngoại Ngữ trân trọng báo cáo Ban Giám Hiệu toàn văn Báo cáo tổng kết năm học, đánh giá kết quả thực hiện Nghị quyết năm học và phương hướng nhiệm vụ trọng tâm năm học tới như sau:</p>

      <h4>I. TỔNG QUAN QUY MÔ ĐÀO TẠO & ĐỘI NGŨ CÁN BỘ</h4>
      <p>- Tổng số sinh viên chính quy 4 khóa K25, K26, K27, K28: <strong>${totalStu} sinh viên</strong>.</p>
      <p>- Nhân sự khoa: <strong>${totalLec} Giảng viên cơ hữu</strong> (bao gồm 01 PGS.TS, 02 TS, 03 ThS) và <strong>${totalCollab} Chuyên gia/CTV thỉnh giảng</strong> có chứng chỉ sư phạm quốc tế và kinh nghiệm thực tiễn.</p>
      <p>- 100% chương trình đào tạo được cập nhật chuẩn đầu ra tương thích khung năng lực ngoại ngữ 6 bậc Việt Nam (VSTEP) và khung tham chiếu Châu Âu (CEFR).</p>

      <h4>II. CÁC THÀNH TỰU NỔI BẬT ĐÃ ĐẠT ĐƯỢC TRONG NĂM HỌC</h4>
      <p>1. <strong>Công tác Đào tạo & Chuẩn đầu ra:</strong> Tỷ lệ sinh viên khóa K25 tốt nghiệp đúng hạn đạt 94.2%, 100% sinh viên tốt nghiệp đạt chuẩn ngoại ngữ quốc tế (IELTS &ge; 6.0, HSK &ge; 5, TOPIK &ge; 4, JLPT &ge; N3).</p>
      <p>2. <strong>Hoạt động Nghiên cứu Khoa học:</strong> Thực hiện thành công <strong>${totalRes} đề tài NCKH sinh viên</strong>, nghiệm thu đạt kết quả cao (${doneRes} đề tài xếp loại Xuất sắc), 01 đề tài đạt giải Khuyến khích cấp Bộ GD&ĐT.</p>
      <p>3. <strong>Hệ thống Quản trị Minh chứng 5W:</strong> Tiên phong xây dựng và vận hành thành công hệ thống quản trị minh chứng số hóa 5W, nâng cao 40% hiệu suất xử lý học vụ và rèn luyện.</p>
      <p>4. <strong>Hợp tác Doanh nghiệp & Việc làm:</strong> 96.8% sinh viên tốt nghiệp có việc làm đúng chuyên ngành trong vòng 06 tháng tại các tập đoàn đa quốc gia và doanh nghiệp FDI tại Bình Dương.</p>

      <table class="report-table-formal">
        <thead>
          <tr>
            <th>Hạng Mục Thi Đua</th>
            <th>Tập Thể / Cá Nhân Đạt Danh Hiệu</th>
            <th>Hình Thức Khen Thưởng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tập thể Khoa Ngoại Ngữ</td>
            <td>Tập thể Lao động Xuất sắc cấp Trường</td>
            <td>Bằng khen của Chủ tịch UBND Tỉnh Bình Dương</td>
          </tr>
          <tr>
            <td>Bộ môn Ngôn ngữ Anh</td>
            <td>Tập thể Lao động Tiên tiến xuất sắc</td>
            <td>Giấy khen của Hiệu trưởng BDU</td>
          </tr>
          <tr>
            <td>Cán bộ Giảng viên tiêu biểu</td>
            <td>04 Giảng viên đạt danh hiệu Chiến sĩ thi đua cơ sở</td>
            <td>Giấy khen & Tiền thưởng BDU</td>
          </tr>
          <tr>
            <td>Sinh viên Xuất sắc</td>
            <td>${awardStu} Sinh viên Thủ khoa & Xuất sắc toàn khóa</td>
            <td>Học bổng Toàn phần & Bằng khen</td>
          </tr>
        </tbody>
      </table>

      <h4>III. PHƯƠNG HƯỚNG, NHIỆM VỤ TRỌNG TÂM NĂM HỌC MỚI</h4>
      <p>1. Mở rộng tuyển sinh chuyên ngành mới Tiếng Anh Thương Mại & Logistics, Song ngữ Anh - Trung.</p>
      <p>2. Đẩy mạnh liên kết đào tạo quốc tế 2+2, 3+1 với các trường Đại học đối tác tại Đài Loan, Hàn Quốc, Nhật Bản và Vương quốc Anh.</p>
      <p>3. Duy trì và phát huy nền tảng số hóa quản trị học vụ Khoa Ngoại Ngữ, giữ vững vị thế lá cờ đầu trong chuyển đổi số giáo dục tại BDU.</p>
    </div>

    ${getReportSignatureHtml()}
  `;
}

// 5. Thematic Report Generator
function generateThematicReportHtml(key) {
  let themeTitle = '';
  let themeBody = '';

  if (key === 'academic') {
    themeTitle = 'BÁO CÁO CHUYÊN ĐỀ HỌC VỤ & QUẢN LÝ CHUYÊN CẦN';
    themeBody = `
      <h4>I. THỐNG KÊ CHI TIẾT TỶ LỆ CHUYÊN CẦN CÁC HỌC PHẦN</h4>
      <p>Khoa Ngoại Ngữ tổng hợp báo cáo chuyên đề về tình hình tham gia lớp học và kiểm soát nguy cơ cấm thi của sinh viên:</p>
      <table class="report-table-formal">
        <thead><tr><th>Mã HP</th><th>Tên Học Phần</th><th>GV Giảng Dạy</th><th>Sĩ Số</th><th>Chuyên Cần</th><th>Nguy Cơ Cấm Thi</th></tr></thead>
        <tbody>
          ${state.training.map(c => `<tr><td>${c.code}</td><td>${c.name}</td><td>${c.lecturer}</td><td style="text-align:center;">${c.students}</td><td style="text-align:center; font-weight:700;">${c.attendance}%</td><td style="text-align:center;">${c.attendance < 80 ? 'Có nguy cơ' : 'An toàn'}</td></tr>`).join('')}
        </tbody>
      </table>
      <h4>II. BIỆN PHÁP NÂNG CAO TỶ LỆ CHUYÊN CẦN</h4>
      <p>- GVCN liên hệ trực tiếp phụ huynh các trường hợp vắng quá 20% số tiết quy định.</p>
      <p>- Tổ chức phụ đạo miễn phí trực tuyến cho sinh viên có hoàn cảnh khó khăn.</p>
    `;
  } else if (key === 'evidence') {
    themeTitle = 'BÁO CÁO CHUYÊN ĐỀ VẬN HÀNH KHO MINH CHỨNG 5W & ĐRL';
    themeBody = `
      <h4>I. TÌNH HÌNH LƯU TRỮ VÀ THẨM ĐỊNH MINH CHỨNG 5W</h4>
      <p>- Tổng số minh chứng đã lưu trên Google Drive: <strong>${state.evidence.length} minh chứng</strong>.</p>
      <p>- Tổng điểm rèn luyện cộng dồn: <strong>+${state.evidence.reduce((a, b) => a + (b.points || 0), 0)} điểm</strong>.</p>
      <table class="report-table-formal">
        <thead><tr><th>Mã MC</th><th>Tên Hoạt Động (What)</th><th>Đối Tượng (Who)</th><th>Địa Điểm (Where)</th><th>Điểm</th><th>Trạng Thái</th></tr></thead>
        <tbody>
          ${state.evidence.slice(0, 6).map(e => `<tr><td>${e.code}</td><td>${e.activity}</td><td>${e.target}</td><td>${e.where}</td><td style="text-align:center; font-weight:700; color:#15803d;">+${e.points}đ</td><td style="text-align:center;">${e.verified ? 'Đã duyệt' : 'Chờ duyệt'}</td></tr>`).join('')}
        </tbody>
      </table>
    `;
  } else if (key === 'research') {
    themeTitle = 'BÁO CÁO CHUYÊN ĐỀ NGHIÊN CỨU KHOA HỌC & ĐỔI MỚI SÁNG TẠO';
    themeBody = `
      <h4>I. DANH MỤC CÁC ĐỀ TÀI NCKH SINH VIÊN NĂM HỌC 2026 - 2027</h4>
      <table class="report-table-formal">
        <thead><tr><th>Mã ĐT</th><th>Tên Đề Tài Nghiên Cứu</th><th>Chủ Nhiệm Đề Tài</th><th>Cấp Quản Lý</th><th>Trạng Thái</th></tr></thead>
        <tbody>
          ${state.research.map(r => `<tr><td>${r.code}</td><td>${r.name}</td><td>${r.lead}</td><td>${r.level}</td><td style="text-align:center; font-weight:700;">${r.status}</td></tr>`).join('')}
        </tbody>
      </table>
    `;
  } else {
    themeTitle = 'BÁO CÁO CHUYÊN ĐỀ CÔNG TÁC TÂN SINH VIÊN KHÓA 28 (K28)';
    const k28Stu = state.students.filter(s => s.cohort === 'K28');
    themeBody = `
      <h4>I. QUY MÔ & TÌNH HÌNH NHẬP HỌC TÂN SINH VIÊN K28</h4>
      <p>- Tổng số tân sinh viên K28 đã nhập học: <strong>${k28Stu.length} sinh viên</strong>.</p>
      <p>- 100% sinh viên đã được định hướng chuyên ngành, phân bổ cố vấn học tập và gia nhập CLB Ngoại ngữ.</p>
    `;
  }

  return `
    ${getReportHeaderHtml(state.reportDocNum, state.reportDate)}

    <div class="report-main-title">
      <h2>${themeTitle}</h2>
      <p>Kỳ báo cáo: <strong>${state.reportPeriod}</strong></p>
      <p style="margin-top: 4px;">Kính gửi: <strong>BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong></p>
    </div>

    <div class="report-body">
      ${themeBody}
    </div>

    ${getReportSignatureHtml()}
  `;
}

// Master HTML Dispatcher
function generateReportHtml() {
  if (state.reportTemplateKey) {
    return generateThematicReportHtml(state.reportTemplateKey);
  }
  const cat = state.reportCategory || 'week';
  if (cat === 'week') return generateWeeklyReportHtml();
  if (cat === 'month') return generateMonthlyReportHtml();
  if (cat === 'quarter') return generateQuarterlyReportHtml();
  if (cat === 'year') return generateAnnualReportHtml();
  return generateMonthlyReportHtml();
}

function renderAdministrativeReport() {
  const html = state.customReportHtml || generateReportHtml();
  const el = document.getElementById('reportContentArea');
  if (el) el.innerHTML = html;

  const inlineEl = document.getElementById('bghInlinePaperTarget');
  if (inlineEl) inlineEl.innerHTML = html;

  // Sync Live Dashboard Indicators on Tab 1
  const bStu = document.getElementById('bghStatStu');
  const bAtt = document.getElementById('bghStatAttendance');
  const bEvi = document.getElementById('bghStatEvidence');
  const bRes = document.getElementById('bghStatResearch');
  const bTas = document.getElementById('bghStatTasks');

  const avgAtt = state.training.length ? Math.round(state.training.reduce((a, b) => a + b.attendance, 0) / state.training.length) : 0;
  const doneTasks = state.tasks.filter(t => t.status === 'Hoàn Thành').length;
  const pts = state.evidence.reduce((a, b) => a + (b.points || 0), 0);

  if (bStu) bStu.textContent = `${state.students.length} Sinh viên`;
  if (bAtt) bAtt.textContent = `${avgAtt}%`;
  if (bEvi) bEvi.textContent = `${state.evidence.length} Minh chứng (+${pts}đ)`;
  if (bRes) bRes.textContent = `${state.research.length} Đề tài NCKH`;
  if (bTas) bTas.textContent = `${doneTasks}/${state.tasks.length} Nhiệm vụ`;
}

function downloadWordDoc() {
  const content = state.customReportHtml || generateReportHtml();
  const catName = getCategoryTitle(state.reportCategory || 'week').replace(/\s+/g, '_');
  const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset="utf-8"><title>Báo Cáo BDU - Khoa Ngoại Ngữ</title>
    <style>
      body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.5; color: #000; }
      table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 12pt; }
      th, td { border: 1px solid #000; padding: 6px 8px; text-align: left; }
      th { background-color: #f2f2f2; font-weight: bold; text-align: center; }
      .report-national-header { display: flex; justify-content: space-between; text-align: center; margin-bottom: 20px; }
      .report-main-title { text-align: center; margin-bottom: 20px; }
      .report-signature-grid { display: flex; justify-content: space-between; margin-top: 40px; text-align: center; }
    </style>
    </head>
    <body>${content}</body>
    </html>
  `;
  const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BDU_${catName}_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Đã tải xuống file Word (.doc) ${getCategoryTitle(state.reportCategory)} thành công!`, 'success');
}

// 11. Excel Master Center & AI Assistant Integration

let parsedExcelCache = null;

function openExcelCenterModal() {
  const modal = document.getElementById('modalExcelCenter');
  if (modal) {
    modal.classList.add('active');
    resetExcelUploadArea();
  }
}

function closeExcelCenterModal() {
  const modal = document.getElementById('modalExcelCenter');
  if (modal) {
    modal.classList.remove('active');
  }
}

function resetExcelUploadArea() {
  const preview = document.getElementById('excelPreviewSection');
  const upload = document.getElementById('excelUploadDropzone');
  const fileInput = document.getElementById('excelFileInput');
  if (preview) preview.classList.add('hidden');
  if (upload) upload.classList.remove('hidden');
  if (fileInput) fileInput.value = '';
  parsedExcelCache = null;
}

function downloadMasterExcelTemplate() {
  if (typeof XLSX === 'undefined') {
    showToast('Thư viện SheetJS chưa được tải!', 'danger');
    return;
  }
  const wb = XLSX.utils.book_new();

  // 1. Sinh Viên
  const sStu = [
    { 'MSSV': '28NN0101', 'Họ Và Tên': 'Nguyễn Văn An', 'Khóa': 'K28', 'Chuyên Ngành': 'Biên - Phiên Dịch Tiếng Anh', 'Điểm GPA': 3.65, 'Trạng Thái': 'Bằng khen', 'Cố Vấn Học Tập': 'TS. Nguyễn Văn A', 'Email': '28nn0101@student.bdu.edu.vn', 'Số Điện Thoại': '0912345678' },
    { 'MSSV': '28NN0102', 'Họ Và Tên': 'Trần Thị Bích', 'Khóa': 'K28', 'Chuyên Ngành': 'Tiếng Anh Thương Mại', 'Điểm GPA': 3.42, 'Trạng Thái': 'Đang học', 'Cố Vấn Học Tập': 'TS. Nguyễn Văn A', 'Email': '28nn0102@student.bdu.edu.vn', 'Số Điện Thoại': '0913456789' },
    { 'MSSV': '27NN0201', 'Họ Và Tên': 'Lê Hoàng Cường', 'Khóa': 'K27', 'Chuyên Ngành': 'Biên - Phiên Dịch Tiếng Anh', 'Điểm GPA': 1.85, 'Trạng Thái': 'Cảnh báo', 'Cố Vấn Học Tập': 'ThS. Trần Thị C', 'Email': '27nn0201@student.bdu.edu.vn', 'Số Điện Thoại': '0914567890' },
    { 'MSSV': '27NN0202', 'Họ Và Tên': 'Phạm Minh Đức', 'Khóa': 'K27', 'Chuyên Ngành': 'Phương Pháp Giảng Dạy (TESOL)', 'Điểm GPA': 3.10, 'Trạng Thái': 'Đang học', 'Cố Vấn Học Tập': 'ThS. Trần Thị C', 'Email': '27nn0202@student.bdu.edu.vn', 'Số Điện Thoại': '0915678901' },
    { 'MSSV': '26NN0301', 'Họ Và Tên': 'Hoàng Thị Dung', 'Khóa': 'K26', 'Chuyên Ngành': 'Tiếng Anh Du Lịch', 'Điểm GPA': 3.88, 'Trạng Thái': 'Bằng khen', 'Cố Vấn Học Tập': 'TS. Lê Văn D', 'Email': '26nn0301@student.bdu.edu.vn', 'Số Điện Thoại': '0916789012' }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sStu), '1_Sinh_Vien');

  // 2. Giảng Viên
  const sLec = [
    { 'Mã CB': 'GV-BDU-01', 'Họ Và Tên': 'TS. Nguyễn Văn A', 'Học Vị': 'TS.', 'Tổ Bộ Môn': 'Bộ môn Ngôn ngữ Anh', 'Chức Vụ': 'Trưởng Khoa Ngoại Ngữ', 'Email': 'anv@bdu.edu.vn', 'Số Điện Thoại': '0903111222', 'Lớp Cố Vấn': '28NNA01 (K28)', 'Học Phần Phụ Trách': 'ENG101 (Tiếng Anh Giao Tiếp 1)', 'Hướng Nghiên Cứu': 'Ứng dụng AI trong dạy học Ngoại ngữ' },
    { 'Mã CB': 'GV-BDU-02', 'Họ Và Tên': 'ThS. Trần Thị C', 'Học Vị': 'ThS.', 'Tổ Bộ Môn': 'Tổ Biên - Phiên Dịch Tiếng Anh', 'Chức Vụ': 'Phó Trưởng Khoa', 'Email': 'ctt@bdu.edu.vn', 'Số Điện Thoại': '0903222333', 'Lớp Cố Vấn': '27NNA01 (K27)', 'Học Phần Phụ Trách': 'ENG201 (Biên Dịch Nâng Cao)', 'Hướng Nghiên Cứu': 'Lý thuyết dịch thuật ứng dụng' }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sLec), '2_Giang_Vien');

  // 3. Cộng Tác Viên
  const sCollab = [
    { 'Mã CTV': 'CTV-2026-01', 'Họ Và Tên': 'ThS. Nguyễn Hồng Phúc', 'Vai Trò': 'Giảng viên thỉnh giảng', 'Học Vị': 'ThS.', 'Đơn Vị Công Tác': 'Trường ĐH Ngoại Thương CS2', 'Học Phần': 'Tiếng Anh Thương Mại & Logistics', 'Số Giờ': 45, 'Hợp Đồng': 'Đang hiệu lực', 'Đánh Giá': 'Xuất sắc' }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sCollab), '3_Cong_Tac_Vien');

  // 4. Minh Chứng
  const sEv = [
    { 'Tên Minh Chứng': 'Chứng chỉ Tiếng Anh IELTS 7.5 Academic', 'Phân Loại': 'Học thuật', 'Ngày Tháng': '2026-08-15', 'Địa Điểm': 'IDP Education / BDU', 'MSSV': '28NN0101', 'Họ Tên Sinh Viên': 'Nguyễn Văn An', 'Đơn Vị Cấp': 'IDP IELTS Australia', 'Điểm ĐRL': 20, 'Link Drive': 'https://drive.google.com' }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sEv), '4_Minh_Chung');

  // 5. Đào Tạo
  const sTrain = [
    { 'Mã Học Phần': 'ENG101', 'Tên Học Phần': 'Tiếng Anh Giao Tiếp Quốc Tế 1', 'Giảng Viên': 'TS. Nguyễn Văn A', 'Hệ Đào Tạo': 'Đại học Chính quy', 'Tổng Số Tiết': 15, 'Tiết Đã Học': 8, 'Tỷ Lệ Chuyên Cần (%)': 95 }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sTrain), '5_Dao_Tao');

  // 6. Nhiệm Vụ
  const sTasks = [
    { 'Bộ Phận': 'Giáo Vụ', 'Tên Nhiệm Vụ': 'Rà soát hồ sơ Tân sinh viên Ngôn ngữ Anh K28', 'Người Phụ Trách': 'Giáo Vụ Khoa', 'Hạn Chót': '2026-09-05', 'Mức Độ Ưu Tiên': 'Cao', 'Trạng Thái': 'Đang Thực Hiện' }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sTasks), '6_Nhiem_Vu');

  // 7. Nghiên Cứu Khoa Học
  const sNckh = [
    { 'Mã Đề Tài': 'NCKH-2026-01', 'Tên Đề Tài': 'Ứng dụng AI trong nâng cao kỹ năng Viết Học thuật Tiếng Anh', 'GV Hướng Dẫn': 'TS. Nguyễn Văn A', 'Sinh Viên Tham Gia': 'Nguyễn Văn An, Vũ Đức Em', 'Cấp Đề Tài': 'Cấp Trường', 'Sản Phẩm Đầu Ra': '01 Bài báo Khoa học', 'Trạng Thái': 'Đang triển khai' }
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sNckh), '7_NCKH');

  XLSX.writeFile(wb, `BDU_Mau_Nhap_Lieu_Ngon_Ngu_Anh_${new Date().toISOString().slice(0, 10)}.xlsx`);
  showToast('Đã tải xuống file Excel mẫu chuẩn Khoa Ngôn ngữ Anh!', 'success');
}

function exportFullMasterExcel() {
  exportMasterExcel();
}

function handleExcelFileSelect(file, hint) {
  if (!file) return;
  if (typeof XLSX === 'undefined') {
    showToast('Thư viện xử lý Excel chưa sẵn sàng!', 'danger');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      
      const parsed = {
        students: [],
        lecturers: [],
        collaborators: [],
        evidence: [],
        training: [],
        tasks: [],
        research: []
      };

      workbook.SheetNames.forEach(sheetName => {
        const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
        if (!rows || rows.length === 0) return;

        const sLower = (hint || sheetName).toLowerCase();
        
        if (sLower.includes('sinh') || sLower.includes('student') || sLower.includes('hoc_sinh')) {
          rows.forEach((r, idx) => {
            const code = r['MSSV'] || r['Mã SV'] || r['Mã Sinh Viên'] || r['Code'] || `28NN${1000 + idx}`;
            const name = r['Họ Và Tên'] || r['Họ Tên'] || r['Họ tên'] || r['Name'] || 'Sinh viên mới';
            const cohort = r['Khóa'] || r['Khoá'] || r['Cohort'] || 'K28';
            const major = r['Chuyên Ngành'] || r['Ngành'] || r['Major'] || 'Biên - Phiên Dịch Tiếng Anh';
            const gpa = parseFloat(r['Điểm GPA'] || r['GPA'] || r['Điểm'] || 3.0);
            const status = r['Trạng Thái'] || r['Tình Trạng'] || (gpa < 2.0 ? 'Cảnh báo' : (gpa >= 3.6 ? 'Bằng khen' : 'Đang học'));
            const advisor = r['Cố Vấn Học Tập'] || r['Cố Vấn'] || r['GVCN'] || 'TS. Nguyễn Văn A';
            const email = r['Email'] || `${code.toLowerCase()}@student.bdu.edu.vn`;
            const phone = r['Số Điện Thoại'] || r['Điện thoại'] || '0900 000 000';

            parsed.students.push({
              id: Date.now() + idx,
              code,
              name,
              cohort,
              major,
              gpa: isNaN(gpa) ? 3.0 : gpa,
              status,
              advisor,
              email,
              phone
            });
          });
        } else if (sLower.includes('giang_vien') || sLower.includes('giangvien') || sLower.includes('lecturer') || sLower.includes('can_bo')) {
          rows.forEach((r, idx) => {
            parsed.lecturers.push({
              id: Date.now() + idx,
              code: r['Mã CB'] || r['Mã GV'] || `GV-BDU-${10 + idx}`,
              name: r['Họ Và Tên'] || r['Họ Tên'] || r['Tên Giảng Viên'] || 'Giảng viên',
              degree: r['Học Vị'] || r['Học hàm'] || 'ThS.',
              department: r['Tổ Bộ Môn'] || r['Bộ Môn'] || 'Bộ môn Ngôn ngữ Anh',
              position: r['Chức Vụ'] || 'Giảng viên cơ hữu',
              status: r['Trạng Thái'] || 'Đang công tác',
              email: r['Email'] || 'gv@bdu.edu.vn',
              phone: r['Số Điện Thoại'] || '0903 000 000',
              advisingClass: r['Lớp Cố Vấn'] || '',
              modules: r['Học Phần Phụ Trách'] || 'ENG101',
              research: r['Hướng Nghiên Cứu'] || 'Nghiên cứu Ngôn ngữ Anh'
            });
          });
        } else if (sLower.includes('cong_tac') || sLower.includes('collab') || sLower.includes('thinh_giang')) {
          rows.forEach((r, idx) => {
            parsed.collaborators.push({
              id: Date.now() + idx,
              code: r['Mã CTV'] || `CTV-2026-${10 + idx}`,
              name: r['Họ Và Tên'] || r['Họ Tên'] || 'Cộng tác viên',
              role: r['Vai Trò'] || 'Giảng viên thỉnh giảng',
              degree: r['Học Vị'] || 'ThS.',
              org: r['Đơn Vị Công Tác'] || r['Đơn Vị'] || 'Doanh nghiệp FDI',
              courses: r['Học Phần'] || 'Tiếng Anh Thực Hành',
              hours: parseInt(r['Số Giờ'] || 30),
              contract: r['Hợp Đồng'] || 'Đang hiệu lực',
              rating: r['Đánh Giá'] || 'Tốt'
            });
          });
        } else if (sLower.includes('minh_chung') || sLower.includes('evidence') || sLower.includes('ren_luyen')) {
          rows.forEach((r, idx) => {
            parsed.evidence.push({
              id: Date.now() + idx,
              folderId: 'f2',
              title: r['Tên Minh Chứng'] || r['Minh Chứng'] || 'Chứng chỉ Ngoại ngữ',
              category: r['Phân Loại'] || 'Học thuật',
              datetime: r['Ngày Tháng'] || new Date().toISOString().slice(0, 10),
              location: r['Địa Điểm'] || 'BDU Campus',
              studentCode: r['MSSV'] || '28NN0101',
              studentName: r['Họ Tên Sinh Viên'] || r['Họ Tên'] || 'Sinh viên',
              issuer: r['Đơn Vị Cấp'] || 'Khoa Ngoại Ngữ BDU',
              points: parseInt(r['Điểm ĐRL'] || r['Điểm'] || 15),
              imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80',
              driveUrl: r['Link Drive'] || 'https://drive.google.com'
            });
          });
        } else if (sLower.includes('dao_tao') || sLower.includes('hoc_phan') || sLower.includes('training')) {
          rows.forEach((r, idx) => {
            parsed.training.push({
              id: Date.now() + idx,
              code: r['Mã Học Phần'] || r['Mã HP'] || `ENG${200 + idx}`,
              name: r['Tên Học Phần'] || r['Tên Môn'] || 'Tiếng Anh Chuyên Ngành',
              lecturer: r['Giảng Viên'] || 'TS. Nguyễn Văn A',
              program: r['Hệ Đào Tạo'] || 'Đại học Chính quy',
              totalLessons: parseInt(r['Tổng Số Tiết'] || 15),
              completedLessons: parseInt(r['Tiết Đã Học'] || 8),
              attendance: parseInt(r['Tỷ Lệ Chuyên Cần (%)'] || r['Chuyên Cần'] || 90)
            });
          });
        } else if (sLower.includes('nhiem_vu') || sLower.includes('task') || sLower.includes('cong_viec')) {
          rows.forEach((r, idx) => {
            parsed.tasks.push({
              id: Date.now() + idx,
              role: r['Bộ Phận'] || 'Giáo Vụ',
              title: r['Tên Nhiệm Vụ'] || 'Nhiệm vụ đào tạo',
              assignee: r['Người Phụ Trách'] || 'Khoa Ngoại Ngữ',
              deadline: r['Hạn Chót'] || new Date().toISOString().slice(0, 10),
              priority: r['Mức Độ Ưu Tiên'] || 'Cao',
              status: r['Trạng Thái'] || 'Đang Thực Hiện'
            });
          });
        } else if (sLower.includes('nckh') || sLower.includes('nghien_cuu') || sLower.includes('research')) {
          rows.forEach((r, idx) => {
            parsed.research.push({
              id: Date.now() + idx,
              code: r['Mã Đề Tài'] || `NCKH-2026-${10 + idx}`,
              title: r['Tên Đề Tài'] || 'Đề tài Nghiên cứu Khoa học',
              mentor: r['GV Hướng Dẫn'] || 'TS. Nguyễn Văn A',
              students: r['Sinh Viên Tham Gia'] || 'Sinh viên Ngôn ngữ Anh',
              level: r['Cấp Đề Tài'] || 'Cấp Khoa',
              output: r['Sản Phẩm Đầu Ra'] || '01 Bài báo Khoa học',
              status: r['Trạng Thái'] || 'Đang triển khai'
            });
          });
        } else {
          // If sheet name doesn't match standard prefixes, treat first sheet as students if it has student headers
          if (parsed.students.length === 0 && (rows[0]['MSSV'] || rows[0]['Họ Tên'] || rows[0]['Họ Và Tên'])) {
            rows.forEach((r, idx) => {
              parsed.students.push({
                id: Date.now() + idx,
                code: r['MSSV'] || r['Mã SV'] || `28NN${1000 + idx}`,
                name: r['Họ Và Tên'] || r['Họ Tên'] || 'Sinh viên',
                cohort: r['Khóa'] || 'K28',
                major: r['Chuyên Ngành'] || r['Ngành'] || 'Biên - Phiên Dịch Tiếng Anh',
                gpa: parseFloat(r['Điểm GPA'] || r['GPA'] || 3.0),
                status: r['Trạng Thái'] || 'Đang học',
                advisor: r['Cố Vấn Học Tập'] || 'TS. Nguyễn Văn A',
                email: r['Email'] || 'student@bdu.edu.vn',
                phone: r['Số Điện Thoại'] || '0900 000 000'
              });
            });
          }
        }
      });

      parsedExcelCache = parsed;
      displayExcelPreview(file.name, parsed);
    } catch (err) {
      console.error('Lỗi khi đọc file Excel:', err);
      showToast('Không thể phân tích file Excel. Vui lòng kiểm tra định dạng!', 'danger');
    }
  };

  reader.readAsArrayBuffer(file);
}

function displayExcelPreview(fileName, parsed) {
  const uploadArea = document.getElementById('excelUploadDropzone');
  const previewSection = document.getElementById('excelPreviewSection');
  const fileInfo = document.getElementById('excelLoadedFileInfo');
  const previewTable = document.getElementById('excelPreviewTableHead');
  const previewBody = document.getElementById('excelPreviewTableBody');

  if (uploadArea) uploadArea.classList.add('hidden');
  if (previewSection) previewSection.classList.remove('hidden');

  let totalRecords = 0;
  const sheetSummary = [];
  if (parsed.students.length > 0) { sheetSummary.push(`${parsed.students.length} Sinh viên`); totalRecords += parsed.students.length; }
  if (parsed.lecturers.length > 0) { sheetSummary.push(`${parsed.lecturers.length} Giảng viên`); totalRecords += parsed.lecturers.length; }
  if (parsed.collaborators.length > 0) { sheetSummary.push(`${parsed.collaborators.length} Cộng tác viên`); totalRecords += parsed.collaborators.length; }
  if (parsed.evidence.length > 0) { sheetSummary.push(`${parsed.evidence.length} Minh chứng`); totalRecords += parsed.evidence.length; }
  if (parsed.training.length > 0) { sheetSummary.push(`${parsed.training.length} Học phần`); totalRecords += parsed.training.length; }
  if (parsed.tasks.length > 0) { sheetSummary.push(`${parsed.tasks.length} Nhiệm vụ`); totalRecords += parsed.tasks.length; }
  if (parsed.research.length > 0) { sheetSummary.push(`${parsed.research.length} Đề tài NCKH`); totalRecords += parsed.research.length; }

  if (fileInfo) {
    fileInfo.innerHTML = `
      <div style="font-weight:700; color:var(--text-main);"><i class="fa-solid fa-file-excel text-emerald-600 mr-2"></i> ${fileName}</div>
      <div style="font-size:12.5px; color:var(--text-muted); margin-top:2px;">Tìm thấy <strong>${totalRecords} bản ghi</strong> hợp lệ: ${sheetSummary.join(' • ')}</div>
    `;
  }

  // Render preview table (Show students first, or lecturers if no students)
  if (previewTable && previewBody) {
    if (parsed.students.length > 0) {
      previewTable.innerHTML = `
        <tr>
          <th>STT</th>
          <th>MSSV</th>
          <th>Họ và Tên</th>
          <th>Khóa</th>
          <th>Chuyên Ngành</th>
          <th>Điểm GPA</th>
          <th>Trạng Thái</th>
        </tr>
      `;
      previewBody.innerHTML = parsed.students.slice(0, 8).map((s, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td><strong class="font-mono text-primary">${s.code}</strong></td>
          <td style="font-weight:600;">${s.name}</td>
          <td><span class="bdu-badge bdu-badge-primary">${s.cohort}</span></td>
          <td>${s.major}</td>
          <td><strong style="color:${s.gpa < 2.0 ? 'var(--bdu-danger)' : 'var(--bdu-accent)'};">${s.gpa.toFixed(2)}</strong></td>
          <td><span class="bdu-badge ${s.status === 'Bằng khen' ? 'bdu-badge-warning' : (s.status === 'Cảnh báo' ? 'bdu-badge-danger' : 'bdu-badge-success')}">${s.status}</span></td>
        </tr>
      `).join('');
    } else if (parsed.lecturers.length > 0) {
      previewTable.innerHTML = `
        <tr>
          <th>STT</th>
          <th>Mã CB</th>
          <th>Họ và Tên</th>
          <th>Học Vị</th>
          <th>Tổ Bộ Môn</th>
          <th>Chức Vụ</th>
        </tr>
      `;
      previewBody.innerHTML = parsed.lecturers.slice(0, 8).map((l, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td><strong class="font-mono text-primary">${l.code}</strong></td>
          <td style="font-weight:600;">${l.name}</td>
          <td>${l.degree}</td>
          <td>${l.department}</td>
          <td><span class="bdu-badge bdu-badge-info">${l.position}</span></td>
        </tr>
      `).join('');
    } else {
      previewTable.innerHTML = `<tr><th>Thông Báo</th></tr>`;
      previewBody.innerHTML = `<tr><td style="text-align:center; padding:20px; color:var(--text-muted);">Đã nạp file thành công. Nhấn "Áp Dụng Dữ Liệu Vào Hệ Thống" để đồng bộ.</td></tr>`;
    }
  }

  showToast(`Đã nhận diện file ${fileName} với ${totalRecords} bản ghi!`, 'info');
}

function applyExcelDataToSystem() {
  if (!parsedExcelCache) {
    showToast('Chưa có dữ liệu Excel nào được nạp!', 'warning');
    return;
  }
  const mode = document.querySelector('input[name="excelImportMode"]:checked')?.value || 'append';
  const keyOf = { students: 'code', lecturers: 'code', collaborators: 'code', evidence: 'title', training: 'code', tasks: 'title', research: 'code' };
  let added = 0, updated = 0;

  Object.keys(keyOf).forEach(type => {
    const incoming = parsedExcelCache[type] || [];
    if (!incoming.length) return;
    if (mode === 'replace') {
      state[type] = [...incoming];
      added += incoming.length;
      return;
    }
    const k = keyOf[type];
    incoming.forEach(item => {
      const idx = state[type].findIndex(x => String(x[k]).trim().toLowerCase() === String(item[k]).trim().toLowerCase());
      if (idx >= 0) { item.id = state[type][idx].id; state[type][idx] = item; updated++; }
      else { state[type].push(item); added++; }
    });
  });

  safeCall(updateCounters);
  safeCall(renderPersonnelHub);
  safeCall(renderEvidenceMainArea);
  safeCall(renderTrainingTable);
  safeCall(renderTaskView);
  safeCall(renderResearchTable);
  safeCall(renderDashboard);
  safeCall(renderAdministrativeReport);
  closeExcelCenterModal();

  showToast(`Đã nạp từ Excel: thêm ${added} bản ghi${updated ? `, cập nhật ${updated}` : ''}.`, 'success');
}

// 12. AI Assistant Hub (Gemini Powered)

function openAiAssistantModal() {
  const modal = document.getElementById('modalAiAssistant');
  if (modal) {
    modal.classList.add('active');
    const input = document.getElementById('aiChatInput');
    if (input) input.focus();
  }
}

function closeAiAssistantModal() {
  const modal = document.getElementById('modalAiAssistant');
  if (modal) {
    modal.classList.remove('active');
  }
}

function appendAiMessage(role, text) {
  const body = document.getElementById('aiChatBody');
  if (!body) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `ai-msg-bubble ${role === 'user' ? 'ai-user-bubble' : 'ai-agent-bubble'}`;
  
  if (role === 'user') {
    msgDiv.innerHTML = `
      <div class="ai-msg-header"><i class="fa-solid fa-user text-primary mr-1"></i> Bạn</div>
      <div class="ai-msg-content">${escapeHtml(text)}</div>
    `;
  } else {
    // Format response text: bold, bullet points, headers
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\s*-\s*(.*?)(?=\n|$)/g, '<li style="margin-left:18px; margin-bottom:4px;">$1</li>')
      .replace(/\n/g, '<br/>');

    msgDiv.innerHTML = `
      <div class="ai-msg-header"><i class="fa-solid fa-sparkles text-amber-500 mr-1"></i> AI Khoa Ngôn Ngữ Anh</div>
      <div class="ai-msg-content" style="line-height:1.6; font-size:13.5px;">${formatted}</div>
      <div class="ai-msg-actions" style="margin-top:10px; display:flex; gap:8px;">
        <button class="bdu-btn bdu-btn-outline" style="font-size:11.5px; padding:4px 10px;" onclick="copyAiResponseText(this)">
          <i class="fa-solid fa-copy mr-1"></i> Sao chép
        </button>
        <button class="bdu-btn bdu-btn-primary" style="font-size:11.5px; padding:4px 10px;" onclick="applyAiReportToEditor('${encodeURIComponent(text)}')">
          <i class="fa-solid fa-file-pen mr-1"></i> Đưa vào Báo Cáo BGH
        </button>
      </div>
    `;
  }

  body.appendChild(msgDiv);
  body.scrollTop = body.scrollHeight;
}

function copyAiResponseText(btn) {
  const content = btn.closest('.ai-msg-bubble')?.querySelector('.ai-msg-content')?.innerText || '';
  navigator.clipboard.writeText(content).then(() => {
    showToast('Đã sao chép phản hồi AI vào Clipboard!', 'success');
  });
}

function applyAiReportToEditor(encodedText) {
  const text = decodeURIComponent(encodedText);
  state.reportCustomText = text;
  state.isEditingReport = true;
  switchToTab('tab-reports');
  generateCurrentReport();
  closeAiAssistantModal();
  showToast('Đã áp dụng nội dung do AI đề xuất vào khung soạn thảo báo cáo BGH!', 'success');
}

async function submitAiChat() {
  const input = document.getElementById('aiChatInput');
  if (!input) return;
  const prompt = input.value.trim();
  if (!prompt) return;

  input.value = '';
  appendAiMessage('user', prompt);

  // Show typing loader
  const body = document.getElementById('aiChatBody');
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'aiTypingIndicator';
  loadingDiv.className = 'ai-msg-bubble ai-agent-bubble';
  loadingDiv.innerHTML = `<div style="color:var(--text-muted); font-size:13px;"><i class="fa-solid fa-spinner fa-spin mr-2"></i> AI đang phân tích dữ liệu Khoa Ngôn Ngữ Anh...</div>`;
  body.appendChild(loadingDiv);
  body.scrollTop = body.scrollHeight;

  try {
    const contextData = {
      totalStudents: state.students.length,
      warningCount: state.students.filter(s => s.status === 'Cảnh báo' || s.gpa < 2.0).length,
      honorsCount: state.students.filter(s => s.status === 'Bằng khen' || s.gpa >= 3.6).length,
      totalLecturers: state.lecturers.length,
      evidenceCount: state.evidence.length,
      trainingModules: state.training.map(t => `${t.code}: ${t.name} (Chuyên cần ${t.attendance}%)`).join(', ')
    };

    const res = await fetch('/api/gemini/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `Bối cảnh Khoa Ngoại Ngữ (Ngành Ngôn Ngữ Anh BDU):
- Tổng số sinh viên: ${contextData.totalStudents} (Cảnh báo: ${contextData.warningCount}, Bằng khen: ${contextData.honorsCount})
- Giảng viên cơ hữu: ${contextData.totalLecturers}
- Minh chứng rèn luyện & IELTS/VSTEP: ${contextData.evidenceCount}
- Các học phần tiếng Anh đang vận hành: ${contextData.trainingModules}

Câu hỏi/Yêu cầu của người dùng:
"${prompt}"

Hãy trả lời chuyên nghiệp, bám sát chuyên môn ngành Ngôn ngữ Anh (Biên-Phiên dịch, Tiếng Anh Thương mại, TESOL, IELTS/VSTEP) và các chỉ số quản lý thực tế của trường Đại học Bình Dương.`
      })
    });

    const data = await res.json();
    loadingDiv.remove();

    if (data.text) {
      appendAiMessage('assistant', data.text);
    } else {
      appendAiMessage('assistant', 'Đã xử lý xong yêu cầu. Hãy kiểm tra các mục đào tạo và báo cáo hành chính.');
    }
  } catch (err) {
    loadingDiv.remove();
    console.error('AI Request Error:', err);
    // Smart offline fallback
    appendAiMessage('assistant', `[AI Cố Vấn Ngôn Ngữ Anh]: Dựa trên dữ liệu hiện tại của ${state.students.length} sinh viên ngành Ngôn ngữ Anh, chúng tôi đề xuất:
1. Tập trung phụ đạo các học phần Kỹ năng Viết (Writing) và Nghe - Nói nâng cao cho ${state.students.filter(s => s.gpa < 2.0).length} sinh viên đang thuộc diện cảnh báo học vụ.
2. Tăng cường tổ chức thi thử IELTS & VSTEP B2 định kỳ vào tuần thứ 10 của học kỳ.
3. Hoàn thiện số hóa hồ sơ 5W minh chứng phục vụ kiểm định chất lượng theo chuẩn AUN-QA.`);
  }
}

function sendQuickAiPrompt(type) {
  const input = document.getElementById('aiChatInput');
  if (!input) return;

  if (type === 'advisor') {
    input.value = 'Phân tích tình trạng học vụ các khóa K25-K28 ngành Ngôn ngữ Anh và lập danh sách sinh viên cần tư vấn cải thiện điểm GPA & IELTS.';
  } else if (type === 'curriculum') {
    input.value = 'Đề xuất giải pháp nâng cao tỷ lệ đạt chuẩn đầu ra VSTEP B2 / IELTS 6.5 cho sinh viên Ngôn ngữ Anh trước khi tốt nghiệp.';
  } else if (type === 'report') {
    input.value = 'Dự thảo Tóm tắt Điều hành gửi Ban Giám Hiệu về kết quả thực hiện tuần/tháng/quý của Khoa Ngoại Ngữ.';
  } else if (type === 'evidence') {
    input.value = 'Kiểm tra tính hợp lệ và thẩm định điểm rèn luyện 5W cho các hồ sơ chứng chỉ IELTS và hoạt động tình nguyện.';
  }
  submitAiChat();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

// 13. Excel Master Export (SheetJS)
function exportMasterExcel() {
  if (typeof XLSX === 'undefined') {
    showToast('Thư viện SheetJS chưa được tải!', 'danger');
    return;
  }
  const wb = XLSX.utils.book_new();

  // Sheet 1: Lecturers
  const s1 = state.lecturers.map((l, i) => ({ 'STT': i+1, 'Mã CB': l.code, 'Họ Tên': l.name, 'Học Vị': l.degree, 'Tổ Bộ Môn': l.department, 'Chức Vụ': l.position, 'Email': l.email, 'SĐT': l.phone, 'Học Phần': l.modules }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s1), '1_Giang_Vien');

  // Sheet 2: Collaborators
  const s2 = state.collaborators.map((c, i) => ({ 'STT': i+1, 'Mã CTV': c.code, 'Họ Tên': c.name, 'Vai Trò': c.role, 'Đơn Vị': c.org, 'Học Phần': c.courses, 'Số Giờ': c.hours, 'Hợp Đồng': c.contract }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s2), '2_Cong_Tac_Vien');

  // Sheet 3: Students
  const s3 = state.students.map((s, i) => ({ 'STT': i+1, 'MSSV': s.code, 'Họ Tên': s.name, 'Khóa': s.cohort, 'Chuyên Ngành': s.major, 'GPA': s.gpa, 'Trạng Thái': s.status, 'Cố Vấn': s.advisor, 'Email': s.email }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s3), '3_Sinh_Vien');

  // Sheet 4: Evidence
  const s4 = state.evidence.map((e, i) => ({ 'STT': i+1, 'Minh Chứng': e.title, 'Phân Loại': e.category, 'MSSV': e.studentCode, 'Họ Tên': e.studentName, 'Đơn Vị Cấp': e.issuer, 'Điểm RL': e.points, 'Link Drive': e.driveUrl }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s4), '4_Minh_Chung');

  // Sheet 5: Training
  const s5 = state.training.map((t, i) => ({ 'STT': i+1, 'Mã HP': t.code, 'Tên Môn': t.name, 'Giảng Viên': t.lecturer, 'Hệ': t.program, 'Tiết Đã Học': `${t.completedLessons}/${t.totalLessons}`, 'Chuyên Cần (%)': t.attendance }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s5), '5_Dao_Tao');

  // Sheet 6: Tasks
  const s6 = state.tasks.map((tk, i) => ({ 'STT': i+1, 'Bộ Phận': tk.role, 'Nhiệm Vụ': tk.title, 'Phụ Trách': tk.assignee, 'Hạn Chót': tk.deadline, 'Ưu Tiên': tk.priority, 'Trạng Thái': tk.status }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s6), '6_Nhiem_Vu');

  // Sheet 7: Research
  const s7 = state.research.map((r, i) => ({ 'STT': i+1, 'Mã Đề Tài': r.code, 'Tên Đề Tài': r.title, 'GV Hướng Dẫn': r.mentor, 'Sinh Viên': r.students, 'Cấp': r.level, 'Sản Phẩm': r.output, 'Trạng Thái': r.status }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s7), '7_NCKH');

  XLSX.writeFile(wb, `BDU_Master_NgonNguAnh_Database_${new Date().toISOString().slice(0, 10)}.xlsx`);
  showToast('Đã xuất file Master Excel toàn bộ dữ liệu Khoa Ngôn ngữ Anh thành công!', 'success');
}

// 14. Standalone Offline Web App Export (Preserves 100% UI and State)
function openExportAppModal() {
  const modal = document.getElementById('modalExportApp');
  if (modal) modal.classList.add('active');
}

function closeExportAppModal() {
  const modal = document.getElementById('modalExportApp');
  if (modal) modal.classList.remove('active');
}

async function downloadStandaloneHtmlApp() {
  try {
    showToast('Đang đóng gói file ứng dụng web độc lập...', 'info');

    // 1. Fetch current stylesheet content to embed inline
    let cssContent = '';
    try {
      const res = await fetch('/style.css');
      if (res.ok) {
        cssContent = await res.text();
      }
    } catch (e) {
      console.warn('Could not fetch /style.css, extracting from styleSheets', e);
    }

    // 2. Fetch current script content to embed inline
    let jsContent = '';
    try {
      const res = await fetch('/script.js');
      if (res.ok) {
        jsContent = await res.text();
      }
    } catch (e) {
      console.warn('Could not fetch /script.js', e);
    }

    // 3. Serialize live application state
    const stateJson = JSON.stringify(state);

    // 4. Construct complete self-contained HTML
    const docClone = document.documentElement.cloneNode(true);

    // Remove any active modals overlay
    docClone.querySelectorAll('.bdu-modal-overlay').forEach(m => m.classList.remove('active'));

    // Replace <link rel="stylesheet" href="/style.css"> with inline <style>
    const linkStyle = docClone.querySelector('link[href*="style.css"]');
    if (linkStyle && cssContent) {
      const styleEl = document.createElement('style');
      styleEl.textContent = cssContent;
      linkStyle.replaceWith(styleEl);
    } else if (cssContent) {
      const head = docClone.querySelector('head') || docClone;
      const styleEl = document.createElement('style');
      styleEl.textContent = cssContent;
      head.appendChild(styleEl);
    }

    // Replace <script src="/script.js"> with inline script containing embedded state
    const scriptTag = docClone.querySelector('script[src*="script.js"]');
    const embeddedScript = document.createElement('script');
    
    // Inject script that overrides initial state with latest state and runs
    embeddedScript.textContent = `
      // Injected State from Export
      window.__OFFLINE_INITIAL_STATE__ = ${stateJson};
      ${jsContent}
      
      // Auto hydrate with saved state if available
      if (typeof state !== 'undefined' && window.__OFFLINE_INITIAL_STATE__) {
        Object.assign(state, window.__OFFLINE_INITIAL_STATE__);
      }
    `;

    if (scriptTag) {
      scriptTag.replaceWith(embeddedScript);
    } else {
      const body = docClone.querySelector('body') || docClone;
      body.appendChild(embeddedScript);
    }

    const fullHtml = '<!DOCTYPE html>\n' + docClone.outerHTML;

    // 5. Trigger download
    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BDU_KhoaNgoaiNgu_App_Offline_${new Date().toISOString().slice(0, 10)}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    closeExportAppModal();
    showToast('Đã tải xuống file Web App Offline thành công! Bạn có thể mở chạy trực tiếp trên máy tính mọi lúc mọi nơi.', 'success');
  } catch (err) {
    console.error('Lỗi đóng gói file HTML:', err);
    showToast('Không thể đóng gói file HTML độc lập. Vui lòng thử lại!', 'danger');
  }
}

function printCurrentView() {
  window.print();
}

// 12. Modal Bindings
function initModals() {
  // Add Staff
  const fStaff = document.getElementById('formAddStaff');
  if (fStaff) {
    fStaff.onsubmit = (e) => {
      e.preventDefault();
      const code = document.getElementById('staffCode').value.trim();
      const name = document.getElementById('staffName').value.trim();
      const role = document.getElementById('staffRole').value;
      const dept = document.getElementById('staffDept').value;
      const office = document.getElementById('staffOffice').value.trim();
      const phone = document.getElementById('staffPhone').value.trim();
      const email = document.getElementById('staffEmail').value.trim();
      const tasks = document.getElementById('staffTasks').value.trim();
      state.staff.unshift({
        id: Date.now(), code, name, role, dept, office, phone, email, tasks
      });
      renderStaff();
      renderInfoHub();
      updateCounters();
      document.getElementById('modalAddStaff')?.classList.remove('active');
      fStaff.reset();
      showToast(`Đã thêm nhân viên ${name}!`, 'success');
    };
  }

  // Add Lecturer
  const fLec = document.getElementById('formAddLecturer');
  if (fLec) {
    fLec.onsubmit = (e) => {
      e.preventDefault();
      const code = document.getElementById('lecCode').value.trim();
      const name = document.getElementById('lecName').value.trim();
      const degree = document.getElementById('lecDegree').value;
      const dept = document.getElementById('lecDepartment').value;
      const email = document.getElementById('lecEmail').value.trim();
      state.lecturers.unshift({
        id: Date.now(), code, name, degree, department: dept, position: 'Giảng viên cơ hữu', status: 'Đang công tác', email, advisingClass: '', modules: 'Ngôn ngữ Anh cơ sở & chuyên ngành'
      });
      renderLecturers();
      renderInfoHub();
      updateCounters();
      document.getElementById('modalAddLecturer')?.classList.remove('active');
      fLec.reset();
      showToast(`Đã thêm giảng viên ${name}!`, 'success');
    };
  }

  // Add Collaborator
  const fCol = document.getElementById('formAddCollaborator');
  if (fCol) {
    fCol.onsubmit = (e) => {
      e.preventDefault();
      const code = document.getElementById('collabCode').value.trim();
      const name = document.getElementById('collabName').value.trim();
      const role = document.getElementById('collabRole').value;
      const org = document.getElementById('collabOrg').value.trim();
      const courses = document.getElementById('collabCourses').value.trim();
      state.collaborators.unshift({
        id: Date.now(), code, name, role, degree: 'ThS.', org, courses, hours: 30, contract: 'Đang hiệu lực', rating: 'Tốt'
      });
      renderCollaborators();
      updateCounters();
      document.getElementById('modalAddCollaborator')?.classList.remove('active');
      fCol.reset();
      showToast(`Đã thêm cộng tác viên ${name}!`, 'success');
    };
  }

  // Add Student
  const fStu = document.getElementById('formAddStudent');
  if (fStu) {
    fStu.onsubmit = (e) => {
      e.preventDefault();
      const code = document.getElementById('stuCode').value.trim();
      const name = document.getElementById('stuName').value.trim();
      const cohort = document.getElementById('stuCohort').value;
      const major = document.getElementById('stuMajor').value;
      const status = document.getElementById('stuStatus').value;
      const gpa = parseFloat(document.getElementById('stuGpa').value) || 3.0;
      const advisor = document.getElementById('stuAdvisor').value.trim();
      const email = document.getElementById('stuEmail').value.trim();
      state.students.unshift({ id: Date.now(), code, name, cohort, major, status, gpa, advisor, email });
      renderStudents();
      updateCounters();
      document.getElementById('modalAddStudent')?.classList.remove('active');
      fStu.reset();
      showToast(`Đã thêm sinh viên ${name}!`, 'success');
    };
  }

  // Add Evidence
  const fEv = document.getElementById('formAddEvidence');
  if (fEv) {
    fEv.onsubmit = (e) => {
      e.preventDefault();
      const stuCode = document.getElementById('evStudentSelect').value;
      const stu = state.students.find(s => s.code === stuCode);
      const newEv = {
        id: Date.now(),
        folderId: document.getElementById('evFolderSelect').value,
        title: document.getElementById('evTitle').value.trim(),
        category: document.getElementById('evCategory').value,
        datetime: document.getElementById('evDatetime').value,
        location: document.getElementById('evLocation').value.trim(),
        issuer: document.getElementById('evIssuer').value.trim(),
        studentCode: stuCode,
        studentName: stu ? stu.name : 'Sinh Viên BDU',
        points: parseInt(document.getElementById('evPoints').value) || 10,
        imageUrl: document.getElementById('evImageUrl').value.trim() || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
        driveUrl: document.getElementById('evDriveUrl').value.trim() || 'https://drive.google.com'
      };
      state.evidence.unshift(newEv);
      renderEvidenceMainArea();
      updateCounters();
      document.getElementById('modalAddEvidence')?.classList.remove('active');
      fEv.reset();
      showToast(`Đã tải minh chứng ${newEv.title}!`, 'success');
    };
  }

  // Modal open & close buttons
  document.getElementById('btnOpenAddStaff')?.addEventListener('click', () => document.getElementById('modalAddStaff')?.classList.add('active'));
  document.getElementById('closeAddStaff')?.addEventListener('click', () => document.getElementById('modalAddStaff')?.classList.remove('active'));
  document.getElementById('btnCancelAddStaff')?.addEventListener('click', () => document.getElementById('modalAddStaff')?.classList.remove('active'));

  document.getElementById('btnOpenAddLecturer')?.addEventListener('click', () => document.getElementById('modalAddLecturer')?.classList.add('active'));
  document.getElementById('closeAddLecturer')?.addEventListener('click', () => document.getElementById('modalAddLecturer')?.classList.remove('active'));
  document.getElementById('btnCancelAddLecturer')?.addEventListener('click', () => document.getElementById('modalAddLecturer')?.classList.remove('active'));

  document.getElementById('btnOpenAddCollaborator')?.addEventListener('click', () => document.getElementById('modalAddCollaborator')?.classList.add('active'));
  document.getElementById('closeAddCollaborator')?.addEventListener('click', () => document.getElementById('modalAddCollaborator')?.classList.remove('active'));
  document.getElementById('btnCancelAddCollaborator')?.addEventListener('click', () => document.getElementById('modalAddCollaborator')?.classList.remove('active'));

  document.getElementById('btnOpenAddStudent')?.addEventListener('click', () => document.getElementById('modalAddStudent')?.classList.add('active'));
  document.getElementById('closeAddStudent')?.addEventListener('click', () => document.getElementById('modalAddStudent')?.classList.remove('active'));
  document.getElementById('btnCancelAddStudent')?.addEventListener('click', () => document.getElementById('modalAddStudent')?.classList.remove('active'));

  document.getElementById('btnOpenAddEvidence')?.addEventListener('click', () => {
    populateFolderSelect();
    document.getElementById('modalAddEvidence')?.classList.add('active');
  });
  document.getElementById('closeAddEvidence')?.addEventListener('click', () => document.getElementById('modalAddEvidence')?.classList.remove('active'));
  document.getElementById('btnCancelAddEvidence')?.addEventListener('click', () => document.getElementById('modalAddEvidence')?.classList.remove('active'));

  // Excel Center Modal & Actions
  document.getElementById('btnOpenExcelCenter')?.addEventListener('click', openExcelCenterModal);
  document.getElementById('closeExcelCenter')?.addEventListener('click', closeExcelCenterModal);
  document.getElementById('btnCancelExcelCenter')?.addEventListener('click', closeExcelCenterModal);
  document.getElementById('btnDownloadExcelTemplate')?.addEventListener('click', downloadMasterExcelTemplate);
  document.getElementById('btnExportFullExcel')?.addEventListener('click', exportFullMasterExcel);
  document.getElementById('btnApplyExcelData')?.addEventListener('click', applyExcelDataToSystem);
  document.getElementById('btnCancelExcelPreview')?.addEventListener('click', resetExcelUploadArea);

  // Export App Modal & Standalone Download Actions
  document.getElementById('btnOpenExportAppModal')?.addEventListener('click', openExportAppModal);
  document.getElementById('closeExportApp')?.addEventListener('click', closeExportAppModal);
  document.getElementById('btnCancelExportApp')?.addEventListener('click', closeExportAppModal);
  document.getElementById('btnDownloadStandaloneHtml')?.addEventListener('click', downloadStandaloneHtmlApp);
  document.getElementById('btnPrintInterfacePdf')?.addEventListener('click', printCurrentView);
  document.getElementById('btnExportWordDocFromModal')?.addEventListener('click', downloadWordDoc);
  document.getElementById('btnExportMasterExcelFromModal')?.addEventListener('click', exportMasterExcel);

  const fileInput = document.getElementById('excelFileInput');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) handleExcelFileSelect(file);
    });
  }

  const dropzone = document.getElementById('excelUploadDropzone');
  if (dropzone) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--bdu-accent)';
      dropzone.style.background = 'var(--primary-light)';
    });
    dropzone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--border-color)';
      dropzone.style.background = 'transparent';
    });
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--border-color)';
      dropzone.style.background = 'transparent';
      const file = e.dataTransfer.files?.[0];
      if (file) handleExcelFileSelect(file);
    });
  }

  // AI Assistant Modal & Actions
  document.getElementById('btnOpenAiModal')?.addEventListener('click', openAiAssistantModal);
  document.getElementById('btnFloatingAi')?.addEventListener('click', openAiAssistantModal);
  document.getElementById('btnOpenAiAssistantTop')?.addEventListener('click', openAiAssistantModal);
  document.getElementById('closeAiAssistant')?.addEventListener('click', closeAiAssistantModal);
  document.getElementById('btnSendAiPrompt')?.addEventListener('click', submitAiChat);
  document.getElementById('aiChatInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitAiChat();
    }
  });

  document.getElementById('btnQuickAiAdvisor')?.addEventListener('click', () => sendQuickAiPrompt('advisor'));
  document.getElementById('btnQuickAiCurriculum')?.addEventListener('click', () => sendQuickAiPrompt('curriculum'));
  document.getElementById('btnQuickAiReport')?.addEventListener('click', () => sendQuickAiPrompt('report'));
  document.getElementById('btnQuickAiEvidence')?.addEventListener('click', () => sendQuickAiPrompt('evidence'));

  // Close when clicking overlay backdrop
  document.querySelectorAll('.bdu-modal-overlay').forEach(ov => {
    ov.addEventListener('click', (e) => {
      if (e.target === ov) ov.classList.remove('active');
    });
  });
}

// 13. Spotlight Search (Ctrl + K)
function initSpotlight() {
  const modal = document.getElementById('modalSpotlight');
  const input = document.getElementById('spotlightInput');
  const results = document.getElementById('spotlightResults');

  function open() {
    if (modal && input) {
      modal.classList.add('active');
      input.value = '';
      input.focus();
      search('');
    }
  }

  function close() {
    if (modal) modal.classList.remove('active');
  }

  document.getElementById('btnOpenSpotlight')?.addEventListener('click', open);

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open();
    }
    if (e.key === 'Escape') close();
  });

  function search(q) {
    if (!results) return;
    const query = q.toLowerCase().trim();
    const list = [];

    state.leadership.forEach(l => {
      if (!query || l.name.toLowerCase().includes(query) || l.title.toLowerCase().includes(query)) {
        list.push({ title: `${l.name} (${l.title})`, sub: `Lãnh đạo Khoa • ${l.dept}`, tab: 'tab-portal-students' });
      }
    });
    state.staff.forEach(s => {
      if (!query || s.name.toLowerCase().includes(query) || s.code.toLowerCase().includes(query)) {
        list.push({ title: `${s.name} (${s.code})`, sub: `Nhân viên • ${s.dept} • ${s.role}`, tab: 'tab-portal-students' });
      }
    });
    state.lecturers.forEach(l => {
      if (!query || l.name.toLowerCase().includes(query) || l.code.toLowerCase().includes(query)) {
        list.push({ title: `${l.name} (${l.code})`, sub: `Giảng viên • ${l.department} • ${l.degree}`, tab: 'tab-portal-students' });
      }
    });
    state.collaborators.forEach(c => {
      if (!query || c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query)) {
        list.push({ title: `${c.name} (${c.code})`, sub: `Cộng tác viên • ${c.org} • ${c.role}`, tab: 'tab-portal-students' });
      }
    });
    state.students.forEach(s => {
      if (!query || s.name.toLowerCase().includes(query) || s.code.toLowerCase().includes(query)) {
        list.push({ title: `${s.name} (${s.code})`, sub: `Sinh viên • ${s.cohort} • GPA: ${s.gpa.toFixed(2)}`, tab: 'tab-portal-students' });
      }
    });
    state.evidence.forEach(ev => {
      if (!query || ev.title.toLowerCase().includes(query)) {
        list.push({ title: ev.title, sub: `${ev.studentName} • ${ev.category} (+${ev.points}đ)`, tab: 'tab-evidence' });
      }
    });

    results.innerHTML = list.slice(0, 8).map(item => `
      <div class="spotlight-item" onclick="switchToTab('${item.tab}'); document.getElementById('modalSpotlight').classList.remove('active');">
        <i class="fa-solid fa-arrow-right text-primary"></i>
        <div>
          <div style="font-weight:700; color:var(--text-main); font-size:13.5px;">${item.title}</div>
          <div style="font-size:11.5px; color:var(--text-muted);">${item.sub}</div>
        </div>
      </div>
    `).join('') || '<div style="text-align:center; padding:20px; color:var(--text-muted);">Không tìm thấy kết quả.</div>';
  }

  input?.addEventListener('input', (e) => search(e.target.value));
}

// 14. Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initHeroSlider();
  initSpotlight();
  initModals();

  // Navigation tab clicks
  document.querySelectorAll('.bdu-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const t = item.dataset.tab;
      if (t) switchToTab(t);
    });
  });

  // Alpha Sort Click Listeners
  document.getElementById('btnSortInfoAlpha')?.addEventListener('click', toggleSortInfoDirectory);
  document.getElementById('btnSortStaffAlpha')?.addEventListener('click', toggleSortStaff);
  document.getElementById('btnSortLecturersAlpha')?.addEventListener('click', toggleSortLecturers);
  document.getElementById('btnSortCollaboratorsAlpha')?.addEventListener('click', toggleSortCollaborators);
  document.getElementById('btnSortStudentsAlpha')?.addEventListener('click', toggleSortStudents);
  document.getElementById('btnSortMatrixAlpha')?.addEventListener('click', toggleSortWorkMatrix);

  // Filters - Staff
  document.getElementById('filterStaffDept')?.addEventListener('change', renderStaff);
  document.getElementById('searchStaff')?.addEventListener('input', renderStaff);

  // Filters - Matrix
  document.getElementById('filterMatrixRole')?.addEventListener('change', renderWorkMatrix);
  document.getElementById('searchMatrix')?.addEventListener('input', renderWorkMatrix);

  // Filters - Lecturers
  ['filterLecturerDept', 'filterLecturerDegree', 'filterLecturerStatus'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderLecturers);
  });
  document.getElementById('searchLecturer')?.addEventListener('input', renderLecturers);

  // Filters - Collaborators
  document.getElementById('filterCollabRole')?.addEventListener('change', renderCollaborators);
  document.getElementById('searchCollaborator')?.addEventListener('input', renderCollaborators);

  // Filters - Students
  ['filterStudentCohort', 'filterStudentMajor', 'filterStudentStatus'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderStudents);
  });
  document.getElementById('searchStudent')?.addEventListener('input', renderStudents);

  // Filters - Evidence
  document.getElementById('filterEvidenceFolder')?.addEventListener('change', (e) => navigateToFolder(e.target.value));
  document.getElementById('filterEvidenceCat')?.addEventListener('change', renderEvidenceMainArea);
  document.getElementById('searchEvidence')?.addEventListener('input', renderEvidenceMainArea);

  // Filters - Training
  document.getElementById('filterTrainingProgram')?.addEventListener('change', renderTrainingTable);
  document.getElementById('searchTraining')?.addEventListener('input', renderTrainingTable);

  // Filters - Tasks
  ['filterTaskRole', 'filterTaskStatus'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderTaskView);
  });
  document.getElementById('searchTask')?.addEventListener('input', renderTaskView);

  // Filters - Research
  document.getElementById('filterResearchLevel')?.addEventListener('change', renderResearchTable);
  document.getElementById('searchResearch')?.addEventListener('input', renderResearchTable);

  // Reports
  document.getElementById('reportFrequencySelect')?.addEventListener('change', handleReportFrequencyChange);
  document.getElementById('reportPeriodSelect')?.addEventListener('change', handleReportPeriodChange);
  document.getElementById('inputReportDate')?.addEventListener('change', (e) => {
    state.reportDate = e.target.value;
    generateCurrentReport();
  });

  // Master Excel Export
  document.getElementById('btnExportQuickMasterExcel')?.addEventListener('click', exportMasterExcel);
  document.getElementById('btnDownloadWordDoc')?.addEventListener('click', downloadWordDoc);
  document.getElementById('btnMainPageDownloadWord')?.addEventListener('click', downloadWordDoc);
  document.getElementById('btnPrintReport')?.addEventListener('click', () => window.print());
  document.getElementById('btnMainPagePrintReport')?.addEventListener('click', () => window.print());

  // Theme Switcher
  document.getElementById('btnToggleTheme')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    const ic = document.getElementById('themeIcon');
    if (ic) ic.className = next === 'dark' ? 'fa-solid fa-sun text-amber' : 'fa-solid fa-moon';
    showToast(`Đã chuyển sang giao diện ${next === 'dark' ? 'Ban Đêm' : 'Ban Ngày'}`, 'info');
  });

  // Mobile Menu
  const mbToggle = document.getElementById('btnToggleMobileMenu');
  const sb = document.getElementById('bduSidebar');
  const bd = document.getElementById('bduSidebarBackdrop');
  mbToggle?.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      sb?.classList.toggle('mobile-open');
      bd?.classList.toggle('active');
    } else {
      sb?.classList.toggle('collapsed');
    }
  });
  bd?.addEventListener('click', () => {
    sb?.classList.remove('mobile-open');
    bd?.classList.remove('active');
  });
  document.getElementById('btnCloseSidebarMobile')?.addEventListener('click', () => {
    sb?.classList.remove('mobile-open');
    bd?.classList.remove('active');
  });

  // Notifications
  const btnNotif = document.getElementById('btnToggleNotif');
  const popNotif = document.getElementById('notifPopover');
  btnNotif?.addEventListener('click', (e) => {
    e.stopPropagation();
    popNotif?.classList.toggle('active');
  });
  document.getElementById('btnClearNotifs')?.addEventListener('click', () => popNotif?.classList.remove('active'));
  document.addEventListener('click', (e) => {
    if (!popNotif?.contains(e.target) && e.target !== btnNotif) {
      popNotif?.classList.remove('active');
    }
  });

  // Report initial setup
  populateReportPeriodDropdown();
  const dateInput = document.getElementById('inputReportDate');
  if (dateInput) {
    dateInput.value = state.reportDate || new Date().toISOString().slice(0, 10);
  }

  // Initial tab render
  switchToTab('tab-portal-students');
});



/* ===================================================================
   BỔ SUNG: ĐIỀU HƯỚNG & HÀM CHO index.html BẢN 9 MỤC
   =================================================================== */

// ----- Mục 1: Trung tâm nhân sự (4 tab con) -----
const PERSONNEL_SUBTABS = {
  'subpane-lecturers':     { btn: 'btnSubtabLecturers',     kpi: 'kpiCardLecturers',     render: () => renderLecturers() },
  'subpane-collaborators': { btn: 'btnSubtabCollaborators', kpi: 'kpiCardCollaborators', render: () => renderCollaborators() },
  'subpane-students':      { btn: 'btnSubtabStudents',      kpi: 'kpiCardStudents',      render: () => renderStudents() },
  'subpane-matrix':        { btn: 'btnSubtabMatrix',        kpi: 'kpiCardMatrix',        render: () => renderAdvisorMatrix() }
};

function switchPersonnelSubtab(paneId) {
  if (!PERSONNEL_SUBTABS[paneId]) paneId = 'subpane-lecturers';
  state.personnelSubtab = paneId;
  if (state.currentTab !== 'tab-portal-students') {
    switchToTab('tab-portal-students');
  }
  Object.entries(PERSONNEL_SUBTABS).forEach(([id, cfg]) => {
    document.getElementById(id)?.classList.toggle('active', id === paneId);
    document.getElementById(cfg.btn)?.classList.toggle('active', id === paneId);
    document.getElementById(cfg.kpi)?.classList.toggle('active', id === paneId);
  });
  safeCall(PERSONNEL_SUBTABS[paneId].render);
}

function renderPersonnelHub() {
  const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  setText('kpiCountLecturers', state.lecturers.length);
  setText('kpiCountCollaborators', state.collaborators.length);
  setText('kpiCountStudents', state.students.length);
  setText('badgeSubtabLecturers', state.lecturers.length);
  setText('badgeSubtabCollaborators', state.collaborators.length);
  setText('badgeSubtabStudents', state.students.length);
  setText('navBadgePersonnel', state.lecturers.length + state.collaborators.length + state.students.length);
  setText('navBadgeForms', 15);
  safeCall(renderAdministrativeReport);
  switchPersonnelSubtab(state.personnelSubtab || 'subpane-lecturers');
}

function renderAdvisorMatrix() {
  const box = document.getElementById('matrixContainer');
  if (!box) return;
  const rows = (state.advisors || []).map(a => {
    const stus = state.students.filter(s => s.advisor === a.name).length;
    return `<tr>
      <td><strong>${escapeHtml(a.name)}</strong></td>
      <td>${escapeHtml(a.classAssigned)} (${escapeHtml(a.cohort)})</td>
      <td>${escapeHtml(a.major)}</td>
      <td style="text-align:center">${a.studentsCount}</td>
      <td style="text-align:center">${stus}</td>
      <td>${escapeHtml(a.schedule)}</td>
      <td><span class="badge badge-student-active">${escapeHtml(a.status)}</span></td>
    </tr>`;
  }).join('');
  box.innerHTML = `
    <div class="bdu-matrix-card">
      <div class="matrix-header-bar"><h3><i class="fa-solid fa-diagram-project text-primary"></i> Cố Vấn Học Tập theo Lớp</h3></div>
      <div style="overflow-x:auto"><table class="matrix-table">
        <thead><tr><th>Cố vấn (GVCN)</th><th>Lớp</th><th>Chuyên ngành</th><th>Sĩ số</th><th>Hồ sơ trên hệ thống</th><th>Lịch tiếp SV</th><th>Trạng thái</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="7">Chưa có dữ liệu phân công.</td></tr>'}</tbody>
      </table></div>
    </div>`;
}

function exportCurrentPersonnelTab() {
  if (typeof XLSX === 'undefined') { showToast('Chưa tải được thư viện Excel (SheetJS).', 'danger'); return; }
  const id = state.personnelSubtab || 'subpane-lecturers';
  const map = {
    'subpane-lecturers': ['GiangVien', state.lecturers],
    'subpane-collaborators': ['CongTacVien', state.collaborators],
    'subpane-students': ['SinhVien', state.students],
    'subpane-matrix': ['CoVan', state.advisors || []]
  };
  const [name, data] = map[id];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), name);
  XLSX.writeFile(wb, `BDU_${name}_${new Date().toISOString().slice(0, 10)}.xlsx`);
  showToast(`Đã xuất Excel: ${name}`, 'success');
}

// ----- Mục 7: Báo cáo (hàm gọi từ index.html) -----
function openReportWithEditMode() {
  switchToTab('tab-reports');
  if (!state.isEditingReport) toggleReportEditMode();
}

function insertReportQuickSnippet(type) {
  const paper = document.getElementById('reportContentArea');
  if (!paper) return;
  if (!state.isEditingReport) toggleReportEditMode();
  const snippets = {
    evaluation: '<h4>ĐÁNH GIÁ CHUNG</h4><p><b>Ưu điểm:</b> ...<br><b>Tồn tại, hạn chế:</b> ...</p>',
    proposal: '<h4>ĐỀ XUẤT, KIẾN NGHỊ BAN GIÁM HIỆU</h4><ul><li>...</li><li>...</li></ul>'
  };
  paper.focus();
  document.execCommand('insertHTML', false, snippets[type] || '');
}

function copyReportToClipboard() {
  const el = document.getElementById('reportContentArea');
  if (!el) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  try { document.execCommand('copy'); showToast('Đã sao chép báo cáo, dán vào Word được.', 'success'); }
  catch (e) { showToast('Không sao chép được, hãy bôi đen và Ctrl+C.', 'warning'); }
  sel.removeAllRanges();
}

// ----- Đăng nhập nhanh (modal BDU) -----
function fillQuickLogin(email, role) {
  const e = document.getElementById('loginEmail');
  const r = document.getElementById('loginRole');
  if (e) e.value = email;
  if (r) r.value = role;
}

// ----- Nối sự kiện cho các nút mới -----
document.addEventListener('DOMContentLoaded', () => {
  const on = (id, ev, fn) => document.getElementById(id)?.addEventListener(ev, fn);

  // Báo cáo
  on('btnToggleEditReport', 'click', () => {
    toggleReportEditMode();
    const lbl = document.getElementById('lblToggleEditReport');
    const bar = document.getElementById('reportEditFormattingBar');
    if (lbl) lbl.textContent = state.isEditingReport ? 'Khóa & Lưu Văn Bản' : 'Chỉnh Sửa Văn Bản';
    if (bar) bar.style.display = state.isEditingReport ? 'flex' : 'none';
  });
  on('btnSyncReportData', 'click', resetReportToLive);
  on('btnResetReportTemplate', 'click', resetReportToLive);
  on('btnSaveCustomReport', 'click', () => {
    const paper = document.getElementById('reportContentArea');
    if (paper) state.customReportHtml = paper.innerHTML;
    document.getElementById('bghCustomSavedBadge')?.style.setProperty('display', 'inline-flex');
    showToast('Đã lưu bản nháp báo cáo.', 'success');
  });
  on('btnCopyReportWord', 'click', copyReportToClipboard);
  on('btnMainPageCopyWord', 'click', () => { renderAdministrativeReport(); copyReportToClipboard(); });

  // Xem nhanh báo cáo ở trang chính
  on('btnToggleBghInlinePreview', 'click', () => {
    const box = document.getElementById('bghInlinePreviewContent');
    const icon = document.getElementById('iconBghPreviewToggle');
    if (!box) return;
    const open = box.style.display === 'none';
    box.style.display = open ? 'block' : 'none';
    if (icon) icon.className = open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  });

  // Banner khẩn cấp
  on('btnCloseEmergencyBanner', 'click', () => {
    document.getElementById('emergencyAlertBanner')?.style.setProperty('display', 'none');
  });

  // Sao lưu / phục hồi dữ liệu JSON
  on('btnBackupData', 'click', () => {
    const { sliderTimer, charts, ...data } = state;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `BDU_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Đã sao lưu dữ liệu.', 'success');
  });
  on('fileRestoreData', 'change', (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        Object.assign(state, JSON.parse(r.result));
        switchToTab(state.currentTab || 'tab-portal-students');
        showToast('Đã phục hồi dữ liệu.', 'success');
      } catch (err) { showToast('File JSON không hợp lệ.', 'danger'); }
    };
    r.readAsText(f);
    e.target.value = '';
  });
});


// ----- Nạp Excel: nút trên từng tab + Trung tâm Excel -----
document.addEventListener('DOMContentLoaded', () => {
  const bindImport = (inputId, hint) => {
    document.getElementById(inputId)?.addEventListener('change', (e) => {
      const f = e.target.files?.[0];
      if (!f) return;
      openExcelCenterModal();          // mở trước (hàm này xoá cache cũ)
      handleExcelFileSelect(f, hint);  // rồi đọc file
      e.target.value = '';
    });
  };
  bindImport('fileImportLecturerExcel', 'giang_vien');
  bindImport('fileImportCollabExcel', 'cong_tac_vien');
  bindImport('fileImportStudentExcel', 'sinh_vien');

  // Xuất từng bảng
  document.getElementById('btnExportLecturerExcel')?.addEventListener('click', () => { state.personnelSubtab = 'subpane-lecturers'; exportCurrentPersonnelTab(); });
  document.getElementById('btnExportCollabExcel')?.addEventListener('click', () => { state.personnelSubtab = 'subpane-collaborators'; exportCurrentPersonnelTab(); });
  document.getElementById('btnExportStudentExcel')?.addEventListener('click', () => { state.personnelSubtab = 'subpane-students'; exportCurrentPersonnelTab(); });
});