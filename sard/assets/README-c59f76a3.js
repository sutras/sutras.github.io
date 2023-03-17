import{r as c,j as l,F as r,a as s,B as u,a5 as i,f as k,R as p}from"./index-ba304632.js";import{D as e}from"./Demo-5a7b5c0e.js";import"./index.es-526e18cf.js";function y(){const[a,n]=c.useState(!1);return l(r,{children:[s(u,{onClick:()=>n(!0),children:"显示分享面板"}),s(i,{visible:a,itemList:[{name:"Wechat",color:"#fff",background:"#0bc15f",icon:{name:"bi-wechat"}},{name:"Alipay",color:"#fff",background:"#1677ff",icon:{name:"bi-alipay"}},{name:"Twitter",color:"#fff",background:"#1d9bf0",icon:{name:"bi-twitter"}},{name:"Facebook",color:"#fff",background:"#1877f2",icon:{name:"bi-facebook"}}],cancel:"取消",actionClosable:!0,onSelect:t=>{k.show(t.name)},onClose:n})]})}const b={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ShareSheet<span class="token punctuation">,</span>
  ShareSheetItemProps<span class="token punctuation">,</span>
  ShareSheetItemList<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">itemList</span><span class="token operator">:</span> ShareSheetItemList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-wechat'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-alipay'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-twitter'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-facebook'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItemProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示分享面板</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemList<span class="token punctuation">}</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">actionClosable</span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function g(){const[a,n]=c.useState(!1);return l(r,{children:[s(u,{onClick:()=>n(!0),children:"显示分享面板"}),s(i,{title:"分享到",visible:a,itemList:[[{name:"Wechat",color:"#fff",background:"#0bc15f",icon:{name:"bi-wechat"}},{name:"Alipay",color:"#fff",background:"#1677ff",icon:{name:"bi-alipay"}},{name:"Twitter",color:"#fff",background:"#1d9bf0",icon:{name:"bi-twitter"}},{name:"Facebook",color:"#fff",background:"#1877f2",icon:{name:"bi-facebook"}}],[{name:"Spotify",color:"#fff",background:"#1ed760",icon:{name:"bi-spotify"}},{name:"Tiktok",color:"#fff",background:"#000",icon:{name:"bi-tiktok"}},{name:"Skype",color:"#fff",background:"#0b64a4",icon:{name:"bi-skype"}},{name:"Youtube",color:"#fff",background:"#ff0000",icon:{name:"bi-youtube"}},{name:"Paypal",color:"#fff",background:"#0070ba",icon:{name:"bi-paypal"}},{name:"Whatsapp",color:"#fff",background:"#128c7e",icon:{name:"bi-whatsapp"}},{name:"Telegram",color:"#fff",background:"#0088cc",icon:{name:"bi-telegram"}},{name:"Snapchat",color:"#000",background:"#fffc00",icon:{name:"bi-snapchat"}}]],cancel:"取消",actionClosable:!0,onSelect:t=>{k.show(t.name)},onClose:n})]})}const S={doc:`<h3>多行</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ShareSheet<span class="token punctuation">,</span>
  ShareSheetItemProps<span class="token punctuation">,</span>
  ShareSheetItemList<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">itemList</span><span class="token operator">:</span> ShareSheetItemList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-wechat'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-alipay'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-twitter'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-facebook'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Spotify'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1ed760'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-spotify'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Tiktok'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-tiktok'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Skype'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0b64a4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-skype'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Youtube'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#ff0000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-youtube'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Paypal'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0070ba'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-paypal'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Whatsapp'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#128c7e'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-whatsapp'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Telegram'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0088cc'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-telegram'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Snapchat'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#fffc00'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-snapchat'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItemProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示分享面板</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分享到<span class="token punctuation">"</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemList<span class="token punctuation">}</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">actionClosable</span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function f(){const[a,n]=c.useState(!1);return l(r,{children:[s(u,{onClick:()=>n(!0),children:"显示分享面板"}),s(i,{visible:a,itemList:[{name:"Wechat",color:"#fff",background:"#0bc15f",icon:{name:"bi-wechat"}},{name:"Alipay",color:"#fff",background:"#1677ff",icon:{name:"bi-alipay"}},{name:"Twitter",color:"#fff",background:"#1d9bf0",icon:{name:"bi-twitter"}},{name:"Facebook",color:"#fff",background:"#1877f2",icon:{name:"bi-facebook"}}],title:"分享到",description:"这是描述",cancel:"取消",actionClosable:!0,onSelect:t=>{k.show(t.name)},onClose:n})]})}const v={doc:`<h3>描述</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ShareSheet<span class="token punctuation">,</span>
  ShareSheetItemProps<span class="token punctuation">,</span>
  ShareSheetItemList<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">itemList</span><span class="token operator">:</span> ShareSheetItemList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-wechat'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-alipay'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-twitter'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-facebook'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItemProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示分享面板</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemList<span class="token punctuation">}</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分享到<span class="token punctuation">"</span></span>
        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这是描述<span class="token punctuation">"</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">actionClosable</span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function m(){const[a,n]=c.useState(!1),o=[{name:"Sard",icon:new URL("/sard/logo.svg",self.location).href},{name:"Wechat",color:"#fff",background:"#0bc15f",icon:{name:"bi-wechat"}}];return l(r,{children:[s(u,{onClick:()=>n(!0),children:"显示分享面板"}),s(i,{visible:a,itemList:o,cancel:"取消",actionClosable:!0,onSelect:t=>{k.show(t.name)},onClose:n})]})}const w={doc:`<h3>图片类型图标</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ShareSheet<span class="token punctuation">,</span>
  ShareSheetItemProps<span class="token punctuation">,</span>
  ShareSheetItemList<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">itemList</span><span class="token operator">:</span> ShareSheetItemList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Sard'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/logo.svg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-wechat'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItemProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示分享面板</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemList<span class="token punctuation">}</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">actionClosable</span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function h(){const[a,n]=c.useState(!1);return l(r,{children:[s(u,{onClick:()=>n(!0),children:"显示分享面板"}),s(i,{visible:a,itemList:[{name:"Wechat",color:"#fff",background:"#0bc15f",icon:{name:"bi-wechat"},disabled:!0},{name:"Alipay",color:"#fff",background:"#1677ff",icon:{name:"bi-alipay"}},{name:"Twitter",color:"#fff",background:"#1d9bf0",icon:{name:"bi-twitter"}},{name:"Facebook",color:"#fff",background:"#1877f2",icon:{name:"bi-facebook"}}],cancel:"取消",actionClosable:!0,onSelect:t=>{k.show(t.name)},onClose:n})]})}const C={doc:`<h3>禁用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ShareSheet<span class="token punctuation">,</span>
  ShareSheetItemProps<span class="token punctuation">,</span>
  ShareSheetItemList<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">itemList</span><span class="token operator">:</span> ShareSheetItemList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-wechat'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-alipay'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-twitter'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bi-facebook'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItemProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示分享面板</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemList<span class="token punctuation">}</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">actionClosable</span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};y.doc=b;g.doc=S;f.doc=v;m.doc=w;h.doc=C;function E(){return p.createElement("div",{className:"doc-content"},p.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="sharesheet-fen-xiang-mian-ban">ShareSheet 分享面板<a class="doc-anchor" href="#sharesheet-fen-xiang-mian-ban">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>从底部向上弹出分享菜单。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> ShareSheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),p.createElement("section",{className:"doc-section"},p.createElement(e,null,y),p.createElement(e,null,g),p.createElement(e,null,f),p.createElement(e,null,m),p.createElement(e,null,h)),p.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="sharesheetprops">ShareSheetProps<a class="doc-anchor" href="#sharesheetprops">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>itemList</td>
<td>面板选项列表</td>
<td>ShareSheetItemList</td>
<td>[]</td>
</tr>
<tr>
<td>visible</td>
<td>面板是否可见</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>面板标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>面板描述</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>cancel</td>
<td>取消按钮内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>maskClosable</td>
<td>点击遮罩后是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>actionClosable</td>
<td>点击选项后是否关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onSelect</td>
<td>点击选项时触发，禁用状态下不会触发</td>
<td>(itemProps: ShareSheetItemProps, index: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消按钮时触发</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>点击取消或遮罩或选项时触发，遮罩和选项需允许关闭</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>popupProps</td>
<td><code>Popup</code> 组件的 <code>props</code></td>
<td>PopupProps</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="sharesheetitemprops">ShareSheetItemProps<a class="doc-anchor" href="#sharesheetitemprops">#</a></h3>
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
<td>className</td>
<td>类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>style</td>
<td>样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>名称</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标签</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>背景颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时调用</td>
<td>(event: React.MouseEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-share-sheet-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-header-padding</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-header-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-description-margin-top</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-description-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-row-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-row-padding-y</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-row-padding-x</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-item-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-icon-margin-x</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-icon-size</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-icon-font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-icon-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-name-margin-top</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-name-padding-x</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-name-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-name-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-label-margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-label-padding-x</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-label-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-label-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-gap-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-100<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-gap-height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>

  <span class="token property">--s-share-sheet-cancel-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-cancel-padding</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-cancel-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-share-sheet-cancel-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-s-theme='dark'] </span><span class="token punctuation">{</span>
  <span class="token property">--s-share-sheet-gap-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-900<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{E as default};
