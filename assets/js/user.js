// -------------------- 登录操作 -------------------------
// 登录用户名
const loginUsernameElement = document.querySelector(".login-username");

// 登录密码
const loginPasswordElement = document.querySelector(".login-password");

// 登录按钮
const loginButtonElement = document.querySelector(".login-button");
loginButtonElement.addEventListener('click', () => {
    const username = loginUsernameElement.value;
    const password = loginPasswordElement.value;

    login(username, password);
});

// 登录函数
function login(username, password) {
    if (username == "") {
        alert("请输入用户名");
    }
    else if (password == "") {
        alert("请输入密码");
    }
    else if (username != "" && password != "") {
        alert("登录成功");
    }
}

// -------------------- 注册操作 -------------------------

// 验证码
let userCode;

// 用户名
const registerUsernameElement = document.querySelector(".register-username");

// 密码
const registerPasswordElement = document.querySelector(".register-password");

// 手机
const registerPhoneElement = document.querySelector(".register-phone");

// 验证码
const registerCodeElement = document.querySelector(".register-code");
const registerCodeElementRect = registerCodeElement.getBoundingClientRect();

// 验证码按钮
const registerCodeButtonElement = document.querySelector(".register-code-button");
registerCodeButtonElement.addEventListener('click', () => {
    const phone = registerPhoneElement.value;
    sendCode(phone);
});

// 注册按钮
const registerButtonElement = document.querySelector(".register-button");
registerButtonElement.addEventListener('click', () => {
    const username = registerUsernameElement.value;
    const password = registerPasswordElement.value;
    const phone = registerPhoneElement.value;
    const code = registerCodeElement.value;

    register(username, password, phone, code);
});

// 注册函数
function register(username, password, phone, code) {
    if (username == "") {
        alert("请输入用户名");
    }
    else if (password == "") {
        alert("请输入密码");
    }
    else if (phone == "") {
        alert("请输入手机号");
    }
    else if (code == "") {
        alert("请输入验证码");
    }
    else if (code != userCode) {
        alert("验证码不正确");
    }
    else if (username != "" && password != "" && phone != "" && code != "") {
        alert("注册成功");
    }
}

// 验证码函数
function sendCode(phone) {
    if (phone == "") {
        alert("请输入手机号");
    }
    else if (phone != "") {
        userCode = parseInt(Math.random() * (10000 - 1000)) + 1000;
        alert("验证码已发送！");
        alert("（手机）您的验证码为：" + userCode);

        registerCodeButtonElement.setAttribute("disabled", "true");

        let times = 60;
        registerCodeButtonElement.value = "(" + times-- + "s)";

        const buttonTime = setInterval(() => {
            if (times == 0) {
                clearInterval(buttonTime);
                registerCodeButtonElement.value = "获取验证码";
                registerCodeButtonElement.removeAttribute("disabled");
            }
            else {
                registerCodeButtonElement.value = "(" + times-- + "s)";
            }
        }, 1000);
    }
}

// 链接
const registerLinkElement = document.querySelector(".register");
const loginLinkeElement = document.querySelector(".login");

// 表单
const userFormBoxElement = document.querySelector(".user-form-box");
const loginFormElement = document.querySelector(".login-form");
const registerFormElement = document.querySelector(".register-form");

// 注册链接点击事件
registerLinkElement.addEventListener("click", () => {

    userFormBoxElement.classList.remove("login-form-animation");
    userFormBoxElement.classList.add("register-form-animation");

    loginFormElement.setAttribute("style", "display:flex; opacity: 0");

    setTimeout(() => {
        loginUsernameElement.value = "";
        loginPasswordElement.value = "";
        loginFormElement.setAttribute("style", "display: none");
        registerFormElement.setAttribute("style", "display: flex; opacity: 0");
    }, 500);

    setTimeout(() => {
        registerFormElement.setAttribute("style", "display: flex; opacity: 1");
    }, 1000);
});

// 登录链接点击事件
loginLinkeElement.addEventListener("click", () => {
    userFormBoxElement.classList.remove("register-form-animation");
    userFormBoxElement.classList.add("login-form-animation");

    registerFormElement.setAttribute("style", "display:flex; opacity: 0");

    setTimeout(() => {
        registerUsernameElement.value = "";
        registerPasswordElement.value = "";
        registerPhoneElement.value = "";
        registerCodeElement.value = "";
        registerFormElement.setAttribute("style", "display: none");
        loginFormElement.setAttribute("style", "display: flex; opacity: 0");
    }, 500);

    setTimeout(() => {
        loginFormElement.setAttribute("style", "display: flex; opacity: 1");
    }, 1000);
});