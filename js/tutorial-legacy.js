(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tutorial"],{"0bfb":function(t,e,r){"use strict";var a=r("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var a=r("2aba"),n=r("32e9"),i=r("79e5"),s=r("be13"),c=r("2b4c"),o=r("520a"),u=c("species"),l=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var v=c(t),f=!i(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),p=f?!i(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[v](""),!e}):void 0;if(!f||!p||"replace"===t&&!l||"split"===t&&!d){var h=/./[v],b=r(s,v,""[t],function(t,e,r,a,n){return e.exec===o?f&&!n?{done:!0,value:h.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),g=b[0],m=b[1];a(String.prototype,t,g),n(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"2fdb":function(t,e,r){"use strict";var a=r("5ca1"),n=r("d2c8"),i="includes";a(a.P+a.F*r("5147")(i),"String",{includes:function(t){return!!~n(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"386b":function(t,e,r){var a=r("5ca1"),n=r("79e5"),i=r("be13"),s=/"/g,c=function(t,e,r,a){var n=String(i(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),c+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),a(a.P+a.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},"386d":function(t,e,r){"use strict";var a=r("cb7c"),n=r("83a1"),i=r("5f1b");r("214f")("search",1,function(t,e,r,s){return[function(r){var a=t(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,a):new RegExp(r)[e](String(a))},function(t){var e=s(r,t,this);if(e.done)return e.value;var c=a(t),o=String(this),u=c.lastIndex;n(u,0)||(c.lastIndex=0);var l=i(c,o);return n(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]})},5147:function(t,e,r){var a=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,!"/./"[t](e)}catch(n){}}return!0}},"520a":function(t,e,r){"use strict";var a=r("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,s=n,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(s=function(t){var e,r,s,l,d=this;return u&&(r=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),o&&(e=d[c]),s=n.call(d,t),o&&s&&(d[c]=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&i.call(s[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s}),t.exports=s},"5f1b":function(t,e,r){"use strict";var a=r("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},6762:function(t,e,r){"use strict";var a=r("5ca1"),n=r("c366")(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"818d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title is-3"},[t._v("Tutorials & Guides")]),r("h2",{staticClass:"subtitle is-4"},[t._v("Tutorials and guides to learn about Brain.js")]),r("br"),t._m(0),r("br"),r("br"),r("br"),r("nav",{staticClass:"navbar is-dark",staticStyle:{"z-index":"1"}},[r("div",{staticClass:"navbar-brand"},[t._m(1),r("div",{staticClass:"navbar-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),r("br"),r("br"),r("div",{staticClass:"custom-box"},[r("transition-group",{attrs:{name:"slide-up",mode:"out-in"}},t._l(t.filteredTutorials,function(e,a){return r("div",{key:a,staticClass:"box"},[r("p",{staticClass:"title is-5"},[t._v(t._s(e.title))]),r("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.author))]),r("a",{staticClass:"button is-primary",attrs:{href:e.link,target:"_blank"}},[t._v("Open")])])}),0)],1),r("br"),r("br"),r("h2",{staticClass:"title is-4"},[t._v("Want to add an article?")]),t._m(2),r("br"),r("br"),r("h2",{staticClass:"title is-3"},[t._v("\n    Ready to start?\n  ")]),r("div",{staticClass:"content"},[r("p",[t._v("\n      Read\n      "),r("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v("\n      or view\n      "),r("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v("\n        Live Examples\n      ")])],1),r("router-link",{staticClass:"button is-primary is-large",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v("\n      Get Started Now\n    ")])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"card-header-title"},[t._v("\n            Featured Tutorials Series\n          ")])]),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-48x48"},[r("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/679099?s=400&v=4",alt:"Placeholder image"}})])]),r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-5"},[t._v("\n                Learn Neural Networks with Brain.js\n              ")]),r("p",{staticClass:"subtitle is-6"},[r("a",{attrs:{href:"https://scrimba.com/@robertleeplummerjr"}},[t._v("Robert Plummer")])])])]),r("div",{staticClass:"content"},[t._v("\n            A tutorial series to understand Neural Networks and Brain.js by\n            "),r("a",{attrs:{href:"https://github.com/robertleeplummerjr"}},[t._v("Robert Plummer, author of Brain.js")])]),r("a",{staticClass:"button is-primary",attrs:{href:"https://scrimba.com/playlist/pVZJQfg",target:"_blank"}},[t._v("Open")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"navbar-item"},[r("span",[t._v("Search Tutorials:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    This page is open source, go ahead and include tutorial/article related to\n    Brain.js to this list or\n    "),r("a",{attrs:{href:"//github.com/BrainJS/brain.js/issues/new",target:"_blank"}},[t._v("create an issue")]),t._v("\n    and we will add it.\n  ")])}],i=(r("b54a"),r("386d"),r("6762"),r("2fdb"),{data:function(){return{search:""}},computed:{filteredTutorials:function(){var t=this;return this.$store.state.tutorials.filter(function(e){return e.title.includes(t.search)||e.author.includes(t.search)||e.link.includes(t.search)})}}}),s=i,c=r("2877"),o=Object(c["a"])(s,a,n,!1,null,null,null);e["default"]=o.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},aae3:function(t,e,r){var a=r("d3f4"),n=r("2d95"),i=r("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},b0c5:function(t,e,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},b54a:function(t,e,r){"use strict";r("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},d2c8:function(t,e,r){var a=r("aae3"),n=r("be13");t.exports=function(t,e,r){if(a(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(t))}}}]);