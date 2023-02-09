import{r as i,j as n,F as t,a as l,R as k}from"./index-093297df.js";import{j as g,D as r}from"./index-c0b255c8.js";import"./index-2e4736b8.js";import"./index.es-471f4c94.js";function y(){const[p,o]=i.useState(null),c=g(e=>{e.on("tap",a=>{console.log(a.type),o(n(t,{children:[n("div",{children:["clientX: ",a.x]}),n("div",{children:["clientY: ",a.y]})]}))})},{tap:!0});return n(t,{children:[l("div",{...c,className:"demo-touch-box"}),l("div",{children:p})]})}const b={doc:`<h3>Tap</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'tap'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

        <span class="token function">setMsg</span><span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientX: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientY: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">tap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function m(){const[p,o]=i.useState(null),c=g(e=>{e.on("doubletap",a=>{console.log(a.type),o(n(t,{children:[n("div",{children:["clientX: ",a.x]}),n("div",{children:["clientY: ",a.y]})]}))})},{tap:!0});return n(t,{children:[l("div",{...c,className:"demo-touch-box"}),l("div",{children:p})]})}const E={doc:`<h3>DoubleTap</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'doubletap'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

        <span class="token function">setMsg</span><span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientX: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientY: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">tap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function h(){const[p,o]=i.useState(null),c=g(e=>{["pressdown","pressmove","pressup"].forEach(a=>{e.on(a,s=>{console.log(s.type),o(n(t,{children:[n("div",{children:["type: ",s.type]}),n("div",{children:["clientX: ",s.x]}),n("div",{children:["clientY: ",s.y]})]}))})})},{press:!0});return n(t,{children:[l("div",{...c,className:"demo-touch-box",style:{touchAction:"none"}}),l("div",{children:p})]})}const M={doc:`<h3>Press</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'pressdown'</span><span class="token punctuation">,</span> <span class="token string">'pressmove'</span><span class="token punctuation">,</span> <span class="token string">'pressup'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

          <span class="token function">setMsg</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientX: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientY: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">press</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">touchAction</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function v(){const[p,o]=i.useState(null),[c,e]=i.useState(null),a=g(s=>{["panstart","panmove","panend"].forEach(d=>{s.on(d,u=>{console.log(u.type),o(n(t,{children:[n("div",{children:["type: ",u.type]}),n("div",{children:["clientX: ",u.x]}),n("div",{children:["clientY: ",u.y]})]}))})}),["panup","panright","pandown","panleft"].forEach(d=>{s.on(d,u=>{e(l(t,{children:n("div",{children:["type: ",u.type]})}))})})},{pan:!0});return n(t,{children:[l("div",{...a,className:"demo-touch-box",style:{touchAction:"none"}}),n("div",{children:[c,p]})]})}const N={doc:`<h3>Pan</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)
  const [dirMsg, setDirMsg] = useState</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'panstart'</span><span class="token punctuation">,</span> <span class="token string">'panmove'</span><span class="token punctuation">,</span> <span class="token string">'panend'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

          <span class="token function">setMsg</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientX: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientY: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'panup'</span><span class="token punctuation">,</span> <span class="token string">'panright'</span><span class="token punctuation">,</span> <span class="token string">'pandown'</span><span class="token punctuation">,</span> <span class="token string">'panleft'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setDirMsg</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">pan</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">touchAction</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>dirMsg<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function x(){const[p,o]=i.useState(null),c=g(e=>{["panswipeup","panswiperight","panswipedown","panswipeleft"].forEach(a=>{e.on(a,s=>{console.log(s.type),o(n(t,{children:[n("div",{children:["type: ",s.type]}),n("div",{children:["clientX: ",s.x]}),n("div",{children:["clientY: ",s.y]})]}))})})},{pan:!0});return n(t,{children:[l("div",{...c,className:"demo-touch-box",style:{touchAction:"none"}}),l("div",{children:p})]})}const j={doc:`<h3>PanSwipe</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'panswipeup'</span><span class="token punctuation">,</span> <span class="token string">'panswiperight'</span><span class="token punctuation">,</span> <span class="token string">'panswipedown'</span><span class="token punctuation">,</span> <span class="token string">'panswipeleft'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

            <span class="token function">setMsg</span><span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientX: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientY: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">pan</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">touchAction</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function f(){const[p,o]=i.useState(null),c=g(e=>{["swipeup","swiperight","swipedown","swipeleft"].forEach(a=>{e.on(a,s=>{console.log(s.type),o(n(t,{children:[n("div",{children:["type: ",s.type]}),n("div",{children:["clientX: ",s.x]}),n("div",{children:["clientY: ",s.y]})]}))})})},{swipe:!0});return n(t,{children:[l("div",{...c,className:"demo-touch-box",style:{touchAction:"none"}}),l("div",{children:p})]})}const A={doc:`<h3>Swipe</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'swipeup'</span><span class="token punctuation">,</span> <span class="token string">'swiperight'</span><span class="token punctuation">,</span> <span class="token string">'swipedown'</span><span class="token punctuation">,</span> <span class="token string">'swipeleft'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

          <span class="token function">setMsg</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientX: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">clientY: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">swipe</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">touchAction</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function w(){const[p,o]=i.useState(null),[c,e]=i.useState(null),a=g(s=>{["pinchstart","pinchmove","pinchend"].forEach(d=>{s.on(d,u=>{console.log(u.type),o(n(t,{children:[n("div",{children:["type: ",u.type]}),n("div",{children:["scale: ",u.scale]})]}))})}),["pinchin","pinchout"].forEach(d=>{s.on(d,u=>{e(n("div",{children:["type: ",u.type]}))})})},{pinch:!0});return n(t,{children:[l("div",{...a,className:"demo-touch-box",style:{touchAction:"none"}}),n("div",{children:[c,p]})]})}const D={doc:`<h3>Pinch</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)
  const [inOutMsg, setInOutMsg] = useState</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'pinchstart'</span><span class="token punctuation">,</span> <span class="token string">'pinchmove'</span><span class="token punctuation">,</span> <span class="token string">'pinchend'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

          <span class="token function">setMsg</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">scale: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>scale<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'pinchin'</span><span class="token punctuation">,</span> <span class="token string">'pinchout'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setInOutMsg</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">pinch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">touchAction</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>inOutMsg<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function S(){const[p,o]=i.useState(null),c=g(e=>{["rotatestart","rotatemove","rotateend"].forEach(a=>{e.on(a,s=>{console.log(s.type),o(n(t,{children:[n("div",{children:["type: ",s.type]}),n("div",{children:["degrees: ",s.degrees]})]}))})})},{rotate:!0});return n(t,{children:[l("div",{...c,className:"demo-touch-box",style:{touchAction:"none"}}),l("div",{children:p})]})}const X={doc:`<h3>Rotate</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrike <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text">(null)

  const binding = useStrike(
    (strike) => </span><span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'rotatestart'</span><span class="token punctuation">,</span> <span class="token string">'rotatemove'</span><span class="token punctuation">,</span> <span class="token string">'rotateend'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        strike<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

          <span class="token function">setMsg</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">type: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">degrees: </span><span class="token punctuation">{</span>event<span class="token punctuation">.</span>degrees<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
      <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
  )

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>binding<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-touch-box<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">touchAction</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};y.doc=b;m.doc=E;h.doc=M;v.doc=N;x.doc=j;f.doc=A;w.doc=D;S.doc=X;function I(){return k.createElement("div",{className:"doc-content"},k.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="touch-chu-mo-shi-jian">Touch 触摸事件<a class="doc-anchor" href="#touch-chu-mo-shi-jian">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>触摸事件。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Touch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),k.createElement("section",{className:"doc-section"},k.createElement(r,null,y),k.createElement(r,null,m),k.createElement(r,null,h),k.createElement(r,null,v),k.createElement(r,null,x),k.createElement(r,null,f),k.createElement(r,null,w),k.createElement(r,null,S)),k.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="props">Props<a class="doc-anchor" href="#props">#</a></h3>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="scss">SCSS<a class="doc-anchor" href="#scss">#</a></h3>
<pre class="language-scss"><code class="language-scss">
</code></pre>
</div>`}}))}export{I as default};
