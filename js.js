$( document ).ready(function() {
    

activateCounter();
eventsPhotos();
animationsInit();
musicPlayer();

let randomMusic = Math.floor(Math.random() * 2);

let timerInterval = '';

timerInterval = setInterval(function() {
    activateCounter();
    const diffTime = new Date('2025-12-06T00:00:00') - new Date();
    if(diffTime <= 0){
        clearInterval(timerInterval);
    }
}, 1000);



function activateCounter(){
    const diffTime = new Date('2025-12-06T00:00:00') - new Date();
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);    

    if (diffTime <= 0 && days >= -1) {
        $('main').addClass('DayInvite');        
        $('.DateInv-Counter-Title').text('¡Es Hoy!');
        
    }else{
        
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
    }

    if (days <= -2) {
        $('main').addClass('NextDayInvite');
        $('.DateInv-Counter-Title').text('Gracias por compartir este día conmigo');        
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

    $('.InvImgContent-Img').click(function(){
        animationImg(this);
    });
    
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
        offset:       200,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      imgs = new WOW(
        {
        boxClass:     'InvImgContent-Img',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       300,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      ) 

      title.init();
      counter.init();
      imgs.init();


      function animationImg(el){
        el.classList.add('animate__shakeX');
        setTimeout(function(){
            el.classList.remove('animate__shakeX');
        }, 2000)
      }
}

function musicPlayer(){
    $('.BtnMusicRep').click(function(){
        if($('.MusicActive').length === 0){
            $('.BtnMusicWrapp').addClass('MusicActive');
            document.querySelector('.ActiveMusicTrack').play();
        }else{
            $('.BtnMusicWrapp').removeClass('MusicActive');
            document.querySelector('.ActiveMusicTrack').pause();
        }
    })

    $('.BtnMusicWrapp-ControlNext').click(function(){
        document.querySelector('.ActiveMusicTrack').pause();
        const id = Number($('.ActiveMusicTrack').attr('data-id'));
        $('.AudioMusic').removeClass('ActiveMusicTrack')
        if(id < 3 || (randomMusic === 0 && id < $('.AudioMusic').length )){
            $(`.AudioMusic:nth-of-type(${id + 1})`).addClass('ActiveMusicTrack');
            $(`.AudioMusic:nth-of-type(${id + 1})`)[0].play();            
        }else{
            $(`.AudioMusic:nth-of-type(1)`).addClass('ActiveMusicTrack');
            $(`.AudioMusic:nth-of-type(1)`)[0].play();            
        }

        
    })
    
}


});