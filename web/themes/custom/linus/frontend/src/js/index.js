import 'bootstrap';
//import '../../node_modules/bootstrap/js/dist/alert';
//import '../../node_modules/bootstrap/js/dist/util';

/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
  'use strict';


  Drupal.behaviors.cerrejon = {
    attach: function (context, settings) {
      btnMenu();
      btnTimeLine();
    }
  };

  const btnMenu = () => {
    const button = document.querySelector('#block-buttonmenu');
    const navbarMain = document.querySelector('#navbar-main');
    const elementToToggle = document.getElementById('CollapsingNavbar');
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      elementToToggle.classList.toggle('active');
      navbarMain.classList.toggle('active');
    });
  };
  const btnTimeLine = () => {
    const boxlength = document.getElementsByClassName('box-time-line');
      if (window.innerWidth > 768 && boxlength.length > 0) {
        $('.box-time-line').on('click',function(){
          $('.paragraph--type--time-line').removeClass("open-image");
          $(this).parents('.paragraph--type--time-line').addClass("open-image");
        })
      }
  };
  window.onresize = btnTimeLine;
})(jQuery, Drupal);
