// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');

  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;

    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // === Volume slider ===
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', (event) => {
    const volume = event.target.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // === Play Sound button ===
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();

  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}