"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6184],{"5980":function(e,t,l){var i=l(5536),n=l(5893);t.Z=function(e){var t=e.title,l=e.full,s=e.children;return(0,n.jsxs)(n.Fragment,{"children":[(0,n.jsxs)(i.G7,{"className":"demo-title","children":[(0,n.jsx)(i.G7,{"className":"demo-title-line"}),t]}),l?s:(0,n.jsx)(i.G7,{"className":"demo-body","children":s}),(0,n.jsx)(i.G7,{"style":{"marginBottom":40}})]})}},"5378":function(e,t,l){var i=l(1413),n=l(4925),s=l(5536),r=l(4184),c=l.n(r),d=l(1458),j=l(5893),x=["className","children","style","emphasis"];t.Z=function(e){var t=e.className,l=e.children,r=e.style,h=e.emphasis,u=(0,n.Z)(e,x);return(0,j.jsxs)(s.G7,(0,i.Z)((0,i.Z)({},u),{},{"className":c()("demo-page",{"demo-page-emphasis":h},t),"style":r,"children":[l,(0,j.jsx)(d.EqD,{"direction":"bottom"}),(0,j.jsxs)(j.Fragment,{"children":[(0,j.jsx)(d.FNi.Agent,{}),(0,j.jsx)(d.gUr.Agent,{}),(0,j.jsx)(d.VqE.Agent,{}),(0,j.jsx)(d.VbH.Agent,{})]})]}))}},"6184":function(e,t,l){l.r(t),l.d(t,{"default":function(){return accordion}});var i=l(5980),n=l(5378),s=l(1458),r=l(5893),Basic=function(){return(0,r.jsxs)(s.UQy,{"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},Expand=function(){return(0,r.jsxs)(s.UQy,{"defaultActiveKey":1,"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},MultipleExpand=function(){return(0,r.jsxs)(s.UQy,{"multiple":!0,"defaultActiveKey":[0,1],"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},c=l(9439),d=l(7294),Controllable=function(){var e=(0,d.useState)(0),t=(0,c.Z)(e,2),l=t[0],i=t[1];return(0,r.jsxs)(s.UQy,{"activeKey":l,"onChange":function handleChange(e){i(e)},"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},Disabled=function(){return(0,r.jsxs)(s.UQy,{"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"disabled":!0,"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},Arrow=function(){return(0,r.jsxs)(s.UQy,{"arrow":function arrow(e){return(0,r.jsx)(s.JO$,{"name":e?"minus":"plus"})},"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},Duration=function(){return(0,r.jsxs)(s.UQy,{"duration":0,"children":[(0,r.jsx)(s.UQy.Item,{"title":"标题1","children":"内容1"}),(0,r.jsx)(s.UQy.Item,{"title":"标题2","children":"内容2"}),(0,r.jsx)(s.UQy.Item,{"title":"标题3","children":"内容3"})]})},accordion=function(){return(0,r.jsxs)(n.Z,{"children":[(0,r.jsx)(i.Z,{"title":"基础使用","full":!0,"children":(0,r.jsx)(Basic,{})}),(0,r.jsx)(i.Z,{"title":"默认展开","full":!0,"children":(0,r.jsx)(Expand,{})}),(0,r.jsx)(i.Z,{"title":"展开多个","full":!0,"children":(0,r.jsx)(MultipleExpand,{})}),(0,r.jsx)(i.Z,{"title":"受控","full":!0,"children":(0,r.jsx)(Controllable,{})}),(0,r.jsx)(i.Z,{"title":"禁用","full":!0,"children":(0,r.jsx)(Disabled,{})}),(0,r.jsx)(i.Z,{"title":"自定义箭头","full":!0,"children":(0,r.jsx)(Arrow,{})}),(0,r.jsx)(i.Z,{"title":"折叠时间","full":!0,"children":(0,r.jsx)(Duration,{})})]})}}}]);