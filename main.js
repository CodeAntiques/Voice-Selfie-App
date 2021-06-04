var SpeechRecognition = window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recongntion.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
   if (content=="Take My Selfie") {
       speak()
   }
}
function speak(){
    var synthesizer=window.speechSynthesis
    speakdata="Taking your Selfie in 5 seconds! Get Ready!"
    alert(speakdata);
    var Utterthis=new SpeechSynthesisUtterance(speakdata);
    synthesizer.speak(Utterthis);
    Webcam.attach(camera)
setTimeout(function(){
    takesnapshot();
    save();
}
,5000);
}
camera=document.getElementById("camera")

Webcam.set({
    width:400,
    height:400,
    image_format:'jpeg',
    jpeg_quality:100

})

function takesnapshot(){
Webcam.snap(function(data_uri){
 document.getElementById("output").innerHTML='<img src="'+data_uri+'"  id="selfie">';
});
}

function save(){
   link=document.getElementById("link") 
   img=document.getElementById("selfie").src
   link.href=img;
   link.click();
}