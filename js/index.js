const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_78pr3rd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      Swal.fire({
        icon: 'success',
        title: 'Email sent successfully',
      })

    }, (err) => {
      btn.value = 'Send';
      Swal.fire({
        icon: 'error',
        title: 'Plese complete the form ',
      })
    });
});

const nav = document.querySelector("#nav-list")
const open = document.querySelector("#open")
const close = document.querySelector("#close")
open.addEventListener('click',()=>{
  nav.classList.add('visibility')
})

close.addEventListener('click',()=>{
  nav.classList.remove('visibility')
})