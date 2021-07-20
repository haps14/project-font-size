rightWristX=0;
leftWristX=0
difference=0;

function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(560,500);

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor( leftWristX - rightWristX );
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }

}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function draw()
{
    background(' #FF0000');
    document.getElementById("font_size").innerHTML = "The Font size will be = "+ difference +"px";
    textSize(difference);
    text('HAPS', 50, 400);
}
