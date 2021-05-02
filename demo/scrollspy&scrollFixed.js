module.exports = {
  title: '滚动监听 + 滚动固定',
  dom: `<div class="scrollspy" id="scrollSpy">
  <div class="scrollspy-header" id="scrollFixed">
    <div class="scrollspy-nav">
      <a class="scrollspy-nav-item" href="#scrollspy-target1">赤犬</a>
      <a class="scrollspy-nav-item" href="#scrollspy-target2">青雉</a>
      <a class="scrollspy-nav-item" href="#scrollspy-target3">黄猿</a>
    </div>
  </div>
  <div class="scrollspy-body">
    <h4 class="scrollspy-title">海军三大将</h4>
    <div class="scrollspy-img" style="float: right;">
      <img src="./assets/img/sdj.jpg" alt="">
    </div>
    <p>海军大将为海军本部的最高战力，因此对担任者的第一个要求就是“实力”，如果没有合适的人选，则会空着位置。</p>
    <p>海军大将持有“金色电话虫”，拥有随时发动“屠魔令”的权利。可摧毁任意地点，无需向上级通知，即使是世界政府三大机构之一的司法岛也不例外。</p>
    <p>海军大将不轻易出动，但是世界贵族天龙人可直接调动海军大将做事，正因如此，得罪天龙人是人尽皆知的大忌。</p>
    <div class="scrollspy-panel">
      <h5 class="scrollspy-panel-header" id="scrollspy-target1">赤犬 - 萨卡斯基</h5>
      <div class="scrollspy-panel-body">
        <p>萨卡斯基，海军本部元帅。海军代号“赤犬”，原“三大将”之一。自然系。浆果实能力者。刚加入海军之时，就被称为“怪物”。是原海军大将“黑腕”泽法的学生。</p>
        <p>
          赤犬奉行“彻底的正义”。性格刚直，手段残酷不留一切情面，绝不允许一丝“恶”的存在。为了能完成任务，可以毫不在乎的将同僚和一般民众都当成目标歼灭。奥哈拉事件中，他以可能窝藏考古学家为由，命令部下炸毁载满了奥哈拉居民的避难船。顶上战争中，他也亲自处决了因为害怕战死而打算逃走的海军士兵。赤犬极其注意维护海军的威严，是一个铁血军人。
        </p>
        <p>
          萨卡斯基的样貌是参考日本艺人菅原文太。 [3]  原作者尾田荣一郎曾在与中田康孝访谈中表示过内段时间内最崇拜的偶像就是菅原文太，并称其为”世界第一男子汉“。
        </p>
      </div>
    </div>
    <div class="scrollspy-panel">
      <h5 class="scrollspy-panel-header" id="scrollspy-target2">青雉 - 库赞</h5>
      <div class="scrollspy-panel-body">
        <p>
          库赞，海军代号“青雉”，两年前“三大将”之一，自然系冰冻果实能力者，实力强大，是原海军大将黑腕泽法的学生。后与黄猿、赤犬，并称为“海军三大将”。后与赤犬争夺元帅大战十天败北，后选择退出海军，并且与黑胡子海贼团有密切联系。
        </p>
        <p>
          长时间的苦恼使他决心支持“懒散的正义”，他认为“正义”在不同立场的人们身上会有不同见解，并会随立场而改变，所以不会去质疑其他人的“正义”；但当他人要妨碍自己的正义时，就绝对不会放过对方。 性格懒散。但一直保持着冷静的心态。 讲礼貌，见到草帽一伙的时候，都是礼貌待人，不是一见面就刀兵相见；重情义，初次与路飞交手的时候，念在卡普对他有恩的份上，放过了路飞。
        </p>
        <p>青雉的原型是参考自日本已故男星松田优作；松田优作以在电视剧《大都会 PARTII》饰演刑警而知名，另《探侦物语》亦为其代表作品。此外，青雉的生日9月21日亦是参照松田的真实生日日期所设定。</p>
      </div>
    </div>
    <div class="scrollspy-panel">
      <h5 class="scrollspy-panel-header" id="scrollspy-target3">黄猿 - 波鲁萨利诺</h5>
      <div class="scrollspy-panel-body">
        <p>
          两年前以及两年后的“三大将”之一，自然系闪闪果实能力者，拥有强大的剑术和踢技以及射击能力。刚加入海军之时，就已实力高强，被称为怪物。是原海军本部大将黑腕泽法的学生。负责统帅战桃丸率领的海军科学部队。2年前在香波地群岛以压倒性力量秒杀四名超新星。现与绿牛、藤虎，并称为新的三大将。
        </p>
        <p>秉承着“模棱两可的正义”。认为“海贼的罪行都是无法消去的”。战斗时喜欢调侃对手，特别喜欢说“好可怕啊”，面对大部分敌人经常做出示弱的样子。说话方式非常缓慢。常常错用不能对话的窃听用的黑色电话虫。</p>
        <p>黄猿的形象原型为日本演员田中邦卫。被誉为日本最伟大的配角演员之一。</p>
      </div>
    </div>
  </div>
</div>`,
  script: `<script>
  new galaxy.ScrollSpy('#scrollSpy', {
    labels: '.scrollspy-nav-item',
    activeClass: 'active',
    // scrollBox: '.scrollspy-body'
  });
  new galaxy.ScrollFixed('#scrollFixed', {
    fixedBox: '.scrollspy-nav',
    offsetTop: 42
  });

  // 当滚动超过scrollSpy盒子时取消固定，避免遮挡其下内容
  (function() {
    var utils = galaxy.utils;
    var scrollSpy = utils.$('#scrollSpy');
    var scrollFixed = utils.$('#scrollFixed');
    var child = scrollFixed.firstElementChild;

    function scrollHandler() {
      if (scrollSpy.getBoundingClientRect().bottom <= 0) {
        utils.addClass(child, 'overdo');
      } else {
        utils.removeClass(child, 'overdo');
      }
    }
    scrollHandler();
    utils.on(window, 'scroll', utils.throttle(scrollHandler, 100));
  })();
</script>`
};