import{a as n,F as e,R as s}from"./index-093297df.js";import{E as t,x as o,D as l}from"./index-c0b255c8.js";import"./index-2e4736b8.js";import"./index.es-471f4c94.js";function c(){return n(e,{children:n(t,{offset:50,children:[{anchor:"A",provinces:["安徽省","澳门特别行政区"]},{anchor:"B",provinces:["北京市"]},{anchor:"C",provinces:["重庆市"]},{anchor:"F",provinces:["福建省"]},{anchor:"G",provinces:["甘肃省","广东省","广西壮族自治区","贵州省"]},{anchor:"H",provinces:["海南省","河北省","河南省","黑龙江省","湖北省","湖南省"]},{anchor:"J",provinces:["吉林省","江苏省","江西省"]},{anchor:"L",provinces:["辽宁省"]},{anchor:"N",provinces:["内蒙古自治区","宁夏回族自治区"]},{anchor:"Q",provinces:["青海省"]},{anchor:"S",provinces:["山东省","山西省","陕西省","上海市","四川省"]},{anchor:"T",provinces:["台湾省","天津市"]},{anchor:"X",provinces:["西藏自治区","香港特别行政区","新疆维吾尔自治区"]},{anchor:"Y",provinces:["云南省"]},{anchor:"Z",provinces:["浙江省"]}].map(a=>n(t.Item,{name:a.anchor,children:n(o.Group,{children:a.provinces.map(p=>n(o,{title:p},p))})},a.anchor))})})}const u={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IndexBar<span class="token punctuation">,</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBar</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>indexList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBar.Item</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>anchor<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>anchor<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>provinces<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">province</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>province<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>province<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IndexBar.Item</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IndexBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};c.doc=u;function h(){return s.createElement("div",{className:"doc-content"},s.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="indexbar-suo-yin-lan">IndexBar 索引栏<a class="doc-anchor" href="#indexbar-suo-yin-lan">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>用于列表分类展示和索引定位。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> IndexBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),s.createElement("section",{className:"doc-section"},s.createElement(l,null,c)),s.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="indexbarprops">IndexBarProps<a class="doc-anchor" href="#indexbarprops">#</a></h3>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="scss">SCSS<a class="doc-anchor" href="#scss">#</a></h3>
<pre class="language-scss"><code class="language-scss">
</code></pre>
</div>`}}))}export{h as default};
