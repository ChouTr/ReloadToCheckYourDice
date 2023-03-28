var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
i=randomNumber1;

document.querySelector(".img1").setAttribute("src","images/dice"+i+".png");

var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
e=randomNumber2;

document.querySelector(".img2").setAttribute("src","images/dice"+e+".png");

if (i>e){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (i<e) {
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if (i===e) {
  document.querySelector("h1").innerHTML="🚩DRAWS🚩";
}
