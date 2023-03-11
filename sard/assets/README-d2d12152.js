import{a as s,F as u,j as t,r as k,R as p}from"./index-b9ddf759.js";import{S as n,B as d,b as y,D as l}from"./index-cef2ca44.js";import"./index-2e4736b8.js";import{S as m}from"./index-797f93d5.js";import"./index.es-5a450476.js";function g(){return s(u,{children:t(n,{className:"demo-swiper",showDots:!0,children:[s(n.Item,{className:"demo-swiper-item",children:"item1"}),s(n.Item,{className:"demo-swiper-item",children:"item2"}),s(n.Item,{className:"demo-swiper-item",children:"item3"})]})})}const S={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper<span class="token punctuation">"</span></span> <span class="token attr-name">showDots</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function w(){const e=k.useRef(null),r=()=>{var a;(a=e.current)==null||a.prev()},c=()=>{var a;(a=e.current)==null||a.next()},[i,o]=k.useState(0);return t(u,{children:[t("div",{style:{marginBottom:5},children:[s(d,{onClick:r,children:"prev"})," ",s(d,{onClick:c,children:"next"})," ",s(y,{style:{display:"inline-flex",verticalAlign:"middle",width:70},type:"number",value:i,onChange:a=>o(+a)})," ",s(d,{onClick:()=>{var a;(a=e.current)==null||a.swipeTo(i||0)},children:"swipeTo"})]}),t(n,{ref:e,showDots:!0,className:"demo-swiper",onChange:a=>{o(a)},children:[s(n.Item,{className:"demo-swiper-item",children:"item1"}),s(n.Item,{className:"demo-swiper-item",children:"item2"}),s(n.Item,{className:"demo-swiper-item",children:"item3"})]})]})}const E={doc:`<h3>命令</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper<span class="token punctuation">,</span> SwiperRef<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> swiperRef <span class="token operator">=</span> useRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SwiperRef</span></span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const handlePrev = () => </span><span class="token punctuation">{</span>
    swiperRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">
  const handleNext = () => </span><span class="token punctuation">{</span>
    swiperRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">

  const [index, setIndex] = useState</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span><span class="token plain-text">(0)

  const handleSwipeTo = () => </span><span class="token punctuation">{</span>
    swiperRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">swipeTo</span><span class="token punctuation">(</span>index <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">
  const handleChange = (index: number) => </span><span class="token punctuation">{</span>
    <span class="token function">setIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handlePrev<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">prev</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleNext<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">next</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'inline-flex'</span><span class="token punctuation">,</span> <span class="token literal-property property">verticalAlign</span><span class="token operator">:</span> <span class="token string">'middle'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSwipeTo<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">swipeTo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span>
        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>swiperRef<span class="token punctuation">}</span></span>
        <span class="token attr-name">showDots</span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function h(){return s(u,{children:t(n,{className:"demo-swiper",showDots:!0,vertical:!0,children:[s(n.Item,{className:"demo-swiper-item",children:"item1"}),s(n.Item,{className:"demo-swiper-item",children:"item2"}),s(n.Item,{className:"demo-swiper-item",children:"item3"})]})})}const F={doc:`<h3>垂直</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper<span class="token punctuation">"</span></span> <span class="token attr-name">showDots</span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function v(){const[e,r]=k.useState(2e3),[c,i]=k.useState(500);return t(u,{children:[t("div",{children:[t("label",{children:["duration: ",c]}),s(m,{min:500,max:2e3,value:c,onChange:o=>i(o)})]}),t("div",{style:{marginBottom:5},children:[t("label",{children:["interval: ",e]}),s(m,{min:2e3,max:8e3,value:e,onChange:o=>r(o)})]}),t(n,{className:"demo-swiper",autoplay:!0,duration:c,interval:e,showDots:!0,children:[s(n.Item,{className:"demo-swiper-item",children:"item1"}),s(n.Item,{className:"demo-swiper-item",children:"item2"}),s(n.Item,{className:"demo-swiper-item",children:"item3"})]})]})}const f={doc:`<h3>自动播放</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper<span class="token punctuation">,</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>interval<span class="token punctuation">,</span> setInterval$<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>duration<span class="token punctuation">,</span> setDuration<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">duration: </span><span class="token punctuation">{</span>duration<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Slider</span></span>
          <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2000</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>duration<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setDuration</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">interval: </span><span class="token punctuation">{</span>interval<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Slider</span></span>
          <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2000</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8000</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>interval<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setInterval$</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper<span class="token punctuation">"</span></span>
        <span class="token attr-name">autoplay</span>
        <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>duration<span class="token punctuation">}</span></span>
        <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>interval<span class="token punctuation">}</span></span>
        <span class="token attr-name">showDots</span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function x(){return s(u,{children:t(n,{className:"demo-swiper",showDots:!0,loop:!0,children:[s(n.Item,{className:"demo-swiper-item",children:"item1"}),s(n.Item,{className:"demo-swiper-item",children:"item2"}),s(n.Item,{className:"demo-swiper-item",children:"item3"})]})})}const b={doc:`<h3>循环滑动</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper<span class="token punctuation">"</span></span> <span class="token attr-name">showDots</span> <span class="token attr-name">loop</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-swiper-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">item3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};g.doc=S;w.doc=E;h.doc=F;v.doc=f;x.doc=b;function q(){return p.createElement("div",{className:"doc-content"},p.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="swiper-hua-kuai-shi-tu-rong-qi">Swiper 滑块视图容器<a class="doc-anchor" href="#swiper-hua-kuai-shi-tu-rong-qi">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>滑动切换视图容器，可运用于 banner 轮播图等场景。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),p.createElement("section",{className:"doc-section"},p.createElement(l,null,g),p.createElement(l,null,w),p.createElement(l,null,h),p.createElement(l,null,v),p.createElement(l,null,x)),p.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="swiperprops">SwiperProps<a class="doc-anchor" href="#swiperprops">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultIndex</td>
<td>初始位置索引值</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>autoplay</td>
<td>是否自动切换</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>interval</td>
<td>自动切换的间隔，单位为 ms</td>
<td>boolean</td>
<td>3000</td>
</tr>
<tr>
<td>duration</td>
<td>动画时长，单位为 ms</td>
<td>number</td>
<td>400</td>
</tr>
<tr>
<td>loop</td>
<td>是否循环滑动</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直滑动</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>damping</td>
<td>阻尼系数</td>
<td>number</td>
<td>3</td>
</tr>
<tr>
<td>showDots</td>
<td>是否显示指示器</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>dots</td>
<td>自定义显示指示器，<code>count</code> 滑块总数，<code>activeIndex</code> 当前滑块索引</td>
<td>(count: number, activeIndex: number) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>dotColor</td>
<td>自定义指示器颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>dotActiveColor</td>
<td>自定义活动指示器颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>dotClickable</td>
<td>是否可点击指示器进行切换</td>
<td>string</td>
<td>false</td>
</tr>
<tr>
<td>touchable</td>
<td>是否可进行触摸操作</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>onChange</td>
<td>切换时触发</td>
<td>(index: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onAnimateStart</td>
<td>动画开始时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onAnimateEnd</td>
<td>动画结束时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onTouchStart</td>
<td>触摸开始时触发</td>
<td>(event: StrikePanEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onTouchMove</td>
<td>触摸移动时触发</td>
<td>(event: StrikePanEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onTouchEnd</td>
<td>触摸结束时触发</td>
<td>(event: StrikePanEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="swiperitemprops">SwiperItemProps<a class="doc-anchor" href="#swiperitemprops">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>onClick</td>
<td>点击时触发</td>
<td>(event: React.MouseEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="swiper-fang-fa">Swiper 方法<a class="doc-anchor" href="#swiper-fang-fa">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>swipeTo</td>
<td>切换到指定下标的轮播图</td>
<td>(index: number, animated?: boolean) =&gt; void</td>
</tr>
<tr>
<td>prev</td>
<td>切换到上一个轮播图</td>
<td>(animated?: boolean) =&gt; void</td>
</tr>
<tr>
<td>next</td>
<td>切换到下一个轮播图</td>
<td>(animated?: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-swiper-dots-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-swiper-dot-width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-swiper-dot-height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-swiper-dot-gap</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-swiper-dot-border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">--s-swiper-dot-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-swiper-dot-active-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{q as default};
