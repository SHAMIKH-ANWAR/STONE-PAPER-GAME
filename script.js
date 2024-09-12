let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");

let compscore = 0;
let myscore = 0;

let playerscore=document.querySelector("#playerScore");
let computerscore=document.querySelector("#computerScore");

function updatescore(){
    playerscore.textContent=myscore;
    computerscore.textContent=compscore;
}


button1.addEventListener("click", () => {
    let choices = Math.floor(Math.random() * 3); 

        
     if (choices === 2) {
        myscore++;
        
    } else if(choices===1) {
        compscore++;
    }
    updatescore();
});

button2.addEventListener("click", () => {
    let choices = Math.floor(Math.random() * 3); 

      if (choices === 0) {
        myscore++;
        console.log(`${myscore} - You win`);
    } else if(choices===2) {
        compscore++;
        console.log(`${compscore} - You lost`);
    }
    updatescore();
});

button3.addEventListener("click", () => {
    let choices = Math.floor(Math.random() * 3); 

      if (choices === 1) {
        myscore++;
        console.log(`${myscore} - You win`);
    } else if(choices===0) {
        compscore++;
        console.log(`${compscore} - You lost`);
    }
    updatescore();
});


let reset=document.querySelector("#reset");

function resett(){
    reset.addEventListener("click",()=>{
        myscore=0;
        compscore=0;
        updatescore();
    });
}

resett();