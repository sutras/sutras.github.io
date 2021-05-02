module.exports = {
  title: 'Tabs',
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
      key: 'panels',
      default: null,
      explain: '面板元素或选择器'
    },
    {
      key: 'instant',
      default: true,
      explain: '切换时，如果上一个动画还没有过渡完，立即完成上一次动画并开始新的动画。'
    },
    {
      key: 'triggerType',
      default: 'click',
      explain: 'labels触发事件的类型：可选\'click\', \'mouseenter\''
    },
    {
      key: 'triggerDelay',
      default: 150,
      explain: '当triggerType为\'mouseenter\'时，为避免无意间滑动鼠标导致展开折叠'
    },
    {
      key: 'duration',
      default: 300,
      explain: '滑块切换持续时间，单位毫秒'
    },
    {
      key: 'easing',
      default: 'easeInOutQuad',
      explain: '缓动公式'
    },
    {
      key: 'activeIndex',
      default: 0,
      explain: '默认活动滑块的下标'
    },
    {
      key: 'labelActiveClass',
      default: 'galaxy-label-active',
      explain: '当前活动的标签元素添加的类名'
    },
    {
      key: 'panelActiveClass',
      default: 'galaxy-panel-active',
      explain: '当前活动的面板元素添加的类名'
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
    },
    {
      name: 'goto(index)',
      explain: '切换到指定下标的面板'
    }
  ],
  properties: [
    {
      name: 'el',
      explain: '容器元素'
    },
    {
      name: 'params',
      explain: '合并后的配置选项'
    },
    {
      name: 'passedParams',
      explain: '传递的配置选项'
    },
    {
      name: 'labels',
      explain: '标签元素'
    },
    {
      name: 'panels',
      explain: '面板元素'
    },
    {
      name: 'activeIndex',
      explain: '当前活动的面板的下标'
    },
  ]
};