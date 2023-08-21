
/* document.querySelector(".set , *").addEventListener("click", notification);

function notification(){
    alert("I got Clicked !")
}
*/

var Buttons = document.querySelectorAll(".drum").length;

for (let i = 0 ; i < Buttons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", first);



    function first(){
    
        var buttonInnerHTML = this.innerHTML;


        switch (buttonInnerHTML) {


            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

                case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

                     case "s":
                      var audio  = new Audio("sounds/snare.mp3");
                      audio.play();
                      break;
                 
                          case "d":
                          var audio = new Audio("sounds/tom-1.mp3");
                          audio.play()
                          break;
 
                              case "j":
                              var audio = new Audio("sounds/tom-2.mp3")
                              audio.play();
                              break;

                                   case "k":
                                   var audio = new Audio("sounds/tom-3.mp3");
                                   audio.play();
                                   break;

                                        case "l":
                                          var audio = new Audio("sounds/tom-4.mp3")
                                          audio.play();
                                          break;
            default:
                break;
        }





        

/*
        switch (buttonInnerHTML) {
            case "w":
                   var audio = new Audio("sounds/crash.mp3");
                   audio.play()
                break;
        
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;


            default:
                break;
        }
*/


    }

}




/*
var Buttons = document.querySelectorAll(".drum").length;

for (let i = 0 ; i < Buttons ; i++){

    document.querySelectorAll(".drum")[0].addEventListener("click", first);

    function first(){
        
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }

}
*/

/*
var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonLetter = this.innerText;
        var sound;

        switch (buttonLetter) {

            
              case 'w':
                sound = new Audio("sounds/crash.mp3");
                break;

              case 'a':
                sound = new Audio("sounds/kick-bass.mp3");
                break;
              case 's':
                sound = new Audio("sounds/snare.mp3");
                break;
              case 'j':
                sound = new Audio("sounds/tom-1.mp3");
                break;
              case 'k':
                sound = new Audio("sounds/tom-2.mp3");
                break;
              case 'd':
                sound = new Audio("sounds/tom-3.mp3");
                break;
              case 'l':
                sound = new Audio("sounds/tom-4.mp3");
                break;
        }

        sound.play();
    });
}
*/







/*
var Buttons = document.querySelectorAll(".drum").length;

for (var i = 0 ; i<Buttons ; i++){
    document.querySelectorAll(".w")[i].addEventListener("click", Notification)

    function Notification(){
        var audio = new Audio("sounds/crash.mp3");
        audio.play()
    }
  
}

*/



































/*
document.querySelector(".w").addEventListener("click", notification);

function notification(){
    var audio = new Audio('crash.mp3');
    audio.play();
}
*/

















/*

// Load your audio files
const snareSound = new Audio('crash.mp3');
const kickSound = new Audio('kick-bass.mp3');

// Function to play sound based on button ID
function playSound(sound) {
    switch (sound) {
        case 'snare':
            snareSound.currentTime = 0; // Reset sound to beginning
            snareSound.play();
            break;
        case 'kick':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        // Add more cases for other buttons and sounds
        default:
            break;
    }
}

// Add click event listeners to buttons
document.getElementById('snare').addEventListener('click', function () {
    playSound('snare');
});

document.getElementById('kick').addEventListener('click', function () {
    playSound('kick');
});

*/


































/*
var allButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<allButtons ; i++ ){

    document.querySelectorAll(".drum")[i].addEventListener("click", text);

    function text(){
        alert("I got Clicked!")
    }
}



*/


/*
var buttons = document.querySelectorAll("button");

document.querySelector(".set , *").addEventListener("click", text)

function text(){
    alert("I got Clicked!")
} 

*/

/*

var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("I got clicked!");
  });
});


*/







