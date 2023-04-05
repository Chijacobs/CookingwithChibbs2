
const contactForm = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');
const msg = document.querySelector('.msg');

contactForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value=== '' || emailInput.value=== '' || phoneInput.value=== '' || messageInput.value=== '') {
       msg.classList.add('error');
       msg.innerHTML = 'Please enter fields';

       setTimeout(() => msg.remove(), 2000);
    }else {
        msg.classList.add('submitted');
        msg.innerHTML = 'Thank you';
        console.log('submitted');

        setTimeout(() => msg.remove(), 2000);
    }}