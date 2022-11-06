function preload(){

}


function setup(){
    canvas = createCanvas(550,500);
    canvas.position(530,270);
    video = createCapture(VIDEO);
    video.hide();
    poseNet =  ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}


function draw(){
    image(video,0,0,550,500);
}

function modeloaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){ 
    if(results.length > 0){
        console.log(results);
        console.log('nose x =' + results[0].pose.nose.x);
        console.log('nose y =' + results[0].pose.nose.y);
    }
}

function takeSnapshot(){
    save("my_filterImage_of_mustache.png");
}