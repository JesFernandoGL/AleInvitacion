activateCounter();
eventsPhotos();
animationsInit();

const timerInterval = setInterval(function() {
    activateCounter();
}, 1000);



function activateCounter(){
    const diffTime = new Date('2025-12-06T00:00:00') - new Date();
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    
    if(`${days}`.length === 1){
        days = `0${days}`
    }
    if(`${hours}`.length === 1){
        hours = `0${hours}`
    }
    if(`${minutes}`.length === 1){
        minutes = `0${minutes}`
    }
    if(`${seconds}`.length === 1){
        seconds = `0${seconds}`
    }
    
    $('.DateInv-Counter-Day').text(days);
    $('.DateInv-Counter-Hrs').text(hours);
    $('.DateInv-Counter-Min').text(minutes);
    $('.DateInv-Counter-Seg ').text(seconds);

    if (diffTime <= 0) {
        clearInterval(timerInterval);
    }
}

function eventsPhotos(){
    $('.Timeline-Memory').click(function(){
        const index = $(this).attr('data-id');
        openModal(index);
    });

    $('.BtnGallery').click(function(){
        openModal(1);
    })

    $('.ModalGallery-CloseBtn').click(function(){
        closeModal();
    });

    function openModal(index){        
        const leftScroll = $(`.ModalGallery-Carrusel img:nth-of-type(${index})`)[0].offsetLeft;
        $('.ModalGallery-Carrusel').scrollLeft(leftScroll);
        setTimeout(function(){
            $('.ModalGalleryWrap').addClass('ModalActive');
        }, 200);
    }

    function closeModal(){
        $('.ModalGalleryWrap').removeClass('ModalActive');
    }
}



function animationsInit(){
    
      title = new WOW(
        {
        boxClass:     'HeaderContent',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      counter = new WOW(
        {
        boxClass:     'DateInv-Counter',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       100,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      imgs = new WOW(
        {
        boxClass:     'InvImgContent-Img',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       100,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      ) 

      title.init();
      counter.init();
      imgs.init();
}