const navigation = document.querySelector(".navigation");
const navigationButton = document.querySelector(".navigation__button");

navigationButton.addEventListener("click", () => {
    navigation.classList.toggle("showNavigation")
})