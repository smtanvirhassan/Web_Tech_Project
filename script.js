function sendMessage() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let topicBox = document.getElementById("topic");
    let topic = topicBox.options[topicBox.selectedIndex].text;
    let text = document.getElementById("message").value.trim();
    let output = document.getElementById("massege");

 
    if (name === "" || text === "") {
        output.textContent = "Please enter your name and message.";
        output.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        output.textContent = "Please enter a valid email address.";
        output.style.color = "red";
        return;
    }

  
    output.textContent = "Thank you, " + name + ", for contacting us about \"" + topic + "\". We will connect soon.";
    output.style.color = "green";


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    topicBox.selectedIndex = 0;
    document.getElementById("message").value = "";
}