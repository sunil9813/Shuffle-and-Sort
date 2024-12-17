const container = document.getElementById("card-container");
const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function to render cards
function renderCards(values) {
  container.innerHTML = "";
  values.forEach((value) => {
    const card = document.createElement("div");
    card.className = "card";

    // Wrap value in an h1 tag
    const heading = document.createElement("h1");
    heading.textContent = value;

    // Append h1 inside the card
    card.appendChild(heading);
    container.appendChild(card);
  });
}

// Shuffle cards randomly
function shuffleCards() {
  const shuffled = cardValues
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  renderCards(shuffled);
}

// Sort cards in ascending order
function sortCards() {
  const sorted = [...cardValues].sort((a, b) => a - b);
  renderCards(sorted);
}

// Initial Render
renderCards(cardValues);
