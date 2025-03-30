// Open the booking form and set the doctor's name
function openBookingForm(doctorName) {
    document.getElementById("booking-form").style.display = "flex"; 
    document.getElementById("doctor-name").value = doctorName;
}

// Close the booking form
function closeBookingForm() {
    document.getElementById("booking-form").style.display = "none";
}

// Handle Appointment Form Submission
const appointmentForm = document.getElementById("appointment-form");
if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let doctor = document.getElementById("doctor-name").value;
        let patientName = document.getElementById("patient-name").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;

        if (patientName && email && date) {
            alert(`✅ Appointment booked with ${doctor} on ${date}!`);
            closeBookingForm();
            appointmentForm.reset(); // Clear form fields after submission
        } else {
            alert("⚠️ Please fill all fields.");
        }
    });
}

// ======================== REGISTRATION ========================
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let regEmail = document.getElementById("reg-email").value.trim();
            let regPassword = document.getElementById("reg-password").value.trim();

            if (regEmail && regPassword) {
                localStorage.setItem("userEmail", regEmail);
                localStorage.setItem("userPassword", regPassword);
                alert("✅ Registered successfully! Please log in.");
                window.location.href = "login.html"; // Redirect to login page
            } else {
                alert("⚠️ Please enter both email and password.");
            }
        });
    }

    // ======================== LOGIN ========================
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let loginEmail = document.getElementById("login-email").value.trim();
            let loginPassword = document.getElementById("login-password").value.trim();

            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");

            if (!storedEmail || !storedPassword) {
                alert("❌ No account found. Please register first.");
                return;
            }

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert("✅ Logged in successfully!");
                window.location.href = "index.html"; // Redirect to home page
            } else {
                alert("❌ Incorrect email or password.");
            }
        });
    }
});
