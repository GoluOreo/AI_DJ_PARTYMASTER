song1 = '';
song2 = '';

lwx = 0
lwy = 0
rwx = 0
rwy = 0

function preload() {
    song1 = loadSound('duck.mp3');
    song2 = loadSound('spy.mp3');
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model has loaded!");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);

        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;

        funnything = [lwx, lwy, rwx, rwy];

        console.log("Starting in order from Left Wrist X to Left Wrist Y and Right Wrist X to Right Wrist Y" + funnything);
    }
}

function draw() {
    image(video, 0, 0, 600, 600);
}