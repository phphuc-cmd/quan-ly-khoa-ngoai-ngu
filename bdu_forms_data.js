// ===================================================================
// BDU OFFICIAL ADMINISTRATIVE FORMS & TEMPLATES REPOSITORY
// Nguồn quy chuẩn: https://tuyensinh.bdu.edu.vn/ho-tro-hanh-chinh/van-ban-bieu-mau-587.html
// Trường Đại học Bình Dương - Khoa Ngoại Ngữ
// ===================================================================

const BDU_ADMINISTRATIVE_FORMS_DB = [
  {
    id: 1,
    code: 'BM-HC-01/ĐHBD',
    title: 'Giấy Xác Nhận Sinh Viên (Vay Vốn NHCSXH & Tạm Hoãn NVQS)',
    category: 'thu-tuc-sv',
    categoryName: 'Thủ Tục & Xác Nhận SV',
    target: 'Sinh viên các khóa vay vốn tín dụng HSSV hoặc tạm hoãn NVQS',
    description: 'Xác nhận tư cách sinh viên đang theo học chính quy tại Trường ĐH Bình Dương theo Quyết định 157/2007/QĐ-TTg của Thủ tướng Chính phủ.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Nguyễn Thị Lan', type: 'text' },
      { id: 'gender', label: 'Giới tính', default: 'Nữ', type: 'text' },
      { id: 'birthDate', label: 'Ngày tháng năm sinh', default: '15/08/2006', type: 'text' },
      { id: 'studentId', label: 'Mã số sinh viên (MSSV)', default: '28NN0120', type: 'text' },
      { id: 'idCardNo', label: 'Số CCCD / CMND', default: '074306001234', type: 'text' },
      { id: 'classCohort', label: 'Lớp / Khóa học', default: '28NN01 (Khóa K28)', type: 'text' },
      { id: 'major', label: 'Ngành đào tạo', default: 'Ngôn ngữ Anh', type: 'text' },
      { id: 'courseDuration', label: 'Thời gian khóa học', default: '2024 - 2028 (4 năm / 8 học kỳ)', type: 'text' },
      { id: 'academicYear', label: 'Học kỳ / Năm học xác nhận', default: 'Học kỳ 1 năm học 2026 - 2027', type: 'text' },
      { id: 'tuitionPerTerm', label: 'Mức học phí/học kỳ (đồng)', default: '14.500.000 VNĐ', type: 'text' },
      { id: 'confirmPurpose', label: 'Mục đích xác nhận', default: 'Vay vốn học tập tại Ngân hàng Chính sách Xã hội địa phương & Tạm hoãn nghĩa vụ quân sự', type: 'text' },
      { id: 'permanentAddress', label: 'Hộ khẩu thường trú', default: 'P. Phú Hòa, TP. Thủ Dầu Một, Tỉnh Bình Dương', type: 'text' }
    ]
  },
  {
    id: 2,
    code: 'BM-HC-02/ĐHBD',
    title: 'Đơn Xin Cấp Lại Thẻ Sinh Viên & Mật Khẩu Portal',
    category: 'thu-tuc-sv',
    categoryName: 'Thủ Tục & Xác Nhận SV',
    target: 'Sinh viên bị mất/hỏng thẻ SV hoặc quên mật khẩu cổng đào tạo',
    description: 'Thủ tục làm lại thẻ sinh viên tích hợp thẻ thư viện - ngân hàng và khôi phục quyền truy cập Cổng thông tin đào tạo BDU.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Trần Văn Bình', type: 'text' },
      { id: 'studentId', label: 'Mã số sinh viên', default: '27NN0102', type: 'text' },
      { id: 'classCohort', label: 'Lớp sinh hoạt / Khóa', default: '27NN01 (Khóa K27)', type: 'text' },
      { id: 'phone', label: 'Số điện thoại liên lạc', default: '0912 345 678', type: 'text' },
      { id: 'email', label: 'Email sinh viên (BDU Mail)', default: '27nn0102@bdu.edu.vn', type: 'text' },
      { id: 'requestType', label: 'Loại yêu cầu hỗ trợ', default: 'Cấp lại thẻ sinh viên bị mất + Khôi phục mật khẩu Portal', type: 'text' },
      { id: 'reason', label: 'Lý do xin cấp lại', default: 'Bị rơi ví đánh mất thẻ sinh viên trên đường đi học ngày 28/08/2026.', type: 'textarea' },
      { id: 'feeCommitment', label: 'Lệ phí & Cam kết', default: 'Cam kết nộp lệ phí phôi thẻ (50.000 VNĐ) và sử dụng thẻ đúng quy chế của Trường ĐH Bình Dương.', type: 'text' }
    ]
  },
  {
    id: 3,
    code: 'BM-TC-03/ĐHBD',
    title: 'Đơn Xin Gia Hạn Nộp Học Phí / Đóng Học Phí Theo Đợt',
    category: 'thu-tuc-sv',
    categoryName: 'Thủ Tục & Xác Nhận SV',
    target: 'Sinh viên có hoàn cảnh kinh tế khó khăn xin gia hạn nộp học phí',
    description: 'Hỗ trợ sinh viên chưa kịp hoàn thành học phí đúng hạn, cam kết lộ trình nộp học phí theo đợt để duy trì danh sách thi.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Phạm Minh Đức', type: 'text' },
      { id: 'studentId', label: 'Mã số sinh viên (MSSV)', default: '28NN0104', type: 'text' },
      { id: 'classCohort', label: 'Lớp sinh hoạt / Khóa', default: '28NN02 (Khóa K28)', type: 'text' },
      { id: 'semesterYear', label: 'Học kỳ & Năm học', default: 'Học kỳ 1 năm học 2026 - 2027', type: 'text' },
      { id: 'totalTuition', label: 'Tổng số tiền học phí phải nộp', default: '14.500.000 VNĐ', type: 'text' },
      { id: 'reason', label: 'Lý do xin gia hạn', default: 'Gia đình gặp biến cố kinh tế gia cảnh nông nghiệp gặp bão lũ, kinh phí chưa chuyển kịp thời.', type: 'textarea' },
      { id: 'installmentPlan', label: 'Kế hoạch và cam kết đóng học phí', default: '- Đợt 1: Nộp 7.000.000 VNĐ trước ngày 20/09/2026\n- Đợt 2: Nộp 7.500.000 VNĐ (còn lại) trước ngày 15/11/2026', type: 'textarea' },
      { id: 'commitment', label: 'Cam kết trách nhiệm', default: 'Nếu quá hạn cam kết trên tôi xin hoàn toàn chịu trách nhiệm theo Quy chế đào tạo của Nhà trường.', type: 'text' }
    ]
  },
  {
    id: 4,
    code: 'BM-CTSV-04/ĐHBD',
    title: 'Phiếu Đánh Giá Điểm Rèn Luyện & Minh Chứng 5W',
    category: 'thu-tuc-sv',
    categoryName: 'Thủ Tục & Xác Nhận SV',
    target: 'Tất cả sinh viên Khoa Ngoại Ngữ tự đánh giá ĐRL cuối kỳ',
    description: 'Bảng tự chấm điểm rèn luyện đối chiếu 5 tiêu chí Thông tư 16/BGDĐT kèm đường link minh chứng Activity Hub chuẩn 5W.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Phạm Minh Đức', type: 'text' },
      { id: 'studentId', label: 'Mã số sinh viên', default: '28NN0104', type: 'text' },
      { id: 'classCohort', label: 'Lớp sinh hoạt / Khóa', default: '28NN02 - Khóa K28', type: 'text' },
      { id: 'selfScore', label: 'Điểm sinh viên tự chấm (Thang 100)', default: '88 điểm (Xếp loại: Tốt)', type: 'text' },
      { id: 'evidenceCount', label: 'Tổng số minh chứng kèm theo', default: '04 file minh chứng (Đoàn Thanh niên, Hiến máu nhân đạo, CLB ETC)', type: 'text' },
      { id: 'driveLink', label: 'Đường dẫn thư mục Google Drive', default: 'drive.google.com/drive/folders/01_Hoat_Dong_Doan_Hoi', type: 'text' },
      { id: 'advisorAssessment', label: 'Ý kiến nhận xét của GVCN / Cố vấn', default: 'Sinh viên chấp hành tốt nội quy nhà trường, tích cực tham gia các phong trào khoa.', type: 'textarea' }
    ]
  },
  {
    id: 5,
    code: 'BM-ĐT-05/ĐHBD',
    title: 'Đơn Xin Chuyển Ngành Học / Chuyển Hệ Đào Tạo',
    category: 'hoc-vu',
    categoryName: 'Học Vụ & Đào Tạo',
    target: 'Sinh viên có nguyện vọng chuyển sang ngành học hoặc hệ đào tạo mới',
    description: 'Đơn chuyển đổi ngành/chuyên ngành đào tạo trong khối Trường Đại học Bình Dương theo quy chế tín chỉ.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Lê Hoàng Nam', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '27NN0145', type: 'text' },
      { id: 'currentCohort', label: 'Khóa tuyển sinh / Lớp hiện tại', default: 'K27 - Lớp 27NN02', type: 'text' },
      { id: 'currentMajor', label: 'Ngành học hiện tại', default: 'Ngôn ngữ Anh (Định hướng Tiếng Anh Thương Mại)', type: 'text' },
      { id: 'targetMajor', label: 'Ngành xin chuyển đến', default: 'Ngôn ngữ Trung Quốc (Khoa Ngoại Ngữ - ĐHBD)', type: 'text' },
      { id: 'gpaAccumulated', label: 'Điểm trung bình tích lũy hiện tại (GPA)', default: '3.15 / 4.0 (Xếp loại Khá)', type: 'text' },
      { id: 'reason', label: 'Lý do xin chuyển ngành', default: 'Nhận thấy năng khiếu và định hướng nghề nghiệp của bản thân phù hợp hơn với khối ngành Ngôn ngữ Trung Quốc thương mại.', type: 'textarea' },
      { id: 'commitment', label: 'Cam kết học phần bổ sung', default: 'Cam kết đăng ký học bổ sung các học phần tiên quyết và hoàn thành đầy đủ nghĩa vụ học phí.', type: 'text' }
    ]
  },
  {
    id: 6,
    code: 'BM-ĐT-06/ĐHBD',
    title: 'Đơn Xin Miễn Học Phần / Công Nhận Điểm Quy Đổi Chứng Chỉ',
    category: 'hoc-vu',
    categoryName: 'Học Vụ & Đào Tạo',
    target: 'Sinh viên có chứng chỉ Ngoại ngữ (IELTS/TOEIC/VSTEP) hoặc Tin học (MOS/IC3)',
    description: 'Đơn xin miễn học, miễn thi và quy đổi điểm các học phần chuẩn đầu ra theo bảng quy chuẩn tương đương của BDU.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Đỗ Thị Giang', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '28NN0107', type: 'text' },
      { id: 'classCohort', label: 'Lớp / Khóa', default: '28NN01 (Khóa K28)', type: 'text' },
      { id: 'certName', label: 'Tên chứng chỉ quốc tế / Quốc gia', default: 'Chứng chỉ IELTS Academic (IDP / British Council)', type: 'text' },
      { id: 'certScore', label: 'Điểm số / Bậc năng lực đạt được', default: 'IELTS Overall: 6.5 (Listening: 7.0, Reading: 6.5, Writing: 6.0, Speaking: 6.5)', type: 'text' },
      { id: 'certIssueDate', label: 'Ngày cấp & Đơn vị cấp', default: 'Ngày 12/04/2026 do Hội đồng Anh (British Council) cấp', type: 'text' },
      { id: 'requestedExemption', label: 'Các học phần xin miễn & quy đổi điểm A (10.0)', default: '1. Tiếng Anh Giao Tiếp 1 (ENG101 - 3 tín chỉ)\n2. Tiếng Anh Giao Tiếp 2 (ENG102 - 3 tín chỉ)\n3. Nghe Nói Nâng Cao 1 (ENG201 - 3 tín chỉ)', type: 'textarea' },
      { id: 'attachments', label: 'Hồ sơ đính kèm', default: 'Bản sao công chứng bảng điểm IELTS + Bản gốc đối chiếu.', type: 'text' }
    ]
  },
  {
    id: 7,
    code: 'BM-ĐT-07/ĐHBD',
    title: 'Đơn Xin Nghỉ Học Tạm Thời & Bảo Lưu Kết Quả Học Tập',
    category: 'hoc-vu',
    categoryName: 'Học Vụ & Đào Tạo',
    target: 'Sinh viên xin tạm ngừng học tập vì lý do sức khỏe, gia đình hoặc NVQS',
    description: 'Dành cho sinh viên xin nghỉ học tạm thời và bảo lưu kết quả học tập từ 1 đến 2 học kỳ chính theo Quy chế đào tạo.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Hoàng Thị Dung', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '27NN0108', type: 'text' },
      { id: 'classCohort', label: 'Lớp / Khóa', default: '27NN01 (Khóa K27)', type: 'text' },
      { id: 'leaveDuration', label: 'Thời gian xin nghỉ tạm thời', default: '01 học kỳ (Học kỳ 1 năm học 2026 - 2027)', type: 'text' },
      { id: 'leaveReason', label: 'Lý do xin bảo lưu', default: 'Thực hiện Nghĩa vụ Quân sự theo Lệnh gọi nhập ngũ của Hội đồng NVQS địa phương (Có lệnh gọi đính kèm).', type: 'textarea' },
      { id: 'rejoinDate', label: 'Thời điểm dự kiến quay lại học tập', default: 'Học kỳ 2 năm học 2026 - 2027 (Tháng 02/2027)', type: 'text' },
      { id: 'guardianName', label: 'Họ tên Phụ huynh bảo lãnh', default: 'Hoàng Văn Cường (SĐT: 0987 654 321)', type: 'text' }
    ]
  },
  {
    id: 8,
    code: 'BM-ĐT-08/ĐHBD',
    title: 'Đơn Xin Trở Lại Học Tiếp Sau Thời Gian Bảo Lưu',
    category: 'hoc-vu',
    categoryName: 'Học Vụ & Đào Tạo',
    target: 'Sinh viên hết hạn thời gian bảo lưu nộp đơn xin tiếp tục theo học',
    description: 'Thủ tục tiếp nhận sinh viên trở lại học tập sau khi hoàn thành thời gian nghỉ tạm thời/nghĩa vụ quân sự/điều trị.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Hoàng Thị Dung', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '27NN0108', type: 'text' },
      { id: 'originalClass', label: 'Lớp / Khóa trước khi bảo lưu', default: '27NN01 (Khóa K27 - Khoa Ngoại Ngữ)', type: 'text' },
      { id: 'leaveDecisionNo', label: 'Số Quyết định cho nghỉ học tạm thời', default: 'QĐ số 215/QĐ-ĐHBD ngày 15/09/2025 của Hiệu trưởng BDU', type: 'text' },
      { id: 'returnSemester', label: 'Học kỳ xin trở lại học', default: 'Học kỳ 1 năm học 2026 - 2027', type: 'text' },
      { id: 'proposedClass', label: 'Lớp sinh hoạt & chuyên ngành dự kiến ghép', default: 'Lớp 28NN01 (Khóa K28) - Chuyên ngành Ngôn ngữ Anh', type: 'text' },
      { id: 'healthStatus', label: 'Tình trạng sức khỏe & điều kiện học tập', default: 'Đã hoàn thành xuất sắc nghĩa vụ, sức khỏe loại 1 đủ điều kiện học tập tốt.', type: 'text' }
    ]
  },
  {
    id: 9,
    code: 'BM-KT-09/ĐHBD',
    title: 'Đơn Xin Phúc Khảo Bài Thi Kết Thúc Học Phần',
    category: 'khao-thi',
    categoryName: 'Khảo Thí & Điểm Thi',
    target: 'Sinh viên có thắc mắc hoặc khiếu nại về điểm thi kết thúc môn',
    description: 'Thủ tục xin chấm phúc khảo bài thi tự luận hoặc trắc nghiệm trong thời hạn 15 ngày kể từ ngày công bố điểm thi.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Nguyễn Văn An', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '26NN0101', type: 'text' },
      { id: 'classCohort', label: 'Lớp sinh hoạt / Khóa', default: '26NN01 (Khóa K26)', type: 'text' },
      { id: 'courseName', label: 'Tên học phần xin phúc khảo', default: 'Tiếng Anh Biên Dịch 1 (ENG301)', type: 'text' },
      { id: 'examDate', label: 'Ngày thi & Ca thi', default: '15/08/2026 - Ca 3 (13h30) - Phòng thi A2.04', type: 'text' },
      { id: 'examCode', label: 'Mã đề thi (nếu có)', default: 'ENG301-A', type: 'text' },
      { id: 'publishedScore', label: 'Điểm số đã công bố', default: '5.5 điểm (Thang 10)', type: 'text' },
      { id: 'reviewReason', label: 'Lý do đề nghị chấm phúc khảo', default: 'Đối chiếu với đáp án và biểu điểm mẫu của Khoa, nhận thấy phần dịch đoạn văn chuyên ngành thương mại làm đúng trọng tâm, kính xin chấm lại để đánh giá chính xác.', type: 'textarea' },
      { id: 'feeReceipt', label: 'Lệ phí phúc khảo', default: 'Đã nộp lệ phí 50.000 VNĐ/học phần theo quy định của Phòng Đào tạo & Khảo thí.', type: 'text' }
    ]
  },
  {
    id: 10,
    code: 'BM-KT-10/ĐHBD',
    title: 'Đơn Xin Hoãn Thi / Vắng Thi Có Lý Do Chính Đáng',
    category: 'khao-thi',
    categoryName: 'Khảo Thí & Điểm Thi',
    target: 'Sinh viên ốm đau, tai nạn hoặc lý do bất khả kháng vắng thi',
    description: 'Dành cho sinh viên không thể tham dự kỳ thi kết thúc học phần đúng lịch, xin bảo lưu điều kiện để thi bù đợt sau.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Nguyễn Thị Lan', type: 'text' },
      { id: 'studentId', label: 'Mã số sinh viên (MSSV)', default: '28NN0120', type: 'text' },
      { id: 'cohortClass', label: 'Lớp / Khóa', default: '28NN01 (Khóa K28)', type: 'text' },
      { id: 'courseName', label: 'Học phần / Môn xin hoãn thi', default: 'Tiếng Anh Giao Tiếp 1 (ENG101)', type: 'text' },
      { id: 'examDate', label: 'Ngày & Ca thi theo lịch', default: '15/09/2026 - Ca 2 (09h30)', type: 'text' },
      { id: 'lecturerName', label: 'Giảng viên phụ trách môn học', default: 'TS. Nguyễn Văn A', type: 'text' },
      { id: 'reason', label: 'Lý do xin hoãn / vắng thi', default: 'Nhập viện điều trị sốt xuất huyết tại Bệnh viện Đa khoa tỉnh Bình Dương (Có giấy xuất viện kèm theo).', type: 'textarea' },
      { id: 'commitment', label: 'Cam kết của sinh viên', default: 'Cam kết đăng ký thi bù / thi ghép trong học kỳ tới đúng quy định của Nhà trường.', type: 'text' }
    ]
  },
  {
    id: 11,
    code: 'BM-ĐT-11/KNN-ĐHBD',
    title: 'Giấy Giới Thiệu Sinh Viên Thực Tập Doanh Nghiệp',
    category: 'thuc-tap-nckh',
    categoryName: 'Thực Tập & NCKH',
    target: 'Sinh viên năm 3, năm 4 (Khóa K25, K26)',
    description: 'Giấy giới thiệu chính thức từ Khoa Ngoại Ngữ gửi đến các cơ quan, doanh nghiệp, đối tác liên kết thực tập tốt nghiệp.',
    fields: [
      { id: 'companyName', label: 'Kính gửi: Tên Đơn vị / Doanh nghiệp tiếp nhận', default: 'Ban Giám Đốc Công Ty Cổ Phần Quốc Tế VinaText Bình Dương', type: 'text' },
      { id: 'studentName', label: 'Họ và tên sinh viên thực tập', default: 'Trần Thị Bích', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '25NN0102', type: 'text' },
      { id: 'major', label: 'Chuyên ngành đào tạo', default: 'Ngôn ngữ Anh (Định hướng Tiếng Anh Thương Mại)', type: 'text' },
      { id: 'internshipField', label: 'Vị trí thực tập đề xuất', default: 'Thực tập sinh Biên phiên dịch / Trợ lý phòng Đối Ngoại', type: 'text' },
      { id: 'internDuration', label: 'Thời gian thực tập dự kiến', default: 'Từ ngày 01/10/2026 đến ngày 31/12/2026 (03 tháng)', type: 'text' },
      { id: 'facultyContact', label: 'Đầu mối liên hệ phía Khoa', default: 'ThS. Trần Thị C - Phó Trưởng Khoa (Email: ttc@bdu.edu.vn)', type: 'text' }
    ]
  },
  {
    id: 12,
    code: 'BM-NCKH-12/KNN',
    title: 'Phiếu Đăng Ký Đề Tài Nghiên Cứu Khoa Học Sinh Viên',
    category: 'thuc-tap-nckh',
    categoryName: 'Thực Tập & NCKH',
    target: 'Nhóm Sinh viên NCKH & GV Hướng dẫn',
    description: 'Thuyết minh đăng ký đề tài Nghiên cứu khoa học sinh viên cấp Khoa / cấp Trường năm học 2026 - 2027.',
    fields: [
      { id: 'topicTitle', label: 'Tên đề tài NCKH', default: 'Ứng dụng AI Chatbot trong việc luyện phát âm và ngữ điệu Tiếng Anh cho sinh viên năm nhất', type: 'textarea' },
      { id: 'researchLevel', label: 'Cấp quản lý đề tài', default: 'Cấp Trường ĐH Bình Dương', type: 'text' },
      { id: 'leaderName', label: 'Sinh viên Chủ nhiệm đề tài', default: 'Nguyễn Văn An (MSSV: 26NN0101)', type: 'text' },
      { id: 'memberNames', label: 'Thành viên tham gia nghiên cứu', default: 'Vũ Đức Em (27NN0105), Đỗ Thị Giang (28NN0107)', type: 'textarea' },
      { id: 'mentorName', label: 'Cán bộ / Giảng viên Hướng dẫn', default: 'TS. Nguyễn Văn A - Trưởng Khoa Ngoại Ngữ', type: 'text' },
      { id: 'expectedOutput', label: 'Sản phẩm dự kiến', default: '01 Báo cáo tổng kết đề tài + 01 Bài báo công bố kỷ yếu Hội thảo Khoa học Quốc tế', type: 'text' },
      { id: 'budget', label: 'Kinh phí đề xuất (VNĐ)', default: '15.000.000 VNĐ (Mười lăm triệu đồng)', type: 'text' }
    ]
  },
  {
    id: 13,
    code: 'BM-ĐT-13/ĐHBD',
    title: 'Đơn Xin Thôi Học & Rút Toàn Bộ Hồ Sơ Sinh Viên',
    category: 'thoi-hoc',
    categoryName: 'Thôi Học & Rút Hồ Sơ',
    target: 'Sinh viên có nguyện vọng tự nguyện thôi học và rút hồ sơ gốc',
    description: 'Thủ tục hoàn tất nghĩa vụ thanh toán học phí, trả sách thư viện và nhận lại học bạ, bằng tốt nghiệp THPT gốc.',
    fields: [
      { id: 'studentName', label: 'Họ và tên sinh viên', default: 'Vũ Văn Hùng', type: 'text' },
      { id: 'studentId', label: 'MSSV', default: '26NN0188', type: 'text' },
      { id: 'classCohort', label: 'Lớp / Khóa học', default: '26NN02 (Khóa K26)', type: 'text' },
      { id: 'major', label: 'Ngành học', default: 'Ngôn ngữ Anh', type: 'text' },
      { id: 'reason', label: 'Lý do xin thôi học', default: 'Gia đình thu xếp thủ tục định cư tại nước ngoài cùng thân nhân.', type: 'textarea' },
      { id: 'documentsToWithdraw', label: 'Các giấy tờ trong hồ sơ gốc xin rút', default: '1. Bằng tốt nghiệp THPT bản chính\n2. Học bạ THPT bản chính\n3. Giấy khai sinh bản sao và Phiếu điểm thi THPT', type: 'textarea' },
      { id: 'obligationClearance', label: 'Xác nhận hoàn thành nghĩa vụ', default: 'Đã hoàn tất thanh toán học phí tại P. KHTC và trả đầy đủ giáo trình cho Thư viện BDU.', type: 'text' },
      { id: 'guardianConfirmation', label: 'Ý kiến đồng thuận của Phụ huynh', default: 'Tôi là Vũ Văn Ba (Bố đẻ) đồng ý cho con làm thủ tục thôi học.', type: 'text' }
    ]
  },
  {
    id: 14,
    code: 'BM-BM-14/KNN',
    title: 'Biên Bản Họp Bộ Môn Về Học Vụ & Ma Trận Đề Thi',
    category: 'noi-bo-khoa',
    categoryName: 'Biên Bản & Tờ Trình BGH',
    target: 'Trưởng Bộ Môn & Toàn thể Giảng viên cơ hữu',
    description: 'Ghi nhận cuộc họp định kỳ bộ môn về tiến độ chương trình, duyệt ma trận đề thi và kế hoạch học kỳ.',
    fields: [
      { id: 'departmentName', label: 'Tên Bộ môn họp', default: 'Bộ Môn Tiếng Anh Chuyên Ngành & Ngữ Dụng Học', type: 'text' },
      { id: 'meetingTime', label: 'Thời gian & Địa điểm', default: '08h30 ngày 30/08/2026 - Phòng Họp Khoa (A.204)', type: 'text' },
      { id: 'chairPerson', label: 'Chủ trì cuộc họp', default: 'TS. Nguyễn Văn A - Trưởng Bộ Môn', type: 'text' },
      { id: 'secretary', label: 'Thư ký cuộc họp', default: 'ThS. Trần Thị C', type: 'text' },
      { id: 'attendees', label: 'Thành phần tham dự', default: 'Có mặt 12/12 Giảng viên cơ hữu (Vắng: 0)', type: 'text' },
      { id: 'mainContent', label: 'Nội dung kết luận & Biện pháp triển khai', default: '1. Nhất trí nghiệm thu ngân hàng ma trận đề thi VSTEP B1-C1.\n2. Phân công thẩm định đề thi tự luận và trắc nghiệm trước ngày 10/09/2026.\n3. Đôn đốc sinh viên cải thiện điểm danh chuyên cần đạt trên 85%.', type: 'textarea' }
    ]
  },
  {
    id: 15,
    code: 'BM-TC-15/KNN-BGH',
    title: 'Tờ Trình Xin Phê Duyệt Kinh Phí Tổ Chức Hội Thảo Chuyên Môn',
    category: 'noi-bo-khoa',
    categoryName: 'Biên Bản & Tờ Trình BGH',
    target: 'Ban Chủ Nhiệm Khoa trình BGH & Phòng Kế Hoạch - Tài Chính',
    description: 'Tờ trình cấp kinh phí tổ chức Hội thảo Khoa học Quốc tế và Hội nghị NCKH sinh viên năm học 2026 - 2027.',
    fields: [
      { id: 'eventName', label: 'Tên sự kiện / Hội thảo', default: 'Hội thảo Khoa học: "Đổi mới phương pháp giảng dạy Ngoại ngữ trong Kỷ nguyên Số và Trí tuệ Nhân tạo"', type: 'text' },
      { id: 'targetDate', label: 'Thời gian & Quy mô dự kiến', default: 'Ngày 25/10/2026 - Quy mô 250 đại biểu & sinh viên', type: 'text' },
      { id: 'requestedAmount', label: 'Tổng kinh phí đề nghị cấp (VNĐ)', default: '45.000.000 VNĐ (Bốn mươi lăm triệu đồng chẵn)', type: 'text' },
      { id: 'budgetDetails', label: 'Chi tiết các khoản chi', default: '- In ấn kỷ yếu và tài liệu đại biểu: 15.000.000đ\n- Thù lao báo cáo viên & chuyên gia đầu ngành: 20.000.000đ\n- Tea-break, khánh tiết, truyền thông: 10.000.000đ', type: 'textarea' },
      { id: 'expectedImpact', label: 'Hiệu quả mang lại cho Khoa & Nhà trường', default: 'Nâng cao uy tín học thuật của BDU, tạo diễn đàn giao lưu quốc tế và nâng cao chuẩn đầu ra ngoại ngữ cho sinh viên.', type: 'textarea' }
    ]
  }
];

// Helper to generate National standard HTML for any of the 15 forms
function generateBduAdministrativeFormPaper(form, getValue) {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const nationalHeader = `
    <div class="report-national-header">
      <div class="report-org">
        <strong>TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong><br>
        <strong>KHOA NGOẠI NGỮ</strong><br>
        <span style="font-size: 11pt;">Mã văn bản: ${form.code}</span>
      </div>
      <div class="report-national">
        <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
        <strong>Độc lập - Tự do - Hạnh phúc</strong><br>
        <div style="width: 140px; height: 1px; background: #000; margin: 4px auto 8px;"></div>
        <em>Bình Dương, ngày ${day} tháng ${month} năm ${year}</em>
      </div>
    </div>
  `;

  let innerContent = '';

  switch (form.id) {
    case 1: { // Giấy Xác Nhận Sinh Viên Vay Vốn & NVQS
      const sName = getValue('studentName', 'Nguyễn Thị Lan');
      const gen = getValue('gender', 'Nữ');
      const dob = getValue('birthDate', '15/08/2006');
      const sid = getValue('studentId', '28NN0120');
      const cccd = getValue('idCardNo', '074306001234');
      const cls = getValue('classCohort', '28NN01 (Khóa K28)');
      const maj = getValue('major', 'Ngôn ngữ Anh');
      const dur = getValue('courseDuration', '2024 - 2028');
      const term = getValue('academicYear', 'Học kỳ 1 năm học 2026 - 2027');
      const tFee = getValue('tuitionPerTerm', '14.500.000 VNĐ');
      const purp = getValue('confirmPurpose', 'Vay vốn NHCSXH & Tạm hoãn NVQS');
      const addr = getValue('permanentAddress', 'P. Phú Hòa, TP. Thủ Dầu Một, Bình Dương');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>GIẤY XÁC NHẬN HỌC TẬP TẠI TRƯỜNG</h2>
          <div class="form-paper-subtitle">(Dùng cho Sinh viên vay vốn Ngân hàng CSXH theo QĐ 157/2007/QĐ-TTg và Tạm hoãn NVQS)</div>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          HIỆU TRƯỞNG TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG XÁC NHẬN:
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>- Họ và tên sinh viên: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;Giới tính: <span class="form-field-highlight">${gen}</span></p>
          <p>- Ngày, tháng, năm sinh: <span class="form-field-highlight">${dob}</span>&nbsp;&nbsp;&nbsp;&nbsp;Số CCCD: <span class="form-field-highlight">${cccd}</span></p>
          <p>- Mã số sinh viên: <span class="form-field-highlight">${sid}</span>&nbsp;&nbsp;&nbsp;&nbsp;Lớp sinh hoạt: <span class="form-field-highlight">${cls}</span></p>
          <p>- Khoa: <strong>Khoa Ngoại Ngữ</strong>&nbsp;&nbsp;&nbsp;&nbsp;Ngành đào tạo: <span class="form-field-highlight">${maj}</span></p>
          <p>- Hệ đào tạo: <strong>Đại học Chính quy</strong>&nbsp;&nbsp;&nbsp;&nbsp;Khóa học: <span class="form-field-highlight">${dur}</span></p>
          <p>- Hộ khẩu thường trú: <span class="form-field-highlight">${addr}</span></p>
          <p>- Hiện đang là sinh viên theo học tại Trường trong <span class="form-field-highlight">${term}</span>.</p>
          <p>- Mức học phí phải nộp theo quy định: <span class="form-field-highlight">${tFee}</span> / học kỳ.</p>
          <p>- Mục đích cấp giấy xác nhận: <span class="form-field-highlight">${purp}</span>.</p>
          <p style="font-style: italic; font-size: 11.5pt; margin-top: 10px;">* Giấy xác nhận này có giá trị trong học kỳ hiện tại kể từ ngày ký và đóng dấu.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 40px;">
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG ĐÀO TẠO & CTSV</strong><br>
            <small>(Kiểm tra & lập phiếu)</small><br><br><br><br>
            <strong>ThS. Chuyên viên tiếp nhận</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>TL. HIỆU TRƯỞNG TRƯỜNG ĐH BÌNH DƯƠNG<br>TRƯỞNG KHOA NGOẠI NGỮ</strong><br>
            <small>(Ký tên và đóng dấu)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
        </div>
      `;
      break;
    }

    case 2: { // Đơn Cấp Lại Thẻ SV & Mật Khẩu Portal
      const sName = getValue('studentName', 'Trần Văn Bình');
      const sid = getValue('studentId', '27NN0102');
      const cls = getValue('classCohort', '27NN01 (Khóa K27)');
      const phone = getValue('phone', '0912 345 678');
      const email = getValue('email', '27nn0102@bdu.edu.vn');
      const reqType = getValue('requestType', 'Cấp lại thẻ SV');
      const reas = getValue('reason', 'Mất thẻ sinh viên');
      const fee = getValue('feeCommitment', 'Cam kết nộp lệ phí phôi thẻ');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN CẤP LẠI THẺ SINH VIÊN / MẬT KHẨU PORTAL</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - PHÒNG CÔNG TÁC SINH VIÊN & TRUYỀN THÔNG - ĐHBD<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ - Trường Đại học Bình Dương.</p>
          <p>Số điện thoại: <span class="form-field-highlight">${phone}</span>&nbsp;&nbsp;&nbsp;&nbsp;Email: <span class="form-field-highlight">${email}</span></p>
          <p>Kính đề nghị Quý Phòng xem xét và hỗ trợ giải quyết thủ tục:</p>
          <p>- Nội dung yêu cầu: <span class="form-field-highlight">${reqType}</span></p>
          <p>- Lý do yêu cầu: <span class="form-field-highlight">${reas}</span></p>
          <p>- Cam kết: <span class="form-field-highlight">${fee}</span>.</p>
          <p>Tôi xin chân thành cảm ơn sự hỗ trợ của Quý Thầy/Cô!</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 40px;">
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG CÔNG TÁC SINH VIÊN</strong><br>
            <small>(Xác nhận & cấp thẻ)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 3: { // Đơn Gia Hạn Học Phí
      const sName = getValue('studentName', 'Phạm Minh Đức');
      const sid = getValue('studentId', '28NN0104');
      const cls = getValue('classCohort', '28NN02 (Khóa K28)');
      const sem = getValue('semesterYear', 'Học kỳ 1 năm học 2026 - 2027');
      const fee = getValue('totalTuition', '14.500.000 VNĐ');
      const reas = getValue('reason', 'Khó khăn đột xuất');
      const plan = getValue('installmentPlan', 'Đợt 1 nộp 50%, đợt 2 nộp 50%');
      const comm = getValue('commitment', 'Cam kết chịu trách nhiệm');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN GIA HẠN NỘP HỌC PHÍ / CAM KẾT ĐÓNG THEO ĐỢT</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG KẾ HOẠCH - TÀI CHÍNH<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;Mã số sinh viên: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ.</p>
          <p>Số tiền học phí phải nộp trong <span class="form-field-highlight">${sem}</span> là: <span class="form-field-highlight">${fee}</span>.</p>
          <p>Do điều kiện hoàn cảnh: <span class="form-field-highlight">${reas}</span>.</p>
          <p>Kính xin Nhà trường cho phép tôi được gia hạn và đóng học phí theo lộ trình cụ thể sau:</p>
          <div style="white-space: pre-line; background: #f8fafc; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 12pt;">${plan}</div>
          <p style="margin-top: 10px;">Cam kết: <span class="form-field-highlight">${comm}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG KẾ HOẠCH - TÀI CHÍNH</strong><br>
            <small>(Xác nhận số dư & đồng ý)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>DUYỆT BAN CHỦ NHIỆM KHOA</strong><br>
            <small>(Ký và xác nhận)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 4: { // Phiếu Đánh Giá Rèn Luyện 5W
      const sName = getValue('studentName', 'Phạm Minh Đức');
      const sid = getValue('studentId', '28NN0104');
      const cls = getValue('classCohort', '28NN02 - Khóa K28');
      const score = getValue('selfScore', '88 điểm (Tốt)');
      const count = getValue('evidenceCount', '04 file');
      const drive = getValue('driveLink', 'drive.google.com/...');
      const assess = getValue('advisorAssessment', 'Chấp hành tốt nội quy');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>BẢNG TỰ ĐÁNH GIÁ ĐIỂM RÈN LUYỆN SINH VIÊN</h2>
          <div class="form-paper-subtitle">(Kèm theo hồ sơ minh chứng Activity Hub chuẩn 5W)</div>
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>1. Họ và tên sinh viên: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>2. Lớp sinh hoạt: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ.</p>
          <p>3. Điểm rèn luyện sinh viên tự chấm: <span class="form-field-highlight">${score}</span></p>
          <p>4. Số lượng file minh chứng đính kèm: <span class="form-field-highlight">${count}</span></p>
          <p>5. Link thư mục lưu trữ Google Drive: <span class="form-field-highlight">${drive}</span></p>
          <p>6. Nhận xét của Cố vấn học tập (GVCN): <span class="form-field-highlight">${assess}</span></p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>BAN CÁN SỰ LỚP</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>CỐ VẤN HỌC TẬP (GVCN)</strong><br>
            <small>(Xác nhận & duyệt điểm)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>SINH VIÊN TỰ CHẤM</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 5: { // Đơn Xin Chuyển Ngành Học
      const sName = getValue('studentName', 'Lê Hoàng Nam');
      const sid = getValue('studentId', '27NN0145');
      const cls = getValue('currentCohort', 'K27 - Lớp 27NN02');
      const cMaj = getValue('currentMajor', 'Ngôn ngữ Anh');
      const tMaj = getValue('targetMajor', 'Ngôn ngữ Trung Quốc');
      const gpa = getValue('gpaAccumulated', '3.15 / 4.0');
      const reas = getValue('reason', 'Phù hợp năng lực định hướng');
      const comm = getValue('commitment', 'Cam kết hoàn thành học phần');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN CHUYỂN NGÀNH HỌC / CHUYỂN HỆ ĐÀO TẠO</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG ĐÀO TẠO ĐẠI HỌC<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Ngành: <span class="form-field-highlight">${cMaj}</span>.</p>
          <p>Điểm trung bình tích lũy hiện tại (GPA): <span class="form-field-highlight">${gpa}</span>.</p>
          <p>Kính xin Ban Giám Hiệu và Phòng Đào Tạo cho phép tôi được chuyển sang ngành đào tạo mới:</p>
          <p>- Ngành xin chuyển đến: <span class="form-field-highlight">${tMaj}</span></p>
          <p>- Lý do xin chuyển ngành: <span class="form-field-highlight">${reas}</span></p>
          <p>- Cam kết: <span class="form-field-highlight">${comm}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>KHOA ĐANG THEO HỌC</strong><br>
            <small>(Đồng ý chuyển đi)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG ĐÀO TẠO DUYỆT</strong><br>
            <small>(Thẩm định điều kiện)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 6: { // Đơn Miễn Học Phần / Quy Đổi Điểm Chứng Chỉ
      const sName = getValue('studentName', 'Đỗ Thị Giang');
      const sid = getValue('studentId', '28NN0107');
      const cls = getValue('classCohort', '28NN01 (Khóa K28)');
      const cName = getValue('certName', 'IELTS Academic');
      const cScore = getValue('certScore', '6.5');
      const cDate = getValue('certIssueDate', '12/04/2026');
      const req = getValue('requestedExemption', 'Tiếng Anh 1, 2, 3');
      const att = getValue('attachments', 'Bản sao công chứng IELTS');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN MIỄN HỌC PHẦN & CÔNG NHẬN ĐIỂM QUY ĐỔI CHỨNG CHỈ</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - PHÒNG ĐÀO TẠO & KHẢO THÍ - ĐHBD<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ.</p>
          <p>Căn cứ Quy định về chuẩn đầu ra và chính sách miễn trừ học phần ngoại ngữ/tin học của BDU, tôi xin báo cáo:</p>
          <p>- Tên chứng chỉ đạt được: <span class="form-field-highlight">${cName}</span></p>
          <p>- Điểm số / Trình độ đạt: <span class="form-field-highlight">${cScore}</span>&nbsp;&nbsp;&nbsp;&nbsp;Ngày cấp: <span class="form-field-highlight">${cDate}</span></p>
          <p>- Đề nghị được miễn học, miễn thi và quy đổi điểm tương đương cho các học phần:</p>
          <div style="white-space: pre-line; background: #f8fafc; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 12pt;">${req}</div>
          <p style="margin-top: 10px;">- Hồ sơ đính kèm: <span class="form-field-highlight">${att}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>BAN CHỦ NHIỆM KHOA</strong><br>
            <small>(Xác nhận đối chiếu chứng chỉ)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG ĐÀO TẠO & KHẢO THÍ</strong><br>
            <small>(Phê duyệt quy đổi điểm)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 7: { // Đơn Xin Bảo Lưu
      const sName = getValue('studentName', 'Hoàng Thị Dung');
      const sid = getValue('studentId', '27NN0108');
      const cls = getValue('classCohort', '27NN01 (Khóa K27)');
      const dur = getValue('leaveDuration', '01 học kỳ');
      const reas = getValue('leaveReason', 'Nghĩa vụ quân sự');
      const rej = getValue('rejoinDate', 'Tháng 02/2027');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN NGHỈ HỌC TẠM THỜI VÀ BẢO LƯU KẾT QUẢ HỌC TẬP</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG ĐÀO TẠO & CÔNG TÁC SINH VIÊN<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ - Trường Đại học Bình Dương.</p>
          <p>Kính xin Ban Giám Hiệu và Phòng Đào Tạo cho phép tôi được nghỉ học tạm thời và bảo lưu kết quả học tập:</p>
          <p>- Thời gian xin nghỉ tạm thời: <span class="form-field-highlight">${dur}</span></p>
          <p>- Lý do xin nghỉ tạm thời: <span class="form-field-highlight">${reas}</span></p>
          <p>- Thời điểm dự kiến quay lại trường tiếp tục học tập: <span class="form-field-highlight">${rej}</span></p>
          <p>Tôi cam kết hoàn thành đầy đủ nghĩa vụ học phí và các thủ tục theo đúng Quy chế đào tạo của Nhà trường.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>Ý KIẾN PHỤ HUYNH</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>DUYỆT BAN CHỦ NHIỆM KHOA</strong><br>
            <small>(Ký, đóng dấu họ tên)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 8: { // Đơn Quay Lại Học Tiếp Sau Bảo Lưu
      const sName = getValue('studentName', 'Hoàng Thị Dung');
      const sid = getValue('studentId', '27NN0108');
      const oCls = getValue('originalClass', '27NN01');
      const dec = getValue('leaveDecisionNo', 'QĐ số 215/QĐ-ĐHBD');
      const ret = getValue('returnSemester', 'Học kỳ 1 năm học 2026 - 2027');
      const pCls = getValue('proposedClass', 'Lớp 28NN01 (Khóa K28)');
      const hlth = getValue('healthStatus', 'Sức khỏe tốt đủ điều kiện');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN TRỞ LẠI HỌC TIẾP SAU THỜI GIAN BẢO LƯU</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG ĐÀO TẠO ĐẠI HỌC<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Lớp học trước khi nghỉ bảo lưu: <span class="form-field-highlight">${oCls}</span>.</p>
          <p>Căn cứ Quyết định nghỉ học tạm thời và bảo lưu kết quả: <span class="form-field-highlight">${dec}</span>.</p>
          <p>Nay đã hết thời hạn bảo lưu, tình trạng bản thân: <span class="form-field-highlight">${hlth}</span>.</p>
          <p>Tôi kính đề nghị Quý Ban xem xét cho phép tôi được trở lại học tiếp từ <span class="form-field-highlight">${ret}</span>.</p>
          <p>- Đề xuất ghép lớp sinh hoạt và học tập cùng: <span class="form-field-highlight">${pCls}</span>.</p>
          <p>Tôi cam kết chấp hành nghiêm chỉnh mọi nội quy, quy chế đào tạo của Nhà trường.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG ĐÀO TẠO DUYỆT</strong><br>
            <small>(Xếp lớp & mở tài khoản)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>TRƯỞNG KHOA NGOẠI NGỮ</strong><br>
            <small>(Ký và tiếp nhận)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 9: { // Đơn Xin Phúc Khảo Bài Thi
      const sName = getValue('studentName', 'Nguyễn Văn An');
      const sid = getValue('studentId', '26NN0101');
      const cls = getValue('classCohort', '26NN01 (Khóa K26)');
      const cName = getValue('courseName', 'Tiếng Anh Biên Dịch 1 (ENG301)');
      const eDate = getValue('examDate', '15/08/2026');
      const eCode = getValue('examCode', 'ENG301-A');
      const pScore = getValue('publishedScore', '5.5 điểm');
      const reas = getValue('reviewReason', 'Khớp đáp án chuẩn kính xin chấm lại');
      const fee = getValue('feeReceipt', 'Đã nộp lệ phí phúc khảo');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN PHÚC KHẢO BÀI THI KẾT THÚC HỌC PHẦN</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - HỘI ĐỒNG KHẢO THÍ & ĐẢM BẢO CHẤT LƯỢNG - ĐHBD<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ.</p>
          <p>Tôi kính đề nghị Hội đồng Khảo thí xem xét cho tôi được phúc khảo bài thi học phần:</p>
          <p>- Môn học / Học phần: <span class="form-field-highlight">${cName}</span></p>
          <p>- Ngày thi, Ca thi: <span class="form-field-highlight">${eDate}</span>&nbsp;&nbsp;&nbsp;&nbsp;Mã đề thi: <span class="form-field-highlight">${eCode}</span></p>
          <p>- Điểm đã công bố: <span class="form-field-highlight">${pScore}</span></p>
          <p>- Lý do xin phúc khảo: <span class="form-field-highlight">${reas}</span></p>
          <p>- Lệ phí: <span class="form-field-highlight">${fee}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>BỘ PHẬN TIẾP NHẬN KHẢO THÍ</strong><br>
            <small>(Ký & ghi biên nhận)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>CÁN BỘ CHẤM PHÚC KHẢO</strong><br>
            <small>(Điểm sau phúc khảo: ...)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 10: { // Đơn Xin Hoãn Thi
      const name = getValue('studentName', 'Nguyễn Thị Lan');
      const mssv = getValue('studentId', '28NN0120');
      const cls = getValue('cohortClass', '28NN01 (Khóa K28)');
      const course = getValue('courseName', 'Tiếng Anh Giao Tiếp 1 (ENG101)');
      const examDate = getValue('examDate', '15/09/2026 - Ca 2 (09h30)');
      const lecturer = getValue('lecturerName', 'TS. Nguyễn Văn A');
      const reason = getValue('reason', 'Nhập viện điều trị');
      const commitment = getValue('commitment', 'Cam kết đăng ký thi bù');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN HOÃN THI KẾT THÚC HỌC PHẦN</h2>
          <div class="form-paper-subtitle">(Dành cho sinh viên vắng thi có lý do chính đáng)</div>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG ĐÀO TẠO & KHẢO THÍ<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${name}</span>&nbsp;&nbsp;&nbsp;&nbsp;Mã số sinh viên: <span class="form-field-highlight">${mssv}</span></p>
          <p>Hiện đang là sinh viên lớp: <span class="form-field-highlight">${cls}</span>, Khoa Ngoại Ngữ - Trường Đại học Bình Dương.</p>
          <p>Tôi làm đơn này kính xin Ban Giám Hiệu và Hội đồng Khảo thí cho phép tôi được hoãn thi học phần:</p>
          <p>- Môn học / Học phần: <span class="form-field-highlight">${course}</span></p>
          <p>- Ngày & Ca thi theo lịch công bố: <span class="form-field-highlight">${examDate}</span></p>
          <p>- Giảng viên phụ trách giảng dạy: <span class="form-field-highlight">${lecturer}</span></p>
          <p>- Lý do xin hoãn thi: <span class="form-field-highlight">${reason}</span></p>
          <p>- Hồ sơ kèm theo: <em>Giấy xác nhận viện phí / Bệnh viện hoặc giấy triệu tập</em>.</p>
          <p>- Cam kết: <span class="form-field-highlight">${commitment}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 30px;">
          <div class="sig-col" style="flex: 1;">
            <strong>Ý KIẾN CỐ VẤN HỌC TẬP</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>DUYỆT BAN CHỦ NHIỆM KHOA</strong><br>
            <small>(Ký, đóng dấu họ tên)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${name}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 11: { // Giấy Giới Thiệu Thực Tập
      const comp = getValue('companyName', 'Công Ty CP Quốc Tế VinaText');
      const stuName = getValue('studentName', 'Trần Thị Bích');
      const stuId = getValue('studentId', '25NN0102');
      const major = getValue('major', 'Ngôn ngữ Anh');
      const field = getValue('internshipField', 'Thực tập sinh Biên phiên dịch');
      const duration = getValue('internDuration', 'Từ 01/10/2026 đến 31/12/2026');
      const contact = getValue('facultyContact', 'ThS. Trần Thị C');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>GIẤY GIỚI THIỆU THỰC TẬP TỐT NGHIỆP</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi: ${comp}
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Nhằm tạo điều kiện cho sinh viên cọ xát thực tế, rèn luyện kỹ năng nghề nghiệp và áp dụng kiến thức chuyên môn đã học vào môi trường doanh nghiệp;</p>
          <p>Khoa Ngoại Ngữ - Trường Đại học Bình Dương trân trọng giới thiệu sinh viên:</p>
          <p>- Họ và tên sinh viên: <span class="form-field-highlight">${stuName}</span>&nbsp;&nbsp;&nbsp;&nbsp;Mã số sinh viên: <span class="form-field-highlight">${stuId}</span></p>
          <p>- Ngành đào tạo: <span class="form-field-highlight">${major}</span></p>
          <p>- Vị trí / Bộ phận thực tập đề xuất: <span class="form-field-highlight">${field}</span></p>
          <p>- Thời gian thực tập: <span class="form-field-highlight">${duration}</span></p>
          <p>Khoa kính mong Quý Cơ quan / Doanh nghiệp tạo điều kiện thuận lợi hỗ trợ sinh viên hoàn thành tốt đợt thực tập tốt nghiệp.</p>
          <p>Đầu mối liên hệ phía Khoa: <span class="form-field-highlight">${contact}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 40px;">
          <div class="sig-col" style="flex: 1;">
            <strong>NƠI TIẾP NHẬN</strong><br>
            <small>(Xác nhận & tiếp nhận)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>TRƯỞNG KHOA NGOẠI NGỮ</strong><br>
            <small>(Ký, đóng dấu họ tên)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
        </div>
      `;
      break;
    }

    case 12: { // Phiếu NCKH
      const title = getValue('topicTitle', 'Ứng dụng AI');
      const level = getValue('researchLevel', 'Cấp Trường ĐH Bình Dương');
      const leader = getValue('leaderName', 'Nguyễn Văn An');
      const members = getValue('memberNames', 'Vũ Đức Em');
      const mentor = getValue('mentorName', 'TS. Nguyễn Văn A');
      const output = getValue('expectedOutput', '01 Báo cáo tổng kết');
      const budget = getValue('budget', '15.000.000 VNĐ');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>PHIẾU ĐĂNG KÝ ĐỀ TÀI NGHIÊN CỨU KHOA HỌC SINH VIÊN</h2>
          <div class="form-paper-subtitle">Năm học 2026 - 2027</div>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - PHÒNG QUẢN LÝ KHOA HỌC & HỢP TÁC QUỐC TẾ - ĐHBD<br>
          - HỘI ĐỒNG KHOA HỌC KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>1. Tên đề tài đăng ký: <span class="form-field-highlight">${title}</span></p>
          <p>2. Cấp quản lý đề tài: <span class="form-field-highlight">${level}</span></p>
          <p>3. Sinh viên chủ nhiệm đề tài: <span class="form-field-highlight">${leader}</span></p>
          <p>4. Các thành viên phối hợp nghiên cứu: <span class="form-field-highlight">${members}</span></p>
          <p>5. Cán bộ / Giảng viên hướng dẫn: <span class="form-field-highlight">${mentor}</span></p>
          <p>6. Sản phẩm khoa học dự kiến: <span class="form-field-highlight">${output}</span></p>
          <p>7. Kinh phí đề xuất hỗ trợ: <span class="form-field-highlight">${budget}</span></p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>GIẢNG VIÊN HƯỚNG DẪN</strong><br>
            <small>(Xác nhận & ký tên)</small><br><br><br><br>
            <strong>${mentor.split('-')[0]}</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>TRƯỞNG KHOA NGOẠI NGỮ</strong><br>
            <small>(Ký duyệt & đóng dấu)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>CHỦ NHIỆM ĐỀ TÀI</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${leader.split('(')[0]}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 13: { // Đơn Xin Thôi Học & Rút Hồ Sơ
      const sName = getValue('studentName', 'Vũ Văn Hùng');
      const sid = getValue('studentId', '26NN0188');
      const cls = getValue('classCohort', '26NN02 (Khóa K26)');
      const maj = getValue('major', 'Ngôn ngữ Anh');
      const reas = getValue('reason', 'Định cư nước ngoài');
      const docs = getValue('documentsToWithdraw', 'Bằng tốt nghiệp THPT bản chính, Học bạ');
      const clr = getValue('obligationClearance', 'Đã hoàn thành nghĩa vụ');
      const guard = getValue('guardianConfirmation', 'Phụ huynh đồng thuận');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>ĐƠN XIN THÔI HỌC VÀ RÚT TOÀN BỘ HỒ SƠ SINH VIÊN</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG ĐÀO TẠO & CÔNG TÁC SINH VIÊN<br>
          - BAN CHỦ NHIỆM KHOA NGOẠI NGỮ
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Tôi tên là: <span class="form-field-highlight">${sName}</span>&nbsp;&nbsp;&nbsp;&nbsp;MSSV: <span class="form-field-highlight">${sid}</span></p>
          <p>Hiện đang học lớp: <span class="form-field-highlight">${cls}</span>, Ngành: <span class="form-field-highlight">${maj}</span>.</p>
          <p>Tôi làm đơn này kính xin Ban Giám Hiệu cho phép tôi được tự nguyện thôi học:</p>
          <p>- Lý do xin thôi học: <span class="form-field-highlight">${reas}</span></p>
          <p>- Danh mục các giấy tờ trong hồ sơ gốc xin rút lại:</p>
          <div style="white-space: pre-line; background: #f8fafc; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 12pt;">${docs}</div>
          <p style="margin-top: 10px;">- Xác nhận hoàn tất nghĩa vụ: <span class="form-field-highlight">${clr}</span>.</p>
          <p>- Ý kiến bảo lãnh của Phụ huynh: <span class="form-field-highlight">${guard}</span>.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>Ý KIẾN PHỤ HUYNH</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG ĐÀO TẠO DUYỆT</strong><br>
            <small>(Trả hồ sơ gốc)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>NGƯỜI LÀM ĐƠN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sName}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 14: { // Biên Bản Họp Bộ Môn
      const dept = getValue('departmentName', 'Bộ Môn Tiếng Anh Chuyên Ngành');
      const mTime = getValue('meetingTime', '08h30 ngày 30/08/2026');
      const chair = getValue('chairPerson', 'TS. Nguyễn Văn A');
      const sec = getValue('secretary', 'ThS. Trần Thị C');
      const att = getValue('attendees', '12/12 Giảng viên');
      const cont = getValue('mainContent', 'Nội dung họp');

      innerContent = `
        ${nationalHeader}
        <div class="form-paper-title-box">
          <h2>BIÊN BẢN HỌP BỘ MÔN ĐỊNH KỲ</h2>
          <div class="form-paper-subtitle">V/v Công tác Học Vụ, Tiến Độ Đào Tạo & Thẩm Định Ma Trận Đề Thi</div>
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>1. Đơn vị họp: <span class="form-field-highlight">${dept}</span></p>
          <p>2. Thời gian & Địa điểm: <span class="form-field-highlight">${mTime}</span></p>
          <p>3. Chủ trì cuộc họp: <span class="form-field-highlight">${chair}</span></p>
          <p>4. Thư ký ghi biên bản: <span class="form-field-highlight">${sec}</span></p>
          <p>5. Thành phần tham dự: <span class="form-field-highlight">${att}</span></p>
          <p>6. Nội dung cuộc họp và Kết luận chỉ đạo:</p>
          <div style="white-space: pre-line; background: #f8fafc; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 12.5pt;">${cont}</div>
        </div>

        <div class="report-signature-grid" style="margin-top: 40px;">
          <div class="sig-col" style="flex: 1;">
            <strong>THƯ KÝ CUỘC HỌP</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${sec}</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>CHỦ TRÌ CUỘC HỌP / TRƯỞNG BỘ MÔN</strong><br>
            <small>(Ký và ghi rõ họ tên)</small><br><br><br><br>
            <strong>${chair.split('-')[0]}</strong>
          </div>
        </div>
      `;
      break;
    }

    case 15: { // Tờ Trình BGH Kinh Phí Hội Thảo
      const evt = getValue('eventName', 'Hội thảo Khoa học');
      const tDate = getValue('targetDate', 'Ngày 25/10/2026');
      const amt = getValue('requestedAmount', '45.000.000 VNĐ');
      const det = getValue('budgetDetails', 'Chi tiết');
      const imp = getValue('expectedImpact', 'Hiệu quả');

      innerContent = `
        <div class="report-national-header">
          <div class="report-org">
            <strong>TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG</strong><br>
            <strong>KHOA NGOẠI NGỮ</strong><br>
            <span style="font-size: 11pt;">Số: 26/TTr-KNN-ĐHBD</span>
          </div>
          <div class="report-national">
            <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
            <strong>Độc lập - Tự do - Hạnh phúc</strong><br>
            <div style="width: 140px; height: 1px; background: #000; margin: 4px auto 8px;"></div>
            <em>Bình Dương, ngày ${day} tháng ${month} năm ${year}</em>
          </div>
        </div>

        <div class="form-paper-title-box">
          <h2>TỜ TRÌNH XIN PHÊ DUYỆT KINH PHÍ TỔ CHỨC HỘI THẢO CHUYÊN MÔN</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px; font-weight: bold; line-height: 1.6;">
          Kính gửi:<br>
          - BAN GIÁM HIỆU TRƯỜNG ĐẠI HỌC BÌNH DƯƠNG<br>
          - PHÒNG KẾ HOẠCH - TÀI CHÍNH
        </div>

        <div style="line-height: 1.85; font-size: 13pt; text-align: justify;">
          <p>Căn cứ Kế hoạch năm học 2026 - 2027 và chủ trương nâng cao chất lượng đào tạo, nghiên cứu khoa học của Trường Đại học Bình Dương;</p>
          <p>Khoa Ngoại Ngữ kính trình Ban Giám Hiệu xem xét phê duyệt chủ trương và hỗ trợ cấp kinh phí tổ chức sự kiện chuyên môn cụ thể như sau:</p>
          <p>1. Tên sự kiện: <span class="form-field-highlight">${evt}</span></p>
          <p>2. Thời gian & Quy mô: <span class="form-field-highlight">${tDate}</span></p>
          <p>3. Tổng kinh phí đề nghị cấp: <span class="form-field-highlight">${amt}</span></p>
          <p>4. Dự toán chi tiết các hạng mục:</p>
          <div style="white-space: pre-line; background: #f8fafc; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 12pt;">${det}</div>
          <p style="margin-top: 10px;">5. Hiệu quả mang lại: <span class="form-field-highlight">${imp}</span></p>
          <p>Kính trình Ban Giám Hiệu xem xét và chấp thuận.</p>
        </div>

        <div class="report-signature-grid" style="margin-top: 35px;">
          <div class="sig-col" style="flex: 1;">
            <strong>PHÒNG KẾ HOẠCH - TÀI CHÍNH</strong><br>
            <small>(Thẩm định & cho ý kiến)</small><br><br><br><br>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>TRƯỞNG KHOA NGOẠI NGỮ</strong><br>
            <small>(Ký và đóng dấu)</small><br><br><br><br>
            <strong>TS. Nguyễn Văn A</strong>
          </div>
          <div class="sig-col" style="flex: 1;">
            <strong>BAN GIÁM HIỆU DUYỆT</strong><br>
            <small>(Ký và phê duyệt)</small><br><br><br><br>
          </div>
        </div>
      `;
      break;
    }

    default:
      innerContent = `<div style="padding: 20px; text-align: center;">Mẫu văn bản đang được cập nhật.</div>`;
      break;
  }

  return innerContent;
}

if (typeof window !== 'undefined') {
  window.BDU_ADMINISTRATIVE_FORMS_DB = BDU_ADMINISTRATIVE_FORMS_DB;
  window.generateBduAdministrativeFormPaper = generateBduAdministrativeFormPaper;
}
