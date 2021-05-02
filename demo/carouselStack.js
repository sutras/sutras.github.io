module.exports = {
  title: '轮播图 - 堆叠',
  dom: `<div class="carousel carousel-stack" id="carouselStack">
  <ul class="carousel-wrapper">
    <li class="carousel-slide"><a href="javascript:;"><img src="./assets/img/a01.jpg" /></a></li>
    <li class="carousel-slide"><a href="javascript:;"><img src="./assets/img/a02.jpg" /></a></li>
    <li class="carousel-slide"><a href="javascript:;"><img src="./assets/img/a03.jpg" /></a></li>
    <li class="carousel-slide"><a href="javascript:;"><img src="./assets/img/a04.jpg" /></a></li>
    <li class="carousel-slide"><a href="javascript:;"><img src="./assets/img/a05.jpg" /></a></li>
    <li class="carousel-slide"><a href="javascript:;"><img src="./assets/img/a06.jpg" /></a></li>
  </ul>
  <div class="carousel-pagination"></div>
  <a href="javascript:;" class="carousel-arrow carousel-prev"></a>
  <a href="javascript:;" class="carousel-arrow carousel-next"></a>
</div>`,
  script: `<script>
  (function () {
    var carouselStackIns = new galaxy.Carousel('#carouselStack', {
      effect: 'stack',
      effectStack: {
        layer: 3
      },
      resize: true,
      wrapper: '.carousel-wrapper',
      navigation: {
        prevEl: '.carousel-prev',
        nextEl: '.carousel-next'
      },
      pagination: {
        el: '.carousel-pagination',
        bulletActiveClass: 'active'
      }
    });

    var breakpoint = false;
    function breakpointChange(fn) {
      var isSmall = window.innerWidth <= 768;
      if (isSmall && breakpoint !== -1) {
        breakpoint = -1;
        fn(-1);
      }
      if (!isSmall && breakpoint !== 1) {
        breakpoint = 1;
        fn(1);
      }
    }
    
    function handler() {
      breakpointChange(function (breakpoint) {
        carouselStackIns.destroy();
        carouselStackIns.params.effectStack.layer = breakpoint < 0 ? 2 : 3;
        carouselStackIns.init();
      });
    }
    window.addEventListener('resize', handler);
    handler();
  })();
</script>`
};