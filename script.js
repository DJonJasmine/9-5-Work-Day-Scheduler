// current date
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// array for time blocks
let timeSlot = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];


$(document).ready(function() {
  $('.saveBtn').on('click', function() {
    // .this is referring to the description variable and is grabbing the all of the sibling elements in the DOM that has the class of description and returning the value of the element with the changes.
    // the variables description and time are keys
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    // saving the text box and time key with set item
    localStorage.setItem(time, text);
  }); 
  // a function for the past present and future time blocks

  // pass the key with get item
  timeSlot.forEach(hourNumber => {
    $(`#hour-${hourNumber} .description`).val(localStorage.getItem(`hour-${hourNumber}`));
  })

})

function hourTracker() {
  let currentHour = moment().hour();
  
  $('.time-block').each(function () {
    let timeBlock = parseInt($(this).attr('id').split('hour-')[1]);


    // To check the time and add the classes for background indicators
  if (timeBlock < currentHour) {
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('past');
        
  } else if (timeBlock === currentHour) {
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }

  // console.log(timeBlock, currentHour);
  console.log(typeof currentHour, typeof timeBlock);
 })
}
hourTracker()