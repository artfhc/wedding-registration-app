$(function(){
  var pjaxTriggerList = [
    'a[href="/login"]', 
    'a[href="/signup"]', 
    'a[href="/"]', 
    'a[href="/logout"]'
  ];
  var pjaxContainer = '.container';

  $(document).pjax(pjaxTriggerList.join(), pjaxContainer);
});