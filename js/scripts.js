let toggleColor = true;
function changeColorTheme() {
    if (toggleColor) {
      document.getElementsByTagName('footer')[0].style.backgroundColor = '#3F8460';
      document.getElementsByTagName('header')[0].style.backgroundImage = "url('img/green-grass.jpg')";
      document.getElementById("subtitle").textContent = "The grass is greener where you water it.";
      let activeClass = document.getElementsByClassName('active');
      for (let i = 0 ; i < activeClass.length; i++) {
        activeClass[i].style.outline = "#35C702 solid 2px"
      }
      toggleColor = false;
    }
    else {
      document.getElementsByTagName('footer')[0].style.backgroundColor = '#221A11';
      document.getElementsByTagName('header')[0].style.backgroundImage = "url('img/mud-pool.jpg')";
      document.getElementById("subtitle").textContent = "Finding my way through the muck and mire.";
      let activeClass = document.getElementsByClassName('active');
      for (let i = 0 ; i < activeClass.length; i++) {
        activeClass[i].style.outline = "#E59700 solid 2px"
      }
      toggleColor = true;
    }
}
