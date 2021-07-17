function randomNo() {
var rand=Math.random();
rand=(rand*6)+1;
rand=Math.floor(rand);
console.log(rand);
return rand;
}
var randomNumber1=randomNo(); //1-6
 var randomImageSource="images/dice" +randomNumber1+ ".png";//images/dice1.png - images/dice6.png
 document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2=randomNo();//1-6
var randomImageSource2="images/dice"+randomNumber2+".png";//images/dice1.png - images/dice6.png


document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerText="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerText="Draw!";
}
