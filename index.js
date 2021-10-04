let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
// let player = {
//   name:"Johny",
//   chips: 200
// }
// let playerEl=document.getElementById("player-el")
// playerEl.textContent=player.name+": $"+player.chips
function getRandomCard()
{
 if(Math.floor(Math.random()*13+1) === 1)
 return 11;
 else if(Math.floor(Math.random()*13+1) > 10)
 return 10;
 else
 return(Math.floor(Math.random()*13+1))

}
function start(){
  isAlive=true
  let firstCard=getRandomCard()
  let secondCard=getRandomCard()
  cards=[firstCard,secondCard]
  sum=firstCard+secondCard
  rendergame()
}

function rendergame() {
  cardsEl.textContent="Cards: " 
  for(let i=0;i<cards.length;i++)
  {
    cardsEl.textContent+=cards[i]+ " "
  }
  sumEl.textContent="Sum: "+sum
  if(sum < 21)
{
  message="Do you want to draw another card?"
  hasBlackJack=false
  
}
else if(sum === 21)
{
  message="Congratulations!!! Its BLACKJACK!!"
  hasBlackJack=true
}
else
{
  message="you loose"
isAlive=false
}
messageEl.textContent=message
}
function newCard(){
 if(isAlive === true && hasBlackJack==false)
 {
   let newcard=getRandomCard()
  cards.push(newcard)
  sum+=newcard
  rendergame()
 }
}

