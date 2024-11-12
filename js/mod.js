function checkSubmission() {
    const submissionNumber = document.getElementById('submissionNumber').value;
    if (submissionNumber.length === 6) {
        window.location.href = 'register.html';
    } else {
        alert("Please enter a valid 6-digit submission number provided by BMRC.");
    }
}

function requestSubmission() {
    const instituteName = document.getElementById('instituteName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (instituteName && email && password && confirmPassword) {
        alert("Please check your email to get your submission number.");
        window.location.assign("index.html");
    } else {
        alert("Please fill in all mandatory fields.");
    }
}
