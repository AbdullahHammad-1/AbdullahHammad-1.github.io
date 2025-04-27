// JavaScript for handling the modal
const writeupItems = document.querySelectorAll('.writeup');
const modal = document.getElementById('writeupModal');
const closeModal = document.querySelector('.close');

// Sample data for write-ups
const writeupData = {
    1: {
        title: "Room 1: [Room Name]",
        description: "Full description of the challenge.",
        steps: [
            "Step 1: Describe the steps...",
            "Step 2: Continue your solution...",
            "Step 3: Finally..."
        ],
        tools: "Nmap, Burp Suite",
        flag: "[Your Flag Here]",
    },
    2: {
        title: "Room 2: [Room Name]",
        description: "Full description of the challenge.",
        steps: [
            "Step 1: Describe the steps...",
            "Step 2: Continue your solution...",
            "Step 3: Finally..."
        ],
        tools: "Metasploit, Gobuster",
        flag: "[Your Flag Here]",
    },
    // Add more rooms here...
};

// Open modal when write-up is clicked
writeupItems.forEach(item => {
    item.addEventListener('click', () => {
        const roomId = item.getAttribute('data-room');
        const writeup = writeupData[roomId];

        // Populate the modal with the data
        modal.querySelector('h2').textContent = writeup.title;
        modal.querySelector('p').textContent = writeup.description;
        modal.querySelector('ol').innerHTML = writeup.steps.map(step => `<li>${step}</li>`).join('');
        modal.querySelector('.modal-content p:nth-child(4)').textContent = `Tools Used: ${writeup.tools}`;
        modal.querySelector('.modal-content p:nth-child(5)').textContent = `Flag: ${writeup.flag}`;

        // Display the modal
        modal.style.display = "block";
    });
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
