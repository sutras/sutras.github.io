import{R as s}from"./index-69dd4e27.js";import{u as a}from"./useCodeTool-595109b3.js";function t(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Icon图标">Icon 图标<a class="doc-anchor" href="#Icon图标">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>基于字体的图标集。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>name</code> 属性指定要显示的图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="尺寸">尺寸<a class="doc-anchor" href="#尺寸">#</a></h3>
<p>设置图标大小。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">24</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="颜色">颜色<a class="doc-anchor" href="#颜色">#</a></h3>
<p>设置图标颜色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="图片类型图标">图片类型图标<a class="doc-anchor" href="#图片类型图标">#</a></h3>
<p>名称里面带有<code>/</code>字符会被当作图片处理。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">48</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>组件库内置有用于其他组件的必须的少量的图标，在实际的应用中，通常需要引入自定义的特定风格的图标库或第三方图标库。</p>
<p>下面演示如何引入 <a href="https://www.iconfont.cn/" target="_blank"><code>iconfont</code></a> 中的图标库，并兼容到 <code>H5</code>、小程序、<code>RN</code>。</p>
<p>以此文档案例使用的 <code>demo-icons</code> 图标库演示。</p>
<ol>
<li>
<p>进入到 <code>iconfont</code> 中的 <code>demo-icons</code> 项目并进行以下配置配置：</p>
<ul>
<li>FontClass/Symbol 前缀: <code>demo-icons-</code></li>
<li>Font Family: <code>demo-icons</code></li>
<li>字体格式: 只勾选 <code>TTF</code></li>
<li>保存</li>
</ul>
</li>
<li>
<p>将图标库下载到本地；</p>
</li>
<li>
<p>我们只需要得到解压后以下三个文件:</p>
<ul>
<li><code>iconfont.json</code>（<code>RN</code> 需要）</li>
<li><code>iconfont.css</code>（<code>H5</code> 和小程序需要）</li>
<li><code>iconfont.ttf</code>（各个端都需要）</li>
</ul>
</li>
<li>
<p>将这三个文件复制到 <code>src/assets/fonts</code> 目录；</p>
</li>
<li>
<p>将 <code>iconfont.css</code> 更名为 <code>iconfont.scss</code>（避免导入 <code>css</code> 文件报错）；</p>
</li>
<li>
<p>在此目录新建一个没有内容的 <code>iconfont.rn.scss</code> 文件（用于<code>RN</code>端导入）；</p>
</li>
<li>
<p>在 <code>app.tsx</code> 文件导入 <code>iconfont.scss</code> 文件:</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token string">'./assets/fonts/iconfont.scss'</span>
</code></pre></div>
<p>至此，在<code>H5</code>和小程序端的配置已完成。下面继续配置 <code>RN</code> 端图标字体的使用。</p>
</li>
<li>
<p>使用 <code>Icon.loadFont</code>导入字体:</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TARO_ENV</span> <span class="token operator">===</span> <span class="token string">'rn'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  Icon<span class="token punctuation">.</span><span class="token function">loadFont</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token string-property property">'demo-icons'</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      glyphs<span class="token operator">:</span> Icon<span class="token punctuation">.</span><span class="token function">parseGlyphs</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'./assets/fonts/iconfont.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      font<span class="token operator">:</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'./assets/fonts/iconfont.ttf'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<p><code>Icon.parseGlyphs</code> 方法会提取 <code>iconfont.json</code> 文件中的 <code>font_class</code> 和 <code>unicode_decimal</code> 字段数据并将其组成对象后返回。
至此 <code>RN</code> 端的配置已完成，下面演示如何使用。</p>
</li>
<li>
<p>使用 <code>demo-icons</code> 图标库中的图标：</p>
</li>
</ol>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upc-scan<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cart-fill<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="内置图标">内置图标<a class="doc-anchor" href="#内置图标">#</a></h3>
<p>组件库内置了一些内部组件使用到的图标，数量不多，开发项目时通常要引入自定义的图标库。</p>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="IconProps">IconProps<a class="doc-anchor" href="#IconProps">#</a></h3>
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
<td>name</td>
<td>图标名称或图片链接，如果名称带有<code>/</code>，会被认为是图片图标</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>family</td>
<td>字体名称</td>
<td>string</td>
<td>'sard-icons'</td>
</tr>
<tr>
<td>prefix</td>
<td>类名前缀，会拼接上 <code>name</code> 作为类名，仅用于非 <code>RN</code> 端</td>
<td>string</td>
<td>'sari'</td>
</tr>
<tr>
<td>size</td>
<td>图标大小</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>imageMode</td>
<td>图片裁剪、缩放的模式</td>
<td>ImageProps['mode']</td>
<td>'aspectFill'</td>
</tr>
</tbody>
</table></div>
</div>`}})}export{t as default};
