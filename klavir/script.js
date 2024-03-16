function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

document.addEventListener('keydown', playNoteOnKeyPress);

function playNoteOnKeyPress(event) {
    const note = event.key.toLowerCase();
    playSound(note);
    const pianoKey = document.getElementById(note);
    pianoKey.style.backgroundColor = 'lightblue';

    // vracanje originala
    setTimeout(() => {
        pianoKey.style.backgroundColor = '';
    }, 300); 

}