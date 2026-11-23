function submitFeedback() {
    let feedback = document.getElementById("feedback").value.trim();
    let location = document.getElementById("location").value.trim();
    let output = document.getElementById("feedback-message");

    if (feedback === "") {
        output.innerHTML = "Please write your feedback.";
        output.style.color = "red";
        return;
    }

    if (location === "") {
        output.innerHTML = "Please enter your location.";
        output.style.color = "red";
        return;
    }

    output.innerHTML = "Thank you for your feedback from " + location + "!";
    output.style.color = "green";

    document.getElementById("feedback").value = "";
    document.getElementById("location").value = "";
}
function sendMessage() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let topicBox = document.getElementById("topic");
    let topic = topicBox.value;
    let text = document.getElementById("message").value.trim();
    let output = document.getElementById("massege");

 
    if (name === "" || text === "") {
        output.innerHTML = "Please enter your name and message.";
        output.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        output.innerHTML = "Please enter a valid email address.";
        output.style.color = "red";
        return;
    }
    if (topic === "select") {
    output.innerHTML = "Please select a topic.";
    output.style.color = "red";
    return;
}

  
    output.innerHTML = "Thank you, " + name + ", for contacting us about \"" + topic + "\". We will connect soon.";
    output.style.color = "green";


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    topicBox.value = "select";
    document.getElementById("message").value = "";
}