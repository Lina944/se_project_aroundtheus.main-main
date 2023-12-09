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

/*----------------------------------------------------------------------------*/
/*----------------------------------ELEMENTS----------------------------------*/
/*----------------------------------------------------------------------------*/

    const profileEditButton = document.querySelector("#profile-edit-button");
    const profileEditModal = document.querySelector("#profile-edit-modal");
    const modalCloseButton = profileEditModal.querySelector("#modal-close-button");
    const profileTitle = document.querySelector(".profile__title");
    const profileDescription = document.querySelector(".profile__description");
    const profileTitleInput = document.querySelector("#profile-title-input");
    const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/*----------------------------------------------------------------------------*/
/*----------------------------------FUNCTIONS---------------------------------*/
/*----------------------------------------------------------------------------*/

    function closeModal() {
        profileEditModal.classList.remove("modal_opened");
    }
    function getCardElement(cardData) {
        const cardElement = cardTemplate.cloneNode(true);
        const cardTitleEl = cardElement.querySelector(".card__title");
        const cardImageEl = cardElement.querySelector(".card__image");
        cardImageEl.src = cardData.link;
        cardImageEl.alt = cardData.title;
        cardTitleEl.textContent = cardData.title;
        return cardElement;
      }
      

 /*----------------------------------------------------------------------------*/
/*----------------------------------EVENTS LISTENERS--------------------------*/
/*----------------------------------------------------------------------------*/

profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal_opened");
  });
  
  modalCloseButton.addEventListener("click", () => {
    closePopup();
  });
  
  profileEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopup();
  });
  
  cardAddButton.addEventListener("click", () => {
    openPopup();
  });

  initialCards.forEach(function (cardData) {
    const cardEl = cardTemplate.cloneNode(true);
    const imageEl = cardEl.querySelector(".card__image");
    const cardTitle = cardEl.querySelector(".card__title");
    imageEl.src = cardData.link;
    imageEl.alt = cardData.title;
    cardTitle.textContent = cardData.title;
    cardListEl.appendChild(cardEl);
  });
  
  






