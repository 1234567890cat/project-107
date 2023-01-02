function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('INSERT TEACHABLE MACHINE LINK', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}