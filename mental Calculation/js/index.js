window.addEventListener('load',init)
let stage;
let couleur = "yellow"

function init(){
    let canvas = document.querySelector('.myCanvas');
    stage = new createjs.Stage(canvas);

    createCircle(200, 150, 30, "crimson")  
    createCircle(300, 200, 70, "green")  
    createCircle(80, 300, 35, couleur)  
    
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", () => {
        stage.update()
    })
}
function createCircle(myX, myY, myRadius, myColor){
    let circle = new createjs.Shape();
    circle.graphics.beginFill(myColor).drawCircle(0,0,myRadius);
    circle.x = myX;
    circle.y = myY;
    circle.myName = 'cercle de couleur' + myColor;

    circle.addEventListener('click', (event) => {
        console.log(event.currentTarget.myName);
        
    })
    stage.addChild(circle);

}