const h1 = document.querySelector("h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    // h1.className === clickedClass
    // if(h1.classList.contains(clickedClass)) {
    //     // h1.className = "";
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);