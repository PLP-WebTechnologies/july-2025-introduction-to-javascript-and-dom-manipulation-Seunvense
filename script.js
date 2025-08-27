/* Part 1: JavaScript Basics - Variables, Conditionals */
const siteName = "Why Dogs Are Great";
let userRole = "visitor"; // Could be "admin" later
console.log(`Welcome to ${siteName}! User role: ${userRole}`);

if (userRole === "visitor") {
    console.log("Explore our dog tips and breeds!");
} else {
    console.log("Admin access granted.");
}

/* Part 2: Functions - Reusable Logic */
function formatDogFact(fact, index) {
    // Capitalize and number fact
    return `Dog Fact #${index + 1}: ${fact.charAt(0).toUpperCase() + fact.slice(1)}.`;
}

function calculateWalkTime(breed) {
    // Return recommended walk time based on breed
    if (breed === "labrador") return "45 minutes";
    if (breed === "german-shepherd") return "60 minutes";
    if (breed === "golden-retriever") return "40 minutes";
    return "30 minutes";
}

/* Part 3: Loops - Repetition */
const careTips = document.querySelectorAll("#care-tips li");
careTips.forEach((tip, index) => {
    // Add numbering to tips
    tip.textContent = `${index + 1}. ${tip.textContent}`;
});

const dogFacts = [
    "dogs have a sense of time",
    "dogs can smell 100,000 times better than humans",
    "dogs dream, especially puppies"
];
let factIndex = 0;
function cycleFacts() {
    // Loop to cycle facts
    const factDisplay = document.getElementById("fact-number");
    factDisplay.textContent = factIndex + 1;
    document.getElementById("fact-counter").textContent = formatDogFact(dogFacts[factIndex], factIndex);
    factIndex = (factIndex + 1) % dogFacts.length; // Reset at end
}

/* Part 4: DOM Manipulation - Interactivity */
document.getElementById("toggle-intro").addEventListener("click", () => {
    // Toggle intro text visibility
    const introText = document.getElementById("intro-text");
    introText.classList.toggle("hidden");
});

document.getElementById("next-fact").addEventListener("click", () => {
    // Cycle facts and highlight
    cycleFacts();
    document.getElementById("fact-counter").classList.add("highlight");
    setTimeout(() => {
        document.getElementById("fact-counter").classList.remove("highlight");
    }, 1000);
});

document.getElementById("form-submit").addEventListener("click", (e) => {
    // Handle form submission
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");
    if (name && email && message) {
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.style.color = "green";
        document.getElementById("contact-form").reset();
    } else {
        formMessage.textContent = "Please fill all fields.";
        formMessage.style.color = "red";
    }
});