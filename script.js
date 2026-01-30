function openCalculator() {
    document.getElementById("calcModal").style.display = "flex";
}

function closeCalculator() {
    document.getElementById("calcModal").style.display = "none";
}


function toggleContact() {
    const contactBox = document.getElementById("contactBox");

    if (contactBox.style.display === "block") {
        contactBox.style.display = "none";
    } else {
        contactBox.style.display = "block";
    }
}

function toggleCertificates() {
    const certSection = document.getElementById("certificates");

    if (certSection.style.display === "block") {
        certSection.style.display = "none";
    } else {
        certSection.style.display = "block";
        certSection.scrollIntoView({ behavior: "smooth" });
    }
}

function openModal(img) {
    document.getElementById("imgModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

function toggleResume() {
    const resumeSection = document.getElementById("resume");
    const certSection = document.getElementById("certificates");

    // Hide certificates if open
    certSection.style.display = "none";

    // Toggle resume
    if (resumeSection.style.display === "block") {
        resumeSection.style.display = "none";
    } else {
        resumeSection.style.display = "block";
        resumeSection.scrollIntoView({ behavior: "smooth" });
    }
}
