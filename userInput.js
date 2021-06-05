window.addEventListener("keydown",checkKeyPress,false);

var PX = 20;
var move = 0;
var fall = 0;
var g = 30;
var fallCovid =0;
var gCovid = 15;

    


function checkKeyPress(key){

    if (key.keyCode === 37){//Izquierda
        document.getElementById("player").src = "lynx1.png";
        if(move <= -150){
            move =-150;
        }
        move -= PX;
        document.getElementById("player").style.marginLeft = move;
    }
    else if (key.keyCode === 39){//Derecha
        document.getElementById("player").src = "lynx.png";
        
        if(move >= 1800){
            move =1800;
        }
        move += PX;
        document.getElementById("player").style.marginLeft = move;
    }
   
}

function scoreUser(i){
    var points = parseInt(document.getElementById("points").innerHTML);
    if(i == 0){
        points += 2;
        document.getElementById("points").innerHTML = points;
    }
    else if(i == 1){
        points -= 3;
        document.getElementById("points").innerHTML = points;
    }
    else if(i == 2){
        return parseInt(points);
    }
    else if(i == 3){
        points -= 5;
        document.getElementById("points").innerHTML = points;
    }
    if(points >= 5){
        g =80;
        PX = 100;
    }
    else if(points < 5){
        g = 30;
        PX = 20;
    }
    else if(points >= 20){
        g = 100;
        PX = 120;
    }
    else if(points <20){
        g = 80;
        PX = 100;
    }
}

function startFalling(){

    var mask = document.getElementById("mask");
    var num = Math.random();
    document.getElementById("mask").style.marginTop = fall;
    fall += g;
    if(fall == 950){
        fall =0;
        return 0;
    }
    else if(colision() == 0){
        fall =0;
    }
    if(fall == 0){
        if((num > 0.0) && (num <= .1)){
            mask.style.marginLeft = 100;
        }
        else if((num > .1) && (num <= .2)){
            mask.style.marginLeft = 200;
        }
        else if((num > 0.2) && (num <= .3)){
            mask.style.marginLeft = 400;
        }
        else if((num > 0.3) && (num <= .4)){
            mask.style.marginLeft = 600;
        }
        else if((num > 0.4) && (num <= .5)){
            mask.style.marginLeft = 800;
        }
        else if((num > 0.5) && (num <= .6)){
            mask.style.marginLeft = 1000;
        }
        else if((num > 0.6) && (num <= .7)){
            mask.style.marginLeft = 1200;
        }
        else if((num > 0.7) && (num <= .8)){
            mask.style.marginLeft = 1300;
        }
        else if((num > 0.8) && (num <= .9)){
            mask.style.marginLeft = 1400;
        }
        else if((num > 0.9) && (num <= 1)){
            mask.style.marginLeft = 1500;
        }
    }
}

function startFallingCovid(){

    var covid = document.getElementById("covid");
    var num = Math.random();
    covid.style.marginTop = fallCovid;
    fallCovid += gCovid;
    if(fallCovid == 950){
        fallCovid =0;
        return 0;
    }
    else if(colisionCovid() == 0){
        fallCovid =0;
    }
    if(fallCovid == 0){
        if((num > 0.0) && (num <= .1)){
            covid.style.marginLeft = 100;
        }
        else if((num > .1) && (num <= .2)){
            covid.style.marginLeft = 200;
        }
        else if((num > 0.2) && (num <= .3)){
            covid.style.marginLeft = 400;
        }
        else if((num > 0.3) && (num <= .4)){
            covid.style.marginLeft = 600;
        }
        else if((num > 0.4) && (num <= .5)){
            covid.style.marginLeft = 800;
        }
        else if((num > 0.5) && (num <= .6)){
            covid.style.marginLeft = 1000;
        }
        else if((num > 0.6) && (num <= .7)){
            covid.style.marginLeft = 1200;
        }
        else if((num > 0.7) && (num <= .8)){
            covid.style.marginLeft = 1300;
        }
        else if((num > 0.8) && (num <= .9)){
            covid.style.marginLeft = 1400;
        }
        else if((num > 0.9) && (num <= 1)){
            covid.style.marginLeft = 1500;
        }
    }
}

function colision(){
    
    var mask = document.getElementById("mask");
    var mask_y = parseInt(mask.style.marginTop);
    //console.log(mask_y);
    var mask_x = parseInt(mask.getBoundingClientRect().left);
    var lynx_x = parseInt(document.getElementById("player").style.marginLeft);
    if(((mask_y > 600) && (mask_y<900)) && (((lynx_x) >= mask_x- 180)&&(lynx_x <= (mask_x + 120)))){
        scoreUser(0);
        return 0;
    }
    else if(mask_y >= 950){
        scoreUser(1);
        return 0;
    }
    else{
        return 1;
    }
}
function colisionCovid(){
    
    var covid = document.getElementById("covid");
    var covid_y = parseInt(covid.style.marginTop);
    console.log(covid_y);
    var covid_x = parseInt(covid.getBoundingClientRect().left);
    var lynx_x = parseInt(document.getElementById("player").style.marginLeft);
    if(((covid_y > 550) && (covid_y<900)) && (((lynx_x) >= covid_x- 180)&&(lynx_x <= (covid_x + 120)))){
        scoreUser(3);
        return 0;
    }
    else if(covid_y >= 950){
        
        return 0;
    }
    else{
        return 1;
    }
}

function repeatFall(){
    var statusMask = setInterval(startFalling,100);
    var statusCovid = setInterval(startFallingCovid,100);
    if((statusMask == 0) || (statusCovid == 0)){
        repeatFall();
    }

}
function repeatFallCovid(){
    var status = setInterval(startFallingCovid,100);
    if(status == 0){
        repeatFallCovid();
    }

}
    
    
