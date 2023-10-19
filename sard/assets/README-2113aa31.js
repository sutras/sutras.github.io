import{R as s}from"./index-0f27af66.js";import{u as a}from"./useCodeTool-1da9412e.js";function p(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Steps步骤条">Steps 步骤条<a class="doc-anchor" href="#Steps步骤条">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>引导用户按照流程完成任务的分步导航条。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>current</code> 属性指定步骤的下标，小于这个下标的步骤状态为 <code>finish</code>，等于这个下标的步骤状态为 <code>process</code>，大于这个下标的步骤状态为 <code>wait</code>。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>prevStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>nextStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="居中">居中<a class="doc-anchor" href="#居中">#</a></h3>
<p>居中每个步骤的图标和文案。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>prevStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>nextStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span> <span class="token attr-name">center</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="垂直步骤条">垂直步骤条<a class="doc-anchor" href="#垂直步骤条">#</a></h3>
<p>设置 <code>direction=&quot;vertical&quot;</code> 可以垂直排列。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>prevStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>nextStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="垂直居中">垂直居中<a class="doc-anchor" href="#垂直居中">#</a></h3>
<p>将图标和文案垂直居中。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>prevStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>nextStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">center</span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>使用 <code>iconProps</code> 属性设置图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>prevStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>nextStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
          <span class="token attr-name">center</span>
          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            size<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> status <span class="token operator">===</span> <span class="token string">'finish'</span> <span class="token operator">?</span> <span class="token string">'star-fill'</span> <span class="token operator">:</span> <span class="token string">'star'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>color</code> 属性设置颜色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>prevStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>nextStep<span class="token punctuation">&#125;</span></span> <span class="token attr-name">linkable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">center</span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="当前步骤状态">当前步骤状态<a class="doc-anchor" href="#当前步骤状态">#</a></h3>
<p>可以设置当前处理中的步骤的状态为 <code>finish</code> 来模拟只有“未处理”和“已处理”两个状态的步骤条。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token string">'../index.scss'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一步<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">linkable</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一步<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">>=</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">linkable</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>finish<span class="token punctuation">"</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">订单已提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">01月01日 12:00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">正在处理中</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">01月01日 12:05</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">订单已完成</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">01月01日 12:10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="错误步骤">错误步骤<a class="doc-anchor" href="#错误步骤">#</a></h3>
<p>可以设置当前处理中的步骤的状态为 <code>error</code> 表示步骤运行错误。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">center</span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义各步骤状态">自定义各步骤状态<a class="doc-anchor" href="#自定义各步骤状态">#</a></h3>
<p>每个步骤都可以使用 <code>status</code> 属性设置其状态。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token string">'../index.scss'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ddd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>finish<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">第1节</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">已学习</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>process<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">第2节</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">学习中</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wait<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">第3节</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">未学习</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>finish<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">第4节</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">已学习</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">第5节</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-steps-small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">出错了</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="可点击的">可点击的<a class="doc-anchor" href="#可点击的">#</a></h3>
<p>设置 <code>clickable</code> 属性添加点击状态。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">center</span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">center</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用的按钮不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Steps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">center</span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">步骤3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps.Step</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="StepsProps">StepsProps<a class="doc-anchor" href="#StepsProps">#</a></h3>
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
<td>center</td>
<td>是否居中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>direction</td>
<td>排列方向</td>
<td>'vertical' | 'horizontal'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>current</td>
<td>当前步骤对应的索引值</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>status</td>
<td>指定当前步骤的状态</td>
<td>StepsStatus</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>设置步骤条的主题色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>lineColor</td>
<td>线条颜色，可以让不同状态步骤的线条颜色保持一致</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>clickable</td>
<td>是否可点击</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>React.ReactNode | ((status: StepsStatus) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>iconProps</td>
<td>自定义图标</td>
<td>IconProps | ((status: StepsStatus) =&gt; IconProps)</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="StepsStepProps">StepsStepProps<a class="doc-anchor" href="#StepsStepProps">#</a></h3>
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
<td>步骤主体内容</td>
<td>React.ReactNode | ((status: StepsStatus) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>自定义状态</td>
<td>StepsStatus</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>设置步骤条的主题色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>lineColor</td>
<td>线条颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>React.ReactNode | ((status: StepsStatus) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>iconProps</td>
<td>自定义图标</td>
<td>IconProps | ((status: StepsStatus) =&gt; IconProps)</td>
<td>-</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时触发</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="StepsStatus">StepsStatus<a class="doc-anchor" href="#StepsStatus">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">StepsStatus</span> <span class="token operator">=</span> <span class="token string">'wait'</span> <span class="token operator">|</span> <span class="token string">'process'</span> <span class="token operator">|</span> <span class="token string">'error'</span> <span class="token operator">|</span> <span class="token string">'finish'</span>
</code></pre></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-steps-step-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-step-active-opacity</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-opacity</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-steps-icon-finish-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-icon-process-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-icon-wait-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-icon-error-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-danger</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-steps-text-finish-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-text-process-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-text-wait-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-text-error-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-danger</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-steps-header-gap-y</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-header-gap-x</span></span><span class="token punctuation">:</span> 12px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-header-vertical-top</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-steps-line-thickness</span></span><span class="token punctuation">:</span> 1px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-line-gap</span></span><span class="token punctuation">:</span> 3px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-line-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-border-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-line-active-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-steps-icon-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-steps-body-padding-x</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-body-padding-y</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-steps-icon-wait-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-text-finish-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-text-wait-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-line-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-border-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-steps-line-active-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
