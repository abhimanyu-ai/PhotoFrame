function preload() {

}
function setup() {
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 100, 100, 440, 280);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 100);
    circle(50, 430, 100);
    circle(590, 50, 100);
    circle(590, 430, 100);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(100, 40, 440, 20);
    rect(100, 420, 440, 20);
    rect(40, 100, 20, 280);
    rect(580, 100, 20, 280);
}
function take_snapshot() {
    save('photo.png');
}