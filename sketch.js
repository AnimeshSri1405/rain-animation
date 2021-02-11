var Engine= Matter.engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.body
var engine ,world;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var drops=[];
var ran;
var maxDrops=100;
function preload(){
    thunderImg1=loadImage("1.png")   
    thunderImg1=loadImage("2.png")   
    thunderImg1=loadImage("3.png")   
    thunderImg1=loadImage("4.png")   
     

}

function setup(){
 engine= Engine.create();
 world=engine.world;
umbrella= new Umbrella(200,500);
for(var i =0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,500), random(0,500)))
} 
Engine.run(engine); 
}

function draw(){
    Engine.update(engine);
    background("black")
 ran= Math.round(random(1,4));
 if(frameCount%80===0){
     thunderCreatedFrame= frameCount;
thunder= createSprite(random(10,370), random(10,30),10,10);
switch(ran){
    case 1:thunder.addImage(thunderImg1);
    break;
    case 2:thunder.addImage(thunderImg2);
    break;
    case 3:thunder.addImage(thunderImg3);
    break;
    case 4:thunder.addImage(thunderImg4);
    default:break;
}
thunder.scale=random(0.3,0.6);
 }  
 if(thunderCreatedFrame + 10===frameCount){
     thunder.destroy();
 } 
 umbrella.display();

 for(var i=0;i<maxDrops;i++){
     drops[i].display();
     drops[i].updateY();

 }
 drawSprites();
}   

