let AmtClass = ['archer', 'assassin', 'barbarian', 'monk', 'scout', 'warrior', 'bard', 'druid', 'healer', 'wizard', 'antiPaladin', 'monster', 'paladin'];
let Credit = {archer: 1, assassin: 2, barbarian: 3, monk: 4, scout: 5, warrior: 6, bard: 7, druid: 8, healer: 9, wizard: 10, antiPaladin: 11, monster: 12, paladin: 13}
let ClassTar= '';

function Update(){
    let newValue = prompt('how many credits do you have?')
    Credit[ClassTar] = newValue;
    levellingMatrix(newValue);
}
///////////////////////Shield Size Calculator
//function ShieldCalc (){
//var x = prompt("what is the width of your shield?");
//var type = prompt("what type of shield do you use? round, square, or heater?");
//var ShieldSize;
//function Shield (x, type){
//    let small = 432;
//    let medium = 720
//    let large = 1152;
//    let size;
//    let category;
//    if (type == "round"){ size = ((x)/2)*((x)/2)*3.14;}
//    else if (type == "square"){size = x * x;}
//    else if (type == "heater"){size = 8.523*((x/3)*(x/3));}
//    else {size = undefined;}
//    if (size <= 432) {category= "small";}
//    else if (size > 432 && size <= 720 ){category = "medium";}
//    else if (size > 720 && size <= 1152){category = "large"}
//    else if (size > 1153){category = "too big"}
//    else if (size == undefined){category = "Sorry, I can't calculate that"}
//    return category;};
//ShieldSize = Shield (x, type);
//alert(ShieldSize); return category}
/////////////////  Main page 
////////////////class selection
function jobOverview(){
    let job = document.getElementById('Jobs');
    job = job.value;
    job = AmtClass[job];
    ClassTar = job;
    let card = document.getElementById('AndyPic');
    card.innerHTML = ""
    let andy = document.createElement('img');
    andy.src = "IMG/amtgard-andy/" + job + ".jpg";
    andy.alt = "Andy portrays" + job;
    card.appendChild(andy);
    andy.addEventListener('click', classDive);
    let figcaption = document.createElement('figcaption');
    figcaption.textContent = "Click on Andy for specifics on the class";
    card.appendChild(figcaption);
    let level = document.getElementById('credits');
    let credits = Credit[job];
    levellingMatrix(credits);
    level.textContent = credits;
}

function levellingMatrix(job){
    let xp = {"level":0, "next":0, "tilNext":0};
    if (job > 0 && job < 5 ){xp.level = 1; xp.next=2; xp.tilNext= 5 - job;}
    else if (job >= 5 && job < 12){xp.level = 2; xp.next=3; xp.tilNext= 12 - job;}
    else if (job >= 12 && job < 21){xp.level = 3; xp.next=4; xp.tilNext= 21 - job;}
    else if (job >= 21 && job < 34 ){xp.level = 4; xp.next=5; xp.tilNext= 34 - job;}
    else if (job >= 34 && job < 53){xp.level = 5; xp.next=6; xp.tilNext= 53 - job;}
    else if (job >= 53) {xp.level = 6; xp.next="Silver Trim!"; xp.tilNext=" Mastery of the class ;)"}
    else {};
    let table = document.getElementById('Credit-Data')
    table.innerHTML= '';
    let one = document.createElement('li');
    one.textContent = "Level";
    table.appendChild(one);
    let two = document.createElement('li');
    two.textContent = "Credits";
    table.appendChild(two);
    let three = document.createElement('li');
    three.textContent = "Till Next";
    table.appendChild(three);
    let level = document.createElement('li');
    level.id = "level";
    level.textContent = xp.level;
    table.appendChild(level);
    let credit = document.createElement('li');
    credit.id = "credits";
    credit.textContent = job;
    credit.addEventListener('click', Update);
    table.appendChild(credit);
    let next = document.createElement('li');
    next.id = "next";
    next.textContent = xp.tilNext;
    table.appendChild(next);
};
function classDive (){
    let past = document.getElementById('active');
    past.id = '';
    let present = document.getElementsByClassName('Class-Specifics');
    present.id = "active";
}
/////////////////// Class specifics page
function abilityLevel(){
    let level = document.getElementById("abilityLevel");
    level = level.value;
    alert(ClassTar);
}



//document.addEventListener('DOMContentLoaded', init);