import{u as w,j as r,a as t,r as c,F as P,N as y,O as S}from"./index-b9ddf759.js";import{c as p}from"./index-2e4736b8.js";const d={name:"Sard",styles:["assets/index.scss","src/components/index.scss"],base:"/sard/",publicDir:"public",buildSite:{outDir:"docs"},build:{entry:"src/index.ts",cssEntry:"src/style.ts",name:"Sard",fileName:"sard",outDir:"dist"},alias:[{find:/^sard$/,replacement:"../../../index.ts"}],site:{title:"Sard",logo:"logo.svg",seo:{title:"Sard | React Component",description:"Sard | React 移动端 UI 组件库"},themeDataName:"sTheme",routes:[{title:"首页",path:"/",filePath:"markdown/home.md"},{title:"组件",path:"/components",index:"button",children:[{type:"group",title:"基础组件",items:[{title:"Button 按钮",path:"button",filePath:"src/components/button"},{title:"icon 图标",path:"icon",filePath:"src/components/icon"},{title:"style 样式",path:"style",filePath:"src/components/style"}]},{type:"group",title:"布局",items:[{title:"grid 栅格",path:"grid",filePath:"src/components/grid"}]},{type:"group",title:"表单组件",items:[{title:"Calendar 日历",path:"calendar",filePath:"src/components/calendar"},{title:"Cascader 级联选择",path:"cascader",filePath:"src/components/cascader"},{title:"Checkbox 复选框",path:"checkbox",filePath:"src/components/checkbox"},{title:"DatetimePicker 日期时间选择器",path:"datetimePicker",filePath:"src/components/datetime-picker"},{title:"Form 表单",path:"form",filePath:"src/components/form"},{title:"Input 输入框",path:"input",filePath:"src/components/input"},{title:"NumberKeyboard 数字键盘",path:"numberKeyboard",filePath:"src/components/number-keyboard"},{title:"PasswordInput 密码输入框",path:"passwordInput",filePath:"src/components/password-input"},{title:"Picker 选择器",path:"picker",filePath:"src/components/picker"},{title:"Radio 单选按钮",path:"radio",filePath:"src/components/radio"},{title:"Rate 评分",path:"rate",filePath:"src/components/rate"},{title:"Slider 滑动器选择器",path:"slider",filePath:"src/components/slider"},{title:"Stepper 步进器",path:"stepper",filePath:"src/components/stepper"},{title:"Switch 开关",path:"switch",filePath:"src/components/switch"},{title:"Upload 上传",path:"upload",filePath:"src/components/upload"}]},{type:"group",title:"数据展示",items:[{title:"Avatar 头像",path:"avatar",filePath:"src/components/avatar"},{title:"Accordion 手风琴",path:"accordion",filePath:"src/components/accordion"},{title:"Badge 徽标",path:"badge",filePath:"src/components/badge"},{title:"Cell 单元格",path:"cell",filePath:"src/components/cell"},{title:"CountDown 倒计时",path:"countDown",filePath:"src/components/count-down"},{title:"Empty 空状态",path:"empty",filePath:"src/components/empty"},{title:"ImagePreview 图片预览 ",path:"imagePreview",filePath:"src/components/image-preview"},{title:"ProgressBar 条形进度条",path:"progressBar",filePath:"src/components/progress-bar"},{title:"ProgressCircle 环形进度条",path:"progressCircle",filePath:"src/components/progress-circle"},{title:"Swiper 滑块视图容器",path:"swiper",filePath:"src/components/swiper"},{title:"Tag 标签",path:"tag",filePath:"src/components/tag"}]},{type:"group",title:"导航组件",items:[{title:"IndexBar 索引栏",path:"indexBar",filePath:"src/components/index-bar"},{title:"Navbar 头部导航",path:"navbar",filePath:"src/components/navbar"},{title:"Pagination 分页",path:"pagination",filePath:"src/components/pagination"},{title:"Steps 步骤条",path:"steps",filePath:"src/components/steps"},{title:"Tabbar 标签栏",path:"tabbar",filePath:"src/components/tabbar"},{title:"Tabs 标签页",path:"tabs",filePath:"src/components/tabs"}]},{type:"group",title:"反馈组件",items:[{title:"ActionSheet 动作面板",path:"actionSheet",filePath:"src/components/action-sheet"},{title:"Dialog 对话框",path:"dialog",filePath:"src/components/dialog"},{title:"Dropdown 下拉菜单",path:"dropdown",filePath:"src/components/dropdown"},{title:"Loading 加载",path:"loading",filePath:"src/components/loading"},{title:"Notify 通知栏",path:"notify",filePath:"src/components/notify"},{title:"Result 结果",path:"result",filePath:"src/components/result"},{title:"ShareSheet 分享面板",path:"shareSheet",filePath:"src/components/share-sheet"},{title:"Skeleton 骨架屏",path:"skeleton",filePath:"src/components/skeleton"},{title:"Toast 轻提示",path:"toast",filePath:"src/components/toast"}]},{type:"group",title:"底层组件",items:[{title:"Movable 可移动的",path:"movable",filePath:"src/components/movable"},{title:"Collapse 折叠",path:"collapse",filePath:"src/components/collapse"},{title:"Popout 弹出框",path:"popout",filePath:"src/components/popout"},{title:"Popup 弹出层",path:"popup",filePath:"src/components/popup"},{title:"Transition 过渡",path:"transition",filePath:"src/components/transition"}]},{type:"group",title:"底层库",items:[{title:"Touch 触摸事件",path:"touch",filePath:"src/components/touch"}]}]}]}},{site:{routes:C}={routes:[]}}=d;function b(){const e=w();return C.find(a=>a.path==="/"?e.pathname===a.path:e.pathname.startsWith(a.path))}function T({show:e,...a}){const i=p("doc-layout-sider-toggle",{show:e});return r("button",{type:"button",...a,className:i,children:[t("span",{}),t("span",{}),t("span",{})]})}function x({show:e,onClick:a,...i}){const o=c.useRef(null),n=p("doc-layout-backdrop",{show:e});return c.useEffect(()=>{const l=s=>{s&&s.preventDefault()};return o.current&&o.current.addEventListener("touchmove",l,{passive:!1}),()=>{o.current&&o.current.removeEventListener("touchmove",l)}},[]),t("div",{...i,className:n,onClick:a,ref:o})}function v(){var l;const[e,a]=c.useState(!1),i=p("doc-layout-sider",{show:e}),o=b();if(!o||!Array.isArray(o.children)||o.children.length===0)return null;const n=s=>t(y,{className:({isActive:h})=>p("doc-sidenav-link",{active:h}),to:o.path+"/"+s.path,onClick:()=>a(!1),children:t("span",{className:"doc-sidenav-link-title",children:s.title})},s.path);return r(P,{children:[t("div",{className:i,children:t("nav",{className:"doc-sidenav",children:(l=o==null?void 0:o.children)==null?void 0:l.map(s=>{var h;return[s.type==="group"?t("div",{className:"doc-sidenav-title",children:s.title},s.title):n(s),(h=s.items)==null?void 0:h.map(k=>n(k))]})})}),t(T,{show:e,onClick:()=>a(!e)}),t(x,{show:e,onClick:()=>a(!e)})]})}function f(e){const{children:a,className:i,style:o}=e,n=c.useMemo(()=>c.Children.toArray(a).some(l=>l.type===v),[a]);return t("div",{className:p("doc-layout",{"doc-layout-has-sider":n},i),style:o,children:a})}const m="sardTheme",u=window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light",D={light:"bi-sun-fill",dark:"bi-moon-stars-fill"},N=window.localStorage.getItem(m)||u;document.documentElement.dataset.docTheme=N;document.documentElement.dataset[d.site.themeDataName]=N;function E(){const[e,a]=c.useState(u),i=()=>{a(o=>{const n=o==="light"?"dark":"light";return window.localStorage.setItem(m,n),n})};return c.useEffect(()=>{const o=window.localStorage.getItem(m);a(o||u)},[]),c.useEffect(()=>{document.documentElement.dataset.docTheme=e,document.documentElement.dataset[d.site.themeDataName]=e},[e]),t("div",{className:"doc-theme",onClick:i,children:t("span",{className:D[e]})})}const{site:{title:L,logo:A,routes:B}}=d;function I(){return r("div",{className:"doc-layout-header",children:[r("h1",{className:"doc-brand",children:[t("img",{src:A,alt:""}),t("span",{children:L})]}),r("ul",{className:"doc-topnav",children:[B.map(e=>t("li",{className:"doc-topnav-item",children:t(y,{className:({isActive:a})=>p("doc-topnav-link",{active:a}),to:e.path,end:e.path==="/",children:e.title})},e.path)),t("li",{className:"doc-topnav-divide"}),t("li",{className:"doc-topnav-item",children:t(E,{})})]})]})}function R(e){const{children:a}=e;return t("div",{className:"doc-layout-main",children:a})}function M(e){const{children:a}=e;return t("div",{className:"doc-layout-content",children:a})}function $(){return t(P,{children:r("div",{className:"doc-layout-footer",children:["MIT Licensed | Power By",t("a",{href:"https://github.com/sutras",style:{marginLeft:5},target:"_blank",rel:"noreferrer",children:"https://github.com/sutras"})]})})}function g(e){return[...e.querySelectorAll("h1, h2, h3")].map(a=>`<li data-level="${a.nodeName.slice(1)}"><a class="doc-catalog-link" href="#${a.id}">${a.textContent.replace(/#/g,"")}</a></li>`).join("")}function j(){const[e,a]=c.useState("");c.useEffect(()=>{const o=document.querySelector(".doc-layout-main");let n=null;return o&&(a(g(o)),n=new MutationObserver(l=>{for(const s of l)s.type==="childList"&&a(g(o))}),n.observe(o,{childList:!0})),()=>{n==null||n.disconnect()}},[]);const i=b();return!i||!Array.isArray(i.children)||i.children.length===0?null:t("div",{className:"doc-catalog",children:t("ul",{dangerouslySetInnerHTML:{__html:e}})})}function _(){return r(f,{children:[t(I,{}),r(f,{children:[t(v,{}),r(M,{children:[t(R,{children:t(S,{})}),t($,{})]}),t(j,{})]})]})}export{_ as default};