(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,n){e.exports=n(411)},191:function(e,t,n){},206:function(e,t){},208:function(e,t){},240:function(e,t){},241:function(e,t){},310:function(e,t){},403:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(176),o=n.n(r),s=(n(191),n(34)),c=n(35),l=n(38),u=n(36),h=n(39),d=n(421),m=n(177),f=n.n(m),p=(n(403),n(183)),b=Object(p.a)({palette:{type:"dark"},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),v=n(184),g=n(182),O=n(422),j=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1}}},w=n(78),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).resize=function(e){n.setState({dimensions:e.bounds})},n.state={dimensions:{width:-1,height:-1}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,n=e.containerWidth,a=e.containerHeight,r=this.state.dimensions;r.width,r.height;return i.a.createElement(w.a,{bounds:!0,onResize:this.resize},function(e){e.measureRef;return i.a.createElement("div",{className:"playerContainer",style:{width:n+"%",height:a+"%"}},i.a.createElement("div",{className:"player"},i.a.createElement("iframe",{src:"https://www.facebook.com/plugins/video.php?href={id}".replace("{id}",t["#id"]),className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).resize=function(e){n.setState({dimensions:e.bounds})},n.state={dimensions:{width:-1,height:-1}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e)return null;var t=this.state.dimensions,n=t.width,a=t.height,r=e.length,o=1,s=1;r>1&&(2===r?o=2:(1.2*n<a?(o=1,s=4):(o=2,s=2),r>4&&(r<=6?o=3:(o=3,s=3))));var c=100/o,l=100/s;return 1.2*n>=a&&n<a&&(c=100/s,l=100/o),i.a.createElement(w.a,{bounds:!0,onResize:this.resize},function(t){var n=t.measureRef;return i.a.createElement("div",{ref:n,className:"playerList"},e.map(function(e,t){return i.a.createElement(y,{key:t,player:e,containerWidth:c,containerHeight:l})}))})}}]),t}(a.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentLink:null,mobileOpen:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.classes,a=e.loading;return i.a.createElement("div",{className:n.root},a?i.a.createElement("div",{className:n.progress},i.a.createElement(O.a,null)):i.a.createElement(k,{data:t}))}}]),t}(a.Component),N=Object(v.a)(Object(g.a)(j,{withTheme:!0}))(E),z="1_QH7-3zpffqKuynriXacy1yZOdl1xwU97RgW-Y-9Fg8",C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).refresh=function(){e.setState({loading:!0});var t=z;t?f.a.init({key:t,callback:function(t,n){e.setState({loading:!1,data:t})},simpleSheet:!0}):e.setState({loading:!1})},e.state={loading:!1,data:null},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.loading;return i.a.createElement(d.a,{theme:b},i.a.createElement(N,{data:t,loading:n}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,1,2]]]);