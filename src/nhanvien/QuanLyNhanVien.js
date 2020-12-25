import React, { Component } from 'react'

export default class QuanLyNhanVien extends Component {
    render() {
        return (
            <div>
                     <div className="container">
  <div className="row">
    <div className="col-12">
      <h1 className="text-center display-4">Quản lý nhân viên</h1>
      <div className="form-group">
        <p>Mã nhân viên</p>
        <input className="form-control" id="maNhanVien" />
        <p className="text-danger kiemTraRong-maNhanVien" />
        <p className="text-danger kiemTraDinhDang-maNhanVien" />
        <p className="text-danger kiemTraDoDaiChuoi-maNhanVien" />
      </div>
      <div className="form-group">
        <p>Tên nhân viên</p>
        <input className="form-control" id="tenNhanVien" />
        <p className="text-danger kiemTraRong-tenNhanVien" />
        <p className="text-danger kiemTraDinhDang-tenNhanVien" />
      </div>
      <div className="form-group">
        <p>Chức vụ</p>
        <select className="form-control" id="chucVu">
          <option value={3}>Giám đốc</option>
          <option value={2}>Quản lý</option>
          <option value={1}>Nhân viên</option>
        </select>
      </div>
      <div className="form-group">
        <p>Lương cơ bản</p>
        <input className="form-control" id="luongCoBan" />
        <p className="text-danger kiemTraRong-luongCoBan" />
        <p className="text-danger kiemTraGiaTri-luongCoBan" />
        <p className="text-danger kiemTraDinhDang-luongCoBan" />
      </div>
      <div className="form-group">
        <p>Số giờ làm trong tháng</p>
        <input className="form-control" id="soGioLamTrongThang" />
        <p className="text-danger kiemTraRong-soGioLamTrongThang" />
        <p className="text-danger kiemTraGiaTri-soGioLamTrongThang" />
        <p className="text-danger kiemTraDinhDang-soGioLamTrongThang" />
      </div>
      <div className="form-group text-right">
        <button id="btnXacNhan" className="btn btn-outline-success">Xác nhận</button>
        <button id="btnLuuThongTin" className="btn btn-primary ml-1">Lưu thông tin</button>
      </div>
    </div>
  </div></div>
  <table className="table ">
  <thead>
    <tr className="bg-primary text-white">
      <th>Mã nhân viên</th>
      <th>Tên nhân viên viên</th>
      <th>Chức Vụ</th>
      <th>Lương cơ bản</th>   
      <th>Tổng lương</th>
      <th>Giờ làm/Tháng</th>
      <th>Xếp Loại Nhân viên</th>
      <th>  </th>
    </tr>
  </thead>
  <tbody id="tableNhanVien">
  </tbody>
</table>
            </div>
        )
    }
}
