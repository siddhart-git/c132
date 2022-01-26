status =""
function  preload()
{
    img = loadImage("fruits.jpg")
}
function setup(){
    canvas = createCanvas(640, 450);
    canvas.center();
}
function draw()
{
    image(img, 0, 0, 640, 450);
}