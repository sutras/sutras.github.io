"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5258],{"5980":function(e,s,n){var t=n(5536),l=n(5893);s.Z=function(e){var s=e.title,n=e.full,r=e.children;return(0,l.jsxs)(l.Fragment,{"children":[(0,l.jsxs)(t.G7,{"className":"demo-title","children":[(0,l.jsx)(t.G7,{"className":"demo-title-line"}),s]}),n?r:(0,l.jsx)(t.G7,{"className":"demo-body","children":r}),(0,l.jsx)(t.G7,{"style":{"marginBottom":40}})]})}},"5378":function(e,s,n){var t=n(1413),l=n(4925),r=n(5536),i=n(4184),a=n.n(i),c=n(1458),d=n(5893),o=["className","children","style","emphasis"];s.Z=function(e){var s=e.className,n=e.children,i=e.style,u=e.emphasis,x=(0,l.Z)(e,o);return(0,d.jsxs)(r.G7,(0,t.Z)((0,t.Z)({},x),{},{"className":a()("demo-page",{"demo-page-emphasis":u},s),"style":i,"children":[n,(0,d.jsx)(c.EqD,{"direction":"bottom"}),(0,d.jsxs)(d.Fragment,{"children":[(0,d.jsx)(c.FNi.Agent,{}),(0,d.jsx)(c.gUr.Agent,{}),(0,d.jsx)(c.VqE.Agent,{}),(0,d.jsx)(c.VbH.Agent,{})]})]}))}},"5258":function(e,s,n){n.r(s),n.d(s,{"default":function(){return stepper}});var t=n(5980),l=n(5378),r=n(9439),i=n(7294),a=n(1458),c=n(5893),Basic=function(){var e=(0,i.useState)(),s=(0,r.Z)(e,2),n=s[0],t=s[1];return(0,c.jsx)(a.vF9,{"placeholder":"数量","value":n,"onChange":t})},MinMax=function(){return(0,c.jsx)(a.vF9,{"placeholder":"数量","min":0,"max":5})},Step=function(){return(0,c.jsx)(a.vF9,{"placeholder":"数量","step":5})},Precision=function(){return(0,c.jsx)(a.vF9,{"placeholder":"数量","precision":2})},DisabledReadOnly=function(){return(0,c.jsxs)(a.TaI,{"children":[(0,c.jsx)(a.vF9,{"placeholder":"数量","defaultValue":5,"readOnly":!0}),(0,c.jsx)(a.vF9,{"placeholder":"数量","defaultValue":5,"disabled":!0})]})},stepper=function(){return(0,c.jsxs)(l.Z,{"children":[(0,c.jsx)(t.Z,{"title":"基础使用","children":(0,c.jsx)(Basic,{})}),(0,c.jsx)(t.Z,{"title":"最大最小值","children":(0,c.jsx)(MinMax,{})}),(0,c.jsx)(t.Z,{"title":"步长","children":(0,c.jsx)(Step,{})}),(0,c.jsx)(t.Z,{"title":"精度","children":(0,c.jsx)(Precision,{})}),(0,c.jsx)(t.Z,{"title":"只读和禁用","children":(0,c.jsx)(DisabledReadOnly,{})})]})}}}]);