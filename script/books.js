// CREATION CARD LISTE BOOK

const fetchMockBook = async () => {
  try {
    const resp = await fetch("/mock/MOCK_BOOK.json");
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};

const creatCardCoverBook = async () => {
  const listBooks = document.querySelector("#list-books");
  // Récuperation des livres
  const books = await fetchMockBook();

  /* Création des élements html */

  // Container cards
  const cardContainer = document.createElement("div");
  cardContainer.style.display = "flex";
  cardContainer.className = "container-list-books";

  books.forEach((book) => {
    // Lien
    const linkBook = document.createElement("a");
    linkBook.href = "/pages/book-page.html";
    // Card
    const card = document.createElement("div");
    card.className = "card-book";

    // Container card
    const imgContainer = document.createElement("div");
    imgContainer.className = "img";

    // Image
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    imgContainer.appendChild(img);

    // Texte
    const groupText = document.createElement("div");
    groupText.className = "group-text";

    // Titre card
    const h3 = document.createElement("h3");
    h3.textContent = book.title;
    // h3.classList.add("title-card");

    // Auteur
    const p = document.createElement("p");
    p.textContent = "By " + book.author;
    p.className = "p-card";

    // Note du livre
    const containerRating = document.createElement("div");
    containerRating.className = "container-rating";

    const containerPprogressBar = document.createElement("div");

    const progressBar = document.createElement("img");
    progressBar.src = "/img/icons/progress-bar.svg";
    const favorite = document.createElement("img");
    favorite.src = "/img/icons/heart.svg";
    containerPprogressBar.appendChild(progressBar);

    const rating = document.createElement("span");
    rating.textContent = book.rating;
    rating.className = "font-card";
    rating.appendChild(favorite);

    containerRating.appendChild(rating);
    containerRating.appendChild(containerPprogressBar);

    groupText.appendChild(h3);
    groupText.appendChild(p);
    groupText.appendChild(containerRating);

    card.appendChild(groupText);
    card.appendChild(imgContainer);

    linkBook.appendChild(card);
    cardContainer.appendChild(linkBook);
  });
  listBooks.appendChild(cardContainer);
  //   document.body.insertBefore(cardContainer, listBooks);
};

export default creatCardCoverBook();
