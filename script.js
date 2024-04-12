 let userscore=0;
 let computerscore=0;

 const choices=document.querySelectorAll(".choice");

 const msg=document.querySelector("#msg");
 const userscorePara=document.querySelector("#user-score")
 const compscorePara=document.querySelector("#computer-score")

 const getcompchoice=() =>{
     const options=["rock",'Paper','scissors']
     const randomIdx=Math.floor(Math.random()*3)
    return options[randomIdx]
 }

 const drawGame= () =>{
     msg.innerText="Game Was Draw ,Play Again !"
     msg.style.backgroundColor = "#081b31";
 }

 const showwinner =(userwin,userchoice,compchoice) =>{
     if(userwin){
         userscore++;
        userscorePara.innerText=userscore;
         msg.innerText=`You Win ! Your ${userchoice} beats ${compchoice}`;
           msg.style.backgroundColor = "green";

     } else{
         computerscore++;
         compscorePara.innerText=computerscore;
         msg.innerText=`You Lost ?  ${compchoice} beats Your ${userchoice}`;
           msg.style.backgroundColor = "red";     }
 }
 const playGame=(userchoice) =>{
     console.log("user choice = ",userchoice)
     //Generate computer choice
     const compchoice=getcompchoice();
     console.log("compchoice =",compchoice)
     if(userchoice===compchoice){
         //Draw Game
         drawGame();
     } else{
         let userwin= true;
     if(userchoice==="rock"){
         //scissors,paper
         userwin=compchoice==="paper"?false:true;
         }
     else if(userchoice="paper"){
            userwin=compchoice==="scissors" ? false:true;
     } else{
             userwin=compchoice==="rock" ? false:true;
         }
     showwinner(userwin,userchoice,compchoice)    
     }
 }
 choices.forEach((choice ) =>{
    
    choice.addEventListener("click",() =>{
         const userchoice=choice.getAttribute('id')
         playGame(userchoice)
     })
 })


