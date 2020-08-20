const audio = new Audio();
const casesDiv = document.getElementsByClassName('case');
const sounds = document.querySelectorAll("audio");

[...casesDiv].forEach( function(item) {
    item.addEventListener('click', function() {
        const nameAudio = item.querySelector('audio').getAttribute('src');
        //audio.pause();
        audio.src = nameAudio;
        audio.play();
    });
});

document.addEventListener('keydown', function(event) {
    let sound;
    sounds.forEach(audio => {
        if(audio.id === event.key){
            sound = audio;
        }
    })
    sound && sound.play()
});
