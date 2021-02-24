nose_x=0;
nose_y=0;

function preload(){
    moustache=loadImage('https://i.postimg.cc/jScj3DMC/7b12ee7981832c8f929b7871ac4372c6.png');
}

function setup() {
    canvas=createCanvas(350, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x-33;
        nose_y=results[0].pose.nose.y-8;
        console.log("Nose x="+nose_x);
        console.log("Nose y="+nose_y);
    }
}

function modelLoaded(){
    console.log("PoseNet is initalized")
}

function draw(){
    image(video, 0, 0, 350, 350);

    image(moustache, nose_x, nose_y, 70, 35);
}

function take_snapshot(){
    save('filter.png');
}