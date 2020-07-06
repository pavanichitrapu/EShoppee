function updateTimer() {
    var future = Date.parse("aug 12, 2020 11:30:00");
    var now = new Date();
    var diff = future - now;
  
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor(diff / (1000 * 60));
    var secs = Math.floor(diff / 1000);
  
    var d = days;
    var h = hours - days * 24;
    var m = mins - hours * 60;
    var s = secs - mins * 60;
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var timer = document.getElementById("timer");
    timer.innerHTML =
      '<div class="pulse" id="days">' +
      d +
      "<span >days</span></div>" +
      '<div class="pulse" id="hours">' +
      h +
      "<span >hours</span></div>" +
      '<div class="pulse" id="min">' +
      m +
      "<span >minutes</span></div>" +
      '<div class="pulse" id="sec">' +
      s +
      "<span >seconds</span></div>";
  }
  setInterval("updateTimer()", 1000);
  