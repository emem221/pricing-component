"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".toggle-area");
const startup = document.querySelector(".price-1");
const premium = document.querySelector(".price-2");
const enterprise = document.querySelector(".price-3");

toggleArea.addEventListener("click", function (e) {
  e.preventDefault();

  if (toggleArea.classList.contains("monthly")) {
    toggleArea.classList.remove("monthly");
    toggleArea.classList.add("annually");
    startup.innerHTML = `<p class="price-1"> <span class="naira-sign">&#x20A6;</span>150,000</p>`;
    premium.innerHTML = `<p class="price-2"> <span class="naira-sign">&#x20A6;</span>240,000</p>`;
    enterprise.innerHTML = `<p class="price-3"> <span class="naira-sign">&#x20A6;</span>300,000</p>`;
  } else {
    toggleArea.classList.add("monthly");
    toggleArea.classList.remove("annually");
    startup.innerHTML = `<p class="price-1"> <span class="naira-sign">&#x20A6;</span>20,000</p>`;
    premium.innerHTML = `<p class="price-2"> <span class="naira-sign">&#x20A6;</span>50,000</p>`;
    enterprise.innerHTML = `<p class="price-3"> <span class="naira-sign">&#x20A6;</span>100,000</p>`;
  }
});

/* dark theme */
const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("changeTheme");
  } else {
    document.body.classList.remove("changeTheme");
  }
};
