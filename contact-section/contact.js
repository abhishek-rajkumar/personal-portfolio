// EmailJS Init
emailjs.init("vM8QyFgqGw3pm8kpa");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload stop

    emailjs.send("service_mdnj2zq", "template_85ilvk9", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(function(response) {
        alert("Message sent successfully!✅");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message. Try again!❌");
        console.log(error);
    });
});
