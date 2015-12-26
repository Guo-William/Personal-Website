<nav class="navbar-stretch navbar navbar-inverse" role="navigation">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand home-menu" href="/">Home</a>
  </div>


  <div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav">
      <li><a class="regular-menu-item" href="/pages/Projects.php">Projects</a></li>
      <li><a class="regular-menu-item" href="/pages/Resume.php">Resume</a></li>
    </ul>
  </div><!-- /.navbar-collapse -->
</nav>

<script>
  // var wanted_width = $(".img-pad").css("margin-left");
  // $(".img-pad").css("margin-top", wanted_margin);
  alert(42);
  var wanted_width = $(".navbar-stretch").parent().width();
  alert(wanted_width);
  $(".navbar-stretch").width($(".navbar-stretch").parent().width());
  
  
</script>
