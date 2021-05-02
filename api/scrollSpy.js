module.exports = {
  title: 'ScrollSpy',
  options: [
    {
      key: 'init',
      default: true,
      explain: '实例化后是否立即初始化'
    },
    {
      key: 'labels',
      default: null,
      explain: '标签元素或选择器'
    },
    {
      key: 'scrollBox',
      default: '%window%',
      explain: '被监听滚动的盒子'
    },
    {
      key: 'offsetTop',
      default: 1,
      explain: '偏移顶部距离，默认值为1是为避免有些浏览器定位到hash时，元素与浏览器顶部仍然有一个像素的距离导致无法切换'
    },
    {
      key: 'threshold',
      default: 25,
      explain: '触发滚动事件的阈值'
    },
    {
      key: 'activeClass',
      default: 'galaxy-label-active',
      explain: '当前活动的标签元素添加的类名'
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