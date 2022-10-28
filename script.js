var myCanvas;
var ctx;
var circle;
var myVar;

function updateCanvas()
{
    myCanvas = document.getElementById("canvas");
    ctx = myCanvas.getContext("2d");

    drawGrass();

    mySun = new drawSun(40, -20, myCanvas.height-200);
    mySun.display();

    myVar = setTimeout(makeAnimation, 80);
}
function makeAnimation()
{
    ctx = myCanvas.getContext("2d");
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    drawGrass();
    timeDay3();
    drawHouse();

    animationSun();

    myVar = setTimeout(makeAnimation, 80);
}
//Background setting for the first time of day.
function timeDay1()
{
    ctx.save();
        ctx.beginPath();
            ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
    ctx.closePath();

    ctx.fillStyle = "rgb(0,125,255)";
        ctx.fill();
            ctx.restore();
    drawHouse();
}
//Background setting for the second time of day.
function timeDay2()
{
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
    ctx.closePath();

    ctx.fillStyle = "rgb(0,145,255)";
        ctx.fill();
            ctx.restore();
    drawHouse();
}
//Background setting for the third time of day.
function timeDay3()
{
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
    ctx.closePath();

    ctx.fillStyle = "rgb(0,175,255)";
    ctx.fill();
    ctx.restore();
    drawHouse();
}
//Background setting for the fourth time of day.
function timeDay4()
{
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
    ctx.closePath();

    ctx.fillStyle = "rgb(0,195,255)";
    ctx.fill();
    ctx.restore();
    drawHouse();
}
//Background setting for the fifth time of day.
function timeDay5()
{
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
    ctx.closePath();

    ctx.fillStyle = "rgb(0,135,255)";
    ctx.fill();
    ctx.restore();
    drawHouse();

//Lighting activation.
    //Ground floor Window #1  
    ctx.save();
    ctx.beginPath();
    ctx.rect(485, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Ground floor Window #2
    ctx.save();
    ctx.beginPath();
    ctx.rect(520, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Ground floor Window #3 
    ctx.save();
    ctx.beginPath();
    ctx.rect(655, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Ground floor Window #4
    ctx.save();
    ctx.beginPath();
    ctx.rect(690, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Roof Window #1
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -1, 1, 225, -20);
    ctx.rect(660, 355, 60, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Roof Window #2
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, 1, 1, -295, -20);
    ctx.rect(550, 355, 60, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Roof Window #3
    ctx.save();
    ctx.beginPath();
    ctx.rect(555, 335, 90, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
}
//Background setting for the sixth time of day.
function timeDay6() 
{
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
    ctx.closePath();

    ctx.fillStyle = "rgb(0,95,255)";
    ctx.fill();
    ctx.restore();
    drawHouse();

//Lighting deactivation.
    //Ground floor Window #1 
    ctx.save();
    ctx.beginPath();
    ctx.rect(485, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Ground floor Window #2   
    ctx.save();
    ctx.beginPath();
    ctx.rect(520, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Ground floor Window #3  
    ctx.save();
    ctx.beginPath();
    ctx.rect(655, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Ground floor Window #4  
    ctx.save();
    ctx.beginPath();
    ctx.rect(690, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Roof Window #1
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -1, 1, 225, -20);
    ctx.rect(660, 355, 60, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Roof Window #2
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, 1, 1, -295, -20);
    ctx.rect(550, 355, 60, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
    //Roof Window #3
    ctx.save();
    ctx.beginPath();
    ctx.rect(555, 335, 90, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.restore();
}
//Background setting for the seventh time of day.
    function timeDay7()
{
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, myCanvas.width, myCanvas.height - 50);
        ctx.closePath();

        ctx.fillStyle = "rgb(0,65,255)";
            ctx.fill();
                ctx.restore();
        drawHouse();
}
//Generating a lawn.
function drawGrass()
{
    ctx.save();
         ctx.beginPath();
                ctx.rect(0, myCanvas.height-50, myCanvas.width, 50);
         ctx.closePath();

        ctx.fillStyle = "rgb(0,255,0)";
        ctx.fill();
    ctx.restore();
}
//Creating the shape of the sun.
function drawSun(radius, posX, posY)
{
    this.X = posX;
    this.Y = posY;
    this.R = radius;

    this.display = function () {
        ctx.save();
            ctx.beginPath();
                ctx.arc(this.X, this.Y, this.R, 0, Math.PI * 2, true);
            ctx.closePath();

            ctx.fillStyle = "#FFFF00";
            ctx.fill();
        ctx.restore();        
    }
}
//Generating an animation of the sun in a loop.
function animationSun()
{
    mySun.X += 10;

    if (mySun.X <= 100 && mySun.R <= 100)
    {
        mySun.Y -= 23;
        mySun.R += 3;
        timeDay1();
    }
    else if (mySun.X > 100 && mySun.X <= 200)
    {
        mySun.Y -= 1;
        timeDay2();
    }
    else if (mySun.X > 300 && mySun.X <= 400)
    {
        mySun.Y -= 1;
        timeDay3();
    }
    else if (mySun.X > 400 && mySun.X <= 500)
    {
        mySun.Y -= 1;
        timeDay4();
    }
    else if (mySun.X > 500 && mySun.X <= 600)
    {
        mySun.Y -= 1;
        timeDay5();
    }
    else if (mySun.X > 600 && mySun.X <= 700)
    {
        mySun.Y -= 1;
        timeDay6();
    }
    else if (mySun.X > 700 && mySun.X <= 900)
    {
        mySun.R -= 9;
        mySun.Y -= 9;
        timeDay7();

        if (mySun.R <= 1 && mySun.Y <= 1)
            {
                mySun.X = -20;
                mySun.R = 40;
                mySun.Y = myCanvas.height - 200;
                timeDay1();
            }
    }
    mySun.display();
}

function drawHouse() {
//House
    ctx.save();
    ctx.beginPath();
    ctx.rect(450, 420, 300, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fill();
    ctx.restore();
//Roof
    //Right part #1
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, 1, 1, 15, 0);
    ctx.rect(250, 350, 100, 75);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    ctx.restore();
    //Right part #2
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, 1, 1, 15, 0);
    ctx.rect(250, 290, 100, 75);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    ctx.restore();
    //Left part #1
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -1, 1, 45, 0);
    ctx.rect(790, 350, 100, 75);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    ctx.restore();
    //Left part #2
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -1, 1, 45, 0);
    ctx.rect(790, 290, 100, 75);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    ctx.restore();
    //Center part
    ctx.save();
    ctx.beginPath();
    ctx.rect(500, 335, 200, 90);
    ctx.closePath();

    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    ctx.restore();
//Roof Windows
    //Window frame #1
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -1, 1, 225, -20);
    ctx.rect(650, 350, 70, 40);
    ctx.closePath();

    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fill();
    ctx.restore();
    //Window frame #2
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, 1, 1, -295, -20);
    ctx.rect(550, 350, 70, 40);
    ctx.closePath();

    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fill();
    ctx.restore();
    //Center window frame
    ctx.save();
    ctx.beginPath();
    ctx.rect(555, 330, 100, 40);
    ctx.closePath();

    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fill();
    ctx.restore();
    //Left Glass
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -1, 1, 225, -20);
    ctx.rect(660, 355, 60, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
    //Right Glass
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, 1, 1, -295, -20);
    ctx.rect(550, 355, 60, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
    //Center Glass
    ctx.save();
    ctx.beginPath();
    ctx.rect(555, 335, 90, 30);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
//Front Door
	//Leaf
    ctx.save();
    ctx.beginPath();
    ctx.rect(565, 475, 70, 95);
    ctx.closePath();

    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fill();
    ctx.restore();
	//Frame
    ctx.save();
    ctx.beginPath();
    ctx.rect(570, 480, 60, 90);
    ctx.closePath();

    ctx.fillStyle = "rgb(139,69,19)";
    ctx.fill();
    ctx.restore();
//Tree bough #1
    ctx.save();
    ctx.beginPath();
    ctx.rect(332, 480, 30, 100);
    ctx.closePath();

    ctx.fillStyle = "rgb(139,69,19)";
    ctx.fill();
    ctx.restore();
//Tree bough #2
    ctx.save();
    ctx.beginPath();
    ctx.rect(205, 490, 30, 100);
    ctx.closePath();

    ctx.fillStyle = "rgb(139,69,19)";
    ctx.fill();
    ctx.restore();
//Tree bough #3
    ctx.save();
    ctx.beginPath();
    ctx.rect(83, 470, 30, 100);
    ctx.closePath();

    ctx.fillStyle = "rgb(139,69,19)";
    ctx.fill();
    ctx.restore();
	//The left part of the first tree.
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -.2, 1, 35, 0);
    ctx.rect(357, 330, 45, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The right part of the first tree.
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, .2, 1, 35, 0);
    ctx.rect(225, 330, 50, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The center part of the first tree.
    ctx.save();
    ctx.beginPath();
    ctx.rect(315, 385, 70, 95);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The left part of the second tree.
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -.2, 1, 35, 0);
    ctx.rect(230, 340, 45, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The right part of the second tree.
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, .2, 1, 35, 0);
    ctx.rect(95, 340, 50, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The center part of the second tree.
    ctx.save();
    ctx.beginPath();
    ctx.rect(187, 395, 70, 95);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The left part of the third tree
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, -.2, 1, 35, 0);
    ctx.rect(104, 320, 45, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The right part of the third tree
    ctx.save();
    ctx.beginPath();
    ctx.transform(1, .0, .2, 1, 0, 0);
    ctx.rect(10, 320, 50, 150);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
	//The center part of the third tree.
    ctx.save();
    ctx.beginPath();
    ctx.rect(64, 375, 70, 95);
    ctx.closePath();

    ctx.fillStyle = "rgb(34,139,34)";
    ctx.fill();
    ctx.restore();
//Ground floor Window #1  
	//Frame
    ctx.save();
    ctx.beginPath();
    ctx.rect(650, 450, 70, 70);
    ctx.closePath();

    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fill();
    ctx.restore();
	//Glass #1 
    ctx.save();
    ctx.beginPath();
    ctx.rect(655, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
	//Glass #2  
    ctx.save();
    ctx.beginPath();
    ctx.rect(690, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
//Ground floor Window #2
	//Frame
    ctx.save();
    ctx.beginPath();
    ctx.rect(480, 450, 70, 70);
    ctx.closePath();

    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fill();
    ctx.restore();
	//Glass #1    
    ctx.save();
    ctx.beginPath();
    ctx.rect(485, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
	//Glass #2  
    ctx.save();
    ctx.beginPath();
    ctx.rect(520, 455, 25, 60);
    ctx.closePath();

    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fill();
    ctx.restore();
}