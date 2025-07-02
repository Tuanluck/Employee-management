import { NhanVien } from "../models/nhanVien.js";

let dsnv = [];

function getElement(id) {
  return document.getElementById(id);
}

function validateForm(nv) {
  const numberRegex = /^\d{4,6}$/;
  const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/u;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

  if (!nv.tknv || !numberRegex.test(nv.tknv)) return "Tài khoản phải 4-6 ký số!";
  if (!nv.name || !nameRegex.test(nv.name)) return "Tên phải là chữ và không để trống!";
  if (!nv.email || !emailRegex.test(nv.email)) return "Email sai định dạng!";
  if (!nv.password || !passwordRegex.test(nv.password)) return "Mật khẩu từ 6-10 ký tự, có số, in hoa, ký tự đặc biệt!";
  if (!nv.datepicker || !dateRegex.test(nv.datepicker)) return "Ngày làm phải có định dạng mm/dd/yyyy!";
  if (!nv.luongCB || nv.luongCB < 1000000 || nv.luongCB > 20000000) return "Lương phải từ 1tr đến 20tr!";
  if (!["Sếp", "Trưởng phòng", "Nhân viên"].includes(nv.chucvu)) return "Chọn chức vụ hợp lệ!";
  if (!nv.gioLam || nv.gioLam < 80 || nv.gioLam > 200) return "Giờ làm phải từ 80 đến 200 giờ!";

  return "";
}

function renderTable(ds) {
  const tbody = getElement("tableDanhSach");
  tbody.innerHTML = "";

  ds.forEach((nv, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${nv.tknv}</td>
      <td>${nv.name}</td>
      <td>${nv.email}</td>
      <td>${nv.datepicker}</td>
      <td>${nv.chucvu}</td>
      <td>${nv.tongLuong()}</td>
      <td>${nv.loaiNV()}</td>
      <td>
        <button class="btn btn-info" onclick="suaNhanVien(${index})">Sửa</button>
        <button class="btn btn-danger" onclick="xoaNhanVien(${index})">Xóa</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function clearForm() {
  getElement("formNhanVien").reset();
}

function layThongTinForm() {
  let nhanVien = new NhanVien();
  let arrInputTag = document.querySelectorAll('#formNhanVien input, #formNhanVien select');

  for (let tag of arrInputTag) {
    let id = tag.id;
    let value = tag.value.trim();

    switch (id) {
      case 'luongCB':
      case 'gioLam':
        nhanVien[id] = Number(value);
        break;
      case 'chucvu':
        nhanVien.chucvu = value === "Chọn chức vụ" ? "" : value;
        break;
      default:
        nhanVien[id] = value;
    }
  }

  return nhanVien;
}

window.themNhanVien = function () {
  const nv = layThongTinForm();
  const error = validateForm(nv);

  if (error) {
    alert(error);
    return;
  }

  dsnv.push(nv);
  renderTable(dsnv);
  clearForm();
  $('#myModal').modal('hide');
};

window.xoaNhanVien = function (index) {
  dsnv.splice(index, 1);
  renderTable(dsnv);
};

window.suaNhanVien = function (index) {
  const nv = dsnv[index];
  for (let key in nv) {
    const tag = getElement(key);
    if (tag) tag.value = nv[key];
  }
  getElement("btnThemNV").style.display = "none";
  getElement("btnCapNhat").style.display = "inline-block";
  getElement("btnCapNhat").onclick = function () {
    const nvCapNhat = layThongTinForm();
    const error = validateForm(nvCapNhat);
    if (error) return alert(error);

    dsnv[index] = nvCapNhat;
    renderTable(dsnv);
    clearForm();
    $('#myModal').modal('hide');
    getElement("btnThemNV").style.display = "inline-block";
    getElement("btnCapNhat").style.display = "none";
  };
};

// Tìm kiếm nhân viên theo loại
getElement("btnTimNV").onclick = function () {
  const keyword = getElement("searchName").value.toLowerCase();
  const result = dsnv.filter(nv => nv.loaiNV().toLowerCase().includes(keyword));
  renderTable(result);
};

document.querySelector("#btnThemNV").onclick = themNhanVien;