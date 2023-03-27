import{l as s,r as q,a,F as f,j as c,h as t,m as F,n as v,P as p,I as g,i as A,D as I,o as D,U as w,k as i,C as j,B as d,f as y,R as u}from"./index-b8e75f22.js";import{D as x}from"./Demo-3b19c6f8.js";import{S as P}from"./index-ae429720.js";import{P as S}from"./index-efbf9900.js";import{R as V}from"./index-97cd3fc0.js";import{S as R}from"./index-080579ef.js";import{S as O}from"./index-08690d9b.js";import{a as T}from"./area-bc21e994.js";import"./index.es-833d515d.js";function C(){const[k]=s.useForm(),h=n=>{console.log(n)},b={username:"root",password:"root123456",email:"root@email.com",phone:"13800000000",captcha:"123456",name:"管理员",gender:"male",age:18,idNumber:"000000000000000000",nativePlace:[44e4,440100,440111],address:"广东省广州市xxx xxx xxx 16号",birthday:new Date(2e3,0,1),married:!0,education:["e2"],avatar:[{url:new URL("/sard/logo.svg",self.location).href}],hobbies:["h1","h2"],pressure:50,happiness:2,travelDate:new Date(Date.now()+1e3*60*60*24*5)},B=()=>{k.validate().then(n=>{y.show("验证通过"),console.log(n)}).catch(n=>{y.show("验证失败"),console.log(n)})},[l,z]=q.useState(!1);return a(f,{children:c(s,{onSuccess:h,initialValues:{},form:k,style:{"--s-form-item-padding-x":0},scrollToFirstError:!0,disabled:l,children:[a(s.Item,{label:"用户名",name:"username",rules:[{required:!0}],children:a(t,{placeholder:"请输入用户名",inlaid:!0,clearable:!0})}),a(s.Item,{label:"密码",name:"password",rules:[{required:!0},{min:6,max:12},{validator:n=>/[a-zA-Z]/.test(n)&&/\d/.test(n),message:"必须包含字母和数字"}],extra:"密码长度为6-12个字符",validateFirst:!1,children:a(t,{type:"password",placeholder:"请输入密码",inlaid:!0,clearable:!0})}),a(s.Item,{label:"邮箱",name:"email",rules:[{required:!0,type:"email"}],children:a(t,{placeholder:"请输入邮箱",inlaid:!0,clearable:!0})}),a(s.Item,{label:"手机号",name:"phone",rules:[{required:!0,pattern:/^13\d{9}$/}],children:a(t,{placeholder:"请输入手机号",inlaid:!0,clearable:!0})}),a(s.Item,{label:"验证码",name:"captcha",layout:"vertical",style:{paddingBottom:0,"--s-form-item-border-color":"transparent","--s-password-input-height":"40px"},rules:[{required:!0,len:6}],children:a(F,{maxLength:6,children:({value:n,visible:e,setVisible:o})=>a(S,{disabled:l,focused:e,value:n,onClick:()=>o(!0),type:"underline",plainText:!0})})}),a(s.Item,{label:"姓名",name:"name",rules:[{required:!0}],children:a(t,{placeholder:"请输入姓名",inlaid:!0,clearable:!0})}),a(s.Item,{label:"性别",name:"gender",rules:[{required:!0,message:"请选择${label}"}],children:c(v.Group,{children:[a(v,{value:"male",children:"男"}),a(v,{value:"female",children:"女"})]})}),a(s.Item,{label:"年龄",name:"age",rules:[{required:!0}],children:a(P,{min:1,max:150,precision:0})}),a(s.Item,{label:"身份证号",name:"idNumber",rules:[{required:!0}],children:a(F,{extraKey:"X",children:({value:n,setValue:e,visible:o,setVisible:r})=>a(t,{readOnly:!0,disabled:l,inlaid:!0,placeholder:"请输入身份证号",focused:o,value:n,clearable:!0,onClear:e,onClick:()=>r(!0)})})}),a(s.Item,{label:"籍贯",name:"nativePlace",rules:[{required:!0}],children:c(p,{title:"请选择省市区",fast:!0,showConfirm:!1,children:[a(p.Outlet,{children:({value:n,triggerArgs:[,e=[]],setVisible:o,setValue:r})=>a(t,{readOnly:!0,disabled:l,inlaid:!0,placeholder:"请选择省市区",append:a(g,{color:"#ccc",name:"bi-caret-right-fill"}),value:(n==null?void 0:n.length)&&e.map(m=>m.name).join("/")||"",clearable:!0,onClear:()=>r(),onClick:()=>o(!0)})}),a(p.Target,{children:a(A,{options:T,fieldNames:{label:"name",value:"code"}})})]})}),a(s.Item,{label:"现住址",name:"address",rules:[{required:!0}],children:a(t,{inlaid:!0,clearable:!0,type:"textarea",placeholder:"请输入现住址",autoHeight:{minHeight:40,maxHeight:100}})}),a(s.Item,{label:"出生日期",name:"birthday",rules:[{required:!0}],children:c(p,{title:"请选择出生日期",children:[a(p.Outlet,{children:({value:n,setVisible:e,setValue:o})=>a(t,{readOnly:!0,disabled:l,inlaid:!0,placeholder:"请选择出生日期",append:a(g,{color:"#ccc",name:"bi-caret-right-fill"}),value:(n==null?void 0:n.toLocaleDateString())||"",clearable:!0,onClear:()=>o(),onClick:()=>e(!0)})}),a(p.Target,{children:a(I,{type:"yMd",min:new Date(1900,0,1),max:new Date})})]})}),a(s.Item,{label:"是否已婚",name:"married",initialValue:!1,valuePropName:"checked",rules:[{required:!0}],children:a(O,{})}),a(s.Item,{label:"学历",name:"education",rules:[{required:!0}],children:c(p,{title:"请选择学历",children:[a(p.Outlet,{children:({value:n,triggerArgs:[,e=[]],setVisible:o,setValue:r})=>{var m;return a(t,{readOnly:!0,disabled:l,inlaid:!0,placeholder:"请选择学历",append:a(g,{color:"#ccc",name:"bi-caret-right-fill"}),value:(n==null?void 0:n.length)&&((m=e[0])==null?void 0:m.label)||"",clearable:!0,onClear:()=>r(),onClick:()=>o(!0)})}}),a(p.Target,{children:a(D,{columns:[[{label:"小学",value:"e1"},{label:"初中",value:"e2"},{label:"高中",value:"e3"},{label:"专科",value:"e4"},{label:"本科",value:"e5"},{label:"研究生",value:"e6"}]]})})]})}),a(s.Item,{label:"头像",name:"avatar",valuePropName:"fileList",rules:[{required:!0}],children:a(w,{maxCount:1})}),a(s.Item,{label:"兴趣爱好",name:"hobbies",rules:[{required:!0}],children:c(i.Group,{vertical:!0,children:[a(i,{value:"h1",children:"运动"}),a(i,{value:"h2",children:"读书"}),a(i,{value:"h3",children:"旅行"}),a(i,{value:"h4",children:"购物"})]})}),a(s.Item,{label:"工作压力程度",name:"pressure",rules:[{required:!0}],children:a(R,{})}),a(s.Item,{label:"幸福度",name:"happiness",rules:[{required:!0}],children:a(V,{allowHalf:!0,allowClear:!0})}),a(s.Item,{label:"下次旅游时间",name:"travelDate",rules:[{required:!0}],children:c(p,{title:"请选择日期",children:[a(p.Outlet,{children:({value:n,setVisible:e,setValue:o})=>a(t,{readOnly:!0,disabled:l,inlaid:!0,placeholder:"请选择日期",append:a(g,{color:"#ccc",name:"bi-caret-right-fill"}),value:(n==null?void 0:n.toLocaleDateString())||"",clearable:!0,onClear:()=>o(),onClick:()=>e(!0)})}),a(p.Target,{children:a(j,{})})]})}),c("div",{style:{display:"flex",flexWrap:"wrap",gap:10,margin:15},children:[a(d,{htmlType:"submit",children:"提交"}),a(d,{htmlType:"reset",children:"重置"}),a(d,{onClick:()=>k.setValues(b),children:"数据填充"}),a(d,{onClick:B,children:"验证"})]})]})})}const N={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Form<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  Radio<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Checkbox<span class="token punctuation">,</span>
  Upload<span class="token punctuation">,</span>
  Slider<span class="token punctuation">,</span>
  Rate<span class="token punctuation">,</span>
  Stepper<span class="token punctuation">,</span>
  Popout<span class="token punctuation">,</span>
  Cascader<span class="token punctuation">,</span>
  Calendar<span class="token punctuation">,</span>
  Icon<span class="token punctuation">,</span>
  DatetimePicker<span class="token punctuation">,</span>
  NumberKeyboard<span class="token punctuation">,</span>
  Picker<span class="token punctuation">,</span>
  PasswordInput<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> area <span class="token keyword">from</span> <span class="token string">'../../../../assets/area.json'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> filledData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'root123456'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'root@email.com'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">'13800000000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">captcha</span><span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'管理员'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">idNumber</span><span class="token operator">:</span> <span class="token string">'000000000000000000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nativePlace</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">440000</span><span class="token punctuation">,</span> <span class="token number">440100</span><span class="token punctuation">,</span> <span class="token number">440111</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'广东省广州市xxx xxx xxx 16号'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">married</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">education</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'e2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/logo.svg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobbies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token string">'h2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pressure</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token literal-property property">happiness</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">travelDate</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleValidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    form
      <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'验证通过'</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errors</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'验证失败'</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>disabled<span class="token punctuation">,</span> setDisabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
        <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string-property property">'--s-form-item-padding-x'</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> any<span class="token punctuation">}</span></span>
        <span class="token attr-name">scrollToFirstError</span>
        <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'必须包含字母和数字'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码长度为6-12个字符<span class="token punctuation">"</span></span>
          <span class="token attr-name">validateFirst</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
            <span class="token attr-name">clearable</span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>邮箱<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'email'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入邮箱<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>手机号<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^13\\d{9}$</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入手机号<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>验证码<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>captcha<span class="token punctuation">"</span></span>
          <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paddingBottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token string-property property">'--s-form-item-border-color'</span><span class="token operator">:</span> <span class="token string">'transparent'</span><span class="token punctuation">,</span>
              <span class="token string-property property">'--s-password-input-height'</span><span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span> <span class="token keyword">as</span> any
          <span class="token punctuation">}</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">len</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> visible<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span>
                <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
                <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
                <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>underline<span class="token punctuation">"</span></span>
                <span class="token attr-name">plainText</span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NumberKeyboard</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>姓名<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入姓名<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>性别<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'请选择\${label}'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">男</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">女</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>年龄<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span> <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>身份证号<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>idNumber<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">extraKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue<span class="token punctuation">,</span> visible<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
                <span class="token attr-name">readOnly</span>
                <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
                <span class="token attr-name">inlaid</span>
                <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入身份证号<span class="token punctuation">"</span></span>
                <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
                <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
                <span class="token attr-name">clearable</span>
                <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NumberKeyboard</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>籍贯<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nativePlace<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span> <span class="token attr-name">fast</span> <span class="token attr-name">showConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
                value<span class="token punctuation">,</span>
                <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                setVisible<span class="token punctuation">,</span>
                setValue<span class="token punctuation">,</span>
              <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
                  <span class="token attr-name">readOnly</span>
                  <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
                  <span class="token attr-name">inlaid</span>
                  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
                  <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ccc<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-caret-right-fill<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                    <span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span>
                      options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                    <span class="token string">''</span>
                  <span class="token punctuation">}</span></span>
                  <span class="token attr-name">clearable</span>
                  <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                <span class="token punctuation">/></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
                <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>area<span class="token punctuation">}</span></span>
                <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>现住址<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">inlaid</span>
            <span class="token attr-name">clearable</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入现住址<span class="token punctuation">"</span></span>
            <span class="token attr-name">autoHeight</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>出生日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择出生日期<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
                  <span class="token attr-name">readOnly</span>
                  <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
                  <span class="token attr-name">inlaid</span>
                  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择出生日期<span class="token punctuation">"</span></span>
                  <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ccc<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-caret-right-fill<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">clearable</span>
                  <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                <span class="token punctuation">/></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span>
                <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span>
                <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1900</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否已婚<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>married<span class="token punctuation">"</span></span>
          <span class="token attr-name">initialValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>学历<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>education<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择学历<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
                value<span class="token punctuation">,</span>
                <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                setVisible<span class="token punctuation">,</span>
                setValue<span class="token punctuation">,</span>
              <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
                  <span class="token attr-name">readOnly</span>
                  <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
                  <span class="token attr-name">inlaid</span>
                  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择学历<span class="token punctuation">"</span></span>
                  <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ccc<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-caret-right-fill<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>label<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">clearable</span>
                  <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                <span class="token punctuation">/></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
                <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
                  <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'小学'</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'e1'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'初中'</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'e2'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'高中'</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'e3'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'专科'</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'e4'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'本科'</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'e5'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'研究生'</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'e6'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Picker</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>头像<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span>
          <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileList<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>兴趣爱好<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobbies<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">运动</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">读书</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">旅行</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">购物</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>工作压力程度<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pressure<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Slider</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>幸福度<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>happiness<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">allowClear</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下次旅游时间<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>travelDate<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
                  <span class="token attr-name">readOnly</span>
                  <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span></span>
                  <span class="token attr-name">inlaid</span>
                  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
                  <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ccc<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-caret-right-fill<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">clearable</span>
                  <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
                <span class="token punctuation">/></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span> <span class="token literal-property property">flexWrap</span><span class="token operator">:</span> <span class="token string">'wrap'</span><span class="token punctuation">,</span> <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">重置</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span>filledData<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">数据填充</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleValidate<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">验证</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function E(){const[k]=s.useForm();return a(f,{children:c(s,{onSuccess:b=>{console.log(b)},initialValues:{},form:k,style:{"--s-form-item-padding-x":0},children:[a(s.Item,{label:"用户名",name:"username",validateStatus:"failed",feedback:"错误状态的反馈信息",children:a(t,{placeholder:"请输入用户名",inlaid:!0,clearable:!0})}),a(s.Item,{label:"密码",name:"password",validateStatus:"passed",feedback:"成功状态的反馈信息",children:a(t,{type:"password",placeholder:"请输入密码",inlaid:!0,clearable:!0})}),a(s.Item,{label:"邮箱",name:"email",validateStatus:"unvalidated",feedback:"警告状态的反馈信息",children:a(t,{placeholder:"请输入邮箱",inlaid:!0,clearable:!0})}),a(s.Item,{label:"手机号",name:"phone",feedback:"请输入11位数字的手机号码",children:a(t,{placeholder:"请输入手机号",inlaid:!0,clearable:!0})}),a("div",{style:{display:"flex",flexWrap:"wrap",gap:10,margin:15},children:a(d,{htmlType:"submit",children:"提交"})})]})})}const L={doc:`<h3>验证状态</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
        <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string-property property">'--s-form-item-padding-x'</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> any<span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
          <span class="token attr-name">validateStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>failed<span class="token punctuation">"</span></span>
          <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>错误状态的反馈信息<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">validateStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passed<span class="token punctuation">"</span></span>
          <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>成功状态的反馈信息<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
            <span class="token attr-name">clearable</span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>邮箱<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
          <span class="token attr-name">validateStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unvalidated<span class="token punctuation">"</span></span>
          <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>警告状态的反馈信息<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入邮箱<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>手机号<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span>
          <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入11位数字的手机号码<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入手机号<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Input</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span> <span class="token literal-property property">flexWrap</span><span class="token operator">:</span> <span class="token string">'wrap'</span><span class="token punctuation">,</span> <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};C.doc=N;E.doc=L;function Z(){return u.createElement("div",{className:"doc-content"},u.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="form-biao-dan">Form 表单<a class="doc-anchor" href="#form-biao-dan">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>用于数据采集，由各种类型的表单域组成，可对数据进行校验、清除、重置、提交等操作。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),u.createElement("section",{className:"doc-section"},u.createElement(x,null,C),u.createElement(x,null,E)),u.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="formprops">FormProps<a class="doc-anchor" href="#formprops">#</a></h3>
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
<td>initialValues</td>
<td>表单默认值，只有初始化以及重置时生效</td>
<td>Record&lt;string, any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>form</td>
<td>经 <code>Form.useForm()</code> 创建的 form 控制实例，不提供时会自动创建</td>
<td>FormInstance</td>
<td>-</td>
</tr>
<tr>
<td>layout</td>
<td>设置表单项的布局</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>labelWidth</td>
<td>设置标签宽度</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>labelAlign</td>
<td>设置标签对齐方式</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>name</td>
<td>表单名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>scrollToFirstError</td>
<td>提交失败自动滚动到第一个错误字段</td>
<td>boolean | ScrollIntoViewOptions</td>
<td>false</td>
</tr>
<tr>
<td>validateMessages</td>
<td>验证提示模板</td>
<td>ValidateMessages</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用表单组件</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>使表单组件只读</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>validateFirst</td>
<td>是否在某一项校验不通过时停止校验</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onSuccess</td>
<td>提交成功时触发</td>
<td>(values: Record&lt;string, any&gt;) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onFail</td>
<td>提交失败时触发</td>
<td>(errors: ErrorInfo[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onReset</td>
<td>重置时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="errorinfo">ErrorInfo<a class="doc-anchor" href="#errorinfo">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">ErrorInfo</span> <span class="token punctuation">{</span>
  errors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre>
</div><div class="doc-card"><h3 id="formitemprops">FormItemProps<a class="doc-anchor" href="#formitemprops">#</a></h3>
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
<td>layout</td>
<td>设置表单项的布局</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>label</td>
<td>标签名</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>labelWidth</td>
<td>设置标签宽度</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>labelAlign</td>
<td>设置标签对齐方式</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>hidden</td>
<td>是否隐藏字段（依然会收集和校验字段）</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>noStyle</td>
<td>是否无样式，仅处理行为</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>required</td>
<td>必填样式设置。如不设置，则会根据校验规则自动生成</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>表单项的名称，用于校验、或设置、获取值等操作</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>valuePropName</td>
<td>子组件值的属性</td>
<td>string</td>
<td>'vallue'</td>
</tr>
<tr>
<td>trigger</td>
<td>子组件值改变时的回调名</td>
<td>string</td>
<td>'onChange'</td>
</tr>
<tr>
<td>initialValue</td>
<td>子组件初始值，<code>Form</code> 的 <code>initialValues </code> 优先级较高</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>getValueFromTrigger</td>
<td>设置如何从值改变的回调中提取字段值</td>
<td>(...args: any[]) =&gt; any</td>
<td>(value) =&gt; value</td>
</tr>
<tr>
<td>rules</td>
<td>校验规则</td>
<td>Rule[]</td>
<td>-</td>
</tr>
<tr>
<td>validateTrigger</td>
<td>触发规则校验的时机</td>
<td>string | string[]</td>
<td>'onChange'</td>
</tr>
<tr>
<td>feedback</td>
<td>自定义反馈信息，不设置则根据规则自动生成</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>extra</td>
<td>自定义额外信息</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>validateStatus</td>
<td>自定义验证状态</td>
<td>'success' | 'warning' | 'error' | 'validating'</td>
<td>-</td>
</tr>
<tr>
<td>validateFirst</td>
<td>是否在某一规则校验不通过时停止校验</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="rule">Rule<a class="doc-anchor" href="#rule">#</a></h3>
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
<td>validator</td>
<td>通过函数来自定义验证</td>
<td>(value: any, rule: Rule) =&gt; Promise<void> | boolean | string</td>
<td>-</td>
</tr>
<tr>
<td>pattern</td>
<td>通过正则来进行校验</td>
<td>RegExp</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>校验失败的反馈文案</td>
<td>string | (() =&gt; string)</td>
<td>-</td>
</tr>
<tr>
<td>trigger</td>
<td>触发校验的时机</td>
<td>'onBlur' | 'onChange' | 'onSubmit' | ('onBlur' | 'onChange' | 'onSubmit')[]</td>
<td>-</td>
</tr>
<tr>
<td>transform</td>
<td>将值转换后再进行校验</td>
<td>(value: any, rule: Rule) =&gt; any</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否为必选字段，当值为空值时 <code>'', [], false, undefined, null</code>，校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>使用内置的校验规则</td>
<td>ValidatorType</td>
<td>'string'</td>
</tr>
<tr>
<td>len</td>
<td>当 <code>type</code> 为字符串（字符串长度）、数值（等于数值）、数组（数组长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>当 <code>type</code> 为字符串（字符串最小长度）、数值（最小值）、数组（数组最小长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>max</td>
<td>当 <code>type</code> 为字符串（字符串最大长度）、数值（最大值）、数组（数组最大长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>whitespace</td>
<td><code>type</code> 为 <code>'string'</code> 时，如果字段仅包含空格则校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="rule-validator-shuo-ming">Rule['validator'] 说明<a class="doc-anchor" href="#rule-validator-shuo-ming">#</a></h3>
<p>如何函数返回 <code>true</code>，或者返回 <code>fulfilled</code> 状态的 <code>Promise</code> 表示验证通过；返回 <code>false</code> 或 <code>rejected</code> 状态的 <code>Promise</code> 表示验证失败。当返回字符串或返回的 <code>Promise</code> 的 <code>catch</code> 函数参数为字符串时，此字符串会替换 <code>message</code>。</p>
</div><div class="doc-card"><h3 id="validatortype">ValidatorType<a class="doc-anchor" href="#validatortype">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>string</td>
<td>必须为字符串</td>
</tr>
<tr>
<td>number</td>
<td>必须为数值</td>
</tr>
<tr>
<td>boolean</td>
<td>必须为布尔值</td>
</tr>
<tr>
<td>function</td>
<td>必须为函数</td>
</tr>
<tr>
<td>regexp</td>
<td>必须为 <code>RegExp</code> 类型，或者作为 <code>RegExp()</code> 参数被实例化不会报错的字符串</td>
</tr>
<tr>
<td>integer</td>
<td>必须为数值，且为整数</td>
</tr>
<tr>
<td>float</td>
<td>必须为数值，且为小数</td>
</tr>
<tr>
<td>array</td>
<td>必须为数组</td>
</tr>
<tr>
<td>object</td>
<td>必须为对象，且不为数组和 <code>null</code></td>
</tr>
<tr>
<td>enum</td>
<td>必须存在于 <code>enum</code> 中</td>
</tr>
<tr>
<td>date</td>
<td>必须为 <code>Date</code> 类型</td>
</tr>
<tr>
<td>url</td>
<td>必须为 <code>url</code></td>
</tr>
<tr>
<td>hex</td>
<td>必须为 <code>hex</code></td>
</tr>
<tr>
<td>email</td>
<td>必须为邮件</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="validatemessages">ValidateMessages<a class="doc-anchor" href="#validatemessages">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">ValidateMessages</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  required<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">enum</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  whitespace<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  date<span class="token operator">:</span> <span class="token punctuation">{</span>
    format<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    parse<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    invalid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  types<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token keyword">function</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    array<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    object<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token builtin">number</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    date<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token builtin">boolean</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    integer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    float<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    regexp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    hex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  <span class="token builtin">string</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    range<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  <span class="token builtin">number</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    range<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  array<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    range<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  pattern<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    mismatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
</div><div class="doc-card"><h3 id="scrollintoviewoptions">ScrollIntoViewOptions<a class="doc-anchor" href="#scrollintoviewoptions">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ScrollIntoViewOptions</span> <span class="token punctuation">{</span>
  block<span class="token operator">?</span><span class="token operator">:</span> ScrollIntoViewPosition
  inline<span class="token operator">?</span><span class="token operator">:</span> ScrollIntoViewPosition
  blockOffset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  inlineOffset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  topOffset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  bottomOffset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  leftOffset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  rightOffset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ScrollIntoViewPosition</span> <span class="token operator">=</span> <span class="token string">'start'</span> <span class="token operator">|</span> <span class="token string">'center'</span> <span class="token operator">|</span> <span class="token string">'end'</span> <span class="token operator">|</span> <span class="token string">'nearest'</span>
</code></pre>
</div><div class="doc-card"><h3 id="formlistprops">FormListProps<a class="doc-anchor" href="#formlistprops">#</a></h3>
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
<td>渲染函数</td>
<td>(fields: Field[], operation: FormListOperation, meta: { errors }) =&gt; React</td>
<td>-</td>
</tr>
<tr>
<td>initialValue</td>
<td>设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准</td>
<td>any[]</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>字段名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>校验规则</td>
<td>Rule[]</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="formlistoperation">FormListOperation<a class="doc-anchor" href="#formlistoperation">#</a></h3>
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
<td>add</td>
<td>新增表单项</td>
<td>(defaultValue?: any, insertIndex?: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>move</td>
<td>移动表单项</td>
<td>(from: number, to: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>remove</td>
<td>删除表单项</td>
<td>(index: number | number[]) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-form-item-padding-x</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">--s-form-item-padding-y</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-form-item-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-leading-relaxed<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-form-item-label-width</span><span class="token punctuation">:</span> 6.2em<span class="token punctuation">;</span>
  <span class="token property">--s-form-item-label-margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--s-form-item-label-margin-bottom</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>

  <span class="token property">--s-form-item-feedback-margin-top</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">--s-form-item-feedback-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-feedback-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-feedback-failed-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-feedback-passed-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-feedback-unvalidated-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-form-item-extra-margin-top</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">--s-form-item-extra-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-form-item-extra-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{Z as default};
