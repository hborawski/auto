(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{78:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a,r=i(t(3)),n=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(o,t,a):o[t]=e[t]}return o.default=e,o}(t(0));i(t(2)),i(t(112));function i(e){return e&&e.__esModule?e:{default:e}}function d(e,o,t,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(o||0===i||(o={children:void 0}),o&&n)for(var d in n)void 0===o[d]&&(o[d]=n[d]);else o||(o=n||{});if(1===i)o.children=r;else if(i>1){for(var s=new Array(i),l=0;l<i;l++)s[l]=arguments[l+3];o.children=s}return{$$typeof:a,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}function s(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(){return(l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const u=e=>{let{to:o}=e,t=c(e,["to"]);return o.includes("http")?n.default.createElement("a",l({},e,{href:o})):("#"===o[0]&&(o=r.default.join("/auto/","pages/generated/canary.html")+o),n.default.createElement("a",l({},t,{href:o,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const a=new URL(r.default.join(window.location.origin,o));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,o),e.onClick();const n=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(n),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const v=e=>{var o,t;return t=o=class extends n.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},s(o,"defaultProps",{shouldLoad:!0}),t};v(()=>t.e(27).then(t.bind(null,113))),v(()=>t.e(27).then(t.bind(null,114)));var p=d("h1",{},void 0,d("code",{},void 0,"canary")),h=d("p",{},void 0,"Make a canary release of the project. Useful on PRs. If ran locally, ",d("code",{},void 0,"canary"),' will release a canary version for your current git HEAD. This is ran automatically from "shipit".'),f=d("ol",{},void 0,d("li",{},void 0,"In PR: 1.2.3-canary.123.0 + add version to PR body"),d("li",{},void 0,"Locally: 1.2.3-canary.1810cfd")),m=d("table",{},void 0,d("thead",{},void 0,d("tr",{},void 0,d("th",{},void 0,"Flag"),d("th",{},void 0,"Type"),d("th",{},void 0,"Description"))),d("tbody",{},void 0,d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--dry-run"),", ",d("code",{},void 0,"-d")),d("td",{},void 0,"Boolean"),d("td",{},void 0,"Report what command will do but do not actually do anything")),d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--pr")),d("td",{},void 0,"Number"),d("td",{},void 0,"PR number to use to create the canary version. Detected in CI env")),d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--build")),d("td",{},void 0,"String"),d("td",{},void 0,"Build number to use to create the canary version. Detected in CI env")),d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--message"),", ",d("code",{},void 0,"-m")),d("td",{},void 0,"String"),d("td",{},void 0,"Message to comment on PR with. Defaults to 'Published PR with canary version: %v'. Pass false to disable the comment")),d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--force")),d("td",{},void 0,"Boolean"),d("td",{},void 0,"Force a canary release, even if the PR is marked to skip the release")))),y=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,"auto canary",d("br",{}))),g=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,"auto canary --force",d("br",{}))),b=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,"auto canary --pr 123 --build 5",d("br",{}))),P=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,"auto canary --message ",d("span",{className:"hljs-string"},void 0,'"Install PR version: `yarn add -D my-project@%v`"'),d("br",{}))),w=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,"auto canary --message ",d("span",{className:"hljs-literal"},void 0,"false"),d("br",{}))),j=d("p",{},void 0,"You can configure some of the options for the ",d("code",{},void 0,"canary")," command in the ",d("code",{},void 0,".autorc"),"."),O=d("ul",{},void 0,d("li",{},void 0,d("code",{},void 0,"message")),d("li",{},void 0,d("code",{},void 0,"force"))),N=d("p",{},void 0,d("strong",{},void 0,"Example ",d("code",{},void 0,".autorc"),":")),k=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"canary"'),": {",d("br",{}),"    ",d("span",{className:"hljs-attr"},void 0,'"message"'),": ",d("span",{className:"hljs-string"},void 0,'"string"'),",",d("br",{}),"    ",d("span",{className:"hljs-attr"},void 0,'"force"'),": ",d("span",{className:"hljs-literal"},void 0,"true"),d("br",{}),"  }",d("br",{}),"}",d("br",{})));var C=e=>d("div",{className:e.className},void 0,d("section",{},void 0,p,h,f,d("h2",{id:"options"},void 0,"Options ",d(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),m,d("h2",{id:"examples"},void 0,"Examples ",d(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),y,g,b,P,w,d("h2",{id:"configurable-options"},void 0,"Configurable Options ",d(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configurable-options","aria-hidden":"true"})),j,O,N,k));o.default=C,e.exports=o.default}}]);
//# sourceMappingURL=canary.js.map