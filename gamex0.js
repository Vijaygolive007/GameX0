let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");
let box6=document.querySelector(".box6");
let box7=document.querySelector(".box7");
let box8=document.querySelector(".box8");
let box9=document.querySelector(".box9");
let image=document.querySelector('img')
const button=document.querySelector(".button");
let boxes = document.querySelectorAll('.box');
let turn = document.getElementById("turn");
let audio = new Audio("./asserts/audio/Game-X0.mp3");
function checkWin() {
    const winConditions = [
        [box1, box2, box3], // first row
        [box4, box5, box6], // second row
        [box7, box8, box9], // third row
        [box1, box4, box7], // first column
        [box2, box5, box8], // second column
        [box3, box6, box9], // third column
        [box1, box5, box9], // diagonal 1
        [box3, box5, box7]  // diagonal 2
    ];

    for (let condition of winConditions) {
        if ((condition[0].innerHTML === 'x' && condition[1].innerHTML === 'x' && condition[2].innerHTML === 'x') ||
            (condition[0].innerHTML === '0' && condition[1].innerHTML === '0' && condition[2].innerHTML === '0')) {

            condition[0].style.backgroundColor = "green";
            condition[1].style.backgroundColor = "green";
            condition[2].style.backgroundColor = "green";
            audio.play();
            image.style.display="block";
            console.log('win');
            disableBoxes(); 
            
        }
    }
}

function disableBoxes() {
    boxes.forEach(box => {
        box.style.pointerEvents = 'none'
    });
}
function enableBoxes(){
    boxes.forEach(box => {
        box.style.pointerEvents = 'auto'
    });
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '') { 
            box.innerHTML = turn.innerHTML; 
            if (turn.innerHTML === 'x') {
                turn.innerHTML = '0'; 
            } else {
                turn.innerHTML = 'x';
            }
            checkWin();

        }
    });
});

button.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerHTML='';
        box.style.backgroundColor="transparent";
        image.style.display="none";
        audio.pause();
        enableBoxes()
    })
})