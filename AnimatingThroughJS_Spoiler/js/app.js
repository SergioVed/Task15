$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(1000);
})

$('.spoiler').on('click' , function () {
  $('.spoiler').hide();
})