"use strict";(self.webpackChunkreact_templete=self.webpackChunkreact_templete||[]).push([[548],{6089:(e,t,o)=>{o.d(t,{Z:()=>w});var n=o(3366),i=o(7462),r=o(7294),a=o(6010),s=o(8320),l=o(4867),c=o(4780),m=o(7333);const p=(0,o(2807).ZP)();var u=o(6268),d=o(5893);const Z=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,u.Z)(),f=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),h=e=>(0,m.Z)({props:e,name:"MuiContainer",defaultTheme:x});var v=o(8216),g=o(948),E=o(1657);const b=function(e={}){const{createStyledComponent:t=f,useThemeProps:o=h,componentName:m="MuiContainer"}=e,p=t((({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,o)=>{const n=o,i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=r.forwardRef((function(e,t){const r=o(e),{className:u,component:x="div",disableGutters:f=!1,fixed:h=!1,maxWidth:v="lg"}=r,g=(0,n.Z)(r,Z),E=(0,i.Z)({},r,{component:x,disableGutters:f,fixed:h,maxWidth:v}),b=((e,t)=>{const{classes:o,fixed:n,disableGutters:i,maxWidth:r}=e,a={root:["root",r&&`maxWidth${(0,s.Z)(String(r))}`,n&&"fixed",i&&"disableGutters"]};return(0,c.Z)(a,(e=>(0,l.Z)(t,e)),o)})(E,m);return(0,d.jsx)(p,(0,i.Z)({as:x,ownerState:E,className:(0,a.Z)(b.root,u),ref:t},g))}));return u}({createStyledComponent:(0,g.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,E.Z)({props:e,name:"MuiContainer"})}),w=b},6548:(e,t,o)=>{o.r(t),o.d(t,{Profile:()=>ne});var n=o(7294),i=o(6089),r=o(2658),a=o(5725),s=o(5295),l=o(2643),c=o(7109),m=o(1508),p=o(461),u=o(7462),d=o(3366),Z=o(6010),x=o(8216),f=o(4780),h=o(948),v=o(1657);const g=n.createContext({});var E=o(4867),b=o(1588);function w(e){return(0,E.Z)("MuiTimeline",e)}(0,b.Z)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);var y=o(5893);const C=["position","className"],S=(0,h.ZP)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[`position${(0,x.Z)(o.position)}`]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),R=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimeline"}),{position:i="right",className:r}=o,a=(0,d.Z)(o,C),s=(0,u.Z)({},o,{position:i}),l=(e=>{const{position:t,classes:o}=e,n={root:["root",t&&`position${(0,x.Z)(t)}`]};return(0,f.Z)(n,w,o)})(s),c=n.useMemo((()=>({position:i})),[i]);return(0,y.jsx)(g.Provider,{value:c,children:(0,y.jsx)(S,(0,u.Z)({className:(0,Z.Z)(l.root,r),ownerState:s,ref:t},a))})}));var M=o(8502);function T(e){return(0,E.Z)("MuiTimelineContent",e)}const P=(0,b.Z)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]);function k(e){return(0,E.Z)("MuiTimelineOppositeContent",e)}const N=(0,b.Z)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]);function $(e){return(0,E.Z)("MuiTimelineItem",e)}(0,b.Z)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);const W=["position","className"],G=(0,h.ZP)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,x.Z)(o.position)}`]]}})((({ownerState:e})=>(0,u.Z)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===e.position&&{flexDirection:"row-reverse"},"alternate"===e.position&&{"&:nth-of-type(even)":{flexDirection:"row-reverse",[`& .${P.root}`]:{textAlign:"right"},[`& .${N.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}}))),j=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimelineItem"}),{position:i,className:r}=o,a=(0,d.Z)(o,W),{position:s}=n.useContext(g);let l=!1;n.Children.forEach(o.children,(e=>{(0,M.Z)(e,["TimelineOppositeContent"])&&(l=!0)}));const c=(0,u.Z)({},o,{position:i||s||"right",hasOppositeContent:l}),m=(e=>{const{position:t,classes:o,hasOppositeContent:n}=e,i={root:["root",`position${(0,x.Z)(t)}`,!n&&"missingOppositeContent"]};return(0,f.Z)(i,$,o)})(c),p=n.useMemo((()=>({position:c.position})),[c.position]);return(0,y.jsx)(g.Provider,{value:p,children:(0,y.jsx)(G,(0,u.Z)({className:(0,Z.Z)(m.root,r),ownerState:c,ref:t},a))})}));function A(e){return(0,E.Z)("MuiTimelineSeparator",e)}(0,b.Z)("MuiTimelineSeparator",["root"]);const O=["className"],D=(0,h.ZP)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),L=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimelineSeparator"}),{className:n}=o,i=(0,d.Z)(o,O),r=o,a=(e=>{const{classes:t}=e;return(0,f.Z)({root:["root"]},A,t)})(r);return(0,y.jsx)(D,(0,u.Z)({className:(0,Z.Z)(a.root,n),ownerState:r,ref:t},i))}));function I(e){return(0,E.Z)("MuiTimelineConnector",e)}(0,b.Z)("MuiTimelineConnector",["root"]);const z=["className"],H=(0,h.ZP)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1}))),_=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimelineConnector"}),{className:n}=o,i=(0,d.Z)(o,z),r=o,a=(e=>{const{classes:t}=e;return(0,f.Z)({root:["root"]},I,t)})(r);return(0,y.jsx)(H,(0,u.Z)({className:(0,Z.Z)(a.root,n),ownerState:r,ref:t},i))})),F=["className"],q=(0,h.ZP)(r.Z,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,x.Z)(o.position)}`]]}})((({ownerState:e})=>(0,u.Z)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"}))),B=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimelineContent"}),{className:i}=o,r=(0,d.Z)(o,F),{position:a}=n.useContext(g),s=(0,u.Z)({},o,{position:a||"right"}),l=(e=>{const{position:t,classes:o}=e,n={root:["root",`position${(0,x.Z)(t)}`]};return(0,f.Z)(n,T,o)})(s);return(0,y.jsx)(q,(0,u.Z)({component:"div",className:(0,Z.Z)(l.root,i),ownerState:s,ref:t},r))})),J=["className"],K=(0,h.ZP)(r.Z,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,x.Z)(o.position)}`]]}})((({ownerState:e})=>(0,u.Z)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===e.position&&{textAlign:"left"}))),Q=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimelineOppositeContent"}),{className:i}=o,r=(0,d.Z)(o,J),{position:a}=n.useContext(g),s=(0,u.Z)({},o,{position:a||"left"}),l=(e=>{const{position:t,classes:o}=e,n={root:["root",`position${(0,x.Z)(t)}`]};return(0,f.Z)(n,k,o)})(s);return(0,y.jsx)(K,(0,u.Z)({component:"div",className:(0,Z.Z)(l.root,i),ownerState:s,ref:t},r))}));Q.muiName="TimelineOppositeContent";const U=Q;function V(e){return(0,E.Z)("MuiTimelineDot",e)}(0,b.Z)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const X=["className","color","variant"],Y=(0,h.ZP)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["inherit"!==o.color&&`${o.variant}${(0,x.Z)(o.color)}`],t[o.variant]]}})((({ownerState:e,theme:t})=>(0,u.Z)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},"filled"===e.variant&&(0,u.Z)({borderColor:"transparent"},"inherit"!==e.color&&(0,u.Z)({},"grey"===e.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),"outlined"===e.variant&&(0,u.Z)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==e.color&&(0,u.Z)({},"grey"===e.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main}))))),ee=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiTimelineDot"}),{className:n,color:i="grey",variant:r="filled"}=o,a=(0,d.Z)(o,X),s=(0,u.Z)({},o,{color:i,variant:r}),l=(e=>{const{color:t,variant:o,classes:n}=e,i={root:["root",o,"inherit"!==t&&`${o}${(0,x.Z)(t)}`]};return(0,f.Z)(i,V,n)})(s);return(0,y.jsx)(Y,(0,u.Z)({className:(0,Z.Z)(l.root,n),ownerState:s,ref:t},a))}));var te=o(3814),oe=o(568),ne=function(e){var t;return n.createElement(i.Z,{maxWidth:!1,disableGutters:!0},n.createElement(r.Z,{variant:"h4"},"About"),n.createElement(te.Z,{variant:"section"}),n.createElement(a.ZP,{container:!0,spacing:2},n.createElement(a.ZP,{item:!0,xs:12,lg:5,xl:4,height:"fit-content"},n.createElement(s.Z,{elevation:1},n.createElement(l.Z,null,n.createElement(a.ZP,{container:!0,spacing:1},n.createElement(a.ZP,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement(c.Z,{src:"".concat(window.location.origin,"/images/").concat(oe.E.avatarPath),sx:{height:"200px",width:"200px"}})),n.createElement(a.ZP,{item:!0,xs:12,sx:{textAlign:"center"}},n.createElement(r.Z,{fontSize:30},oe.E.name)),n.createElement(a.ZP,{item:!0,xs:12},n.createElement(r.Z,{variant:"h6"},"Skills"),n.createElement(te.Z,null),n.createElement(m.Z,{sx:{display:"flex",justifyContent:"left",flexWrap:"wrap",gap:"4px 4px"}},oe.E.skills.map((function(e,t){return n.createElement(p.Z,{key:t,label:e})})))),n.createElement(a.ZP,{item:!0,xs:12},n.createElement(r.Z,{variant:"h6"},"Licenses"),n.createElement(te.Z,null),oe.E.lisences.map((function(e,t){return n.createElement(r.Z,{key:e,variant:"body2",lineHeight:"1.7rem",sx:{whiteSpace:"pre-line"}},e)}))),n.createElement(a.ZP,{item:!0,xs:12},n.createElement(r.Z,{variant:"h6"},"Fun"),n.createElement(te.Z,null),oe.E.fun.map((function(e){return n.createElement(m.Z,{key:e.title,sx:{display:"flex"}},n.createElement(r.Z,{variant:"body2",lineHeight:"1.7rem"},e.title),n.createElement(r.Z,{variant:"body2",lineHeight:"1.7rem",sx:{ml:"auto"}},e.text))}))))))),n.createElement(a.ZP,{item:!0,container:!0,xs:12,lg:7,xl:8,spacing:2,height:"fit-content"},n.createElement(a.ZP,{item:!0,xs:12},n.createElement(s.Z,{elevation:1},n.createElement(l.Z,null,n.createElement(a.ZP,{container:!0,spacing:1},n.createElement(a.ZP,{item:!0,xs:12},n.createElement(r.Z,{variant:"h5"},"Description"),n.createElement(te.Z,null),n.createElement(r.Z,{variant:"body1",sx:{whiteSpace:"pre-line"}},oe.E.description)))))),n.createElement(a.ZP,{item:!0,xs:12},n.createElement(r.Z,{variant:"h5"},"Career"),n.createElement(te.Z,null),n.createElement(R,{position:"right",onResize:void 0,onResizeCapture:void 0,sx:(t={px:0},t["& .".concat(N.root)]={flex:.15},t)},oe.E.career.map((function(e){return n.createElement(j,{key:e.title},n.createElement(U,{sx:{m:"14px 0 0 0",pl:0,display:{xs:"none",sm:"block"}},align:"right",variant:"body2",color:"text.secondary"},e.title),n.createElement(L,null,n.createElement(ee,{variant:"outlined"},e.icon),n.createElement(_,null)),n.createElement(B,{sx:{py:"12px",pl:2,pr:0}},n.createElement(r.Z,{variant:"body2",color:"text.secondary",sx:{display:{xs:"block",sm:"none"}}},e.title),n.createElement(s.Z,{elevation:1},n.createElement(l.Z,null,n.createElement(r.Z,{variant:"h6"},e.content.title),n.createElement(te.Z,{variant:"subhead"}),n.createElement(r.Z,{variant:"body2",sx:{whiteSpace:"pre-line"}},e.content.text)))))})))))))}}}]);