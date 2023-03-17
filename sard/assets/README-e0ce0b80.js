import{a as n,F as o,V as c,j as u,r as m,B as e,R as s}from"./index-ba304632.js";import{D as p}from"./Demo-5a7b5c0e.js";import"./index.es-526e18cf.js";function l(){return n(o,{children:n(c,{time:1e3*60*60*2})})}const g={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CountDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span> <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function k(){return n(o,{children:n(c,{time:1e3*60*60*2,format:"HH 时 mm 分 ss 秒"})})}const h={doc:`<h3>自定义格式</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CountDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span> <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HH 时 mm 分 ss 秒<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function i(){return n(o,{children:n(c,{time:1e3*60*60*2,format:"HH 时 mm 分 ss 秒 SSS 毫秒",interval:93})})}const v={doc:`<h3>毫秒级别的渲染</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CountDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span>
        <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HH 时 mm 分 ss 秒 SSS 毫秒<span class="token punctuation">"</span></span>
        <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">93</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function r(){return u(o,{children:[n("style",{children:`
          .time-wrap {
            display: flex;
            align-items: center;
          }
          .time {
            padding: 5px;
            background: orange;
            border-radius: 4px;
            color: #000;
          }
          .colon {
            margin: 0 5px;
          }
        `}),n(c,{time:1e3*60*60*2,interval:93,children:a=>u("div",{className:"time-wrap",children:[n("div",{className:"time",children:String(a.hours).padStart(2,"0")}),n("div",{className:"colon",children:":"}),n("div",{className:"time",children:String(a.minutes).padStart(2,"0")}),n("div",{className:"colon",children:":"}),n("div",{className:"time",children:String(a.seconds).padStart(2,"0")})]})})]})}const f={doc:`<h3>自定义样式</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CountDown<span class="token punctuation">,</span> CurrentTime <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token plain-text">
        {\`
          .time-wrap {
            display: flex;
            align-items: center;
          }
          .time {
            padding: 5px;
            background: orange;
            border-radius: 4px;
            color: #000;
          }
          .colon {
            margin: 0 5px;
          }
        \`}
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span> <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">93</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">time</span><span class="token operator">:</span> CurrentTime</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time-wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">String</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>hours<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">String</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>minutes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">String</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>seconds<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CountDown</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function d(){const a=m.useRef(null);return u(o,{children:[n(e,{onClick:()=>{var t;return(t=a.current)==null?void 0:t.start()},children:"开始"})," ",n(e,{onClick:()=>{var t;return(t=a.current)==null?void 0:t.pause()},children:"暂停"})," ",n(e,{onClick:()=>{var t;return(t=a.current)==null?void 0:t.reset()},children:"重置"}),n(c,{ref:a,time:1e3*10,format:"ss:SSS",interval:60,autoStart:!1})]})}const F={doc:`<h3>手动控制</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CountDown<span class="token punctuation">,</span> CountDownRef<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> useRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDownRef</span></span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">开始</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">暂停</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">重置</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span>
        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span>
        <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ss:SSS<span class="token punctuation">"</span></span>
        <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">autoStart</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};l.doc=g;k.doc=h;i.doc=v;r.doc=f;d.doc=F;function y(){return s.createElement("div",{className:"doc-content"},s.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="countdown-dao-ji-shi">CountDown 倒计时<a class="doc-anchor" href="#countdown-dao-ji-shi">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>倒计时的展示 ，以便告知用户在一定时间后可以进行某些操作。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> CountDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),s.createElement("section",{className:"doc-section"},s.createElement(p,null,l),s.createElement(p,null,k),s.createElement(p,null,i),s.createElement(p,null,r),s.createElement(p,null,d)),s.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="countdownprops">CountDownProps<a class="doc-anchor" href="#countdownprops">#</a></h3>
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
<td>children</td>
<td>自定义渲染函数</td>
<td>(time: CurrentTime) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>time</td>
<td>倒计时总时长，单位毫秒</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>autoStart</td>
<td>是否自动开始倒计时</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>format</td>
<td>时间格式</td>
<td>string</td>
<td>'HH:mm:ss'</td>
</tr>
<tr>
<td>interval</td>
<td>倒计时时间改变间隔</td>
<td>number</td>
<td>1000</td>
</tr>
<tr>
<td>onChange</td>
<td>倒计时变化时触发</td>
<td>(time: CurrentTime) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onFinish</td>
<td>倒计时结束时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="countdown-fang-fa">CountDown 方法<a class="doc-anchor" href="#countdown-fang-fa">#</a></h3>
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
<td>start</td>
<td>开始倒计时</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>pause</td>
<td>暂停倒计时</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reset</td>
<td>重置倒计时</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="currenttime-lei-xing">CurrentTime 类型<a class="doc-anchor" href="#currenttime-lei-xing">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>milliseconds</td>
<td>剩余毫秒</td>
<td>number</td>
</tr>
<tr>
<td>seconds</td>
<td>剩余秒数</td>
<td>number</td>
</tr>
<tr>
<td>minutes</td>
<td>剩余分钟</td>
<td>number</td>
</tr>
<tr>
<td>hours</td>
<td>剩余小时</td>
<td>number</td>
</tr>
<tr>
<td>days</td>
<td>剩余天数</td>
<td>number</td>
</tr>
<tr>
<td>total</td>
<td>剩余总时间（单位毫秒）</td>
<td>number</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss">
</code></pre>
</div>`}}))}export{y as default};
