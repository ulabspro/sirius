$(function () {
  $('[data-action="rotate"]').each(function () {
    var $item = $(this),
      $planet = $item.children('.cosmos-ellipse-planet'),
      dims = {
        W: $item.data('width'),
        H: $item.data('height')
      },
      center = {
        X: dims.W / 2,
        Y: dims.H / 2
      },
      ratio = dims.W / dims.H,
      rotate = $item.data('rotate'),
      angle = 0,
      start = $item.data('start'),
      time = $item.data('time'),
      interval = time,
      translate = $item.data('translate'),
      process;

    $item.css({
      transform: 'translate('+translate+')'
    });

    $('.cosmos-ellipse')
      .on('mouseenter', function () {
        clearTimeout(process);
      })
      .on('mouseleave', function () {
        animation();
      });

    $('.cosmos-ellipse-planet')
      .on('mouseenter', function () {
        var offsetLeft = parseInt($(this).css('left'));

        if (offsetLeft > 300) {
          $(this)
            .find('.cosmos-ellipse-planet-popup')
            .css({
              'z-index' : '999999',
              'display' : 'block',
              'left' : '-375px'
            });
          $('.cosmos-ellipse-circle').css('z-index', '-10000');
          $(this).parent('.cosmos-ellipse-circle').css('z-index', '1000');
        } else if (offsetLeft < 1000) {
          $(this)
            .find('.cosmos-ellipse-planet-popup')
            .css({
              'z-index' : '999999',
              'display' : 'block',
              'right' : '-375px'
            });
          $('.cosmos-ellipse-circle').css('z-index', '-10000');
          $(this).parent('.cosmos-ellipse-circle').css('z-index', '1000');
        }
      })
      .on('mouseleave', function () {
        offsetLeft = 0;
        $(this)
          .find('.cosmos-ellipse-planet-popup')
          .css({
            'z-index' : '0',
            'display' : 'none',
            'left' : 'initial',
            'right' : 'initial'
          });
      });

    if (rotate) {
      rotate = rotate.split('*');

      if (rotate[1] !== undefined) {
        angle = Math.PI * parseInt(rotate[0]) / 180;
      } else {
        $item.css({
          transform: 'rotateZ(' + rotate[0] + ')'
        });
      }
    }

    animation();

    function animation() {
      var x = center.X * Math.sin(start),
        y = center.Y * Math.cos(start),
        X = x * Math.cos(angle) - y * Math.sin(angle),
        Y = x * Math.sin(angle) + y * Math.cos(angle);

      $planet.css({
        top: center.Y + Y,
        left: center.X + X
      });
      start += .02;

      process = setTimeout(animation, interval);
    }
  });
});