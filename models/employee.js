function Employee(
  _account,
  _name,
  _email,
  _pass,
  _workingDate,
  _baseSalary,
  _position,
  _worktime
) {
  this.account = _account;
  this.name = _name;
  this.email = _email;
  this.pass = _pass;
  this.workingDate = _workingDate;
  this.baseSalary = _baseSalary;
  this.position = _position;
  this.worktime = _worktime;
  this.totalSalary = 0;
  this.rank = "";

  //   Tinh tong luong
  this.sumSalary = function () {
    if (this.position === "Sếp") {
      this.totalSalary = this.baseSalary * 3;
    } else if (this.position === "Trưởng phòng") {
      this.totalSalary = this.baseSalary * 2;
    } else if (this.position === "Nhân viên") {
      this.totalSalary = this.baseSalary;
    }
  };

  //   Xep loai
  this.rank = function (worktime) {
    if (worktime >= 192) {
      this.rank = "Nhan vien xuat sac";
    } else if (worktime >= 176 && worktime < 192) {
      this.rank = "Nhan vien gioi";
    } else if (worktime >= 160 && worktime < 176) {
      this.rank = "Nhan vien kha";
    } else if (worktime < 160) {
      this.rank = "Nhan vien trung binh";
    }
  };
}
