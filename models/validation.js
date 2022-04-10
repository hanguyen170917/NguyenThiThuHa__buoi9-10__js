function Validation() {
  this.checkNull = function (value, errorId, mess) {
    if (value === "") {
      getELe(errorId).innerHTML = mess;
      getELe(errorId).style.display = "block";
      return false;
    }

    getELe(errorId).innerHTML = "";
    getELe(errorId).style.display = "none";
    return true;
  };

  this.checkCharacterLength = function (value, errorId, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      // Hop le
      getELe(errorId).innerHTML = "";
      getELe(errorId).style.display = "none";
      return true;
    }

    // k hop le
    getELe(errorId).innerHTML = mess;
    getELe(errorId).style.display = "block";
    return false;
  };

  this.checkString = function (value, errorId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      // Hop le
      getELe(errorId).innerHTML = "";
      getELe(errorId).style.display = "none";
      return true;
    }

    // k hop le
    getELe(errorId).innerHTML = mess;
    getELe(errorId).style.display = "block";
    return false;
  };

  this.checkEmail = function (value, errorId, mess) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      // Hop le
      getELe(errorId).innerHTML = "";
      getELe(errorId).style.display = "none";
      return true;
    }
    // k hop le
    getELe(errorId).innerHTML = mess;
    getELe(errorId).style.display = "block";
    return false;
  };

  this.checkPassword = function (value, errorId, mess) {
    var pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(pass)) {
      // Hop le
      getELe(errorId).innerHTML = "";
      getELe(errorId).style.display = "none";
      return true;
    }
    // k hop le
    getELe(errorId).innerHTML = mess;
    getELe(errorId).style.display = "block";
    return false;
  };

  //   this.checkWorkingDate = function (value, errorId, mess) {
  //     var date = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  //     if (value.match(date)) {
  //       // Hop le
  //       getELe(errorId).innerHTML = "";
  //       getELe(errorId).style.display = "none";
  //       return true;
  //     }
  //     // k hop le
  //     getELe(errorId).innerHTML = mess;
  //     getELe(errorId).style.display = "block";
  //     return false;
  //   };

  this.checkBaseSalary = function (value, errorId, mess) {
    if (value >= 1000000 && value <= 20000000) {
      // Hop le
      getELe(errorId).innerHTML = "";
      getELe(errorId).style.display = "none";
      return true;
    }
    // k hop le
    getELe(errorId).innerHTML = mess;
    getELe(errorId).style.display = "block";
    return false;
  };

  this.checkPosition = function (value, errorId, mess) {
    if (value === "Chọn chức vụ") {
      // k hop le
      getELe(errorId).innerHTML = mess;
      getELe(errorId).style.display = "block";
      return false;
    }
    // Hop le
    getELe(errorId).innerHTML = "";
    getELe(errorId).style.display = "none";
    return true;
  };

  this.checkWorkTime = function (value, errorId, mess) {
    if (value >= 80 && value <= 200) {
      // Hop le
      getELe(errorId).innerHTML = "";
      getELe(errorId).style.display = "none";
      return true;
    }
    // k hop le
    getELe(errorId).innerHTML = mess;
    getELe(errorId).style.display = "block";
    return false;
  };
}
