let Composites=Matter.Composites,
    Bodies=Matter.Bodies,
    Engine=Matter.Engine,
    World=Matter.World,
    Render=Matter.Render
    Constraint=Matter.Constraint;
let engine,world,render;
let group = Matter.Body.nextGroup(true);
function setup(){
    engine=Engine.create();
    world=engine.world;
    render=Render.create({element:document.body,engine:engine});
    let plank=Bodies.rectangle(200,351,300,15,{restitution:0.2});
    //let csaw=Bodies.rectangle(200,351,20,50,{isStatic:true});
    let ball=Bodies.circle(100,0,50,{density:0.7});
    let bullet=Bodies.circle(330,200,10);
    let ground=Matter.Bodies.rectangle(200,400,500,50,{isStatic:true});
    let constraint1=Constraint.create({bodyA:plank,pointB:{x:ground.position.x-30,y:ground.position.y},length:65,stiffness:1})
    
    let constraint2=Constraint.create({bodyA:plank,pointB:{x:ground.position.x+30,y:ground.position.y},length:65,stiffness:1})
    World.add(world,[constraint1,constraint2,ball,bullet,plank,ground,
                Bodies.rectangle(210,100,15,50,{isStatic:true}),Bodies.rectangle(235,132.5,50,15,{isStatic:true}),Bodies.rectangle(260,100,15,50,{isStatic:true})]);
    Engine.run(engine);
    Render.run(render);
}
function draw(){
    background(118);
}