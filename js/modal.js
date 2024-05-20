document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("rec__modal-form")
    const close = document.getElementsByClassName("rec__modal-form-close")[0]
    
    const openModal = (ev) => {
        ev.preventDefault()
        if(!modal.classList.contains('show')){
            modal.classList.add('show')
        }else{
            modal.classList.remove('show')
        }
    }
    
    const closeModalOnBtn = () => {
        const superToggle = function(modal, show, hide) {
            modal.classList.toggle(show);
            modal.classList.toggle(hide);
        }
          
        superToggle(modal,'show', 'hide');
    
        setTimeout(function(){
            modal.classList.remove('hide');
          }, 400);
    }
    
    const closeModalOnSpace = (ev) => {
        if (ev.target === modal) {
        
            const superToggle = function(modal, show, hide) {
                modal.classList.toggle(show);
                modal.classList.toggle(hide);
            }
              
            superToggle(modal,'show', 'hide');
          
            setTimeout(function(){
                modal.classList.remove('hide');
            }, 400);
          }
    }
    
    document.getElementById("rec__banner-btn").onclick = (ev) => openModal(ev)
    document.getElementById("rec__become-specialist-btn").onclick = (ev) => openModal(ev)
    document.getElementById("rec__location-btn").onclick = (ev) => openModal(ev)
    document.getElementById("rec__other-swiper-btn1").onclick = (ev) => openModal(ev)
    document.getElementById("rec__other-swiper-btn2").onclick = (ev) => openModal(ev)
    document.getElementById("rec__other-swiper-btn3").onclick = (ev) => openModal(ev)
    document.getElementById("rec__reviews-btn").onclick = (ev) => openModal(ev)
    document.getElementById("rec__learning-btn").onclick = (ev) => openModal(ev)
    close.onclick = () => closeModalOnBtn()
    modal.onclick = (ev) => closeModalOnSpace(ev)
    
});
