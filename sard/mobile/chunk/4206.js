"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4206],{"5980":function(e,n,l){var t=l(5536),i=l(5893);n.Z=function(e){var n=e.title,l=e.full,r=e.children;return(0,i.jsxs)(i.Fragment,{"children":[(0,i.jsxs)(t.G7,{"className":"demo-title","children":[(0,i.jsx)(t.G7,{"className":"demo-title-line"}),n]}),l?r:(0,i.jsx)(t.G7,{"className":"demo-body","children":r}),(0,i.jsx)(t.G7,{"style":{"marginBottom":40}})]})}},"5378":function(e,n,l){var t=l(1413),i=l(4925),r=l(5536),s=l(4184),c=l.n(s),a=l(1458),o=l(5893),u=["className","children","style","emphasis"];n.Z=function(e){var n=e.className,l=e.children,s=e.style,d=e.emphasis,h=(0,i.Z)(e,u);return(0,o.jsxs)(r.G7,(0,t.Z)((0,t.Z)({},h),{},{"className":c()("demo-page",{"demo-page-emphasis":d},n),"style":s,"children":[l,(0,o.jsx)(a.EqD,{"direction":"bottom"}),(0,o.jsxs)(o.Fragment,{"children":[(0,o.jsx)(a.FNi.Agent,{}),(0,o.jsx)(a.gUr.Agent,{}),(0,o.jsx)(a.VqE.Agent,{}),(0,o.jsx)(a.VbH.Agent,{})]})]}))}},"4206":function(e,n,l){l.r(n),l.d(n,{"default":function(){return pages_checkbox}});var t=l(5980),i=l(5378),r=l(9439),s=l(7294),c=l(1458),a=l(5893),Basic=function(){var e=(0,s.useState)(!1),n=(0,r.Z)(e,2),l=n[0],t=n[1];return(0,a.jsx)(c.XZJ,{"checked":l,"onChange":t,"children":l?"已选中":"未选中"})},Disabled=function(){return(0,a.jsxs)(c.TaI,{"children":[(0,a.jsx)(c.XZJ,{"disabled":!0,"checked":!0,"children":"复选框"}),(0,a.jsx)(c.XZJ,{"disabled":!0,"children":"复选框"})]})},Group=function(){var e=(0,s.useState)(["option2"]),n=(0,r.Z)(e,2),l=n[0],t=n[1];return(0,a.jsx)(c.XZJ.Group,{"value":l,"onChange":t,"children":(0,a.jsxs)(c.TaI,{"gap":"medium","children":[(0,a.jsx)(c.XZJ,{"value":"option1","children":"选项1"}),(0,a.jsx)(c.XZJ,{"value":"option2","children":"选项2"}),(0,a.jsx)(c.XZJ,{"value":"option3","children":"选项3"})]})})},Size=function(){return(0,a.jsx)(c.XZJ,{"size":24,"children":"复选框"})},Color=function(){return(0,a.jsx)(c.XZJ,{"checkedColor":"tomato","defaultChecked":!0,"children":"复选框"})},Type=function(){return(0,a.jsx)(c.XZJ,{"type":"circle","children":"复选框"})},Icon=function(){return(0,a.jsx)(c.XZJ,{"icon":function icon(e){return(0,a.jsx)(c.JO$,{"family":"demo-icons","size":20,"color":e?"tomato":"#bbb","name":e?"heart-fill":"heart"})},"children":"复选框"})},Custom=function(){var e=(0,s.useState)(["option2"]),n=(0,r.Z)(e,2),l=n[0],t=n[1];return(0,a.jsx)(c.XZJ.Group,{"value":l,"onChange":t,"children":(0,a.jsx)(c.aVo,{"card":!0,"children":[{"value":"option1","label":"选项1"},{"value":"option2","label":"选项2"},{"value":"option3","label":"选项3"}].map((function(e){return(0,a.jsx)(c.XZJ,{"value":e.value,"children":function children(n,l){return(0,a.jsx)(c.aVo.Item,{"icon":(0,a.jsx)(c.XZJ,{"checked":n}),"onClick":l,"clickable":!0,"title":e.label})}},e.value)}))})})},o=function CustomCheckboxGroup(e){var n=e.value,l=e.defaultValue,t=e.onChange,i=e.children,r=(0,c.jOR)({"value":n,"defaultValue":l,"trigger":t,"initialValue":function initialValue(){return[]}});return(0,a.jsx)(c.ZB9.Provider,{"value":r,"children":(0,a.jsx)(c.aVo,{"card":!0,"children":i})})},u=function CustomCheckbox(e){var n=e.checked,l=e.defaultChecked,t=e.children,i=e.value,s=e.onChange,o=(0,c.L7n)("multiple",{"value":n,"defaultValue":l,"trigger":s,"initialValue":!1},i),u=(0,r.Z)(o,2),d=u[0],h=u[1];return(0,a.jsx)(c.aVo.Item,{"clickable":!0,"title":t,"onClick":h,"value":d&&(0,a.jsx)(c.JO$,{"color":"tomato","name":"success"})})},CustomFully=function(){var e=(0,s.useState)(["option2"]),n=(0,r.Z)(e,2),l=n[0],t=n[1];return(0,a.jsxs)(o,{"value":l,"onChange":t,"children":[(0,a.jsx)(u,{"value":"option1","children":"选项1"}),(0,a.jsx)(u,{"value":"option2","children":"选项2"}),(0,a.jsx)(u,{"value":"option3","children":"选项3"})]})},pages_checkbox=function(){return(0,a.jsxs)(i.Z,{"children":[(0,a.jsx)(t.Z,{"title":"基础使用","children":(0,a.jsx)(Basic,{})}),(0,a.jsx)(t.Z,{"title":"禁用","children":(0,a.jsx)(Disabled,{})}),(0,a.jsx)(t.Z,{"title":"图标大小","children":(0,a.jsx)(Size,{})}),(0,a.jsx)(t.Z,{"title":"自定义颜色","children":(0,a.jsx)(Color,{})}),(0,a.jsx)(t.Z,{"title":"图标类型","children":(0,a.jsx)(Type,{})}),(0,a.jsx)(t.Z,{"title":"自定义图标","children":(0,a.jsx)(Icon,{})}),(0,a.jsx)(t.Z,{"title":"复选框组","children":(0,a.jsx)(Group,{})}),(0,a.jsx)(t.Z,{"title":"自定义组件","children":(0,a.jsx)(Custom,{})}),(0,a.jsx)(t.Z,{"title":"完全自定义组件","children":(0,a.jsx)(CustomFully,{})})]})}}}]);