document.addEventListener("DOMContentLoaded", () => {
    const attendeeList = document.getElementById("attendee-list");
    const searchInput = document.getElementById("search");

    // Function to load and parse markdown files from attendees.json
    const loadAttendees = () => {
        fetch("./attendees.json")
            .then(response => response.json())
            .then(markdownFiles => {
                attendeeList.innerHTML = ""; // Clear current attendees

                markdownFiles.forEach(file => {
                    fetch(file)
                        .then(response => response.text())
                        .then(text => {
                            const lines = text.split("\n");
                            const name = lines[0].replace("# ", "").trim();
                            const imageUrl = lines[1].replace("**Image:** ", "").trim();
                            const affiliation = lines[2].replace("**Affiliation:** ", "").trim();
                            const email = lines[3].replace("**Email:** ", "").trim();
                            const bio = lines.slice(5).join(" ").trim();

                            const attendeeCard = document.createElement("div");
                            attendeeCard.classList.add("attendee-card");

                            const attendeeImage = document.createElement("img");
                            attendeeImage.src = imageUrl;
                            attendeeImage.alt = `${name}'s image`;

                            const attendeeName = document.createElement("h2");
                            attendeeName.textContent = name;

                            const attendeeAffiliation = document.createElement("p");
                            attendeeAffiliation.textContent = `Affiliation: ${affiliation}`;

                            const attendeeEmail = document.createElement("p");
                            attendeeEmail.textContent = `Email: ${email}`;

                            const attendeeBio = document.createElement("p");
                            attendeeBio.textContent = bio;

                            attendeeCard.appendChild(attendeeImage);
                            attendeeCard.appendChild(attendeeName);
                            attendeeCard.appendChild(attendeeAffiliation);
                            attendeeCard.appendChild(attendeeEmail);
                            attendeeCard.appendChild(attendeeBio);

                            attendeeList.appendChild(attendeeCard);
                        })
                        .catch(error => {
                            console.error("Error loading markdown file:", error);
                        });
                });
            })
            .catch(error => {
                console.error("Error loading attendees.json:", error);
            });
    };

    // Load attendees on page load
    loadAttendees();

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".attendee-card").forEach(card => {
            const name = card.querySelector("h2").textContent.toLowerCase();
            card.style.display = name.includes(query) ? "block" : "none";
        });
    });
});