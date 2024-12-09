const scriptURL = "https://script.google.com/macros/s/AKfycbx5lxgg-p2AuF3PuI8iXLranMQw_R2fnyunkIQ2tcFM6vGQWHjKWnkOEupktqgv5rcdwA/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})