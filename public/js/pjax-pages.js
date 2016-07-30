$(function(){
  var pjaxTriggerList = [
    'a[href="/sample/sign-in"]', 
    'a[href="/sample/sign-up"]', 
    'a[href="/sample/voting"]'
  ];
  var pjaxContainer = '.container';

  $(document).pjax(pjaxTriggerList.toString(), pjaxContainer);
});