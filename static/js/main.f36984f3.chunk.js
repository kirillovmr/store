(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.c7fdac58.svg"},39:function(e,t,a){e.exports=a.p+"static/media/info_graphic.6505b75f.svg"},45:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(13),c=a.n(i),o=a(78),l=a(77),r=a(16),m=a(4),u=a(5),p=a(7),g=a(6),f=a(8),h=a(10),d=(a(61),a(76)),v=a(18),E=a.n(v),b=a(39),k=a.n(b);function y(){return s.a.createElement("div",{className:"col-lg-6 content-left"},s.a.createElement("div",{className:"content-left-wrapper"},s.a.createElement(d.a,{to:"/",id:"logo"},s.a.createElement("img",{src:E.a,alt:"",width:"49",height:"35"}),s.a.createElement("h1",{className:"title title-light"},"More Just Store")),s.a.createElement("div",{id:"social"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/morejust/store",target:"blank"},s.a.createElement("i",{className:"fab fa-github"}))))),s.a.createElement("div",null,s.a.createElement("figure",null,s.a.createElement("img",{src:k.a,alt:"",className:"img-fluid"})),s.a.createElement("h2",null,"Store Files Simple.",s.a.createElement("br",null),"Free. Forever"),s.a.createElement("p",null,"We use public GitHub repositories to store your files for free. You can create your own free unlimited cloud storage even on private repos. "),s.a.createElement("a",{href:"https://github.com/morejust/store/blob/master/README.md",target:"blank",className:"btn_1 rounded"},"Start Now!"),s.a.createElement(d.a,{to:"docs",style:{marginLeft:"10px"},className:"btn_1 rounded"},"Documentation")),s.a.createElement("div",{className:"copy"},"\xa9 2018 More Just Store")))}var N=a(14),w=a(15);function O(){var e=Object(N.a)(["\n  display: ",";\n  align-items: center;\n\n  span {\n    margin: ",";\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background: ",";\n\n    &:nth-child(1) {\n      animation: "," 1s ease-in-out infinite;\n    }\n\n    &:nth-child(2) {\n      animation: "," 1s ease-in-out 0.33s infinite;\n    }\n\n    &:nth-child(3) {\n      animation: "," 1s ease-in-out 0.66s infinite;\n    }\n  }\n"]);return O=function(){return e},e}function S(){var e=Object(N.a)(["\n  0%, 75%, 100% {\n    transform: translateY(0px)\n  } \n  25% {\n    transform: translateY(-10px)\n  }\n"]);return S=function(){return e},e}var x=Object(w.b)(S()),j=w.a.div(O(),function(e){return e.loading?"flex":"none"},function(e){return e.spaceBetween?"0 ".concat(e.spaceBetween,"px"):"0 10px"},function(e){return e.width?"".concat(e.width,"px"):"20px"},function(e){return e.height?"".concat(e.height,"px"):"20px"},function(e){return e.pColor?e.pColor:"#555"},x,x,x),I=function(e){return s.a.createElement(j,e,s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))};I.defaultProps={width:20,height:20,pColor:"#555",loading:!0,spaceBetween:10};var T=I;function C(){var e=Object(N.a)(["\n        display: flex;\n        width: 100%;\n        align-items: center;\n        flex-wrap: wrap;\n        justify-content: space-evenly;\n      "]);return C=function(){return e},e}var L=new Headers({"Access-Control-Allow-Origin":"*"}),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={loading:!1},a.toastId=[],a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.refs.formInput.files.length<1)this.notify("noFiles","\ud83d\udcc2 Select files first!");else if(this.refs.formInput.files.length>this.props.FILES_LIMIT)this.notify("fileLimit","\u270b You can upload ".concat(this.props.FILES_LIMIT," files ot once"));else{for(var a=this.refs.formInput.files,n=1e6*this.props.MAX_FILE_SIZE_MB,s=0;s<a.length;s++){var i=a[s];if(i.size>=n)return this.notify("fileSize","\ud83d\uded1 File ".concat(i.name," exceeds a size limit. Currently we support files no bigger than ").concat(this.props.MAX_FILE_SIZE_MB," mb.")),this.refs.formInput.value="",void this.filesChanged()}var c=new FormData(this.refs.form);this.setState({loading:!0}),this.refs.formInput.value="",this.filesChanged(),fetch("".concat(this.props.API_ROOT,"/upload"),{method:"POST",headers:L,body:c}).then(function(e){return e.json()}).then(function(e){t.props.addLinks(e),t.setState({loading:!1})}).catch(function(e){console.error(e),t.setState({loading:!1}),alert(e.name+": "+e.message)})}}},{key:"filesChanged",value:function(){var e=this.refs.formInput.files.length;this.refs.inputText.innerHTML=e>0?"You have selected ".concat(e," file(s)."):"Drag your files here or click in this area."}},{key:"notify",value:function(e,t){h.toast.isActive(this.toastId[e])||(this.toastId[e]=h.toast.error(t,{position:h.toast.POSITION.TOP_CENTER}))}},{key:"renderButton",value:function(){if(this.state.loading){var e=w.a.div(C());return s.a.createElement(e,null,s.a.createElement(T,{pColor:"#434bdf",height:15,width:15}))}return s.a.createElement("button",{ref:"formSubmit",className:"btn_1 rounded",type:"submit"},"Upload")}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-wrapper"},s.a.createElement("form",{ref:"form",onSubmit:this.submit.bind(this),id:"form-upload",className:"upload-form",method:"post",encType:"multipart/form-data"},s.a.createElement("input",{ref:"formInput",onChange:this.filesChanged.bind(this),id:"form-input",type:"file",name:"somefiles",multiple:!0}),s.a.createElement("p",{ref:"inputText"},"Drag your files here or click in this area."),this.renderButton()))}}]),t}(n.Component),A=a(42),B=a.n(A),M=a(31);function P(e){navigator.clipboard?navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)}):function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}var F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={displayCopyText:!1},a.timeout=null,a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"openInNewTab",value:function(e){window.open(e,"_blank").focus()}},{key:"linkClicked",value:function(e){var t=this;P(e),this.setState({displayCopyText:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){return t.setState({displayCopyText:!1})},1e3)}},{key:"render",value:function(){var e=this;return this.props.noLinks?s.a.createElement("div",{className:"card"},s.a.createElement("p",null,"Upload some files!"),s.a.createElement("div",{className:"placeholder"},s.a.createElement("img",{className:"icon-preview",src:"https://image.flaticon.com/icons/svg/1055/1055646.svg",alt:""}))):s.a.createElement(M.Motion,{defaultStyle:{x:this.props.defaultOpacity},style:{x:Object(M.spring)(1)}},function(t){return s.a.createElement("div",{className:"card",style:{opacity:"".concat(t.x)}},s.a.createElement("p",null,e.props.text),s.a.createElement("div",{className:"placeholder",onClick:function(){return e.linkClicked(e.props.link)}},s.a.createElement("img",{className:e.props.className||"icon-preview",src:e.props.imageSrc,alt:""})),s.a.createElement("div",{className:"card-btns"},s.a.createElement("div",{onClick:function(){return e.linkClicked(e.props.link)},className:"btn_1 card-btn"},s.a.createElement("i",{className:"fas fa-copy"}),e.state.displayCopyText?" Copied":""),s.a.createElement("div",{onClick:function(){return e.openInNewTab(e.props.link)},className:"btn_1 card-btn"},s.a.createElement("i",{className:"fas fa-file-download"}))))})}}]),t}(n.Component);var R=function(e){return s.a.createElement("div",{className:"row justify-content-md-center mb-4"},s.a.createElement("center",null,e.links.length>0?e.links.map(function(t,a){var n,i,c,o=t.split(".").pop(),l=function(e){var t=e.toLowerCase(),a={pdf:"https://image.flaticon.com/icons/svg/337/337946.svg",doc:"https://image.flaticon.com/icons/svg/337/337932.svg",docx:"https://image.flaticon.com/icons/svg/337/337932.svg",xls:"https://image.flaticon.com/icons/svg/337/337958.svg",xlsx:"https://image.flaticon.com/icons/svg/337/337958.svg",ppt:"https://image.flaticon.com/icons/svg/337/337949.svg",pptx:"https://image.flaticon.com/icons/svg/337/337949.svg",jpg:"https://image.flaticon.com/icons/svg/337/337940.svg",jpeg:"https://image.flaticon.com/icons/svg/337/337940.svg",png:"https://image.flaticon.com/icons/svg/337/337948.svg",svg:"https://image.flaticon.com/icons/svg/337/337954.svg",gif:"https://image.flaticon.com/icons/svg/337/337936.svg",cad:"https://image.flaticon.com/icons/svg/337/337926.svg",eps:"https://image.flaticon.com/icons/svg/337/337933.svg",bmp:"https://image.flaticon.com/icons/svg/337/337925.svg",zip:"https://image.flaticon.com/icons/svg/337/337960.svg",html:"https://image.flaticon.com/icons/svg/337/337937.svg",xml:"https://image.flaticon.com/icons/svg/337/337959.svg",css:"https://image.flaticon.com/icons/svg/337/337928.svg",txt:"https://image.flaticon.com/icons/svg/337/337956.svg",sql:"https://image.flaticon.com/icons/svg/337/337953.svg",php:"https://image.flaticon.com/icons/svg/337/337947.svg",js:"https://image.flaticon.com/icons/svg/337/337941.svg",jsx:"https://image.flaticon.com/icons/svg/337/337941.svg",mp3:"https://image.flaticon.com/icons/svg/337/337944.svg",psd:"https://image.flaticon.com/icons/svg/337/337951.svg",ai:"https://image.flaticon.com/icons/svg/337/337923.svg",tif:"https://image.flaticon.com/icons/svg/337/337955.svg",tiff:"https://image.flaticon.com/icons/svg/337/337955.svg",avi:"https://image.flaticon.com/icons/svg/337/337924.svg",mov:"https://image.flaticon.com/icons/svg/337/337943.svg",cdr:"https://image.flaticon.com/icons/svg/337/337927.svg",raw:"https://image.flaticon.com/icons/svg/337/337952.svg",iso:"https://image.flaticon.com/icons/svg/337/337939.svg",mpg:"https://image.flaticon.com/icons/svg/337/337945.svg",wmv:"https://image.flaticon.com/icons/svg/337/337957.svg",flv:"https://image.flaticon.com/icons/svg/337/337935.svg",dll:"https://image.flaticon.com/icons/svg/337/337930.svg",midi:"https://image.flaticon.com/icons/svg/337/337942.svg",dat:"https://image.flaticon.com/icons/svg/337/337929.svg",indd:"https://image.flaticon.com/icons/svg/337/337938.svg",aac:"https://image.flaticon.com/icons/svg/337/337922.svg",dmg:"https://image.flaticon.com/icons/svg/337/337931.svg","3ds":"https://image.flaticon.com/icons/svg/337/337921.svg",fla:"https://image.flaticon.com/icons/svg/337/337934.svg"};return["png","jpg","jpeg","svg"].includes(t),a[t]?a[t]:"https://image.flaticon.com/icons/svg/136/136509.svg"}(o),r=t.split("/").pop();return n=r.length>15?r.split(".")[0].substring(0,10)+"... ."+o:r,l?(i="icon-preview",c=l):(i="img-preview",c=t),s.a.createElement(F,{key:B()(),link:t,text:n,imageSrc:c,className:i,defaultOpacity:e.added>a?0:1})}):s.a.createElement(F,{noLinks:!0}),s.a.createElement("br",null),e.allLinksBtn?s.a.createElement(d.a,{to:"/links",className:"btn_1"},"View all links"):""))},D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={currentBlockText:"1",currentBlockStat:"10",totalText:"10",totalStat:"100"},a.currentBlockStatPrev="0",a.totalStatPrev="0",a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchRepoInfo()}},{key:"fetchRepoInfo",value:function(){var e=this;fetch("".concat(this.props.API_ROOT,"/stats"),{method:"POST"}).then(function(e){return e.json()}).then(function(t){var a=Math.floor(80*t.currentBlockSize/(1e3*t.maxBlockSizeMB))+20;e.setState(Object(r.a)({},e.state,{currentBlockText:t.currentBlock,currentBlockStat:a,totalText:t.totalUploaded/1e3})),console.log("Got blocks stats",t)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"block-stats"},s.a.createElement("div",{className:"stats-outer"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":this.statecurrentBlockStat,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(this.state.currentBlockStat,"%")}},s.a.createElement("p",null,"Current block:"),s.a.createElement("p",null,this.state.currentBlockText)))),s.a.createElement("div",{className:"stats-outer"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.totalStat,"%")},"aria-valuenow":this.state.totalStat,"aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("p",null,"Total uploaded:"),s.a.createElement("p",{id:"totalText"},this.state.totalText),s.a.createElement("p",null,"mb")))))}}]),t}(n.Component);function H(){return s.a.createElement("header",{className:"header-user"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8 header-left-col"},s.a.createElement("p",null,"Welcome back, user")),s.a.createElement("div",{className:"col-4"},s.a.createElement("div",{id:"social"},s.a.createElement(d.a,{to:"/"},s.a.createElement("p",{style:{marginRight:"5px"}},"Account"),s.a.createElement("i",{className:"fas fa-user"})))))))}function J(){var e=JSON.parse(localStorage.getItem("links"));return e||(e=[]),e}var z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={links:[],recentLinks:[],lastAddedAmount:0},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.lastAddedAmount===t.lastAddedAmount}},{key:"componentWillMount",value:function(){this.localLinksToState()}},{key:"saveToLocal",value:function(e){var t=JSON.stringify(e);localStorage.setItem("links",t)}},{key:"localLinksToState",value:function(){var e=J().reverse(),t=e.slice(0,3);this.setState({links:e,recentLinks:t})}},{key:"addLinks",value:function(e){this.setState({lastAddedAmount:e.length});var t=J().concat(e);this.saveToLocal(t),this.localLinksToState(),this.setState({lastAddedAmount:0})}},{key:"render",value:function(){var e=this.props.settings,t=e.FILES_LIMIT,a=e.MAX_FILE_SIZE_MB,n=e.API_ROOT;return s.a.createElement("div",{className:"col-lg-6 content-right"},this.state.recentLinks.length?s.a.createElement(H,null):"",s.a.createElement(_,{addLinks:this.addLinks.bind(this),FILES_LIMIT:t,MAX_FILE_SIZE_MB:a,API_ROOT:n}),s.a.createElement(R,{links:this.state.recentLinks,allLinksBtn:this.state.links>this.state.recentLinks,added:this.state.lastAddedAmount}),s.a.createElement(D,{API_ROOT:n}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={settings:{}},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e,t=(e=window.location.origin).includes("localhost")?"http://localhost:4000":"https://morejust.store"===e?"https://morejust.herokuapp.com":e;this.setState({settings:Object(r.a)({},this.state.settings,{API_ROOT:t})}),this.fetchInitialInfo(t)}},{key:"fetchInitialInfo",value:function(e){var t=this;fetch("".concat(e,"/initialInfo"),{method:"POST"}).then(function(e){return e.json()}).then(function(e){t.setState({settings:Object(r.a)({},t.state.settings,e)}),console.log("SetUp initial settings",t.state.settings)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid full-height"},s.a.createElement("div",{className:"row row-height"},s.a.createElement(y,null),s.a.createElement(z,{settings:this.state.settings}),s.a.createElement(h.ToastContainer,{transition:h.Zoom,hideProgressBar:!0,newestOnTop:!0,draggable:!1,pauseOnHover:!1})))}}]),t}(n.Component);function U(){return s.a.createElement("header",null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10 header-left-col"},s.a.createElement(d.a,{to:"/"},s.a.createElement("img",{src:E.a,alt:"",width:"49",height:"35"}),s.a.createElement("h1",{className:"title"},"More Just Store"))),s.a.createElement("div",{className:"col-2"},s.a.createElement("div",{id:"social"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/morejust/store",target:"blank"},s.a.createElement("i",{className:"fab fa-github"})))))))))}function Z(){return s.a.createElement("footer",{className:"clearfix"},s.a.createElement("div",{className:"container"},s.a.createElement("p",null,"\xa9 2018 More Just Store"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.a,{to:"/",className:"animated_link"},"Home")),s.a.createElement("li",null,s.a.createElement(d.a,{to:"/docs",className:"animated_link"},"Docs")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/morejust/store",target:"blank",className:"animated_link"},"GitHub")),s.a.createElement("li",null,s.a.createElement("a",{href:"#product-hunt",target:"blank",className:"animated_link"},"Product Hunt")))))}function W(){return s.a.createElement("div",null,s.a.createElement(U,null),s.a.createElement("main",{role:"main",className:"container"},s.a.createElement("h2",{className:"mt-5"},"* Todo docs page"),s.a.createElement("p",{className:"lead"},"Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with ",s.a.createElement("code",null,"padding-top: 60px;")," on the ",s.a.createElement("code",null,"body > .container"),"."),s.a.createElement("p",null,"Back to ",s.a.createElement(d.a,{to:"/"},"the main page")," to use service online.")),s.a.createElement(Z,null))}function X(){var e=J().reverse();return s.a.createElement("div",null,s.a.createElement(U,null),s.a.createElement("main",{role:"main",className:"container"},s.a.createElement("h3",{className:"mt-3 mb-4"},"Your files:"),s.a.createElement(R,{links:e})),s.a.createElement(Z,null))}var G=function(){return s.a.createElement(o.a,null,s.a.createElement("div",null,s.a.createElement(l.a,{path:"/",exact:!0,component:Y}),s.a.createElement(l.a,{path:"/docs",component:W}),s.a.createElement(l.a,{path:"/links",component:X})))};c.a.render(s.a.createElement(G,null),document.querySelector("#root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.f36984f3.chunk.js.map