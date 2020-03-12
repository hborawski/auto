(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{66:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=i(o(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(2)),i(o(112));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const h=e=>{let{to:t}=e,o=d(e,["to"]);return t.includes("http")?a.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/troubleshooting.html")+t),a.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const c=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};c(()=>o.e(27).then(o.bind(null,113))),c(()=>o.e(27).then(o.bind(null,114)));var f=s("h1",{},void 0,"Troubleshooting"),p=s("code",{},void 0,"GH_TOKEN"),v=s("code",{},void 0,"auto"),g=s("code",{},void 0,"NPM_TOKEN"),m=s("p",{},void 0,"To version and publish you cannot have any changes in the git repo during publish. This means that if you build some files before release that aren't git-ignored ",s("code",{},void 0,"auto")," will fail to continue. To fix this either add those ",s("code",{},void 0,"dist")," files to your ",s("code",{},void 0,".gitignore")," or commit them somehow before the release."),b=s("p",{},void 0,"If you've encountered any of these errors you'll probably run into this problem. If the whole release process doesn't complete you can end up in a state when ",s("code",{},void 0,"auto"),' published the new version, but doesn\'t push that back to github. To fix this just bump the version number to the "previously published version".'),y=s("p",{},void 0,"If auto doesn't find a last release it will default to the first commit for version calculation (and a log of other things). If you have forked a repo, you fork all the merge commit messages as well. This confuses ",s("code",{},void 0,"auto")," since it will look for those pull requests in your fork and not the main one."),w=s("p",{},void 0,"To remedy this first tag your first commit in the fork with your first version. If the tags from the original repo are still in your repo you should just bump that version. This will let ",s("code",{},void 0,"auto")," ignore all the old merge commits."),k=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ You must also match this new tag version in your package.json"))),P=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,s("span",{className:"hljs-comment"},void 0,"# Set head to last release and tag it with 2.10.1"),s("br",{}),"git tag v2.10.1",s("br",{}))),O=s("p",{},void 0,"Then on GitHub go to your project, click release, then draft a new release. Select the tag you just published and ",s("code",{},void 0,"publish release"),". Now auto will be able to use the correct version and git log!");var j=e=>s("div",{className:e.className},void 0,s("section",{},void 0,f,s("h2",{id:"error%3A-can't-find-a-github-token-to-use"},void 0,"Error: Can't find a GitHub token to use ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#error%3A-can't-find-a-github-token-to-use","aria-hidden":"true"})),s("p",{},void 0,"You must set a ",s(h,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/settings/tokens",className:"external-link"},void 0,p)," for ",v," to work. If you publish to npm make sure to add your ",g," while you're at it as well."),s("h2",{id:"working-directory-not-clean"},void 0,"Working directory not clean ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#working-directory-not-clean","aria-hidden":"true"})),m,s("h2",{id:"you-cannot-publish-over-the-previously-published-versions"},void 0,"You cannot publish over the previously published versions ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#you-cannot-publish-over-the-previously-published-versions","aria-hidden":"true"})),b,s("h2",{id:"how-do-i-auto-a-fork-of-another-repo%3F"},void 0,"How do I auto a fork of another repo? ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#how-do-i-auto-a-fork-of-another-repo%3F","aria-hidden":"true"})),y,w,k,P,O));t.default=j,e.exports=t.default}}]);
//# sourceMappingURL=troubleshooting.js.map