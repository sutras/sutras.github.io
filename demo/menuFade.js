module.exports = {
  title: '菜单 - 淡入淡出',
  dom: `<div class="menu" id="menuFade">
  <div class="menu-item">
    <span class="menu-link">三大灾害 <span class="arrow"></span></span>
    <div class="submenu">
      <a href="javascript:;" class="submenu-item">炎灾·烬</a>
      <a href="javascript:;" class="submenu-item">疫灾·奎因</a>
      <a href="javascript:;" class="submenu-item">旱灾·杰克</a>
    </div>
  </div>
  <div class="menu-item active">
    <span class="menu-link">世界政府三大机构 <span class="arrow"></span></span>
    <div class="submenu">
      <a href="javascript:;" class="submenu-item">司法岛艾尼艾斯大厅</a>
      <a href="javascript:;" class="submenu-item">海军本部</a>
      <a href="javascript:;" class="submenu-item">推进城因佩尔大监狱</a>
    </div>
  </div>
  <div class="menu-item">
    <span class="menu-link">古代兵器 <span class="arrow"></span></span>
    <div class="submenu">
      <a href="javascript:;" class="submenu-item">冥王（布鲁托）</a>
      <a href="javascript:;" class="submenu-item">海王（波塞冬</a>
      <a href="javascript:;" class="submenu-item">天王（乌拉诺斯）</a>
    </div>
  </div>
  <div class="menu-item">
    <a href="javascript:;" class="menu-link">伊姆</a>
  </div>
</div>`,
  script: `<script>
  new galaxy.Menu('#menuFade', {
    menuItems: '.menu-item',
    subMenu: '.submenu',
    activeClass: 'active',
    effect: 'fade',
    duration: 300,
    hideDelay: 50,
    showDelay: 50,
    easing: 'linear'
  });
</script>`
};