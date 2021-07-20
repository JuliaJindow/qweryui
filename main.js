function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yk9pFUTba/model.json', modelLoaded);
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function modelLoaded() {
    console.log("The Model has loaded!");
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result-object-name").innerHTML = results[0].label;
        document.getElementById("result-accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}