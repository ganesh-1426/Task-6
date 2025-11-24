fetch('/api/contact', {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    subject: subjectInput.value.trim(),
    message: messageInput.value.trim()
  })
})
.then(r => r.json())
.then(data => { showStatus(true, 'Message sent'); form.reset(); })
.catch(err => { showStatus(false, 'Send failed — try again later.'); });