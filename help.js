var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}




function pledge() {
start()
recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content =="I take the oath to stop climate change.") {
        console.log("pledge taken --- ");
        document.getElementById("taken").innerHTML = "You have taken the oath";
    }
}
}

function next() {
    window.location = "end.html";
    console.log("pt4")
}

function prev() {
    window.location = "consequences.html";
    console.log("pt2")
}






