
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    
    let currentIndex = 0;
    let intervalId;
    let isPlaying = true;
    
    // Initialize
    // showSlide(currentIndex);

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') showPrevSlide();
      if (e.key === 'ArrowRight') showNextSlide();
      if (e.key === ' ') togglePlay();
    });
    
    // Functions
    function showSlide(currentIndex) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[currentIndex].classList.add('active');
    }
    
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
    
    function startAutoPlay() {
      intervalId = setInterval(showNextSlide, 3000);
      isPlaying = true;
      pauseBtn.textContent = '⏸';
    }
    
    function pauseAutoPlay() {
      clearInterval(intervalId);
      isPlaying = false;
      pauseBtn.textContent = '▶';
    }
    
    function togglePlay() {
      if(isPlaying == true) {
        pauseAutoPlay();
      } else{
        startAutoPlay();
      }
    }

    startAutoPlay();

    const button = document.querySelector('.fixed-btn');
    window.addEventListener('scroll', function(){
      if (window.scrollY > 350){
        button.classList.add('fixed')
      } else{
        button.classList.remove('fixed');
      }
    });

    let nav = document.querySelector('.nav-list');

    function myFunction(){
      if(nav.style.display === "block"){
        nav.style.display = "none";
      } else {
        nav.style.display = "block";
      }
    }

  let searchButton = document.querySelector('.fa-solid fa-magnifying-glass');
  searchButton.addEventListener('click', search)


    let words = ["Laptop", "Mobile Phone", "Microsoft"];

    function search(){
      let searchDisplay = prompt("Search");
      document.querySelector('.search').innerHTML = (words.indexOf(searchDisplay));
    }

    

