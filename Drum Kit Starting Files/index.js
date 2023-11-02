for (let i = 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickOnBtn)
}

function clickOnBtn(){

    var buttonInnerHtml = this.innerHTML; 

    switch (buttonInnerHtml) {
        case 'w':
            var audio = new Audio('sounds/crash.png')
            audio.play()
            break;
    
        default:
            break;
    }
}

