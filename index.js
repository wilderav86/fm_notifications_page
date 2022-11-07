//global variables

//elements
const notificationCards = document.querySelectorAll(".notification-card");
const notificationCount = document.querySelector(".notification-count");
const markAllReadBtn = document.querySelector(".mark-as-read-btn");
const unreadMarkers = document.querySelectorAll(".unread-marker");
//functions

const handleMarkRead = () => {
  notificationCards.forEach((card) => {
    card.classList.remove("unread");
  });

  unreadMarkers.forEach((marker) => {
    marker.remove();
  });

  notificationCount.innerHTML = 0;
};

markAllReadBtn.addEventListener("click", handleMarkRead);
