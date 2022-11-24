// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let timeSlots = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

$(document).ready(function() {
  $('.saveBtn').on('click', function() {
    const description = $(this).siblings('.description').val(); // using the id of description as the key, .val 
    const time = $(this).parent().attr('id'); // using id of time as the key

    // saving the time and description in set item
    localStorage.setItem(description, time);
  }) 

  let descriptionBox = $('.textarea')
  for (let i = 0; i < descriptionBox.length; i++) {
    const element = array[i];
    
  }

  // id is renaming the my calendarTimeIds and also putting it in an array
  // get item is passing the key 
  timeSlots.forEach(setHour => {
    $(`#${setHour} .description`).val(localStorage.getItem(`${setHour}`));   
  });
});

  
// /*homework help create a script
// this is html
// look at styling in css and use it as a guide when setting classes for the divs
// row, a, etc.
// div class = row time-block id = 9 oclock (passing jquery through it.) this is main div
//     div, col-md-1 hour (9AM in the tags) this is inside the main div,; descriptions. save button. use autocompletion front font awesome
  

