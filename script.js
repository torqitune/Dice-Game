document.addEventListener("DOMContentLoaded",function(){ 


var random_num = Math.floor( 6*(Math.random())+1);          //random function will generate a no. betweeen 0 and 1 and it will be float no., so multiply by 6 will give no. from 1 to 5 but not 6 , so added 1 to give no. between 1 to 6, also did floor to make the no. to nearest integer type.

//changing images for dice-1
if(random_num == 1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(random_num == 2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(random_num == 3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(random_num == 4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(random_num == 5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

var random_num2 = Math.floor( 6*(Math.random())+1);          //random function will generate a no. betweeen 0 and 1 and it will be float no., so multiply by 6 will give no. from 1 to 5 but not 6 , so added 1 to give no. between 1 to 6, also did floor to make the no. to nearest integer type.

//changing images for dice-2
if(random_num2== 1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(random_num2== 2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(random_num2== 3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(random_num2== 4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(random_num2== 5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}


//whichever the greater value wins and we then change the text of h1 tag with corresponding result.
if(random_num > random_num2){
    document.querySelector(".result").innerHTML = "Player-1 Wins";
}
else if(random_num < random_num2){
    document.querySelector(".result").innerHTML = "Player-2 Wins";
}
else{
    document.querySelector(".result").innerHTML = "OOPS! It's a DRAW.";
}

});