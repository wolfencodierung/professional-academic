// Navigation Bar
function setToActiveNav1() {
  document.getElementById("nav-element-1").classList.add("link-active");
  document.getElementById("nav-element-1").classList.remove("link-normal");
  }
  
function setToActiveNav2() {
  document.getElementById("nav-element-2").classList.add("link-active");
  document.getElementById("nav-element-2").classList.remove("link-normal");
  }
  
function setToActiveNav3() {
  document.getElementById("nav-element-3").classList.add("link-active");
  document.getElementById("nav-element-3").classList.remove("link-normal");
  }
  
function setToActiveNav4() {
  document.getElementById("nav-element-4").classList.add("link-active");
  document.getElementById("nav-element-4").classList.remove("link-normal");
  }
  
function setToActiveNav5() {
  document.getElementById("nav-element-5").classList.add("link-active");
  document.getElementById("nav-element-5").classList.remove("link-normal");
  }

  //Store Sections
function setToActiveShopping1 () {
  //This section selects the sectional navigation panel
  document.getElementById("shopping-op-1").classList.add("shopping-section-heading-active");
  document.getElementById("shopping-op-1").classList.remove("shopping-section-heading");
  document.getElementById("shopping-op-2").classList.add("shopping-section-heading");
  document.getElementById("shopping-op-2").classList.remove("shopping-section-heading-active");
  document.getElementById("shopping-op-3").classList.add("shopping-section-heading");
  document.getElementById("shopping-op-3").classList.remove("shopping-section-heading-active");
  //This section toggles visibility on book grid
  document.getElementById("bk-grid-1").classList.add("book-grid-1");
  document.getElementById("bk-grid-1").classList.remove("book-grid-1-hidden");
  document.getElementById("bk-grid-2").classList.add("book-grid-2-hidden");
  document.getElementById("bk-grid-2").classList.remove("book-grid-2");
  document.getElementById("bk-grid-3").classList.add("book-grid-3-hidden");
  document.getElementById("bk-grid-3").classList.remove("book-grid-3");
}

function setToActiveShopping2 () {
  //This section selects the sectional navigation panel
  document.getElementById("shopping-op-1").classList.add("shopping-section-heading");
  document.getElementById("shopping-op-1").classList.remove("shopping-section-heading-active");
  document.getElementById("shopping-op-2").classList.add("shopping-section-heading-active");
  document.getElementById("shopping-op-2").classList.remove("shopping-section-heading");
  document.getElementById("shopping-op-3").classList.add("shopping-section-heading");
  document.getElementById("shopping-op-3").classList.remove("shopping-section-heading-active");
  //This section toggles visibility on book grid
  document.getElementById("bk-grid-1").classList.add("book-grid-1-hidden");
  document.getElementById("bk-grid-1").classList.remove("book-grid-1");
  document.getElementById("bk-grid-2").classList.add("book-grid-2");
  document.getElementById("bk-grid-2").classList.remove("book-grid-2-hidden");
  document.getElementById("bk-grid-3").classList.add("book-grid-3-hidden");
  document.getElementById("bk-grid-3").classList.remove("book-grid-3");
}

function setToActiveShopping3 () {
  //This section selects the sectional navigation panel
  document.getElementById("shopping-op-1").classList.add("shopping-section-heading");
  document.getElementById("shopping-op-1").classList.remove("shopping-section-heading-active");
  document.getElementById("shopping-op-2").classList.add("shopping-section-heading");
  document.getElementById("shopping-op-2").classList.remove("shopping-section-heading-active");
  document.getElementById("shopping-op-3").classList.add("shopping-section-heading-active");
  document.getElementById("shopping-op-3").classList.remove("shopping-section-heading");
    //This section toggles visibility on book grid
  document.getElementById("bk-grid-1").classList.add("book-grid-1-hidden");
  document.getElementById("bk-grid-1").classList.remove("book-grid-1");
  document.getElementById("bk-grid-2").classList.add("book-grid-2-hidden");
  document.getElementById("bk-grid-2").classList.remove("book-grid-2");
  document.getElementById("bk-grid-3").classList.add("book-grid-3");
  document.getElementById("bk-grid-3").classList.remove("book-grid-3-hidden");
}








  /*
var sop1 = document.getElementById("shoping-op-1")
var sop2 = document.getElementById("shoping-op-2")
var sop3 = document.getElementById("shoping-op-3")

function setToActiveShopping1 () {
  document.getElementById("shopping-op-1").classList.add("shopping-section-heading-active");
  document.getElementById("shopping-op-1").classList.remove("shopping-section-heading");

  if (sop2.classList.contains("shopping-section-heading-active")) {
    document.getElementById("shopping-op-2").classList.add("shopping-section-heading");
    document.getElementById("shopping-op-2").classList.remove("shopping-section-heading-active");
  }
  if (sop3.classList.contains("shopping-section-heading-active")) {
    document.getElementById("shopping-op-3").classList.add("shopping-section-heading");
    document.getElementById("shopping-op-3").classList.remove("shopping-section-heading-active");
  }
}

function setToActiveShopping2 () {
  document.getElementById("shopping-op-2").classList.add("shopping-section-heading-active");
  document.getElementById("shopping-op-2").classList.remove("shopping-section-heading");

  if (sop2.classList.contains("shopping-section-heading-active")) {
    document.getElementById("shopping-op-1").classList.add("shopping-section-heading");
    document.getElementById("shopping-op-1").classList.remove("shopping-section-heading-active");
  }
  if (sop3.classList.contains("shopping-section-heading-active")) {
    document.getElementById("shopping-op-3").classList.add("shopping-section-heading");
    document.getElementById("shopping-op-3").classList.remove("shopping-section-heading-active");
  }
}

function setToActiveShopping3 () {
  document.getElementById("shopping-op-3").classList.add("shopping-section-heading-active");
  document.getElementById("shopping-op-3").classList.remove("shopping-section-heading");

  if (sop2.classList.contains("shopping-section-heading-active")) {
    document.getElementById("shopping-op-1").classList.add("shopping-section-heading");
    document.getElementById("shopping-op-1").classList.remove("shopping-section-heading-active");
  }
  if (sop3.classList.contains("shopping-section-heading-active")) {
    document.getElementById("shopping-op-3").classList.add("shopping-section-heading");
    document.getElementById("shopping-op-3").classList.remove("shopping-section-heading-active");
  }
}
*/