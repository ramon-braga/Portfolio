let language = document.querySelector("#language");
let active = document.querySelectorAll(".head-menu ul li a");
let link = document.getElementById("hire_me");
let commingProjects = document.querySelectorAll(".coming-project");

function removeActive(){
    active.forEach(opcao => {
        if(opcao.className === "active"){
            opcao.className = "";
        }
    });
}

active.forEach(item => {

    item.addEventListener("click", () => {
        removeActive();
        item.className = "active"
    });
});

language.addEventListener("click", () => {
    if(language.innerText === "Portuguese"){
        language.innerText = "Inglês";
        idiom["header"].forEach(header => {
            document.getElementById(header.id).innerText= header.content_pt;
        });
        idiom["body"].forEach(body => {
            document.getElementById(body.id).innerText = body.content_pt;
        });
        document.querySelectorAll(".coming-project").forEach(item => {
            item.innerText = "Em breve";
        });
        link.setAttribute("href", "./assets/cv.pdf");
        
        
    }else{
        language.innerText = "Portuguese";
        idiom["header"].forEach(header => {
            document.getElementById(header.id).innerText = header.content_eng;
        });
        idiom["body"].forEach(body => {
            document.getElementById(body.id).innerText = body.content_eng;
        });
        commingProjects.forEach(item => {
            item.innerText = "Coming soon";
        });
        link.setAttribute("href", "./assets/cv-english-version.pdf");
    }
});