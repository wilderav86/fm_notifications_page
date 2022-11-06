//global variables

const notificationCount = 0;

//elements
const notificationCard = document.querySelectorAll(".notification-card");
const user = document.querySelector(".user");
//functions

const handleMarkRead = () => {};

console.log(notificationCard);

notificationCard.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked");
  });
});
