(this.webpackJsonpzapetta=this.webpackJsonpzapetta||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},22:function(e,t,a){},23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),o=a.n(c),r=(a(22),a(16)),l=a(5),s=a(6),u=a(7),h=a(4),f=a(9),p=a(10),m=a(1),w=(a(23),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),console.log("Props button ",e),n.state={active:!1,config:n.props.config},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){this.props.handleClick(this.state.config.id)}},{key:"render",value:function(){return i.a.createElement(m.Box,null,i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},this.state.config.isLive?i.a.createElement(m.Tag,{isColor:"success"},"Live"):i.a.createElement(m.Tag,null,"Off"),i.a.createElement(m.Image,{isSize:"96x96",className:"rounded",src:this.state.config.imageUrl}),i.a.createElement(m.Button,{id:"preview-btn-".concat(this.state.config.id),onMouseEnter:this.props.handleButtonMouseEnter,onMouseLeave:this.props.handleButtonMouseLeave,onClick:this.handleClick},this.state.config.switchText)))}}]),a}(n.Component)),d=a(8),g=a.n(d),v=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={url:null},n.channelsCfg=n.props.channelsConfig,n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleShowPreview=n.handleShowPreview.bind(Object(h.a)(n)),n.handleHidePreview=n.handleHidePreview.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){this.props.triggerSwitch(e)}},{key:"handleShowPreview",value:function(e){var t=document.getElementById("preview-btn-".concat(e)),a={top:t.offsetTop,left:t.offsetLeft};console.log("Show preview ",e),this.props.triggerPreview(e,!0,a)}},{key:"handleHidePreview",value:function(e){console.log("Hide preview",e),this.props.triggerPreview(e,!1,null)}},{key:"render",value:function(){var e=this,t=this.channelsCfg,a=Object.keys(t).map((function(a){return i.a.createElement(m.Column,{style:{flexGrow:0}},i.a.createElement(w,{handleButtonMouseEnter:function(t){return e.handleShowPreview(a,t)},handleButtonMouseLeave:function(t){return e.handleHidePreview(a,t)},key:a,config:t[a],handleClick:e.handleClick}))}));return i.a.createElement("div",null,i.a.createElement(m.Columns,{isCentered:!0},a))}}]),a}(n.Component),b=(a(43),function(e){return e?new URL(e).searchParams.get("v"):""}),y={width:"400px",height:"242px",zIndex:1,position:"absolute"};function j(e){for(var t={watania1:{id:"watania1",name:"Wataniya 1",imageUrl:"https://yt3.ggpht.com/a/AATXAJwRORj5fMAI_AjY92uZ-5yPuRm6yqbZVsdBIQ=s100-c-k-c0xffffffff-no-rj-mo",url:"https://www.youtube.com/watch?v=kQ2qPpNNnWY",isLive:!0,switchText:"zappi"},watania2:{id:"watania2",name:"Wataniya 2",imageUrl:"https://yt3.ggpht.com/a/AATXAJys87C140F7raYZKeRrUNPcck21D4B8C30dvA=s100-c-k-c0xffffffff-no-rj-mo",url:"https://www.youtube.com/watch?v=JQblM_UaEjM",isLive:!0,switchText:"zappi"},Hiwar:{id:"Hiwar",name:"Hiwar",imageUrl:"https://yt3.ggpht.com/a/AATXAJz9yF3FMUCAM-535jJmBRFgNhk6_Ncfp5Q2Jg=s100-c-k-c0xffffffff-no-rj-mo",url:"https://www.youtube.com/watch?v=YBKTAwZRHHw",isLive:!1,switchText:"zappi"},carthageplus:{id:"carthageplus",name:"Carthage+",imageUrl:"https://yt3.ggpht.com/a/AATXAJyt0Up2McFYy9LsFfAxM-BSUmF52ZaN2f2ceQ=s48-c-k-c0xffffffff-no-rj-mo",url:"",isLive:!1,switchText:"zappi"},attessia:{id:"attessia",name:"Attesia",imageUrl:"https://yt3.ggpht.com/a/AATXAJxRM8HEhrEPPHCPX4ReJ6B5UL8lzmQCBYw-rg=s100-c-k-c0xffffffff-no-rj-mo",url:"",isLive:!1,switchText:"zappi"}},a="",c="",o=0,s=Object.keys(t);o<s.length;o++){var u=s[o];if(t[u].isLive){c=t[u].url,a=b(c),!0;break}}var h=Object(n.useState)(a),f=Object(l.a)(h,2),p=(f[0],f[1]),w=Object(n.useState)(c),d=Object(l.a)(w,2),j=d[0],k=d[1],C=Object(n.useState)(!0),x=Object(l.a)(C,2),O=x[0],E=x[1],A=Object(n.useState)(!1),P=Object(l.a)(A,2),L=P[0],S=P[1],B=Object(n.useState)({top:"0px",left:"0px"}),T=Object(l.a)(B,2),M=T[0],z=T[1],U=Object(n.useState)(""),H=Object(l.a)(U,2),J=H[0],N=H[1];return i.a.createElement("div",null,i.a.createElement("div",{style:Object(r.a)({},y,{},M,{display:L?"block":"none"}),className:"preview-container"},i.a.createElement(g.a,{width:"360px",height:"202px",url:J,playing:L})),i.a.createElement(v,{triggerPreview:function(e,a,n){S(a&&t[e].isLive),N(t[e].url),null!==n&&z({top:"".concat(n.top+55,"px"),left:"".concat(n.left-132,"px")})},channelsConfig:t,triggerSwitch:function(e){k(t[e].url),p(b(j)),E(t[e].isLive)}}),i.a.createElement(m.Columns,{isCentered:!0},O?i.a.createElement(m.Column,{isSize:"1/12",style:{flexGrow:0}},i.a.createElement(g.a,{width:"1280px",height:"720px",url:j,playing:!0,controls:!0})):i.a.createElement(m.Column,{isSize:"1/4"},i.a.createElement(m.Notification,null,"Channel is not live yet ! Please select an other channel"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.169d4962.chunk.js.map