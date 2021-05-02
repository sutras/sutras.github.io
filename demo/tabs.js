module.exports = {
  title: '选项卡/标签页',
  dom: `<div class="tabs" id="tabs">
  <div class="tabs-header">
    <div class="tabs-label">黄猿</div>
    <div class="tabs-label">藤虎</div>
    <div class="tabs-label">绿牛</div>
    <div class="tabs-label">青雉</div>
    <div class="tabs-label">赤犬</div>
    <div class="tabs-label">泽法</div>
    <div class="tabs-label">战国</div>
    <div class="tabs-label">空</div>
  </div>
  <div class="tabs-body">
    <div class="tabs-panel">
      波鲁萨利诺。
      简介：现任海军本部大将，自然系闪光果实能力者。拥有强大的剑术和踢技以及射击能力。刚加入海军之时，就已实力高强，被称为怪物。
      性格：外柔内刚，做事不认真。战斗时喜欢调侃对手，见到谁都说“好可怕啊，还经常故意做出示弱的样子，但其实并不把对手当回事。
      正义观：模棱两可的正义
    </div>
    <div class="tabs-panel">
      一生。
      简介：现任海军本部大将，超人系重力果实能力者。两年间通过世界征兵选取的新人大将，被称为强的没边的怪物。
      性格：非常和气，即使是对敌人，也一样用敬称。是非分明，欣赏具有正义感的人。
      正义观：仁义的正义
    </div>
    <div class="tabs-panel">
      真名未知。
      简介：现任海军本部大将。两年间通过世界征兵选取的新人大将，被称为强的没边的怪物。
    </div>
    <div class="tabs-panel">
      库赞。
      两年前曾任海军本部大将，之后退出海军。自然系冰冻果实能力者。
      正义观：悠闲的正义
    </div>
    <div class="tabs-panel">
      萨卡斯基。
      两年前曾任海军本部大将，之后升任海军本部元帅。自然系岩浆果实能力者。
      正义观：彻底的正义
    </div>
    <div class="tabs-panel">
      人称“黑腕”泽法、“不杀”大将、“Z”。十多年前曾任海军本部大将，之后退出海军，自己建立了NEO海军。
    </div>
    <div class="tabs-panel">
      人称“佛之战国”、“智将”战国，十多年前曾任海军本部大将，之后升任海军本部元帅，现退位为海军本部大督查。动物系幻兽种人人果实大佛形态能力者。
      正义观：君临天下的正义
    </div>
    <div class="tabs-panel">
      人称“钢骨”空，数十年前曾任海军本部大将，之后升任海军本部元帅，现任世界政府全军总帅。
    </div>
  </div>
</div>`,
  script: `<script>
  new galaxy.Tabs('#tabs', {
    labels: '.tabs-label',
    panels: '.tabs-panel',
    triggerType: 'mouseenter'
  });
</script>`
};