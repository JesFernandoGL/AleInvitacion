activateCounter();
eventsPhotos();

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
        openModal(this);
    });

    $('.ModalGallery-CloseBtn').click(function(){
        closeModal();
    });

    function openModal(el){
        const index = $(el).attr('data-id');
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