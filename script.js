let turn=`X`
let champ=document.getElementsByClassName(`champ`)[0]
let img=document.getElementsByTagName(`img`)[0]
let gameover=false
let button=document.getElementById(`btn`)


//for turn change
const changeTurn=()=>{
return turn ===`X`?`0`:`X`
}

//check win
const checkWin=()=>{
let inBox=document.getElementsByClassName(`boxText`)
// console.log(inBox[0])
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
win.forEach((e)=>{
    if((inBox[e[0]].innerText===inBox[e[1]].innerText)&&(inBox[e[0]].innerText===inBox[e[2]].innerText)&&(inBox[e[0]].innerText!==``)){
        gameover=true 
        let winner=document.createElement(`h1`)
        winner.innerText=`Congratulations! ${inBox[e[0]].innerText} - You are Winner`
        champ.appendChild(winner)
        winner.style.color=`red`
        img.style.width=`200px`
        winner.setAttribute(`class`,`winner`)

    }
})
}

// gamelogic

let boxes=document.getElementsByClassName(`box`)
boxes=Array.from(boxes)
boxes.forEach((element)=>{
    let boxtext=element.querySelector(`.boxText`)
    element.addEventListener(`click`,()=>{
        if(boxtext.innerText===``){
            boxtext.innerText=turn 
            turn=changeTurn()
        }
        checkWin()
        if(!gameover){

            document.getElementsByClassName(`info`)[0].firstElementChild.innerText=`Turn for `+turn
        }
    })
})
let reset=()=>{
    let boxtext=document.querySelectorAll(`.boxText`)
    Array.from(boxtext).forEach((e)=>{
        e.innerText=``
        let turn =`X`
        gameover=false
        document.getElementsByClassName(`info`)[0].firstElementChild.innerText=`Turn for `+turn
        img.style.width=`0px`
        let winner=document.getElementsByClassName(`winner`)
      for(let t of winner){
        t.innerText=``
      }

    })
}
btn.addEventListener(`click`, reset)
