module.exports = {
  title: 'Menu',
  options: [
    {
      key: 'init',
      default: true,
      explain: '实例化后是否立即初始化'
    },
    {
      key: 'menuItems',
      default: null,
      explain: '菜单项元素或选择器'
    },
    {
      key: 'subMenu',
      default: null,
      explain: '子菜单元素或选择器'
    },
    {
      key: 'effect',
      default: 'fade',
      explain: '菜单项显示/隐藏效果，可选\'fade\', \slide\''
    },
    {
      key: 'activeClass',
      default: 'galaxy-menu-item-active',
      explain: '当前活动菜单项添加的类名'
    },
    {
      key: 'duration',
      default: 300,
      explain: '切换持续时间，单位毫秒'
    },
    {
      key: 'showDelay',
      default: 50,
      explain: '延迟显示的时间，单位毫秒，为避免短时间类重复多次切换菜单'
    },
    {
      key: 'hideDelay',
      default: 50,
      explain: '延迟隐藏的时间，单位毫秒，可在彻底隐藏前把鼠标移到菜单项上阻止隐藏'
    },
  ],
  methods: [
    {
      name: 'init()',
      explain: '初始化实例'
    },
    {
      name: 'destroy()',
      explain: '销毁实例'
    }
  ]
};