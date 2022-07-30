const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function LoginBtnClick() {
    // const username = loginInput.value;
    // if (username === ""){
    //     alert("아이디를 입력하세요!");
    // } else if (username.length > 15){
    //     alert("아이디는 15자를 초과할 수 없어요ㅠㅠ")
    // } else {
    //     alert(username + " 님 환영합니다!");
    // }
}

loginButton.addEventListener("click", LoginBtnClick);