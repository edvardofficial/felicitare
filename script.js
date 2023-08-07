function submitForm() {
    var password = document.querySelector('.password').value;
    if (password == 'I love you') {
      alert("I love you tooo❤️")
      window.location.href = "./page/page.html";
    } else {
      alert('Parola nu este corecta');
    }
}
