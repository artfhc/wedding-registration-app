$(document).ready(function() {
  // Place JavaScript code here...
  $('.carousel').carousel({
  	keyboard: true,
    interval: 5000 //changes the speed
  });
  
  var $votingPage = $('.voting-page');
  var $votingForm = $votingPage.find('#voting-form');
  var $votingCards = $votingForm.find('.voting-card');
  var $votingAlert = $votingPage.find('.voting-alert');

  $(document).on('click', '.voting-card', function(event) {
    // Update choice input value
    var chooseVal = $(this).attr('data-choose');
    $votingForm.find('input[name="choice"]').val(chooseVal);

    // Star UI
    $votingForm.find('i.fa.fa-star').removeClass('selected');
    $(this).find('i.fa.fa-star').addClass('selected');
    
    // Submit via ajax
    $.ajax({
      method: 'POST',
      url: '/api/choose',
      data: $('form').serializeToJSON()
    }).done(function(response) {
      response = response || {};
      $votingAlert.removeClass('hide');
      $votingAlert.find('.voting-message').text(response.message);
    });
  });

  $(document).on('click', '.voting-alert button', function(event) {
    $votingAlert.addClass('hide');
  });

  $(document).on('click', 'a.btn-translate', function(event) {
    event.preventDefault();

    if($(this).attr('data-locale') == 'en') {
      Cookies.set('lang', 'zh', { expires: 7 });
    } else {
      Cookies.set('lang', 'en', { expires: 7 });
    }

    window.location = window.location.href;
  });
});