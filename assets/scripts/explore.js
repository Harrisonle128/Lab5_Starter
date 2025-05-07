// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImg = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ''; // clear existing options

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  // Some browsers load voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[voiceSelect.value];

    // Face changes when speaking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}