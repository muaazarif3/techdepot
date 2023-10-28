let buttons=document.getElementsByClassName("button");



buttons.addEventListener("click", e => {
    const btn=e.currentTarget;
    const parent=btn.parentNode;


    let obj={
        id: parent.document.querySelector("#name").innerText,
        price: parent.document.querySelector("#price").innerText,
        para: parent.document.querySelector("p").innerText,
        img: parent.document.querySelector("img[src]").innerHTML   
    }
    localStorage.setItem("obj", JSON.stringify(obj));
});