var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tab of tablinks) {
    tab.classList.remove("active-link");
  }
  for (tab of tabcontents) {
    tab.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/*for small screen*/ 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right ="0";
}
function closemenu(){
  sidemenu.style.right ="-200px";
}