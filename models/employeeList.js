function EmployeeList() {
  this.arrEmployee = [];

  this.createEmployee = function (employee) {
    this.arrEmployee.push(employee);
  };

  this.findLocation = function (account) {
    var index = -1;
    for (var i = 0; i < this.arrEmployee.length; i++) {
      var employee = this.arrEmployee[i];
      if (account === employee.account) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.delEmployee = function (account) {
    var index = this.findLocation(account);
    if (index !== -1) {
      this.arrEmployee.splice(index, 1);
    }
  };

  this.editEmployee = function (account) {
    var index = this.findLocation(account);
    if (index !== -1) {
      var employee = this.arrEmployee[index];
      return employee;
    }
    return null;
  };

  this.updateEmployee = function (employee) {
    var index = this.findLocation(employee.account);

    if (index !== -1) {
      this.arrEmployee[index] = employee;
    }
  };

  this.findEmployee = function (keyword) {
    var arrFind = [];
    for (var i = 0; i < this.arrEmployee.length; i++) {
      var employee = this.arrEmployee[i];
      if (employee.rank.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        arrFind.push(employee);
      }
    }

    return arrFind;
  };
}
