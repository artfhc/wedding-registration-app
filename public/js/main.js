$(document).ready(function() {

  // Place JavaScript code here...
  $('.carousel').carousel({
  	keyboard: true,
    interval: 5000 //changes the speed
  });
  
  var $votingForm = $('#voting-form');
  var $votingCards = $votingForm.find('.voting-card');

  $votingCards.click(function(event) {
    var chooseVal = $(this).attr('data-choose');
    $votingForm.find('input[name="choice"]').val(chooseVal);

    // Star UI
    $votingForm.find('i.fa.fa-star').removeClass('selected');
    $(this).find('i.fa.fa-star').addClass('selected');
    
    //$votingForm.submit();

    $.ajax({
      method: 'POST',
      url: '/api/choose',
      data: $('form').serializeToJSON()
    }).done(function(msg) {
      console.log(msg);
    });
    
  });
});