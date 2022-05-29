/*
    Controles da navegação
    Sistema para deixar o conteúdo da navigação selecionado ativado
*/
let linkNav = document.getElementsByClassName("nav-item");

for(let i = 0; i < linkNav.length; i++){
    linkNav[i].addEventListener('click', function(){
        let CurrentlyClicked = document.getElementsByClassName("menu_active");
        CurrentlyClicked[0].className = CurrentlyClicked[0].className.replace(" menu_active");
        this.className += " menu_active"
    })
}


// Função que exibe o conteúdo about ao clicar no botão
function showContentAbout(){
    let displayContent2 = document.getElementsByClassName('content-p');

    if(displayContent2[0].style.display == 'none'){
        displayContent2[0].style.display = 'block';
        displayContent2[1].style.display = 'none';
    }    
}

// Função que exibe o conteúdo curiosidades ao clicar no botão
function showContentCuri(){
    let displayContent2 = document.getElementsByClassName('content-p');
    if(displayContent2[1].style.display == 'none'){
        displayContent2[1].style.display = 'block';
        displayContent2[0].style.display = 'none';
    }
    
}



