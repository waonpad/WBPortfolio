/*! For license information please see 668.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_templete=self.webpackChunkreact_templete||[]).push([[668],{843:(e,t,a)=>{var o=a(4836);t.Z=void 0;var r=o(a(4938)),n=a(5893),i=(0,r.default)((0,n.jsx)("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}),"Collections");t.Z=i},4962:(e,t,a)=>{a.d(t,{Z:()=>f});var o=a(3366),r=a(7462),n=a(7294),i=a(6010),l=a(4780),s=a(1657),c=a(948),d=a(1588),m=a(4867);function p(e){return(0,m.Z)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var u=a(5893);const h=["children","className","component","image","src","style"],g=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:o,isImageComponent:r}=a;return[t.root,o&&t.media,r&&t.img]}})((({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),b=["video","audio","picture","iframe","img"],x=["picture","img"],f=n.forwardRef((function(e,t){const a=(0,s.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:c,component:d="div",image:m,src:f,style:v}=a,Z=(0,o.Z)(a,h),w=-1!==b.indexOf(d),y=!w&&m?(0,r.Z)({backgroundImage:`url("${m}")`},v):v,k=(0,r.Z)({},a,{component:d,isMediaComponent:w,isImageComponent:-1!==x.indexOf(d)}),S=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:o}=e,r={root:["root",a&&"media",o&&"img"]};return(0,l.Z)(r,p,t)})(k);return(0,u.jsx)(g,(0,r.Z)({className:(0,i.Z)(S.root,c),as:d,role:!w&&m?"img":void 0,ref:t,style:y,ownerState:k,src:w?m||f:void 0},Z,{children:n}))}))},6089:(e,t,a)=>{a.d(t,{Z:()=>y});var o=a(3366),r=a(7462),n=a(7294),i=a(6010),l=a(8320),s=a(4867),c=a(4780),d=a(7333);const m=(0,a(2807).ZP)();var p=a(6268),u=a(5893);const h=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,p.Z)(),b=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),x=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:g});var f=a(8216),v=a(948),Z=a(1657);const w=function(e={}){const{createStyledComponent:t=b,useThemeProps:a=x,componentName:d="MuiContainer"}=e,m=t((({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const o=a,r=e.breakpoints.values[o];return 0!==r&&(t[e.breakpoints.up(o)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),p=n.forwardRef((function(e,t){const n=a(e),{className:p,component:g="div",disableGutters:b=!1,fixed:x=!1,maxWidth:f="lg"}=n,v=(0,o.Z)(n,h),Z=(0,r.Z)({},n,{component:g,disableGutters:b,fixed:x,maxWidth:f}),w=((e,t)=>{const{classes:a,fixed:o,disableGutters:r,maxWidth:n}=e,i={root:["root",n&&`maxWidth${(0,l.Z)(String(n))}`,o&&"fixed",r&&"disableGutters"]};return(0,c.Z)(i,(e=>(0,s.Z)(t,e)),a)})(Z,d);return(0,u.jsx)(m,(0,r.Z)({as:g,ownerState:Z,className:(0,i.Z)(w.root,p),ref:t},v))}));return p}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,f.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,Z.Z)({props:e,name:"MuiContainer"})}),y=w},9921:(e,t)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen");Symbol.for("react.module.reference")},9864:(e,t,a)=>{a(9921)},2668:(e,t,a)=>{a.r(t),a.d(t,{Work:()=>ce});var o=a(7294),r=a(9250),n=a(9655),i=a(6089),l=a(2658),s=a(5725),c=a(5295),d=a(4962),m=a(2643),p=a(1508),u=a(461),h=a(3366),g=a(7462),b=a(4780),x=a(6010),f=a(948),v=a(1657),Z=a(1588),w=a(4867);function y(e){return(0,w.Z)("MuiImageList",e)}(0,Z.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);const k=o.createContext({});var S=a(5893);const W=["children","className","cols","component","rowHeight","gap","style","variant"],C=(0,f.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})((({ownerState:e})=>(0,g.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"}))),E=o.forwardRef((function(e,t){const a=(0,v.Z)({props:e,name:"MuiImageList"}),{children:r,className:n,cols:i=2,component:l="ul",rowHeight:s="auto",gap:c=4,style:d,variant:m="standard"}=a,p=(0,h.Z)(a,W),u=o.useMemo((()=>({rowHeight:s,gap:c,variant:m})),[s,c,m]);o.useEffect((()=>{}),[]);const f="masonry"===m?(0,g.Z)({columnCount:i,columnGap:c},d):(0,g.Z)({gridTemplateColumns:`repeat(${i}, 1fr)`,gap:c},d),Z=(0,g.Z)({},a,{component:l,gap:c,rowHeight:s,variant:m}),w=(e=>{const{classes:t,variant:a}=e,o={root:["root",a]};return(0,b.Z)(o,y,t)})(Z);return(0,S.jsx)(C,(0,g.Z)({as:l,className:(0,x.Z)(w.root,w[m],n),ref:t,style:f,ownerState:Z},p,{children:(0,S.jsx)(k.Provider,{value:u,children:r})}))}));a(9864);var P=a(8502);function M(e){return(0,w.Z)("MuiImageListItem",e)}const R=(0,Z.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),$=["children","className","cols","component","rows","style"],I=(0,f.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${R.img}`]:t.img},t.root,t[a.variant]]}})((({ownerState:e})=>(0,g.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${R.img}`]:(0,g.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})}))),N=o.forwardRef((function(e,t){const a=(0,v.Z)({props:e,name:"MuiImageListItem"}),{children:r,className:n,cols:i=1,component:l="li",rows:s=1,style:c}=a,d=(0,h.Z)(a,$),{rowHeight:m="auto",gap:p,variant:u}=o.useContext(k);let f="auto";"woven"===u?f=void 0:"auto"!==m&&(f=m*s+p*(s-1));const Z=(0,g.Z)({},a,{cols:i,component:l,gap:p,rowHeight:m,rows:s,variant:u}),w=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],img:["img"]};return(0,b.Z)(o,M,t)})(Z);return(0,S.jsx)(I,(0,g.Z)({as:l,className:(0,x.Z)(w.root,w[u],n),ref:t,style:(0,g.Z)({height:f,gridColumnEnd:"masonry"!==u?`span ${i}`:void 0,gridRowEnd:"masonry"!==u?`span ${s}`:void 0,marginBottom:"masonry"===u?p:void 0},c),ownerState:Z},d,{children:o.Children.map(r,(e=>o.isValidElement(e)?"img"===e.type||(0,P.Z)(e,["Image"])?o.cloneElement(e,{className:(0,x.Z)(w.img,e.props.className)}):e:null))}))}));var z=a(3814),j=a(7579),D=a(8216),F=a(2190),B=a(6628),H=a(4680);function L(e){return(0,w.Z)("MuiDialog",e)}const G=(0,Z.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),T=(0,o.createContext)({});var V=a(4567),_=a(2734);const O=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],A=(0,f.ZP)(V.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),K=(0,f.ZP)(F.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Y=(0,f.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.container,t[`scroll${(0,D.Z)(a.scroll)}`]]}})((({ownerState:e})=>(0,g.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),X=(0,f.ZP)(H.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.paper,t[`scrollPaper${(0,D.Z)(a.scroll)}`],t[`paperWidth${(0,D.Z)(String(a.maxWidth))}`],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})((({theme:e,ownerState:t})=>(0,g.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${G.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${G.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${G.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),q=o.forwardRef((function(e,t){const a=(0,v.Z)({props:e,name:"MuiDialog"}),r=(0,_.Z)(),n={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":l,BackdropComponent:s,BackdropProps:c,children:d,className:m,disableEscapeKeyDown:p=!1,fullScreen:u=!1,fullWidth:f=!1,maxWidth:Z="sm",onBackdropClick:w,onClose:y,open:k,PaperComponent:W=H.Z,PaperProps:C={},scroll:E="paper",TransitionComponent:P=B.Z,transitionDuration:M=n,TransitionProps:R}=a,$=(0,h.Z)(a,O),I=(0,g.Z)({},a,{disableEscapeKeyDown:p,fullScreen:u,fullWidth:f,maxWidth:Z,scroll:E}),N=(e=>{const{classes:t,scroll:a,maxWidth:o,fullWidth:r,fullScreen:n}=e,i={root:["root"],container:["container",`scroll${(0,D.Z)(a)}`],paper:["paper",`paperScroll${(0,D.Z)(a)}`,`paperWidth${(0,D.Z)(String(o))}`,r&&"paperFullWidth",n&&"paperFullScreen"]};return(0,b.Z)(i,L,t)})(I),z=o.useRef(),F=(0,j.Z)(l),G=o.useMemo((()=>({titleId:F})),[F]);return(0,S.jsx)(K,(0,g.Z)({className:(0,x.Z)(N.root,m),closeAfterTransition:!0,components:{Backdrop:A},componentsProps:{backdrop:(0,g.Z)({transitionDuration:M,as:s},c)},disableEscapeKeyDown:p,onClose:y,open:k,ref:t,onClick:e=>{z.current&&(z.current=null,w&&w(e),y&&y(e,"backdropClick"))},ownerState:I},$,{children:(0,S.jsx)(P,(0,g.Z)({appear:!0,in:k,timeout:M,role:"presentation"},R,{children:(0,S.jsx)(Y,{className:(0,x.Z)(N.container),onMouseDown:e=>{z.current=e.target===e.currentTarget},ownerState:I,children:(0,S.jsx)(X,(0,g.Z)({as:W,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":F},C,{className:(0,x.Z)(N.paper,C.className),ownerState:I,children:(0,S.jsx)(T.Provider,{value:G,children:d})}))})}))}))}));var U=a(9327);function J(e){return(0,w.Z)("MuiFab",e)}const Q=(0,Z.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),ee=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],te=(0,f.ZP)(U.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,D.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,t[(0,D.Z)(a.size)],t[a.color]]}})((({theme:e,ownerState:t})=>{var a,o;return(0,g.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${Q.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})}),(({theme:e,ownerState:t})=>(0,g.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}})),(({theme:e})=>({[`&.${Q.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}))),ae=o.forwardRef((function(e,t){const a=(0,v.Z)({props:e,name:"MuiFab"}),{children:o,className:r,color:n="default",component:i="button",disabled:l=!1,disableFocusRipple:s=!1,focusVisibleClassName:c,size:d="large",variant:m="circular"}=a,p=(0,h.Z)(a,ee),u=(0,g.Z)({},a,{color:n,component:i,disabled:l,disableFocusRipple:s,size:d,variant:m}),f=(e=>{const{color:t,variant:a,classes:o,size:r}=e,n={root:["root",a,`size${(0,D.Z)(r)}`,"inherit"===t?"colorInherit":t]},i=(0,b.Z)(n,J,o);return(0,g.Z)({},o,i)})(u);return(0,S.jsx)(te,(0,g.Z)({className:(0,x.Z)(f.root,r),component:i,disabled:l,focusRipple:!s,focusVisibleClassName:(0,x.Z)(f.focusVisible,c),ownerState:u,ref:t},p,{classes:f,children:o}))}));var oe=a(843),re=a(8368),ne=a(3314),ie=a(2275);function le(e){var t=e.work,a=(0,ne.d)(),r=a.width,n=(a.height,a.breakpoint,(0,o.useState)(!1)),i=n[0],l=n[1],s=function(){l(!1)};return o.createElement(o.Fragment,null,o.createElement(q,{onClose:s,open:i,PaperProps:{style:{boxShadow:"none",minWidth:"100vw",minHeight:"100vh",backgroundColor:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}},BackdropProps:{style:{backgroundColor:"#000",opacity:.7}},onClick:s},o.createElement(E,{cols:2,gap:8},(t.images.length>0?t.images:re.P).map((function(e){return o.createElement(p.Z,{key:e.path},o.createElement(N,{sx:{width:"".concat(r?.94*r/2:0,"px")}},o.createElement("img",{style:{borderRadius:"4px"},src:t.images.length>0?"".concat(ie.f,"/images/works/").concat(t.id,"/").concat(e.path):e.path,alt:e.title,loading:"lazy"})))})))),o.createElement(ae,{color:"primary",sx:{display:{xs:"flex",lg:"none"},position:"fixed",bottom:"16px",right:"16px"},onClick:function(){l(!0)}},o.createElement(oe.Z,null)))}var se=a(5670),ce=function(e){var t=(0,r.UO)().workId,a=re._.filter((function(e){return e.id===Number(t)}))[0],h=(0,o.useRef)(null),g=(0,se.K)(h).clientRect,b=(0,o.useRef)(null),x=(0,se.K)(b).clientRect,f=(0,o.useState)(0),v=f[0],Z=f[1],w=new Image;return w.onload=function(){Z(x?w.height*x.width/w.width:0)},w.src=""!==a.thumbnail.path?"".concat(ie.f,"/images/works/").concat(a.id,"/").concat(a.thumbnail.path):"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",o.createElement(i.Z,{maxWidth:!1,disableGutters:!0},o.createElement(l.Z,{variant:"h4"},"Work"),o.createElement(z.Z,{variant:"section"}),o.createElement(s.ZP,{container:!0,spacing:2},o.createElement(s.ZP,{item:!0,xs:12,lg:5,xl:4,height:"fit-content",sx:{display:{xs:"none",lg:"flex"}}},o.createElement(E,{sx:{mt:0,width:"100%"},cols:1,gap:8,ref:h},o.createElement(N,{sx:{width:"".concat(g?g.width:0,"px")}},o.createElement("img",{style:{borderRadius:"4px"},src:""!==a.thumbnail.path?"".concat(ie.f,"/images/works/").concat(a.id,"/").concat(a.thumbnail.path):"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",alt:a.thumbnail.title,loading:"lazy"})),(a.images.length>0?a.images:re.P).map((function(e){return o.createElement(N,{key:e.path,sx:{width:"".concat(g?g.width:0,"px")}},o.createElement("img",{style:{borderRadius:"4px"},src:a.images.length>0?"".concat(ie.f,"/images/works/").concat(a.id,"/").concat(e.path):e.path,alt:e.title,loading:"lazy"}))})))),o.createElement(s.ZP,{item:!0,container:!0,xs:12,lg:7,xl:8,spacing:2,height:"fit-content"},o.createElement(s.ZP,{item:!0,xs:12},o.createElement(c.Z,{elevation:1,ref:b},o.createElement(d.Z,{sx:{Width:x?x.width:0,minHeight:v,display:{xs:"block",lg:"none"}},image:""!==a.thumbnail.path?"".concat(ie.f,"/images/works/").concat(a.id,"/").concat(a.thumbnail.path):"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}),o.createElement(m.Z,null,o.createElement(s.ZP,{container:!0,spacing:1},o.createElement(s.ZP,{item:!0,xs:12},o.createElement(l.Z,{variant:"h5"},a.title)),o.createElement(s.ZP,{item:!0,xs:12},o.createElement(l.Z,{variant:"h6"},"Links"),o.createElement(z.Z,null),o.createElement(p.Z,{sx:{display:"flex",justifyContent:"left",flexWrap:"wrap",gap:"4px 4px"}},a.links.map((function(e,t){return o.createElement(u.Z,{key:t,label:e.title,component:n.rU,to:e.url,target:"_blank",clickable:!0})})))),o.createElement(s.ZP,{item:!0,xs:12},o.createElement(l.Z,{variant:"h6"},"Built with"),o.createElement(z.Z,null),o.createElement(p.Z,{sx:{display:"flex",justifyContent:"left",flexWrap:"wrap",gap:"4px 4px"}},a.builtWith.map((function(e,t){return o.createElement(u.Z,{key:t,label:e})})))),o.createElement(s.ZP,{item:!0,xs:12},o.createElement(l.Z,{variant:"h6"},"Overview"),o.createElement(z.Z,null),o.createElement(l.Z,{variant:"body2",sx:{whiteSpace:"pre-line"}},a.overview)))))),o.createElement(s.ZP,{item:!0,xs:12},o.createElement(c.Z,{elevation:1},o.createElement(m.Z,null,o.createElement(s.ZP,{container:!0,spacing:1},o.createElement(s.ZP,{item:!0,xs:12},o.createElement(l.Z,{variant:"h5"},"Detail"),o.createElement(z.Z,null),o.createElement(l.Z,{variant:"body1",sx:{whiteSpace:"pre-line"}},a.detail)))))))),o.createElement(le,{work:a}))}}}]);