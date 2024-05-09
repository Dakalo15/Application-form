document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("forms").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const ID = document.getElementById('ID').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const full_names = document.getElementById('full_names').value;
        const next_of_kin_ID = document.getElementById('next_of_kin_ID').value;
        const address = document.getElementById('address').value;
        const uploadedDocument = document.getElementById('document').files[0];
        let formData = new FormData();
        formData.append("name", name);
        formData.append("title", title);
        formData.append("ID", ID);
        formData.append("gender", gender);
        formData.append("email", email);
        formData.append("full_names", full_names);
        formData.append("next_of_kin_ID", next_of_kin_ID);
        formData.append("address", address);
        formData.append("document", uploadedDocument);

        // Calculate and display average
        const marks = document.getElementById("marks").value;
        let message = '';
        if (marks >= 90) {
            message = "You qualify for our program";
            alert("Form submitted sucessfully");
        } else {
            message = "You don't qualify";
        }
        document.getElementById("displayAverage").textContent = "Message: " + message;

        // You can send the form data to your server endpoint here using AJAX
        // let xhr = new XMLHttpRequest();
        // xhr.open("POST", "your_server_endpoint");
        // xhr.send(formData);

        // Alert should be moved after the AJAX request if you're using it
        // alert("Form submitted successfully!");
    });
});
