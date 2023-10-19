import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function t(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="ConfigProvider全局配置">ConfigProvider 全局配置<a class="doc-anchor" href="#ConfigProvider全局配置">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于全局配置 <code>sard</code> 组件，提供自定义 <code>BEM</code> 风格和国际化支持。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ConfigProvider <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="国际化">国际化<a class="doc-anchor" href="#国际化">#</a></h3>
<p><code>sard</code> 提供了 <code>ConfigProvider</code> 组件用于全局配置国际化语言。目前支持以下语言:</p>
<ul>
<li>简体中文：<code>zh-CN</code></li>
<li>英语（美式）：<code>en-US</code></li>
</ul>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> children <span class="token punctuation">&#125;</span><span class="token operator">:</span> PropsWithChildren<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh-CN<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<p>如果想要在组件内部动态修改国际化语言，可以使用<a href="./#/components/locale"><code>Locale</code></a> 组件导出的 <code>LocaleContext</code>。</p>
</div><div class="doc-card"><h3 id="BEM风格配置">BEM 风格配置<a class="doc-anchor" href="#BEM风格配置">#</a></h3>
<p><code>sard</code> 通过 <code>BEM</code> 风格编写样式，如果有特定的需要，可以修改为想要的格式，例如：</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">bem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> namespace<span class="token operator">:</span> <span class="token string">'custom'</span><span class="token punctuation">,</span> modifierSeparator<span class="token operator">:</span> <span class="token string">'--'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
</code></pre></div>
<p>在全局配置修改后，元素的类名会按照您的修改来生成，另外，还需要修改样式文件类名的命名格式。</p>
<p>这需要你在引入<code>sard</code>的样式文件之前定义变量来可以覆盖默认的变量值，例如：</p>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-namespace</span></span><span class="token punctuation">:</span> <span class="token string">'custom'</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-modifier-separator</span></span><span class="token punctuation">:</span> <span class="token string">'--'</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">'sard/dist/index.scss'</span><span class="token punctuation">;</span>
</code></pre></div>
<p>完整的<code>scss</code>变量可以查看<a href="./#/components/style"><code>style</code></a> 组件。</p>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="ConfigProviderProps">ConfigProviderProps<a class="doc-anchor" href="#ConfigProviderProps">#</a></h3>
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
<td>lang</td>
<td>语言包</td>
<td>string</td>
<td>'zh-CN'</td>
</tr>
<tr>
<td>theme</td>
<td>主题</td>
<td>string</td>
<td>'light'</td>
</tr>
<tr>
<td>bem</td>
<td><code>bem</code> 风格编写样式</td>
<td>Bem</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="Bem">Bem<a class="doc-anchor" href="#Bem">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>namespace</td>
<td>命名空间</td>
<td>string</td>
<td>'sar'</td>
</tr>
<tr>
<td>blockSeparator</td>
<td>块的分隔符</td>
<td>string</td>
<td>'-'</td>
</tr>
<tr>
<td>elementSeparator</td>
<td>元素的分隔符</td>
<td>string</td>
<td>'__'</td>
</tr>
<tr>
<td>modifierSeparator</td>
<td>装饰器的分隔符</td>
<td>string</td>
<td>'_'</td>
</tr>
</tbody>
</table></div>
</div>`}})}export{t as default};
