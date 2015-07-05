var navigation  = new Array();  // This is for the navigation.

// ==================== Navigation ==================== //
navigation[0]   = '<div id="tab_navigation">';
navigation[1]   = '<ul class="toolbar" id="dropline">';
navigation[2]   = '<li class="top-menu"> MENU </li>';
navigation[3]   = '<li class="menu-divide"><a class="reg-link" href="/"> Home </a></li>';
navigation[4]   = '<li class="menu-item"><a class="reg-link" href="/pages/Projects.html"> Projects </a></li>';
navigation[5]   = '<li class="menu-item"><a class="reg-link" href="/pages/Resume.html"> Resume </a></li>';
navigation[6]   = '</ul>';
navigation[7]   = '</div>';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
