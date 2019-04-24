(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{216:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return d}),n.d(a,"_frontmatter",function(){return g});n(39);var t=n(24),o=n.n(t),p=n(7),s=n.n(p),m=n(0),c=n.n(m),r=n(9),l=n(221),N={},d=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=l.a,n}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return c.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},N,n),components:a},c.a.createElement(r.MDXTag,{name:"p",components:a},"The Tippy instance is an individual tooltip object. It has a bunch of properties\nand methods that contain information and functionality to manipulate the tooltip\nprogrammatically."),c.a.createElement(r.MDXTag,{name:"h3",components:a},"Accessing an instance"),c.a.createElement(r.MDXTag,{name:"p",components:a},"If you pass an element or virtual element to ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"tippy()"),", the instance is directly\nreturned:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"button")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token dom variable"}},"document"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token func method"}},"querySelector"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"button"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")"),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"instance")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),"button",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"If you're passing a CSS selector string, NodeList, or an array of elements, then\nan array of instances get returned (since potentially many instances can be\ncreated):"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"instances")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},".btn"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Array")))),c.a.createElement(r.MDXTag,{name:"h3",components:a},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"h3",props:{className:"language-text"}},"_tippy")," property"),c.a.createElement(r.MDXTag,{name:"p",components:a},"Both the reference element and the popper element have the instance attached as\nthe ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"_tippy")," property."),c.a.createElement(r.MDXTag,{name:"p",components:a},"Reference element:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"button")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token dom variable"}},"document"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token func method"}},"querySelector"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"button"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")"),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),"button",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")"),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"instance")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," button",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token access property"}},"_tippy")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"Popper element (parent of tooltip):"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"popper")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token dom variable"}},"document"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token func method"}},"querySelector"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},".tippy-popper"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")"),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"instance")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," popper",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token access property"}},"_tippy")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"This is especially useful when listening to events on the tooltip and you need\nto find which reference element it's associated with."),c.a.createElement(r.MDXTag,{name:"h3",components:a},"Auto-initialization"),c.a.createElement(r.MDXTag,{name:"p",components:a},"If you're using auto-initialization (",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"data-tippy")," attribute), and you need to\naccess the instance immediately at runtime, make sure you wrap access in\n",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"setTimeout()"),":"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setTimeout"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token arrow operator"}},"=>")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"{"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"button")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token dom variable"}},"document"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token func method"}},"querySelector"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"button"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token quote punctuation"}},"'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"instance")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," button",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token access property"}},"_tippy"),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},")")))),c.a.createElement(r.MDXTag,{name:"h3",components:a},"Shape and properties"),c.a.createElement(r.MDXTag,{name:"p",components:a},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"instance")," is a plain object with these properties:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"{"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"id"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token number"}},"1"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// 1 to Infinity, used for `aria-describedby` attribute"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"reference"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class class-name"}},"HTMLButtonElement"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// <button>"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"popper"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class class-name"}},"HTMLDivElement"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},'// <div class="tippy-popper">...</div>'),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"popperChildren"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"{")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Child elements of the parent popper element"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"tooltip"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class class-name"}},"HTMLDivElement"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},'// <div class="tippy-tooltip">...</div>'),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"content"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class class-name"}},"HTMLDivElement"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},'// <div class="tippy-content">...</div>'),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"arrow"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token nil keyword"}},"null")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"|")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class class-name"}},"HTMLDivElement"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},'// <div class="tippy-arrow"></div>'),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"backdrop"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token nil keyword"}},"null")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"|")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class class-name"}},"HTMLDivElement"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},'// <div class="tippy-backdrop"></div>'),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"popperInstance"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token nil keyword"}},"null"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Instance is lazily created"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"props"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"{")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token spread punctuation"}},"...")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Instance props + attribute options merged together"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"state"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"{"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"isDestroyed"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Has the instance been destroyed?"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"isEnabled"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Is the tippy enabled (can show or hide)?"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"isVisible"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Is the tippy currently showing (and not transitioning out)?"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"isMounted"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Is the tippy currently mounted to the DOM?"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token definition property"}},"isShown"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Is the tippy fully shown after finishing transitioning in?"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// This object also contains methods. You'll learn in the next section."),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token block"}},"}")))))},a}(c.a.Component);d.isMDXComponent=!0;var g={}}}]);
//# sourceMappingURL=component---src-pages-tippy-instance-mdx-7a61fcd1450692cc5443.js.map