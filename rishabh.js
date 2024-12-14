// Quotes array with text and image URLs
const quotes = [
    {
        text: '"When I say it doesn’t hurt me, that means I can bear it." – Gon Freecss (Hunter x Hunter)',
        image: 'images\hunterxhunter.jpg'
    },
    {
        text: '"You are the best thing that’s ever been mine." – Taylor Swift',
        image: 'images\TaylorSwift.jpg'
    },
    {
        text: '"I’ll be there for you... because you’re there for me too!" – Friends',
        image: 'images\friends.jpeg'
    },
    {
        text: '"No mourners. No funerals." – Six of Crows',
        image: 'images\sixofcrows.jpg'
    },
    {
        text: '"I am the beginning. I am the end." – Astra (Valorant)',
        image: 'images\valorant.jpg'
    }
];

// Current quote index
let currentIndex = 0;

// Ensure DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get buttons and sections
    const startButton = document.getElementById('startButton');
    const nextButton = document.getElementById('nextButton');

    // Add event listeners
    startButton.addEventListener('click', startJourney);
    nextButton.addEventListener('click', showNextQuote);
});

// Start the journey
function startJourney() {
    const letterSection = document.getElementById('letter');
    const quotesSection = document.getElementById('quotes');

    // Hide the letter section
    letterSection.classList.add('hidden');

    // Show the quotes section
    quotesSection.classList.remove('hidden');

    // Display the first quote
    showQuote();
}

// Show the current quote
function showQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteImage = document.getElementById('quote-image');

    // Update the text and image for the current quote
    quoteText.textContent = quotes[currentIndex].text;
    quoteImage.src = quotes[currentIndex].image;

    // Ensure the image is visible
    quoteImage.classList.remove('hidden');
}

// Show the next quote
function showNextQuote() {
    currentIndex++;

    if (currentIndex < quotes.length) {
        showQuote(); // Display the next quote
    } else {
        endJourney(); // Show the end message when all quotes are done
    }
}

// End the journey
function endJourney() {
    const quotesSection = document.getElementById('quotes');
    const endMessageSection = document.getElementById('end-message');

    // Hide the quotes section
    quotesSection.classList.add('hidden');

    // Show the final message
    endMessageSection.classList.remove('hidden');
}
