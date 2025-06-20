
for (var i =0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",fcall);
    function fcall(){
        var i = this.innerHTML;
        handleclick(i);
        buttonanimation(i);
    }
    function handleclick(i){
        switch (i) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            default:
                break;

        }
}
}
document.addEventListener("keydown",function(event){
    keysound(event.key);
    buttonanimation(event.key);

});
function keysound(i){
    switch (i) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":s
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}
function buttonanimation(key){
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}