camera = document.getElementById("camera");

    Webcam.attach(camera);

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="picture" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8N8olMC5l/model.json', modelLoaded);
  
function modelLoaded()
{
    console.log('model has loaded');
}

function check()
{
    img = document.getElementById('picture');
    classifier.classify(img,getResult);

}
function getResult(error, results)
{
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2)*100 + "% Match";
    }
  
}