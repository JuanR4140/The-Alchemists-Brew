document.querySelector("#dropdown-btn").addEventListener("click", () => {
    let content = document.querySelector("#dropdown-content");
    if(content.style.display == "block"){
        content.style.display = "none";
    }else{
        content.style.display = "block";
    }
});

window.onclick = (e) => {
    if(!e.target.matches("#dropdown-btn")){
        if(document.querySelector("#dropdown-content").classList.contains("show")){
            document.querySelector("#dropdown-content").classList.remove("show");
        }
    }
}