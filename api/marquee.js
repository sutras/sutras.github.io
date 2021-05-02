module.exports = {
  title: 'Marquee',
  options: [
    {
      key: 'init',
      default: true,
      explain: '实例化后是否立即初始化'
    },
    {
      key: 'interval',
      default: 20,
      explain: '每一次位移的时间间隔'
    },
    {
      key: 'downInterval',
      default: 5,
      explain: '鼠标按下时的interval值'
    },
    {
      key: 'offset',
      default: 1,
      explain: 'wrapper每一次位移的偏移量，单位px'
    },
    {
      key: 'downOffset',
      default: null,
      explain: '鼠标按下时的offset值，如果不设置，默认等同于offset'
    },
    {
      key: 'direction',
      default: 'vertical',
      explain: '运动方向，可选\'vertical\', \'horizontal\''
    },
    {
      key: 'translate',
      default: 0,
      explain: '初始化时的位移'
    },
    {
      key: 'hoverPause',
      default: true,
      explain: '鼠标移上el是否停止'
    },
    {
      key: 'navigation',
      explain: '前后按钮导航',
      children: [
        {
          key: 'prevEl',
          default: null,
          explain: '上一个按钮元素或选择器'
        },
        {
          key: 'nextEl',
          default: null,
          explain: '下一个按钮元素或选择器'
        },
        {
          key: 'downClass',
          default: 'galaxy-button-down',
          explain: '鼠标按下时添加到按钮元素上的类名'
        },
      ]
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
      name: 'translateTo(value)',
      explain: '移动到指定像素的位置'
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
    },
    {
      name: 'translateTo(value)',
      explain: '移动到指定位置'
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
      name: 'wrapper',
      explain: '包裹元素'
    },
    {
      name: 'slideList',
      explain: '滑块元素列表'
    },
    {
      name: 'translate',
      explain: '移动的距离'
    },
  ]
};