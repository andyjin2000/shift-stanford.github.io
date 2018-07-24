var rotating_texts = ['reduce healthcare costs?',
                      'diagnose disease earlier?',
                      'deliver more effective treatment?',
                      'provide medical expertise to those who don\'t have access to it?']

function rotate(idx) {
  $('#rotating_text').html(rotating_texts[idx]);
  $('#rotating_text').fadeIn(1000);

  if ((idx + 1) != rotating_texts.length) {
    $('#rotating_text').fadeOut(2000);
    setTimeout(rotate.bind(null, idx + 1), 3000);
  }
}

rotate(0);
//$('#scroll_button').mouseenter(function () {
//  $(this).effect('bounce', {times : 3}, 500);
//});
