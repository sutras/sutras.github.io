module.exports = {
  title: '跑马灯 - 水平',
  dom: `<div class="marquee marquee-horizontal" id="marqueeHorizontal">
  <div class="marquee-header">
    <div class="marquee-title">白胡子海贼团队长</div>
    <div class="marquee-header-extra">
      <a href="javascript:;" class="marquee-prev"><span class="arrow"></span></a>
      <a href="javascript:;" class="marquee-next"><span class="arrow"></span></a>
    </div>
  </div>
  <div class="marquee-body">
    <ul class="marquee-content">
      <li>第1番队队长 - “不死鸟”马尔科</li>
      <li>第2番队队长（原） - 光月御田</li>
      <li>第2番队队长 - “火拳”波特卡斯·D·艾斯</li>
      <li>第3番队队长 - “钻石”乔兹</li>
      <li>第4番队队长 - 萨奇</li>
      <li>第5番队队长 - “花剑”比斯塔</li>
      <li>第6番队队长 - 布拉曼克</li>
      <li>第7番队队长 - 拉克约</li>
      <li>第8番队队长 - 那谬尔</li>
      <li>第9番队队长 - 布伦海姆</li>
      <li>第10番队队长 - 库利艾尔</li>
      <li>第11番队队长 - 金古多</li>
      <li>第12番队队长 - 哈尔塔</li>
      <li>第13番队队长 - “水牛”阿特摩斯</li>
      <li>第14番队队长 - 斯比多·基尔</li>
      <li>第15番队队长 - 佛萨</li>
      <li>第16番队队长 - 以藏</li>
    </ul>
  </div>
</div>`,
  script: `<script>
  new galaxy.Marquee('#marqueeHorizontal', {
    wrapper: '.marquee-body ul',
    direction: 'horizontal',
    navigation: {
      prevEl: '.marquee-prev',
      nextEl: '.marquee-next'
    }
  });
</script>`
};