var navigation  = new Array();  // This is for the navigation.

// ==================== Navigation ==================== //
navigation[0]   = '<div id="tab_navigation">';
navigation[1]   = '<ul class="toolbar" id="dropline">';
navigation[2]   = '<li class="link-home"><a class="home" href="/"> HOME </a></li>';
navigation[3]   = '<li class="menu-divide"><a class="reg-link" href="/pages/Projects.html"> Projects </a></li>';
navigation[4]   = '<li class="menu-item"><a class="reg-link" href="/pages/Resume.html"> Resume </a></li>';
navigation[5]   = '</ul>';
navigation[6]   = '</div>';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
