/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ===show atv====
// Replace with the path to your JSON file
// Replace with the path to your JSON file
// Replace with the path to your JSON file
fetch('./assets/database/atv.json')
  .then(response => response.json())
  .then(data => {
    // Reverse the data array
    data.reverse();
    // Get the template card and the container where you want to add the activities
    const templateCard = document.getElementById('template-card');
    const container = document.getElementById('activities-container');

    // Loop through each item in the data
    data.forEach(item => {
      // Clone the template card
      const card = templateCard.cloneNode(true);

      // Remove the id and show the card
      card.id = '';
      card.style.display = '';

      // Get the elements inside the card
      const title = card.querySelector('.atv__title');
      const date = card.querySelector('.date__label');
      const status = card.querySelector('.atv__status');
      const link = card.querySelector('.atv__button_link');

      // Set the text content of the elements
      title.textContent = item.atv__title;
      date.textContent = item.date__label;
      link.href = item.atv__button_link;

      // Check the status and set the appropriate class and text content
      if (item.atv__status === 'o') {
        status.className = 'atv__status_o';
        status.textContent = item.atv__status_o;
        link.className = 'atv__button_link_o';
      } else if (item.atv__status === 'i') {
        status.className = 'atv__status_i';
        status.textContent = item.atv__status_i;
        link.className = 'atv__button_link_i';
      }

      // Append the card to the container
      container.appendChild(card);
    });
  });

// ===show toast====
window.onload = function() {
  var buttons = document.querySelectorAll('.atv__button_link_o');
  var toast = document.getElementById('toast');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      toast.className = "show";
      setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
    });
  });
}