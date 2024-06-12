document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.querySelector('.modal-overlay');
    var btn =  document.querySelector('.solutions-button');
    var btnFooter =  document.querySelector('.footer-subscribe-button');
    var btnCloseModal = document.querySelector('.form-exit-decor');
    btn.addEventListener('click',function(e){
        e.preventDefault();
        footerContainer.classList.toggle('active');
    });
    btnFooter.addEventListener('click',function(e){
        e.preventDefault();
        footerContainer.classList.toggle('active');
    });
    btnCloseModal.addEventListener('click',function(e){
        e.preventDefault();
        footerContainer.classList.toggle('active');
    });
}); 