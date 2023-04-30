console.log('welcome to tic tac toe');
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
// function for turn
const changeturn = ()=>{
    return turn === "X"?"0" :"X"
}

// function to check for a win
const checkwin = ()=>
{     
      let boxtext = document.getElementsByClassName('boxtext');
      let wins = [
        [0 ,1, 2,1,3.8,0],
        [3 ,4, 5,1,11.8,0],
        [6 ,7, 8,1,20,0],
        [0 ,3, 6,-7.1,12,90],
        [1 ,4, 7,1,12,90],
        [2 ,5, 8,9,12,90],
        [0 ,4, 8,1,12,45],
        [2 ,4, 6,1,12,315],
      ]
      wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " " +  "won";
                isgameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px";
                document.querySelector(".line").style.width = "22vw";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
      })
}
// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach (element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText == '')
        {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if(!isgameover)
            {

                document.getElementsByClassName("info")[0].innerText = "Turn for" +" "+ turn;
            }
        }
    })
})

// click event for reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for"+" " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "";
}
)