var words = ["hover","mouse!","call","her <3","OR","NOT! >:("]

let x = 320
let y = 65
let circleSize = 50

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(152,148,156);
  

  fill(56, 83, 217);
  stroke(116,63,181);
  circle(200,200,100);
  fill(247,12,232);
  stroke(33,216,237);
  circle(150,150,100);
  
  fill(105, 199, 130);
  circle(100,290,80);
  fill(230, 118, 32);
  circle(90,300,80);
  
  fill(240,70,89);
  triangle(140,370,200,265,280,365);
  
  strokeWeight(4);
  line(0,60,295,60);
  line(400,0,335,45);
  
  
  
  

  for(var y = 65;y <= height;y = y + 35){
    noFill();
    strokeWeight(4);
    circle(x,y,circleSize);
  }
  
  
  
  
  if(mouseY > 90){
    fill(33, 216, 237,180);
    circle(150,150,100);
  }
  
  if(mouseY > 270){
    fill(237, 217, 197);
    triangle(140,370,200,265,280,365);
  }
  
  if(mouseY > 160){
    fill(235, 185, 61);
    circle(200,200,100); 
  }
  
  if(mouseY > 270){
    fill(105, 199, 130);
    circle(90,300,80);
  }
  
  fill(247, 12, 232,);
  noStroke();
  textSize(22);
  text(words[2],135,152);
  
  fill(56, 83, 217);
  noStroke();
  textSize(22);
  text(words[3],170,214);
  
  fill(230, 118, 32);
  noStroke();
  textSize(22);
  text(words[4],75,305);
  
  fill(240,70,89);
  noStroke();
  textSize(22);
  text(words[5],163,352);
  
  fill('black');
  stroke(247, 12, 232);
  strokeWeight(2);
  textSize(22);
  text(words[0],50,50);
  
  fill('black');
  stroke(247, 12, 232);
  strokeWeight(2);
  textSize(22);
  text(words[1],120,50);

  mySignature();
}

 function mySignature()
{
  textSize(17);
  strokeWeight(2);
  stroke('black');
  fill(99, 207, 106);
  text('Jared Perez',10,390);
}