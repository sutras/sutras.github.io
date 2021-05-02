module.exports = {
  title: 'ScrollFixed',
  options: [
    {
      key: 'init',
      default: true,
      explain: '实例化后是否立即初始化'
    },
    {
      key: 'fixedBox',
      default: null,
      explain: '用于固定的盒子，默认为el的第一个子元素'
    },,
    {
      key: 'fixedClass',
      default: 'galaxy-fixed',
      explain: 'fixedBox被固定时添加的类名'
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