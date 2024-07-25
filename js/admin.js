const admin = document.querySelector(".admin");
let token = localStorage.getItem("x-auth-token");

function checkToken() {
    if (!token) {
        window.location.replace("/pages/login.html");
    }
}

checkToken();

const jsBtn = document.querySelector(".js-btn");

jsBtn.addEventListener("click", () => {
    localStorage.removeItem("x-auth-token");
    open("/pages/login.html", "_self");
});

function adminInfoRender() {
    let userData = JSON.parse(localStorage.getItem("user"));
    admin.innerHTML = `
    <img src=${userData.image} alt="images">
    <h3>${userData.firstName}</h3>
    `;
}

adminInfoRender();
