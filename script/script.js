/*생년월일 옵션 (select option) 시작*/

fnBirthInit(); // Initialize 초기화

/*출생년월일 초기화 시작*/

function fnBirthInit() {
    /*출생년도 시작*/
    var now = new Date();
    var yearStart = now.getFullYear();
    var yearOptTag = "";

    for (var i=yearStart; i>=1940; i--) {
        if (i == 1970) {
            yearOptTag += "<option selected>" + i + "</option>"
        } else {
            yearOptTag += "<option>" + i + "</option>"
        }
    }

    document.getElementById("birthYear").innerHTML = yearOptTag;
    /*출생년도 종료*/

    var monthOptTag = "<option id= 'monthDelOpt'>월</option>";

    for (var i=1; i<=12; i++) {
            monthOptTag += "<option>" + i + "</option>"
    }

    document.getElementById("birthMonth").innerHTML = monthOptTag;
    /*출생월 끝*/

    var dateOptTag = "<option id= 'dateDelOpt'>일</option>";

    for (var i=1; i<=31; i++) {
            dateOptTag += "<option>" + i + "</option>"
    }

    document.getElementById("birthDate").innerHTML = dateOptTag;
    /*출생일 끝*/
}


/*출생년월일 초기화 종료*/

function fnDelMonthOpt() {
    document.getElementById("monthDelOpt").style.display = "none";
}

function fnDelDateOpt() {
    document.getElementById("dateDelOpt").style.display = "none";
}

/*월별 마지막 날짜 표시 시작*/

function fnEndDate() {
    var yearVal = document.getElementById("birthYear").value;
    yearVal = parseInt(yearVal);
    var remainder = 0; // 나머지
    var febEndDate = 28; // 또는 29;

     if (yearVal % 4 == 0) {
         if (!(yearVal % 100 == 0 && yearVal % 400 != 0)) { // 평년
             febEndDate = 29;
         }
     }

    var monthVal = document.getElementById("birthMonth").value;
    var endDateArray = [31,febEndDate,31,30,31,30,31,31,30,31,30,31];
    var endDate = endDateArray[monthVal-1];

    var dateOptTag = "";

    for (var i =1; i<=endDate; i++) {
        dateOptTag += "<option>" + i + "</option>"
    }

    document.getElementById("birthDate").innerHTML = dateOptTag;
}

/*월별 마지막 날짜 표시 종료*/

/*년도 변경시 월,일 초기화 시작*/

function fnReset() {
     var monthOptTag = "<option id= 'monthDelOpt'>월</option>";

    for (var i=1; i<=12; i++) {
            monthOptTag += "<option>" + i + "</option>"
    }

    document.getElementById("birthMonth").innerHTML = monthOptTag;
    /*출생월 끝*/

    var dateOptTag = "<option id= 'dateDelOpt'>일</option>";

    for (var i=1; i<=31; i++) {
            dateOptTag += "<option>" + i + "</option>"
    }

    document.getElementById("birthDate").innerHTML = dateOptTag;
}

/*년도 변경시 월,일 초기화 종료*/

/*생년월일 옵션 (select option) 종료*/



/*전체동의 시작*/

function fnWholeChk() {
    var chkVal = document.getElementById("wholeAgreeChkBox").checked;
//    alert(chkVal);

    var chkBox01 = document.getElementById("chkBox_01");
    var chkBox02 = document.getElementById("chkBox_02");
    var chkBox03 = document.getElementById("chkBox_03");
    var chkBox04 = document.getElementById("chkBox_04");

    chkBox01.checked = chkVal;
    chkBox02.checked = chkVal;
    chkBox03.checked = chkVal;
    chkBox04.checked = chkVal;

}

function fnReverseChk() {
    var chkBox01 = document.getElementById("chkBox_01").checked;
    var chkBox02 = document.getElementById("chkBox_02").checked;
    var chkBox03 = document.getElementById("chkBox_03").checked;
    var chkBox04 = document.getElementById("chkBox_04").checked;

        if (chkBox01 && chkBox02 && chkBox03 && chkBox04) {
            // 4개의 체크박스 모두가 동시에 true라면
            document.getElementById("wholeAgreeChkBox").checked = true;
        } else {
            // 단 1개라도 true가 아니라면
            document.getElementById("wholeAgreeChkBox").checked = false;
            }
}

/*전체동의 종료*/


/*form 요소 전송 시작*/

function fnSbm() {

    var uName = document.getElementById("uName");
    var uNameVal = uName.value.trim();

    var uId = document.getElementById("uId");
    var uIdVal = uId.value.trim();

    var uPw = document.getElementById("uPw");
    var uPwVal = uPw.value.trim();

    var uPw_Re = document.getElementById("uPw_Re");
    var uPw_ReVal = uPw_Re.value.trim();

    var uEmail = document.getElementById("uEmail");
    var uEmailVal = uEmail.value.trim();
    // value가 공백이 아닐때 전송 가능

    var confirm14ChkBox = document.getElementById("confirm14ChkBox");
    var confirm14_chked = confirm14ChkBox.checked;
    var wholeAgreeChkBox = document.getElementById("wholeAgreeChkBox");
    var wholeAgree_chked = wholeAgreeChkBox.checked;
    // 체크박스가 체크되어 있어야만 전송 가능

    if (uNameVal == "") {
        alert("이름을 입력해주세요.");
        uName.focus();
    } else if (uIdVal == "") {
        alert("아이디를 입력해주세요.");
        uId.focus();
    } else if (uPwVal == "") {
        alert("비밀번호를 입력해주세요.");
        uPw.focus();
    } else if (uPw_ReVal == "") {
        alert("비밀번호를 확인해주세요.");
        uPw_Re.focus();
    } else if (uPwVal != uPw_ReVal) {
        alert("비밀번호가 서로 다릅니다.");
        uPw_Re.focus();
    } else if (uEmailVal == "") {
        alert("이메일을 입력해주세요.");
        uEmail.focus();
    } else if (!confirm14_chked) {
        alert("14세 이상 동의에 체크해주세요.");
    } else if (!wholeAgree_chked) {
        alert("전체동의에 체크해주세요.");
    } else {
        var userConfirm = confirm("회원가입을 하시겠습니까?");

        if (userConfirm) {
            joinFrm.action = "https://www.google.com";
            joinFrm.submit();
        } else {
            alert("사용자가 회원가입을 취소하셨습니다.");
        }

    }


}

/*form 요소 전송 종료*/


















