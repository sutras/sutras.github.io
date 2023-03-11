import{R as n}from"./index-b9ddf759.js";import"./index.es-5a450476.js";import"./index-2e4736b8.js";function t(){return n.createElement("div",{className:"doc-content"},n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="style-yang-shi">Style 样式<a class="doc-anchor" href="#style-yang-shi">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>样式。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Style <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="props">Props<a class="doc-anchor" href="#props">#</a></h3>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token comment">// # 灰度值</span>
  <span class="token property">--s-white</span><span class="token punctuation">:</span> <span class="token variable">#{$s-white}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-100</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-100}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-200</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-200}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-300</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-300}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-400</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-400}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-500</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-500}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-600</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-600}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-700</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-700}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-800</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-800}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-900</span><span class="token punctuation">:</span> <span class="token variable">#{$s-gray-900}</span><span class="token punctuation">;</span>
  <span class="token property">--s-black</span><span class="token punctuation">:</span> <span class="token variable">#{$s-black}</span><span class="token punctuation">;</span>

  <span class="token comment">// # 灰度值 rgb</span>
  <span class="token property">--s-white-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-white</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-100-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-100</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-200-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-200</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-300-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-300</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-400-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-400</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-500-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-500</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-600-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-600</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-700-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-700</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-800-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-800</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-gray-900-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-gray-900</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-black-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-black</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// # 基础颜色</span>
  <span class="token property">--s-blue</span><span class="token punctuation">:</span> <span class="token variable">#{$s-blue}</span><span class="token punctuation">;</span>
  <span class="token property">--s-indigo</span><span class="token punctuation">:</span> <span class="token variable">#{$s-indigo}</span><span class="token punctuation">;</span>
  <span class="token property">--s-purple</span><span class="token punctuation">:</span> <span class="token variable">#{$s-purple}</span><span class="token punctuation">;</span>
  <span class="token property">--s-pink</span><span class="token punctuation">:</span> <span class="token variable">#{$s-pink}</span><span class="token punctuation">;</span>
  <span class="token property">--s-red</span><span class="token punctuation">:</span> <span class="token variable">#{$s-red}</span><span class="token punctuation">;</span>
  <span class="token property">--s-orange</span><span class="token punctuation">:</span> <span class="token variable">#{$s-orange}</span><span class="token punctuation">;</span>
  <span class="token property">--s-yellow</span><span class="token punctuation">:</span> <span class="token variable">#{$s-yellow}</span><span class="token punctuation">;</span>
  <span class="token property">--s-green</span><span class="token punctuation">:</span> <span class="token variable">#{$s-green}</span><span class="token punctuation">;</span>
  <span class="token property">--s-teal</span><span class="token punctuation">:</span> <span class="token variable">#{$s-teal}</span><span class="token punctuation">;</span>
  <span class="token property">--s-cyan</span><span class="token punctuation">:</span> <span class="token variable">#{$s-cyan}</span><span class="token punctuation">;</span>

  <span class="token comment">// # 基础颜色 rgb</span>
  <span class="token property">--s-blue-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-blue</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-indigo-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-indigo</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-purple-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-purple</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-pink-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-pink</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-red-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-red</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-orange-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-orange</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-yellow-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-yellow</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-green-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-green</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-teal-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-teal</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--s-cyan-rgb</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">extractRGB</span><span class="token punctuation">(</span><span class="token variable">$s-cyan</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// # 主题色</span>
  <span class="token property">--s-primary</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-success</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-green<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-info</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-cyan<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-warning</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-danger</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-red<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-light</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-100<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-dark</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 主题色 rgb</span>
  <span class="token property">--s-primary-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-blue-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-success-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-green-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-info-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-cyan-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-warning-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-yellow-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-danger-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-red-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-light-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-100-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-dark-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 灰度场景色</span>
  <span class="token property">--s-body-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-body-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-200<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-100<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-black<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-200<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 灰度场景色 rgb</span>
  <span class="token property">--s-body-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-body-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-200-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-100-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-black-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-border-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-active-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-200-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 圆角</span>
  <span class="token property">--s-rounded-xs</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">--s-rounded-sm</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">--s-rounded</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">--s-rounded-lg</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-rounded-xl</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--s-rounded-full</span><span class="token punctuation">:</span> 9999px<span class="token punctuation">;</span>

  <span class="token comment">// # 字体</span>
  <span class="token property">--s-font-sans</span><span class="token punctuation">:</span> system-ui<span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> <span class="token string">'Segoe UI'</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span>
    Arial<span class="token punctuation">,</span> <span class="token string">'Noto Sans'</span><span class="token punctuation">,</span> <span class="token string">'Liberation Sans'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">'Apple Color Emoji'</span><span class="token punctuation">,</span>
    <span class="token string">'Segoe UI Emoji'</span><span class="token punctuation">,</span> <span class="token string">'Segoe UI Symbol'</span><span class="token punctuation">,</span> <span class="token string">'Noto Color Emoji'</span><span class="token punctuation">;</span>
  <span class="token property">--s-font-serif</span><span class="token punctuation">:</span> ui-serif<span class="token punctuation">,</span> Georgia<span class="token punctuation">,</span> Cambria<span class="token punctuation">,</span> <span class="token string">'Times New Roman'</span><span class="token punctuation">,</span> Times<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
  <span class="token property">--s-font-mono</span><span class="token punctuation">:</span> SFMono-Regular<span class="token punctuation">,</span> Menlo<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> Consolas<span class="token punctuation">,</span> <span class="token string">'Liberation Mono'</span><span class="token punctuation">,</span>
    <span class="token string">'Courier New'</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>

  <span class="token comment">// # 字号</span>
  <span class="token property">--s-text-xs</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-text-sm</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--s-text-base</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--s-text-lg</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">--s-text-xl</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">--s-text-2xl</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>

  <span class="token comment">// # 字重</span>
  <span class="token property">--s-font-bold</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
  <span class="token property">--s-font-normal</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">--s-font-light</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>

  <span class="token comment">// # 行高</span>
  <span class="token property">--s-leading-none</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">--s-leading-tight</span><span class="token punctuation">:</span> 1.25<span class="token punctuation">;</span>
  <span class="token property">--s-leading-snug</span><span class="token punctuation">:</span> 1.375<span class="token punctuation">;</span>
  <span class="token property">--s-leading-normal</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">--s-leading-relaxed</span><span class="token punctuation">:</span> 1.625<span class="token punctuation">;</span>
  <span class="token property">--s-leading-loose</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>

  <span class="token comment">// # 阴影</span>
  <span class="token property">--s-shadow-sm</span><span class="token punctuation">:</span> 0 1px 3px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 40%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-shadow</span><span class="token punctuation">:</span> 0 2px 6px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-shadow-lg</span><span class="token punctuation">:</span> 0 3px 12px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 8%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-shadow-right</span><span class="token punctuation">:</span> 1px 0 3px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 遮罩</span>
  <span class="token property">--s-mask</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-mask-dark</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 禁用状态</span>
  <span class="token property">--s-disabled-pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">--s-disabled-opacity</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">;</span>
  <span class="token property">--s-disabled-cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>
  <span class="token property">--s-disabled-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-deemphasis-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-disabled-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 按下状态</span>
  <span class="token property">--s-active-opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>

  <span class="token comment">// # 加载状态</span>
  <span class="token property">--s-loading-pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">--s-loading-opacity</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">;</span>
  <span class="token property">--s-loading-cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>

  <span class="token comment">// # 过渡时间</span>
  <span class="token property">--s-duration-slow</span><span class="token punctuation">:</span> 500ms<span class="token punctuation">;</span>
  <span class="token property">--s-duration</span><span class="token punctuation">:</span> 300ms<span class="token punctuation">;</span>
  <span class="token property">--s-duration-fast</span><span class="token punctuation">:</span> 150ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-s-theme='dark'] </span><span class="token punctuation">{</span>
  <span class="token comment">// # 灰度场景色</span>
  <span class="token property">--s-body-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-body-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-400<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-800<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 灰度场景色 rgb</span>
  <span class="token property">--s-body-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-body-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-400-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-secondary-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-tertiary-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-emphasis-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-800-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-deemphasis-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-border-color-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-active-bg-rgb</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700-rgb<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// # 阴影</span>
  <span class="token property">--s-shadow-sm</span><span class="token punctuation">:</span> 0 1px 3px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 75%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-shadow</span><span class="token punctuation">:</span> 0 2px 6px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 15%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-shadow-lg</span><span class="token punctuation">:</span> 0 3px 12px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-shadow-right</span><span class="token punctuation">:</span> 1px 0 3px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{t as default};
