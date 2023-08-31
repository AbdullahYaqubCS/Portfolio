document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function() {
      alert("Your message is being received. Thank you ❤️");
    });
  });