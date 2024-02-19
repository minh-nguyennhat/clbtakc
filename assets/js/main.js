/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ===show toast====
window.onload = function() {
  var buttons = document.querySelectorAll('.atv__button-link-o');
  var toast = document.getElementById('toast');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      toast.className = "show";
      setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
    });
  });
}