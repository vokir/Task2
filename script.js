$(document).on('click', '.closed', function() {
    $('.menu').find('.closed').removeClass('active');
    $('.menu').find('.closed').removeClass('active1');
    $('.menu').find('.closed').addClass('closed');
    $(this).addClass('active');
    $(this).addClass('active1');
    $('.block').hide();
    $(this).parent().find('.block').show();
  });
  $(document).on('click', '.active', function() {
    $(this).parent().find('.block').hide();
    $(this).removeClass('active');
    $(this).removeClass('active1');
    $(this).addClass('closed');
  });