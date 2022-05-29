/*
    Controles da navegação
*/
let linkNav = document.getElementsByClassName("nav-item");

for(let i = 0; i < linkNav.length; i++){
    linkNav[i].addEventListener('click', function(){
        let CurrentlyClicked = document.getElementsByClassName("menu_active");
        CurrentlyClicked[0].className = CurrentlyClicked[0].className.replace(" menu_active");
        this.className += " menu_active"
    })
}