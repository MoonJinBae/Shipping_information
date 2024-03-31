let idVal = document.querySelector('#id'), // 아이디
    pwVal = document.querySelector('#pw'); // 패스워드


// 빈 문자열 검사(공통)
function isEmpty(value) {
    return value === "" ? true : false; // 빈문자열 이면 true 아니면 false
}
// 공백 포함 검사(공통)
function isSpace(value) {
    let regExp = /[\s]/; // 공백 체크 정규표현식
    return regExp.test(value);
}

function validation(){
    if(isEmpty(idVal.value)){
        alert("아이디를 입력하세요.")
        return false;
    } else if(isSpace(idVal.value)){
        alert("아이디에 공백은 허용하지 않습니다.")
        return false;
    } else if(isEmpty(pwVal.value)){
        alert("비밀번호를 입력하세요.")
        return false;
    } else if(isSpace(pwVal.value)){
        alert("비밀번호에 공백은 허용하지 않습니다.")
        return false;
    }
}