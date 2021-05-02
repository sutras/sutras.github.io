module.exports = {
  title: '回到页面顶部',
  dom: `效果请看页面右下角回到顶部按钮。
<div class="gototop" id="gotoTop">
  <div class="arrow"></div>
</div>`,
  script: `<script>
  new galaxy.GotoTop('#gotoTop', {
    // duration: 2000,
    // fadeDuration: 600
  });
</script>`
};