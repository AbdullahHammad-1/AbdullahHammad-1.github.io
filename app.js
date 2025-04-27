const writeupCards = document.querySelectorAll('.writeup-card');
const modal = document.getElementById('writeupModal');
const closeModal = document.querySelector('.close');

// Data for the write-ups
const writeupData = {
    1: {
        title: "Room 1: [Room Name]",
        description: "A brief description of Room 1.",
        steps: [
            "Step 1: Description of the step.",
            "Step 2: Continue the solution.",
        ],
        tools: "Nmap, Burp Suite",
        flag: "[Your Flag Here]",
    },
    // Add more rooms here
};

// Open modal with detailed information
writeupCards.forEach(card => {
    card.addEventListener('click', () => {
        const roomId = card.getAttribute('data-room');
        const writeup = writeupData[roomId];

        modal.querySelector('h2').textContent = writeup.title;
        modal.querySelector('p').textContent = writeup.description;
        modal.querySelector('ol').innerHTML = writeup.steps.map(step => `<li>${step}</li>`).join('');
        modal.querySelector('.modal-content p:nth-child(4)').textContent = `Tools Used: ${writeup.tools}`;
        modal.querySelector('.modal-content p:nth-child(5)').textContent = `Flag: ${writeup.flag}`;

        modal.style.display = "block";
    });
});

// Close modal when 'x' is clicked
