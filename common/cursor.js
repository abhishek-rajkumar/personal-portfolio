// Mouse Cursor

const dot = document.querySelector(".cursor-dot");
const circle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
});


// EmailJS Init
emailjs.init("vM8QyFgqGw3pm8kpa");

document.getElementById("subscribeForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_mdnj2zq", "template_85ilvk9", {
    user_email: document.getElementById("email").value
  })
  .then(() => {
    alert("Email Sent Successfully!✅");
  })
  .catch((err) => {
    console.log(err);
    alert("Failed to send email❌");
  });
});