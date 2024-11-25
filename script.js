"use strict";

// Manipulate the 3 buttons elements.
// Manipulate Overlay and Popup.
// Keypress Event using the addEventListener.

// Select Elements.
const btnsOpenModal = document.querySelectorAll(".btn");
const btnCloseModal = document.querySelector(".close-btn");
const overlayEl = document.querySelector(".overlay");
const popupEl = document.querySelector(".popup");

// for (const btn of btnsOpenModal)
//   btn.addEventListener("click", function () {
//     console.log(btn.textContent);
//   });

// Opening the Modal Window Function
const openModal = function () {
  overlayEl.classList.remove("hidden");
  popupEl.classList.remove("hidden");
};

// Closing the Modal Window Function
const closeModal = function () {
  overlayEl.classList.add("hidden");
  popupEl.classList.add("hidden");
};

// Looping through the NodeList Array
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// Clicking on the Close Modal Button
btnCloseModal.addEventListener("click", closeModal);

// Clicking on the Overlay
overlayEl.addEventListener("click", closeModal);

// Listening to the Escape Key using 'KEYDOWN' event.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !overlayEl.classList.contains("hidden"))
    closeModal();
});
