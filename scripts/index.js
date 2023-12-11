const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
        name:"Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
    ];

    /* ELEMENTS */

    const profileEditButton = document.querySelector("#profile-edit-button");
    const profileEditModal = document.querySelector("#profile-edit-modal");
    const profileCloseModalButton = document.querySelector("#profile-close-modal");
    const profileTitle = document.querySelector(".profile__title");
    const profileDescription = document.querySelector(".profile__description");
    const profileTitleInput = document.querySelector("#profile-title-input");
    const profileDescriptionInput = document.querySelector(
      "#profile-description-input"
    );
    const cardList = document.querySelector(".cards__list");
    const cardAddPopup = document.querySelector("#profile-add-modal");
    const cardAddButton = document.querySelector("#add-button");
    const profileEditForm = profileEditModal.querySelector(".modal__form");
    const cardTemplate =
      document.querySelector("#card-template").content.firstElementChild;
      

    /* FUNCTIONS */

    function closeModal() {
      profileEditModal.classList.remove("modal_opened");
    }
    
    function getCardElement(cardData) {
      const cardElement = cardTemplate.cloneNode(true);
      const cardTitleEl = cardElement.querySelector(".card__title");
      const cardImage = cardElement.querySelector(".card__image");
      cardImage.src = cardData.link;
      cardImage.alt = cardData.title;
      cardTitleEl.textContent = cardData.title;
      return cardElement;
    }
    

    /* EVENT LISTENERS */

    profileEditButton.addEventListener("click", () => {
      profileTitleInput.value = profileTitle.textContent;
      profileDescriptionInput.value = profileDescription.textContent;
      profileEditModal.classList.add("modal_opened");
    });
    
    profileCloseModalButton.addEventListener("click", () => {
      closeModal();
    });
    
    profileEditForm.addEventListener("submit", (e) => {
      e.preventDefault();
      profileTitle.textContent = profileTitleInput.value;
      profileDescription.textContent = profileDescriptionInput.value;
      closeModal();
    });
    
    cardAddButton.addEventListener("click", () => {
      openPopup();
    });
    
    initialCards.forEach(function (cardData) {
      const card = cardTemplate.cloneNode(true);
      const image = card.querySelector(".card__image");
      const cardTitle = card.querySelector(".card__title");
      image.src = cardData.link;
      image.alt = cardData.title;
      cardTitle.textContent = cardData.title;
    });
    




