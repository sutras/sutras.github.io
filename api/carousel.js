module.exports = {
  title: 'Carousel',
  options: [
    {
      key: 'init',
      default: true,
      explain: '实例化后是否立即初始化'
    },
    {
      key: 'wrapper',
      default: '.galaxy-wrapper',
      explain: '包裹容器'
    },
    {
      key: 'slideList',
      default: null,
      explain: '默认获取wrapper的子元素作为滑块，如果滑块同级有其他元素，可直接指定滑块'
    },
    {
      key: 'effect',
      default: 'fade',
      explain: '滑块切换效果，可选：\'fade\', \'slide\', \'deck\''
    },
    {
      key: 'instant',
      default: true,
      explain: '切换时，如果上一个动画还没有过渡完，立即完成上一次动画并开始新的动画。'
    },
    {
      key: 'resize',
      default: false,
      explain: '改变窗口大小时是否重新调整元素的尺寸'
    },
    {
      key: 'duration',
      default: 500,
      explain: '滑块切换持续时间，单位毫秒'
    },
    {
      key: 'easing',
      default: 'easeInOutQuad',
      explain: '缓动公式'
    },
    {
      key: 'direction',
      default: 'horizontal',
      explain: '滑块切换的轴线，可选：\'horizontal\', \'vertical\''
    },
    {
      key: 'activeClass',
      default: 'galaxy-slide-active',
      explain: '当前活动滑块添加的类名'
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
          key: 'triggerType',
          default: 'click',
          explain: '按钮触发滑块切换的事件类型，可选：\'click\', \'mousedown\', \'mouseup\'等鼠标事件'
        },
        {
          key: 'triggerDelay',
          default: 150,
          explain: '当triggerType为\'mouseover\'或\'mouseenter\'时，未避免不小心滑动导致频繁切换的延迟时间'
        },
        {
          key: 'disabledIfEdge',
          default: false,
          explain: '到达边缘是否禁止切换'
        },
        {
          key: 'disabledClass',
          default: 'galaxy-button-disabled',
          explain: 'disabledIfEdge为true情况下，到达边缘时添加的类名'
        },
        {
          key: 'disabledClass',
          default: 'galaxy-button-disabled',
          explain: 'disabledIfEdge为true情况下，到达边缘时添加的类名'
        },
      ]
    },
    {
      key: 'pagination',
      explain: '分页',
      children: [
        {
          key: 'type',
          default: 'bullets',
          explain: '分页类型，可选：\'bullets\', \'fraction\', \'custom\''
        },
        {
          key: 'triggerType',
          default: 'click',
          explain: 'bullets触发滑块切换的事件类型，可选：\'click\', \'mouseover\', \'mouseenter\', \'mousedown\', \'mouseup\'等鼠标事件，也可传入false来不让bullets控制切换滑块'
        },
        {
          key: 'triggerDelay',
          default: 150,
          explain: '当triggerType为\mouseover\'或\'mouseenter\'时，未避免不小心滑动导致频繁切换的延迟时间'
        },
        {
          key: 'autoPaging',
          default: true,
          explain: '是否自动分页，如果基于现有的DOM作为分页项，可设为false，并使用el选项指定分页项。'
        },
        {
          key: 'bulletEl',
          default: null,
          explain: '用于非自动分页指定bullets元素'
        },
        {
          key: 'renderBullets',
          default: function(index, bulletClass) {
            return '<span class="${bulletClass}"></span>';
          },
          explain: '自定义bullets的渲染'
        },
        {
          key: 'renderFraction',
          default: function(currentClass, totalClass) {
            return '<span class="${currentClass}"></span> / <span class="${totalClass}"></span>';
          },
          explain: '自定义bullets的渲染'
        },
        {
          key: '自定义fraction的渲染',
          default: function(host, current, total) {
            return current + ' / ' + total;
          },
          explain: '自定义渲染'
        },
        {
          key: 'bulletClass',
          default: 'galaxy-pagination-bullet',
          explain: 'bullet类名'
        },
        {
          key: 'bulletActiveClass',
          default: 'galaxy-pagination-bullet-active',
          explain: '活动的bullet类名'
        },
        {
          key: 'currentClass',
          default: 'galaxy-pagination-current',
          explain: 'fraction类型下current类名'
        },
        {
          key: 'totalClass',
          default: 'galaxy-pagination-total',
          explain: 'fraction类型下total类名'
        }
      ]
    },
    {
      key: 'autoplay',
      explain: '自动播放',
      children: [
        {
          key: 'enabled',
          default: false,
          explain: '是否启用'
        },
        {
          key: 'delay',
          default: 3000,
          explain: '切换到下一滑块的间隔时间'
        },
        {
          key: 'progress',
          default: null,
          explain: '可配置一个接收delay进度的函数'
        },
        {
          key: 'interval',
          default: 16.667,
          explain: '触发progress函数的时间间隔'
        },
        {
          key: 'hoverPause',
          default: true,
          explain: '鼠标移上el是否暂停自动播放'
        },
      ]
    },
    {
      key: 'effectFade',
      explain: '淡入淡出效果',
      children: [
        {
          key: 'fadeInDuration',
          default: null,
          explain: '淡入的时间，默认为duration'
        },
        {
          key: 'fadeOutDuration',
          default: null,
          explain: '淡出的时间，默认为duration'
        },
      ]
    },
    {
      key: 'effectSlide',
      explain: '滑动效果',
      children: [
        {
          key: 'loop',
          default: false,
          explain: '是否循环切换'
        },
        {
          key: 'visibleSlides',
          default: 1,
          explain: '可视滑块个数'
        },
        {
          key: 'scrolledSlides',
          default: 1,
          explain: '每次滚动的滑块数，不大于可视滑块数'
        },
        {
          key: 'clonedSlides',
          default: 0,
          explain: '前后克隆的滑块数，默认和可视滑块数相同，不可小于可视滑块数'
        },
        {
          key: 'slideIndexAttrName',
          default: 'data-galaxy-slide-index',
          explain: '滑块下标值对应的元素属性名，用于loop模式下'
        },
        {
          key: 'clonedSlideClass',
          default: 'galaxy-cloned-slide',
          explain: '克隆滑块的类名，用于loop模式下'
        },
      ]
    },
    {
      key: 'effectStack',
      explain: '堆叠效果',
      children: [
        {
          key: 'loop',
          default: false,
          explain: '是否循环切换'
        },
        {
          key: 'layer',
          default: 2,
          explain: '堆叠的层数，最少两层'
        },
        {
          key: 'scale',
          default: -.12,
          explain: '逐层缩小比率'
        },
        {
          key: 'scaleEasing',
          default: 'linear',
          explain: '缩放交错动画的滑动公式'
        },
        {
          key: 'changeZIndex',
          default: 'after',
          explain: '在动画开始之前或动画结束之后改变层级，可选: \'before\', \'after\''
        },
        {
          key: 'focusWidth',
          default: null,
          explain: '焦点滑块的宽度'
        },
        {
          key: 'focusHeight',
          default: null,
          explain: '焦点滑块的高度'
        },
        {
          key: 'align',
          default: 'center',
          explain: '层的对齐方式，可选：\'start\', \'center\', \'end\''
        },
        {
          key: 'visibleSlideIndexAttrName',
          default: 'data-visible-slide-index',
          explain: '保存滑块下标属性的键名，左边隐藏的滑块对应值都为0，从左往右可见滑块值递增，右边隐藏滑块值都为可见滑块数加1'
        },
        {
          key: 'slideIndexAttrName',
          default: 'data-galaxy-slide-index',
          explain: '滑块下标值对应的元素属性名，用于loop模式下'
        },
        {
          key: 'clonedSlideClass',
          default: 'galaxy-cloned-slide',
          explain: '克隆滑块的类名，用于loop模式下'
        },
        {
          key: 'switchBySlide',
          default: true,
          explain: '是否可通过操作滑块进行切换'
        },
        {
          key: 'triggerType',
          default: 'click',
          explain: '通过操作滑块进行切换的事件类型'
        },
        {
          key: 'triggerDelay',
          default: 150,
          explain: '当triggerType为\'mouseover\'或\'mouseenter\'时，未避免不小心滑动导致频繁切换的延迟时间'
        },
      ]
    },
    {
      key: 'effectDeck',
      explain: '牌组效果',
      children: [
        {
          key: 'type',
          default: 'draw',
          explain: '牌组类型，可选：\'draw\' - 抽取、\'cover\' - 覆盖'
        },
        {
          key: 'prevEasing',
          default: '',
          explain: '切换到上一个滑块的滑动公式，默认等同于easing'
        },
        {
          key: 'nextEasing',
          default: '',
          explain: '切换到下一个滑块的滑动公式，默认等同于easing'
        },
        {
          key: 'prevDuration',
          default: null,
          explain: '切换到上一个滑块的时间，默认等同于duration'
        },
        {
          key: 'nextDuration',
          default: null,
          explain: '切换到下一个滑块的时间，默认等同于duration'
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
      name: 'goto(index)',
      explain: '切换到指定下标滑块'
    },
    {
      name: 'gotoNext()',
      explain: '切换到下一滑块'
    },
    {
      name: 'gotoNext()',
      explain: '切换到下一滑块'
    },
    {
      name: 'gotoPrev()',
      explain: '切换到上一滑块'
    },
    {
      name: 'gotoFirst()',
      explain: '切换到第一个滑块'
    },
    {
      name: 'gotoLast()',
      explain: '切换到最后一个滑块'
    },
  ],
  events: [
    {
      name: 'init(instance)',
      explain: '初始化后触发'
    },
    {
      name: 'destroy(instance)',
      explain: '实例销毁后触发'
    },
    {
      name: 'resize(instance)',
      explain: '窗口大小调整时执行'
    },
    {
      name: 'sizeChange(instance)',
      explain: '容器元素大小变化时触发'
    },
    {
      name: 'activeIndexChange(instance)',
      explain: '活动滑块下标改变时触发'
    },
    {
      name: 'transitionStart(instance)',
      explain: '过渡开始时触发'
    },
    {
      name: 'transitionEnd(instance)',
      explain: '过渡结束时触发'
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
      name: 'width',
      explain: '容器元素宽度'
    },
    {
      name: 'height',
      explain: '容器元素高度'
    },
    {
      name: 'pages',
      explain: '页码数'
    },
    {
      name: 'activeIndex',
      explain: '活动滑块下标'
    },
    {
      name: 'transitional',
      explain: '是否处于过渡期'
    },
    {
      name: 'previousActiveIndex',
      explain: '上一次活动滑块下标'
    },
    {
      name: 'switchType',
      explain: '切换类型，点击下一页按钮或调用下一页方法时值为\'next\'，点击上一页按钮或调用上一页方法时值为\'prev\'，否则为undefined'
    },
    {
      name: 'lastToFirst',
      explain: '是否从最后一个滑块切换到第一个滑块'
    },
    {
      name: 'firstToLast',
      explain: '是否从第一个滑块切换到最后一个滑块'
    },
  ]
};