function submitForm() {
    var password = document.querySelector('.password').value;
    if (password == 'iloveyou') {
      window.location.href = "./page/page.html";
    } else {
      alert('Parola nu este corecta');
    }
}
