const title = document.querySelector('h1')
 const mail = document.querySelector('input')


 mail.addEventListener('input',() => {
  title.innerText  = 'Welcome, '+ mail.value + '!'
 })

 if (mail.value === '') {
  title.innerText = "Hey There! Whats Your Name?"}