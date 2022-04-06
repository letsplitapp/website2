(self.webpackChunktest=self.webpackChunktest||[]).push([[678],{6291:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},9077:function(e,t,n){var a=n(8640)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var l,o,s=t.prefix||"__jp",i=t.name||s+c++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,M=encodeURIComponent,g=document.getElementsByTagName("script")[0]||document.head;m&&(o=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){l.parentNode&&l.parentNode.removeChild(l),window[i]=r,o&&clearTimeout(o)}return window[i]=function(e){a("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+M(i)).replace("?&","?"),a('jsonp req "%s"',e),(l=document.createElement("script")).src=e,g.parentNode.insertBefore(l,g),function(){window[i]&&p()}};var c=0;function r(){}},8640:function(e,t,n){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=n(9196)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var c=0,r=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(c++,"%c"===e&&(r=c))})),e.splice(r,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())},9196:function(e,t,n){var a;function c(e){function n(){if(n.enabled){var e=n,c=+new Date,r=c-(a||c);e.diff=r,e.prev=a,e.curr=c,a=c;for(var l=new Array(arguments.length),o=0;o<l.length;o++)l[o]=arguments[o];l[0]=t.coerce(l[0]),"string"!=typeof l[0]&&l.unshift("%O");var s=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;s++;var c=t.formatters[a];if("function"==typeof c){var r=l[s];n=c.call(e,r),l.splice(s,1),s--}return n})),t.formatArgs.call(e,l);var i=n.log||t.log||console.log.bind(console);i.apply(e,l)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=c.debug=c.default=c).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,c=0;c<a;c++)n[c]&&("-"===(e=n[c].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(876),t.names=[],t.skips=[],t.formatters={}},876:function(e){var t=1e3,n=60*t,a=60*n,c=24*a,r=365.25*c;function l(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,o){o=o||{};var s,i=typeof e;if("string"===i&&e.length>0)return function(e){if((e=String(e)).length>100)return;var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!l)return;var o=parseFloat(l[1]);switch((l[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*r;case"days":case"day":case"d":return o*c;case"hours":case"hour":case"hrs":case"hr":case"h":return o*a;case"minutes":case"minute":case"mins":case"min":case"m":return o*n;case"seconds":case"second":case"secs":case"sec":case"s":return o*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(e);if("number"===i&&!1===isNaN(e))return o.long?l(s=e,c,"day")||l(s,a,"hour")||l(s,n,"minute")||l(s,t,"second")||s+" ms":function(e){if(e>=c)return Math.round(e/c)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},1202:function(e,t,n){"use strict";t.Z=void 0;var a,c=(a=n(9077))&&a.__esModule?a:{default:a},r=n(6291);var l=function(e){var t=e.url,n=e.timeout;return new Promise((function(e,a){return(0,c.default)(t,{param:"c",timeout:n},(function(t,n){t&&a(t),n&&e(n)}))}))},o=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a="group["===n.substring(0,6)?n:n.toUpperCase();t=t.concat("&".concat(a,"=").concat(e[n]))}return t},s=function(e,t,n){var a=(0,r.validate)(e),c=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://letsplit.us1.list-manage.com/subscribe/post?u=4e80e7d44286b109737bef8e5&amp;id=e6787a7b33",i=3500;arguments.length<3&&"string"==typeof t?s=t:"string"==typeof n&&(s=n),s=s.replace(/\/post/g,"/post-json");var u="&EMAIL=".concat(c).concat(o(t)),m="".concat(s).concat(u);return l({url:m,timeout:i})};t.Z=s},5610:function(e,t,n){"use strict";var a=n(7294);t.Z=function(){return a.createElement("footer",null,a.createElement("div",null,"Copyright © 2022 Let’s Split. All rights reserved."),a.createElement("div",null,a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"./privacy-policy.pdf"},"Legal & Policies")),a.createElement("li",null,"Use of Cookies"))))}},747:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),c=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.createElement(a.Fragment,null,a.createElement("header",{className:"bg-blue"},a.createElement("div",{className:"burger"+(t?" open":""),onClick:function(){return n(!t)}},a.createElement("div",{className:"bars"})),a.createElement("div",{className:"container"},a.createElement("div",{className:"left"},a.createElement("div",{className:"logo"},a.createElement("a",{href:"../"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzOSA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIyLjczMDJWMUMwIDAuNDQ3NzIgMC40NDc3MiAwIDEgMEgyNUMyNS41NTIzIDAgMjYgMC40NDc3MSAyNiAxVjIyLjYwOTRDMjYgMjMuNDIyNSAyNS4wODEzIDIzLjg5NTcgMjQuNDE5MyAyMy40MjM2TDIyLjAzNzUgMjEuNzI0OEMyMS43MTE1IDIxLjQ5MjMgMjEuMjc4MiAyMS40NzY3IDIwLjkzNjMgMjEuNjg1MkwxNy45OTEzIDIzLjQ4MDlDMTcuNjg3MSAyMy42NjY0IDE3LjMwNzMgMjMuNjc2IDE2Ljk5NDEgMjMuNTA2M0wxMy40NzY1IDIxLjU5OTdDMTMuMTc5MyAyMS40Mzg2IDEyLjgyMDcgMjEuNDM4NiAxMi41MjM1IDIxLjU5OTdMOC45NzY1MSAyMy41MjIyQzguNjc5MjcgMjMuNjgzMyA4LjMyMDc0IDIzLjY4MzMgOC4wMjM0OSAyMy41MjIyTDQuNjI2MDEgMjEuNjgwOEM0LjI1MTMxIDIxLjQ3NzcgMy43ODkwNyAyMS41MzQ0IDMuNDc0NTggMjEuODIyTDEuNjc0OTEgMjMuNDY4MUMxLjAzMzI1IDI0LjA1NSAwIDIzLjU5OTggMCAyMi43MzAyWk0zOSAyNy44NTU5VjQzQzM5IDQzLjU1MjMgMzguNTUyMyA0NCAzOCA0NEgxNEMxMy40NDc3IDQ0IDEzIDQzLjU1MjMgMTMgNDNWMjcuOTYxQzEzIDI3LjIxMjkgMTMuNzkxMyAyNi43Mjk3IDE0LjQ1NjggMjcuMDcxNEwxNy4wNzY4IDI4LjQxNjhDMTcuMzQ0NiAyOC41NTQzIDE3LjY2IDI4LjU2MzkgMTcuOTM1NiAyOC40NDI5TDIxLjEyMDUgMjcuMDQ0NkMyMS4zNjM1IDI2LjkzOCAyMS42Mzg5IDI2LjkzMjIgMjEuODg2MSAyNy4wMjg3TDI1LjYzNjUgMjguNDkyM0MyNS44NzAyIDI4LjU4MzUgMjYuMTI5OCAyOC41ODM1IDI2LjM2MzUgMjguNDkyM0wzMC4xMzY1IDI3LjAxOTlDMzAuMzcwMiAyNi45Mjg3IDMwLjYyOTggMjYuOTI4NyAzMC44NjM1IDI3LjAxOTlMMzQuNTE4MyAyOC40NDYyQzM0LjgyMDQgMjguNTY0MSAzNS4xNjEgMjguNTI4MSAzNS40MzE4IDI4LjM0OThMMzcuNDUgMjcuMDIwN0MzOC4xMTQ5IDI2LjU4MjkgMzkgMjcuMDU5OCAzOSAyNy44NTU5Wk0yMyAzOUMyMyAzOC40NDc3IDIzLjQ0NzcgMzggMjQgMzhIMjhDMjguNTUyMyAzOCAyOSAzOC40NDc3IDI5IDM5QzI5IDM5LjU1MjMgMjguNTUyMyA0MCAyOCA0MEgyNEMyMy40NDc3IDQwIDIzIDM5LjU1MjMgMjMgMzlaTTM1IDMzSDE3QzE2LjQ0NzcgMzMgMTYgMzMuNDQ3NyAxNiAzNEMxNiAzNC41NTIzIDE2LjQ0NzcgMzUgMTcgMzVIMzVDMzUuNTUyMyAzNSAzNiAzNC41NTIzIDM2IDM0QzM2IDMzLjQ0NzcgMzUuNTUyMyAzMyAzNSAzM1pNNCAxMUgxNEMxNC41NTIzIDExIDE1IDExLjQ0NzcgMTUgMTJDMTUgMTIuNTUyMyAxNC41NTIzIDEzIDE0IDEzSDRDMy40NDc3MiAxMyAzIDEyLjU1MjMgMyAxMkMzIDExLjQ0NzcgMy40NDc3MiAxMSA0IDExWk0yMiAxMUgxOEMxNy40NDc3IDExIDE3IDExLjQ0NzcgMTcgMTJDMTcgMTIuNTUyMyAxNy40NDc3IDEzIDE4IDEzSDIyQzIyLjU1MjMgMTMgMjMgMTIuNTUyMyAyMyAxMkMyMyAxMS40NDc3IDIyLjU1MjMgMTEgMjIgMTFaTTQgNkgyMkMyMi41NTIzIDYgMjMgNi40NDc3MiAyMyA3QzIzIDcuNTUyMjggMjIuNTUyMyA4IDIyIDhINEMzLjQ0NzcyIDggMyA3LjU1MjI4IDMgN0MzIDYuNDQ3NzIgMy40NDc3MiA2IDQgNloiIGZpbGw9IiMzQTQxRTgiLz4KPC9zdmc+Cg==",alt:"Let's split",width:40,height:40}),"Let’s Split"))),a.createElement("div",{className:"right"+(t?" open":"")},a.createElement("a",{href:"https://www.letsplit.com/#how"},"How it works"),a.createElement("a",{href:"./support"},"Support")))))}},6725:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7294),c=n(5414),r=n.p+"static/hero-67bd1123421784a04b447f6b33ef5c17.png",l=n.p+"static/phone_1-83c4519aedc2fb694fddba31a6825d79.png",o=n.p+"static/choose_people-653dd299744cf3e1e8c67e59d1799fd0.png",s=n.p+"static/split-8209b027af73ce369b572aeb33258a48.png",i=n.p+"static/get_paid-5d473229eabb1434151900cb159a0db6.png",u=n.p+"static/easier-eacea43e699444e8291067e73eb9cf13.jpg",m=n.p+"static/anything-70be8c7b5d74b40b2853cfc1b67e5232.jpg",M=n(747),g=n(5610),p=n(1721),d=n(1202),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))||this).state={name:null,email:null,isModalOpen:!1},t._handleChange=function(e){var n,a;console.log(((n={})[""+e.target.name]=e.target.value,n)),t.setState(((a={})[""+e.target.name]=e.target.value,a))},t._handleSubmit=function(e){e.preventDefault(),(0,d.Z)(t.state.email,t.state).then((function(e){var n=e.msg,a=e.result;if(console.log("msg",a+": "+n),"success"!==a)throw n;t.setState({isModalOpen:!0})})).catch((function(e){console.log("err",e)}))},t._onClickButton=function(){t.setState({isModalOpen:!1})},t}return(0,p.Z)(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement("div",null,a.createElement("form",{id:"form1",className:"mailchimp-form",onSubmit:this._handleSubmit},a.createElement("input",{className:"mailchimp-email",type:"email",onChange:this._handleChange,placeholder:"Your email",name:"email"}),a.createElement("button",{className:"mailchimp-submit button-blue",type:"submit",form:"form1",value:"Submit"},"Get early access"))),this.state.isModalOpen&&a.createElement("div",{className:"popup-overlay"},a.createElement("div",{className:"popup"},a.createElement("h3",null,"Well done!"),a.createElement("p",null,"We have added your email address to the signup queue. We will update you soon with your invite."),a.createElement("button",{className:"button-blue",onClick:this._onClickButton},"OK"))))},t}(a.Component),N={color:"#000",padding:0,fontFamily:"Poppins, sans-serif"},E={color:"#3A41E8"},f=function(){return a.createElement(a.Fragment,null,a.createElement(c.q,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,"Let’s Split - Share expenses"),a.createElement("meta",{name:"description",content:"Let’s Split app makes it easier to come to terms with friends and family. Select past expenses, send split requests and receive your money quickly, all in one app."}),a.createElement("meta",{name:"keywords",content:"Let’s Split, Expense, Social expense, Mobile Payments, Mobile Payment App, Friends, Pay Your Friends, Startup, Share expense, Free, Simple, Split Bill, Split Check, Split Dinner, iPhone App, Android App, easy, Credit Card"})),a.createElement("main",{style:N},a.createElement(M.Z,null),a.createElement("section",{className:"bg-blue"},a.createElement("div",{className:"container hero"},a.createElement("div",{className:"column column-content"},a.createElement("div",null,a.createElement("h1",{style:E},"A simple way to split expenses with anyone"),a.createElement(y,null))),a.createElement("div",{className:"column column-img"},a.createElement("img",{src:r,alt:"iphone"})))),a.createElement("section",null,a.createElement("div",{className:"container inverse easier-section"},a.createElement("div",{className:"column column-content"},a.createElement("p",null,"Let’s Split app makes it easier to track and come to terms with shared expenses."),a.createElement("p",null,"Send and receive money with your roommates, loved ones or friends all in one app.")),a.createElement("div",{className:"column column-img"},a.createElement("div",null,a.createElement("img",{src:u,alt:"iphone"}))))),a.createElement("section",null,a.createElement("div",{className:"container anything-section"},a.createElement("div",{className:"column column-content"},a.createElement("div",null,a.createElement("h3",{className:"color-black"},"Split anything"),a.createElement("p",null,"Split ",a.createElement("span",{className:"color-blue"},"any")," and ",a.createElement("span",{className:"color-blue"},"all")," expenses"),a.createElement("ul",{className:"checkmark"},a.createElement("li",null,"Groceries"),a.createElement("li",null,"Utilities"),a.createElement("li",null,"Vacation rentals")))),a.createElement("div",{className:"column column-img"},a.createElement("div",null,a.createElement("img",{src:m,alt:"iphone"}))))),a.createElement("div",{className:"container how-title"},a.createElement("h2",{id:"how"},"How it works")),a.createElement("section",null,a.createElement("div",{className:"container inverse select-section"},a.createElement("div",{className:"column column-content"},a.createElement("h3",null,"Select an expense"),a.createElement("p",null,"Choose any past transaction from your credit card you wish to split.")),a.createElement("div",{className:"column column-img"},a.createElement("div",{className:"select-img"},a.createElement("img",{src:l,alt:"iphone"}))))),a.createElement("section",{className:"bg-blue "},a.createElement("div",{className:"container choose-section"},a.createElement("div",{className:"column column-content"},a.createElement("h3",null,"Choose people"),a.createElement("p",null,"Select who you want to split the transaction with.")),a.createElement("div",{className:"column column-img"},a.createElement("div",{className:"choose-img"},a.createElement("img",{src:o,alt:"iphone"}))))),a.createElement("section",null,a.createElement("div",{className:"container inverse split-section"},a.createElement("div",{className:"column"},a.createElement("h3",null,"Split the expense"),a.createElement("p",null,"Send split request directly from the app.")),a.createElement("div",{className:"column column-img split-img"},a.createElement("img",{src:s,alt:"iphone"})))),a.createElement("section",{className:"bg-blue get-paid-custom-mb"},a.createElement("div",{className:"container get-paid-section"},a.createElement("div",{className:"column column-content"},a.createElement("h3",null,"Get paid"),a.createElement("p",null,"Receive the money directly in your account.")),a.createElement("div",{className:"column column-img"},a.createElement("div",{className:"get-paid-img"},a.createElement("img",{src:i,alt:"iphone"}))))),a.createElement(g.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0f5b83b674a820ef49c4.js.map