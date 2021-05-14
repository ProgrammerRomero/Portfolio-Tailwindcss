
// Listen for a Submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  // saveContactInfo(name, email, message);

  document.querySelector(".contact-form").requestFullscreen();

  sendEmail(name, email, message);
}

// Send Email to me
function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'julianchorom@gmail.com',
    Password: "zsrjweidodcpilmv",
    To: 'julianchorom@gmail.com',
    From: 'julianchorom@gmail.com',
    Subject: `FROM HERO WEBSITE sent you a message (IMPORTANT)`,
    Body: `Name: ${name} <br/> Email ${email} <br/> Message: ${message}`,
  }).then((message) => alert("mail send successfully"))
}

document.querySelector(".button").addEventListener("click", trigger);

function trigger() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name);
  console.log(email);
  console.log(message);
  console.log("Hola amigo");
  // alert("mate")
}