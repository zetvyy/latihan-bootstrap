// Membuat fungsi search
const searchButton = document.getElementById("btnSearch");

searchButton.addEventListener("click", function() {
  event.preventDefault();
  searchData();
});

function searchData() {
  const searchValue = document.querySelector("#inputMenu").value.toLowerCase();
  const menus = menus.querySelectorAll();

  for (menu of menus) {
    const title = menu.firstElementChild.textContent.toLowerCase();

    if (title.toLowerCase().includes(searchValue)) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

