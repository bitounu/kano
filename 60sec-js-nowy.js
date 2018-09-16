var item, gramy, sekundy;

devices.get('lightboard').when('lightboard-btn-A', function() {
  if (gramy == true) {
    time.every(1, 'seconds', function() {
      if (sekundy <= 60) {
        sekundy += 1;
        devices.get('lightboard').text(sekundy, '#009900', '#000000');
      } else {
        devices.get('lightboard').scroll('Time up!', '#ffffff', '#000000', 500);
        gramy = false;
      }
    });
  }
});

devices.get('lightboard').when('lightboard-btn-B', function() {
  devices.get('lightboard').text(sekundy, '#ffffff', '#000000');
  gramy = true;
  sekundy = 0;
});
