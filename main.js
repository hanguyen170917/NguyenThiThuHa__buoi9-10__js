function getELe(id) {
  return document.getElementById(id);
}

var employeeList = new EmployeeList();

var validation = new Validation();

getLocalStorage();

function getEmployee() {
  // DOM
  var _account = getELe("tknv").value;
  var _name = getELe("name").value;
  var _email = getELe("email").value;
  var _pass = getELe("password").value;
  var _workingDate = getELe("datepicker").value;
  var _baseSalary = getELe("luongCB").value;
  parseInt(_baseSalary);
  var _position = getELe("chucvu").value;
  var _worktime = getELe("gioLam").value;
  parseInt(_worktime);

  // flag(cờ)
  var isValid = true;

  // Validation account
  isValid &=
    validation.checkNull(_account, "tbTKNV", "(*)Tài khoản không được rỗng") &&
    validation.checkCharacterLength(
      _account,
      "tbTKNV",
      "Tài khoản tối đa 4-6 ký số",
      4,
      6
    );

  // Validation name
  isValid &=
    validation.checkNull(_name, "tbTen", "(*)Họ và tên không được rỗng") &&
    validation.checkString(_name, "tbTen", "Tên nhân viên phải là chữ");

  // Validation email
  isValid &=
    validation.checkNull(_email, "tbEmail", "(*)Email không được rỗng") &&
    validation.checkEmail(_email, "tbEmail", "(*)Email phải đúng định dạng");

  // Validation pass
  isValid &=
    validation.checkNull(_pass, "tbMatKhau", "(*)Mật khẩu không được rỗng") &&
    validation.checkCharacterLength(
      _pass,
      "tbMatKhau",
      "(*)Mật khẩu từ 6-10 ký tự",
      6,
      10
    ) &&
    validation.checkPassword(
      _pass,
      "tbMatKhau",
      "(*)Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  // Validation workingDate
  isValid &= validation.checkNull(
    _workingDate,
    "tbNgay",
    "(*)Ngày vào làm không được rỗng, vui lòng chọn ngày"
  );
  // ) &&
  // validation.checkWorkingDate(
  //   _workingDate,
  //   "tbNgay",
  //   "(*)Ngày vào làm  định dạng mm/dd/yyyy"
  // );

  // Validation baseSalary
  isValid &=
    validation.checkNull(
      _baseSalary,
      "tbLuongCB",
      "(*)Lương không được rỗng"
    ) &&
    validation.checkBaseSalary(
      _baseSalary,
      "tbLuongCB",
      "(*)Lương từ 1 000 000 - 20 000 000"
    );

  // Validation position
  isValid &= validation.checkPosition(
    _position,
    "tbChucVu",
    "(*)Vui lòng chọn chức vụ hợp lệ"
  );

  // Validation workTime
  isValid &=
    validation.checkNull(_worktime, "tbGiolam", "(*)Giờ làm không được rỗng") &&
    validation.checkWorkTime(
      _worktime,
      "tbGiolam",
      "(*)Giờ làm trong tháng từ 80 - 200 giờ"
    );

  // check form
  if (!isValid) {
    return null;
  }

  var employee = new Employee(
    _account,
    _name,
    _email,
    _pass,
    _workingDate,
    _baseSalary,
    _position,
    _worktime
  );

  employee.sumSalary();

  employee.rank(_worktime);
  return employee;
}

var arr = [];
// Them NV
getELe("btnThemNV").addEventListener("click", function () {
  var employee = getEmployee();

  if (employee) {
    employeeList.createEmployee(employee);
    createTable(employeeList.arrEmployee);
    setLocalStorage();
  }
});

// Xoa NV
function delEmployee(account) {
  employeeList.delEmployee(account);
  setLocalStorage();
  getLocalStorage();
}

// Sua NV
function editEmployee(account) {
  var employee = employeeList.editEmployee(account);

  if (employee) {
    getELe("tknv").value = employee.account;
    getELe("tknv").disabled = true;

    getELe("name").value = employee.name;
    getELe("email").value = employee.email;
    getELe("password").value = employee.pass;
    getELe("datepicker").value = employee.workingDate;
    getELe("luongCB").value = employee.baseSalary;
    getELe("chucvu").value = employee.position;
    getELe("gioLam").value = employee.worktime;
  }
}

// Cap nhat NV
getELe("btnCapNhat").addEventListener("click", function () {
  var employee = getEmployee();

  employeeList.updateEmployee(employee);
  setLocalStorage();
  getLocalStorage();
});

// Tim NV
getELe("btnTimNV").addEventListener("click", function () {
  var keyWord = getELe("searchName").value;

  var arrFind = employeeList.findEmployee(keyWord);
  createTable(arrFind);
});

// Tao bang
function createTable(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var employee = arr[i];
    content += `
            <tr>
                <td>${employee.account}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.workingDate}</td>
                <td>${employee.position}</td>
                <td>${employee.totalSalary}</td>
                <td>${employee.rank}</td>
                <td>
                  <button class="btn btn-danger" onclick="delEmployee('${employee.account}')">
                    Xoá
                  </button>                  
                </td>
                <td>
                  <button class="btn btn-info" onclick="editEmployee('${employee.account}')" data-toggle="modal" data-target="#myModal">
                     Sửa
                  </button> 
                </td>
                
            </tr>
        `;
  }
  getELe("tableDanhSach").innerHTML = content;
}

function setLocalStorage() {
  // doi tu JSON => string
  var dataString = JSON.stringify(employeeList.arrEmployee);

  // Luu xuong localStorage
  localStorage.setItem("employeeList", dataString);
}

function getLocalStorage() {
  var data = localStorage.getItem("employeeList");

  if (data) {
    var dataJson = JSON.parse(data); // doi tu string => JSON
    employeeList.arrEmployee = dataJson;
    createTable(employeeList.arrEmployee);
  }
}
