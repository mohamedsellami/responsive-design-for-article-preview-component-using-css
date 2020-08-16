const shareButton = document.querySelector(".share");
const accountsContainer = document.querySelector(".accounts-countainer");
const shareIcon = document.querySelector(".share .fa-share");

shareButton.addEventListener("click", openOrCloseAccountsContainer);
function openOrCloseAccountsContainer() {
  accountsContainer.classList.toggle("hide"); //hide or show accounts container
  shareButton.classList.toggle("activeBackground"); //change background color of share button when it will be active or disactive
  shareIcon.classList.toggle("activeIcon"); //change color of share button's icon when it will be active or disactive
}
