// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

let timeSlot = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

$(document).ready(function() {
  $('.saveBtn').on('click', function() {
    // .this is referring to the description variable and is grabbing the all of the sibling elements in the DOM that has the class of description and returning the value of the element with the changes.
    // the variables description and time are keys
    const textBox = $(this).siblings('.description').val(); 
    const time = $(this).parent().attr('id'); 

    // saving the text box and time key with set item
    localStorage.setItem(textBox, time);
  }) 

  timeSlot.forEach(hour => {
    $(`#${hour} .description`).val(localStorage.getItem(`${hour}`))
  
  });
  let descriptionBox = $('.textarea')
  for (let i = 0; i < descriptionBox.length; i++) {
    const element = array[i];
    
  }

  // get item is passing the key 

    

  
});

  
// /*homework help create a script
// this is html
// look at styling in css and use it as a guide when setting classes for the divs
// row, a, etc.
// div class = row time-block id = 9 oclock (passing jquery through it.) this is main div
//     div, col-md-1 hour (9AM in the tags) this is inside the main div,; descriptions. save button. use autocompletion front font awesome
  

