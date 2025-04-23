const vs2Image = document.querySelector('.vs2 img');
const stationAudio = document.getElementById('station-audio');

vs2Image.addEventListener('mouseenter', () => {
  stationAudio.currentTime = 0; 
  stationAudio.play();
});

vs2Image.addEventListener('mouseleave', () => {
  stationAudio.pause();
  stationAudio.currentTime = 0;
});
const vs1 = document.querySelector('.vs1');
const timetableModal = document.getElementById('timetableModal');
const closeTimetable = document.getElementById('closeTimetable');

vs1.addEventListener('click', () => {
  timetableModal.style.display = 'block';
});

closeTimetable.addEventListener('click', () => {
  timetableModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === timetableModal) {
    timetableModal.style.display = 'none';
  }
});
