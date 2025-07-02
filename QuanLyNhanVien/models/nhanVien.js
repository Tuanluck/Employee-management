export class NhanVien {
  constructor(tknv, name, email, password, datepicker, luongCB, chucvu, gioLam) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = Number(luongCB);
    this.chucvu = chucvu;
    this.gioLam = Number(gioLam);
  }

  tongLuong() {
    switch (this.chucvu) {
      case "Sếp": return this.luongCB * 3;
      case "Trưởng phòng": return this.luongCB * 2;
      case "Nhân viên": return this.luongCB;
      default: return 0;
    }
  }

  loaiNV() {
    if (this.gioLam >= 192) return "Xuất sắc";
    if (this.gioLam >= 176) return "Giỏi";
    if (this.gioLam >= 160) return "Khá";
    return "Trung bình";
  }
}