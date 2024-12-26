//Change background videos
function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');
  
    bgVideoList.forEach(video => {
      video.classList.remove('active');
      if (video.classList.contains(name)) {
        video.classList.add('active');
      }
    });
  
    trailers.forEach(video => {
      video.classList.remove('active');
      if (video.classList.contains(name)) {
        video.classList.add('active');
      }
    });
  
    models.forEach(model => {
      model.classList.remove('active');
      if (model.classList.contains(name)) {
        model.classList.add('active');
      }
    });
  }
  
  // toggle navigation menu
  function toggleMenu() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
  }
  
  // handle paly/pause background video
  function toggleplay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
  }
  
  // Pause Videos
  function pauseVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const screenVideos = document.querySelectorAll('.screen-video');
    bgVideoList.forEach(video => {
      video.pause();
    });
    screenVideos.forEach(video => {
      video.style.opacity = '0';
      video.style.visibility = 'hidden';
    });
    toggleplay();
  }
  
  // Play Videos
  function playVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const screenVideos = document.querySelectorAll('.screen-video');
    bgVideoList.forEach(video => {
      video.play();
    });
    screenVideos.forEach(video => {
      video.style.opacity = '1';
      video.style.visibility = 'visible';
    });
    toggleplay();
  }
  
  