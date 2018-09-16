
var score, countdown;


devices.get('lightboard').when('lightboard-js-left', function() {
  devices.get('hero').move(-1, 0);
});

devices.get('lightboard').when('lightboard-btn-A', function() {
  devices.get('dot').setX(math.random(0, 16) - 1);
  devices.get('dot').setY(math.random(0, 8) - 1);
  score = 0;
  loop.forever(function() {
    if (devices.get('hero').getX() + 1 == devices.get('dot').getX() + 1) {
      if (devices.get('hero').getY() + 1 == devices.get('dot').getY() + 1) {
        devices.get('dot').setX(math.random(0, 16) - 1);
        devices.get('dot').setY(math.random(0, 8) - 1);
        parts.get('speaker').play('elec_ping');
        score += 1;
      }
    }
  });
  countdown = 30;
  time.every(1, 'seconds', function() {
    countdown -= 1;
    if (countdown == 0) {
      parts.get('speaker').play('perc_bell');
      devices.get('lightboard').text(score, '#ffffff', '#000000');
    }
  });
});

devices.get('lightboard').when('lightboard-js-right', function() {
  devices.get('hero').move(1, 0);
});

devices.get('lightboard').when('lightboard-js-down', function() {
  devices.get('hero').move(0, 1);
});

devices.get('lightboard').when('lightboard-js-up', function() {
  devices.get('hero').move(0, -1);
});
