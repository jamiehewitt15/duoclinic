// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav").style.height = "56px";
    document.getElementById("nav").style.padding = "18px 0 0 0";
    document.getElementById("logo").style.height = "32px";  
    document.getElementById("logo").style.width = "93px";
    document.getElementById("logo").style.top = "12px";
  } else {
    document.getElementById("nav").style.height = "96px";
    document.getElementById("nav").style.padding = "38px 0 0 0";
    document.getElementById("logo").style.height = "48px";
    document.getElementById("logo").style.width = "139px";
    document.getElementById("logo").style.top = "24px";
  }
  
}
