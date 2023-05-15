//let x = document.querySelectorAll(".drum");
//let y =$(".drum");
// document.querySelectorAll("button")[1].addEventListener("click", function(){
//     alert("I got clicked");
// });

// document.querySelector("button")[2].addEventListener("click", function(){
//     alert("I got clicked");
// });

/////////////////////////KeyPress/////////////////
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//   }, false);


// for (var i = 0; i < x.length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//             //    console.log(this.innerHTML);
        
            
//             var kk = this.innerHTML;
//             makeSound(kk);
//             buttonAnimation(kk);
            
            
           

            
//         });

//     }

$(".drum").on("click", function() {
    console.log(jQuery(this).html());
  
    var kk = jQuery(this).html();
    makeSound(kk);
    buttonAnimation(kk);
  });
  

    ///////////KeyPress 
    document.addEventListener("keydown", function(event){
        
     makeSound(event.key);
     buttonAnimation(event.key);
    });

    function makeSound(key){
        let audio;
        switch (key) {
                            case "w":
                                audio = new Audio('sounds/snare.mp3');
                                audio.play();
                                break;
                            case "a":
                                audio = new Audio('sounds/crash.mp3');
                                audio.play();
                                break;
                            case "s":
                                audio = new Audio('sounds/tom-4.mp3');
                                audio.play();
                                break;
                            case "d":
                                audio = new Audio('sounds/kick-bass.mp3');
                                audio.play();
                                break;
                            case "j":
                                audio = new Audio('sounds/tom-1.mp3');
                                audio.play();
                                break;
                            case "k":
                                audio = new Audio('sounds/tom-2.mp3');
                                audio.play();
                                break;
                            case "l":
                                audio = new Audio('sounds/tom-3.mp3');
                                audio.play();
                                break;
                            case "i":
                                audio = new Audio('sounds/hi-hat.mp3');
                                audio.play();
                                break;

                            default: console.log(kk);    
                        }
    }
        
    function buttonAnimation(currentKey){
            var activeButton = document.querySelector("."+ currentKey);
            activeButton.classList.add("pressed");
            setTimeout(function(){ activeButton.classList.remove("pressed");}, 200);
    }

    // for(var i=0; i<x.length; i++){
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //            console.log(this.innerHTML);
    //            document.
    //         });
    // }
    // let audio = new Audio('sounds/hi-hat.mp3');
    // audio.play();


    // // This is a CONSTRUCTOR FUNCTION


    // function HouseKeeper(yearsOfExp, name, dutyCleaning) {
    //     this.yearsOfExp = yearsOfExp;
    //     this.name = name;
    //     this.dutyCleaning = dutyCleaning;

    // }

    // //////Initialize Object

    // var houseKeeper1 = new HouseKeeper(3, "Abby", ["mapping", "Laundry"]);
    // var houseKeeper2 = new HouseKeeper(3, "Abby", ["cleaning", "Dishwashing"]);