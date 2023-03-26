function snd_identify() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CZAVT-enz/model.json" , modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("snd_name").innerHTML = 'I can hear: ' + results[0].label;}
document.getElementById("snd_accuracy").innerHTML = 'Accuracy: ' + (results[0].confidence*100).toFixed(2) + " %";
document.getElementById("snd_name").style.color = "rgb("+random_number_r +", "+random_number_g +","+random_number_b+")";
document.getElementById("snd_accuracy").style.color = "rgb("+random_number_r +", "+random_number_g+", "+random_number_b+")";
img = document.getElementById("a1");
img1 = document.getElementById("a2");
img2 = document.getElementById("a3");
img3 = document.getElementById("a4");

if (results[0].label== "bell") {
    img.src= 'aliens-01.gif';
    img1.src= 'aliens-02.png';
    img2.src= 'aliens-03.png';
    img3.src= 'aliens-04.png';
}

else if (results[0].label== "tambourine") {
    img.src= 'aliens-01.png';
    img1.src= 'aliens-02.gif';
    img2.src= 'aliens-03.png';
    img3.src= 'aliens-04.png';
}

else if (results[0].label== "bouncing_ball") {
    img.src= 'aliens-01.png';
    img1.src= 'aliens-02.png';
    img2.src= 'aliens-03.gif';
    img3.src= 'aliens-04.png';
}

else {
    img.src= 'aliens-01.png';
    img1.src= 'aliens-02.png';
    img2.src= 'aliens-03.png';
    img3.src= 'aliens-04.gif';
}
    }
