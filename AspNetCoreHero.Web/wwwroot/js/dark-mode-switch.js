const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
    if (darkThemeSelected) {
        document.body.setAttribute('data-theme', 'dark');
        $('#navigationBar').addClass('navbar-dark').removeClass('navbar-light');
        $('#sideBar').addClass('sidebar-dark-primary').removeClass('sidebar-light-primary');
        $('.content-wrapper').attr('style', 'background-color: #111');
        $('.card').attr('style', 'background-color: #212121');
        $('.main-footer').attr('style', 'background-color: #212121');
    }
    else {
        document.body.removeAttribute('data-theme');
        $('#sideBar').addClass('sidebar-light-primary').removeClass('sidebar-dark-primary');
        $('#navigationBar').removeClass('navbar-dark').addClass('navbar-light');
        $('.content-wrapper').attr('style', 'background-color: #f4f6f9');
        $('.card').attr('style', 'background-color: ##ffffff');
        $('.main-footer').attr('style', 'background-color: ##ffffff');
    }
    
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
      document.body.setAttribute('data-theme', 'dark');
      $('#sideBar').addClass('sidebar-dark-primary').removeClass('sidebar-light-primary');
      $('#navigationBar').addClass('navbar-dark').removeClass('navbar-light');
      $('.content-wrapper').attr('style', 'background-color: #111');
      $('.card').attr('style', 'background-color: #212121');
      $('.main-footer').attr('style', 'background-color: #212121');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
      document.body.removeAttribute('data-theme');
      $('#sideBar').addClass('sidebar-light-primary').removeClass('sidebar-dark-primary');
      $('#navigationBar').removeClass('navbar-dark').addClass('navbar-light');
      $('.content-wrapper').attr('style', 'background-color: #f4f6f9');
      $('.card').attr('style', 'background-color: ##ffffff');
      $('.main-footer').attr('style', 'background-color: ##ffffff');
      //The specific CSS changes after the first one, are, of course, just examples.
    localStorage.removeItem('darkSwitch');
  }
}
