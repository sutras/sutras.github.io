import{r as u,j as l,F as r,a as s,X as o,M as c,B as i,R as a}from"./index-b8e75f22.js";import{D as k}from"./Demo-3b19c6f8.js";import"./index.es-833d515d.js";const d=[{anchor:"A",provinces:["安徽省","澳门特别行政区"]},{anchor:"B",provinces:["北京市"]},{anchor:"C",provinces:["重庆市"]},{anchor:"F",provinces:["福建省"]},{anchor:"G",provinces:["甘肃省","广东省","广西壮族自治区","贵州省"]},{anchor:"H",provinces:["海南省","河北省","河南省","黑龙江省","湖北省","湖南省"]},{anchor:"J",provinces:["吉林省","江苏省","江西省"]},{anchor:"L",provinces:["辽宁省"]},{anchor:"N",provinces:["内蒙古自治区","宁夏回族自治区"]},{anchor:"Q",provinces:["青海省"]},{anchor:"S",provinces:["山东省","山西省","陕西省","上海市","四川省"]},{anchor:"T",provinces:["台湾省","天津市"]},{anchor:"X",provinces:["西藏自治区","香港特别行政区","新疆维吾尔自治区"]},{anchor:"Y",provinces:["云南省"]},{anchor:"Z",provinces:["浙江省"]}];function e(){const t=u.useRef();return l(r,{children:[s(o,{offset:60,onChange:n=>{console.log("activeKey: ",n)},ref:t,children:d.map(n=>s(o.Item,{title:n.anchor,children:s(c.Group,{children:n.provinces.map(p=>s(c,{title:p},p))})},n.anchor))}),s("br",{}),s(i,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.scrollTo("G")},children:"scrollTo G"})]})}const h={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IndexBar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> IndexBarRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> indexList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'A'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'安徽省'</span><span class="token punctuation">,</span> <span class="token string">'澳门特别行政区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'B'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'北京市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'C'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'重庆市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'F'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'福建省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'G'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'甘肃省'</span><span class="token punctuation">,</span> <span class="token string">'广东省'</span><span class="token punctuation">,</span> <span class="token string">'广西壮族自治区'</span><span class="token punctuation">,</span> <span class="token string">'贵州省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'H'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'海南省'</span><span class="token punctuation">,</span> <span class="token string">'河北省'</span><span class="token punctuation">,</span> <span class="token string">'河南省'</span><span class="token punctuation">,</span> <span class="token string">'黑龙江省'</span><span class="token punctuation">,</span> <span class="token string">'湖北省'</span><span class="token punctuation">,</span> <span class="token string">'湖南省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'J'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'吉林省'</span><span class="token punctuation">,</span> <span class="token string">'江苏省'</span><span class="token punctuation">,</span> <span class="token string">'江西省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'L'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'辽宁省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'N'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'内蒙古自治区'</span><span class="token punctuation">,</span> <span class="token string">'宁夏回族自治区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'Q'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'青海省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'S'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'山东省'</span><span class="token punctuation">,</span> <span class="token string">'山西省'</span><span class="token punctuation">,</span> <span class="token string">'陕西省'</span><span class="token punctuation">,</span> <span class="token string">'上海市'</span><span class="token punctuation">,</span> <span class="token string">'四川省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'T'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'台湾省'</span><span class="token punctuation">,</span> <span class="token string">'天津市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'X'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'西藏自治区'</span><span class="token punctuation">,</span> <span class="token string">'香港特别行政区'</span><span class="token punctuation">,</span> <span class="token string">'新疆维吾尔自治区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'Y'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'云南省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'Z'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'浙江省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> indexBarRef <span class="token operator">=</span> useRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBarRef</span></span><span class="token punctuation">></span></span><span class="token plain-text">()

  const handleChange = (activeKey) => </span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'activeKey: '</span><span class="token punctuation">,</span> activeKey<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBar</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>indexBarRef<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>indexList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBar.Item</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>anchor<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>anchor<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>provinces<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">province</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>province<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>province<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IndexBar.Item</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IndexBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> indexBarRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token string">'G'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        scrollTo G
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};e.doc=h;function m(){return a.createElement("div",{className:"doc-content"},a.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="indexbar-suo-yin-lan">IndexBar 索引栏<a class="doc-anchor" href="#indexbar-suo-yin-lan">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>用于列表分类展示和索引定位。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> IndexBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),a.createElement("section",{className:"doc-section"},a.createElement(k,null,e)),a.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="indexbarprops">IndexBarProps<a class="doc-anchor" href="#indexbarprops">#</a></h3>
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
<td>defaultActiveKey</td>
<td>初始化时当前索引项的 <code>key</code></td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>当前索引项变化时触发</td>
<td>(key: number | string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>initialScroll</td>
<td>是否在初始化时定位当前索引项</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>索引项粘性定位时距离顶部的偏移量</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>anchorClass</td>
<td>索引项锚点元素的类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>anchorStyle</td>
<td>索引项锚点元素的样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="indexbarref">IndexBarRef<a class="doc-anchor" href="#indexbarref">#</a></h3>
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
<td>scrollTo</td>
<td>定位到指定 <code>key</code> 的索引项</td>
<td>(key: number | string) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="indexbaritemprops">IndexBarItemProps<a class="doc-anchor" href="#indexbaritemprops">#</a></h3>
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
<td>title</td>
<td>索引项的标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>key</td>
<td>对应 <code>activeKey</code></td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>anchorClass</td>
<td>索引项锚点元素的类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>anchorStyle</td>
<td>索引项锚点元素的样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-index-bar-anchor-padding</span><span class="token punctuation">:</span> 5px 16px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-anchor-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-100<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-index-bar-nav-z-index</span><span class="token punctuation">:</span> 1010<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-padding</span><span class="token punctuation">:</span> 0 5px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-item-font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-item-padding</span><span class="token punctuation">:</span> 3px 5px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-item-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-item-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-nav-item-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-index-bar-hint-width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-right</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-border-radius</span><span class="token punctuation">:</span> 100px 100px 0 100px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-mask<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-index-bar-hint-text-font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-text-line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-text-font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">--s-index-bar-hint-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-s-theme='dark'] </span><span class="token punctuation">{</span>
  <span class="token property">--s-index-bar-anchor-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{m as default};
