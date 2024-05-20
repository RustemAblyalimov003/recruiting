document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelectorAll('.rec__questions-accordion-wrapper');
    accordion.forEach((el) => {
        const arrow = el.children[0].children[1];
        el.addEventListener("click", function(e) {
      
          if (this.classList.contains("active")) {
            this.classList.remove("active")
            el.style.backgroundColor = '#f4f5f8'
            arrow.src='images/icons/1-13.svg'
          } else {
            accordion.forEach((child) => {
              child.classList.remove("active")
              child.style.backgroundColor = '#f4f5f8'
              child.children[0].children[1].src='images/icons/1-13.svg'
            })
            this.classList.add("active")
            arrow.src='images/icons/1-14.svg'
            el.style.backgroundColor = '#e4e6ed'
          }
        })
      })

});