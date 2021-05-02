module.exports = {
  title: 'GotoTop',
  options: [
    {
      key: 'init',
      default: true,
      explain: '实例化后是否立即初始化'
    },
    {
      key: 'togglePoint',
      default: 600,
      explain: '隐藏和显示的临界点高度，单位像素'
    },
    {
      key: 'duration',
      default: 400,
      explain: '滚到顶部需要的时间'
    },
    {
      key: 'fadeDuration',
      default: 300,
      explain: 'el淡入淡出需要的时间'
    },
    {
      key: 'threshold',
      default: 25,
      explain: '触发滚动事件的阈值'
    }
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