# 👨‍💼 Ứng Dụng Quản Lý Nhân Viên (Employee Management App)

> Một dự án học tập cá nhân sử dụng JavaScript hướng đối tượng, kết hợp với Bootstrap 4 và thư viện jQuery UI để xây dựng một hệ thống quản lý nhân viên mini, đầy đủ chức năng cơ bản và giao diện đẹp mắt.

---

## 📌 Mục đích dự án

Dự án được thực hiện nhằm mục đích:

- Vận dụng các kiến thức về **HTML, CSS, JavaScript (OOP)** đã học.
- Làm quen với việc chia file, phân tách rõ **Model - Controller**.
- Hiểu và thao tác với **DOM**, sử dụng thư viện hỗ trợ như **jQuery**.
- Sử dụng Bootstrap để dựng nhanh **giao diện chuẩn responsive**.
- Áp dụng kiến thức vào **dự án mô phỏng thực tế**.

---

## 🌐 Link demo

👉 **Triển khai trên Netlify:**  
[https://6890fec4b43cdadf83338c59--glittering-cascaron-56c010.netlify.app/](https://6890fec4b43cdadf83338c59--glittering-cascaron-56c010.netlify.app/)

---

## 🧠 Kiến thức đã áp dụng

- ✅ **HTML5**: Cấu trúc trang, biểu mẫu (form), bảng (table), button, modal...
- ✅ **CSS3 + Bootstrap 4**: Tạo bố cục responsive, button, modal, input, alert...
- ✅ **JavaScript hướng đối tượng**:  
  - Class `NhanVien` trong `models/`.  
  - Gọi phương thức, gán thuộc tính, truyền đối tượng.
- ✅ **DOM manipulation**:  
  - Thêm/sửa/xóa dòng trên bảng.  
  - Lắng nghe sự kiện người dùng: click, input, change.
- ✅ **jQuery**:  
  - DOM selector đơn giản, hiệu ứng.  
  - Xử lý sự kiện nhanh gọn.
- ✅ **jQuery UI + Datepicker**: Chọn ngày sinh tiện lợi.
- ✅ **Tổ chức thư mục gọn gàng** theo mô hình MVC đơn giản.

---

## ⚙️ Công nghệ & thư viện sử dụng

| Công nghệ      | Vai trò                                 |
|----------------|------------------------------------------|
| `HTML5`        | Giao diện cấu trúc cơ bản                |
| `CSS3`         | Tùy chỉnh giao diện (kèm Bootstrap)      |
| `Bootstrap 4`  | Thiết kế form, modal, bảng responsive    |
| `JavaScript`   | Logic xử lý chính (theo hướng OOP)       |
| `jQuery`       | Hỗ trợ DOM thao tác và sự kiện nhanh     |
| `jQuery UI`    | Datepicker, hiệu ứng nâng cao            |
| `Moment.js`    | Xử lý định dạng ngày tháng (nếu có)      |

---

## 🧩 Tính năng chính

- 🧾 **Thêm nhân viên**: Nhập thông tin từ form, thêm dòng mới vào bảng.
- 📝 **Cập nhật nhân viên**: Click chỉnh sửa, form tự đổ dữ liệu, cập nhật.
- ❌ **Xóa nhân viên**: Loại bỏ nhân viên khỏi danh sách theo ID.
- 🔍 **Tìm kiếm loại nhân viên**: Theo xếp loại như "Xuất sắc", "Khá", "Giỏi".
- 💰 **Tính tổng lương**: Theo giờ làm việc, hệ số lương.
- 📅 **Chọn ngày sinh**: Sử dụng jQuery UI datepicker tiện lợi.
- ✅ **Validation cơ bản**: Kiểm tra các input khi submit.

---

## 📂 Cấu trúc thư mục

```bash
QuanLyNhanVien/
│
├── index.html               # Trang chính
│
├── css/                     # Custom stylesheet
│   └── style.css
│
├── js/                      # Thư viện JS hỗ trợ (CDN nội bộ)
│   ├── bootstrap.min.js
│   ├── jquery.min.js
│   ├── jquery-ui.min.js
│   ├── moment.min.js
│   └── ...
│
├── controllers/             # Logic xử lý tương tác
│   └── main.js              # Các hàm xử lý sự kiện, render
│
├── models/                  # Định nghĩa lớp đối tượng
│   └── nhanVien.js          # Class NhanVien (OOP)
│
├── img/                     # Hình ảnh nếu có
│
└── README.md                # File mô tả dự án (bạn đang đọc)
```

---

## 🛠️ Hướng dẫn sử dụng

Nếu bạn muốn tải và chạy dự án trên máy cá nhân:

```bash
git clone https://github.com/tuanluck/QuanLyNhanVien.git
cd QuanLyNhanVien
mở file index.html bằng trình duyệt
```

- **Sử dụng trực tiếp**: Không cần build hay cài đặt thêm.
- **Triển khai online**: Có thể deploy lên Netlify, GitHub Pages, Vercel...

---

## 📚 Ghi chú bổ sung
- **Tính năng hiện tại**: Dự án đã bao gồm các chức năng cơ bản như thêm, sửa, xóa, tìm kiếm và tính toán lương. Tuy nhiên, một số tính năng nâng cao (như lưu trữ dài hạn hoặc biểu đồ) vẫn chưa được triển khai.
- **Hạn chế**: Giao diện và logic chưa tối ưu hoàn toàn, phù hợp cho mục đích học tập và thử nghiệm.
- **Yêu cầu hệ thống**: Chỉ cần trình duyệt hiện đại (Chrome, Firefox, Edge) để chạy trực tiếp.

---

## 🔮 Gợi ý nâng cấp
- 💾 **Lưu trữ dữ liệu**: Sử dụng `localStorage` để giữ dữ liệu khi tải lại trang.
- 🧹 **Tách validation**: Tạo file riêng để xử lý kiểm tra dữ liệu.
- 🧮 **Bộ lọc nâng cao**: Thêm lọc theo mức lương, phòng ban...
- 📊 **Thống kê**: Kết hợp Chart.js để vẽ biểu đồ số lượng nhân viên.
- 🔐 **Phân quyền**: Thêm tính năng đăng nhập (admin/user).
- 🌈 **Tối ưu giao diện**: Chuyển sang Tailwind CSS hoặc framework như Bootstrap 5.
- ⚛️ **Chuyển đổi SPA**: Sử dụng React hoặc Vue để làm ứng dụng đơn trang hiện đại.

---

## 📧 Thông tin liên hệ
- **Nguyễn Anh Tuấn**  
  - 💼 Vai trò: Lập trình viên Frontend thực hành  
  - 📧 Email: [nguyenanhtuan9690@gmail.com](mailto:nguyenanhtuan9690@gmail.com)  
  - 🌐 GitHub: [https://github.com/tuanluck](https://github.com/tuanluck)  

---

## ✨ Khuyến khích
Dự án này là bước đệm để hiểu cách tổ chức một ứng dụng web nhỏ, áp dụng kiến thức về lập trình hướng đối tượng, xử lý form và giao diện thực tế. Nếu bạn đang học JavaScript, hãy clone dự án về, thử làm lại từ đầu hoặc thêm tính năng mới để nâng cao kỹ năng nhé!

---
