module.exports = {
  title: '轮播图 - 垂直牌组',
  dom: `<div class="carousel" id="carouselDeckVertical">
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
  new galaxy.Carousel('#carouselDeckVertical', {
    effect: 'deck',
    effectDeck: {
      type: 'draw',
      prevEasing: null,
      nextEasing: 'easeOutBounce',
      prevDuration: null,
      nextDuration: 2000
    },
    resize: true,
    direction: 'vertical',
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
</script>`
};