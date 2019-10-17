$(document).ready(function() {
  var bodyClass;
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      bodyClass = 'bold';
      break;
    case 1:
      bodyClass = 'italic';
      break;
    case 2:
      bodyClass = 'light';
      break;
    case 3:
      bodyClass = 'medium';
      break;
    case 4:
      bodyClass = 'roman';
      break;
  }
  $('body').addClass(bodyClass).removeClass('hidden')
})