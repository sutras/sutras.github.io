module.exports = {
  title: '手风琴',
  dom: `<div class="accordion" id="accordion">
  <div class="accordion-item">
    <div class="accordion-header"><span class="arrow"></span> 白胡子</div>
    <div class="accordion-content">
      爱德华·纽盖特，享年72岁。外号“白胡子”，被称为世界最强的男人”，悬赏金50亿4600万贝里。能力是震震果实，武器为最上大业物12工之一“丛云切”。他是旧时代传说海贼之一，原洛克斯海贼团船员，与前海贼王哥尔·D·罗杰齐名，是罗杰死后的无冕之王，2年前战死于顶上战争。
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header"><span class="arrow"></span> 红发</div>
    <div class="accordion-content">
      香克斯，39岁。外号“红发”，红发海贼团头目，悬赏金40亿4890万贝里。没有食用恶魔果实，以霸气和剑术战斗，武器为“格里芬”。过去是罗杰海贼团见习船员。
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header"><span class="arrow"></span> 百兽</div>
    <div class="accordion-content">
      凯多，年龄不详。外号“百兽”，百兽海贼团总督，悬赏金46亿1110万贝里。鱼鱼果实·幻兽种·青龙形态能力者，能够化身为青龙。人称“最强的生物”，以强硬体质和不死传说闻名。过去是洛克斯海贼团见习船员。
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header"><span class="arrow"></span> BIG MOM</div>
    <div class="accordion-content">
      夏洛特·玲玲，68岁。外号“BIG·MOM”，BIG·MOM海贼团船长，悬赏金43亿8800万贝里。魂魂果实能力者。过去是洛克斯海贼团船员。
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header"><span class="arrow"></span> 黑胡子</div>
    <div class="accordion-content">
      马歇尔·D·蒂奇，40岁。外号“黑胡子”，黑胡子海贼团提督，悬赏金22亿4760万贝里。暗暗果实以及震震果实的双果实能力者。过去是白胡子海贼团第2队队员，2年前加入七武海释放监狱犯人并收为部下，1年前打败马尔高带领的白胡子残党，取代白胡子并被称为新任四皇之一。
    </div>
  </div>
</div>`,
  script: `<script>
  new galaxy.Accordion('#accordion', {
    labels: '.accordion-header',
    panels: '.accordion-content',
    atLeastOne: false
  });
</script>`
};