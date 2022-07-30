document.title = "노마드코더 JS";

const h1 = document.querySelector(".hello");

// console.dir(h1);

function handleListner() {
    // 현재 색상정보 저장!
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor; 
}

function handleMouseEnter() {
    h1.innerText = "마우스 안뇽!";
    console.log("마우스가 올라갔어요!!")
}

function handleMouseLeave() {
    h1.innerText = "마우스 잘가~";
    console.log("Bye~👋");
}

function handleWindowResize() {
    document.body.style.backgroundColor = "skyblue";
}

function handleWindowCopy() {
    alert("불펌방지!!!");
}

function handleWindowOffline() {
    alert("인터넷이 연결되지 않았어요ㅠㅠ😢")
}

function handleWindowOnline() {
    alert("인터넷에 연결되었습니다!");
}

// More Simple
// h1.onclick = handleListner;

h1.addEventListener("click", handleListner);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// window Element
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline)