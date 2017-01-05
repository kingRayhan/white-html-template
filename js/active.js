$(document).ready(function(){
/**
 * scrollUP
 */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
    });

  $('#menu').slicknav({
    label: ''
  });
  /**
   * [mobile description]
   * @type {[type]}
   */
/*  new WOW().init({
    mobile: false
  });
*/
  /**
   * Responsive video
   */
  $(".responsive-iframe").fitVids();

  /**
   * Light box
   */
  $(".white-lightbox").prettyPhoto();

/**
 * Mobile sidebar
 */

  //open the lateral panel
  $('.cd-btn').on('click', function(event){
    event.preventDefault();
    $('.cd-panel').addClass('is-visible');
  });
  //clode the lateral panel
  $('.cd-panel').on('click', function(event){
    if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel').removeClass('is-visible');
      event.preventDefault();
    }
  });

var sidebar = $('#text').html();

//$('#sidebar-right').html(sidebar);




});