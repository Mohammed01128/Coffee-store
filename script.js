const barBtn = document.querySelector(".bar-btn");
const asideNavigation = document.querySelector(".aside-navigation");

const toggleAsideNavigation = () => {
  asideNavigation.classList.toggle("active");
}

barBtn.addEventListener("click", toggleAsideNavigation);

const asideNavigationLinks = document.querySelectorAll(".aside-navigation a");
asideNavigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    asideNavigation.classList.remove("active");
  });
});


const cartBtn = document.querySelector(".cart-btn");
const asideCart = document.querySelector(".aside-cart");

const toggleAsideCart = () => {
    asideCart.classList.toggle("active");
}

cartBtn.addEventListener("click", toggleAsideCart);

const asideSearch = document.querySelector(".aside-search");
const searchBtn = document.querySelector(".search-btn");

const toggleAsideSearch = () => {
  asideSearch.classList.toggle("active");
}

searchBtn.addEventListener("click", toggleAsideSearch);