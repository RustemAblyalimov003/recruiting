
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("rec__modal-form-form")
    const formInputs = document.querySelectorAll(".rec__modal-form-form-input")
    const inputName = document.getElementById("rec__modal-form-form-input-name")
    const inputPhone = document.getElementById("rec__modal-form-form-input-phone")
    const modal1 = document.getElementById("rec__modal-form")

    if (form) {
        const submitForm = (ev) => {
            ev.preventDefault()
        
            const nameValue = inputName.value
            const phoneValue = inputPhone.value
            const errorValidation = Array.from(formInputs).filter(input => input.value === '')
        
            formInputs.forEach(input => {
                if (input.value === '') input.classList.add("errorValidation")
                else input.classList.remove("errorValidation")
            })
        
            if (errorValidation.length !== 0) return false
        
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: nameValue,
                    phone: phoneValue,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(() => alert("Ваша заявка успешно отправлена! В ближайшее время ожидайте звонка от нас"))
                .then(()=> form.reset())
                .then(()=> {
                    const superToggle = function(modal, show, hide) {
                    modal.classList.toggle(show);
                    modal.classList.toggle(hide);
                    }
                    superToggle(modal1,'show', 'hide');
                    setTimeout(function(){
                        modal1.classList.remove('hide');
                    }, 400);
                    })
                
        }
        form.onsubmit = function (event) {   
            submitForm(event)
        }
    }

})
