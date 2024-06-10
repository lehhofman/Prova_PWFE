document.addEventListener('DOMContentLoaded', function() {
  const playlist = document.getElementById('playlist');
  const audioPlayer = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSongImage = document.getElementById('currentSongImage');
  const currentSongTitle = document.getElementById('currentSongTitle');

  let currentSongIndex = 0;
  const songs = [
      { name: 'Paradiese', src: '../music/cold1.mp3', img: '../music/img/cold1.jpg' },
      { name: 'Céu Azul', src: '../music/char1.mp3', img: '../music/img/char1.jpg' },
      { name: 'Alive', src: '../music/alok3.mp3', img: '../music/img/alok3.jpg' }
  ];

  // Initial song
  audioPlayer.src = songs[currentSongIndex].src;
  currentSongImage.src = songs[currentSongIndex].img;
  currentSongTitle.textContent = songs[currentSongIndex].name;

  playBtn.addEventListener('click', function() {
      if (audioPlayer.paused) {
          audioPlayer.play();
          playBtn.textContent = 'Pause';
      } else {
          audioPlayer.pause();
          playBtn.textContent = 'Play';
      }
  });

  prevBtn.addEventListener('click', function() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      audioPlayer.src = songs[currentSongIndex].src;
      audioPlayer.play();
      playBtn.textContent = 'Pause';
      updateSongInfo();
  });

  nextBtn.addEventListener('click', function() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      audioPlayer.src = songs[currentSongIndex].src;
      audioPlayer.play();
      playBtn.textContent = 'Pause';
      updateSongInfo();
  });

  function updateSongInfo() {
      currentSongImage.src = songs[currentSongIndex].img;
      currentSongTitle.textContent = songs[currentSongIndex].name;
  }

  // Update UI when audio player state changes (e.g., when song ends)
  audioPlayer.addEventListener('ended', function() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      audioPlayer.src = songs[currentSongIndex].src;
      audioPlayer.play();
      updateSongInfo();
  });
});
