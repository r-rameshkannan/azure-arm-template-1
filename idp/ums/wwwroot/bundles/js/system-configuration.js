/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});
/*
 AngularJS v1.8.2
 (c) 2010-2020 Google LLC. http://angularjs.org
 License: MIT
*/
(function(z){'use strict';function ve(a){if(D(a))w(a.objectMaxDepth)&&(Xb.objectMaxDepth=Yb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Xb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Xb}function Yb(a){return X(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.8.2/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function za(a){if(null==a||$a(a))return!1;if(H(a)||C(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return X(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
za(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Pc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Qc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Zb(a){return function(b,d){a(d,b)}}function we(){return++qb}
function $b(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):ac(p)?a[m]=p.clone():"__proto__"!==m&&(D(a[m])||(a[m]=H(p)?[]:{}),$b(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return $b(a,Ha.call(arguments,1),!1)}function xe(a){return $b(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function bc(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function cc(a){return B(a.toString)&&a.toString!==la}function A(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Pc(a){return null!==a&&"object"===typeof a&&!Rc(a)}function C(a){return"string"===typeof a}function X(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function dc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ye(a){return a&&X(a.length)&&ze.test(la.call(a))}
function ac(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Ae(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Pc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw oa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Rc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Yb(d)?d:NaN;if(b){if(ye(b)||"[object ArrayBuffer]"===la.call(b))throw oa("cpta");if(a===b)throw oa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function ec(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?ec(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Sc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&z.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!A(a))return X(b)||(b=b?2:null),JSON.stringify(a,Sc,b)}function Tc(a){return C(a)?JSON.parse(a):a}function fc(a,b){a=a.replace(Be,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return Y(d)?b:d}function Uc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function gc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=fc(b,c);return Uc(a,d*(b-c))}function Aa(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Vc(a){try{return decodeURIComponent(a)}catch(b){}}function hc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Vc(e),w(e)&&(f=w(f)?Vc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Ce(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function ic(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function De(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,C(d=a.getAttribute(d)))return d;return null}function Ee(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Fe?(e.strictDi=null!==De(d,"strict-di"),b(d,c?[c]:[],e)):z.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Wc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===z.document?"document":Aa(a);throw oa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;z&&e.test(z.name)&&(d.debugInfoEnabled=!0,z.name=z.name.replace(e,""));if(z&&!f.test(z.name))return c();z.name=z.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ge(){z.name="NG_ENABLE_DEBUG_INFO!"+z.name;z.location.reload()}function He(a){a=ca.element(a).injector();if(!a)throw oa("test");return a.get("$$testability")}function Xc(a,b){b=b||"_";return a.replace(Ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function Je(){var a;if(!Yc){var b=rb();(sb=A(b)?z.jQuery:b?z[b]:void 0)&&sb.fn.on?(x=sb,S(sb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=U;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Yc=!0}}function Ke(){U.legacyXHTMLReplacement=!0}function gb(a,b,d){if(!a)throw oa("areq",b||"?",d||"required");return a}function tb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw oa("badname",
b);}function Le(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function ub(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function jc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!cc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function Me(a){function b(a,
b,c){return a[b]||(a[b]=c())}var d=F("$injector"),c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",
f);var e=[],n=[],s=[],G=a("$injector","invoke","push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ne(a,b){var d=[];Yb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Sc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}
function Oe(a){S(a,{errorHandlingConfig:ve,bootstrap:Wc,copy:Ia,extend:S,merge:xe,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Tc,identity:Ta,isUndefined:A,isDefined:w,isString:C,isFunction:B,isObject:D,isNumber:X,isElement:ac,isArray:H,version:Pe,isDate:ha,callbacks:{$$counter:0},getTestability:He,reloadWithDebugInfo:Ge,UNSAFE_restoreLegacyJqLiteXHTMLReplacement:Ke,$$minErr:F,$$csp:Ba,$$encodeUriSegment:ic,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:jc,$$uppercase:vb});
lc=Me(z);lc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qe});a.provider("$compile",Zc).directive({a:Re,input:$c,textarea:$c,form:Se,script:Te,select:Ue,option:Ve,ngBind:We,ngBindHtml:Xe,ngBindTemplate:Ye,ngClass:Ze,ngClassEven:$e,ngClassOdd:af,ngCloak:bf,ngController:cf,ngForm:df,ngHide:ef,ngIf:ff,ngInclude:gf,ngInit:hf,ngNonBindable:jf,ngPluralize:kf,ngRef:lf,ngRepeat:mf,ngShow:nf,ngStyle:of,ngSwitch:pf,ngSwitchWhen:qf,ngSwitchDefault:rf,ngOptions:sf,ngTransclude:tf,ngModel:uf,
ngList:vf,ngChange:wf,pattern:ad,ngPattern:ad,required:bd,ngRequired:bd,minlength:cd,ngMinlength:cd,maxlength:dd,ngMaxlength:dd,ngValue:xf,ngModelOptions:yf}).directive({ngInclude:zf,input:Af}).directive(wb).directive(ed);a.provider({$anchorScroll:Bf,$animate:Cf,$animateCss:Df,$$animateJs:Ef,$$animateQueue:Ff,$$AnimateRunner:Gf,$$animateAsyncRun:Hf,$browser:If,$cacheFactory:Jf,$controller:Kf,$document:Lf,$$isDocumentHidden:Mf,$exceptionHandler:Nf,$filter:fd,$$forceReflow:Of,$interpolate:Pf,$interval:Qf,
$$intervalFactory:Rf,$http:Sf,$httpParamSerializer:Tf,$httpParamSerializerJQLike:Uf,$httpBackend:Vf,$xhrFactory:Wf,$jsonpCallbacks:Xf,$location:Yf,$log:Zf,$parse:$f,$rootScope:ag,$q:bg,$$q:cg,$sce:dg,$sceDelegate:eg,$sniffer:fg,$$taskTrackerFactory:gg,$templateCache:hg,$templateRequest:ig,$$testability:jg,$timeout:kg,$window:lg,$$rAF:mg,$$jqLite:ng,$$Map:og,$$cookieReader:pg})}]).info({angularVersion:"1.8.2"})}function xb(a,b){return b.toUpperCase()}function yb(a){return a.replace(qg,xb)}function mc(a){a=
a.nodeType;return 1===a||!a||9===a}function gd(a,b){var d,c,e,f=b.createDocumentFragment(),g=[],k;if(nc.test(a)){d=f.appendChild(b.createElement("div"));c=(rg.exec(a)||["",""])[1].toLowerCase();e=U.legacyXHTMLReplacement?a.replace(sg,"<$1></$2>"):a;if(10>wa)for(c=hb[c]||hb._default,d.innerHTML=c[1]+e+c[2],k=c[0];k--;)d=d.firstChild;else{c=qa[c]||[];for(k=c.length;-1<--k;)d.appendChild(z.document.createElement(c[k])),d=d.firstChild;d.innerHTML=e}g=db(g,d.childNodes);d=f.firstChild;d.textContent=""}else g.push(b.createTextNode(a));
f.textContent="";f.innerHTML="";r(g,function(a){f.appendChild(a)});return f}function U(a){if(a instanceof U)return a;var b;C(a)&&(a=V(a),b=!0);if(!(this instanceof U)){if(b&&"<"!==a.charAt(0))throw oc("nosel");return new U(a)}if(b){b=z.document;var d;a=(d=tg.exec(a))?[b.createElement(d[1])]:(d=gd(a,b))?d.childNodes:[];pc(this,a)}else B(a)?hd(a):pc(this,a)}function qc(a){return a.cloneNode(!0)}function zb(a,b){!b&&mc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function id(a){for(var b in a)return!1;
return!0}function jd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!id(d)||c&&!id(c)||(delete Ka[b],a.ng339=void 0)}function kd(a,b,d,c){if(w(c))throw oc("offargs");var e=(c=Ab(a))&&c.events,f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];jd(a)}}function rc(a,b){var d=a.ng339;if(d=
d&&Ka[d])b?delete d.data[b]:d.data={},jd(a)}function Ab(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++ug,d=Ka[d]={events:{},data:{},handle:void 0});return d}function sc(a,b,d){if(mc(a)){var c,e=w(d),f=!e&&b&&!D(b),g=!b;a=(a=Ab(a,!f))&&a.data;if(e)a[yb(b)]=d;else{if(g)return a;if(f)return a&&a[yb(b)];for(c in b)a[yb(c)]=b[c]}}}function Cb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=V(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",V(c))}}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=V(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",V(c))}}function pc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=
0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function ld(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function md(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}function vg(a,b){b=b||z;if("complete"===b.document.readyState)b.setTimeout(a);
else x(b).on("load",a)}function hd(a){function b(){z.document.removeEventListener("DOMContentLoaded",b);z.removeEventListener("load",b);a()}"complete"===z.document.readyState?z.setTimeout(a):(z.document.addEventListener("DOMContentLoaded",b),z.addEventListener("load",b))}function nd(a,b){var d=Hb[b.toLowerCase()];return d&&od[ua(a)]&&d}function wg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(A(c.immediatePropagationStopped)){var k=
c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||xg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function xg(a,b,d){d.call(a,b)}function yg(a,b,d){var c=b.relatedTarget;c&&(c===a||zg.call(a,c))||d.call(a,b)}function ng(){this.$get=
function(){return S(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||we)():d+":"+a}function pd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function qd(a){a=Function.prototype.toString.call(a).replace(Ag,
"");return a.match(Bg)||a.match(Cg)}function Dg(a){return(a=qd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Zb(a));else return a(b,c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ca("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(A(c))throw Ca("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(A(a)||
H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{C(a)?(c=lc(a),t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):tb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ca("modulerr",
a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ca("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ca("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&
(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(wa||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}
b=!0===b;var h={},l=[],m=new Ib,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ca("unpr",l.join(" <- "));}),s={},
G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function Bf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===
ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():ac(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=C(a)?a:X(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||vg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function Eg(a){C(a)&&(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Fg(a,b,d,c,e){function f(){pa=null;k()}function g(){t=y();t=A(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}
var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=G.notifyWhenNoPendingTasks;var t,N,v=l.href,kc=b.find("base"),pa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){A(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;
var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(pa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(pa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());pa&&(pa=b);return h}return(pa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",
f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=kc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function If(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Fg(a,
c,b,d,e)}]}function Jf(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!A(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=
m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function hg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Zc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&
a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=Ae("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function pa(b,d){gb(b,"name");Ja(b,"directive");C(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,
g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!C(l)||!/[EACM]/.test(l)))throw $("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Zb(pa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Gg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!C(a))return r(a,Zb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,
c)};this.aHrefSanitizationTrustedUrlList=function(a){return w(a)?(b.aHrefSanitizationTrustedUrlList(a),this):b.aHrefSanitizationTrustedUrlList()};Object.defineProperty(this,"aHrefSanitizationWhitelist",{get:function(){return this.aHrefSanitizationTrustedUrlList},set:function(a){this.aHrefSanitizationTrustedUrlList=a}});this.imgSrcSanitizationTrustedUrlList=function(a){return w(a)?(b.imgSrcSanitizationTrustedUrlList(a),this):b.imgSrcSanitizationTrustedUrlList()};Object.defineProperty(this,"imgSrcSanitizationWhitelist",
{get:function(){return this.imgSrcSanitizationTrustedUrlList},set:function(a){this.imgSrcSanitizationTrustedUrlList=a}});var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?
(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(W.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(W.CSS,["*|style"]);a(W.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(W.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));
a(W.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=
void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!C(a))throw $("srcset",b,a.toString());for(var c="",d=V(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(V(d[g])),c=c+(" "+V(d[g+1]));d=V(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(V(d[0]));2===d.length&&(c+=" "+V(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;
h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<
p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===wa&&jb(a,t,k);m=tc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,
f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function jb(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,
futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function tc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);Y(b,xa(h),"E",e,f);for(var l,m,n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=xa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(rd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):
(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(sd(p,L,c,n,m,!1));else{n=xa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=t,nd(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);Y(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(C(g)&&""!==g)for(;a=k.exec(g);)n=xa(a[2]),Y(b,n,"C",e,f)&&(d[n]=V(a[3])),g=g.substr(a.index+
a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=xa(f[1]);Y(b,h,"M",d,e)&&(c[h]=V(f[2]))}}catch(k){}}function U(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function W(a,b,c){return function(d,e,f,g,h){e=U(e[0],
b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=W(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Ba(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=W(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Ba(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||
(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(A(f))throw $("noslot",d,Aa(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,
u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Hg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);L.bindingInfo=Da(G,g,L.instance,Hg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,X(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&
(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ca(L,L.isolateScope?y:e,Q,g,L.require&&X(L.directiveName,L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ca(L,L.isolateScope?y:e,Q,g,L.require&&X(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,
t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,M,R=e,q,ma=!1,Jb=!1,O,sa=0,C=a.length;sa<C;sa++){u=a[sa];var E=u.$$start,jb=u.$$end;E&&(y=U(b,E,jb));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&
!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Jb=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],oa(f,Ha.call(M,0),b),R=Z(Jb,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=z.document.createDocumentFragment();var Xa=
T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[xa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||z.document.createDocumentFragment(),ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Jb,R,e));M=x(M.childNodes)}else M=x(qc(b)).contents();y.empty();R=Z(Jb,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=
!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=nc.test(O)?td(ja(u.templateNamespace,V(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",Q,"");oa(f,y,b);C={$attr:{}};O=tc(b,[],C);var Ig=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Ig);ga(d,C);C=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==
u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),C=a.length;else if(u.compile)try{q=u.compile(y,d,R);var Y=u.$$originalDirective||u;B(q)?m(null,Va(Y,q),E,jb):q&&m(Va(Y,q.pre),Va(Y,q.post),E,jb)}catch(ca){c(ca,Aa(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function X(a,b,c,d){var e;if(C(b)){var f=b.match(l);b=b.substring(f[0].length);
var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=X(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=X(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===
p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=bc(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(A(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=bc(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};
D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=
b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=bc(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,
I;c=Na(c);if(u.replace){c=nc.test(c)?td(ja(L,V(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};oa(f,b,e);var v=tc(e,[],c);D(u.scope)&&fa(v,!0);a=v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=qc(e));oa(y,
x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){dc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),
a,Aa(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=z.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function qa(a,b){if("srcdoc"===
b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function ya(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function za(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,
d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=ya(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=za;b.push({priority:100,compile:function(a,b){var e=p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=qa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",Aa(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,
compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function oa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&
(a.context=c);break}f&&f.replaceChild(c,d);a=z.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Ba(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ca(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,Aa(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&
!ec(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Kb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(C(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];C(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Kb(uc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,
f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:ec;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Kb(uc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,
function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=z.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ud(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=ud(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=nd(this.$$element[0],a),g=vd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Xc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||A(b)?this.$$element.removeAttr(e):
Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||A(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=
/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return z.document.createComment(c)};
return da}]}function Kb(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return a.replace(rd,"").replace(Jg,function(a,d,c){return c?d.toUpperCase():d})}function ud(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function td(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Kg.call(a,b,1)}return a}
function Gg(a,b){if(b&&C(b))return b;if(C(a)){var d=wd.exec(a);if(d)return d[3]}}function Kf(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&C(g)&&(l=g);if(C(c)){g=c.match(wd);if(!g)throw xd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Le(e.$scope,
h,!0);if(!c)throw xd("ctrlreg",h);tb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Lf(){this.$get=["$window",function(a){return x(a.document)}]}function Mf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;
a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Nf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function vc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Tf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Qc(a,function(a,c){null===a||A(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(vc(a)))}):b.push(ba(c)+"="+ba(vc(a))))});return b.join("&")}}}function Uf(){this.$get=
function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Qc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(vc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function wc(a,b){if(C(a)){var d=a.replace(Lg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(yd),e;(e=c)||(e=(e=d.match(Mg))&&Ng[e[0]].test(d));if(e)try{a=Tc(d)}catch(f){if(!c)return a;throw Lb("baddata",a,f);}}}return a}
function zd(a){var b=T(),d;C(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&r(a,function(a,d){var f=K(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function Ad(a){var b;return function(d){b||(b=zd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function Bd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Sf(){var a=this.defaults={transformResponse:[wc],transformRequest:[function(a){return D(a)&&
"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja(xc),put:ja(xc),patch:ja(xc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfTrustedOrigins=[];Object.defineProperty(this,"xsrfWhitelistedOrigins",
{get:function(){return this.xsrfTrustedOrigins},set:function(a){this.xsrfTrustedOrigins=a}});this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=Bd(a.data,a.headers,a.status,g.transformResponse);
a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!C(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=
vb(g.method);g.paramSerializer=C(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});b=c(b,h);b=b.then(function(b){var c=b.headers,d=Bd(b.data,Ad(c),void 0,b.transformRequest);A(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});A(b.withCredentials)&&!A(a.withCredentials)&&
(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,zd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>
b?L.resolve:L.reject)({data:a,status:b,headers:Ad(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),O=c.url;x?O=p.getTrustedResourceUrl(O):C(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||
!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));A(q)&&((q=kc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?
"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Lb("badjsonp",a);c=hc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Lb("badjsonp",a);if(d===b)throw Lb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=C(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var v=[];r(d,function(a){v.unshift(C(a)?m.get(a):m.invoke(a))});var kc=Og(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=
function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Wf(){this.$get=function(){return function(){return new z.XMLHttpRequest}}}function Vf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Pg(a,c,a.defer,b,d[0])}]}function Pg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",
b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;pa&&pa();y&&y.abort()}function v(a,
b,c,e,f,g){w(P)&&d.cancel(P);pa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),pa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};
y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==s)throw I;}y.send(A(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Pf(){var a=
"{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:jc(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||
-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=
0,c=I.length;b<c;b++){if(p&&A(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,
f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Qf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Qg("badprom");if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");
c(a);return!0};return e}]}function Rf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Cd(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=
d.hostname;b.$$port=fa(d.port)||Rg[d.protocol]||null}function Dd(a,b,d){if(Sg.test(a))throw kb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=hc(a.search);b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function yc(a,b){return a.slice(0,
b.length)===b}function ya(a,b){if(yc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function zc(a,b,d){this.$$html5=!0;d=d||"";Cd(a,this);this.$$parse=function(a){var d=ya(b,a);if(!C(d))throw kb("ipthprfx",a,b);Dd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ya(a,c))?(g=f,g=d&&w(f=ya(d,f))?
b+(ya("/",f)||f):a+g):w(f=ya(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function Ac(a,b,d){Cd(a,this);this.$$parse=function(c){var e=ya(a,c)||ya(b,c),f;A(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",A(e)&&(a=c,this.replace())):(f=ya(d,e),A(f)&&(f=e));Dd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;yc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,
d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Ed(a,b,d){this.$$html5=!0;Ac.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=ya(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Mb(a){return function(){return this[a]}}function Fd(a,b){return function(d){if(A(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Yf(){var a="!",
b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||C(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,
b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw kb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?zc:Ed}else s=Da(n),p=Ac;var r=s.substr(0,Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;
f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!C(e)||!A(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==
n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){yc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==
m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Zf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){dc(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=wa||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Tg(a){return a+""}function Ug(a,b){return"undefined"!==typeof a?a:
b}function Gd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Vg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Hd:b}function Z(a,b,d){var c,e,f=a.isPure=Vg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=
[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&
a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,
b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=
!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Id(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Jd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Kd(a){if(1===a.body.length&&Jd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function Ld(a){this.$filter=a}function Md(a){this.$filter=a}function Nb(a,b,d){this.ast=
new q(a,d);this.astCompiler=d.csp?new Md(b):new Ld(b)}function Bc(a){return B(a.valueOf)?a.valueOf():Wg.call(a)}function $f(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Ob(G),d=(new Nb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,
c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Bc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Bc(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Bc(k)}b&&
(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?
a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?
a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Hd?function(b){return a(b)}:a})));return p(d)}var G={csp:Ba().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Ob(G);return(new Nb(b,e,G)).getAst(a).ast};return f}]}function bg(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Nd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):
a}}function cg(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Nd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Nd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):A(c)?"undefined":"string"!==typeof c?Ne(c,void 0):c);dc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,
p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,
d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}
var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(A(a)&&A(b)&&A(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=
0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function mg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:
function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function ag(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",
function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===wa&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=
0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,
d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);
k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,
b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(D(e))if(za(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,
f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(za(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],A,z;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),
t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{z=w[n],l=z.fn,l(z.scope,z.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):Y(g)&&Y(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(A=4-r,N[A]||(N[A]=[]),N[A].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=
!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=
this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Qe(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationTrustedUrlList=function(b){return w(b)?
(a=b,this):a};this.imgSrcSanitizationTrustedUrlList=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Xg(a){if("self"===a)return a;if(C(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Od(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");}function Pd(a){var b=[];w(a)&&r(a,function(a){b.push(Xg(a))});
return b}function eg(){this.SCE_CONTEXTS=W;var a=["self"],b=[];this.trustedResourceUrlList=function(b){arguments.length&&(a=Pd(b));return a};Object.defineProperty(this,"resourceUrlWhitelist",{get:function(){return this.trustedResourceUrlList},set:function(a){this.trustedResourceUrlList=a}});this.bannedResourceUrlList=function(a){arguments.length&&(b=Pd(a));return b};Object.defineProperty(this,"resourceUrlBlacklist",{get:function(){return this.bannedResourceUrlList},set:function(a){this.bannedResourceUrlList=
a}});this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Cc(b,Qd))||(z.document.baseURI?c=z.document.baseURI:(Na||(Na=z.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),c=Cc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[W.HTML]=f(k);h[W.CSS]=f(k);h[W.MEDIA_URL]=f(k);h[W.URL]=f(h[W.MEDIA_URL]);h[W.JS]=f(k);h[W.RESOURCE_URL]=f(h[W.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||A(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||A(f)||""===f)return f;var k=h.hasOwnProperty(d)?
h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===W.MEDIA_URL||d===W.URL)return c(f.toString(),d===W.MEDIA_URL);if(d===W.RESOURCE_URL){var k=ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===W.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():
a}}}]}function dg(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>wa)throw Ea("iequirks");var c=ja(W);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(W,
function(a,b){var d=K(b);c[("parse_as_"+d).replace(Dc,xb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Dc,xb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Dc,xb)]=function(b){return g(a,b)}});return c}]}function fg(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||
[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&wa)return!1;if(A(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),transitions:h,animations:l,android:e}}]}function gg(){this.$get=ia(function(a){return new Yg(a)})}function Yg(a){function b(){var a=e.pop();return a&&
a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):
a()}}function ig(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!C(k)||A(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==wc}):l===wc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},
function(a){h||(a=Zg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function jg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Od(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-",
"data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function kg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;
r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw $g("badprom");if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!C(a))return a;wa&&(aa.setAttribute("href",
a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!ah&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Og(a){var b=[Qd].concat(a.map(ga));return function(a){a=ga(a);return b.some(Cc.bind(null,a))}}function Cc(a,b){a=ga(a);b=ga(b);return a.protocol===
b.protocol&&a.host===b.host}function lg(){this.$get=ia(z)}function Rd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),A(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function pg(){this.$get=Rd}function fd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+
"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Sd);b("date",Td);b("filter",bh);b("json",ch);b("limitTo",dh);b("lowercase",eh);b("number",Ud);b("orderBy",Vd);b("uppercase",fh)}function bh(){return function(a,b,d,c){if(!za(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Ec(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=gh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,
b)}}function gh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(A(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!cc(a))return!1;a=K(""+a);b=K(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Ec(a),k=Ec(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&
"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!A(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Ec(a){return null===a?"null":typeof a}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){A(c)&&(c=b.CURRENCY_SYM);A(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Wd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,
c)}}function Ud(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Wd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function hh(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Xd))&&(a=a.replace(Xd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Fc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Fc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Yd&&(d=d.splice(0,Yd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function ih(a,
b,d,c){var e=a.d,f=e.length-a.i;b=A(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Wd(a,b,d,c,e){if(!C(a)&&!X(a)||isNaN(a))return"";
var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=hh(k);ih(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+
h+b.posSuf}function Pb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Fc+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Pb(f,b,c,e)}}function lb(a,b,d){return function(c,e){var f=c["get"+a](),g=vb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Zd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function $d(a){return function(b){var d=
Zd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Pb(b,a)}}function Gc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Td(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+
(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;C(c)&&(c=jh.test(c)?fa(c):b(c));X(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=kh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=fc(f,m),c=gc(c,f,!0));r(k,function(b){h=lh[b];g+=h?h(c,a.DATETIME_FORMATS,
m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ch(){return function(a,b){A(b)&&(b=2);return eb(a,b)}}function dh(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(Y(b))return a;X(a)&&(a=a.toString());if(!za(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Hc(a,d,d+b):0===d?Hc(a,b,a.length):Hc(a,Math.max(0,d+b),d)}}function Hc(a,b,d){return C(a)?a.slice(b,d):Ha.call(a,b,d)}function Vd(a){function b(b){return b.map(function(b){var c=
1,d=Ta;if(B(b))d=b;else if(C(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=
h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!za(a))throw F("orderBy")("notarray",a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;
cc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Qb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||
b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=mb;this.$$element=a;this.$$animate=c;ae(this)}function ae(a){a.$$classCache={};a.$$classCache[be]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function ce(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Xc(c,"-"):"";b(a,nb+
c,!0===d);b(a,be+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){A(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,a,k),de(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=
de(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function de(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Ic(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",
function(a){if(A(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ee[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Rb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(C(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(mh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function ob(a,b,d,c){return function(e,f,g,k,h,l,m,
p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Uc(b,fc(v)));var e=d(a,b);!isNaN(e)&&c&&(e=gc(e,c));return e}Jc(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw pb("datefmt",a);if(n(a)){q=a;var b=
k.$options.getOption("timezone");b&&(v=b,q=gc(q,b,!0));var d=c;t&&C(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),z=s(x);k.$validators.min=function(a){return!n(a)||A(z)||d(a)>=z};g.$observe("min",function(a){a!==x&&(z=s(a),x=a,k.$validate())})}if(w(g.max)||
g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||A(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Jc(a,b,d,c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function fe(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(nh.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!X(b))throw pb("numfmt",
b);b=b.toString()}return b})}function na(a){w(a)&&!X(a)&&(a=parseFloat(a));return Y(a)?void 0:a}function Kc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ge(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Kc(a):0,k=e?Kc(b):0,h=f?Kc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function he(a,b,d,c,e){if(w(c)){a=
a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return e}function Lc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):C(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,
k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),
c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function sd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Sb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=
[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=mb;this.$options=Tb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=
null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;ae(this);oh(this)}function oh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Mc(a){this.$$options=a}function ie(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}
function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function je(a,b,d){if(a){C(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",b,a,Aa(d));return a}}function Ub(a){a=fa(a);return Y(a)?-1:a}var Xb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ke=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return C(a)?a.toLowerCase():a},vb=function(a){return C(a)?a.toUpperCase():a},wa,x,sb,Ha=[].slice,Kg=[].splice,ph=[].push,la=Object.prototype.toString,Rc=Object.getPrototypeOf,
oa=F("ng"),ca=z.angular||(z.angular={}),lc,qb=0;wa=z.document.documentMode;var Y=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=[];var ze=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,V=function(a){return C(a)?a.trim():a},Od=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!w(Ba.rules)){var a=z.document.querySelector("[ng-csp]")||z.document.querySelector("[data-ng-csp]");if(a){var b=
a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=z.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},Be=/:/g,Qa=["ng-",
"data-ng-","ng:","x-ng-"],Fe=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof z.HTMLScriptElement||b instanceof z.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(z.document),
Ie=/[A-Z]/g,Yc=!1,Pa=3,Pe={full:"1.8.2",major:1,minor:8,dot:2,codeName:"meteoric-mining"};U.expando="ng339";var Ka=U.cache={},ug=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var qg=/-([a-z])/g,qh=/^-ms-/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},oc=F("jqLite"),tg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,nc=/<|&#?\w+;/,rg=/<([\w:-]+)/,sg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,qa={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr",
"tbody","table"]};qa.tbody=qa.tfoot=qa.colgroup=qa.caption=qa.thead;qa.th=qa.td;var hb={option:[1,'<select multiple="multiple">',"</select>"],_default:[0,"",""]},Nc;for(Nc in qa){var le=qa[Nc],me=le.slice().reverse();hb[Nc]=[me.length,"<"+me.join("><")+">","</"+le.join("></")+">"]}hb.optgroup=hb.option;var zg=z.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=U.prototype={ready:hd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+
"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:ph,sort:[].sort,splice:[].splice},Hb={};r("multiple selected checked disabled readOnly required open".split(" "),function(a){Hb[K(a)]=a});var od={};r("input select option textarea button form details".split(" "),function(a){od[a]=!0});var vd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:sc,removeData:rc,hasData:function(a){for(var b in Ka[a.ng339])return!0;
return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)rc(a[b]),kd(a[b])}},function(a,b){U[b]=a});r({data:sc,inheritedData:Fb,scope:function(a){return x.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:ld,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=yb(b.replace(qh,"ms-"));if(w(d))a.style[b]=
d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Hb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(A(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(A(b)){if(a.multiple&&"select"===
ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(A(b))return a.innerHTML;zb(a,!0);a.innerHTML=b},empty:md},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==md&&A(2===a.length&&a!==Cb&&a!==ld?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===sc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=A(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],
b,c);return this}});r({removeData:rc,on:function(a,b,d,c){if(w(c))throw oc("onargs");if(mc(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=wg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Bb[b]?(k(Bb[b],yg),k(b,void 0,!0)):k(b)}},off:kd,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,
b){var d,c=a.parentNode;zb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},
wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new U(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;A(e)&&(e=!Cb(a,b));(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:qc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,
b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)A(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):pc(f,a(this[g],b,c,e));return w(f)?f:this}});U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off;var rh=Object.create(null);pd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return Y(a)?
rh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Ib=pd,og=[function(){this.$get=
[function(){return Ib}]}],Bg=/^([^(]+?)=>/,Cg=/^[^(]*\(\s*([^)]*)\)/m,sh=/,/,th=/^\s*(_?)(\S+?)\1\s*$/,Ag=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ca=F("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw C(d)&&d||(d=a.name||Dg(a)),Ca("strictdi",d);b=qd(a);r(b[1].split(sh),function(a){a.replace(th,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,tb(a[b],"fn"),c=a.slice(0,b)):tb(a,"fn",!0);return c};var ne=F("$animate"),
Ef=function(){this.$get=E},Ff=function(){var a=new Ib,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=C(b)?b.split(" "):H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Eg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,
k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Cf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw ne("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,
d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,ne("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,
off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=ib(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=ib(d.removeClass,
c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=ib(f.addClass,c);f.removeClass=ib(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=ib(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Hf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=
!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Gf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};
f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&
this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},Df=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&
(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),uc=new function(){};Zc.$inject=["$provide","$$sanitizeUriProvider"];Kb.prototype.isFirstChange=function(){return this.previousValue===uc};var rd=/^((?:x|data)[:\-_])/i,Jg=
/[:\-_]+(.)/g,xd=F("$controller"),wd=/^(\S+)(\s+as\s+([\w$]+))?$/,Of=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},yd="application/json",xc={"Content-Type":yd+";charset=utf-8"},Mg=/^\[|^\{(?!\{)/,Ng={"[":/]$/,"{":/}$/},Lg=/^\)]\}',?\n/,Lb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};
var Qg=F("$interval"),Xf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},uh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Rg={http:80,https:443,ftp:21},kb=F("$location"),
Sg=/^\s*[\\/]{2,}/,vh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=Ce(this.$$search),b=b?"#"+ic(b):"",a=a.split("/"),c=a.length;c--;)a[c]=ic(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Mb("$$absUrl"),url:function(a){if(A(a))return this.$$url;var b=uh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||
"");this.hash(b[5]||"");return this},protocol:Mb("$$protocol"),host:Mb("$$host"),port:Mb("$$port"),path:Fd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||X(a))a=a.toString(),this.$$search=hc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:A(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();
return this},hash:Fd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([Ed,Ac,zc],function(a){a.prototype=Object.create(vh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==zc||!this.$$html5)throw kb("nostate");this.$$state=A(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Wg={}.constructor.prototype.valueOf,Vb=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Vb[a]=
!0});var wh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ob=function(a){this.options=a};Ob.prototype={constructor:Ob,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,
text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Vb[b],e=Vb[d];Vb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===
typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},
isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=
w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,
text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+
1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=wh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression=
"ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},
expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Jd(a))throw Ya("lval");a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());
return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),
b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",
this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Hd=2;Ld.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],
body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Kd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Id(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage=
"main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Tg,Ug,Gd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+
";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,
void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,
b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),
h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,
m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):
(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,
g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();
h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+
b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,
b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,
b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(C(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(X(a))return a.toString();if(!0===a)return"true";if(!1===
a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Md.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Kd(a))c=this.recurse(d);d=Id(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,
function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,
e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?
{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):
g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,
c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Gd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=
e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,
c,e,f){return f?f[b]:a(d,c,e)}}};Nb.prototype={constructor:Nb,parse:function(a){a=this.getAst(a);var b=this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),
oneTime:b}}};var Ea=F("$sce"),W={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Dc=/_([a-z])/g,Zg=F("$templateRequest"),$g=F("$timeout"),aa=z.document.createElement("a"),Qd=ga(z.location.href),Na;aa.href="http://[::1]";var ah="[::1]"===aa.hostname;Rd.$inject=["$document"];fd.$inject=["$provide"];var Yd=22,Xd=".",Fc="0";Sd.$inject=["$locale"];Ud.$inject=["$locale"];var lh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),
MMMM:lb("Month"),MMM:lb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:lb("Month",!1,!0),dd:ea("Date",2),d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:lb("Day"),EEE:lb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Pb(Math[0<a?"floor":"ceil"](a/60),2)+Pb(Math.abs(a%60),2))},
ww:$d(2),w:$d(1),G:Gc,GG:Gc,GGG:Gc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},kh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,jh=/^-?\d+$/;Td.$inject=["$locale"];var eh=ia(K),fh=ia(vb);Vd.$inject=["$parse"];var Re=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";
b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),wb={};r(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});wb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(vd,function(a,b){wb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ke))){e.$set("ngPattern",new RegExp(c[1],
c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=xa("ng-"+a);wb[b]=["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),wa&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var mb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,
b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Qb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Qb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},
$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,
Wb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Za,Wb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==mb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,
"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ce({clazz:Qb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var oe=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Qb,compile:function(d,f){d.addClass(Za).addClass(nb);
var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));
d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,mb)})}}}}}]},Se=oe(),df=oe(!0),mh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,xh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,yh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
nh=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,pe=/^(\d{4,})-(\d{2})-(\d{2})$/,qe=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Oc=/^(\d{4,})-W(\d\d)$/,re=/^(\d{4,})-(\d\d)$/,se=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ee=T();r(["date","datetime-local","month","time","week"],function(a){ee[a]=!0});var te={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Ic(c)},date:ob("date",pe,Rb(pe,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",qe,Rb(qe,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",se,Rb(se,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Oc,function(a,b){if(ha(a))return a;if(C(a)){Oc.lastIndex=0;var d=Oc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Zd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:ob("month",re,Rb(re,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Jc(a,b,d,c,"number");fe(c);Sa(a,
b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||A(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||A(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||
A(s)||ge(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Ic(c);c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||xh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Ic(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||yh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==V(d.ngTrim);A(d.name)&&b.attr("name",++qb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=
V(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=V(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);Y(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);Y(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=
na(a);Y(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Jc(a,b,d,c,"range");fe(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||A(p)||b>=p},g("min",k));
e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||A(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||A(s)||ge(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=he(k,a,"ngTrueValue",d.ngTrueValue,!0),l=he(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=
function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},$c=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(te[K(g.type)]||te.text)(e,f,g,k[0],b,a,d,c)}}}}],Af=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};
return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&Object.defineProperty(b,"value",a)}}}}},zh=/^(true|false|\d+)$/,xf=function(){function a(a,d,c){var e=w(c)?c:9===wa?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return zh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,
function(b){a(d,f,b)})}}}},We=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=jc(a)})}}}}],Ye=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=A(a)?"":a})}}}}],
Xe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],wf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ze=Lc("",!0),af=Lc("Odd",0),$e=Lc("Even",1),bf=Ra({compile:function(a,
b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),cf=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],ed={},Ah={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);ed[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return sd(d,c,e,b,a,Ah[a])}]});var ff=["$animate","$compile",function(a,b){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=ub(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],gf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],zf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?(d.empty(),a(gd(e.template,z.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],hf=Ra({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),vf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!A(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",be="ng-invalid",Za="ng-pristine",Wb="ng-dirty",pb=F("ngModel");Sb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Sb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,Aa(this.$$element));},$render:E,$isEmpty:function(a){return A(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Wb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Za);this.$$animate.addClass(this.$$element,Wb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!Y(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!B(h.then))throw pb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(A(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,
b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=
A(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),A(a)){this.$$parserValid=!1;break}Y(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=
d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");X(b[a])?b=b[a]:X(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?
b=b["default"]:X(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=
a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,
this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ce({clazz:Sb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var uf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);
e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Tb,Bh=/(\s+|^)default(\s+|$)/;Mc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=
this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=V(d.replace(Bh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ie(a,this.$$options));ie(a,Tb.$$options);return new Mc(a)}};Tb=new Mc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var yf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=
this.parentCtrl?this.parentCtrl.$options:Tb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},jf=Ra({terminal:!0,priority:1E3}),Ch=F("ngOptions"),Dh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
sf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&za(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(Dh);if(!p)throw Ch("iexp",a,Aa(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},
x=function(a,b){return v(a,B(a,b))},A=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),z={},B=r?function(a,b){z[r]=b;z[n]=a;return z}:function(a){z[n]=a;return z};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=B(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=A(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===
g?n:g[n],r=B(d[p],p),s=t(c,r),p=v(s,r),w=A(c,r),z=y(c,r),r=J(c,r),s=new e(p,s,w,z,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}var e=z.document.createElement("option"),f=z.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],A=h.multiple;l=0;for(var t=k.children(),z=t.length;l<z;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,B=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};A?(n.writeValue=
function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},B.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return B.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],
c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},B.trackBy&&d.$watch(function(){return B.getTrackByValue(q.$viewValue)},function(){q.$render()}));
l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(B.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=
v.items[b];w(c.group)?Gb(c.element.parentNode):Gb(c.element)}v=B.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(B.trackBy||A?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],kf=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+p+t,v=ca.noop,z;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=Y(c);e||c in n||(c=a.pluralCat(c-p));c===z||e&&Y(z)||(v(),e=q[c],A(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),z=c)})}}}],ue=F("ngRef"),lf=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=xa(ua(b)),e=a(d.ngRef),f=e.assign||function(){throw ue("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw ue("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=
l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],mf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",
l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var A;if(t){var z={$id:La},y=a(t);A=function(a,b,c,d){v&&
(z[v]=b);z[x]=c;z.$index=d;return y(a,z)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(za(h))H=h,q=A||f;else for(K in q=A||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}z&&(z[x]=void 0);
for(s in p){F=p[s];D=ub(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==s&&b.move(ub(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],nf=["$animate",function(a){return{restrict:"A",
multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ef=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],of=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)})}),pf=["$animate","$compile",function(a,
b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=ub(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");
k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],qf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),rf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,
element:b})}}),Eh=F("ngTransclude"),tf=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw Eh("orphan",Aa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},
null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Te=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Fh={$setViewValue:E,$render:E},Gh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Ib;e.selectValueMap=
{};e.ngModelCtrl=Fh;e.multiple=!1;e.unknownOption=x(z.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?
c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],
d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ue=function(){return{restrict:"E",require:["select","?ngModel"],controller:Gh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Ve=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=
c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=a,e.$validate())})}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ke.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;
var m=je(l,c,b);d.$observe("pattern",function(a){var d=m;m=je(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||A(m)||m.test(b)}}}}}}],dd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Ub(f);c.$observe("maxlength",function(a){f!==a&&(g=Ub(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],cd=
["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Ub(f)||-1;c.$observe("minlength",function(a){f!==a&&(g=Ub(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];z.angular.bootstrap?z.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Je(),Oe(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==
b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ee(z.document,Wc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend(window.angular.element("<style>").text('@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}'));
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});

/*!
* Globalize
*
* http://github.com/jquery/globalize
*
* Copyright Software Freedom Conservancy, Inc.
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function (n, t) { var i, ut, it, g, tt, u, c, d, a, nt, w, e, r, k, s, l, v, y, rt, p, o, h, b, f; i = function (n) { return new i.prototype.init(n) }, typeof require != "undefined" && typeof exports != "undefined" && typeof module != "undefined" ? module.exports = i : n.Globalize = i, i.cultures = {}, i.prototype = { constructor: i, init: function (n) { return this.cultures = i.cultures, this.cultureSelector = n, this } }, i.prototype.init.prototype = i.prototype, i.cultures["default"] = { name: "en", englishName: "English", nativeName: "English", isRTL: !1, language: "en", numberFormat: { pattern: ["-n"], decimals: 2, ",": ",", ".": ".", groupSizes: [3], "+": "+", "-": "-", NaN: "NaN", negativeInfinity: "-Infinity", positiveInfinity: "Infinity", percent: { pattern: ["-n %", "n %"], decimals: 2, groupSizes: [3], ",": ",", ".": ".", symbol: "%" }, currency: { pattern: ["($n)", "$n"], decimals: 2, groupSizes: [3], ",": ",", ".": ".", symbol: "$" } }, calendars: { standard: { name: "Gregorian_USEnglish", "/": "/", ":": ":", firstDay: 0, days: { names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] }, months: { names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""], namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""] }, AM: ["AM", "am", "AM"], PM: ["PM", "pm", "PM"], eras: [{ name: "A.D.", start: null, offset: 0 }], twoDigitYearMax: 2029, patterns: { d: "M/d/yyyy", D: "dddd, MMMM dd, yyyy", t: "h:mm tt", T: "h:mm:ss tt", f: "dddd, MMMM dd, yyyy h:mm tt", F: "dddd, MMMM dd, yyyy h:mm:ss tt", M: "MMMM dd", Y: "yyyy MMMM", S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss" } } }, messages: {} }, i.cultures["default"].calendar = i.cultures["default"].calendars.standard, i.cultures.en = i.cultures["default"], i.cultureSelector = "en", ut = /^0x[a-f0-9]+$/i, it = /^[+\-]?infinity$/i, g = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, tt = /^\s+|\s+$/g, u = function (n, t) { if (n.indexOf) return n.indexOf(t); for (var i = 0, r = n.length; i < r; i++)if (n[i] === t) return i; return -1 }, c = function (n, t) { return n.substr(n.length - t.length) === t }, d = function () { var o, u, r, i, s, h, n = arguments[0] || {}, f = 1, c = arguments.length, e = !1; for (typeof n == "boolean" && (e = n, n = arguments[1] || {}, f = 2), typeof n == "object" || nt(n) || (n = {}); f < c; f++)if ((o = arguments[f]) != null) for (u in o) (r = n[u], i = o[u], n !== i) && (e && i && (w(i) || (s = a(i))) ? (s ? (s = !1, h = r && a(r) ? r : []) : h = r && w(r) ? r : {}, n[u] = d(e, h, i)) : i !== t && (n[u] = i)); return n }, a = Array.isArray || function (n) { return Object.prototype.toString.call(n) === "[object Array]" }, nt = function (n) { return Object.prototype.toString.call(n) === "[object Function]" }, w = function (n) { return Object.prototype.toString.call(n) === "[object Object]" }, e = function (n, t) { return n.indexOf(t) === 0 }, r = function (n) { return (n + "").replace(tt, "") }, k = function (n) { return isNaN(n) ? NaN : Math[n < 0 ? "ceil" : "floor"](n) }, s = function (n, t, i) { for (var r = n.length; r < t; r += 1)n = i ? "0" + n : n + "0"; return n }, l = function (n, t) { for (var f = 0, i = !1, u, r = 0, e = n.length; r < e; r++) { u = n.charAt(r); switch (u) { case "'": i ? t.push("'") : f++, i = !1; break; case "\\": i && t.push("\\"), i = !i; break; default: t.push(u), i = !1 } } return f }, v = function (n, t) { t = t || "F"; var i, u = n.patterns, r = t.length; if (r === 1) { if (i = u[t], !i) throw "Invalid date format string '" + t + "'."; t = i } else r === 2 && t.charAt(0) === "%" && (t = t.charAt(1)); return t }, y = function (n, t, i) { function e(n, t) { var i, r = n + ""; return t > 1 && r.length < t ? (i = lt[t - 2] + r, i.substr(i.length - t, t)) : i = r } function ct() { return b || rt ? b : (b = ht.test(t), rt = !0, b) } function nt(n, t) { if (w) return w[t]; switch (t) { case 0: return n.getFullYear(); case 1: return n.getMonth(); case 2: return n.getDate(); default: throw "Invalid part value " + t; } } var u = i.calendar, d = u.convert, r, g, ft, tt, it, k, f, ut, c; if (!t || !t.length || t === "i") return i && i.name.length ? d ? r = y(n, u.patterns.F, i) : (g = new Date(n.getTime()), ft = o(n, u.eras), g.setFullYear(h(n, u, ft)), r = g.toLocaleString()) : r = n.toString(), r; tt = u.eras, it = t === "s", t = v(u, t), r = []; var s, lt = ["0", "00", "000"], b, rt, ht = /([^d]|^)(d|dd)([^d]|$)/g, et = 0, ot = p(), w; for (!it && d && (w = d.fromGregorian(n)); ;) { var st = ot.lastIndex, a = ot.exec(t), at = t.slice(st, a ? a.index : t.length); if (et += l(at, r), !a) break; if (et % 2) { r.push(a[0]); continue } k = a[0], f = k.length; switch (k) { case "ddd": case "dddd": ut = f === 3 ? u.days.namesAbbr : u.days.names, r.push(ut[n.getDay()]); break; case "d": case "dd": b = !0, r.push(e(nt(n, 2), f)); break; case "MMM": case "MMMM": c = nt(n, 1), r.push(u.monthsGenitive && ct() ? u.monthsGenitive[f === 3 ? "namesAbbr" : "names"][c] : u.months[f === 3 ? "namesAbbr" : "names"][c]); break; case "M": case "MM": r.push(e(nt(n, 1) + 1, f)); break; case "y": case "yy": case "yyyy": c = w ? w[0] : h(n, u, o(n, tt), it), f < 4 && (c = c % 100), r.push(e(c, f)); break; case "h": case "hh": s = n.getHours() % 12, s === 0 && (s = 12), r.push(e(s, f)); break; case "H": case "HH": r.push(e(n.getHours(), f)); break; case "m": case "mm": r.push(e(n.getMinutes(), f)); break; case "s": case "ss": r.push(e(n.getSeconds(), f)); break; case "t": case "tt": c = n.getHours() < 12 ? u.AM ? u.AM[0] : " " : u.PM ? u.PM[0] : " ", r.push(f === 1 ? c.charAt(0) : c); break; case "f": case "ff": case "fff": r.push(e(n.getMilliseconds(), 3).substr(0, f)); break; case "z": case "zz": s = n.getTimezoneOffset() / 60, r.push((s <= 0 ? "+" : "-") + e(Math.floor(Math.abs(s)), f)); break; case "zzz": s = n.getTimezoneOffset() / 60, r.push((s <= 0 ? "+" : "-") + e(Math.floor(Math.abs(s)), 2) + ":" + e(Math.abs(n.getTimezoneOffset() % 60), 2)); break; case "g": case "gg": u.eras && r.push(u.eras[o(n, tt)].name); break; case "/": r.push(u["/"]); break; default: throw "Invalid date format pattern '" + k + "'."; } } return r.join("") }, function () { var n; n = function (n, t, i) { var l = i.groupSizes, c = l[0], y = 1, p = Math.pow(10, t), v = Math.round(n * p) / p, w; isFinite(v) || (v = n), n = v; var u = n + "", r = "", o = u.split(/e/i), f = o.length > 1 ? parseInt(o[1], 10) : 0; u = o[0], o = u.split("."), u = o[0], r = o.length > 1 ? o[1] : "", f > 0 ? (r = s(r, f, !1), u += r.slice(0, f), r = r.substr(f)) : f < 0 && (f = -f, u = s(u, f + 1, !0), r = u.slice(-f, u.length) + r, u = u.slice(0, -f)), r = t > 0 ? i["."] + (r.length > t ? r.slice(0, t) : s(r, t)) : ""; for (var e = u.length - 1, a = i[","], h = ""; e >= 0;) { if (c === 0 || c > e) return u.slice(0, e + 1) + (h.length ? a + h + r : r); h = u.slice(e - c + 1, e + 1) + (h.length ? a + h : ""), e -= c, y < l.length && (c = l[y], y++) } return u.slice(0, e + 1) + a + h + r }, rt = function (t, i, r) { var a, f, v, e, y, c; if (!isFinite(t)) return t === Infinity ? r.numberFormat.positiveInfinity : t === -Infinity ? r.numberFormat.negativeInfinity : r.numberFormat.NaN; if (!i || i === "i") return r.name.length ? t.toLocaleString() : t.toString(); i = i || "D"; var o = r.numberFormat, u = Math.abs(t), h = -1, l; i.length > 1 && (h = parseInt(i.slice(1), 10)), a = i.charAt(0).toUpperCase(); switch (a) { case "D": l = "n", u = k(u), h !== -1 && (u = s("" + u, h, !0)), t < 0 && (u = "-" + u); break; case "N": f = o; case "C": f = f || o.currency; case "P": f = f || o.percent, l = t < 0 ? f.pattern[0] : f.pattern[1] || "n", h === -1 && (h = f.decimals), u = n(u * (a === "P" ? 100 : 1), h, f); break; default: throw "Bad number format specifier: " + a; }for (v = /n|\$|-|%/g, e = ""; ;) { if (y = v.lastIndex, c = v.exec(l), e += l.slice(y, c ? c.index : l.length), !c) break; switch (c[0]) { case "n": e += u; break; case "$": e += o.currency.symbol; break; case "-": /[1-9]/.test(u) && (e += o["-"]); break; case "%": e += o.percent.symbol } } return e } }(), p = function () { return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g }, o = function (n, t) { var r, f, i, u; if (!t) return 0; for (f = n.getTime(), i = 0, u = t.length; i < u; i++)if (r = t[i].start, r === null || f >= r) return i; return 0 }, h = function (n, t, i, r) { var u = n.getFullYear(); return !r && t.eras && (u -= t.eras[i].offset), u }, function () { var f, s, c, a, n, i, t; f = function (n, t) { if (t < 100) { var r = new Date, f = o(r), u = h(r, n, f), i = n.twoDigitYearMax; i = typeof i == "string" ? (new Date).getFullYear() % 100 + parseInt(i, 10) : i, t += u - u % 100, t > i && (t -= 100) } return t }, s = function (n, r, f) { var o, s = n.days, e = n._upperDays; return e || (n._upperDays = e = [t(s.names), t(s.namesAbbr), t(s.namesShort)]), r = i(r), f ? (o = u(e[1], r), o === -1 && (o = u(e[2], r))) : o = u(e[0], r), o }, c = function (n, r, f) { var h = n.months, c = n.monthsGenitive || n.months, e = n._upperMonths, s = n._upperMonthsGen, o; return e || (n._upperMonths = e = [t(h.names), t(h.namesAbbr)], n._upperMonthsGen = s = [t(c.names), t(c.namesAbbr)]), r = i(r), o = u(f ? e[1] : e[0], r), o < 0 && (o = u(f ? s[1] : s[0], r)), o }, a = function (n, t) { var e = n._parseRegExp, o, k, f, a, i, y, c; if (e) { if (o = e[t], o) return o } else n._parseRegExp = e = {}; for (var h = v(n, t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), r = ["^"], b = [], s = 0, w = 0, d = p(), u; (u = d.exec(h)) !== null;) { if (k = h.slice(s, u.index), s = d.lastIndex, w += l(k, r), w % 2) { r.push(u[0]); continue } f = u[0], a = f.length; switch (f) { case "dddd": case "ddd": case "MMMM": case "MMM": case "gg": case "g": i = "(\\D+)"; break; case "tt": case "t": i = "(\\D*)"; break; case "yyyy": case "fff": case "ff": case "f": i = "(\\d{" + a + "})"; break; case "dd": case "d": case "MM": case "M": case "yy": case "y": case "HH": case "H": case "hh": case "h": case "mm": case "m": case "ss": case "s": i = "(\\d\\d?)"; break; case "zzz": i = "([+-]?\\d\\d?:\\d{2})"; break; case "zz": case "z": i = "([+-]?\\d\\d?)"; break; case "/": i = "(\\/)"; break; default: throw "Invalid date format pattern '" + f + "'."; }i && r.push(i), b.push(u[0]) } return l(h.slice(s), r), r.push("$"), y = r.join("").replace(/\s+/g, "\\s+"), c = { regExp: y, groups: b }, e[t] = c }, n = function (n, t, i) { return n < t || n > i }, i = function (n) { return n.split("\u00a0").join(" ").toUpperCase() }, t = function (n) { for (var u = [], t = 0, r = n.length; t < r; t++)u[t] = i(n[t]); return u }, b = function (t, i, u) { var d, bt, l, ft, ut, nt, g, dt, h, vt, tt, ot; t = r(t); var o = u.calendar, yt = a(o, i), pt = new RegExp(yt.regExp).exec(t); if (pt === null) return null; var wt = yt.groups, ct = null, b = null, p = null, w = null, rt = null, y = 0, k, lt = 0, ht = 0, st = 0, et = null, at = !1; for (d = 0, bt = wt.length; d < bt; d++)if (l = pt[d + 1], l) { var kt = wt[d], it = kt.length, v = parseInt(l, 10); switch (kt) { case "dd": case "d": if (w = v, n(w, 1, 31)) return null; break; case "MMM": case "MMMM": if (p = c(o, l, it === 3), n(p, 0, 11)) return null; break; case "M": case "MM": if (p = v - 1, n(p, 0, 11)) return null; break; case "y": case "yy": case "yyyy": if (b = it < 4 ? f(o, v) : v, n(b, 0, 9999)) return null; break; case "h": case "hh": if (y = v, y === 12 && (y = 0), n(y, 0, 11)) return null; break; case "H": case "HH": if (y = v, n(y, 0, 23)) return null; break; case "m": case "mm": if (lt = v, n(lt, 0, 59)) return null; break; case "s": case "ss": if (ht = v, n(ht, 0, 59)) return null; break; case "tt": case "t": if (at = o.PM && (l === o.PM[0] || l === o.PM[1] || l === o.PM[2]), !at && (!o.AM || l !== o.AM[0] && l !== o.AM[1] && l !== o.AM[2])) return null; break; case "f": case "ff": case "fff": if (st = v * Math.pow(10, 3 - it), n(st, 0, 999)) return null; break; case "ddd": case "dddd": if (rt = s(o, l, it === 3), n(rt, 0, 6)) return null; break; case "zzz": if ((ft = l.split(/:/), ft.length !== 2) || (k = parseInt(ft[0], 10), n(k, -12, 13)) || (ut = parseInt(ft[1], 10), n(ut, 0, 59))) return null; et = k * 60 + (e(l, "-") ? -ut : ut); break; case "z": case "zz": if (k = v, n(k, -12, 13)) return null; et = k * 60; break; case "g": case "gg": if (nt = l, !nt || !o.eras) return null; for (nt = r(nt.toLowerCase()), g = 0, dt = o.eras.length; g < dt; g++)if (nt === o.eras[g].name.toLowerCase()) { ct = g; break } if (ct === null) return null } } if (h = new Date, tt = o.convert, vt = tt ? tt.fromGregorian(h)[0] : h.getFullYear(), b === null ? b = vt : o.eras && (b += o.eras[ct || 0].offset), p === null && (p = 0), w === null && (w = 1), tt) { if (h = tt.toGregorian(b, p, w), h === null) return null } else if ((h.setFullYear(b, p, w), h.getDate() !== w) || rt !== null && h.getDay() !== rt) return null; return at && y < 12 && (y += 12), h.setHours(y, lt, ht, st), et !== null && (ot = h.getMinutes() - (et + h.getTimezoneOffset()), h.setHours(h.getHours() + parseInt(ot / 60, 10), ot % 60)), h } }(), f = function (n, t, i) { var u = t["-"], r = t["+"], f; switch (i) { case "n -": u = " " + u, r = " " + r; case "n-": c(n, u) ? f = ["-", n.substr(0, n.length - u.length)] : c(n, r) && (f = ["+", n.substr(0, n.length - r.length)]); break; case "- n": u += " ", r += " "; case "-n": e(n, u) ? f = ["-", n.substr(u.length)] : e(n, r) && (f = ["+", n.substr(r.length)]); break; case "(n)": e(n, "(") && c(n, ")") && (f = ["-", n.substr(1, n.length - 2)]) }return f || ["", n] }, i.prototype.findClosestCulture = function (n) { return i.findClosestCulture.call(this, n) }, i.prototype.format = function (n, t, r) { return i.format.call(this, n, t, r) }, i.prototype.localize = function (n, t) { return i.localize.call(this, n, t) }, i.prototype.parseInt = function (n, t, r) { return i.parseInt.call(this, n, t, r) }, i.prototype.parseFloat = function (n, t, r) { return i.parseFloat.call(this, n, t, r) }, i.prototype.culture = function (n) { return i.culture.call(this, n) }, i.addCultureInfo = function (n, t, i) { var r = {}, u = !1; typeof n != "string" ? (i = n, n = this.culture().name, r = this.cultures[n]) : typeof t != "string" ? (i = t, u = this.cultures[n] == null, r = this.cultures[n] || this.cultures["default"]) : (u = !0, r = this.cultures[t]), this.cultures[n] = d(!0, {}, r, i), u && (this.cultures[n].calendar = this.cultures[n].calendars.standard) }, i.findClosestCulture = function (n) { var f, u, o, l, y, c; if (!n) return this.findClosestCulture(this.cultureSelector) || this.cultures["default"]; if (typeof n == "string" && (n = n.split(",")), a(n)) { for (var i, s = this.cultures, v = n, h = v.length, e = [], t = 0; t < h; t++)n = r(v[t]), o = n.split(";"), i = r(o[0]), o.length === 1 ? u = 1 : (n = r(o[1]), n.indexOf("q=") === 0 ? (n = n.substr(2), u = parseFloat(n), u = isNaN(u) ? 0 : u) : u = 1), e.push({ lang: i, pri: u }); for (e.sort(function (n, t) { return n.pri < t.pri ? 1 : n.pri > t.pri ? -1 : 0 }), t = 0; t < h; t++)if (i = e[t].lang, f = s[i], f) return f; for (t = 0; t < h; t++) { i = e[t].lang; do { if (l = i.lastIndexOf("-"), l === -1) break; if (i = i.substr(0, l), f = s[i], f) return f } while (1) } for (t = 0; t < h; t++) { i = e[t].lang; for (y in s) if (c = s[y], c.language == i) return c } } else if (typeof n == "object") return n; return f || null }, i.format = function (n, t, i) { var r = this.findClosestCulture(i); return n instanceof Date ? n = y(n, t, r) : typeof n == "number" && (n = rt(n, t, r)), n }, i.localize = function (n, t) { return this.findClosestCulture(t).messages[n] || this.cultures["default"].messages[n] }, i.parseDate = function (n, t, i) { var r, o, f, u, s, e; if (i = this.findClosestCulture(i), t) { if (typeof t == "string" && (t = [t]), t.length) for (u = 0, s = t.length; u < s; u++)if (e = t[u], e && (r = b(n, e, i), r)) break } else { f = i.calendar.patterns; for (o in f) if (r = b(n, f[o], i), r) break } return r || null }, i.parseInt = function (n, t, r) { return k(i.parseFloat(n, t, r)) }, i.parseFloat = function (n, t, i) { var k, c, l, s, b, nt, y, p, tt, v, d; typeof t != "number" && (i = t, t = 10); var a = this.findClosestCulture(i), w = NaN, u = a.numberFormat; if (n.indexOf(a.numberFormat.currency.symbol) > -1 && (n = n.replace(a.numberFormat.currency.symbol, ""), n = n.replace(a.numberFormat.currency["."], a.numberFormat["."])), n = r(n), it.test(n)) w = parseFloat(n); else if (!t && ut.test(n)) w = parseInt(n, 16); else { var e = f(n, u, u.pattern[0]), o = e[0], h = e[1]; o === "" && u.pattern[0] !== "(n)" && (e = f(n, u, "(n)"), o = e[0], h = e[1]), o === "" && u.pattern[0] !== "-n" && (e = f(n, u, "-n"), o = e[0], h = e[1]), o = o || "+", l = h.indexOf("e"), l < 0 && (l = h.indexOf("E")), l < 0 ? (c = h, k = null) : (c = h.substr(0, l), k = h.substr(l + 1)), nt = u["."], y = c.indexOf(nt), y < 0 ? (s = c, b = null) : (s = c.substr(0, y), b = c.substr(y + nt.length)), p = u[","], s = s.split(p).join(""), tt = p.replace(/\u00A0/g, " "), p !== tt && (s = s.split(tt).join("")), v = o + s, b !== null && (v += "." + b), k !== null && (d = f(k, u, "-n"), v += "e" + (d[0] || "+") + d[1]), g.test(v) && (w = parseFloat(v)) } return w }, i.culture = function (n) { return typeof n != "undefined" && (this.cultureSelector = n), this.findClosestCulture(n) || this.cultures["default"] } })(this);
/*! JsRender v1.0.11: http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(t,e){var n=e.jQuery;"object"==typeof exports?module.exports=n?t(e,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return t(e,n)}:"function"==typeof define&&define.amd?define(function(){return t(e)}):t(e,!1)}(function(t,e){"use strict";function n(t,e){return function(){var n,r=this,i=r.base;return r.base=t,n=e.apply(r,arguments),r.base=i,n}}function r(t,e){return st(e)&&(e=n(t?t._d?t:n(a,t):a,e),e._d=(t&&t._d||0)+1),e}function i(t,e){var n,i=e.props;for(n in i)!Vt.test(n)||t[n]&&t[n].fix||(t[n]="convert"!==n?r(t.constructor.prototype[n],i[n]):i[n])}function o(t){return t}function a(){return""}function s(t){try{throw console.log("JsRender dbg breakpoint: "+t),"dbg breakpoint"}catch(e){}return this.base?this.baseApply(arguments):t}function l(t){this.name=(e.link?"JsViews":"JsRender")+" Error",this.message=t||this.name}function d(t,e){if(t){for(var n in e)t[n]=e[n];return t}}function c(t,e,n){return t?lt(t)?c.apply(ot,t):(wt=n?n[0]:wt,/^(\W|_){5}$/.test(t+e+wt)||S("Invalid delimiters"),mt=t[0],_t=t[1],xt=e[0],bt=e[1],gt.delimiters=[mt+_t,xt+bt,wt],t="\\"+mt+"(\\"+wt+")?\\"+_t,e="\\"+xt+"\\"+bt,rt="(?:(\\w+(?=[\\/\\s\\"+xt+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+xt+"]|\\"+xt+"(?!\\"+bt+"))*?)",ft.rTag="(?:"+rt+")",rt=new RegExp("(?:"+t+rt+"(\\/)?|\\"+mt+"(\\"+wt+")?\\"+_t+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+e,"g"),ft.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+t+".*"+e),ht):gt.delimiters}function p(t,e){e||t===!0||(e=t,t=void 0);var n,r,i,o,a=this,s="root"===e;if(t){if(o=e&&a.type===e&&a,!o)if(n=a.views,a._.useKey){for(r in n)if(o=e?n[r].get(t,e):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=e?n[r].get(t,e):n[r]}else if(s)o=a.root;else if(e)for(;a&&!o;)o=a.type===e?a:void 0,a=a.parent;else o=a.parent;return o||void 0}function u(){var t=this.get("item");return t?t.index:void 0}function f(){return this.index}function g(t,e,n,r){var i,o,s,l=0;if(1===n&&(r=1,n=void 0),e)for(o=e.split("."),s=o.length;t&&l<s;l++)i=t,t=o[l]?t[o[l]]:t;return n&&(n.lt=n.lt||l<s),void 0===t?r?a:"":r?function(){return t.apply(i,arguments)}:t}function v(n,r,i){var o,a,s,l,c,p,u,f=this,g=!Ct&&arguments.length>1,v=f.ctx;if(n){if(f._||(c=f.index,f=f.tag),p=f,v&&v.hasOwnProperty(n)||(v=pt).hasOwnProperty(n)){if(s=v[n],"tag"===n||"tagCtx"===n||"root"===n||"parentTags"===n)return s}else v=void 0;if((!Ct&&f.tagCtx||f.linked)&&(s&&s._cxp||(f=f.tagCtx||st(s)?f:(f=f.scope||f,!f.isTop&&f.ctx.tag||f),void 0!==s&&f.tagCtx&&(f=f.tagCtx.view.scope),v=f._ocps,s=v&&v.hasOwnProperty(n)&&v[n]||s,s&&s._cxp||!i&&!g||((v||(f._ocps=f._ocps||{}))[n]=s=[{_ocp:s,_vw:p,_key:n}],s._cxp={path:jt,ind:0,updateValue:function(t,n){return e.observable(s[0]).setProperty(jt,t),this}})),l=s&&s._cxp)){if(arguments.length>2)return a=s[1]?ft._ceo(s[1].deps):[jt],a.unshift(s[0]),a._cxp=l,a;if(c=l.tagElse,u=s[1]?l.tag&&l.tag.cvtArgs?l.tag.cvtArgs(c,1)[l.ind]:s[1](s[0].data,s[0],ft):s[0]._ocp,g)return ft._ucp(n,r,f,l),f;s=u}return s&&st(s)&&(o=function(){return s.apply(this&&this!==t?this:p,arguments)},d(o,s)),o||s}}function h(t){return t&&(t.fn?t:this.getRsc("templates",t)||dt(t))}function m(t,e,n,r){var o,a,s,l,c,p="number"==typeof n&&e.tmpl.bnds[n-1];if(void 0===r&&p&&p._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:p&&(n=p(e.data,e,ft)),p=p._bd&&p,t||p){if(a=e._lc,o=a&&a.tag,n.view=e,!o){if(o=d(new ft._tg,{_:{bnd:p,unlinked:!0,lt:n.lt},inline:!a,tagName:":",convert:t,onArrayChange:!0,flow:!0,tagCtx:n,tagCtxs:[n],_is:"tag"}),l=n.args.length,l>1)for(c=o.bindTo=[];l--;)c.unshift(l);a&&(a.tag=o,o.linkCtx=a),n.ctx=Q(n.ctx,(a?a.view:e).ctx),i(o,n)}o._er=r&&s,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,s=o.cvtArgs()[0],o._er=r&&s}else s=n.args[0];return s=p&&e._.onRender?e._.onRender(s,e,o):s,void 0!=s?s:""}function _(t,e){var n,r,i,o,a,s,l,d=this;if(d.tagName){if(s=d,d=(s.tagCtxs||[d])[t||0],!d)return}else s=d.tag;if(a=s.bindFrom,o=d.args,(l=s.convert)&&""+l===l&&(l="true"===l?void 0:d.view.getRsc("converters",l)||S("Unknown converter: '"+l+"'")),l&&!e&&(o=o.slice()),a){for(i=[],n=a.length;n--;)r=a[n],i.unshift(x(d,r));e&&(o=i)}if(l){if(l=l.apply(s,i||o),void 0===l)return o;if(a=a||[0],n=a.length,lt(l)&&(l.arg0===!1||1!==n&&l.length===n&&!l.arg0)||(l=[l],a=[0],n=1),e)o=l;else for(;n--;)r=a[n],+r===r&&(o[r]=l[n])}return o}function x(t,e){return t=t[+e===e?"args":"props"],t&&t[e]}function b(t){return this.cvtArgs(t,1)}function w(t,e){var n,r,i=this;if(""+e===e){for(;void 0===n&&i;)r=i.tmpl&&i.tmpl[t],n=r&&r[e],i=i.parent;return n||ot[t][e]}}function y(t,e,n,r,o,a){function s(t){var e=l[t];if(void 0!==e)for(e=lt(e)?e:[e],h=e.length;h--;)q=e[h],isNaN(parseInt(q))||(e[h]=parseInt(q));return e||[0]}e=e||it;var l,d,c,p,u,f,g,h,m,w,y,C,k,j,T,A,P,F,N,R,M,$,V,I,D,q,U,K,J,B,L=0,H="",W=e._lc||!1,Z=e.ctx,z=n||e.tmpl,G="number"==typeof r&&e.tmpl.bnds[r-1];for("tag"===t._is?(l=t,t=l.tagName,r=l.tagCtxs,c=l.template):(d=e.getRsc("tags",t)||S("Unknown tag: {{"+t+"}} "),c=d.template),void 0===a&&G&&(G._lr=d.lateRender&&G._lr!==!1||G._lr)&&(a=""),void 0!==a?(H+=a,r=a=[{props:{},args:[],params:{props:{}}}]):G&&(r=G(e.data,e,ft)),g=r.length;L<g;L++)y=r[L],P=y.tmpl,(!W||!W.tag||L&&!W.tag.inline||l._er||P&&+P===P)&&(P&&z.tmpls&&(y.tmpl=y.content=z.tmpls[P-1]),y.index=L,y.ctxPrm=v,y.render=E,y.cvtArgs=_,y.bndArgs=b,y.view=e,y.ctx=Q(Q(y.ctx,d&&d.ctx),Z)),(n=y.props.tmpl)&&(y.tmpl=e._getTmpl(n),y.content=y.content||y.tmpl),l?W&&W.fn._lr&&(F=!!l.init):(l=new d._ctr,F=!!l.init,l.parent=f=Z&&Z.tag,l.tagCtxs=r,W&&(l.inline=!1,W.tag=l),l.linkCtx=W,(l._.bnd=G||W.fn)?(l._.ths=y.params.props["this"],l._.lt=r.lt,l._.arrVws={}):l.dataBoundOnly&&S(t+" must be data-bound:\n{^{"+t+"}}")),I=l.dataMap,y.tag=l,I&&r&&(y.map=r[L].map),l.flow||(C=y.ctx=y.ctx||{},p=l.parents=C.parentTags=Z&&Q(C.parentTags,Z.parentTags)||{},f&&(p[f.tagName]=f),p[l.tagName]=C.tag=l,C.tagCtx=y);if(!(l._er=a)){for(i(l,r[0]),l.rendering={rndr:l.rendering},L=0;L<g;L++){if(y=l.tagCtx=r[L],V=y.props,l.ctx=y.ctx,!L){if(F&&(l.init(y,W,l.ctx),F=void 0),y.args.length||y.argDefault===!1||l.argDefault===!1||(y.args=M=[y.view.data],y.params.args=["#data"]),j=s("bindTo"),void 0!==l.bindTo&&(l.bindTo=j),void 0!==l.bindFrom?l.bindFrom=s("bindFrom"):l.bindTo&&(l.bindFrom=l.bindTo=j),T=l.bindFrom||j,K=j.length,U=T.length,l._.bnd&&(J=l.linkedElement)&&(l.linkedElement=J=lt(J)?J:[J],K!==J.length&&S("linkedElement not same length as bindTo")),(J=l.linkedCtxParam)&&(l.linkedCtxParam=J=lt(J)?J:[J],U!==J.length&&S("linkedCtxParam not same length as bindFrom/bindTo")),T)for(l._.fromIndex={},l._.toIndex={},m=U;m--;)for(q=T[m],h=K;h--;)q===j[h]&&(l._.fromIndex[h]=m,l._.toIndex[m]=h);W&&(W.attr=l.attr=W.attr||l.attr||W._dfAt),u=l.attr,l._.noVws=u&&u!==Jt}if(M=l.cvtArgs(L),l.linkedCtxParam)for($=l.cvtArgs(L,1),h=U,B=l.constructor.prototype.ctx;h--;)(k=l.linkedCtxParam[h])&&(q=T[h],A=$[h],y.ctx[k]=ft._cp(B&&void 0===A?B[k]:A,void 0!==A&&x(y.params,q),y.view,l._.bnd&&{tag:l,cvt:l.convert,ind:h,tagElse:L}));(N=V.dataMap||I)&&(M.length||V.dataMap)&&(R=y.map,R&&R.src===M[0]&&!o||(R&&R.src&&R.unmap(),N.map(M[0],y,R,!l._.bnd),R=y.map),M=[R.tgt]),w=void 0,l.render&&(w=l.render.apply(l,M),e.linked&&w&&!Et.test(w)&&(n={links:[]},n.render=n.fn=function(){return w},w=O(n,e.data,void 0,!0,e,void 0,void 0,l))),M.length||(M=[e]),void 0===w&&(D=M[0],l.contentCtx&&(D=l.contentCtx===!0?e:l.contentCtx(D)),w=y.render(D,!0)||(o?void 0:"")),H=H?H+(w||""):void 0!==w?""+w:void 0}l.rendering=l.rendering.rndr}return l.tagCtx=r[0],l.ctx=l.tagCtx.ctx,l._.noVws&&l.inline&&(H="text"===u?ct.html(H):""),G&&e._.onRender?e._.onRender(H,e,l):H}function C(t,e,n,r,i,o,a,s){var l,d,c,p=this,f="array"===e;p.content=s,p.views=f?[]:{},p.data=r,p.tmpl=i,c=p._={key:0,useKey:f?0:1,id:""+qt++,onRender:a,bnds:{}},p.linked=!!a,p.type=e||"top",e&&(p.cache={_ct:gt._cchCt}),n&&"top"!==n.type||((p.ctx=t||{}).root=p.data),(p.parent=n)?(p.root=n.root||p,l=n.views,d=n._,p.isTop=d.scp,p.scope=(!t.tag||t.tag===n.ctx.tag)&&!p.isTop&&n.scope||p,d.useKey?(l[c.key="_"+d.useKey++]=p,p.index=Ht,p.getIndex=u):l.length===(c.key=p.index=o)?l.push(p):l.splice(o,0,p),p.ctx=t||n.ctx):e&&(p.root=p)}function k(t){var e,n,r;for(e in Xt)n=e+"s",t[n]&&(r=t[n],t[n]={},ot[n](r,t))}function j(t,e,n){function i(){var e=this;e._={unlinked:!0},e.inline=!0,e.tagName=t}var o,a,s,l=new ft._tg;if(st(e)?e={depends:e.depends,render:e}:""+e===e&&(e={template:e}),a=e.baseTag){e.flow=!!e.flow,a=""+a===a?n&&n.tags[a]||ut[a]:a,a||S('baseTag: "'+e.baseTag+'" not found'),l=d(l,a);for(s in e)l[s]=r(a[s],e[s])}else l=d(l,e);return void 0!==(o=l.template)&&(l.template=""+o===o?dt[o]||dt(o):o),(i.prototype=l).constructor=l._ctr=i,n&&(l._parentTmpl=n),l}function T(t){return this.base.apply(this,t)}function A(t,n,r,i){function o(n){var o,s;if(""+n===n||n.nodeType>0&&(a=n)){if(!a)if(/^\.?\/[^\\:*?"<>]*$/.test(n))(s=dt[t=t||n])?n=s:a=document.getElementById(n);else if("#"===n.charAt(0))a=document.getElementById(n.slice(1));else if(e.fn&&!ft.rTmpl.test(n))try{a=e(n,document)[0]}catch(l){}a&&("SCRIPT"!==a.tagName&&S(n+": Use script block, not "+a.tagName),i?n=a.innerHTML:(o=a.getAttribute(Lt),o&&(o!==Qt?(n=dt[o],delete dt[o]):e.fn&&(n=e.data(a)[Qt])),o&&n||(t=t||(e.fn?Qt:n),n=A(t,a.innerHTML,r,i)),n.tmplName=t=t||o,t!==Qt&&(dt[t]=n),a.setAttribute(Lt,t),e.fn&&e.data(a,Qt,n))),a=void 0}else n.fn||(n=void 0);return n}var a,s,l=n=n||"";if(ft._html=ct.html,0===i&&(i=void 0,l=o(l)),i=i||(n.markup?n.bnds?d({},n):n:{}),i.tmplName=i.tmplName||t||"unnamed",r&&(i._parentTmpl=r),!l&&n.markup&&(l=o(n.markup))&&l.fn&&(l=l.markup),void 0!==l)return l.render||n.render?l.tmpls&&(s=l):(n=R(l,i),q(l.replace(Pt,"\\$&"),n)),s||(s=d(function(){return s.render.apply(s,arguments)},n),k(s)),s}function P(t,e){return st(t)?t.call(e):t}function F(t,e,n){Object.defineProperty(t,e,{value:n,configurable:!0})}function N(t,n){function r(t){c.apply(this,t)}function i(){return new r(arguments)}function o(t,e){for(var n,r,i,o,a,s=0;s<x;s++)i=f[s],n=void 0,i+""!==i&&(n=i,i=n.getter,a=n.parentRef),void 0===(o=t[i])&&n&&void 0!==(r=n.defaultVal)&&(o=P(r,t)),e(o,n&&u[n.type],i,a)}function a(e){e=e+""===e?JSON.parse(e):e;var n,r,i,a,d=0,c=e,p=[];if(lt(e)){for(e=e||[],n=e.length;d<n;d++)p.push(this.map(e[d]));return p._is=t,p.unmap=l,p.merge=s,p}if(e){for(o(e,function(t,e){e&&(t=e.map(t)),p.push(t)}),c=this.apply(this,p),d=x;d--;)if(i=p[d],a=f[d].parentRef,a&&i&&i.unmap)if(lt(i))for(n=i.length;n--;)F(i[n],a,c);else F(i,a,c);for(r in e)r===at||w[r]||(c[r]=e[r])}return c}function s(t,e,n){t=t+""===t?JSON.parse(t):t;var r,a,s,l,d,c,p,u,f,g,h=0,m=this;if(lt(m)){for(p={},f=[],a=t.length,s=m.length;h<a;h++){for(u=t[h],c=!1,r=0;r<s&&!c;r++)p[r]||(d=m[r],v&&(p[r]=c=v+""===v?u[v]&&(w[v]?d[v]():d[v])===u[v]:v(d,u)));c?(d.merge(u),f.push(d)):(f.push(g=i.map(u)),n&&F(g,n,e))}return void(b?b(m).refresh(f,!0):m.splice.apply(m,[0,m.length].concat(f)))}o(t,function(t,e,n,r){e?m[n]().merge(t,m,r):m[n]()!==t&&m[n](t)});for(l in t)l===at||w[l]||(m[l]=t[l])}function l(){function t(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n].unmap());return e}var e,n,r,i,o=0,a=this;if(lt(a))return t(a);for(e={};o<x;o++)n=f[o],r=void 0,n+""!==n&&(r=n,n=r.getter),i=a[n](),e[n]=r&&i&&u[r.type]?lt(i)?t(i):i.unmap():i;for(n in a)!a.hasOwnProperty(n)||"_"===n.charAt(0)&&w[n.slice(1)]||n===at||st(a[n])||(e[n]=a[n]);return e}var d,c,p,u=this,f=n.getters,g=n.extend,v=n.id,h=e.extend({_is:t||"unnamed",unmap:l,merge:s},g),m="",_="",x=f?f.length:0,b=e.observable,w={};for(r.prototype=h,d=0;d<x;d++)!function(t){t=t.getter||t,w[t]=d+1;var e="_"+t;m+=(m?",":"")+t,_+="this."+e+" = "+t+";\n",h[t]=h[t]||function(n){return arguments.length?void(b?b(this).setProperty(t,n):this[e]=n):this[e]},b&&(h[t].set=h[t].set||function(t){this[e]=t})}(f[d]);return _=new Function(m,_),c=function(){_.apply(this,arguments),(p=arguments[x+1])&&F(this,arguments[x],p)},c.prototype=h,h.constructor=c,i.map=a,i.getters=f,i.extend=g,i.id=v,i}function R(t,n){var r,i=vt._wm||{},o={tmpls:[],links:{},bnds:[],_is:"template",render:E};return n&&(o=d(o,n)),o.markup=t,o.htmlTag||(r=Rt.exec(t),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=e.trim(o.markup)),o}function M(t,e){function n(i,o,a){var s,l,d,c=ft.onStore[t];if(i&&typeof i===Bt&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===t&&i.getters||i.extend)){for(l in i)n(l,i[l],o);return o||ot}return i&&""+i!==i&&(a=o,o=i,i=void 0),d=a?"viewModel"===t?a:a[r]=a[r]||{}:n,s=e.compile,void 0===o&&(o=s?i:d[i],i=void 0),null===o?i&&delete d[i]:(s&&(o=s.call(d,i,o,a,0)||{},o._is=t),i&&(d[i]=o)),c&&c(i,o,a,s),o}var r=t+"s";ot[r]=n}function $(t){ht[t]=ht[t]||function(e){return arguments.length?(gt[t]=e,ht):gt[t]}}function V(t){function e(e,n){this.tgt=t.getTgt(e,n),n.map=this}return st(t)&&(t={getTgt:t}),t.baseMap&&(t=d(d({},t.baseMap),t)),t.map=function(t,n){return new e(t,n)},t}function E(t,e,n,r,i,o){var a,s,l,d,c,p,u,f,g=r,v="";if(e===!0?(n=e,e=void 0):typeof e!==Bt&&(e=void 0),(l=this.tag)?(c=this,g=g||c.view,d=g._getTmpl(l.template||c.tmpl),arguments.length||(t=l.contentCtx&&st(l.contentCtx)?t=l.contentCtx(t):g)):d=this,d){if(!r&&t&&"view"===t._is&&(g=t),g&&t===g&&(t=g.data),p=!g,Ct=Ct||p,p&&((e=e||{}).root=t),!Ct||vt.useViews||d.useViews||g&&g!==it)v=O(d,t,e,n,g,i,o,l);else{if(g?(u=g.data,f=g.index,g.index=Ht):(g=it,u=g.data,g.data=t,g.ctx=e),lt(t)&&!n)for(a=0,s=t.length;a<s;a++)g.index=a,g.data=t[a],v+=d.fn(t[a],g,ft);else g.data=t,v+=d.fn(t,g,ft);g.data=u,g.index=f}p&&(Ct=void 0)}return v}function O(t,e,n,r,i,o,a,s){var l,c,p,u,f,g,v,h,m,_,x,b,w,y="";if(s&&(m=s.tagName,b=s.tagCtx,n=n?Q(n,s.ctx):s.ctx,t===i.content?v=t!==i.ctx._wrp?i.ctx._wrp:void 0:t!==b.content?t===s.template?(v=b.tmpl,n._wrp=b.content):v=b.content||i.content:v=i.content,b.props.link===!1&&(n=n||{},n.link=!1)),i&&(a=a||i._.onRender,w=n&&n.link===!1,w&&i._.nl&&(a=void 0),n=Q(n,i.ctx),b=!s&&i.tag?i.tag.tagCtxs[i.tagElse]:b),(_=b&&b.props.itemVar)&&("~"!==_[0]&&D("Use itemVar='~myItem'"),_=_.slice(1)),o===!0&&(g=!0,o=0),a&&s&&s._.noVws&&(a=void 0),h=a,a===!0&&(h=void 0,a=i._.onRender),n=t.helpers?Q(t.helpers,n):n,x=n,lt(e)&&!r)for(p=g?i:void 0!==o&&i||new C(n,"array",i,e,t,o,a,v),p._.nl=w,i&&i._.useKey&&(p._.bnd=!s||s._.bnd&&s,p.tag=s),l=0,c=e.length;l<c;l++)u=new C(x,"item",p,e[l],t,(o||0)+l,a,p.content),_&&((u.ctx=d({},x))[_]=ft._cp(e[l],"#data",u)),f=t.fn(e[l],u,ft),y+=p._.onRender?p._.onRender(f,u):f;else p=g?i:new C(x,m||"data",i,e,t,o,a,v),_&&((p.ctx=d({},x))[_]=ft._cp(e,"#data",p)),p.tag=s,p._.nl=w,y+=t.fn(e,p,ft);return s&&(p.tagElse=b.index,b.contentView=p),h?h(y,p):y}function I(t,e,n){var r=void 0!==n?st(n)?n.call(e.data,t,e):n||"":"{Error: "+(t.message||t)+"}";return gt.onError&&void 0!==(n=gt.onError.call(e.data,t,n&&r,e))&&(r=n),e&&!e._lc?ct.html(r):r}function S(t){throw new ft.Err(t)}function D(t){S("Syntax error\n"+t)}function q(t,e,n,r,i){function o(e){e-=v,e&&m.push(t.substr(v,e).replace(Tt,"\\n"))}function a(e,n){e&&(e+="}}",D((n?"{{"+n+"}} block has {{/"+e+" without {{"+e:"Unmatched or missing {{/"+e)+", in template:\n"+t))}function s(s,l,d,u,g,x,b,w,y,C,k,j){(b&&l||y&&!d||w&&":"===w.slice(-1)||C)&&D(s),x&&(g=":",u=Jt),y=y||n&&!i;var T,A,P,F=(l||n)&&[[]],N="",R="",M="",$="",V="",E="",O="",I="",S=!y&&!g;d=d||(w=w||"#data",g),o(j),v=j+s.length,b?f&&m.push(["*","\n"+w.replace(/^:/,"ret+= ").replace(At,"$1")+";\n"]):d?("else"===d&&(Nt.test(w)&&D('For "{{else if expr}}" use "{{else expr}}"'),F=_[9]&&[[]],_[10]=t.substring(_[10],j),A=_[11]||_[0]||D("Mismatched: "+s),_=h.pop(),m=_[2],S=!0),w&&B(w.replace(Tt," "),F,e,n).replace(Ft,function(t,e,n,r,i,o,a,s){return"this:"===r&&(o="undefined"),s&&(P=P||"@"===s[0]),r="'"+i+"':",a?(R+=n+o+",",$+="'"+s+"',"):n?(M+=r+"j._cp("+o+',"'+s+'",view),',E+=r+"'"+s+"',"):e?O+=o:("trigger"===i&&(I+=o),"lateRender"===i&&(T="false"!==s),N+=r+o+",",V+=r+"'"+s+"',",p=p||Vt.test(i)),""}).slice(0,-1),F&&F[0]&&F.pop(),c=[d,u||!!r||p||"",S&&[],K($||(":"===d?"'#data',":""),V,E),K(R||(":"===d?"data,":""),N,M),O,I,T,P,F||0],m.push(c),S&&(h.push(_),_=c,_[10]=v,_[11]=A)):k&&(a(k!==_[0]&&k!==_[11]&&k,_[0]),_[10]=t.substring(_[10],j),_=h.pop()),a(!_&&k),m=_[2]}var l,d,c,p,u,f=gt.allowCode||e&&e.allowCode||ht.allowCode===!0,g=[],v=0,h=[],m=g,_=[,,g];if(f&&e._is&&(e.allowCode=f),n&&(void 0!==r&&(t=t.slice(0,-r.length-2)+xt),t=mt+t+bt),a(h[0]&&h[0][2].pop()[0]),t.replace(rt,s),o(t.length),(v=g[g.length-1])&&a(""+v!==v&&+v[10]===v[10]&&v[0]),n){for(d=L(g,t,n),u=[],l=g.length;l--;)u.unshift(g[l][9]);U(d,u)}else d=L(g,e);return d}function U(t,e){var n,r,i=0,o=e.length;for(t.deps=[],t.paths=[];i<o;i++){t.paths.push(r=e[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(t.deps=t.deps.concat(r[n]))}}function K(t,e,n){return[t.slice(0,-1),e.slice(0,-1),n.slice(0,-1)]}function J(t,e){return"\n\tparams:{args:["+t[0]+"],\n\tprops:{"+t[1]+"}"+(t[2]?",\n\tctx:{"+t[2]+"}":"")+"},\n\targs:["+e[0]+"],\n\tprops:{"+e[1]+"}"+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function B(t,n,r,i){function o(r,o,d,T,A,P,F,N,R,M,$,V,E,O,I,S,q,U,K,J,B){function L(t,e,r,o,l,d,c,p){if(z="."===r,r&&(A=A.slice(e.length),/^\.?constructor$/.test(p||A)&&D(t),z||(t=(M?(i?"":"(ltOb.lt=ltOb.lt||")+"(ob=":"")+(o?'view.ctxPrm("'+o+'")':l?"view":"data")+(M?")===undefined"+(i?"":")")+'?"":view._getOb(ob,"':"")+(p?(d?"."+d:o?"":l?"":"."+r)+(c||""):(p=o?"":l?d||"":r,"")),t+=p?"."+p:"",t=e+("view.data"===t.slice(0,9)?t.slice(5):t)+(M?(i?'"':'",ltOb')+($?",1)":")"):"")),u)){if(H="_linkTo"===a?s=n._jsvto=n._jsvto||[]:f.bd,W=z&&H[H.length-1]){if(W._cpfn){for(;W.sb;)W=W.sb;W.prm&&(W.bnd&&(A="^"+A.slice(1)),W.sb=A,W.bnd=W.bnd||"^"===A[0])}}else H.push(A);$&&!z&&(y[m]=Y,C[m]=k[m].length)}return t}T&&!N&&(A=T+A),P=P||"",E=E||"",d=d||o||E,A=A||R,M&&(M=!/\)|]/.test(B[J-1]))&&(A=A.slice(1).split(".").join("^")),$=$||U||"";var Q,H,W,Z,z,G,X,Y=J;if(!p&&!c){if(F&&D(t),q&&u){if(Q=y[m-1],B.length-1>Y-(Q||0)){if(Q=e.trim(B.slice(Q,Y+r.length)),H=s||g[m-1].bd,W=H[H.length-1],W&&W.prm){for(;W.sb&&W.sb.prm;)W=W.sb;Z=W.sb={path:W.sb,bnd:W.bnd}}else H.push(Z={path:H.pop()});W&&W.sb===Z&&(k[m]=k[m-1].slice(W._cpPthSt)+k[m],k[m-1]=k[m-1].slice(0,W._cpPthSt)),Z._cpPthSt=C[m-1],Z._cpKey=Q,k[m]+=B.slice(j,J),j=J,Z._cpfn=Wt[Q]=Wt[Q]||new Function("data,view,j","//"+Q+"\nvar v;\nreturn ((v="+k[m]+("]"===S?")]":S)+")!=null?v:null);"),k[m-1]+=w[h]&&vt.cache?'view.getCache("'+Q.replace(Pt,"\\$&")+'"':k[m],Z.prm=f.bd,Z.bnd=Z.bnd||Z.path&&Z.path.indexOf("^")>=0}k[m]=""}"["===$&&($="[j._sq("),"["===d&&(d="[j._sq(")}return X=p?(p=!O,p?r:E+'"'):c?(c=!I,c?r:E+'"'):(d?(b[++h]=!0,_[h]=0,u&&(y[m++]=Y++,f=g[m]={bd:[]},k[m]="",C[m]=1),d):"")+(K?h?"":(v=B.slice(v,Y),(a?(a=l=s=!1,"\b"):"\b,")+v+(v=Y+r.length,u&&n.push(f.bd=[]),"\b")):N?(m&&D(t),u&&n.pop(),a="_"+A,l=T,v=Y+r.length,u&&(u=f.bd=n[a]=[],u.skp=!T),A+":"):A?A.split("^").join(".").replace(ft.rPath,L)+($||P):P?P:S?"]"===S?")]":")":V?(w[h]||D(t),","):o?"":(p=O,c=I,'"')),p||c||S&&(w[h]=!1,h--),u&&(p||c||(S&&(b[h+1]&&(f=g[--m],b[h+1]=!1),x=_[h+1]),$&&(_[h+1]=k[m].length+(d?1:0),(A||S)&&(f=g[++m]={bd:[]},b[h+1]=!0))),k[m]=(k[m]||"")+B.slice(j,J),j=J+r.length,p||c||((G=d&&b[h+1])&&(k[m-1]+=d,C[m-1]++),"("===$&&z&&!Z&&(k[m]=k[m-1].slice(x)+k[m],k[m-1]=k[m-1].slice(0,x))),k[m]+=G?X.slice(1):X),p||c||!$||(h++,A&&"("===$&&(w[h]=!0)),p||c||!U||(u&&(k[m]+=$),X+=$),X}var a,s,l,d,c,p,u=n&&n[0],f={bd:u},g={0:f},v=0,h=0,m=0,_={},x=0,b={},w={},y={},C={0:0},k={0:""},j=0;return"@"===t[0]&&(t=t.replace(Dt,".")),d=(t+(r?" ":"")).replace(ft.rPrm,o),u&&(d=k[0]),!h&&d||D(t)}function L(t,e,n){var r,i,o,a,s,l,d,c,p,u,f,g,v,h,m,_,x,b,w,y,C,k,j,T,A,P,F,N,M,$,V,E,O,I=0,S=vt.useViews||e.useViews||e.tags||e.templates||e.helpers||e.converters,q="",K={},B=t.length;for(""+e===e?(b=n?'data-link="'+e.replace(Tt," ").slice(1,-1)+'"':e,e=0):(b=e.tmplName||"unnamed",e.allowCode&&(K.allowCode=!0),e.debug&&(K.debug=!0),f=e.bnds,x=e.tmpls),r=0;r<B;r++)if(i=t[r],""+i===i)q+='+"'+i+'"';else if(o=i[0],"*"===o)q+=";\n"+i[1]+"\nret=ret";else{if(a=i[1],C=!n&&i[2],s=J(i[3],v=i[4]),$=i[6],V=i[7],i[8]?(E="\nvar ob,ltOb={},ctxs=",O=";\nctxs.lt=ltOb.lt;\nreturn ctxs;"):(E="\nreturn ",O=""),k=i[10]&&i[10].replace(At,"$1"),(A="else"===o)?g&&g.push(i[9]):(N=i[5]||gt.debugMode!==!1&&"undefined",f&&(g=i[9])&&(g=[g],I=f.push(1))),S=S||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(P=":"===o)?a&&(o=a===Jt?">":a+o):(C&&(w=R(k,K),w.tmplName=b+"/"+o,w.useViews=w.useViews||S,L(C,w),S=w.useViews,x.push(w)),A||(y=o,S=S||o&&(!ut[o]||!ut[o].flow),T=q,q=""),j=t[r+1],j=j&&"else"===j[0]),M=N?";\ntry{\nret+=":"\n+",h="",m="",P&&(g||$||a&&a!==Jt||V)){if(F=new Function("data,view,j","// "+b+" "+ ++I+" "+o+E+"{"+s+"};"+O),F._er=N,F._tag=o,F._bd=!!g,F._lr=V,n)return F;U(F,g),_='c("'+a+'",view,',u=!0,h=_+I+",",m=")"}if(q+=P?(n?(N?"try{\n":"")+"return ":M)+(u?(u=void 0,S=p=!0,_+(F?(f[I-1]=F,I):"{"+s+"}")+")"):">"===o?(d=!0,"h("+v[0]+")"):(c=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(l=!0,"\n{view:view,content:false,tmpl:"+(C?x.length:"false")+","+s+"},"),y&&!j){if(q="["+q.slice(0,-1)+"]",_='t("'+y+'",view,this,',n||g){if(q=new Function("data,view,j"," // "+b+" "+I+" "+y+E+q+O),q._er=N,q._tag=y,g&&U(f[I-1]=q,g),q._lr=V,n)return q;h=_+I+",undefined,",m=")"}q=T+M+_+(g&&I||q)+")",g=0,y=0}N&&!j&&(S=!0,q+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+N+")"+m+";}"+(n?"":"\nret=ret"))}q="// "+b+(K.debug?"\ndebugger;":"")+"\nvar v"+(l?",t=j._tag":"")+(p?",c=j._cnvt":"")+(d?",h=j._html":"")+(n?(i[8]?", ob":"")+";\n":',ret=""')+q+(n?"\n":";\nreturn ret;");try{q=new Function("data,view,j",q)}catch(Q){D("Compiled template code:\n\n"+q+'\n: "'+(Q.message||Q)+'"')}return e&&(e.fn=q,e.useViews=!!S),q}function Q(t,e){return t&&t!==e?e?d(d({},e),t):t:e&&d({},e)}function H(t,n){var r,i,o=n.map,a=o&&o.propsArr;if(!a){if(a=[],typeof t===Bt||st(t))for(r in t)i=t[r],r===at||!t.hasOwnProperty(r)||n.props.noFunctions&&e.isFunction(i)||a.push({key:r,prop:i});o&&(o.propsArr=o.options&&a)}return W(a,n)}function W(t,n){var r,i,o,a=n.tag,s=n.props,l=n.params.props,d=s.filter,c=s.sort,p=c===!0,u=parseInt(s.step),f=s.reverse?-1:1;if(!lt(t))return t;if(p||c&&""+c===c?(r=t.map(function(t,e){return t=p?t:g(t,c),{i:e,v:""+t===t?t.toLowerCase():t}}),r.sort(function(t,e){return t.v>e.v?f:t.v<e.v?-f:0}),t=r.map(function(e){return t[e.i]})):(c||f<0)&&!a.dataMap&&(t=t.slice()),st(c)&&(t=t.sort(function(){return c.apply(n,arguments)})),f<0&&(!c||st(c))&&(t=t.reverse()),t.filter&&d&&(t=t.filter(d,n),n.tag.onFilter&&n.tag.onFilter(n)),l.sorted&&(r=c||f<0?t:t.slice(),a.sorted?e.observable(a.sorted).refresh(r):n.map.sorted=r),i=s.start,o=s.end,(l.start&&void 0===i||l.end&&void 0===o)&&(i=o=0),isNaN(i)&&isNaN(o)||(i=+i||0,o=void 0===o||o>t.length?t.length:+o,t=t.slice(i,o)),u>1){for(i=0,o=t.length,r=[];i<o;i+=u)r.push(t[i]);t=r}return l.paged&&a.paged&&$observable(a.paged).refresh(t),t}function Z(t,n,r){var i=this.jquery&&(this[0]||S("Unknown template")),o=i.getAttribute(Lt);return E.call(o&&e.data(i)[Qt]||dt(i),t,n,r)}function z(t){return Ut[t]||(Ut[t]="&#"+t.charCodeAt(0)+";")}function G(t,e){return Kt[e]||""}function X(t){return void 0!=t?$t.test(t)&&(""+t).replace(Ot,z)||t:""}function Y(t){return""+t===t?t.replace(It,z):t}function tt(t){return""+t===t?t.replace(St,G):t}var et=e===!1;e=e&&e.fn?e:t.jQuery;var nt,rt,it,ot,at,st,lt,dt,ct,pt,ut,ft,gt,vt,ht,mt,_t,xt,bt,wt,yt,Ct,kt="v1.0.11",jt="_ocp",Tt=/[ \t]*(\r\n|\n|\r)/g,At=/\\(['"\\])/g,Pt=/['"\\]/g,Ft=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Nt=/^if\s/,Rt=/<(\w+)[>\s]/,Mt=/[\x00`><"'&=]/g,$t=/[\x00`><\"'&=]/,Vt=/^on[A-Z]|^convert(Back)?$/,Et=/^\#\d+_`[\s\S]*\/\d+_`$/,Ot=Mt,It=/[&<>]/g,St=/&(amp|gt|lt);/g,Dt=/\[['"]?|['"]?\]/g,qt=0,Ut={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Kt={amp:"&",gt:">",lt:"<"},Jt="html",Bt="object",Lt="data-jsv-tmpl",Qt="jsvTmpl",Ht="For #index in nested block use #getIndex().",Wt={},Zt={},zt=t.jsrender,Gt=zt&&e&&!e.render,Xt={template:{compile:A},tag:{compile:j},viewModel:{compile:N},helper:{},converter:{}};if(ot={jsviews:kt,sub:{rPath:/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,rPrm:/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(?:(\()\s*)?\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,View:C,Err:l,tmplFn:q,parse:B,extend:d,extendCtx:Q,syntaxErr:D,onStore:{template:function(t,e){null===e?delete Zt[t]:t&&(Zt[t]=e)}},addSetting:$,settings:{allowCode:!1},advSet:a,_thp:i,_gm:r,_tg:function(){},_cnvt:m,_tag:y,_er:S,_err:I,_cp:o,_sq:function(t){return"constructor"===t&&D(""),t}},settings:{delimiters:c,advanced:function(t){return t?(d(vt,t),ft.advSet(),ht):vt}},map:V},(l.prototype=new Error).constructor=l,u.depends=function(){return[this.get("item"),"index"]},f.depends="index",C.prototype={get:p,getIndex:f,ctxPrm:v,getRsc:w,_getTmpl:h,_getOb:g,getCache:function(t){return gt._cchCt>this.cache._ct&&(this.cache={_ct:gt._cchCt}),void 0!==this.cache[t]?this.cache[t]:this.cache[t]=Wt[t](this.data,this,ft)},_is:"view"},ft=ot.sub,ht=ot.settings,!(zt||e&&e.render)){for(nt in Xt)M(nt,Xt[nt]);if(ct=ot.converters,pt=ot.helpers,ut=ot.tags,ft._tg.prototype={baseApply:T,cvtArgs:_,bndArgs:b,ctxPrm:v},it=ft.topView=new C,e){if(e.fn.render=Z,at=e.expando,e.observable){if(kt!==(kt=e.views.jsviews))throw"jquery.observable.js requires jsrender.js "+kt;d(ft,e.views.sub),ot.map=e.views.map}}else e={},et&&(t.jsrender=e),e.renderFile=e.__express=e.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},e.isFunction=function(t){return"function"==typeof t},e.isArray=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},ft._jq=function(t){t!==e&&(d(t,e),e=t,e.fn.render=Z,delete e.jsrender,at=e.expando)},e.jsrender=kt;gt=ft.settings,gt.allowCode=!1,st=e.isFunction,e.render=Zt,e.views=ot,e.templates=dt=ot.templates;for(yt in gt)$(yt);(ht.debugMode=function(t){return void 0===t?gt.debugMode:(gt._clFns&&gt._clFns(),gt.debugMode=t,gt.onError=t+""===t?function(){return t}:st(t)?t:void 0,ht)})(!1),vt=gt.advanced={cache:!0,useViews:!1,_jsv:!1},ut({"if":{render:function(t){var e=this,n=e.tagCtx,r=e.rendering.done||!t&&(n.args.length||!n.index)?"":(e.rendering.done=!0,void(e.selected=n.index));return r},contentCtx:!0,flow:!0},"for":{sortDataMap:V(W),init:function(t,e){this.setDataMap(this.tagCtxs)},render:function(t){var e,n,r,i,o,a=this,s=a.tagCtx,l=s.argDefault===!1,d=s.props,c=l||s.args.length,p="",u=0;if(!a.rendering.done){if(e=c?t:s.view.data,l)for(l=d.reverse?"unshift":"push",i=+d.end,o=+d.step||1,e=[],r=+d.start||0;(i-r)*o>0;r+=o)e[l](r);void 0!==e&&(n=lt(e),p+=s.render(e,!c||d.noIteration),u+=n?e.length:1),(a.rendering.done=u)&&(a.selected=s.index)}return p},setDataMap:function(t){for(var e,n,r,i=this,o=t.length;o--;)e=t[o],n=e.props,r=e.params.props,e.argDefault=void 0===n.end||e.args.length>0,n.dataMap=e.argDefault!==!1&&lt(e.args[0])&&(r.sort||r.start||r.end||r.step||r.filter||r.reverse||n.sort||n.start||n.end||n.step||n.filter||n.reverse)&&i.sortDataMap},flow:!0},props:{baseTag:"for",dataMap:V(H),init:a,flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:pt.dbg=ct.dbg=s}),ct({html:X,attr:X,encode:Y,unencode:tt,url:function(t){return void 0!=t?encodeURI(""+t):null===t?t:""}})}return gt=ft.settings,lt=(e||zt).isArray,ht.delimiters("{{","}}","^"),Gt&&zt.views.sub._jq(e),e||zt},window);
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
/*!
*  filename: ej.core.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):n()})(function(){window.ej=window.Syncfusion=window.Syncfusion||{},function(n,t,i){"use strict";var o,u,f,e;t.version="14.4.0.15";t.consts={NamespaceJoin:"-"};t.TextAlign={Center:"center",Justify:"justify",Left:"left",Right:"right"};t.Orientation={Horizontal:"horizontal",Vertical:"vertical"};t.serverTimezoneOffset=0;t.persistStateVersion=null;Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(n,t){return n[t]!==i});String.format=function(){for(var t=arguments[0],n=0;n<arguments.length-1;n++)t=t.replace(new RegExp("\\{"+n+"\\}","gm"),arguments[n+1]);return t.replace(/\{[0-9]\}/g,"")};jQuery.uaMatch=function(n){n=n.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];return{browser:t[1]||"",version:t[2]||"0"}};t.defineClass=function(n,r,u,f){if(!n||!u)return i;for(var o=n.split("."),s=window,e=0;e<o.length-1;e++)t.isNullOrUndefined(s[o[e]])&&(s[o[e]]={}),s=s[o[e]];return(f||t.isNullOrUndefined(s[o[e]]))&&(r=typeof r=="function"?r:function(){},s[o[e]]=r,s[o[e]].prototype=u),s[o[e]]};t.util={getNameSpace:function(n){var i=n.toLowerCase().split(".");return i[0]==="ej"&&(i[0]="e"),i.join(t.consts.NamespaceJoin)},getObject:function(n,r){var u,e,f;if(!r)return i;for(u=r,e=n.split("."),f=0;f<e.length;f++){if(t.util.isNullOrUndefined(u))break;u=u[e[f]]}return u},createObject:function(n,r,u){for(var s=n.split("."),h=u||window,f=h,o,c=s.length,e=0;e<c;e++)o=s[e],e+1==c?f[o]=r===i?{}:r:t.isNullOrUndefined(f[o])&&(f[o]={}),f=f[o];return h},isNullOrUndefined:function(n){return n===i||n===null},print:function(i,r){var f=t.buildTag("div"),o=i.clone(),r,e,u;f.append(o);r||(r=window.open("","print","height=452,width=1024,tabbar=no"));r.document.write("<!DOCTYPE html>");e=n("head").find("link").add("style");t.browserInfo().name==="msie"?(u="",e.each(function(t,i){i.tagName=="LINK"&&n(i).attr("href",i.href);u+=i.outerHTML}),r.document.write("<html><head><\/head><body>"+u+f[0].innerHTML+"<\/body><\/html>")):(u="",r.document.write("<html><head>"),e.each(function(t,i){i.tagName=="LINK"&&n(i).attr("href",i.href);u+=i.outerHTML}),r.document.writeln(u+"<\/head><body>"),r.document.writeln(f[0].innerHTML+"<\/body><\/html>"));r.document.close();r.focus();setTimeout(function(){t.isNullOrUndefined(r.window)||(r.print(),setTimeout(function(){r.close()},1e3))},1e3)},ieClearRemover:function(t){var i=n(t).height();t.style.paddingTop=parseFloat(i/2)+"px";t.style.paddingBottom=parseFloat(i/2)+"px";t.style.height="1px";t.style.lineHeight="1px"},sendAjaxRequest:function(t){n.ajax({type:t.type,cache:t.cache,url:t.url,dataType:t.dataType,data:t.data,contentType:t.contentType,async:t.async,success:t.successHandler,error:t.errorHandler,beforeSend:t.beforeSendHandler,complete:t.completeHandler})},buildTag:function(t,r,u,f){var s=/^[a-z]*[0-9a-z]+/ig.exec(t)[0],e=/#([_a-z]+[-_0-9a-z]+)/ig.exec(t),o;return e=e?e[e.length-1]:i,o=/\.([a-z]+[-_0-9a-z ]+)/ig.exec(t),o=o?o[o.length-1]:i,n(document.createElement(s)).attr(e?{id:e}:{}).addClass(o||"").css(u||{}).attr(f||{}).html(r||"")},_preventDefaultException:function(n,t){if(n)for(var i in t)if(t[i].test(n[i]))return!0;return!1},getMaxZindex:function(){var t=1;return t=Math.max.apply(null,n.map(n("body *"),function(t){if(n(t).css("position")=="absolute"||n(t).css("position")=="fixed")return parseInt(n(t).css("z-index"))||1})),(t==i||t==null)&&(t=1),t},blockDefaultActions:function(n){n.cancelBubble=!0;n.returnValue=!1;n.preventDefault&&n.preventDefault();n.stopPropagation&&n.stopPropagation()},getDimension:function(t,i){var e,u=n(t).parents().andSelf().filter(":hidden"),r,f;return u&&(r={visibility:"hidden",display:"block"},f=[],u.each(function(){var t={};for(var n in r)t[n]=this.style[n],this.style[n]=r[n];f.push(t)}),e=/(outer)/g.test(i)?n(t)[i](!0):n(t)[i](),u.each(function(n){var i=f[n];for(var t in r)this.style[t]=i[t]})),e},transitionEndEvent:function(){return{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[t.userAgent()]},animationEndEvent:function(){return{"":"animationend",webkit:"webkitAnimationEnd",Moz:"animationend",O:"webkitAnimationEnd",ms:"animationend"}[t.userAgent()]},startEvent:function(){return t.isTouchDevice()||n.support.hasPointer?"touchstart":"mousedown"},endEvent:function(){return t.isTouchDevice()||n.support.hasPointer?"touchend":"mouseup"},moveEvent:function(){return t.isTouchDevice()||n.support.hasPointer?n.support.hasPointer&&!t.isMobile()?"ejtouchmove":"touchmove":"mousemove"},cancelEvent:function(){return t.isTouchDevice()||n.support.hasPointer?"touchcancel":"mousecancel"},tapEvent:function(){return t.isTouchDevice()||n.support.hasPointer?"tap":"click"},tapHoldEvent:function(){return t.isTouchDevice()||n.support.hasPointer?"taphold":"click"},isDevice:function(){return t.getBooleanVal(n("head"),"data-ej-forceset",!1)?t.getBooleanVal(n("head"),"data-ej-device",this._device()):this._device()},isPortrait:function(){var n=document.documentElement;return n&&n.clientWidth/n.clientHeight<1.1},isLowerResolution:function(){return window.innerWidth<=640&&t.isPortrait()&&t.isDevice()||window.innerWidth<=800&&!t.isDevice()||window.innerWidth<=800&&!t.isPortrait()&&t.isWindows()&&t.isDevice()||t.isMobile()},isIOSWebView:function(){return/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)},isAndroidWebView:function(){return!(typeof Android=="undefined")},isWindowsWebView:function(){return location.href.indexOf("x-wmapp")!=-1},_device:function(){return/Android|BlackBerry|iPhone|iPad|iPod|IEMobile|kindle|windows\sce|palm|smartphone|iemobile|mobile|pad|xoom|sch-i800|playbook/i.test(navigator.userAgent.toLowerCase())},isMobile:function(){return/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase())&&/mobile/i.test(navigator.userAgent.toLowerCase())||t.getBooleanVal(n("head"),"data-ej-mobile",!1)===!0},isTablet:function(){return/ipad|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase())||t.getBooleanVal(n("head"),"data-ej-tablet",!1)===!0||!t.isMobile()&&t.isDevice()},isTouchDevice:function(){return("ontouchstart"in window||window.navigator.msPointerEnabled&&t.isMobile())&&this.isDevice()},getClearString:function(t){return n.trim(t.replace(/\s+/g," ").replace(/(\r\n|\n|\r)/gm,"").replace(new RegExp(">[\n\t ]+<","g"),"><"))},getBooleanVal:function(t,i,r){var u=n(t).attr(i);return u!=null?u.toLowerCase()=="true":r},_getSkewClass:function(n,t,i){var h=n.width(),c=n.height(),f=n.offset().left,e=n.offset().left+h,o=n.offset().top,s=n.offset().top+c,r=h*.3,u=c*.3;return t<f+r&&i<o+u?"e-m-skew-topleft":t>e-r&&i<o+u?"e-m-skew-topright":t>e-r&&i>s-u?"e-m-skew-bottomright":t<f+r&&i>s-u?"e-m-skew-bottomleft":t>f+r&&i<o+u&&t<e-r?"e-m-skew-top":t<f+r?"e-m-skew-left":t>e-r?"e-m-skew-right":i>s-u?"e-m-skew-bottom":"e-m-skew-center"},_removeSkewClass:function(t){n(t).removeClass("e-m-skew-top e-m-skew-bottom e-m-skew-left e-m-skew-right e-m-skew-topleft e-m-skew-topright e-m-skew-bottomleft e-m-skew-bottomright e-m-skew-center e-skew-top e-skew-bottom e-skew-left e-skew-right e-skew-topleft e-skew-topright e-skew-bottomleft e-skew-bottomright e-skew-center")},_getObjectKeys:function(n){var t,i=[];if(n=Object.prototype.toString.call(n)===Object.prototype.toString()?n:{},!Object.keys){for(t in n)n.hasOwnProperty(t)&&i.push(t);return i}if(Object.keys)return Object.keys(n)},_touchStartPoints:function(n,t){if(n){var i=n.touches?n.touches[0]:n;t._distX=0;t._distY=0;t._moved=!1;t._pointX=i.pageX;t._pointY=i.pageY}},_isTouchMoved:function(n,t){if(n){var i=n.touches?n.touches[0]:n,f=i.pageX-t._pointX,e=i.pageY-t._pointY,o=Date.now(),r,u;return t._pointX=i.pageX,t._pointY=i.pageY,t._distX+=f,t._distY+=e,r=Math.abs(t._distX),u=Math.abs(t._distY),!(r<5&&u<5)}},listenEvents:function(n,i,r,u,f,e){for(var o=0;o<n.length;o++)t.listenTouchEvent(n[o],i[o],r[o],u,f,e)},listenTouchEvent:function(i,r,u,f,e,o){for(var s,h=f?"removeEventListener":"addEventListener",a=f?"off":"on",l=n(i),c=0;c<l.length;c++){s=l[c];switch(r){case"touchstart":t._bindEvent(s,h,r,u,"mousedown","MSPointerDown","pointerdown",o);break;case"touchmove":t._bindEvent(s,h,r,u,"mousemove","MSPointerMove","pointermove",o);break;case"touchend":t._bindEvent(s,h,r,u,"mouseup","MSPointerUp","pointerup",o);break;case"touchcancel":t._bindEvent(s,h,r,u,"mousecancel","MSPointerCancel","pointercancel",o);break;case"tap":case"taphold":case"ejtouchmove":case"click":n(s)[a](r,u);break;default:t.browserInfo().name=="msie"&&t.browserInfo().version<9?e._on(n(s),r,u):s[h](r,u,!0)}}},_bindEvent:function(t,i,r,u,f,e,o){n.support.hasPointer?t[i](window.navigator.pointerEnabled?o:e,u,!0):t[i](r,u,!0)},_browser:function(){return/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":/trident/i.test(navigator.userAgent)?"ms":"opera"in window?"O":""},styles:document.createElement("div").style,userAgent:function(){for(var i="webkitT,t,MozT,msT,OT".split(","),r,n=0,u=i.length;n<u;n++)if(r=i[n]+"ransform",r in t.styles)return i[n].substr(0,i[n].length-1);return!1},addPrefix:function(n){return t.userAgent()===""?n:(n=n.charAt(0).toUpperCase()+n.substr(1),t.userAgent()+n)},destroyWidgets:function(t){var i=n(t).find("[data-role *= ejm]");i.each(function(t,i){var r=n(i),u=r.data("ejWidgets");u&&r[u]("destroy")})},getAttrVal:function(t,i,r){var u=n(t).attr(i);return u!=null?u:r},getOffset:function(t){var i={},u=t.offset()||{left:0,top:0},r;return n.extend(!0,i,u),n("body").css("position")!="static"&&(r=n("body").offset(),i.left-=r.left,i.top-=r.top),i},getZindexPartial:function(i,r){var e,f,u;if(!t.isNullOrUndefined(i)&&i.length>0)return e=i.parents(),f=n("body").children(),!t.isNullOrUndefined(i)&&i.length>0&&f.splice(f.index(r),1),n(f).each(function(n,t){e.push(t)}),u=Math.max.apply(u,n.map(e,function(t){if(n(t).css("position")!="static")return parseInt(n(t).css("z-index"))||1})),!u||u<1e4?u=1e4:u+=1,u},isValidAttr:function(t,i){var t=n(t)[0],r;return typeof t[i]!="undefined"?!0:(r=!1,n.each(t,function(n){if(n.toLowerCase()==i.toLowerCase())return r=!0,!1}),r)}};n.extend(t,t.util);t.widgetBase={droppables:{"default":[]},resizables:{"default":[]},_renderEjTemplate:function(i,r,u,f){var e=null;return((typeof i=="object"||i.startsWith("#")||i.startsWith("."))&&(e=n(i).attr("type")),e&&(e=e.toLowerCase(),t.template[e]))?t.template[e](this,i,r,u,f):t.template.render(this,i,r,u,f)},destroy:function(){var u,r,f,i;if(!this._trigger("destroy")){this.model.enablePersistence&&(this.persistState(),n(window).off("unload",this._persistHandler));try{this._destroy()}catch(e){}for(u=this.element.data("ejWidgets")||[],i=0;i<u.length;i++)u[i]==this.pluginName&&u.splice(i,1);for(u.length||this.element.removeData("ejWidgets");this._events;){if(r=this._events.pop(),f=[],!r)break;for(i=0;i<r[1].length;i++)n.isPlainObject(r[1][i])||f.push(r[1][i]);n.fn.off.apply(r[0],f)}this._events=null;this.element.removeClass(t.util.getNameSpace(this.sfType)).removeClass("e-js").removeData(this.pluginName);this.element=null;this.model=null}},_on:function(i){this._events||(this._events=[]);for(var r=[].splice.call(arguments,1,arguments.length-1),u={},f=r.length;u&&typeof u!="function";)u=r[--f];return r[f]=t.proxy(r[f],this),this._events.push([i,r,u,r[f]]),n.fn.on.apply(i,r),this},_off:function(t,i,r,u){var e=this._events,s,h,o,f,c;if(!e||!e.length)return this;for(typeof r=="function"&&(s=u,u=r,r=s),h=i.match(/\S+/g)||[""],o=0;o<e.length;o++)if(f=e[o],c=f[0].length&&(!u||f[2]===u)&&(f[1][0]===i||h[0])&&(!r||f[1][1]===r)&&n.inArray(t[0],f[0])>-1,c){n.fn.off.apply(t,u?[i,r,f[3]]:[i,r]);e.splice(o,1);break}return this},_trigger:function(i,r){var f=null,e,u,s={},o,h;return(n.extend(s,r),i in this.model&&(f=this.model[i]),f&&(typeof f=="string"&&(f=t.util.getObject(f,window)),n.isFunction(f)&&(u=t.event(i,this.model,r),e=f.call(this,u),o=this.model._applyScope,o&&o.call(),r&&n.extend(r,u),u.cancel||!t.isNullOrUndefined(e))))?e===!1||u.cancel:(h=Boolean(r),r=r||{},r.originalEventType=i,r.type=this.pluginName+i,u=n.Event(r.type,t.event(r.type,this.model,r)),this.element.trigger(u),h&&n.extend(r,u),t.isOnWebForms&&u.cancel==!1&&this.model.serverEvents&&this.model.serverEvents.length&&t.raiseWebFormsServerEvents(i,r,s),u.cancel)},setModel:function(t,i){var r,f,e,u;if(!this._trigger("modelChange",{changes:t})){for(r in t){if(!i){if(this.model[r]===t[r]){delete t[r];continue}if(n.isPlainObject(t[r])&&(o(this.model[r],t[r]),n.isEmptyObject(t[r]))){delete t[r];continue}}if(this.dataTypes&&(f=this._isValidModelValue(r,this.dataTypes,t),f!==!0))throw"setModel - Invalid input for property :"+r+" - "+f;this.model.notifyOnEachPropertyChanges&&this.model[r]!==t[r]&&(e={oldValue:this.model[r],newValue:t[r]},t[r]=this._trigger(r+"Change",e)?this.model[r]:e.newValue)}n.isEmptyObject(t)||(this._setFirst?(u=t.dataSource,u&&delete t.dataSource,n.extend(!0,this.model,t),u&&(this.model.dataSource=u instanceof Array?u.slice():u,t.dataSource=this.model.dataSource),this._setModel&&this._setModel(t)):this._setModel&&this._setModel(t)===!1||n.extend(!0,this.model,t),"enablePersistence"in t&&this._setState(t.enablePersistence))}},option:function(r,u,f){if(!r)return this.model;if(n.isPlainObject(r))return this.setModel(r,f);if(typeof r=="string"){r=r.replace(/^model\./,"");var e=t.getObject(r,this.model);if(u===i&&!f)return e;if(r==="enablePersistence")return this._setState(u);if(f&&u===t.extensions.modelGUID)return this._setModel(t.createObject(r,t.getObject(r,this.model),{}));if(f||t.getObject(r,this.model)!==u)return this.setModel(t.createObject(r,u,{}),f)}return i},_isValidModelValue:function(n,t,i){var r=t[n],u=i[n],f,e,o;if(!r)return!0;if(typeof r=="string"){if(r=="enum"&&(i[n]=u?u.toString().toLowerCase():u,r="string"),r==="array"){if(Object.prototype.toString.call(u)==="[object Array]")return!0}else if(r==="data"||r==="parent"||typeof u===r)return!0;return"Expected type - "+r}if(u instanceof Array){for(e=0;e<u.length;e++)if(f=this._isValidModelValue(n,t,u[e]),f!==!0)return" ["+e+"] - "+f;return!0}for(o in u)if(f=this._isValidModelValue(o,r,u),f!==!0)return o+" : "+f;return!0},_returnFn:function(n,t){t.indexOf(".")!=-1?this._returnFn(n[t.split(".")[0]],t.split(".").slice(1).join(".")):n[t]=n[t].call(n.propName)},stringify:function(n){for(var u,r=this.observables,i=0;i<r.length;i++)u=t.getObject(r[i],n),t.isNullOrUndefined(u)||typeof u!="function"||this._returnFn(n,r[i]);return JSON.stringify(n)},_setState:function(i){if(i===!0){this._persistHandler=t.proxy(this.persistState,this);n(window).on("unload",this._persistHandler)}else this.deleteState(),n(window).off("unload",this._persistHandler)},_removeProp:function(n,i){t.isNullOrUndefined(n)||(i.indexOf(".")!=-1?this._removeProp(n[i.split(".")[0]],i.split(".").slice(1).join(".")):delete n[i])},persistState:function(){var n,i;if(this._ignoreOnPersist){for(n=r({},this.model),i=0;i<this._ignoreOnPersist.length;i++)this._removeProp(n,this._ignoreOnPersist[i]);n.ignoreOnPersist=this._ignoreOnPersist}else if(this._addToPersist){for(n={},i=0;i<this._addToPersist.length;i++)t.createObject(this._addToPersist[i],t.getObject(this._addToPersist[i],this.model),n);n.addToPersist=this._addToPersist}else n=r({},this.model);this._persistState&&(n.customPersists={},this._persistState(n.customPersists));window.localStorage?(t.isNullOrUndefined(t.persistStateVersion)||window.localStorage.getItem("persistKey")!=null||window.localStorage.setItem("persistKey",t.persistStateVersion),window.localStorage.setItem("$ej$"+this.pluginName+this._id,JSON.stringify(n))):document.cookie&&(t.isNullOrUndefined(t.persistStateVersion)||t.cookie.get("persistKey")!=null||t.cookie.set("persistKey",t.persistStateVersion),t.cookie.set("$ej$"+this.pluginName+this._id,n))},deleteState:function(){window.localStorage?window.localStorage.removeItem("$ej$"+this.pluginName+this._id):document.cookie&&t.cookie.set("$ej$"+this.pluginName+this._id,model,new Date)},restoreState:function(i){var f=null,r,u;if(window.localStorage?f=window.localStorage.getItem("$ej$"+this.pluginName+this._id):document.cookie&&(f=t.cookie.get("$ej$"+this.pluginName+this._id)),f&&(r=JSON.parse(f),this._restoreState&&(this._restoreState(r.customPersists),delete r.customPersists),t.isNullOrUndefined(r)===!1&&(t.isNullOrUndefined(r.ignoreOnPersist)?t.isNullOrUndefined(r.addToPersist)||(this._addToPersist=r.addToPersist,delete r.addToPersist):(this._ignoreOnPersist=r.ignoreOnPersist,delete r.ignoreOnPersist))),t.isNullOrUndefined(r)||t.isNullOrUndefined(this._ignoreOnPersist))this.model=n.extend(!0,this.model,r);else{for(u in this._ignoreOnPersist)this._ignoreOnPersist[u].indexOf(".")!==-1?t.createObject(this._ignoreOnPersist[u],t.getObject(this._ignoreOnPersist[u],this.model),r):r[this._ignoreOnPersist[u]]=this.model[this._ignoreOnPersist[u]];this.model=r}!i&&f&&this._setModel&&this._setModel(this.model)},ignoreOnPersist:function(n){var r=[],t,u;if(typeof n=="object"?r=n:typeof n=="string"&&r.push(n),this._addToPersist===i)for(this._ignoreOnPersist=this._ignoreOnPersist||[],t=0;t<r.length;t++)this._ignoreOnPersist.push(r[t]);else for(t=0;t<r.length;t++)u=this._addToPersist.indexOf(r[t]),this._addToPersist.splice(u,1)},addToPersist:function(t){var u=[],f,r;if(typeof t=="object"?u=t:typeof t=="string"&&u.push(t),this._addToPersist===i)for(this._ignoreOnPersist=this._ignoreOnPersist||[],r=0;r<u.length;r++)f=this._ignoreOnPersist.indexOf(u[r]),this._ignoreOnPersist.splice(f,1);else for(r=0;r<u.length;r++)n.inArray(u[r],this._addToPersist)===-1&&this._addToPersist.push(u[r])},formatting:function(i,r,u){var f,l,h,c,a,v,s,e,y;if(i=i.replace(/%280/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">"),u=t.preferredCulture(u)?u:"en-US",f=i,l=i.split("{0:"),a=i.split("}"),h=l[0],c=a[1],typeof r=="string"&&n.isNumeric(r)&&(r=Number(r)),i.indexOf("{0:")!=-1)return v=new RegExp("\\{0(:([^\\}]+))?\\}","gm"),s=v.exec(i),s!=null&&r!=null?h!=null&&c!=null?h+t.format(r,s[2],u)+c:t.format(r,s[2],u):r!=null?r:"";if(f.startsWith("{")&&!f.startsWith("{0:")){var o=f.split(""),r=(r||"")+"",p=r.split(""),w=/[0aA\*CN<>\?]/gm;for(e=0,y=0;e<o.length;e++)o[e]=w.test(o[e])?"{"+y+++"}":o[e];return String.format.apply(String,[o.join("")].concat(p)).replace("{","").replace("}","")}return this.data!=null&&this.data.Value==null?(n.each(this.data,function(n,t){f=f.replace(new RegExp("\\{"+n+"\\}","gm"),t)}),f):this.data.Value}};t.WidgetBase=function(){};o=function(t,i){for(var r in t)t[r]===i[r]&&delete i[r],n.isPlainObject(i[r])&&n.isPlainObject(t[r])&&o(t[r],i[r])};t.widget=function(f,o,h){var a,l,v;if(typeof f=="object"){h=o;for(a in f)l=f[a],l instanceof Array&&(h._rootCSS=l[1],l=l[0]),t.widget(a,l,h),f[a]instanceof Array&&(h._rootCSS="");return}v=h._rootCSS||t.getNameSpace(o);h=t.defineClass(o,function(i,e){var y,p,w,b,c,g,k,d,nt,l,a;if(this.sfType=o,this.pluginName=f,this.instance=s,t.isNullOrUndefined(this._setFirst)&&(this._setFirst=!0),this["ob.values"]={},n.extend(this,t.widgetBase),this.dataTypes)for(y in e)if(p=this._isValidModelValue(y,this.dataTypes,e),p!==!0)throw"setModel - Invalid input for property :"+y+" - "+p;for(w=i.data("ejWidgets")||[],w.push(f),i.data("ejWidgets",w),c=0;t.widget.observables&&this.observables&&c<this.observables.length;c++)b=t.getObject(this.observables[c],e),b&&t.createObject(this.observables[c],t.widget.observables.register(b,this.observables[c],this,i),e);if(this.element=i.jquery?i:n(i),this.model=r(!0,{},h.prototype.defaults,e),this.model.keyConfigs=r(this.keyConfigs),this.element.addClass(v+" e-js").data(f,this),this._id=i[0].id,this.element.attr("tabIndex")||this.element.attr("tabIndex",""),this.model.enablePersistence){if(window.localStorage&&!t.isNullOrUndefined(t.persistStateVersion)&&window.localStorage.getItem("persistKey")!=t.persistStateVersion)for(c in window.localStorage)c.indexOf("$ej$")!=-1&&window.localStorage.removeItem(c);else if(document.cookie&&!t.isNullOrUndefined(t.persistStateVersion)&&t.cookie.get("persistKey")!=t.persistStateVersion){g=document.cookie.split(/; */);for(k in g)k.indexOf("$ej$")!=-1&&t.cookie.set(k.split("=")[0],model,new Date)}this._persistHandler=t.proxy(this.persistState,this);n(window).on("unload",this._persistHandler);this.restoreState(!0)}if(this._init(e),typeof this.model.keyConfigs=="object"&&!(this.model.keyConfigs instanceof Array)){d=!1;this.model.keyConfigs.focus&&this.element.attr("accesskey",this.model.keyConfigs.focus);for(nt in this.model.keyConfigs)if(nt!=="focus"){d=!0;break}d&&this._keyPressed&&(l=i,a="keydown",this.keySettings&&(l=this.keySettings.getElement?this.keySettings.getElement()||l:l,a=this.keySettings.event||a),this._on(l,a,function(n){if(this.model.keyConfigs){var t=u.getActionFromCode(this.model.keyConfigs,n.which,n.ctrlKey,n.shiftKey,n.altKey),i={code:n.which,ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey};t&&this._keyPressed(t,n.target,i,n)===!1&&n.preventDefault()}}))}this._trigger("create")},h);n.fn[f]=function(r){for(var w,p=r,u,y=0;y<this.length;y++){var s=n(this[y]),l=s.data(f),b=l&&s.hasClass(v),a=null;if(this.length>0&&n.isPlainObject(p)&&(r=t.copyObject({},p)),!b){h.prototype._requiresID!==!0||n(this[y]).attr("id")||s.attr("id",c("ejControl_"));r&&typeof r!="object"?e(f+": methods/properties can be accessed only after plugin creation"):(h.prototype.defaults&&!t.isNullOrUndefined(t.setCulture)&&"locale"in h.prototype.defaults&&f!="ejChart"&&(!r||"locale"in r?t.isNullOrUndefined(r)&&(r={},r.locale=t.setCulture().name):r.locale=t.setCulture().name),new h(s,r));continue}if(r)if(u=[].slice.call(arguments,1),this.length>0&&u[0]&&p==="option"&&n.isPlainObject(u[0])&&(u[0]=t.copyObject({},u[0])),n.isPlainObject(r))l.setModel(r);else if((r.indexOf("_")===0||t.isNullOrUndefined(a=t.getObject(r,l)))&&r.indexOf("model.")!==0)e(o+": function/property - "+r+" does not exist");else{if(!a||!n.isFunction(a)){if(arguments.length==1)return a;l.option(r,arguments[1]);continue}if(w=a.apply(l,u),w!==i)return w}}return f.indexOf("ejm")!=-1&&t.widget.registerInstance(s,f,o,h.prototype),this};t.widget.register(f,o,h.prototype)};n.extend(t.widget,function(){var n={},i=[],r=function(i,r,u){t.isNullOrUndefined(n[i])||e("ej.widget : The widget named "+i+" is trying to register twice.");n[i]={name:i,className:r,proto:u};t.widget.extensions&&t.widget.extensions.registerWidget(i)},u=function(n,t,r,u){i.push({element:n,pluginName:t,className:r,proto:u})};return{register:r,registerInstance:u,registeredWidgets:n,registeredInstances:i}}());t.widget.destroyAll=function(n){var u,r,t,i;if(n&&n.length)for(u=0;u<n.length;u++)if(r=n.eq(u).data(),t=r.ejWidgets,t&&t.length)for(i=0;i<t.length;i++)r[t[i]]&&r[t[i]].destroy&&r[t[i]].destroy()};t.cookie={get:function(n){var t=RegExp(n+"=([^;]+)").exec(document.cookie);return t&&t.length>1?t[1]:i},set:function(n,t,i){typeof t=="object"&&(t=JSON.stringify(t));t=escape(t)+(i==null?"":"; expires="+i.toUTCString());document.cookie=n+"="+t}};u={getActionFromCode:function(n,t,i,r,f){var s,o,e;i=i||!1;r=r||!1;f=f||!1;for(s in n)if(s!=="focus")for(o=u.getKeyObject(n[s]),e=0;e<o.length;e++)if(t===o[e].code&&i==o[e].isCtrl&&r==o[e].isShift&&f==o[e].isAlt)return s;return null},getKeyObject:function(t){for(var f,o,e,s={isCtrl:!1,isShift:!1,isAlt:!1},c=n.extend(!0,{},s),r=t.split(","),h=[],i=0;i<r.length;i++){if(f=null,r[i].indexOf("+")!=-1)for(o=r[i].split("+"),e=0;e<o.length;e++)f=u.getResult(n.trim(o[e]),s);else f=u.getResult(n.trim(r[i]),n.extend(!0,{},c));h.push(f)}return h},getResult:function(n,t){return n==="ctrl"?t.isCtrl=!0:n==="shift"?t.isShift=!0:n==="alt"?t.isAlt=!0:t.code=parseInt(n,10),t}};t.getScrollableParents=function(t){return n(t).parentsUntil("html").filter(function(){return n(this).css("overflow")!="visible"}).add(n(window))};t.browserInfo=function(){var i={},r=[],e={opera:/(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,edge:/(edge)(?:.*version|)[ \/]([\w.]+)/i,webkit:/(chrome)[ \/]([\w.]+)/i,safari:/(webkit)[ \/]([\w.]+)/i,msie:/(msie|trident) ([\w.]+)/i,mozilla:/(mozilla)(?:.*? rv:([\w.]+)|)/i},o,s,f,u;for(o in e)if(e.hasOwnProperty(o)&&(r=navigator.userAgent.match(e[o]),r)){if(i.name=r[1].toLowerCase()=="opr"?"opera":r[1].toLowerCase(),i.version=r[2],i.culture={},i.culture.name=i.culture.language=navigator.language||navigator.userLanguage,typeof t.globalize!="undefined"){for(s=t.preferredCulture().name,f=navigator.language||navigator.userLanguage?t.preferredCulture(navigator.language||navigator.userLanguage):t.preferredCulture("en-US"),u=0;navigator.languages&&u<navigator.languages.length;u++)if(f=t.preferredCulture(navigator.languages[u]),f.language==navigator.languages[u])break;t.preferredCulture(s);n.extend(!0,i.culture,f)}!navigator.userAgent.match(/Trident\/7\./)||(i.name="msie");break}return i.isMSPointerEnabled=i.name=="msie"&&i.version>9&&window.navigator.msPointerEnabled,i.pointerEnabled=window.navigator.pointerEnabled,i};t.eventType={mouseDown:"mousedown touchstart",mouseMove:"mousemove touchmove",mouseUp:"mouseup touchend",mouseLeave:"mouseleave touchcancel",click:"click touchend"};t.event=function(t,i,r){return n.extend(r||{},{type:t,model:i,cancel:!1})};t.proxy=function(n,t,i){return!n||typeof n!="function"?null:"on"in n&&t?i?n.on(t,i):n.on(t):function(){var r=i?[i]:[];return r.push.apply(r,arguments),n.apply(t||this,r)}};t.hasStyle=function(n){var r=document.documentElement.style,i,t;if(n in r)return!0;for(i=["ms","Moz","Webkit","O","Khtml"],n=n[0].toUpperCase()+n.slice(1),t=0;t<i.length;t++)if(i[t]+n in r)return!0;return!1};Array.prototype.indexOf=Array.prototype.indexOf||function(n){var i=this.length,t;if(i===0)return-1;for(t=0;t<i;t++)if(t in this&&this[t]===n)return t;return-1};String.prototype.startsWith=String.prototype.startsWith||function(n){return this.slice(0,n.length)===n};var r=t.copyObject=function(n,u){var h=2,c,f,s,o,e,l;for(typeof n!="boolean"&&(h=1),s=[].slice.call(arguments,h),h===1&&(u=n,n=i),o=0;o<s.length;o++)for(e in s[o])if(c=u[e],f=s[o][e],f!==i&&c!==f&&s[o]!==f&&u!==f)if(f instanceof Array)if(o===0&&n)for(u[e]=[],l=0;l<f.length;l++)r(!0,u[e],f);else u[e]=f.slice();else t.isPlainObject(f)?(u[e]=c||{},n?r(n,u[e],f):r(u[e],f)):u[e]=f;return u},s=function(){return this},h=0,c=function(n){return n+h++};t.template={};t.template.render=t.template["text/x-jsrender"]=function(t,i,r,u,f){i.slice(0,1)!=="#"&&(i=["<div>",i,"<\/div>"].join(""));var e={prop:f,index:u};return n(i).render(r,e)};t.isPlainObject=function(n){if(!n||t.DataManager!==i&&n instanceof t.DataManager||typeof n!="object"||n.nodeType||jQuery.isWindow(n))return!1;try{if(n.constructor&&!n.constructor.prototype.hasOwnProperty("isPrototypeOf"))return!1}catch(f){return!1}var r,u=t.support.isOwnLast;for(r in n)if(u)break;return r===i||n.hasOwnProperty(r)};f=!1;t.util.valueFunction=function(n){return function(r,u){var e=t.getObject(n,this.model);if(f===!1&&(f=t.getObject("observables.getValue",t.widget)),r===i)return t.isNullOrUndefined(f)?typeof e=="function"?e.call(this):e:f(e,u);typeof e=="function"?(this["ob.values"][n]=r,e.call(this,r)):t.createObject(n,r,this.model)}};t.util.getVal=function(n){return typeof n=="function"?n():n};t.support={isOwnLast:function(){var n=function(){this.a=1},t;n.prototype.b=1;for(t in new n)return t==="b"}(),outerHTML:function(){return document.createElement("div").outerHTML!==i}()};e=t.throwError=function(n){try{throw new Error(n);}catch(t){throw t.message+"\n"+t.stack;}};t.getRandomValue=function(n,r){var u,f;return n===i||r===i?t.throwError("Min and Max values are required for generating a random number"):("crypto"in window&&"getRandomValues"in crypto?(f=new Uint16Array(1),window.crypto.getRandomValues(f),u=f[0]%(r-n)+n):u=Math.random()*(r-n)+n,u|0)};t.extensions={};t.extensions.modelGUID="{0B1051BA-1CCB-42C2-A3B5-635389B92A50}"}(window.jQuery,window.Syncfusion),function(){$.fn.addEleAttrs=function(n){var t=$(this);$.each(n,function(n,i){i&&i.specified&&t.attr(i.name,i.value)})};$.fn.removeEleAttrs=function(n){return this.each(function(){var t=$(this),i=$(this.attributes).clone();$.each(i,function(i,r){r&&r.specified&&n.test(r.name)&&t.removeAttr(r.name)})})};$.fn.attrNotStartsWith=function(n){var u=this,r=[],t;for(this.each(function(){t=$(this.attributes).clone()}),i=0;i<t.length;i++)if(t[i]&&t[i].specified&&n.test(t[i].name))continue;else r.push(t[i]);return r};$.fn.removeEleEmptyAttrs=function(){return this.each(function(){var n=$(this),t=$(this.attributes).clone();$.each(t,function(t,i){i&&i.specified&&i.value===""&&n.removeAttr(i.name)})})};$.extend($.support,{has3d:ej.addPrefix("perspective")in ej.styles,hasTouch:"ontouchstart"in window,hasPointer:navigator.msPointerEnabled,hasTransform:ej.userAgent()!==!1,pushstate:"pushState"in history&&"replaceState"in history,hasTransition:ej.addPrefix("transition")in ej.styles});$.extend($.expr[":"],{attrNotStartsWith:function(n,t,i){for(var u=n.attributes,r=0;r<u.length;r++)if(u[r].nodeName.indexOf(i[3])===0)return!1;return!0}});var n=$.fn.andSelf||$.fn.addBack;$.fn.andSelf=$.fn.addBack=function(){return n.apply(this,arguments)}}()});

/*!
*  filename: ej.draggable.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["./ej.core.min"],n):n()})(function(){(function(n,t){t.widget("ejDraggable","ej.Draggable",{element:null,model:null,validTags:["div","span","a"],defaults:{scope:"default",handle:null,dragArea:null,clone:!1,distance:1,dragOnTaphold:!1,cursorAt:{top:-1,left:-2},dragStart:null,drag:null,dragStop:null,create:null,destroy:null,helper:function(){return n('<div class="e-drag-helper" />').html("draggable").appendTo(document.body)}},_init:function(){this.handler=function(){};this.resizables={};helpers={};this._wireEvents();this._browser=t.browserInfo();this._isIE8=this._browser.name=="msie"&&this._browser.version=="8.0";this._isIE9=this._browser.name=="msie"&&this._browser.version=="9.0";this._browser.name=="msie"&&this.element.addClass("e-pinch")},_setModel:function(n){for(var t in n)switch(t){case"dragArea":this.model.dragArea=n[t];break;case"dragOnTaphold":this.model.dragOnTaphold=n[t]}},_destroy:function(){n(document).off(t.eventType.mouseUp,this._destroyHandler).off(t.eventType.mouseUp,this._dragStopHandler).off(t.eventType.mouseMove,this._dragStartHandler).off(t.eventType.mouseMove,this._dragHandler).off("mouseleave",this._dragMouseOutHandler).off("selectstart",!1);t.widgetBase.droppables[this.scope]=null},_initialize:function(i){var u=i,r;i.preventDefault();i=this._getCoordinate(i);this.target=n(u.currentTarget);this._initPosition={x:i.pageX,y:i.pageY};n(document).on(t.eventType.mouseMove,this._dragStartHandler).on(t.eventType.mouseUp,this._destroyHandler);this.model.clone||(r=this.element.offset(),this._relXposition=i.pageX-r.left,this._relYposition=i.pageY-r.top);n(document.documentElement).trigger(t.eventType.mouseDown,u)},_setDragArea:function(){var o=n(this.model.dragArea)[0],s,h,u,r,f,e,i;if(o){if(r=["left","right","bottom","top"],t.isNullOrUndefined(o.getBoundingClientRect)){for(s=n(this.model.dragArea).outerWidth(),h=n(this.model.dragArea).outerHeight(),i=0;i<r.length;i++)this["border-"+r[i]+"-width"]=0,this["padding-"+r[i]]=0;f=e=0}else{for(u=o.getBoundingClientRect(),s=u.width?u.width:u.right-u.left,h=u.height?u.height:u.bottom-u.top,i=0;i<r.length;i++)this["border-"+r[i]+"-width"]=isNaN(parseFloat(n(n(this.model.dragArea)[0]).css("border-"+r[i]+"-width")))?0:parseFloat(n(n(this.model.dragArea)[0]).css("border-"+r[i]+"-width")),this["padding-"+r[i]]=isNaN(parseFloat(n(n(this.model.dragArea)[0]).css("padding-"+r[i])))?0:parseFloat(n(n(this.model.dragArea)[0]).css("padding-"+r[i]));f=n(this.model.dragArea).offset().top;e=n(this.model.dragArea).offset().left}this._left=t.isNullOrUndefined(n(this.model.dragArea).offset())?0+this["border-left-width"]+this["padding-left"]:e+this["border-left-width"]+this["padding-left"];this._top=t.isNullOrUndefined(n(this.model.dragArea).offset())?0+this["border-top-width"]+this["padding-top"]:f+this["border-top-width"]+this["padding-top"];this._right=e+s-[this["border-right-width"]+this["padding-right"]];this._bottom=f+h-[this["border-bottom-width"]+this["padding-bottom"]]}},_dragStart:function(i){var r=i,u,e,f,o,s;i=this._getCoordinate(i);this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0};this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.position=this._getMousePosition(r);var h=this._initPosition.x-i.pageX,c=this._initPosition.y-i.pageY,l=Math.sqrt(h*h+c*c);if(l>=this.model.distance){if(u=this.model.helper({sender:r,element:this.target}),!u||t.isNullOrUndefined(u))return;if(e=this.model.handle=this.helper=u,this.model.dragStart&&(f=null,r.type=="touchmove"?(o=r.originalEvent.changedTouches[0],f=document.elementFromPoint(o.clientX,o.clientY)):f=r.originalEvent.target||r.target,this._trigger("dragStart",{event:r,element:this.element,target:f})))return this._destroy(),!1;this.model.dragArea?this._setDragArea():(this._left=this._top=this._right=this._bottom=0,this["border-top-width"]=this["border-left-width"]=0);s=e.offsetParent().offset();n(document).off(t.eventType.mouseMove,this._dragStartHandler).off(t.eventType.mouseUp,this._destroyHandler).on(t.eventType.mouseMove,this._dragHandler).on(t.eventType.mouseUp,this._dragStopHandler).on("mouseleave",this._dragMouseOutHandler).on("selectstart",!1);t.widgetBase.droppables[this.model.scope]={draggable:this.element,helper:e.css({position:"absolute",left:this.position.left-s.left,top:this.position.top-s.top}),destroy:this._destroyHandler}}},_drag:function(i){var u,f,h,c,s,l,o,r,e;i.preventDefault();this.position=this._getMousePosition(i);this.position.top<0&&(this.position.top=0);n(document).height()<this.position.top&&(this.position.top=n(document).height());n(document).width()<this.position.left&&(this.position.left=n(document).width());r=t.widgetBase.droppables[this.model.scope].helper;this.model.drag&&(s=null,i.type=="touchmove"?(l=i.originalEvent.changedTouches[0],s=document.elementFromPoint(l.clientX,l.clientY)):s=i.originalEvent.target||i.target,this._trigger("drag",{event:i,element:this.target,target:s}));o=this._checkTargetElement(i);t.isNullOrUndefined(o)?this._hoverTarget&&(i.target=i.toElement=this._hoverTarget,this._hoverTarget.object._out(i),this._hoverTarget=null):(i.target=i.toElement=o,o.object._over(i),this._hoverTarget=o);r=t.widgetBase.droppables[this.model.scope].helper;e=r.offsetParent().offset();h=t.isNullOrUndefined(i.pageX)?i.originalEvent.changedTouches[0].pageX:i.pageX;c=t.isNullOrUndefined(i.pageY)?i.originalEvent.changedTouches[0].pageY:i.pageY;this.model.dragArea?(this._pageX!=h&&(u=this._left>this.position.left?this._left:this._right<this.position.left+r.outerWidth(!0)?this._right-r.outerWidth(!0):this.position.left),this._pageY!=c&&(f=this._top>this.position.top?this._top:this._bottom<this.position.top+r.outerHeight(!0)?this._bottom-r.outerHeight(!0):this.position.top)):(u=this.position.left,f=this.position.top);(f<0||f-[e.top+this["border-top-width"]]<0)&&(f=[e.top+this["border-top-width"]]);(u<0||u-[e.left+this["border-left-width"]]<0)&&(u=[e.left+this["border-left-width"]]);r.css({left:u-[e.left+this["border-left-width"]],top:f-[e.top+this["border-top-width"]]});this.position.left=u;this.position.top=f;this._pageX=h;this._pageY=c},_dragStop:function(n){var t,i;(n.type=="mouseup"||n.type=="touchend")&&this._destroy(n);this.model.dragStop&&(t=null,n.type=="touchend"?(i=n.originalEvent.changedTouches[0],t=document.elementFromPoint(i.clientX,i.clientY)):t=n.originalEvent.target||n.target,this._trigger("dragStop",{event:n,element:this.target,target:t}));this._dragEnd(n)},_dragEnd:function(n){var i=this._checkTargetElement(n);t.isNullOrUndefined(i)||(n.target=n.toElement=i,i.object._drop(n))},_dragMouseEnter:function(t){n(document).off("mouseenter",this._dragMouseEnterHandler);this._isIE9?this._dragManualStop(t):this._isIE8?t.button==0&&this._dragManualStop(t):t.buttons==0&&this._dragManualStop(t)},_dragManualStop:function(n){this.model.dragStop!=null&&this._trigger("dragStop",{event:n,element:this.target,target:n.originalEvent.target||n.target});this._destroy(n)},_dragMouseOut:function(){n(document).on("mouseenter",this._dragMouseEnterHandler)},_checkTargetElement:function(n){var t=n.target;return this.helper&&this._contains(this.helper[0],t)?(this.helper.hide(),t=this._elementUnderCursor(n),this.helper.show(),this._withDropElement(t)):this._withDropElement(t)},_withDropElement:function(i){if(i&&(dropObj=n(i).data("ejDroppable"),t.isNullOrUndefined(dropObj)&&(dropObj=this._checkParentElement(n(i))),!t.isNullOrUndefined(dropObj)))return n.extend(i,{object:dropObj})},_checkParentElement:function(i){var r=n(i).closest(".e-droppable");if(r.length>0&&(dropObj=n(r).data("ejDroppable"),!t.isNullOrUndefined(dropObj)))return dropObj},_elementUnderCursor:function(n){return n.type=="touchmove"||n.type=="touchstart"||n.type=="touchend"||n.type=="taphold"?document.elementFromPoint(n.originalEvent.changedTouches[0].clientX,n.originalEvent.changedTouches[0].clientY):document.elementFromPoint(n.clientX,n.clientY)},_contains:function(t,i){try{return n.contains(t,i)||t==i}catch(r){return!1}},_wireEvents:function(){t.isDevice()==!0&&this.model.dragOnTaphold==!0?this._on(this.element,"taphold",this._initialize):this._on(this.element,t.eventType.mouseDown,this._initialize);this._dragStartHandler=n.proxy(this._dragStart,this);this._destroyHandler=n.proxy(this._destroy,this);this._dragStopHandler=n.proxy(this._dragStop,this);this._dragHandler=n.proxy(this._drag,this);this._dragMouseEnterHandler=n.proxy(this._dragMouseEnter,this);this._dragMouseOutHandler=n.proxy(this._dragMouseOut,this)},_getMousePosition:function(n){n=this._getCoordinate(n);var t=this.model.clone?n.pageX:n.pageX-this._relXposition,i=this.model.clone?n.pageY:n.pageY-this._relYposition;return{left:t-[this.margins.left+this.model.cursorAt.left],top:i-[this.margins.top+this.model.cursorAt.top]}},_getCoordinate:function(n){var i=n;return(n.type=="touchmove"||n.type=="touchstart"||n.type=="touchend"||n.type=="taphold"&&t.browserInfo().name!="msie")&&(i=n.originalEvent.changedTouches[0]),i}})})(jQuery,Syncfusion),function(n,t){t.widget("ejDroppable","ej.Droppable",{element:null,model:null,validTags:["div","span","a"],defaults:{accept:null,scope:"default",drop:null,over:null,out:null,create:null,destroy:null},_init:function(){if(this.model.accept)n(this.element).delegate(this.accept,"mouseup",n.proxy(this._drop,this));else n(this.element).on("mouseup",n.proxy(this._drop,this));this._on(n(document),"touchend",this._drop);this._mouseOver=!1},_setModel:function(){},_destroy:function(){n(this.element).off("mouseup",n.proxy(this._drop,this))},_over:function(n){this._mouseOver||(this._trigger("over",n),this._mouseOver=!0)},_out:function(n){this._mouseOver&&(this._trigger("out",n),this._mouseOver=!1)},_drop:function(i){var r=t.widgetBase.droppables[this.model.scope],f=!t.isNullOrUndefined(r.helper)&&r.helper.is(":visible"),u=this._isDropArea(i);r&&!t.isNullOrUndefined(this.model.drop)&&f&&u.canDrop&&this.model.drop(n.extend(i,{dropTarget:u.target},!0),r)},_isDropArea:function(t){var i={canDrop:!0,target:n(t.target)},e,r,o,u,f;if(t.type=="touchend")for(e=t.originalEvent.changedTouches[0],r=document.elementFromPoint(e.clientX,e.clientY),i.canDrop=!1,o=n(r).parents(),u=0;u<this.element.length;u++){if(n(r).is(n(this.element[u])))i={canDrop:!0,target:n(r)};else for(f=0;f<o.length;f++)if(n(this.element[u]).is(n(o[f]))){i={canDrop:!0,target:n(r)};break}if(i.canDrop)break}return i}})}(jQuery,Syncfusion),function(n,t){t.widget("ejResizable","ej.resizable",{element:null,model:null,validTags:["div","span","a"],defaults:{scope:"default",handle:null,distance:1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,cursorAt:{top:1,left:1},resizeStart:null,resize:null,resizeStop:null,create:null,destroy:null,helper:function(){return n('<div class="e-resize-helper" />').html("resizable").appendTo(document.body)}},_init:function(){if(this.target=this.element,this._browser=t.browserInfo(),this._isIE8=this._browser.name=="msie"&&this._browser.version=="8.0",this._isIE9=this._browser.name=="msie"&&this._browser.version=="9.0",this.handle!=null)n(this.target).delegate(this.handle,t.eventType.mouseDown,n.proxy(this._mousedown,this)).delegate(this.handle,"resizestart",this._blockDefaultActions);else n(this.target).on("mousedown",n.proxy(this._mousedown,this));this._resizeStartHandler=n.proxy(this._resizeStart,this);this._destroyHandler=n.proxy(this._destroy,this);this._resizeStopHandler=n.proxy(this._resizeStop,this);this._resizeHandler=n.proxy(this._resize,this);this._resizeMouseEnterHandler=n.proxy(this._resizeMouseEnter,this)},_mouseover:function(i){if(n(i.target).hasClass("e-resizable")){n(i.target).css({cursor:"se-resize"});n(this.target).on(t.eventType.mouseDown,n.proxy(this._mousedown,this))}else n(this.target).off(t.eventType.mouseDown),n(this.target).css({cursor:""})},_blockDefaultActions:function(n){n.cancelBubble=!0;n.returnValue=!1;n.preventDefault&&n.preventDefault();n.stopPropagation&&n.stopPropagation()},_setModel:function(){},_mousedown:function(i){var r=i;i=this._getCoordinate(i);this.target=n(r.currentTarget);this._initPosition={x:i.pageX,y:i.pageY};this._pageX=i.pageX;this._pageY=i.pageY;n(document).on(t.eventType.mouseMove,this._resizeStartHandler).on(t.eventType.mouseUp,this._destroyHandler);return n(document.documentElement).trigger(t.eventType.mouseDown,r),!1},_resizeStart:function(i){var r,h;if(n(i.target).hasClass("e-resizable")){i=this._getCoordinate(i);var u=this._initPosition.x-i.pageX,f=this._initPosition.y-i.pageY,e,o,s=Math.sqrt(u*u+f*f);if(s>=this.model.distance){if(this.model.resizeStart!=null&&this._trigger("resizeStart",{event:i,element:this.target}))return;r=this.model.helper({element:this.target});e=i.pageX-this._pageX+r.outerWidth();o=i.pageY-this._pageY+r.outerHeight();this._pageX=i.pageX;this._pageY=i.pageY;h=this.getElementPosition(r);n(document).off(t.eventType.mouseMove,this._resizeStartHandler).off(t.eventType.mouseUp,this._destroyHandler).on(t.eventType.mouseMove,this._resizeHandler).on(t.eventType.mouseUp,this._resizeStopHandler).on("mouseenter",this._resizeMouseEnterHandler).on("selectstart",!1);t.widgetBase.resizables[this.scope]={resizable:this.target,helper:r.css({width:e,height:o}),destroy:this._destroyHandler}}}},_resize:function(n){var i,r,u,e,f;n=this._getCoordinate(n);e=this.getElementPosition(t.widgetBase.resizables[this.scope].helper);f=this.model.helper({element:this.target});i=n.pageX-this._pageX+f.outerWidth();r=n.pageY-this._pageY+f.outerHeight();this._pageX=n.pageX;this._pageY=n.pageY;i<this.model.minWidth&&(u=this.model.minWidth-i,i=this.model.minWidth,this._pageX=n.pageX+u);r<this.model.minHeight&&(u=this.model.minHeight-r,r=this.model.minHeight,this._pageY=n.pageY+u);this.model.maxHeight!=null&&r>this.model.maxHeight&&(u=r-this.model.maxHeight,r=this.model.maxHeight,this._pageY=n.pageY-u);this.model.maxWidth!=null&&i>this.model.maxWidth&&(u=i-this.model.maxWidth,i=this.model.maxWidth,this._pageX=n.pageX-u);t.widgetBase.resizables[this.scope].helper.css({width:i,height:r});this._trigger("resize",{element:this.target})},_resizeStop:function(n){this.model.resizeStop!=null&&this._trigger("resizeStop",{element:this.target});(n.type=="mouseup"||n.type=="touchend")&&this._destroy(n)},_resizeMouseEnter:function(n){this._isIE9?this._resizeManualStop(n):this._isIE8?n.button==0&&this._resizeManualStop(n):n.buttons==0&&this._resizeManualStop(n)},_resizeManualStop:function(n){this.model.resizeStop!=null&&this._trigger("resizeStop",{element:this.target});this._destroy(n)},_destroy:function(){n(document).off(t.eventType.mouseUp,this._destroyHandler).off(t.eventType.mouseUp,this._resizeStopHandler).off(t.eventType.mouseMove,this._resizeStartHandler).off(t.eventType.mouseMove,this._resizeHandler).off("mouseenter",this._resizeMouseEnterHandler).off("selectstart",!1);t.widgetBase.resizables[this.scope]=null},getElementPosition:function(n){return n!=null&&n.length>0?{left:n[0].offsetLeft,top:n[0].offsetTop}:null},_getCoordinate:function(n){var t=n;return(n.type=="touchmove"||n.type=="touchstart"||n.type=="touchend")&&(t=n.originalEvent.changedTouches[0]),t}})}(jQuery,Syncfusion)});

/*!
*  filename: ej.globalize.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["./ej.core.min"],n):n()})(function(){(function(n){function e(n,t){return n.indexOf(t)===0}function s(n,t){return n.substr(n.length-t.length)===t}function u(n){return(n+"").replace(w,"")}function g(n){return isNaN(n)?NaN:Math[n<0?"ceil":"floor"](n)}function o(n,t,i){for(var r=n.length;r<t;r++)n=i?"0"+n:n+"0";return n}function h(n,t,i){var r=t["-"],u=t["+"],f;switch(i){case"n -":r=" "+r;u=" "+u;case"n-":s(n,r)?f=["-",n.substr(0,n.length-r.length)]:s(n,u)&&(f=["+",n.substr(0,n.length-u.length)]);break;case"- n":r+=" ";u+=" ";case"-n":e(n,r)?f=["-",n.substr(r.length)]:e(n,u)&&(f=["+",n.substr(u.length)]);break;case"(n)":e(n,"(")&&s(n,")")&&(f=["-",n.substr(1,n.length-2)])}return f||["",n]}function nt(n,t,i){var l=i.groupSizes||[3],c=l[0],a=1,p=Math.pow(10,t),v=Math.round(n*p)/p,w;isFinite(v)||(v=n);n=v;var r=n+"",u="",e=r.split(/e/i),f=e.length>1?parseInt(e[1],10):0;r=e[0];e=r.split(".");r=e[0];u=e.length>1?e[1]:"";f>0?(u=o(u,f,!1),r+=u.slice(0,f),u=u.substr(f)):f<0&&(f=-f,r=o(r,f+1),u=r.slice(-f,r.length)+u,r=r.slice(0,-f));w=i["."]||".";u=t>0?w+(u.length>t?u.slice(0,t):o(u,t)):"";for(var s=r.length-1,y=i[","]||",",h="";s>=0;){if(c===0||c>s)return r.slice(0,s+1)+(h.length?y+h+u:u);h=r.slice(s-c+1,s+1)+(h.length?y+h:"");s-=c;a<l.length&&(c=l[a],a++)}return r.slice(0,s+1)+y+h+u}function tt(n,t,i){var s,r;if(!t||t==="i")return i.name.length?n.toLocaleString():n.toString();t=t||"D";var e=i.numberFormat,u=Math.abs(n),f=-1,h;t.length>1&&(f=parseInt(t.slice(1),10));s=t.charAt(0).toUpperCase();switch(s){case"D":h="n";u=g(u);f!==-1&&(u=o(""+u,f,!0));n<0&&(u=-u);break;case"N":r=e;r.pattern=r.pattern||["-n"];case"C":r=r||e.currency;r.pattern=r.pattern||["-$n","$n"];case"P":r=r||e.percent;r.pattern=r.pattern||["-n %","n %"];h=n<0?r.pattern[0]||"-n":r.pattern[1]||"n";f===-1&&(f=r.decimals);u=nt(u*(s==="P"?100:1),f,r);break;default:throw"Bad number format specifier: "+s;}return it(u,h,e)}function it(n,t,i){for(var f=/n|\$|-|%/g,r="",e,u;;){if(e=f.lastIndex,u=f.exec(t),r+=t.slice(e,u?u.index:t.length),!u)break;switch(u[0]){case"n":r+=n;break;case"$":r+=i.currency.symbol||"$";break;case"-":/[1-9]/.test(n)&&(r+=i["-"]||"-");break;case"%":r+=i.percent.symbol||"%"}}return r}function i(n,t,i){return n<t||n>i}function rt(n,t){var u=new Date,i,r;return t<100&&(i=n.twoDigitYearMax,i=typeof i=="string"?(new Date).getFullYear()%100+parseInt(i,10):i,r=u.getFullYear(),t+=r-r%100,t>i&&(t-=100)),t}function f(n,t){if(n.indexOf)return n.indexOf(t);for(var i=0,r=n.length;i<r;i++)if(n[i]===t)return i;return-1}function c(n){return n.split(" ").join(" ").toUpperCase()}function r(n){for(var i=[],t=0,r=n.length;t<r;t++)i[t]=c(n[t]);return i}function ut(n,t,i){var u,o=n.days,e=n._upperDays;return e||(n._upperDays=e=[r(o.names),r(o.namesAbbr),r(o.namesShort)]),t=c(t),i?(u=f(e[1],t),u===-1&&(u=f(e[2],t))):u=f(e[0],t),u}function ft(n,t,i){var s=n.months,h=n.monthsGenitive||n.months,u=n._upperMonths,o=n._upperMonthsGen,e;return u||(n._upperMonths=u=[r(s.names),r(s.namesAbbr)],n._upperMonthsGen=o=[r(h.names),r(h.namesAbbr)]),t=c(t),e=f(i?u[1]:u[0],t),e<0&&(e=f(i?o[1]:o[0],t)),e}function l(n,t){for(var r,f=0,i=!1,u=0,e=n.length;u<e;u++)r=n.charAt(u),r=="'"?(i?t.push("'"):f++,i=!1):r=="\\"?(i&&t.push("\\"),i=!i):(t.push(r),i=!1);return f}function et(n,t,i,r){if(!n)return null;var u=0,f=0,e=null;t=t.split("");length=t.length;for(var o=function(n){for(var i=0;t[u]===n;)i++,u++;return i>0&&(u-=1),i},s=function(t){var r=new RegExp("^\\d{1,"+t+"}"),i=n.substr(f,t).match(r);return i?(i=i[0],f+=i.length,parseInt(i,10)):null},h=function(t,i){for(var r=0,s=t.length,e,o,u;r<s;r++)if(e=t[r],o=e.length,u=n.substr(f,o),i&&(u=u.toLowerCase()),u==e)return f+=o,r+1;return null},c=function(n){for(var t=0,r=n.length,i=[];t<r;t++)i[t]=(n[t]+"").toLowerCase();return i},l=function(n){var t={};for(var i in n)t[i]=c(n[i]);return t};u<length;u++)ch=t[u],ch==="d"&&(count=o("d"),r._lowerDays||(r._lowerDays=l(r.days)),e=count<3?s(2):h(r._lowerDays[count==3?"namesAbbr":"names"],!0));return e}function a(n,t){t=t||"F";var i,u=n.patterns,r=t.length;if(r===1){if(i=u[t],!i)throw"Invalid date format string '"+t+"'.";t=i}else r===2&&t.charAt(0)==="%"&&(t=t.charAt(1));return t}function v(n,r,f){var w,yt,h,g,nt,s,wt,b,ct;n=u(n);r=u(r);var o=f.calendar,lt=ej.globalize._getDateParseRegExp(o,r),at=new RegExp(lt.regExp).exec(n);if(at===null)return null;var vt=lt.groups,y=null,a=null,v=null,tt=null,l=0,p,it=0,ot=0,st=0,k=null,ht=!1;for(w=0,yt=vt.length;w<yt;w++)if(h=at[w+1],h){var pt=vt[w],d=pt.length,c=parseInt(h,10);switch(pt){case t.DAY_OF_MONTH_DOUBLE_DIGIT:case t.DAY_OF_MONTH_SINGLE_DIGIT:if(v=c,i(v,1,31))return null;break;case t.MONTH_THREE_LETTER:case t.MONTH_FULL_NAME:if(a=ft(o,h,d===3),i(a,0,11))return null;break;case t.MONTH_SINGLE_DIGIT:case t.MONTH_DOUBLE_DIGIT:if(a=c-1,i(a,0,11))return null;break;case t.YEAR_SINGLE_DIGIT:case t.YEAR_DOUBLE_DIGIT:case t.YEAR_FULL:if(y=d<4?rt(o,c):c,i(y,0,9999))return null;break;case t.HOURS_SINGLE_DIGIT_12_HOUR_CLOCK:case t.HOURS_DOUBLE_DIGIT_12_HOUR_CLOCK:if(l=c,l===12&&(l=0),i(l,0,11))return null;break;case t.HOURS_SINGLE_DIGIT_24_HOUR_CLOCK:case t.HOURS_DOUBLE_DIGIT_24_HOUR_CLOCK:if(l=c,i(l,0,23))return null;break;case t.MINUTES_SINGLE_DIGIT:case t.MINUTES_DOUBLE_DIGIT:if(it=c,i(it,0,59))return null;break;case t.SECONDS_SINGLE_DIGIT:case t.SECONDS_DOUBLE_DIGIT:if(ot=c,i(ot,0,59))return null;break;case t.MERIDIAN_INDICATOR_FULL:case t.MERIDIAN_INDICATOR_SINGLE:if(ht=o.PM&&(h===o.PM[0]||h===o.PM[1]||h===o.PM[2]),!ht&&(!o.AM||h!==o.AM[0]&&h!==o.AM[1]&&h!==o.AM[2]))return null;break;case t.DECISECONDS:case t.CENTISECONDS:case t.MILLISECONDS:if(st=c*Math.pow(10,3-d),i(st,0,999))return null;break;case t.DAY_OF_WEEK_THREE_LETTER:v=et(n,r,f,o);break;case t.DAY_OF_WEEK_FULL_NAME:if(ut(o,h,d===3),i(tt,0,6))return null;break;case t.TIME_ZONE_OFFSET_FULL:if((g=h.split(/:/),g.length!==2)||(p=parseInt(g[0],10),i(p,-12,13))||(nt=parseInt(g[1],10),i(nt,0,59)))return null;k=p*60+(e(h,"-")?-nt:nt);break;case t.TIME_ZONE_OFFSET_SINGLE_DIGIT:case t.TIME_ZONE_OFFSET_DOUBLE_DIGIT:if(p=c,i(p,-12,13))return null;k=p*60}}if(s=new Date,b=o.convert,wt=b?b.fromGregorian(s)[0]:s.getFullYear(),y===null&&(y=wt),a===null&&(a=0),v===null&&(v=1),b){if(s=b.toGregorian(y,a,v),s===null)return null}else if((s.setFullYear(y,a,v),s.getDate()!==v)||tt!==null&&s.getDay()!==tt)return null;return ht&&l<12&&(l+=12),s.setHours(l,it,ot,st),k!==null&&(ct=s.getMinutes()-(k+s.getTimezoneOffset()),s.setHours(s.getHours()+parseInt(ct/60,10),ct%60)),s}function y(n,i,r){function o(n,t){var i,r=n+"";return t>1&&r.length<t?(i=it[t-2]+r,i.substr(i.length-t,t)):r}function ut(){return v||d?v:(v=rt.test(i),d=!0,v)}var e=r.calendar,b=e.convert,u,k,w,f,tt,h;if(!i||!i.length||i==="i")return r&&r.name.length?b?y(n,e.patterns.F,r):n.toLocaleString():n.toString();k=i==="s";i=a(e,i);u=[];var s,it=["0","00","000"],v,d,rt=/([^d]|^)(d|dd)([^d]|$)/g,g=0,nt=/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g,c;for(!k&&b&&(c=b.fromGregorian(n));;){var ft=nt.lastIndex,p=nt.exec(i),et=i.slice(ft,p?p.index:i.length);if(g+=l(et,u),!p)break;if(g%2){u.push(p[0]);continue}w=p[0];f=w.length;switch(w){case t.DAY_OF_WEEK_THREE_LETTER:case t.DAY_OF_WEEK_FULL_NAME:tt=f===3?e.days.namesAbbr:e.days.names;u.push(tt[n.getDay()]);break;case t.DAY_OF_MONTH_SINGLE_DIGIT:case t.DAY_OF_MONTH_DOUBLE_DIGIT:v=!0;u.push(o(c?c[2]:n.getDate(),f));break;case t.MONTH_THREE_LETTER:case t.MONTH_FULL_NAME:h=c?c[1]:n.getMonth();u.push(e.monthsGenitive&&ut()?e.monthsGenitive[f===3?"namesAbbr":"names"][h]:e.months[f===3?"namesAbbr":"names"][h]);break;case t.MONTH_SINGLE_DIGIT:case t.MONTH_DOUBLE_DIGIT:u.push(o((c?c[1]:n.getMonth())+1,f));break;case t.YEAR_SINGLE_DIGIT:case t.YEAR_DOUBLE_DIGIT:case t.YEAR_FULL:h=c?c[0]:n.getFullYear();f<4&&(h=h%100);u.push(o(h,f));break;case t.HOURS_SINGLE_DIGIT_12_HOUR_CLOCK:case t.HOURS_DOUBLE_DIGIT_12_HOUR_CLOCK:s=n.getHours()%12;s===0&&(s=12);u.push(o(s,f));break;case t.HOURS_SINGLE_DIGIT_24_HOUR_CLOCK:case t.HOURS_DOUBLE_DIGIT_24_HOUR_CLOCK:u.push(o(n.getHours(),f));break;case t.MINUTES_SINGLE_DIGIT:case t.MINUTES_DOUBLE_DIGIT:u.push(o(n.getMinutes(),f));break;case t.SECONDS_SINGLE_DIGIT:case t.SECONDS_DOUBLE_DIGIT:u.push(o(n.getSeconds(),f));break;case t.MERIDIAN_INDICATOR_SINGLE:case t.MERIDIAN_INDICATOR_FULL:h=n.getHours()<12?e.AM?e.AM[0]:" ":e.PM?e.PM[0]:" ";u.push(f===1?h.charAt(0):h);break;case t.DECISECONDS:case t.CENTISECONDS:case t.MILLISECONDS:u.push(o(n.getMilliseconds(),3).substr(0,f));break;case t.TIME_ZONE_OFFSET_SINGLE_DIGIT:case t.TIME_ZONE_OFFSET_DOUBLE_DIGIT:s=n.getTimezoneOffset()/60;u.push((s<=0?"+":"-")+o(Math.floor(Math.abs(s)),f));break;case t.TIME_ZONE_OFFSET_FULL:s=n.getTimezoneOffset()/60;u.push((s<=0?"+":"-")+o(Math.floor(Math.abs(s)),2)+":"+o(Math.abs(n.getTimezoneOffset()%60),2));break;case t.DATE_SEPARATOR:u.push(e["/"]||"/");break;default:throw"Invalid date format pattern '"+w+"'.";}}return u.join("")}function p(n,t){return t.length?p(n[t[0]],t.slice(1)):n}var t;ej.globalize={};ej.cultures={};ej.cultures["default"]=ej.cultures["en-US"]=n.extend(!0,{name:"en-US",englishName:"English",nativeName:"English",language:"en",isRTL:!1,numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}}},ej.cultures["en-US"]);ej.cultures["en-US"].calendar=ej.cultures["en-US"].calendar||ej.cultures["en-US"].calendars.standard;var w=/^\s+|\s+$/g,b=/^[+-]?infinity$/i,k=/^0x[a-f0-9]+$/i,d=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/;t={DAY_OF_WEEK_THREE_LETTER:"ddd",DAY_OF_WEEK_FULL_NAME:"dddd",DAY_OF_MONTH_SINGLE_DIGIT:"d",DAY_OF_MONTH_DOUBLE_DIGIT:"dd",MONTH_THREE_LETTER:"MMM",MONTH_FULL_NAME:"MMMM",MONTH_SINGLE_DIGIT:"M",MONTH_DOUBLE_DIGIT:"MM",YEAR_SINGLE_DIGIT:"y",YEAR_DOUBLE_DIGIT:"yy",YEAR_FULL:"yyyy",HOURS_SINGLE_DIGIT_12_HOUR_CLOCK:"h",HOURS_DOUBLE_DIGIT_12_HOUR_CLOCK:"hh",HOURS_SINGLE_DIGIT_24_HOUR_CLOCK:"H",HOURS_DOUBLE_DIGIT_24_HOUR_CLOCK:"HH",MINUTES_SINGLE_DIGIT:"m",MINUTES_DOUBLE_DIGIT:"mm",SECONDS_SINGLE_DIGIT:"s",SECONDS_DOUBLE_DIGIT:"ss",MERIDIAN_INDICATOR_SINGLE:"t",MERIDIAN_INDICATOR_FULL:"tt",DECISECONDS:"f",CENTISECONDS:"ff",MILLISECONDS:"fff",TIME_ZONE_OFFSET_SINGLE_DIGIT:"z",TIME_ZONE_OFFSET_DOUBLE_DIGIT:"zz",TIME_ZONE_OFFSET_FULL:"zzz",DATE_SEPARATOR:"/"};ej.globalize._getDateParseRegExp=function(n,i){var e=n._parseRegExp,s,w,o,b,r,k,d;if(e){if(s=e[i],s)return s}else n._parseRegExp=e={};for(var h=a(n,i).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),u=["^"],v=[],c=0,y=0,p=/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g,f;(f=p.exec(h))!==null;){if(w=h.slice(c,f.index),c=p.lastIndex,y+=l(w,u),y%2){u.push(f[0]);continue}o=f[0];b=o.length;switch(o){case t.DAY_OF_WEEK_THREE_LETTER:case t.DAY_OF_WEEK_FULL_NAME:case t.MONTH_FULL_NAME:case t.MONTH_THREE_LETTER:r="(\\D+)";break;case t.MERIDIAN_INDICATOR_FULL:case t.MERIDIAN_INDICATOR_SINGLE:r="(\\D*)";break;case t.YEAR_FULL:case t.MILLISECONDS:case t.CENTISECONDS:case t.DECISECONDS:r="(\\d{"+b+"})";break;case t.DAY_OF_MONTH_DOUBLE_DIGIT:case t.DAY_OF_MONTH_SINGLE_DIGIT:case t.MONTH_DOUBLE_DIGIT:case t.MONTH_SINGLE_DIGIT:case t.YEAR_DOUBLE_DIGIT:case t.YEAR_SINGLE_DIGIT:case t.HOURS_DOUBLE_DIGIT_24_HOUR_CLOCK:case t.HOURS_SINGLE_DIGIT_24_HOUR_CLOCK:case t.HOURS_DOUBLE_DIGIT_12_HOUR_CLOCK:case t.HOURS_SINGLE_DIGIT_12_HOUR_CLOCK:case t.MINUTES_DOUBLE_DIGIT:case t.MINUTES_SINGLE_DIGIT:case t.SECONDS_DOUBLE_DIGIT:case t.SECONDS_SINGLE_DIGIT:r="(\\d\\d?)";break;case t.TIME_ZONE_OFFSET_FULL:r="([+-]?\\d\\d?:\\d{2})";break;case t.TIME_ZONE_OFFSET_DOUBLE_DIGIT:case t.TIME_ZONE_OFFSET_SINGLE_DIGIT:r="([+-]?\\d\\d?)";break;case t.DATE_SEPARATOR:r="(\\"+n["/"]+")";break;default:throw"Invalid date format pattern '"+o+"'.";}r&&u.push(r);v.push(f[0])}return l(h.slice(c),u),u.push("$"),k=u.join("").replace(/\s+/g,"\\s+"),d={regExp:k,groups:v},e[i]=d};ej.globalize.addCulture=function(t,i){ej.cultures[t]=n.extend(!0,n.extend(!0,{},ej.cultures["default"],i),ej.cultures[t]);ej.cultures[t].calendar=ej.cultures[t].calendars.standard};ej.globalize.preferredCulture=function(n){return n=typeof n!="undefined"&&typeof n==typeof this.cultureObject?n.name:n,this.cultureObject=ej.globalize.findCulture(n),this.cultureObject};ej.globalize.setCulture=function(n){return ej.isNullOrUndefined(this.globalCultureObject)&&(this.globalCultureObject=ej.globalize.findCulture(n)),n=typeof n!="undefined"&&typeof n==typeof this.globalCultureObject?n.name:n,n&&(this.globalCultureObject=ej.globalize.findCulture(n)),ej.cultures.current=this.globalCultureObject,this.globalCultureObject};ej.globalize.culture=function(n){ej.cultures.current=ej.globalize.findCulture(n)};ej.globalize.findCulture=function(t){var f,i,e,u,r,o;if(t){if(n.isPlainObject(t)&&t.numberFormat&&(f=t),typeof t=="string"){if(i=ej.cultures,i[t])return i[t];if(t.indexOf("-")>-1){if(e=t.split("-")[0],i[e])return i[e]}else for(u=n.map(i,function(n){return n}),r=0;r<u.length;r++)if(o=u[r].name.split("-")[0],o===t)return u[r];return ej.cultures["default"]}}else f=ej.cultures.current||ej.cultures["default"];return f};ej.globalize.format=function(n,t,i){var r=ej.globalize.findCulture(i);return typeof n=="number"?n=tt(n,t,r):n instanceof Date&&(n=y(n,t,r)),n};ej.globalize.parseInt=function(n,t,i){return Math.floor(this.parseFloat(n,t,i))};ej.globalize.parseFloat=function(n,t,i){var p,o,s,r,w,tt,g,nt,it,a,rt;typeof t=="string"&&(i=t,t=10);i=ej.globalize.findCulture(i);var v=NaN,f=i.numberFormat,y=i.numberFormat.pattern[0];if(n=n.replace(/ /g,""),n.indexOf(i.numberFormat.currency.symbol)>-1?(n=n.replace(i.numberFormat.currency.symbol||"$",""),n=n.replace(i.numberFormat.currency["."]||".",i.numberFormat["."]||"."),y=u(i.numberFormat.currency.pattern[0].replace("$",""))):n.indexOf(i.numberFormat.percent.symbol)>-1&&(n=n.replace(i.numberFormat.percent.symbol||"%",""),n=n.replace(i.numberFormat.percent["."]||".",i.numberFormat["."]||"."),y=u(i.numberFormat.percent.pattern[0].replace("%",""))),n=u(n),b.test(n))v=parseFloat(n,t);else if(!t&&k.test(n))v=parseInt(n,16);else{var c=h(n,f,y),l=c[0],e=c[1];l===""&&f.pattern[0]!=="-n"&&(c=h(n,f,"-n"),l=c[0],e=c[1]);l=l||"+";s=e.indexOf("e");s<0&&(s=e.indexOf("E"));s<0?(o=e,p=null):(o=e.substr(0,s),p=e.substr(s+1));tt=f["."]||".";g=o.indexOf(tt);g<0?(r=o,w=null):(r=o.substr(0,g),w=o.substr(g+tt.length));nt=f[","]||",";r=r.split(nt).join("");it=nt.replace(/\u00A0/g," ");nt!==it&&(r=r.split(it).join(""));a=l+r;w!==null&&(a+="."+w);p!==null&&(rt=h(p,f,y),a+="e"+(rt[0]||"+")+rt[1]);d.test(a)&&(v=parseFloat(a))}return v};ej.globalize.parseDate=function(n,t,i){var r,o,f,u,s,e;if(i=ej.globalize.findCulture(i),t){if(typeof t=="string"&&(t=[t]),t.length)for(u=0,s=t.length;u<s;u++)if(e=t[u],e&&(r=v(n,e,i),r))break}else{f=i.calendar.patterns;for(o in f)if(r=v(n,f[o],i),r)break}return r||null};ej.globalize.getLocalizedConstants=function(t,i){var r,u=t.replace("ej.","").split(".");return r=p(ej,u),n.extend(!0,{},r.Locale["default"],r.Locale[i?i:this.cultureObject.name])};n.extend(ej,ej.globalize)})(jQuery)});

/*!
*  filename: ej.scroller.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["./ej.core.min"],n):n()})(function(){(function(n,t,i,r){"use strict";t.widget("ejScrollBar","ej.ScrollBar",{defaults:{orientation:"horizontal",viewportSize:0,height:18,width:18,smallChange:57,largeChange:57,value:0,maximum:0,minimum:0,buttonSize:18,infiniteScrolling:!1},validTags:["div"],type:"transclude",dataTypes:{buttonSize:"number",smallChange:"number",largeChange:"number"},observables:["value"],value:t.util.valueFunction("value"),_enabled:!0,content:function(){return this._content&&this._content.length||(this._content=this.model.orientation==="horizontal"?this.element.find(".e-hhandle"):this.element.find(".e-vhandle")),this._content},_init:function(){this.element.addClass("e-widget");this._ensureScrollers();this.content();this._setInitialValues()},_setInitialValues:function(){var n="X";this.model.orientation===t.ScrollBar.Orientation.Horizontal?this.element.addClass("e-hscrollbar"):(this.element.addClass("e-vscrollbar"),n="Y");(this.value()!==0||this.model.minimum!==0)&&(this.value()<this.model.minimum&&this.value(this.model.minimum),this.scroll(this.value(),"none"))},_ensureScrollers:function(){var t=n.fn.jquery;this.model.height&&this.element.height(this.model.height);this.model.width&&this.element.width(this.model.width);this._scrollData||(this._scrollData=this.model.orientation==="vertical"?this._createScroller("Height","Y","Top","e-v"):this._createScroller("Width","X","Left","e-h"))},_setModel:function(n){for(var t in n)if(t==="value")this.value()&&this.scroll(this.value(),"none");else{this.refresh();break}},_createScroller:function(t,i,r,u){var f={},o=n.fn.jquery,e;return f.dimension=t,f.xy=i,f.position=r,f.css=u,f.uDimension=t,this._calculateLayout(f),this._createLayout(f),e=this[f.main].find(".e-button"),this._off(e,"mousedown")._on(e,"mousedown",{d:f,step:1},this._spaceMouseDown),this._off(this[f.scroll],"mousedown")._on(this[f.scroll],"mousedown",{d:f},this._spaceMouseDown),this._off(this[f.handler],"mousedown touchstart")._on(this[f.handler],"mousedown touchstart",{d:f},this._mouseDown),f},_createLayout:function(i){var r="<div class='"+i.css+"{0}' style='"+i.dimension+":{1}px'>{2}<\/div>",u=n.fn.jquery,f={},o,e;f[i.dimension]=i.modelDim;e=t.buildTag("div."+i.css+"scroll e-box",String.format(r,"up e-chevron-up_01 e-icon e-box e-button",i.buttonSize)+String.format(r,"handlespace",i.handleSpace,String.format(r,"handle e-box e-pinch",i.handle))+String.format(r,"down e-chevron-down_01 e-icon e-box e-button",i.buttonSize),f);this.element.append(e);this.element.find(".e-vhandle").addClass("e-v-line e-icon");this.element.find(".e-hhandle").addClass("e-h-line e-icon");o=u==="1.7.1"||u==="1.7.2"?i.uDimension.toLowerCase():"outer"+i.uDimension;this[i.handler]=this.element.find("."+i.handler);this[i.handler].css("transition","none");this[i.scroll]=this[i.handler].parent();this[i.main]=this[i.scroll].parent();this[i.main].find(".e-button")["outer"+i.uDimension](i.buttonSize)},_calculateLayout:function(n){var i,u;n.scrollDim="scroll"+n.dimension;n.lPosition=n.position.toLowerCase();n.clientXy="page"+n.xy;n.scrollVal="scroll"+n.position;n.scrollOneStepBy=this.model.smallChange;n.modelDim=this.model[n.dimension=n.dimension.toLowerCase()];n.handler=n.css+"handle";n.buttonSize=this.model.buttonSize;n.main=n.css+"scroll";n.scroll=n.css+"ScrollSpace";n.handleSpace=n.modelDim-2*n.buttonSize;n.scrollable=this.model.maximum-this.model.minimum;i=this.model.height;this.model.orientation==="horizontal"&&(i=this.model.width);n.handle=this.model.viewportSize/(this.model.maximum-this.model.minimum+this.model.viewportSize)*(i-2*this.model.buttonSize);u=!t.isNullOrUndefined(this.model.elementHeight)&&typeof this.model.elementHeight=="string"&&this.model.elementHeight.indexOf("%")!=-1?!0:!1;n.handle<20&&!u&&(n.handle=20);n.onePx=n.scrollable/(n.handleSpace-n.handle);n.fromScroller=!1;n.up=!0;n.vInterval=r},_updateLayout:function(n){this.element.height(this.model.height);this.element.width(this.model.width);var t=this.element.find("."+n.css+"handle"),f=this.element.find("."+n.css+"handlespace"),u=n.dimension=="width"?t.css("left"):t.css("top"),i=n.dimension=="width"?f.outerWidth():f.outerHeight();u!==r&&u!=="auto"&&(i>=n.handle+parseFloat(u)||(this.model.enableRTL?t.css(n.dimension==="width"?"left":"top",parseFloat(i)-n.handle):t.css(n.dimension==="width"?"left":"top",parseFloat(i)-n.handle>0?parseFloat(i)-n.handle:0)));this.element.find("."+n.css+"scroll").css(n.dimension,n.modelDim+"px").find(".e-button").css(n.dimension,this.model.buttonSize).end().find("."+n.css+"handlespace").css(n.dimension,n.handleSpace+"px").find("."+n.css+"handle").css(n.dimension,n.handle+"px")},refresh:function(){this._ensureScrollers();this.value()&&this.scroll(this.value(),"none");this._scrollData&&(this._calculateLayout(this._scrollData),this._updateLayout(this._scrollData))},scroll:function(n,i,r,u){var o=this._scrollData,f,e;if(!r)if(this.model.orientation===t.ScrollBar.Orientation.Horizontal){if(this._trigger("scroll",{source:i||"custom",scrollData:this._scrollData,scrollLeft:n,originalEvent:u}))return}else if(this._trigger("scroll",{source:i||"custom",scrollData:this._scrollData,scrollTop:n,originalEvent:u}))return;this._scrollData.enableRTL&&(u=="mousemove"||u=="touchmove")&&t.browserInfo().name!="msie"?this.value(-o.scrollable+n):this._scrollData.enableRTL&&(u=="mousemove"||u=="touchmove")&&t.browserInfo().name=="msie"?this.value(-1*n):this.value(n);this.content().length>0&&(this.model.orientation===t.ScrollBar.Orientation.Horizontal?(f=this.element.find(".e-hhandlespace").width()-this.element.find(".e-hhandle").outerWidth(),n=f<(n-this.model.minimum)/this._scrollData.onePx?f:(n-this.model.minimum)/this._scrollData.onePx,this._scrollData.enableRTL&&(u=="mousemove"||u=="touchmove")&&t.browserInfo().name!="msie"&&(n=f-n,n>0?n=n*-1:n),this._scrollData.enableRTL&&(u=="mousemove"||u=="touchmove")&&t.browserInfo().name=="msie"&&(n=-n),this._scrollData.enableRTL&&n>0&&!this._scrollData._scrollleftflag?n=0:n,this._scrollData._scrollleftflag&&(n>0?n=n*-1:n,this.value(n)),this.content()[0].style.left=n+"px",this._scrollData._scrollleftflag=!1):(e=this.element.find(".e-vhandlespace").height()-this.element.find(".e-vhandle").outerHeight(),n=e<(n-this.model.minimum)/this._scrollData.onePx?e:(n-this.model.minimum)/this._scrollData.onePx,this.content()[0].style.top=n+"px"))},_changeTop:function(n,t,i){var u,r;return u=n.dimension==="height"?this.value():this.value(),r=u+t,n.step=t,n.enableRTL&&t<0||t>0&&!n.enableRTL?n.enableRTL?r<this.model.maximum*-1&&(r=this.model.maximum*-1):r>this.model.maximum&&(r=this.model.maximum):n.enableRTL?r>this.model.minimum&&(r=this.model.minimum):r<this.model.minimum&&(r=this.model.minimum),(r!==u||this.model.infiniteScrolling)&&this.scroll(r,i),r!==u},_mouseUp:function(i){if(i.data){var r=i.data.d;clearInterval(r.vInterval);i.type=="touchend"&&n(i.target).removeClass("e-touch");i.type!=="mouseup"&&i.type!=="touchend"&&(i.toElement||i.relatedTarget||i.target)||(this._prevY=this._d=this._data=null,this._off(n(document),"mousemove touchmove",this._mouseMove),n(document).off("mouseup touchend",t.proxy(this._mouseUp,this)),r.fromScroller=!1,this[r.scroll].off("mousemove"),this[r.handler].off("mousemove").css("transition",""),i.data.source!=="thumb"||t.isNullOrUndefined(this.model)||n.when(this.content()).done(t.proxy(function(){this._trigger("thumbEnd",{originalEvent:i,scrollData:r})},this)));r.up=!0}},_mouseDown:function(i){if(this._enabled){this._d=i;this._data=this._d.data.d;this._data.target=this._d.target;this._data.fromScroller=!0;this[this._data.handler].css("transition","none");this._on(n(document),"mousemove touchmove",{d:this._data,source:"thumb"},this._mouseMove);this._trigger("thumbStart",{originalEvent:this._d,scrollData:this._data});n(document).one("mouseup touchend",{d:this._data,source:"thumb"},t.proxy(this._mouseUp,this));i.type=="touchstart"&&n(i.target).addClass("e-touch")}},_mouseCall:function(n){n.type="mouseup";this._mouseUp(n)},_mouseMove:function(i){var u,f=0,r=parseInt(this[this._data.handler].css(this._data.lPosition))||0,o,e;if(i.preventDefault(),o=1,t.isNullOrUndefined(i.target.tagName)){if(n(i.target).is(document)){this._mouseCall(i);return}}else if(i.target.tagName.toLowerCase()==="iframe"){this._mouseCall(i);return}e=i.type=="mousemove"?i[this._data.clientXy]:i.originalEvent.changedTouches[0][this._data.clientXy];this._prevY&&e!==this._prevY&&(f=e-this._prevY,this.model.infiniteScrolling?(r=r+f,this._data.step=f,(this._data.enableRTL?r>0:r<0)&&(r=0),r*(this._data.enableRTL?-1:1)+this._data.handle>=this._data.handleSpace&&(r=(this._data.handleSpace-this._data.handle)*(this._data.enableRTL?-1:1)),u=Math.ceil(r*this._data.onePx),this.scroll(u,"thumb")):(u=f*this._data.onePx,this._changeTop(this._data,u,"thumb",this._d)),this._trigger("thumbMove",{originalEvent:i,scrollData:this._data}));o===1&&(this._prevY=e)},_spaceMouseDown:function(i){var r,u,f;if(i.data&&this._enabled&&(r=i.data.d,i.which===1&&i.target!==this[r.handler][0])){u=i.data.step?this.model.smallChange:this.model.largeChange;f=i.data.top||this[r.handler].offset()[r.lPosition];i[r.clientXy]=i[r.clientXy]||0;i[r.clientXy]<f&&(u*=-1);r.target=i.target;this._changeTop(r,u,u===3?"track":"button",i);i.data.step!==1&&this[r.scroll].mousemove(function(){r.up=!0});r.up=!1;r.vInterval=setInterval(t.proxy(function(){if((u<0?f+u/r.onePx<i[r.clientXy]:f+r.handle+u/r.onePx>i[r.clientXy])&&(r.up=!0),r.up){clearInterval(r.vInterval);return}this._changeTop(r,u,u===3?"track":"button",i);f=i.data?i.data.top||this[r.handler].offset()[r.lPosition]:this[r.handler].offset()[r.lPosition]},this),150);n(document).one("mouseup",{d:r},t.proxy(this._mouseUp,this));n(document).mouseout({d:r},t.proxy(this._mouseUp,this))}},_remove:function(){this.model.orientation===t.ScrollBar.Orientation.Horizontal&&this.element.find(".e-hscroll").remove();this.model.orientation===t.ScrollBar.Orientation.Vertical&&this.element.find(".e-vscroll").remove();this._scrollData=null;this._content=null},_destroy:function(){this.element.remove()}});t.ScrollBar.Orientation={Horizontal:"horizontal",Vertical:"vertical"}})(jQuery,Syncfusion,window),function(n,t,i,r){"use strict";t.widget("ejScroller","ej.Scroller",{_addToPersist:["scrollLeft","scrollTop"],defaults:{height:250,autoHide:!1,animationSpeed:600,width:0,scrollOneStepBy:57,buttonSize:18,scrollLeft:0,scrollTop:0,targetPane:null,scrollerSize:18,enablePersistence:!1,enableRTL:r,enableTouchScroll:!0,enabled:!0,create:null,destroy:null,wheelStart:null,wheelMove:null,wheelStop:null},validTags:["div"],type:"transclude",dataTypes:{buttonSize:"number",scrollOneStepBy:"number"},observables:["scrollTop","scrollLeft"],scrollTop:t.util.valueFunction("scrollTop"),scrollLeft:t.util.valueFunction("scrollLeft"),keyConfigs:{up:"38",down:"40",left:"37",right:"39",pageUp:"33",pageDown:"34",pageLeft:"ctrl+37",pageRight:"ctrl+39"},content:function(){return this._content&&this._content.length&&this._content[0].offsetParent||(this._content=this.element.children().first().addClass("e-content")),this._content},_setFirst:!0,_updateScroll:!1,_init:function(){t.isNullOrUndefined(this.content()[0])||(this._prevScrollWidth=this.content()[0].scrollWidth,this._prevScrollHeight=this.content()[0].scrollHeight,this.element.addClass("e-widget"),this.content(),this._browser=t.browserInfo().name,this._wheelStart=!0,this._eleHeight=this.model.height,this._eleWidth=this.model.width,this.model.enableRTL===r&&(this.model.enableRTL=this.element.css("direction")==="rtl"),this._ensureScrollers(),this.model.enableRTL&&(this.element.addClass("e-rtl"),this._rtlScrollLeftValue=this.content().scrollLeft()),this._on(this.content(),"scroll",this._scroll),this.model.targetPane!=null&&this._on(this.content().find(this.model.targetPane),"scroll",this._scroll),this.scrollLeft()&&this._setScrollLeftValue(this.scrollLeft()),this.scrollTop()&&this.content().scrollTop(this.scrollTop()),this.model.autoHide&&this._autohide(),this.model.enabled?this.enable():this.disable(),this._setDimension(),(this._prevScrollWidth!==this.content()[0].scrollWidth||this._prevScrollHeight!==this.content()[0].scrollHeight)&&this.refresh());this._addActionClass()},_addActionClass:function(){this._browser=="msie"&&(this.content().removeClass("e-pinch e-pan-x e-pan-y"),this._vScrollbar&&this._hScrollbar?this.content().addClass("e-pinch"):this._vScrollbar&&!this._hScrollbar?this.content().addClass("e-pan-x"):this._hScrollbar&&!this._vScrollbar&&this.content().addClass("e-pan-y"))},_setDimension:function(){t.isNullOrUndefined(this.model.height)||typeof this.model.height!="string"||this.model.height.indexOf("%")==-1||(this._vScroll?this.model.height=this._convertPercentageToPixel(parseInt(this._eleHeight),this.element.parent().height()):n(this.content()[0]).height(""));t.isNullOrUndefined(this.model.width)||typeof this.model.width!="string"||this.model.width.indexOf("%")==-1||(this._hScroll?this.model.width=this._convertPercentageToPixel(parseInt(this._eleWidth),this.element.parent().width()):n(this.content()[0]).width(""))},_setScrollLeftValue:function(n){this.model.enableRTL&&(n=t.browserInfo().name=="mozilla"?n<0?n:n*-1:!t.isNullOrUndefined(this._rtlScrollLeftValue)&&(t.browserInfo().name=="chrome"||this._rtlScrollLeftValue>0)?n<0?this._rtlScrollLeftValue+n:this._rtlScrollLeftValue-n:Math.abs(n));this.content().scrollLeft(n)},_ensureScrollers:function(){var e=n.fn.jquery,r,u,f,o,s;if(this.model.height=typeof this.model.height=="string"&&this.model.height.indexOf("px")!=-1?parseInt(this.model.height):this.model.height,this.model.width=typeof this.model.width=="string"&&this.model.width.indexOf("px")!=-1?parseInt(this.model.width):this.model.width,this.model.height&&this.element.height(this.model.height),this.model.width&&this.element.width(this.model.width),this._off(this.content(),"mousedown touchstart"),this.content().length>0){if(this.isVScroll()?(this._vScrollbar||(this._vScrollbar=this._createScrollbar(t.ScrollBar.Orientation.Vertical,this.isHScroll())),this.model.enableTouchScroll&&this._on(this.content(),"mousedown touchstart",{d:this._vScrollbar._scrollData},this._mouseDownOnContent)):(this._vScrollbar=null,this.element.children(".e-vscrollbar").remove()),this.isHScroll()?(this._hScrollbar||(this._hScrollbar=this._createScrollbar(t.ScrollBar.Orientation.Horizontal,this.isVScroll())),this.model.enableTouchScroll&&this._on(this.content(),"mousedown touchstart",{d:this._hScrollbar._scrollData},this._mouseDownOnContent)):(this._hScrollbar=null,this.element.children(".e-hscrollbar").remove()),this._vScrollbar||this._hScrollbar||this.content().css({width:"auto",height:"auto"}),this.element.find(".e-hscroll").length>0||this._vScrollbar&&this.content().outerHeight(this.content().outerHeight()-1),this._hScroll=this.isHScroll(),this._vScroll=this.isVScroll(),this._hScroll||this._vScroll){if(this.content().addClass("e-content"),e==="1.7.1"||e==="1.7.2"?(r="height",u="width"):(r="outerHeight",u="outerWidth"),f=this._exactElementDimension(this.element),o=f.height-(this.border_bottom+this.border_top+this.padding_bottom+this.padding_top),this.content()[r](o-(this._hScroll&&!this.model.autoHide?this.model.scrollerSize:0)),s=f.width-(this.border_left+this.border_right+this.padding_left+this.padding_right),this.content()[u](s-(this._vScroll&&!this.model.autoHide?this.model.scrollerSize:0)),isNaN(this._eleWidth)&&this._eleWidth.indexOf("%")>0&&isNaN(this._eleHeight)&&this._eleHeight.indexOf("%")>0)n(i).on("resize",n.proxy(this._resetScroller,this))}else this.content().removeClass("e-content");this._setDimension();this._parentHeight=n(this.element).parent().height();this._parentWidth=n(this.element).parent().width()}},_convertPercentageToPixel:function(n,t){return Math.floor(n*t/100)},isHScroll:function(){if(t.isNullOrUndefined(this.model.width)||typeof this.model.width!="string"||this.model.width.indexOf("%")==-1){if(this.model.width>0){var i=this.content().find(this.model.targetPane);return this.model.targetPane!=null&&i.length?i[0].scrollWidth+i.siblings().width()>this.model.width:this.content()[0].scrollWidth>this.model.width?!0:this.content()[0].scrollWidth==this.model.width&&n(this.content()[0]).find("> *").length>0?n(this.content()[0]).find("> *")[0].scrollWidth>this.model.width:!1}return!1}return this.content()[0].scrollWidth>this.element.width()},isVScroll:function(){if(t.isNullOrUndefined(this.model.height)||typeof this.model.height!="string"||this.model.height.indexOf("%")==-1){if(this.model.height>0&&(this.content()[0].scrollHeight>this.model.height||this.isHScroll()&&(this.content()[0].scrollHeight==this.model.height||this.content()[0].scrollHeight>this.model.height-(this.model.scrollerSize-2))))return!0}else return this.content()[0].scrollHeight>this.element.outerHeight();return!1},_setModel:function(n){for(var i in n)if(i==="enableRTL")n[i]?(this.element.addClass("e-rtl"),this._rtlScrollLeftValue=this.content().scrollLeft(),t.isNullOrUndefined(this._hScrollbar)||(this._hScrollbar._scrollData.enableRTL=!0)):(this.element.removeClass("e-rtl"),t.isNullOrUndefined(this._hScrollbar)||(this._hScrollbar._scrollData.enableRTL=!1)),this._hScrollbar&&(this.element.find(".e-hhandle").css("left",0),this._hScrollbar.value(0));else if(i==="scrollLeft")(parseFloat(n[i])<0||!this._hScroll)&&(n[i]=0),this._externalCall=!0,this._hScrollbar&&(n[i]=parseFloat(n[i])>this._hScrollbar._scrollData.scrollable?this._hScrollbar._scrollData.scrollable:parseFloat(n[i])),this._setScrollLeftValue(parseFloat(n[i])),this.scrollLeft(n[i]),!this._hScrollbar||this._hScrollbar._scrollData._scrollleftflag&&this.model.enableRTL||this.scrollX(n[i]);else if(i==="scrollTop")this._vScrollbar&&(n[i]=parseFloat(n[i])>this._vScrollbar._scrollData.scrollable?this._vScrollbar._scrollData.scrollable:parseFloat(n[i])),(parseFloat(n[i])<0||!this._vScroll)&&(n[i]=0),this._externalCall=!0,this.content().scrollTop(parseFloat(n[i])),this.scrollTop(n[i]),this.scrollY(n[i]);else if(i==="touchScroll")this.model.enableTouchScroll?(this._vScrollbar&&this._on(this.content(),"mousedown touchstart",{d:this._vScrollbar._scrollData},this._mouseDownOnContent),this._hScrollbar&&this._on(this.content(),"mousedown touchstart",{d:this._hScrollbar._scrollData},this._mouseDownOnContent)):this._off(this.content(),"mousedown touchstart");else if(i==="scrollOneStepBy")this._vScrollbar&&(this._vScrollbar._scrollData.scrollOneStepBy=n[i],this._vScrollbar.model.smallChange=n[i]),this._hScrollbar&&(this._hScrollbar._scrollData.scrollOneStepBy=n[i],this._hScrollbar.model.smallChange=n[i]);else if(i==="buttonSize")this._vScrollbar&&(this._vScrollbar.model.buttonSize=this.model.buttonSize),this._hScrollbar&&(this._hScrollbar.model.buttonSize=this.model.buttonSize),this.refresh();else{i==="height"&&(this._eleHeight=n[i]);i==="width"&&(this._eleWidth=n[i]);this.refresh();break}},_createScrollbar:function(i,r){var c=this,f,o,l,s,a,h=document.createElement("div"),e,u;return i===t.ScrollBar.Orientation.Vertical?(o=this.model.scrollerSize,l=t.isNullOrUndefined(this.model.height)||typeof this.model.height!="string"||this.model.height.indexOf("%")==-1?f=this.model.height-(r?this.model.scrollerSize:0):f=this.element.height()-(r?this.model.scrollerSize:0),s=this.content()[0].scrollHeight,a=this.scrollTop()):(o=f=this.model.width-(r?this.model.scrollerSize:0),l=this.model.scrollerSize,t.isNullOrUndefined(this.model.width)||typeof this.model.width!="string"||this.model.width.indexOf("%")==-1?(e=this.content().find(this.model.targetPane),s=this.model.targetPane!=null&&e.length?e[0].scrollWidth+e.parent().width()-e.width():this.content()[0].scrollWidth):(o=f=this.element.width()-(r?this.model.scrollerSize:0),s=this.content()[0].scrollWidth),a=this.scrollLeft()),this.element.children(".e-hscrollbar").length>0?n(this.element.children(".e-hscrollbar")).before(h):this.element.append(h),n(h).ejScrollBar({elementHeight:c._eleHeight,elementWidth:c._eleWidth,buttonSize:c.model.buttonSize,orientation:i,viewportSize:f,height:l,width:o,maximum:s-f,value:a,smallChange:this.model.scrollOneStepBy,largeChange:3*this.model.scrollOneStepBy,scroll:t.proxy(this._scrollChanged,this),thumbEnd:t.proxy(this._thumbEnd,this),thumbStart:t.proxy(this._thumbStart,this),thumbMove:t.proxy(this._thumbMove,this)}),u=n(h).ejScrollBar("instance"),i!==t.ScrollBar.Orientation.Vertical&&r||this._off(this.element,this._browser=="msie"?"wheel mousewheel":"mousewheel DOMMouseScroll",this._mouseWheel)._on(this.element,this._browser=="msie"?"wheel mousewheel":"mousewheel DOMMouseScroll",{d:u._scrollData},this._mouseWheel),i===t.ScrollBar.Orientation.Horizontal?this._scrollXdata=u._scrollData:this._scrollYdata=u._scrollData,i===t.ScrollBar.Orientation.Horizontal&&this.model.enableRTL&&(u._scrollData.enableRTL=!0),u._enabled=this.model.enabled,u},_updateScrollbar:function(i,r){var u=i===t.ScrollBar.Orientation.Vertical?this._vScrollbar:this._hScrollbar;u&&(i===t.ScrollBar.Orientation.Vertical?(u.model.width=this.model.scrollerSize,u.model.height=u.model.viewportSize=this.model.height-(r?this.model.scrollerSize:0),u.model.maximum=this.content()[0].scrollHeight-u.model.viewportSize,u.model.value=this.scrollTop()):(u.model.width=u.model.viewportSize=this.model.width-(r?this.model.scrollerSize:0),u.model.height=this.model.scrollerSize,u.model.maximum=(this.model.targetPane!=null&&this.content().find(this.model.targetPane).length>0?this.content().find(this.model.targetPane)[0].scrollWidth+(this.content().width()-n(this.model.targetPane).outerWidth()):this.content()[0].scrollWidth)-u.model.viewportSize,this.model.enableRTL||(u.model.value=this.scrollLeft())))},_autohide:function(){this.model.autoHide?(this.element.addClass("e-autohide"),this._on(this.element,"mouseenter mouseleave touchstart touchend",this._scrollerHover),this.content().siblings(".e-scrollbar.e-js").hide()):(this.element.removeClass("e-autohide"),this._off(this.element,"mouseenter mouseleave touchstart touchend",this._scrollerHover),this.content().siblings(".e-scrollbar.e-js").show())},_scrollChanged:function(i){this._updateScroll=!0;i.scrollTop!==r?this.scrollY(i.scrollTop,!0,"",i.source):i.scrollLeft!==r&&this.scrollX(i.scrollLeft,!0,"",i.source);this._updateScroll=!1;var u=this;n.when(this.content()).done(t.proxy(function(){u._trigger("scrollEnd",{scrollData:i})}))},_bindBlurEvent:function(r,u){this._scrollEle=n(r).data("ejScrollBar");this._event=u;var f=this;this._listener=function(){this._scrollEle._off(n(document),"mousemove touchmove",this._scrollEle._mouseMove);n(document).off("mouseup touchend",t.proxy(this._scrollEle._mouseUp,this._scrollEle));this._scrollEle._prevY=null;this._off(n(document),"mousemove touchmove",this._mouseMove);this._off(n(document),"mouseup touchend",this._mouseUp);this._off(n(i),"blur");this._evtData.handler==="e-vhandle"?this._scrollEle._trigger("thumbEnd",{originalEvent:this._event,scrollData:this._evtData}):this._scrollEle._trigger("thumbEnd",{originalEvent:this._event,scrollData:this._evtData})};this._on(n(i),"blur",this._listener)},_thumbStart:function(n){this._evtData=n.scrollData;var t=n.scrollData.handler==="e-vhandle"?this.element.find("."+n.scrollData.handler).closest(".e-scrollbar"):this.element.find("."+n.scrollData.handler).closest(".e-scrollbar"),t=n.scrollData.handler==="e-vhandle"?this.element.find("."+n.scrollData.handler).closest(".e-scrollbar"):this.element.find("."+n.scrollData.handler).closest(".e-scrollbar");this._bindBlurEvent(t,n);this._trigger("thumbStart",n)},_thumbMove:function(n){this._trigger("thumbMove",n)},_thumbEnd:function(t){this._trigger("thumbEnd",t);this._off(n(i),"blur")},refresh:function(i){var r,u;i||this.element.find(">.e-content").removeAttr("style");t.isNullOrUndefined(this._eleHeight)||typeof this._eleHeight!="string"||this._eleHeight.indexOf("%")==-1||this._parentHeight==n(this.element).parent().height()||(r=this._exactElementDimension(this.element.parent()),r=r.height-(this.border_bottom+this.border_top+this.padding_bottom+this.padding_top),this.model.height=this._convertPercentageToPixel(parseInt(this._eleHeight),r));t.isNullOrUndefined(this._eleWidth)||typeof this._eleWidth!="string"||this._eleWidth.indexOf("%")==-1||this._parentWidth==n(this.element).parent().width()||(r=this._exactElementDimension(this.element.parent()),r=r.width-(this.border_left+this.border_right+this.padding_left+this.padding_right),this.model.width=this._convertPercentageToPixel(parseInt(this._eleWidth),r));this._ensureScrollers();u=this.scrollLeft();this.model.enableRTL?(this.element.hasClass("e-rtl")||this.element.addClass("e-rtl"),this._rtlScrollLeftValue=this.content().scrollLeft(),u>0?this.content().scrollLeft(u):this._setScrollLeftValue(u)):this.content().scrollLeft(u);(this.scrollTop()&&this._vScrollbar==null||this._vScrollbar!==null&&this._vScrollbar._scrollData!=null&&!this._vScrollbar._scrollData.skipChange)&&this.content().scrollTop(this.scrollTop());this._vScrollbar&&(this._vScrollbar._scrollData.dimension="Height",this._updateScrollbar(t.ScrollBar.Orientation.Vertical,this._hScroll),this._vScroll&&!this._vScrollbar._calculateLayout(this._vScrollbar._scrollData)&&this._vScrollbar._updateLayout(this._vScrollbar._scrollData));this._hScrollbar&&(this._hScrollbar._scrollData.dimension="Width",this._updateScrollbar(t.ScrollBar.Orientation.Horizontal,this._vScroll),this._hScroll&&!this._hScrollbar._calculateLayout(this._hScrollbar._scrollData)&&this._hScrollbar._updateLayout(this._hScrollbar._scrollData));t.browserInfo().name=="msie"&&t.browserInfo().version=="8.0"?this.element.find(".e-hhandle").css("left","0px"):this.model.targetPane!=null&&this._on(this.content().find(this.model.targetPane),"scroll",this._scroll);this._addActionClass();this._autohide()},_exactElementDimension:function(n){var i=n.get(0).getBoundingClientRect(),r=["left","right","top","bottom"],u,f,t;for(u=i.width?i.width:i.right-i.left,f=i.height?i.height:i.bottom-i.top,t=0;t<r.length;t++)this["border_"+r[t]]=isNaN(parseFloat(n.css("border-"+r[t]+"-width")))?0:parseFloat(n.css("border-"+r[t]+"-width")),this["padding_"+r[t]]=isNaN(parseFloat(n.css("padding-"+r[t])))?0:parseFloat(n.css("padding-"+r[t]));return{width:u,height:f}},_keyPressed:function(n,i){if(this.model.enabled){if(["input","select","textarea"].indexOf(i.tagName.toLowerCase())!==-1)return!0;var r,u;if(["up","down","pageUp","pageDown"].indexOf(n)!==-1)this._vScrollbar&&(t.browserInfo().name=="msie"&&this.model.allowVirtualScrolling&&this._content.focus(),r=this._vScrollbar._scrollData),u="o";else if(["left","right","pageLeft","pageRight"].indexOf(n)!==-1)this._hScrollbar&&(r=this._hScrollbar._scrollData),u="i";else return!0;return r?!this._changeTop(r,(n.indexOf(u)<0?-1:1)*(n[0]!=="p"?1:3)*r.scrollOneStepBy,"key"):!0}},scrollY:function(n,i,r,u,f){if(n!==""){if(i){var f={source:u||"custom",scrollData:this._vScrollbar?this._vScrollbar._scrollData:null,scrollTop:n,originalEvent:f};if(this._trigger("scroll",f))return;n=f.scrollTop;this.scrollTop(n);this.content().scrollTop(n);return}(t.isNullOrUndefined(r)||r==="")&&(r=100);this._vScrollbar&&(n=parseFloat(n)>this._vScrollbar._scrollData.scrollable?this._vScrollbar._scrollData.scrollable:parseFloat(n));this.scrollTop(n);this.content().stop().animate({scrollTop:n},r,"linear");this._trigger("scroll",{source:u||"custom",scrollData:this._vScrollbar?this._vScrollbar._scrollData:null,scrollTop:n,originalEvent:f})}},scrollX:function(n,i,r,u,f){var e,o;if(n!==""){if(this._hScrollbar&&(n=parseFloat(n)>this._hScrollbar._scrollData.scrollable?this._hScrollbar._scrollData.scrollable:parseFloat(n)),this._externalCall=!0,e=t.browserInfo().name,this.model.enableRTL&&e!="mozilla"&&(n<0&&(n=Math.abs(n)),o=this.model.targetPane!=null?this.content().find(this.model.targetPane)[0]:this.content()[0],f!="mousemove"&&f!="touchmove"&&e!="msie"&&e!="msie"&&(n=this._hScrollbar._scrollData.scrollable-n)),this.scrollLeft(n),i){if(this._trigger("scroll",{source:u||"custom",scrollData:this._hScrollbar?this._hScrollbar._scrollData:null,scrollLeft:n,originalEvent:f}))return;this.model.targetPane!=null&&this.content().find(this.model.targetPane).length?this.content().find(this.model.targetPane).scrollLeft(n):this.content().scrollLeft(n);return}(t.isNullOrUndefined(r)||r==="")&&(r=100);this.model.targetPane!=null&&this.content().find(this.model.targetPane).length?this.content().find(this.model.targetPane).stop().animate({scrollLeft:n},r,"linear"):this.content().stop().animate({scrollLeft:n},r,"linear");this._trigger("scroll",{source:u||"custom",scrollData:this._hScrollbar?this._hScrollbar._scrollData:null,scrollLeft:n,originalEvent:f})}},enable:function(){var n=this.element.find(".e-vscrollbar,.e-hscrollbar,.e-vscroll,.e-hscroll,.e-vhandle,.e-hhandle,.e-vscroll .e-icon,.e-hscroll .e-icon");n.hasClass("e-disable")&&(n.removeClass("e-disable").attr({"aria-disabled":!1}),this.model.enabled=!0);this._vScrollbar&&(this._vScrollbar._enabled=this.model.enabled);this._hScrollbar&&(this._hScrollbar._enabled=this.model.enabled)},disable:function(){var n=this.element.find(".e-vscrollbar,.e-hscrollbar,.e-vscroll,.e-hscroll,.e-vhandle,.e-hhandle,.e-vscroll .e-icon,.e-hscroll .e-icon");n.addClass("e-disable").attr({"aria-disabled":!0});this.model.enabled=!1;this._vScrollbar&&(this._vScrollbar._enabled=this.model.enabled);this._hScrollbar&&(this._hScrollbar._enabled=this.model.enabled)},_changeTop:function(n,i,r,u){var e=this.model.targetPane!=null&&n.dimension!="height"?this.content().find(this.model.targetPane)[n.scrollVal]():this.content()[n.scrollVal](),f;return n.dimension=="height"&&e==0&&(e=this.scrollTop()!=0?this.scrollTop():0),f=e+i,(n.enableRTL?f<n.scrollable:f>n.scrollable)&&(f=n.scrollable),(n.enableRTL?f>0:f<0)&&(f=0),f!==e&&(this["scroll"+n.xy](f,!0,"",r,u),n.xy!=="X"||t.isNullOrUndefined(this._hScrollbar)?t.isNullOrUndefined(this._vScrollbar)||this._vScrollbar.scroll(f,r,!0,u):this._hScrollbar.scroll(f,r,!0,u)),f!==e},_mouseWheel:function(t){var o;if((this._vScrollbar||t.shiftKey)&&t.data&&this.model.enabled){var u=0,f=t.data.d,r=t,e;if(t=t.originalEvent,this._wheelStart&&this._trigger("wheelStart",{originalEvent:t,scrollData:r.data.d}),this._wheelStart=!1,clearTimeout(n.data(this,"timer")),this._wheelx!=1&&(t.wheelDeltaX==0||t.wheelDeltaY==0)&&(this._wheelx=1),navigator.platform.indexOf("Mac")==0&&this._wheelx==0&&(this._browser=="webkit"||this._browser=="chrome"))return!0;(this._browser=="mozilla"?t.axis==t.HORIZONTAL_AXIS?f=this._scrollXdata:this._scrollYdata:this._browser=="msie"?(t.type=="wheel"&&(u=t.deltaX/120),t.type=="mousewheel"&&t.shiftKey&&(f=this._scrollXdata,t.preventDefault?t.preventDefault():t.returnValue=!1)):this._wheelx&&t.wheelDeltaX!=0&&t.wheelDeltaY==0&&this._scrollXdata&&(f=this._scrollXdata),t.wheelDeltaX==0&&(this._wheelx=t.wheelDeltaX),t.wheelDelta?(u=navigator.platform.indexOf("Mac")==0?-t.wheelDelta/3:-t.wheelDelta/120,i.opera&&parseFloat(i.opera.version,10)<10&&(u=-u)):t.detail&&(u=t.detail/3),u)&&(r.originalEvent&&(e=r.originalEvent.wheelDelta&&r.originalEvent.wheelDelta>0||r.originalEvent.detail&&r.originalEvent.detail<0?-1:1),this._changeTop(f,u*f.scrollOneStepBy,"wheel",t)?(t.preventDefault?t.preventDefault():r.preventDefault(),r.stopImmediatePropagation(),r.stopPropagation(),this._trigger("wheelMove",{originalEvent:t,scrollData:r.data.d,direction:e})):(this._trigger("scrollEnd",{originalEvent:t,scrollData:r}),this._wheelx=0),o=this,n.data(this,"timer",setTimeout(function(){o._wheelStart=!0;o._trigger("wheelStop",{originalEvent:t,scrollData:r.data.d,direction:e})},250)))}},_scrollerHover:function(n){n.type!="mouseenter"&&n.type!="touchstart"||this.content().siblings().is(":visible")?(n.type=="mouseleave"||n.type=="touchend")&&this.content().siblings().hide():this.content().siblings().css("display","block")},_mouseUp:function(r){if(r.data){var u=r.data.d;r.type!=="mouseup"&&r.type!=="touchend"&&(r.toElement||r.relatedTarget)||(this.content().css("cursor","default"),this._off(n(document),"mousemove touchmove"),this._off(n(document),"mouseup touchend",this._mouseUp),u.fromScroller=!1,this._mouseMoved!==!0||r.data.source!=="thumb"||t.isNullOrUndefined(this.model)||(n.when(this.content()).done(t.proxy(function(){this._trigger("thumbEnd",{originalEvent:r,scrollData:u})},this)),this._off(n(i),"blur")));u.up=!0}},_mouseDownOnContent:function(u){var f,s;if((this._velocity=0,this.model.enabled)&&(f=u.data.d,this._evtData=u.data,this._startX=u.clientX!=r?u.clientX:u.originalEvent.changedTouches[0][f.clientXy],this._startY=u.clientY!=r?u.clientY:u.originalEvent.changedTouches[0][f.clientXy],this._timeStart=u.timeStamp||Date.now(),s=f.handler==="e-vhandle"?this.element.find("."+f.handler).closest(".e-scrollbar"):this.element.find("."+f.handler).closest(".e-scrollbar"),this._bindBlurEvent(s,u),!this._trigger("thumbStart",{originalEvent:u,scrollData:f}))&&(u.which!=3||u.button!=2)){f.fromScroller=!0;var e=null,o=1,c=5,h;this._document=n(document);this._window=n(i);this._mouseMove=function(n){var u,s,i;if(this._relDisX=(this._startx=n.clientX!=r?n.clientX:n.originalEvent.changedTouches[0][f.clientXy])-this._startX,this._relDisY=(this._starty=n.clientY!=r?n.clientY:n.originalEvent.changedTouches[0][f.clientXy])-this._startY,this._duration=(n.timeStamp||Date.now())-this._timeStart,this._velocityY=Math.abs(this._relDisY)/this._duration,this._velocityX=Math.abs(this._relDisX)/this._duration,n.preventDefault(),n.target.tagName.toLowerCase()==="iframe"){n.type="mouseup";this._mouseUp(n);return}if(u=n.type=="mousemove"?n[f.clientXy]:n.originalEvent.changedTouches[0][f.clientXy],e&&u!==e&&(this._mouseMoved=!0,s=u-e,i=this.model[f.scrollVal]-s,o==1&&Math.abs(s)>c&&(h=f.position,o=0),o==0&&(e=u),i>=0&&i<=f.scrollable&&h===f.position)){var l=this._velocityY>.5&&this._duration<50&&f.position=="Top",a=this._velocityX>.5&&this._duration<50&&f.position=="Left",v=(this._velocityY>.5||this._velocityX>.5)&&this._duration<50;v?l?(i=Math.abs(this._relDisY)+this._duration*this._velocityY,this._startY>this._starty?(i+=this.scrollTop(),i>f.scrollable&&(i=f.scrollable)):i<this.scrollTop()&&(i=Math.abs(i-this.scrollTop())),this.scrollTop()<=f.scrollable&&this.scrollY(i,!1,this.model.animationSpeed,"thumb")):a&&(i=Math.abs(this._relDisX),this._startX>this._startx?(i+=this.scrollLeft(),i>f.scrollable&&(i=f.scrollable)):(i-=this.scrollLeft(),i=Math.abs(i),(i>f.scrollable||i>=this.scrollLeft())&&(i=0)),this.scrollLeft()<=f.scrollable&&this.scrollX(i,!1,this.model.animationSpeed,"thumb")):(this["scroll"+f.xy](i,!0,"","thumb",n.type),f.xy==="X"?this._hScrollbar.scroll(i,"thumb",!0,n.type):t.isNullOrUndefined(this._vScrollbar)||this._vScrollbar.scroll(i,"thumb",!0,n.type),this.content().css("cursor","pointer"),this._trigger("thumbMove",{originalEvent:n,scrollData:f}))}e==null&&(e=u)};this._on(n(document),"mousemove touchmove",{d:f,source:"thumb"},this._mouseMove);this._mouseMoved=!1;this._on(n(document),"mouseup touchend",{d:f,source:"thumb"},this._mouseUp)}},_scroll:function(n){for(var i,u,f=[this._vScrollbar?this._vScrollbar._scrollData:null,this._hScrollbar?this._hScrollbar._scrollData:null],r=0;r<2;r++)if(i=f[r],i&&!i.skipChange){if(this._externalCall||(i.dimension==="height"?this.scrollTop(n.target[i.scrollVal]):this.scrollLeft(n.target[i.scrollVal])),i.sTop=this.model&&this.model.targetPane!=null&&r==1&&this.content().find(this.model.targetPane).length?this.content().find(this.model.targetPane)[0][i.scrollVal]:i.scrollVal=="scrollTop"?this.scrollTop():this.scrollLeft(),this[i.scrollVal](i.sTop),i.fromScroller)return;r===1?(u=this.content()[0],this._rtlScrollLeftValue&&u.scrollWidth-u.clientWidth!=this._rtlScrollLeftValue&&(this._rtlScrollLeftValue=u.scrollWidth-u.clientWidth),i.sTop=this.model&&t.browserInfo().name!="mozilla"&&this.model.enableRTL&&!this._hScrollbar._scrollData._scrollleftflag?this._rtlScrollLeftValue==0?i.sTop*-1:i.sTop-this._rtlScrollLeftValue:i.sTop,this._hScrollbar.scroll(i.sTop,"",!0)):this._vScrollbar.scroll(i.sTop,"",!0);(f.length==2&&r==1||f.length==1&&r==0)&&(this._externalScroller=!1)}},_changevHandlerPosition:function(n){var t=this._vScrollbar;t&&(n=t._scrollData!=null&&n>=t._scrollData.scrollable?t._scrollData.scrollable:n,t!=null&&n>=0&&n<=t._scrollData.scrollable&&t[t._scrollData.handler].css(t._scrollData.lPosition,n/t._scrollData.onePx+"px"))},_changehHandlerPosition:function(n){var t=this._hScrollbar;t&&(n=t._scrollData!=null&&n>=t._scrollData.scrollable?t._scrollData.scrollable:n,t!=null&&top>=0&&n<=t._scrollData.scrollable&&t[t._scrollData.handler].css(t._scrollData.lPosition,n/t._scrollData.onePx+"px"))},_destroy:function(){this.element.css({width:"",height:""}).find(".e-vscrollbar,.e-hscrollbar").remove();this.content().removeClass("e-content").css({width:"",height:""})}})}(jQuery,Syncfusion,window)});

/*!
*  filename: ej.dialog.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["./../common/ej.globalize.min","./../common/ej.core.min","./../common/ej.scroller.min","./../common/ej.draggable.min"],n):n()})(function(){(function(n,t,i){t.widget("ejDialog","ej.Dialog",{_rootCSS:"e-dialog",element:null,_ignoreOnPersist:["drag","dragStart","dragStop","resizeStop","resizeStart","resize","beforeClose","beforeOpen","collapse","expand","close","open","destroy","create","ajaxSuccess","ajaxError","contentLoad","actionButtonClick","enableResize"],model:null,validTags:["div","span"],_setFirst:!1,angular:{terminal:!1},defaults:{showOnInit:!0,closeOnEscape:!0,closeIconTooltip:"close",enableAnimation:!0,allowDraggable:!0,height:"auto",minHeight:120,minWidth:200,maxHeight:null,maxWidth:null,enableModal:!1,position:{X:"",Y:""},containment:null,enableResize:!0,htmlAttributes:{},showHeader:!0,showFooter:!1,contentType:null,contentUrl:null,ajaxSettings:{type:"GET",cache:!1,data:{},dataType:"html",contentType:"html",async:!0},title:"",width:400,zIndex:1e3,cssClass:"",enableRTL:!1,allowKeyboardNavigation:!0,showRoundedCorner:!1,actionButtons:["close"],animation:{show:{effect:"fade",duration:400},hide:{effect:"fade",duration:400}},tooltip:{close:"Close",collapse:"Collapse",restore:"Restore",maximize:"Maximize",minimize:"Minimize",expand:"Expand",unPin:"UnPin",pin:"Pin"},footerTemplateId:null,locale:"en-US",faviconCSS:null,content:null,target:null,enablePersistence:!1,enabled:!0,isResponsive:!1,actionButtonClick:null,beforeClose:null,close:null,expand:null,collapse:null,beforeOpen:null,open:null,drag:null,dragStart:null,dragStop:null,resize:null,resizeStart:null,resizeStop:null,contentLoad:null,ajaxSuccess:null,ajaxError:null,create:null,destroy:null,Close:null},dataTypes:{showOnInit:"boolean",closeOnEscape:"boolean",enableAnimation:"boolean",position:"data",animation:"data",closeIconTooltip:"string",tooltip:"data",allowDraggable:"boolean",enableModal:"boolean",enableResize:"boolean",isResponsive:"boolean",showHeader:"boolean",showFooter:"boolean",title:"string",faviconCSS:"string",zIndex:"number",cssClass:"string",enablePersistence:"boolean",contentUrl:"string",contentType:"string",enableRTL:"boolean",enabled:"boolean",allowKeyboardNavigation:"boolean",showRoundedCorner:"boolean",locale:"string",htmlAttributes:"data",ajaxSettings:"data",actionButtons:"array",footerTemplateId:"string"},_setModel:function(i){var r,u;for(r in i)switch(r){case"closeIconTooltip":this._dialogClose.attr("title",i[r]);break;case"tooltip":this._tooltipText(i[r]);break;case"title":this.model.title=i[r];this._ejDialog.find("span.e-title").length<=0?this._addTitleText():this._ejDialog.find("span.e-title").html(i[r]);this._updateCaptionWidth();break;case"width":this.model.width=i[r];this._changeSize();this._updateCaptionWidth();i[r]=this.model.width;break;case"height":this.model.height=i[r];this._changeSize();i[r]=this.model.height;break;case"position":this.model.position=i[r];this._dialogPosition();break;case"cssClass":this._changeSkin(i[r]);break;case"showRoundedCorner":this.model.showRoundedCorner=i[r];this._roundedCorner(i[r]);break;case"contentType":this.model.contentType=i[r];this._appendContent(i[r]);break;case"enabled":this.model.enabled=i[r];this._enabledAction(i[r]);break;case"contentUrl":this.model.contentUrl=i[r];this._appendContent(this.model.contentType);break;case"content":case"target":this._ejDialog.appendTo(n(i[r]));this.model.target=this.model.content=i[r];this._dialogPosition();break;case"containment":this._setDragArea(i[r]);t.isNullOrUndefined(this._target)?this._ejDialog.appendTo(document.body):this._ejDialog.appendTo(this._target);this.model.position.X=this.model.position.Y="";this._dialogPosition();this.model.containment=i[r]=this._target;this.model.enableModal&&this._createOverlay();this._dialogTitlebar.ejDraggable({dragArea:this._target});break;case"locale":this.model.locale=i[r];this.localizedLabels=this._getLocalizedLabels();this._setLocaleCulture(this.localizedLabels);this._tooltipText(this.model.tooltip);break;case"minHeight":this.model.minHeight=i[r];this._ejDialog.css("minHeight",i[r]);this._minMaxValidation();this._resetScroller();this._resizeDialog();break;case"minWidth":this.model.minWidth=i[r];this._ejDialog.css("minWidth",i[r]);this._minMaxValidation();this._resetScroller();this._resizeDialog();break;case"maxHeight":this.model.maxHeight=i[r];this._ejDialog.css("maxHeight",i[r]);this._minMaxValidation();this._resetScroller();this._resizeDialog();break;case"maxWidth":this.model.maxWidth=i[r];this._ejDialog.css("maxWidth",i[r]);this._minMaxValidation();this._resetScroller();this._resizeDialog();break;case"zIndex":this._ejDialog.css("z-index",i[r]);break;case"faviconCSS":this.model.faviconCSS=i[r];this._favIcon();this._updateCaptionWidth();break;case"isResponsive":this.model.isResponsive=i[r];this.model.isResponsive?this._ejDialog.addClass("e-dialog-resize"):this._ejDialog.removeClass("e-dialog-resize");this._wireResizing();break;case"allowDraggable":this.model.allowDraggable=i[r];i[r]?this._enableDrag():this._dialogTitlebar.removeClass("e-draggable");break;case"enableResize":this.model.enableResize=i[r];i[r]?this._enableResize():(this._ejDialog.removeClass("e-resizable"),this._ejDialog.find(".e-resize-handle").remove());this._reRenderScroller();break;case"showHeader":this.model.showHeader=i[r];i[r]?(this._renderTitleBar(),this._iconsRender(this.model.actionButtons),this.model.faviconCSS&&(this._dialogFavIcon=!1,this._favIcon()),this._enableDrag(),this._maximize||this._updateScroller(this._ejDialog.outerHeight(!0)-this._dialogTitlebar.outerHeight(!0),this._ejDialog.width()-2)):(this._ejDialog.find(".e-titlebar").remove(),this._maximize?this.refresh():this._updateScroller(this._ejDialog.outerHeight(!0),this._ejDialog.width()-2));this._roundedCorner(this.model.showRoundedCorner);this.model.showFooter&&this._setContainerSize()._resetScroller();break;case"showFooter":this.model.showFooter=i[r];i[r]?(this._appendContent(),this._ejDialog.find(".e-resizable").remove()):this._ejDialog.find(".e-footerbar").remove();this._enableResize()._enableDrag()._sizeInPercent();this._reRenderScroller();this._setContainerSize()._resetScroller();this._roundedCorner(this.model.showRoundedCorner);break;case"footerTemplateId":this.model.footerTemplateId=i[r];this.model.showFooter&&(n(".e-footerbar").empty(),u=n("body").find("#"+this.model.footerTemplateId).html(),this._dialogFooterbar.append(u),this._enableResize());break;case"enableRTL":this.model.enableRTL=i[r];this.model.faviconCSS&&this._favIcon();i[r]?(this._ejDialog.addClass("e-rtl"),this.iframe&&this.iframe.contents().find("body").css("direction","rtl"),this.scroller&&this._resetScroller()):(this._ejDialog.removeClass("e-rtl"),this.iframe&&this.iframe.contents().find("body").css("direction","ltr"),this.scroller&&this._resetScroller());break;case"actionButtons":t.isNullOrUndefined(this._dialogTitlebar)||(this._removeAllIcons(),this._iconsRender(i[r]));this.model.actionButtons=i[r];this._updateCaptionWidth();break;case"enableModal":this._enableModal(i[r]);break;case"htmlAttributes":this._addAttr(i[r])}},_destroy:function(){this._overLay&&this._overLay.remove();this._cloneElement.appendTo(this._ejDialog.parent());this._ejDialog.remove();this._cloneElement.removeClass("e-dialog");this.element=this._cloneElement;this._isOpen=!1},keyConfigs:[37,38,39,40],_init:function(){this._init=!0;this._widthPercent=null;this._heightPercent=null;this._windowSize={outerWidth:n(window).outerWidth(),outerHeight:n(window).outerHeight()};this._initSize={width:this.model.width,height:this.model.height};this._sizeType={width:isNaN(this.model.width)?this.model.width.match(/px|%|auto/g)[0]:null,height:isNaN(this.model.height)?this.model.height.match(/px|%|auto/g)[0]:null};this._isOpen=this._maximize=this._minimize=!1;this.localizedLabels=this._getLocalizedLabels();this._setLocaleCulture(this.localizedLabels);this._setDimension();this.model.close||(this.model.close=this.model.Close);this.model.target||(this.model.target=this.model.content);this._responsive();this._renderControl();this._wireEvents();scrObj=this._ejDialog.closest(".e-dialog.e-js").data("ejDialog");scrObj&&scrObj._resetScroller();this.hidden=!1;this._init=!1},_responsive:function(){this.width=this.model.width;n(this.element).width(this.width);this.height=this.model.height;n(this.element).height(this.height);n(window).on("resize",n.proxy(this._resizeHandler,this))},_resizeHandler:function(){this._maximize&&(this.width=n(this._dialogTitlebar).outerWidth(),n(this.contentDiv).width(this.width),n(this.contentDiv).children().width(this.width),this.model.height=this.height=n(window).height(),this._ejDialog.css({height:this.height}),this.contentDiv.height(this._ejDialog.height()-n(this._dialogTitlebar).outerHeight()-n(this._dialogFooterbar).outerHeight()),this.element.height(this.contentDiv.height()));this._resetScroller()},_setLocaleCulture:function(n){this.defaults.closeIconTooltip===this.model.closeIconTooltip&&(this.model.closeIconTooltip=n.closeIconTooltip);JSON.stringify(this.model.tooltip)===JSON.stringify(this.defaults.tooltip)&&(this.model.tooltip=n.tooltip)},_setDragArea:function(i){t.isNullOrUndefined(i)?this._target=null:typeof i=="string"?(i=="parent"&&(this._target=n(this.element).parent()),i.toLowerCase()=="document"&&(this._target=n(document)),i.toLowerCase()=="window"?this._target=n(window):n(i).length>0&&(this._target=n(i))):typeof i=="object"?i.length>0&&(this._target=i):this._target=null},_addAttr:function(t){var i=this;n.map(t,function(n,t){t=="class"?i._ejDialog.addClass(n):t=="disabled"&&n=="disabled"?(i.model.enabled=!1,i._enabledAction(!1)):i._ejDialog.attr(t,n)})},_tooltipText:function(t){n.extend(this.model.tooltip,t);this._dialogClose.hasClass("e-close")&&this._dialogClose.attr("title",this.model.tooltip.close);this._dialogCollapsible.hasClass("e-arrowhead-up")&&this._dialogCollapsible.attr("title",this.model.tooltip.collapse);this._dialogCollapsible.hasClass("e-arrowhead-down")&&this._dialogCollapsible.attr("title",this.model.tooltip.expand);this._dialogMaximize.hasClass("e-maximize")&&this._dialogMaximize.attr("title",this.model.tooltip.maximize);this._dialogMaximize.hasClass("e-restore")&&this._dialogMaximize.attr("title",this.model.tooltip.restore);this._dialogMinimize.hasClass("e-minus")&&this._dialogMinimize.attr("title",this.model.tooltip.minimize);this._dialogMinimize.hasClass("e-restore")&&this._dialogMinimize.attr("title",this.model.tooltip.restore);this._dialogPin.hasClass("e-unpin")&&this._dialogPin.attr("title",this.model.tooltip.pin);this._dialogPin.hasClass("e-pin")&&this._dialogPin.attr("title",this.model.tooltip.unPin)},_renderControl:function(){var i,r,u;this._cloneElement=this.element.clone();this.element.attr("tabindex",0).attr({role:"dialog","aria-labelledby":this.element.prop("id")+"_title"});this._ejDialog=t.buildTag("div.e-dialog e-widget e-box "+this.model.cssClass+" e-dialog-wrap e-shadow#"+(this.element.prop("id")==""?"":this.element.prop("id")+"_wrapper"),"",{display:"none",zIndex:this.model.zIndex},{tabindex:0});this.model.isResponsive&&this._ejDialog.addClass("e-dialog-resize");this.wrapper=this._ejDialog;this._addAttr(this.model.htmlAttributes);this._setDragArea(this.model.containment);t.isNullOrUndefined(this.model.containment)||t.isNullOrUndefined(this._target)?t.isNullOrUndefined(this.model.target)||(i=this.model.target):i=this._target;r=t.isNullOrUndefined(i)?document.body:i;u=n(r).find("#"+this._id+"_wrapper").get(0);u&&n(u).remove();this._ejDialog.appendTo(r);this.model.enableRTL&&this._ejDialog.addClass("e-rtl");this.model.showHeader&&(this._renderTitleBar(),this._iconsRender(this.model.actionButtons),this.model.faviconCSS&&this._favIcon());this._appendContent(this.model.contentType);this._enableResize()._enableDrag()._setSize()._sizeInPercent();this.model.contentType!="ajax"&&(this.model.showOnInit&&this.open()?this._setContainerSize()._resetScroller():this._setHiddenDialogSize());this._roundedCorner(this.model.showRoundedCorner);this._enabledAction(this.model.enabled);this._sizeType.width=="auto"&&(this._maxWidth=this.model.width);this._sizeType.height=="auto"&&(this._maxHeight=this.model.height)},_setContainerSize:function(){if(this.model.height!="auto"){var t=this._ejDialog.outerHeight()-(this.model.showHeader?n(this._ejDialog.find("div.e-titlebar")).outerHeight(!0):0)+(this.model.showFooter?n(this._ejDialog.find("div.e-footerbar")).outerHeight(!0):0)-1;this.contentDiv.height(t);this.element.outerHeight(t)}return this},_changeSize:function(){this._initSize={width:this.model.width,height:this.model.height};this._sizeType.width=isNaN(this.model.width)?this.model.width.match(/px|%|auto/g):null;this._sizeType.height=isNaN(this.model.height)?this.model.height.match(/px|%|auto/g):null;this._setSize()._sizeInPercent()._setContainerSize()._resetScroller()},_enableDrag:function(){return this.model.allowDraggable&&this.model.showHeader&&(this._dialogTitlebar.addClass("e-draggable"),this._dragDialog()),this},_enableResize:function(){if(this.model.enableResize){this._ejDialog.addClass("e-resizable");var n=t.buildTag("div.e-icon e-resize-handle");this.model.showFooter?n.appendTo(this._dialogFooterbar):n.appendTo(this._ejDialog);this._resizeDialog()}return this},_changeSkin:function(n){this.model.cssClass!=n&&this._ejDialog.removeClass(this.model.cssClass).addClass(n)},_enableModal:function(n){n?this._isOpen&&this._createOverlay():this._overLay&&this._overLay.remove()},_enabledAction:function(n){n?(this._ejDialog.removeClass("e-disable"),this.wrapper.children(".e-disable-overlay").remove(),t.isNullOrUndefined(this.scroller)||this.scroller.enable()):(this._ejDialog.addClass("e-disable"),t.buildTag("div.e-disable-overlay").appendTo(this.wrapper),t.isNullOrUndefined(this.scroller)||this.scroller.disable())},_renderTitleBar:function(){this._elementTitle=this.element.attr("title");typeof this._elementTitle!="string"&&(this._elementTitle="");this.model.title=this.model.title||this._elementTitle;this._dialogTitlebar=t.buildTag("div#"+this.element.prop("id")+"_title.e-titlebar e-header e-dialog").prependTo(this._ejDialog);this._addTitleText()},_renderFooterBar:function(){this._dialogFooterbar=t.buildTag("div#"+this.element.prop("id")+"_foot.e-footerbar e-dialog e-js").appendTo(this._ejDialog)},_addTitleText:function(){return this.model.title&&(this._titleText=t.buildTag("span.e-title",this.model.title).prependTo(this._dialogTitlebar)),this},_updateCaptionWidth:function(){var n=this.model.faviconCSS&&!t.isNullOrUndefined(this._dialogFavIcon)?this._dialogFavIcon.outerWidth():0;return this._titleText&&this._titleText.css("max-width",this._dialogTitlebar.width()-20-this._dialogTitlebar.find(".e-dialog-icon").width()*this._dialogTitlebar.find(".e-dialog-icon").length-n),this},_iconsRender:function(i){for(var r=0;r<i.length;r++)switch(t.browserInfo().name=="msie"&&t.browserInfo().version<=8?n.trim(i[r]):i[r].trim()){case"close":this._closeIcon();break;case"collapse":case"collapsible":this._collapsibleIcon();break;case"maximize":this._maximizeIcon();break;case"minimize":this._minimizeIcon();break;case"pin":this._pinIcon();break;default:this._customIconsRender(i[r])}},_customIconsRender:function(n){this._customIcon=t.util.buildTag("div#"+this.element[0].id+"_"+n+"button.e-dialog-icon e-icon e-"+n,null,null).attr("tabIndex","0").attr("title",n);this._customIcon.appendTo(this._dialogTitlebar);this._on(this._customIcon,"touchstart click",this._iconClick)},_iconClick:function(){if(!this.element.hasClass("e-disable")){var t={cancel:!1,buttonID:n(event.target).attr("id"),event:event.type,model:this.model,currentTarget:event.currentTarget.title};this._trigger("actionButtonClick",t)}},_removeAllIcons:function(){this._dialogTitlebar.find("div.e-dialog-icon").remove()},_appendContent:function(i){var r,u,f,e,o;if(this.contentDiv=t.isNullOrUndefined(this.contentDiv)?t.buildTag("div.e-dialog-scroller"):this.contentDiv,this.element.removeAttr("title").addClass("e-widget-content e-box"),r=this,t.isNullOrUndefined(this.model.contentUrl)||t.isNullOrUndefined(i))this.dialogIframeContent=this.element.children().find("iframe").contents()[0],t.isNullOrUndefined(this.dialogIframeContent)?this.element.show().appendTo(this.contentDiv):this.element.show().appendTo(this.contentDiv).find("iframe").append(this.dialogIframeContent.lastChild);else if(i=="ajax")this.model.ajaxSettings.url=this.model.contentUrl,this._sendAjaxOptions(this.element,this.model.ajaxSettings.url);else if(i=="iframe")this.element.children(".e-iframe").length>0?(this.iframe=this.element.find("iframe.e-iframe"),this.iframe.attr("src",this.model.contentUrl)):(this.iframe=t.buildTag("iframe.e-iframe","",{width:"100%",height:"100%"},{scrolling:"auto",frameborder:0,src:this.model.contentUrl}),this.element.appendTo(this.contentDiv).append(this.iframe).show()),this.model.enableRTL&&n(this.iframe).load(function(){r.iframe.contents().find("body").css("direction","rtl")}),this._trigger("contentLoad",{contentType:i,url:this.model.contentUrl});else if(i=="image"){u=t.buildTag("img.e-images","","",{src:this.model.contentUrl});this.element.append(u).show().appendTo(this.contentDiv);n(u).on("load",function(){r._dialogPosition()});this._trigger("contentLoad",{contentType:i,url:this.model.contentUrl})}else this.element.show().appendTo(this.contentDiv);this._ejDialog.find("div.e-resize-handle").length>0?this.contentDiv.insertBefore(this._ejDialog.find("div.e-resize-handle")):(f=this.element.children().find("iframe").contents()[0],t.isNullOrUndefined(f)?this.contentDiv.appendTo(this._ejDialog):(this.contentDiv.appendTo(this._ejDialog),e=n("#"+this.contentDiv.find("iframe").attr("id")),setTimeout(function(){n(e[0].contentDocument.lastChild).remove();e[0].contentDocument.appendChild(f)},500)));this.model.showFooter&&(this._renderFooterBar(),this.model.footerTemplateId!=null&&(o=n("body").find("#"+this.model.footerTemplateId).html(),this._dialogFooterbar.append(o)))},_roundedCorner:function(n){this._ejDialog[n?"addClass":"removeClass"]("e-corner");this.contentDiv.removeClass("e-dialog-top e-dialog-bottom e-dialog-content");this.model.showRoundedCorner&&(this.model.showHeader&&!this.model.showFooter?this.contentDiv.addClass("e-dialog-bottom"):!this.model.showHeader&&this.model.showFooter?this.contentDiv.addClass("e-dialog-top"):!this.model.showHeader&&!this.model.showFooter?this.contentDiv.addClass("e-dialog-content"):!0)},_reRenderScroller:function(){if(this.scroller!=i&&(this.scroller.refresh(),!this.model.enableRTL)){if(this.scroller._vScrollbar&&this.scroller._vScrollbar._scrollData&&this.model.enableResize){if(this.model.showFooter)var r=this.scroller._vScrollbar.element.find("> div.e-vscroll").height(),t=0,n=0;else var r=this.scroller._vScrollbar.element.find("> div.e-vscroll").height(),t=2,n=this._ejDialog.find("div.e-resize-handle").outerHeight();Math.floor(this.contentDiv.outerHeight())===Math.floor(this.scroller._vScrollbar.model.height+1)&&(this.scroller._vScrollbar.model.height-=n+t,this.scroller._vScrollbar._scrollData.handle-=n,this.scroller._vScrollbar._scrollData.handleSpace-=n+t,this.scroller._vScrollbar._updateLayout(this.scroller._vScrollbar._scrollData),this.scroller._vScrollbar.element.find("> div.e-vscroll").height(r-n-t))}if(!(this.scroller._vScrollbar&&this.scroller._vScrollbar._scrollData)&&this.scroller._hScrollbar&&this.scroller._hScrollbar._scrollData&&this.model.enableResize){if(this.model.showFooter)var u=this.scroller._hScrollbar.element.find("> div.e-hscroll").width(),t=0,n=0;else var u=this.scroller._hScrollbar.element.find("> div.e-hscroll").width(),t=2,n=this._ejDialog.find("div.e-resize-handle").outerWidth();this.scroller._hScrollbar.model.width-=n+t;this.scroller._hScrollbar._scrollData.handle-=n+t;this.scroller._hScrollbar._scrollData.handleSpace-=n+t;this.scroller._hScrollbar._updateLayout(this.scroller._hScrollbar._scrollData);this.scroller._hScrollbar.element.find("> div.e-hscroll").width(u-n-t)}}},_dialogMaxZindex:function(){var u=this.element.parents(),i,r,t;return i=n("body").children(),index=i.index(this.popup),i.splice(index,1),n(i).each(function(n,t){u.push(t)}),r=n(this.model.target).children(),cindex=r.index(this.popup),r.splice(cindex,1),n(r).each(function(n,t){u.push(t)}),t=Math.max.apply(t,n.map(u,function(t){if(n(t).css("position")!="static")return parseInt(n(t).css("z-index"))||1})),!t||t<1e4?t=1e4:t+=1,t},_setZindex:function(){var n=this._dialogMaxZindex();this.model.zIndex<=n&&this._ejDialog.css({zIndex:n+1})},_createOverlay:function(){var u=this._ejDialog.css("zIndex"),i,r;t.isNullOrUndefined(this._overLay)||this._overLay.remove();this._overLay=t.buildTag("div#"+this.element.attr("id")+"_overLay.e-overlay","",{zIndex:u-1});t.isNullOrUndefined(this.model.containment)||t.isNullOrUndefined(this._target)?t.isNullOrUndefined(this.model.target)||(i=this.model.target):i=this._target;this._overLay.appendTo(t.isNullOrUndefined(i)?document.body:i);var r=!t.isNullOrUndefined(this.model.containment)&&!t.isNullOrUndefined(this._target)?"absolute":"fixed",f=t.isNullOrUndefined(i)||r=="fixed"?0:n(i).css("position").toLowerCase()!="static"?0:n(i).offset().left,e=t.isNullOrUndefined(i)||r=="fixed"?0:n(i).css("position").toLowerCase()!="static"?0:n(i).offset().top;this._overLay.css({top:e,left:f,position:r})},_sendAjaxOptions:function(t,i){t.addClass("e-load");var r=this,u=this.model.title,e=i,f={success:function(n){try{r._ajaxSuccessHandler(n,t,i,u)}catch(f){}},error:function(n){try{r._ajaxErrorHandler({status:n.status,responseText:n.responseText,statusText:n.statusText},t,i,u)}catch(n){}},complete:function(){try{r._setContainerSize();r._resetScroller();r.model.showOnInit||r._setHiddenDialogSize()}catch(n){}}};n.extend(!0,f,this.model.ajaxSettings);this._sendAjaxRequest(f)},_setHiddenDialogSize:function(){this._isOpen||(this._ejDialog.css({display:"block",visibility:"hidden"}),this._setContainerSize()._resetScroller(),this._ejDialog.css({display:"none",visibility:""}))},_sendAjaxRequest:function(t){n.ajax({type:t.type,cache:t.cache,url:t.url,dataType:t.dataType,data:t.data,contentType:t.contentType,async:t.async,success:t.success,error:t.error,beforeSend:t.beforeSend,complete:t.complete})},_ajaxSuccessHandler:function(n,t,i){t.removeClass("e-load");t.html(n).addClass("e-dialog-loaded").appendTo(this._ejDialog);t.appendTo(this.contentDiv);this._dialogPosition();this.model.showOnInit&&this.open();this._trigger("ajaxSuccess",{data:n,url:i})},_ajaxErrorHandler:function(n,t,i){t.addClass("e-dialog-loaded").appendTo(this.contentDiv);this._dialogPosition().open();this._trigger("ajaxError",{data:n,url:i})},_closeIcon:function(){this._dialogClose=t.util.buildTag("div#"+this.element[0].id+"_closebutton.e-dialog-icon e-icon e-close",null,null).attr("tabIndex","0");this.model.closeIconTooltip=="close"&&this.model.tooltip.close=="Close"?this._dialogClose.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.close):this.model.closeIconTooltip!="close"&&this.model.tooltip.close=="Close"?this._dialogClose.appendTo(this._dialogTitlebar).attr("title",this.model.closeIconTooltip):this.model.closeIconTooltip=="close"&&this.model.tooltip.close!="Close"?this._dialogClose.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.close):this._dialogClose.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.close);this._on(this._dialogClose,"touchstart click",this._closeClick)},_collapsibleIcon:function(){this._dialogCollapsible=t.util.buildTag("div#"+this.element[0].id+"_collapsbutton.e-dialog-icon e-icon",null,null).attr("tabIndex","0");this._collapsible?this._dialogCollapsible.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.expand).addClass("e-arrowhead-down").removeClass("e-arrowhead-up"):this._dialogCollapsible.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.collapse).addClass("e-arrowhead-up").removeClass("e-arrowhead-down");this._on(this._dialogCollapsible,"touchstart click",this._collapsibleClick)},_maximizeIcon:function(){this._dialogMaximize=t.util.buildTag("div#"+this.element[0].id+"_maximizebutton.e-dialog-icon e-icon",null,null).attr("tabIndex","0");this._maximize?this._dialogMaximize.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.restore).addClass("e-restore").removeClass("e-maximize"):this._dialogMaximize.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.maximize).addClass("e-maximize").removeClass("e-restore");this._on(this._dialogMaximize,"touchstart click",this._maximizeClick)},_minimizeIcon:function(){this._dialogMinimize=t.util.buildTag("div#"+this.element[0].id+"_minimizebutton.e-dialog-icon e-icon",null,null).attr("tabIndex","0");this._minimize?this._dialogMinimize.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.restore).addClass("e-restore").removeClass("e-minus"):this._dialogMinimize.appendTo(this._dialogTitlebar).attr("title",this.model.tooltip.minimize).addClass("e-minus").removeClass("e-restore");this._on(this._dialogMinimize,"touchstart click",this._minimizeClick)},_pinIcon:function(){this._dialogPin=t.util.buildTag("div#"+this.element[0].id+"_pinbutton.e-dialog-icon e-icon",null,null).attr("tabIndex","0");this._dialogPin.appendTo(this._dialogTitlebar).attr("title",this.dialogPin?this.model.tooltip.unPin:this.model.tooltip.pin).addClass(this.dialogPin?"e-pin":"e-unpin").removeClass(this.dialogPin?"e-unpin":"e-pin");this._on(this._dialogPin,"touchstart click",this._pinClick)},_favIcon:function(){if(this._dialogFavIcon)n=this._dialogFavIcon.find("span").removeClass().addClass("e-dialog-custom");else{this._dialogFavIcon=t.util.buildTag("div.e-dialog-favicon","",{},{style:"float:"+(this.model.enableRTL?"right":"left")});var n=t.util.buildTag("span.e-dialog-custom","",{},{role:"presentation"});n.appendTo(this._dialogFavIcon);this._dialogFavIcon.appendTo(this._dialogTitlebar)}this.model.faviconCSS?n.addClass(this.model.faviconCSS):this._dialogFavIcon.remove();this._dialogFavIcon.css("float",this.model.enableRTL?"right":"left")},_minMaxValidation:function(){var r=parseInt(this.model.minWidth),u=parseInt(this.model.minHeight),n=parseInt(this.model.maxWidth),t=parseInt(this.model.maxHeight),f=parseInt(this.model.width),e=parseInt(this.model.height),i=this._getParentObj();isNaN(this.model.minWidth)&&this.model.minWidth.indexOf("%")>0&&(r=this._convertPercentageToPixel(i.outerWidth(),r));isNaN(this.model.minHeight)&&this.model.minHeight.indexOf("%")>0&&(u=this._convertPercentageToPixel(i.outerHeight(),u));isNaN(this.model.maxWidth)&&this.model.maxWidth.indexOf("%")>0&&(n=this._convertPercentageToPixel(i.innerWidth(),n));isNaN(this.model.maxHeight)&&this.model.maxHeight.indexOf("%")>0&&(t=this._convertPercentageToPixel(i.innerHeight(),t));isNaN(this.model.width)&&this.model.width.indexOf("%")>0&&(f=this._convertPercentageToPixel(i.innerWidth(),f));isNaN(this.model.height)&&this.model.height.indexOf("%")>0&&(e=this._convertPercentageToPixel(i.innerHeight(),e));(n&&f>n||r&&f<r)&&(this.model.width=f>n?n:r);(t&&e>t||u&&e<u)&&(this.model.height=e>t?t:u)},_setSize:function(){var n=this.model;return this._minMaxValidation(),this._ejDialog.css({width:n.width,minWidth:n.minWidth,maxWidth:n.maxWidth}),this._ejDialog.css({height:n.height,minHeight:n.minHeight,maxHeight:n.maxHeight}),this._dialogPosition(),this},_resetScroller:function(){this.element.css({height:"auto","max-width":"","max-height":"",width:""});var u=this._ejDialog.outerHeight(!0)-(this.model.showHeader?n(this._ejDialog.find("div.e-titlebar")).outerHeight(!0):0)-(this.model.showFooter?n(this._ejDialog.find("div.e-footerbar")).outerHeight(!0):0),r,i={width:this._ejDialog.width()-2,enableRTL:this.model.enableRTL,height:u,enableTouchScroll:!1};this.model.height=="auto"&&(this.element.height()<this.model.maxHeight||!this.model.maxHeight)&&!this._maximize&&(i.height="auto");this.model.width!="auto"||this._maximize||(i.width=this.model.width);this.contentDiv.ejScroller(i);this.scroller=this.contentDiv.data("ejScroller");this._reRenderScroller();this._padding=parseInt(n(this.element).css("padding-top"))+parseInt(n(this.element).css("padding-bottom"));n(this._ejDialog).css("display")=="none"&&(this.hidden=!0,this._ejDialog.css({display:"block"}));!t.isNullOrUndefined(this.contentDiv.height())&&this.contentDiv.height()>0&&(r=t.isNullOrUndefined(this.scroller)?this.contentDiv.outerHeight()-this._padding:!this.scroller._hScrollbar&&this.scroller._vScrollbar?this.contentDiv.outerHeight():this.scroller._hScrollbar?this.contentDiv.outerHeight()-this.scroller.model.buttonSize:this.contentDiv.outerHeight(),this.model.height!="auto"&&this.model.height!="100%"?this.element.css({height:r}):this.element.css("height",this.model.height),this.model.height!="auto"&&this.model.height!="100%"||this.scroller._vScrollbar||this.element.css({"min-height":this.model.minHeight-(this.model.showHeader?n(this._ejDialog.find("div.e-titlebar")).outerHeight(!0):0)}),this.scroller._vScrollbar||this.model.width=="auto"||this.model.width=="100%"?this.scroller._vScrollbar||this.element.css("width",this.model.width):this.element.outerWidth(this._ejDialog.width()-2),this.element.css({"max-width":this.model.maxWidth,"max-height":this.model.maxHeight}));this.hidden&&this._ejDialog.css({display:"none"});this.hidden=!1},_updateScroller:function(n,t){this.contentDiv.ejScroller({width:t,height:n,enableRTL:this.model.enableRTL,enableTouchScroll:!1});this.scroller=this.contentDiv.data("ejScroller");this._reRenderScroller();this._changeSize()},_dragDialog:function(){var i=this,r=this._ejDialog.parents(".e-dialog-scroller");return this._dialogTitlebar.ejDraggable({handle:".e-titlebar",cursorAt:{top:0,left:0},dragArea:i._target,dragStart:function(n){return(n.element.attr("aria-grabbed",!0),i._clickHandler(),i.dialogPin||!i.model.allowDraggable||!i.model.enabled)?(n.cancel=!0,!1):i._trigger("dragStart",{event:n})?(n.cancel=!0,!1):void 0},drag:function(n){i._trigger("drag",{event:n})},dragStop:function(r){i._ejDialog.focus();r.element.attr("aria-grabbed",!1);i.element.find("> .e-draggable.e-titlebar")&&(dragobject=n("#"+i.element.find("> .e-draggable.e-titlebar").attr("id")).data("ejDraggable"),dragobject&&dragobject.option("cursorAt",i.element.offset()));var u=this.helper.offsetParent().offset();i._trigger("dragStop",{event:r});i.model.position.X=t.isNullOrUndefined(this.position.left)?parseInt(this.helper.css("left")):this.position.left-[u.left+parseFloat(this.helper.offsetParent().css("border-left-width"))];i.model.position.Y=t.isNullOrUndefined(this.position.top)?parseInt(this.helper.css("top")):this.position.top-[u.top+parseFloat(this.helper.offsetParent().css("border-top-width"))]},helper:function(){return n(i._ejDialog).addClass("dragClone")}}),this},_resizeDialog:function(){if(this.model.enableResize){var t=this,r=!1,i,u=parseInt(this.model.minWidth),f=parseInt(this.model.minHeight),e=parseInt(this.model.maxWidth),o=parseInt(this.model.maxHeight);return i=this._getParentObj(),isNaN(this.model.minWidth)&&this.model.minWidth.indexOf("%")>0&&(u=this._convertPercentageToPixel(i.outerWidth(),u)),isNaN(this.model.minHeight)&&this.model.minHeight.indexOf("%")>0&&(f=this._convertPercentageToPixel(i.outerHeight(),f)),isNaN(this.model.maxWidth)&&this.model.maxWidth.indexOf("%")>0&&(e=this._convertPercentageToPixel(i.innerWidth(),e)),isNaN(this.model.maxHeight)&&this.model.maxHeight.indexOf("%")>0&&(o=this._convertPercentageToPixel(i.innerHeight(),o)),this._ejDialog.find("div.e-resize-handle").ejResizable({minHeight:f,minWidth:u,maxHeight:o,maxWidth:e,handle:"e-widget-content",resizeStart:function(n){if(!t.model.enabled)return!1;r||t._trigger("resizeStart",{event:n});r=!0;t.model.position={X:t._ejDialog.css("left"),Y:t._ejDialog.css("top")};t._dialogPosition()},resize:function(i){var r=n(i.element).parents("div.e-dialog-wrap");t.model.height=n(r).outerHeight();t.model.width=n(r).outerWidth();t._setSize();t._setContainerSize();t._resetScroller();t._updateCaptionWidth();t._trigger("resize",{event:i});t._sizeType={width:"px",height:"px"};scrObj=t._ejDialog.closest(".e-dialog.e-js").data("ejDialog");scrObj&&scrObj._resetScroller()},resizeStop:function(i){t._ejDialog.focus();t._sizeInPercent();var u=n(i.element).parents("div.e-dialog-wrap");t.model.height=n(u).outerHeight();t.model.width=n(u).outerWidth();t._setSize();t._setContainerSize();t._resetScroller();r&&t._trigger("resizeStop",{event:i});r=!1;t._setDimension()},helper:function(){return n(t._ejDialog)}}),this}},_dialogPosition:function(){return this._ejDialog.parents("form").length>0&&t.isNullOrUndefined(this.model.containment)&&t.isNullOrUndefined(this.model.target)&&this._ejDialog.appendTo(this._ejDialog.parents("form")),this.model.position.X!=""||this.model.position.Y!=""?(this._ejDialog.css("position","absolute"),this._ejDialog.css("left",this.model.position.X),this._ejDialog.css("top",this.model.position.Y)):this._centerPosition(),this},_centerPosition:function(){var r=0,u=0,i,f,e,o;t.isNullOrUndefined(this.model.target)&&(t.isNullOrUndefined(this._target)||n(this._target).is(n(document))||n(this._target).is(n(window)))?(o=document.documentElement,r=(n(window).outerWidth()>this._ejDialog.width()?(n(window).outerWidth()-this._ejDialog.outerWidth())/2:0)+(window.pageXOffset||o.scrollLeft),u=(n(window).outerHeight()>this._ejDialog.height()?(n(window).outerHeight()-this._ejDialog.outerHeight())/2:0)+(window.pageYOffset||o.scrollTop)):(i=t.isNullOrUndefined(this._target)?n(this.model.target):n(this._target),i.css("position")=="static"&&(f=i.offsetParent().offset(),e=i.offset(),r=e.left-f.left,u=e.top-f.top),i.outerWidth()>this._ejDialog.width()&&(r+=(i.outerWidth()-this._ejDialog.width())/2),i.outerHeight()>this._ejDialog.height()&&(u+=(i.outerHeight()-this._ejDialog.height())/2));this._ejDialog.css({top:u,left:r});this._ejDialog.css("position","absolute")},_closeClick:function(n){this.model.enabled&&(n.stopPropagation(),this.close(n))},_collapsibleClick:function(t){this.model.enabled&&(n(t.target).hasClass("e-arrowhead-up")?this._actionCollapse(t):n(t.target).hasClass("e-arrowhead-down")&&this._actionExpand(t))},_actionCollapse:function(n){this._minimize||(this._dialogCollapsible&&this._dialogCollapsible.removeClass("e-arrowhead-up").addClass("e-arrowhead-down"),this._dialogCollapsible&&this._dialogCollapsible.attr("title",this.model.tooltip.expand),this._ejDialog.find("div.e-resize-handle").hide(),this._ejDialog.find(".e-widget-content").parent().slideUp("fast"),this.model.showFooter&&this._dialogFooterbar.slideUp("fast"),this._ejDialog.removeClass("e-shadow"),this._ejDialog.css("minHeight","0"),this._ejDialog.height("auto"),this._trigger("collapse",{isInteraction:n?!0:!1}),this._collapsible=!0)},_actionExpand:function(n){this._minimize||(this._dialogCollapsible&&this._dialogCollapsible.removeClass("e-arrowhead-down").addClass("e-arrowhead-up"),this._dialogCollapsible&&this._dialogCollapsible.attr("title",this.model.tooltip.collapse),this._ejDialog.addClass("e-shadow"),this._ejDialog.find(".e-widget-content").parent().slideDown("fast"),this.model.showFooter&&this._dialogFooterbar.slideDown("fast"),this._maximize?(this._ejDialog.css({width:"100%",height:"100%"}),this.element.css({width:"100%",height:"100%"}),this.contentDiv.css({width:"100%",height:"100%"})):this._ejDialog.height(this.model.height),this._ejDialog.find("div.e-resize-handle").show(),this._trigger("expand",{isInteraction:n?!0:!1}),this._collapsible=!1)},_maximizeClick:function(i){if(this.model.enabled){var r=n(i.target),u=this._dialogMaximize;r.hasClass("e-maximize")?(this._actionMaximize(),this._dialogTitlebar&&(this._dialogTitlebar.find(".e-restore").removeClass("e-restore").addClass("e-minus"),this._dialogMinimize&&this._dialogMinimize.attr("title",this.model.tooltip.minimize)),r.removeClass("e-maximize").addClass("e-restore"),this._dialogMaximize.attr("title",this.model.tooltip.restore),this._hideIcon(!0)):r.hasClass("e-restore")&&(this._actionRestore(),r.removeClass("e-restore").addClass("e-maximize"),this._dialogMaximize.attr("title",this.model.tooltip.maximize),!t.isNullOrUndefined(u)&&n(u).hasClass("e-arrowhead-down")&&(n(u).removeClass("e-arrowhead-down").addClass("e-arrowhead-up"),this._dialogMaximize.attr("title",this.model.tooltip.collapse)),this._hideIcon(!0))}this._resetScroller()},_actionMaximize:function(){this._ejDialog.css("top","0px").css("left","0px").css("overflow","hidden").css("position",this.model.containment?"absolute":this.model.target?"absolute":"fixed");this._ejDialog.css({width:"100%",height:"100%"});this.element.css({width:"100%",height:"100%"});this.contentDiv.css({width:"100%",height:"100%"});this._maximize=!0;this._minimize=!1;var n=this;this._dialogCollapsible&&!t.isNullOrUndefined(this._dialogCollapsible.hasClass("e-arrowhead-down"))&&(this._dialogCollapsible.removeClass("e-arrowhead-down").addClass("e-arrowhead-up"),this._dialogCollapsible.attr("title",this.model.tooltip.collapse),this._collapseValue=!0);this._collapseValue==!0&&this._ejDialog.find(".e-widget-content").parent().slideDown("fast",function(){n.refresh();n._reRenderScroller()});this._resetScroller()},_actionRestore:function(){this.element.height("").width("");this.contentDiv.height("").width("");this._restoreDialog();this._maximize=this._minimize=!1},_minimizeClick:function(i){if(this.model.enabled){var r=n(i.target),u=this._dialogMinimize.hasClass("e-icon")&&this._dialogMinimize;r.hasClass("e-minus")?(this._maximize&&this._setSize(),this._actionMinimize()):r.hasClass("e-restore")&&(this._actionRestore(),r.removeClass("e-restore").addClass("e-minus"),this._dialogMinimize.attr("title",this.model.tooltip.minimize),!t.isNullOrUndefined(u)&&n(u).hasClass("e-arrowhead-down")&&(n(u).removeClass("e-arrowhead-down").addClass("e-arrowhead-up"),this._dialogMinimize.attr("title",this.model.tooltip.collapse)),this._hideIcon(!0))}},_actionMinimize:function(){var i=n(window).height()-this._ejDialog.height()+this.element.height()+14,t;this._ejDialog.css("top","").css("bottom","0").css("left","0").css("position",this.model.containment?"absolute":this.model.target?"absolute":"fixed");this._ejDialog.css("minHeight","0");this._dialogTitlebar?(this._dialogTitlebar.find(".e-restore").removeClass("e-restore").addClass("e-maximize"),this._dialogMaximize&&this._dialogMaximize.attr("title",this.model.tooltip.maximize),this._dialogTitlebar.find(".e-minus").removeClass("e-minus").addClass("e-restore"),this._dialogMinimize&&this._dialogMinimize.attr("title",this.model.tooltip.restore),this._isOpen?t=this._dialogTitlebar.outerHeight():(this._ejDialog.css({display:"block",visibility:"hidden"}),t=this._dialogTitlebar.outerHeight(),this._ejDialog.css({display:"none",visibility:""})),this._ejDialog.css("height",t+2),this._hideIcon(!1)):this._ejDialog.css("height","");this.contentDiv.hide();this.model.showFooter&&this._dialogFooterbar.hide();this._maximize=!1;this._minimize=!0},_hideIcon:function(i){var r=this._dialogCollapsible?this._dialogCollapsible:null;i?(t.isNullOrUndefined(r)||n(r).parent(".e-dialog-icon").show(),this._ejDialog.find("div.e-resize-handle").show()):(t.isNullOrUndefined(r)||n(r).parent(".e-dialog-icon").hide(),this._ejDialog.find("div.e-resize-handle").hide())},_pinClick:function(t){if(this.model.enabled){var i=n(t.target);i.hasClass("e-unpin")?(this.dialogPin=!0,i.removeClass("e-unpin").addClass("e-pin"),this._dialogPin.attr("title",this.model.tooltip.unPin)):i.hasClass("e-pin")&&(this.dialogPin=!1,i.removeClass("e-pin").addClass("e-unpin"),this._dialogPin.attr("title",this.model.tooltip.pin))}},_restoreDialog:function(){this.contentDiv.show();this.model.showFooter&&this._dialogFooterbar.show();this._ejDialog.css({position:"absolute",bottom:""}).addClass("e-shadow");this._setSize()._resetScroller();this._dialogTitlebar&&(this._dialogTitlebar.find(".e-minus").parent().show(),this._dialogCollapsible&&(this._dialogCollapsible.removeClass("e-arrowhead-down").addClass("e-arrowhead-up"),this._dialogCollapsible.attr("title",this.model.tooltip.collapse)))},_clickHandler:function(){var n=this._dialogMaxZindex();parseInt(this._ejDialog.css("zIndex"))<n&&this._ejDialog.css({zIndex:n+1})},_mouseClick:function(t){t.currentTarget==this._id&&(n(t.target).hasClass("e-dialog")||n(t.target).hasClass("e-icon e-resize-handle"))&&(this._setZindex(),n(t.target).closest(".e-dialog.e-widget").focus())},_keyDown:function(t){code=t.keyCode?t.keyCode:t.which?t.which:t.charCode;this.model.allowKeyboardNavigation&&this.model.enabled&&n(t.target).hasClass("e-dialog")&&n.inArray(code,this.keyConfigs)>-1&&this.model.allowDraggable&&!this.dialogPin&&(this._keyPressed(code,t.ctrlKey),t.preventDefault());this.model.closeOnEscape&&code===27&&this.model.enabled&&(this.element.find(".e-js.e-dialog").first().is(":visible")||(this.close(t),t.preventDefault()));code===13&&this.model.enabled&&(n(t.target).hasClass("e-close")?this.close(t):(n(t.target).hasClass("e-arrowhead-up")||n(t.target).hasClass("e-arrowhead-down"))&&this._collapsibleClick(t),n(t.target).hasClass("e-maximize")||n(t.target).hasClass("e-restore")&&n(t.target).is(this._dialogMaximize)?this._maximizeClick(t):(n(t.target).hasClass("e-minus")||n(t.target).hasClass("e-restore")&&n(t.target).is(this._dialogMinimize))&&this._minimizeClick(t),(n(t.target).hasClass("e-pin")||n(t.target).hasClass("e-unpin"))&&this._pinClick(t));code==9&&this.model.enableModal&&this._focusOnTab(t)},_focusOnTab:function(t){var i=this._ejDialog.find("a, button, :input, select, [tabindex]:not('-1')");i=n(i).find("a, button, :input, select, [tabindex]:not('')");t.shiftKey?i[i.index(t.target)-1]||(t.preventDefault(),i.last().focus()):i[i.index(t.target)+1]||(t.preventDefault(),i[0].focus())},_keyPressed:function(n,t){switch(n){case 40:t?this._resizing("height",this._ejDialog.outerHeight()+3):this.option("position",{X:this._ejDialog.position().left,Y:this._ejDialog.position().top+3});break;case 39:t?this._resizing("width",this._ejDialog.outerWidth()+3):this.option("position",{X:this._ejDialog.position().left+3,Y:this._ejDialog.position().top});break;case 38:t?this._resizing("height",this._ejDialog.outerHeight()-3):this.option("position",{X:this._ejDialog.position().left==0?0:this._ejDialog.position().left,Y:this._ejDialog.position().top>3?this._ejDialog.position().top-3:0});break;case 37:t?this._resizing("width",this._ejDialog.outerWidth()-3):this.option("position",{X:this._ejDialog.position().left>3?this._ejDialog.position().left-3:0,Y:this._ejDialog.position().top==0?0:this._ejDialog.position().top})}},_resizing:function(n,t){this.model.enableResize&&this.option(n,t)},_sizeInPercent:function(){if(!this._enableWindowResize())return this;var n=this._getParentObj();return this._widthPercent=this._sizeType.width=="%"?parseFloat(this.model.width):this._convertPixelToPercentage(n.outerWidth(),this._ejDialog.outerWidth()),this._heightPercent=this._sizeType.height=="%"?parseFloat(this.model.height):this._convertPixelToPercentage(n.outerHeight(),this._ejDialog.outerHeight()),this._widthPercent>=100&&(this._widthPercent=100,this._ejDialog.outerWidth(n.outerWidth()),this.model.width=this._ejDialog.width()),this._heightPercent>=100&&(this._heightPercent=100,this._ejDialog.outerHeight(n.outerHeight()),this.model.height=this._ejDialog.height()),this},_getParentObj:function(){return t.isNullOrUndefined(this.model.containment)?t.isNullOrUndefined(this.model.target)?n(document):n(this.model.target):n(this.model.containment)},_convertPercentageToPixel:function(n,t){return Math.round(t*n/100)},_convertPixelToPercentage:function(n,t){return Math.round(t/n*100)},_reSizeHandler:function(){var t;if(this._maximize){this._resetScroller();return}this._minimize||this._centerPosition();t=this._getParentObj();this._change=!1;this._windowSize.outerWidth!=n(window).outerWidth()?this._sizeType.width=="%"?this._percentageWidthDimension(t):this._pixelsWidthDimension(t):this._windowSize.outerHeight!=n(window).outerHeight()&&(this._sizeType.height=="%"?this._percentageHeightDimension(t):this._pixelsHeightDimension(t));this._change&&this._resizeContainer(t);this._windowSize={outerWidth:n(window).outerWidth(),outerHeight:n(window).outerHeight()}},_setDimension:function(){t.isNullOrUndefined(this.model.maxWidth)?t.isNullOrUndefined(this._sizeType.width)?this._maxWidth=+this.model.width:(this._sizeType.width=="px"||this._sizeType.width=="auto")&&(this._maxWidth=this.model.width):this._maxWidth=this.model.maxWidth;t.isNullOrUndefined(this.model.maxHeight)?t.isNullOrUndefined(this._sizeType.height)?this._maxHeight=+this.model.height:(this._sizeType.height=="px"||this._sizeType.height=="auto")&&(this._maxHeight=this.model.height):this._maxHeight=this.model.maxHeight},_percentageWidthDimension:function(n){this._ejDialog.outerWidth(this._convertPercentageToPixel(n.outerWidth(),this._widthPercent));this._change=!0},_percentageHeightDimension:function(n){this._ejDialog.outerHeight(this._convertPercentageToPixel(n.outerHeight(),this._heightPercent));this._change=!0},_pixelsWidthDimension:function(t){n(t).outerWidth()<=this._ejDialog.outerWidth()&&this._setWidth(t);n(t).outerHeight()<=this._ejDialog.outerHeight()&&this._setHeight(t);parseInt(this._ejDialog.css("width"))<parseInt(this._maxWidth)&&(parseInt(this._maxWidth)<n(t).outerWidth()?this._ejDialog.outerWidth(parseInt(this._maxWidth)):this._ejDialog.outerWidth(t.outerWidth()),this._change=!0)},_pixelsHeightDimension:function(t){n(t).outerHeight()<=this._ejDialog.outerHeight()&&this._setHeight(t);n(t).outerWidth()<=this._ejDialog.outerWidth()&&this._setWidth(t);parseInt(this._ejDialog.css("height"))<parseInt(this._maxHeight)&&(parseInt(this._maxHeight)<n(t).outerHeight()?this._ejDialog.outerWidth(parseInt(this._maxHeight)):this._ejDialog.outerHeight(t.outerHeight()),this._change=!0)},_setWidth:function(n){this._ejDialog.outerWidth(n.outerWidth());this._change=!0},_setHeight:function(n){this._ejDialog.outerHeight(n.outerHeight());this._change=!0},_resizeContainer:function(){this.contentDiv.width(this._ejDialog.width());this.element.outerWidth(this.contentDiv.width());this.contentDiv.height(this._ejDialog.height()-(this.model.showHeader?n(this._ejDialog.find("div.e-titlebar")).outerHeight(!0):0)-1);this.element.outerHeight(this._ejDialog.height()-(this.model.showHeader?n(this._ejDialog.find("div.e-titlebar")).outerHeight(!0):0)-1);this.scroller=this.contentDiv.ejScroller({width:this._ejDialog.width()-2,height:this.element.outerHeight(),rtl:this.model.rtl,enableTouchScroll:!1});this.scroller=this.contentDiv.data("ejScroller");this._reRenderScroller();this._minimize?this._ejDialog.css("height",this._dialogTitlebar.outerHeight()):this._centerPosition();this._updateCaptionWidth();this._change=!1},_getLocalizedLabels:function(){return t.getLocalizedConstants(this.sfType,this.model.locale)},_enableWindowResize:function(){return this.model.isResponsive||isNaN(this.model.width)&&this.model.width.indexOf("%")>0&&isNaN(this.model.height)&&this.model.height.indexOf("%")>0&&this.model.height!="auto"?!0:!1},_wireResizing:function(){n(window)[this._enableWindowResize()?"on":"off"]("resize",n.proxy(this._reSizeHandler,this))},_wireEvents:function(){this._on(this._ejDialog,"keydown",this._keyDown);this._on(this._ejDialog,"click",this._mouseClick);this._wireResizing()},refresh:function(){this._resetScroller()},open:function(){var t,i,r,u;return this._isOpen?!0:!0==this._trigger("beforeOpen")?!1:(this.element.css("display","block"),this._setZindex(),this._minimize||this._maximize||this._init||this._dialogPosition(),t=this,i={},this._ejDialog.show(),this.model.enableAnimation&&(this._ejDialog.css({opacity:0}),this.model.animation.show.effect=="slide"?(u=this._ejDialog.css("left"),this._ejDialog.css({left:-this._ejDialog.width()}),i={left:u,opacity:1}):i={opacity:1}),this._ejDialog.animate(i,this.model.enableAnimation?Number(this.model.animation.show.duration):0,function(){t.model&&(t._ejDialog.css("display")=="none"&&t._ejDialog.show(),t._ejDialog.eq(0).focus(),t._ejDialog.css({opacity:""}),t.contentDiv.find("a:visible:enabled, button:visible:enabled, :input:visible:enabled, select:visible:enabled, .e-input").first().focus(),t._trigger("open"),t._updateCaptionWidth(),(t.model.maxHeight||t.model.maxWidth)&&(r=t._ejDialog.outerHeight(!0)-(t._dialogTitlebar?t._dialogTitlebar.outerHeight(!0):0),(t.model.height=="auto"||t.model.height=="100%")&&(r=t.model.height),t._updateScroller(r,t._ejDialog.width()-2)))}),this.model.enableModal==!0&&this._createOverlay(),this._isOpen=!0,this.element.find("> .e-draggable.e-titlebar")&&(dragobject=n("#"+this.element.find("> .e-draggable.e-titlebar").attr("id")).data("ejDraggable"),dragobject&&dragobject.option("cursorAt",this.element.offset())),this)},close:function(n){var t,i,r;return!this._isOpen||!this.model.enabled?!0:(t=n?!0:!1,!0==this._trigger("beforeClose",{event:n,isInteraction:t}))?!1:(this._isOpen=!1,i=this,r={},this.model.enableAnimation&&(r=this.model.animation.hide.effect=="slide"?{left:-this._ejDialog.width(),opacity:0}:{opacity:0}),this._ejDialog.animate(r,this.model.enableAnimation?Number(this.model.animation.hide.duration):0,function(){i._trigger("close",{event:n,isInteraction:t});i._ejDialog.hide()}),this.model.enableModal&&this._overLay&&this._overLay.remove(),this)},isOpened:function(){return this.isOpen()},isOpen:function(){return this._isOpen},setTitle:function(n){return this.model.title=n,this._titleText.text(n),this._updateCaptionWidth(),this},setContent:function(n){return this.model.enabled?(this.element.html(n),this._resetScroller(),this):!1},focus:function(){return this._setZindex(),this.element.focus(),this},minimize:function(){if(this.model.showHeader)return this._actionMinimize(),n(this.wrapper.find(".e-minus")[0]).parent().hide(),this},maximize:function(){if(this.model.showHeader)return this._actionMaximize(),n(this.wrapper.find(".e-maximize")[0]).removeClass("e-maximize").addClass("e-restore"),n(this.wrapper.find(".e-restore")[1]).removeClass("e-restore").addClass("e-minus"),this._dialogMaximize&&this._dialogMaximize.attr("title",this.model.tooltip.restore),this.contentDiv.show(),this._dialogTitlebar&&this._dialogTitlebar.find(".e-minus").parent().show(),this._hideIcon(!0),this},restore:function(){if(this.model.showHeader){var t=this._minimize;return this._actionRestore(),n(this.wrapper.find(".e-restore")[0]).removeClass("e-restore").addClass(t?"e-minus":"e-maximize"),this._dialogMaximize&&this._dialogMaximize.attr("title",this.model.tooltip.maximize),this._hideIcon(!0),this}},pin:function(){if(this.model.showHeader)return this.dialogPin=!0,n(this.wrapper.find(".e-unpin")[0]).removeClass("e-unpin").addClass("e-pin"),this._dialogPin&&this._dialogPin.attr("title",this.model.tooltip.unPin),this},unpin:function(){if(this.model.showHeader)return this.dialogPin=!1,n(this.wrapper.find(".e-pin")[0]).removeClass("e-pin").addClass("e-unpin"),this._dialogPin&&this._dialogPin.attr("title",this.model.tooltip.pin),this},collapse:function(){if(this.model.showHeader)return this._actionCollapse(),this._collapseValue=!0,this},expand:function(){if(this.model.showHeader)return this._actionExpand(),this}});t.Dialog.Locale=t.Dialog.Locale||{};t.Dialog.Locale["default"]=t.Dialog.Locale["en-US"]={tooltip:{close:"Close",collapse:"Collapse",restore:"Restore",maximize:"Maximize",minimize:"Minimize",expand:"Expand",unPin:"UnPin",pin:"Pin"},closeIconTooltip:"close"}})(jQuery,Syncfusion)});

/*!
*  filename: ej.button.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["./../common/ej.core.min"],n):n()})(function(){(function(n,t){t.widget("ejButton","ej.Button",{element:null,model:null,validTags:["button","input"],_setFirst:!1,_rootCSS:"e-button",_requiresID:!0,defaults:{size:"normal",type:"submit",height:"",width:"",enabled:!0,htmlAttributes:{},text:null,contentType:"textonly",imagePosition:"imageleft",showRoundedCorner:!1,cssClass:"",prefixIcon:null,suffixIcon:null,enableRTL:!1,repeatButton:!1,timeInterval:"150",create:null,click:null,destroy:null},dataTypes:{size:"enum",enabled:"boolean",type:"enum",showRoundedCorner:"boolean",text:"string",contentType:"enum",imagePosition:"enum",prefixIcon:"string",suffixIcon:"string",cssClass:"string",repeatButton:"boolean",enableRTL:"boolean",timeInterval:"string",htmlAttributes:"data"},disable:function(){this.element.addClass("e-disable").attr("aria-disabled",!0);this.model.enabled=!1},enable:function(){this.element.removeClass("e-disable").attr("aria-disabled",!1);this.model.enabled=!0},_init:function(){this._cloneElement=this.element.clone();this._initialize();this._render();this._controlStatus(this.model.enabled);this._wireEvents(this.model.repeatButton);this._addAttr(this.model.htmlAttributes)},_addAttr:function(t){var i=this;n.map(t,function(n,t){t=="class"?i.element.addClass(n):i.element.attr(t,n);t=="disabled"&&n=="disabled"&&i.disable()})},_destroy:function(){this.element.removeClass(this.model.cssClass+"e-ntouch e-btn e-select e-disable e-corner e-widget").removeAttr("role aria-describedby aria-disabled");this.element.removeClass("e-btn-"+this.model.size);this.model.contentType&&this.model.contentType!="textonly"?this.element.append(this._cloneElement.text())&&this.imgtxtwrap[0].remove():""},_setModel:function(n){for(var t in n)switch(t){case"size":this._setSize(n[t]);break;case"height":this._setHeight(n[t]);break;case"width":this._setWidth(n[t]);break;case"contentType":this._setContentType(n[t]);break;case"imagePosition":this._setImagePosition(n[t]);break;case"text":this._setText(n[t]);break;case"prefixIcon":this._setMajorIcon(n[t]);break;case"suffixIcon":this._setMinorIcon(n[t]);break;case"enabled":this._controlStatus(n[t]);break;case"showRoundedCorner":this._roundedCorner(n[t]);break;case"cssClass":this._setSkin(n[t]);break;case"enableRTL":this._setRTL(n[t]);break;case"timeInterval":this.model.timeInterval=n[t];break;case"htmlAttributes":this._addAttr(n[t])}},_setSize:function(n){this.element.removeClass("e-btn-mini e-btn-medium e-btn-small e-btn-large e-btn-normal");this.element.addClass("e-btn-"+n)},_setType:function(n){this.element.prop({type:n})},_setHeight:function(n){this.element.css("height",n)},_setWidth:function(n){this.element.css("width",n)},_setText:function(n){this.buttonType=="inputButton"?this.element.val(n):this.model.contentType==t.ContentType.TextOnly?this.element.html(n):this.textspan.html(n);this.model.text=n},_setMajorIcon:function(n){this.majorimgtag.removeClass(this.model.prefixIcon);this.majorimgtag.addClass(n);this.model.prefixIcon=n},_setMinorIcon:function(n){this.minorimgtag.removeClass(this.model.suffixIcon);this.minorimgtag.addClass(n);this.model.suffixIcon=n},_setContentType:function(n){n!=this.model.contentType&&(this.element.empty(),this.model.contentType=n,this._renderButtonNormal())},_setImagePosition:function(n){this.model.contentType==t.ContentType.TextAndImage&&n!=this.model.imagePosition&&(this.element.empty(),this.model.imagePosition=n,this._renderButtonNormal())},_setRTL:function(n){n?this.element.addClass("e-rtl"):this.element.removeClass("e-rtl")},_controlStatus:function(n){n?this.enable():this.disable()},_setSkin:function(n){this.model.cssClass!=n&&(this.element.removeClass(this.model.cssClass),this.element.addClass(n))},_initialize:function(){t.isTouchDevice()||this.element.addClass("e-ntouch");this.element.is("input")?this.buttonType="inputButton":this.element.is("a")||this.element.is("button")?this.buttonType="tagButton":this.element.removeClass("e-button");this.element.attr("type")?this.model.type=this.element.attr("type"):this._setType(this.model.type);this._timeout=null},_render:function(){this._setSize(this.model.size);this._setHeight(this.model.height);this._setWidth(this.model.width);this._setRTL(this.model.enableRTL);this.element.addClass(this.model.cssClass+" e-btn e-select e-widget").attr("role","button");this.buttonType=="inputButton"?(this.element.addClass("e-txt"),this.model.text!=null&&this.model.text!=""?this.element.val(this.model.text):this.model.text=this.element.val()):this._renderButtonNormal();this._roundedCorner(this.model.showRoundedCorner);this.model.text&&this.element.attr("aria-describedby",this.model.text)},_renderButtonNormal:function(){if((this.model.text==null||this.model.text=="")&&(this.model.text=this.element.html()),this.element.empty(),this.textspan=t.buildTag("span.e-btntxt",this.model.text),this.model.contentType.indexOf("image")>-1&&(this.majorimgtag=t.buildTag("span").addClass(this.model.prefixIcon),this.minorimgtag=t.buildTag("span").addClass(this.model.suffixIcon),this.imgtxtwrap=t.buildTag("div")),this.model.contentType==t.ContentType.TextAndImage){switch(this.model.imagePosition){case t.ImagePosition.ImageRight:this.imgtxtwrap.append(this.textspan,this.majorimgtag);break;case t.ImagePosition.ImageLeft:this.imgtxtwrap.append(this.majorimgtag,this.textspan);break;case t.ImagePosition.ImageBottom:this.majorimgtag.attr("style","display:inherit");this.imgtxtwrap.append(this.textspan,this.majorimgtag);break;case t.ImagePosition.ImageTop:this.majorimgtag.attr("style","display:inherit");this.imgtxtwrap.append(this.majorimgtag,this.textspan)}this.element.append(this.imgtxtwrap)}else this.model.contentType==t.ContentType.ImageTextImage?(this.imgtxtwrap.append(this.majorimgtag,this.textspan,this.minorimgtag),this.element.append(this.imgtxtwrap)):this.model.contentType==t.ContentType.ImageBoth?(this.imgtxtwrap.append(this.majorimgtag,this.minorimgtag),this.element.append(this.imgtxtwrap)):this.model.contentType==t.ContentType.ImageOnly?(this.imgtxtwrap.append(this.majorimgtag),this.element.append(this.imgtxtwrap)):(this.element.addClass("e-txt"),this.element.html(this.model.text))},_roundedCorner:function(n){n==!0?this.element.addClass("e-corner"):this.element.removeClass("e-corner")},_wireEvents:function(t){t&&(this._on(this.element,"mousedown",this._btnRepatMouseClickEvent),this._on(n(document),"mouseup",this._mouseUpClick),this._on(this.element,"keyup",this._btnRepatKeyUpEvent),this._on(n(document),"keypress",this._btnRepatKeyDownEvent));this._on(this.element,"click",this._btnMouseClickEvent)},_btnMouseClickEvent:function(n){var t=this,i;if(!t.model.enabled)return!1;t.element.hasClass("e-disable")||(i={target:n.currentTarget,e:n,status:t.model.enabled},t._trigger("click",i))},_btnRepatMouseClickEvent:function(n){var t=this,i;if(!t.model.enabled)return!1;t.element.hasClass("e-disable")||(i={status:t.model.enabled},(n.button==0||n.which==1)&&(t._timeout=setInterval(function(){t._trigger("click",{target:n.currentTarget,status:t.model.enabled})},this.model.timeInterval)))},_mouseUpClick:function(){clearTimeout(this._timeout)},_btnRepatKeyDownEvent:function(n){var t=this,i;t.element.hasClass("e-disable")||(i={status:t.model.enabled},(n.keyCode==32||n.keyCode==13)&&t._trigger("click",i))},_btnRepatKeyUpEvent:function(n){(n.keyCode==32||n.keyCode==13)&&clearTimeout(this._timeout)}});t.ContentType={TextOnly:"textonly",ImageOnly:"imageonly",ImageBoth:"imageboth",TextAndImage:"textandimage",ImageTextImage:"imagetextimage"};t.ImagePosition={ImageRight:"imageright",ImageLeft:"imageleft",ImageTop:"imagetop",ImageBottom:"imagebottom"};t.ButtonSize={Normal:"normal",Mini:"mini",Small:"small",Medium:"medium",Large:"large"};t.ButtonType={Button:"button",Reset:"reset",Submit:"submit"}})(jQuery,Syncfusion)});

/*!
*  filename: ej.waitingpopup.min.js
*  version : 14.4.0.15
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
(function(n){typeof define=="function"&&define.amd?define(["./../common/ej.core.min"],n):n()})(function(){(function(n,t){t.widget("ejWaitingPopup","ej.WaitingPopup",{element:null,model:null,validTags:["div","span"],_setFirst:!1,_rootCSS:"e-waitingpopup",defaults:{showOnInit:!1,target:null,appendTo:null,showImage:!0,htmlAttributes:{},cssClass:"",text:null,template:null,create:null,destroy:null},dataTypes:{showOnInit:"boolean",showImage:"boolean",cssClass:"string"},_isTargetVisible:function(){return this.element.css("display")!="none"},show:function(){this._isTargetVisible()&&(this._refreshPanel(),this.maindiv.css("display","block"),this.model.showOnInit=!0)},hide:function(){this.maindiv.css("display","none");this.model.showOnInit=!1},refresh:function(){this._isTargetVisible()&&this._refreshPanel()},_setText:function(n){n?this.popupText?this.popupText.html(n):(this._generateTextTag(n),this._setContentPosition()):this.popupText&&(this.popupText.remove(),this.popupText=null)},_showImage:function(n){n?(this.popupImage=t.buildTag("span.e-image"),this.popupText?this.popupImage.insertBefore(this.popupText):this.maindiv.append(this.popupImage)):this.popupImage&&(this.popupImage.remove(),this.popupImage=null)},_setTemplate:function(){var i=this.model.template;typeof i=="string"&&(i=n(i));this.templateObj=typeof i=="object"&&typeof i.css=="function"?i:t.buildTag("div","",{"text-align":"center"}).append(i);this.templateObj.css({visibility:"visible",display:"block"});this.maindiv.append(this.templateObj)},_setTheme:function(n){this.maindiv.removeClass(this.model.cssClass).addClass(n)},_init:function(){this._initialize();this._render();this._wireEvents()},_wireEvents:function(){n(window).on("resize",n.proxy(this._resizeHandler,this))},_unwireEvents:function(){n(window).off("resize",n.proxy(this._resizeHandler,this))},_resizeHandler:function(){this.refresh()},_setModel:function(i){for(var r in i)switch(r){case"text":this._setText(i[r]);break;case"cssClass":this._setTheme(i[r]);break;case"htmlAttributes ":this._addAttr(i[r]);break;case"showOnInit":this._setVisibility(i[r]);break;case"showImage":this._showImage(i[r]);this._setContentPosition();break;case"target":this.model.target=i[r];this._setTarget();this.refresh();break;case"appendTo":this.model.appendTo=i[r];this._setTarget();t.isNullOrUndefined(this.model.appendTo)||this.model.appendTo=="document"||this.model.appendTo=="window"?n("body").append(this.maindiv):this.maindiv.appendTo(n(this.model.appendTo));this.refresh();break;case"template":this.maindiv.empty();i[r]?(this.model.template=i[r],this._setTemplate()):(this.model.template=i[r]=null,this._showImage(this.model.showImage),this.model.text&&this._generateTextTag(this.model.text));this._setContentPosition()}},_setTarget:function(){this.targetElement=this.model.target=="document"?n(document):this.model.target=="window"?n(window):this.model.target?n(this.model.target):this.element},_destroy:function(){this.maindiv.remove();this._unwireEvents()},_initialize:function(){this.maindiv=null;this.popupText=null;this.popupImage=null;this.templateObj=null;this.targetElement=null},_render:function(){this._setTarget();var i=n("#"+this.element[0].id+"_WaitingPopup").get(0);i&&n(i).remove();this.maindiv=t.buildTag("div.e-waitpopup-pane e-widget "+this.model.cssClass+"#"+this.element[0].id+"_WaitingPopup");this.model.template?this._setTemplate():(this._showImage(this.model.showImage),this.model.text&&this._generateTextTag(this.model.text));t.isNullOrUndefined(this.model.appendTo)||this.model.appendTo=="document"||this.model.appendTo=="window"?n("body").append(this.maindiv):this.maindiv.appendTo(n(this.model.appendTo));this._setVisibility(this.model.showOnInit);this._addAttr(this.model.htmlAttributes)},_refreshPanel:function(){this.maindiv.width(this.targetElement.outerWidth());this.maindiv.height(this.targetElement.outerHeight());this._setPanelPosition();this._setContentPosition()},_addAttr:function(t){var i=this;n.map(t,function(n,t){t=="class"?i.maindiv.addClass(n):i.maindiv.attr(t,n)})},_setPanelPosition:function(){var i=t.util.getOffset(this.targetElement);this.model.appendTo!=null&&n(this.model.appendTo).length>0&&((this.targetElement.css("position")=="relative"||this.targetElement.css("position")=="absolute")&&this.targetElement[0]===n(this.model.appendTo)[0]?i={left:0,top:0}:(i.left-=this.targetElement.offsetParent().offset().left,i.top-=this.targetElement.offsetParent().offset().top));this.maindiv.css({position:"absolute",left:Math.ceil(i.left)+"px",top:Math.ceil(i.top)+"px","z-index":this._maxZindex()+1})},_setContentPosition:function(){if(this.model.template==null){var t=0,r=0,i,n=null;i=this.targetElement.outerHeight();this.popupText&&(t=this.popupText.outerHeight());this.popupImage&&(r=this.popupImage.outerHeight());this.popupImage&&(n=Math.ceil((i-(r+t))/2),this.popupImage.css("top",n+"px"));this.popupText&&(n||(n=Math.ceil((i-t)/2)),this.popupText.css("top",n+"px"))}else this.templateObj.css({position:"relative",left:Math.ceil((this.targetElement.outerWidth()-this.templateObj.outerWidth())/2),top:Math.ceil((this.targetElement.outerHeight()-this.templateObj.outerHeight())/2)})},_generateTextTag:function(n){this.popupText=t.buildTag("div.e-text",n);this.maindiv.append(this.popupText)},_setVisibility:function(n){n&&this._isTargetVisible()?this.show():this.hide()},_maxZindex:function(){return t.util.getZindexPartial(this.element)}})})(jQuery,Syncfusion)});


$(document).ready(function () {
    radioButtonInitialization("#check-sql", "SQL authentication", "checkWindows", true, "sql");
    radioButtonInitialization("#check-windows", "Windows authentication", "checkWindows", false, "windows");

    radioButtonInitialization("#new-db", "New database", "databaseType", true, "0");
    radioButtonInitialization("#existing-db", "Existing database", "databaseType", false, "1");

    radioButtonInitialization("#file-storage", "File Storage", "IsBlobStorage", true, "0");
    radioButtonInitialization("#blob-storage", "Azure Blob Storage", "IsBlobStorage", false, "1");

    radioButtonInitialization("#https", "Use HTTPS (Recommended)", "Connection", true, "https");
    radioButtonInitialization("#http", "Use HTTP", "Connection", false, "http");
    radioButtonInitialization("#custom-endpoint", "Specify custom endpoints", "Connection", false, "customendpoint");

    dropDownListInitialization('#database-type', 'Server type');

    if (isSiteCreation) {
        dropDownListInitialization('#tenant-type', 'Tenant Type');
        dropDownListInitialization('#branding-type', 'Use Branding');
        inputBoxInitialization('#tenant-name');
        inputBoxInitialization('#tenant-identifier');
        inputBoxInitialization('#site-isolation-code', true);
        inputBoxInitialization("#search-tenant-users");
        inputBoxInitialization("#input-domain");
    }

    inputBoxInitialization("#txt-dbname");
    inputBoxInitialization("#server-dbname");
    inputBoxInitialization("#imdbname");
    inputBoxInitialization("#txt-portnumber");
    inputBoxInitialization("#maintenance-db");
    inputBoxInitialization("#txt-servername");
    inputBoxInitialization("#txt-login");
    inputBoxInitialization("#txt-password-db");
    inputBoxInitialization("#database-name");
    inputBoxInitialization("#server-existing-dbname");
    inputBoxInitialization("#imdb-existing-dbname");
    inputBoxInitialization("#additional-parameter");

    inputBoxInitialization('#txt-accountname');
    inputBoxInitialization('#txt-endpoint');
    inputBoxInitialization('#txt-accesskey');
    inputBoxInitialization('#txt-containername');
    inputBoxInitialization('#txt-bloburl');

    inputBoxInitialization('#txt-firstname');
    inputBoxInitialization('#txt-lastname');
    inputBoxInitialization('#txt-username');
    inputBoxInitialization('#txt-emailid');
    inputBoxInitialization('#new-password');
    inputBoxInitialization('#txt-confirm-password');
});

function onDropDownListChange(args) {
    if (args.element.id == 'database-type')
        onDatbaseChange(args);
    if (args.element.id == 'check-windows')
        onWindowsChange(args);
    if (args.element.id == 'tenant-type')
        changeTenantType(args);
}

function onAuthRadioButtonChange(args) {
    onWindowsChange(args);
}

function onDatabaseRadioButtonChange(args) {
    onDbSelectChange(args);
}

function onBlobRadioButtonChange(args) {
    onBlobStorageChange(args);
}

function onConnectionRadioButtonChange(args) {
    onConnectionRadioChange(args);
}

function dropDownListInitialization(id, placeHolder) {
    var dropDownList = new ejs.dropdowns.DropDownList({
        index: 0,
        floatLabelType: "Always",
        placeholder: placeHolder,
        change: onDropDownListChange,
        cssClass: 'e-outline e-custom'
    });

    dropDownList.appendTo(id);
}

function inputBoxInitialization(id, isDisable) {
    var inputbox = new ejs.inputs.TextBox({
        cssClass: 'e-outline e-custom',
        floatLabelType: 'Auto'
    });

    if (isDisable) {
        inputbox.enabled = false;
    }

    inputbox.appendTo(id);
}

function radioButtonInitialization(id, label, name, isChecked, value) {

    var radiobutton = new ejs.buttons.RadioButton({
        label: label,
        name: name,
        checked: isChecked,
        value: value,
        change: onAuthRadioButtonChange,
        cssClass: 'e-custom'
    });

    if (name == 'checkWindows')
        radiobutton.change = onAuthRadioButtonChange

    if (name == 'databaseType')
        radiobutton.change = onDatabaseRadioButtonChange

    if (name == 'IsBlobStorage')
        radiobutton.change = onBlobRadioButtonChange

    if (name == 'Connection')
        radiobutton.change = onConnectionRadioButtonChange

    radiobutton.appendTo(id);
}


var userAgent = navigator.userAgent;
var regexIe8 = new RegExp("Trident(\/4.0)|(Trident\/5.0)");
var timeOut;
var searchId;
var isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
var clearSearch = false;
var toastTimeout;

var keyCode = {
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    Pause: 19,
    CapsLock: 20,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    LeftArrow: 37,
    UpArrow: 38,
    RightArrow: 39,
    DownArrow: 40,
    Insert: 45,
    LeftWindow: 91,
    RightWindow: 92
};

var excludedSearchKeys = [
    keyCode.Tab,
    keyCode.Shift,
    keyCode.Ctrl,
    keyCode.Alt,
    keyCode.Pause,
    keyCode.CapsLock,
    keyCode.PageUp,
    keyCode.PageDown,
    keyCode.End,
    keyCode.Home,
    keyCode.LeftArrow,
    keyCode.UpArrow,
    keyCode.RightArrow,
    keyCode.DownArrow,
    keyCode.Insert,
    keyCode.LeftWindow,
    keyCode.RightWindow
];

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $("body, .login-main, #server-app-container").removeAttr("style");

    $("form").attr("autocomplete", "off");
    $("input[type=text], input[type=password]").attr("autocomplete", "off");
    $("[data-toggle='tooltip']").tooltip();
    $(".dropdown-menu #notify_header").click(function (e) {
        e.stopPropagation();
    });
    $("#notification-icon").click(function (e) {
        if (!$("#notification-link").hasClass("open")) {
            $("#notification-content-area").ejWaitingPopup();
            $("#notification-content-area").addClass("show");
            $("#notification-content-area").ejWaitingPopup("show");
            $("#notification-content-area").removeClass("show");
            $("#notification-list").attr("src", getUserNotificationsPartialViewResultUrl);
        }
    });

    var notBackdrop =
        $('<div id="nav-backdrop" class="modal-backdrop" style="z-index: 50; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; color: #fff; opacity: 0; position: absolute"></div>');

    $("#upload-item-section, #notification-link, #account-profile").on('hidden.bs.dropdown', function () {
        parent.$("#nav-backdrop").hide();
    });

    $("#notification-link, #account-profile, #upload-item-section").click(function (e) {
        if ($(".dropdown-backdrop").length === 0) {
            $("body").append(notBackdrop);
        }
        if (!$("#notification-link").hasClass("open")) {
            notBackdrop.show();
        }
        else if (!$("#account-profile").hasClass("open")) {
            notBackdrop.show();
        } else {
            notBackdrop.show();
        }
    });

    $("#account-profile .dropdown-menu").click(function (e) {
        e.stopPropagation();
    });

    notBackdrop.click(function () {
        notBackdrop.hide();
    });

    $(document).on("click", ".dropdown-backdrop", function () {
        parent.$("#nav-backdrop").hide();
    });

    searchId = $("#search-area").children("input").attr("id");
    if (searchId == "ad-user-import" || searchId == "AD-group-import" || searchId == "search-ad-users" || searchId == "search-ad-groups" || $("#ad-tab-nav li#activity").length !== 0) {
        $.xhrPool = [];

        $.xhrPool.abortAll = function () {
            $(this).each(function (i, jqXHR) {
                jqXHR.abort();
            });
            $.xhrPool.length = 0;
        }

        $.ajaxSetup({
            beforeSend: function (jqXHR) {
                $.xhrPool.push(jqXHR);
            },
            complete: function (jqXHR) {
                var i = $.xhrPool.indexOf(jqXHR);
                if (i > -1) $.xhrPool.splice(i, 1);
            }
        });
    } else {
        $.xhrPool = [];

        $.xhrPool.abortAll = function () {
            $(this).each(function (i, jqXHR) {
                jqXHR.abort();
            });
            $.xhrPool.length = 0;
        };
        if (typeof ej != "undefined" && typeof ej.UrlAdaptor != "undefined") {
            ej.UrlAdaptor.prototype.beforeSend = function (dm, request) {
                $.xhrPool.push(request);
            }
            $.ajaxSetup({
                complete: function (jqXHR) {
                    var i = $.xhrPool.indexOf(jqXHR);
                    if (i > -1) $.xhrPool.splice(i, 1);
                }
            });
        }
    }

    $('.lazyload').each(function () {
        if ($(this).attr("data-id") === "footerlogo") {
            img = document.createElement('img');
            img.onload = imageOnLoad;
            img.src = $(this).attr("data-src");
            img.alt = $(this).attr("data-alt");
            img.id = $(this).attr("data-id");
            $(img).attr("onerror", $(this).attr("data-default"));
            img.style = "display: none";
            $(this).parent().find("p#poweredbysyncfusion").append(img);
        }
        else if ($(this).attr("data-id") === "profilelogo" || $(this).attr("data-id") === "profile-logo-sub" || $(this).attr("data-id") === "user-profile-picture") {
            img = document.createElement('img');
            img.onload = imageOnLoad;
            img.src = $(this).attr("data-src-value");
            img.alt = $(this).attr("data-alt");
            img.id = $(this).attr("data-id");
            $(img).attr("onerror", $(this).attr("data-default"));
            img.style = "display: none";
            $(this).parent().append(img);
        }
        else {
            img = document.createElement('img');
            img.onload = imageOnLoad;
            img.src = $(this).attr("data-src");
            img.alt = $(this).attr("data-alt");
            img.id = $(this).attr("data-id");
            $(img).attr("onerror", $(this).attr("data-default"));
            img.style = "display: none";
            $(this).parent().append(img);

            if ($(this).attr("data-id") === "application-logo") {
                var appLogoSrc = $(this).attr("data-src");
                if (appLogoSrc !== undefined && appLogoSrc !== '' && appLogoSrc.length > 3) {
                    var logoFormat = appLogoSrc.substr(appLogoSrc.length - 3, appLogoSrc.length);
                    if (logoFormat.toLowerCase() === "svg") {
                        $("#application-logo").addClass("application-logo-svg");
                    }
                }
            }
        }
    });

    function imageOnLoad() {
        $(this).show();
        if ($(this).attr("id") === "footerlogo") {
            $(this).parent().parent().find("div.lazyload").remove();
        }
        $(this).parent().find("div.lazyload").remove();
    }

    if (typeof (isLicenseExpiredUrl) !== "undefined") {
        $.ajax({
            type: "POST",
            url: isLicenseExpiredUrl,
        });
    }
});

$(document).on("keyup", "textarea", function (event) {
    if (event.keyCode != 8 && event.keyCode != 46) {
        var max = $(this).attr("maxlength");
        if (max != undefined && $(this).val().length >= max) {
            $(this).val($(this).val().substring(0, max));
        }
    }
});

function isEmptyOrWhitespace(value) {
    if ($.trim(value) == "")
        return true;
    else
        return false;
}

function convertToBoolean(value) {
    if (typeof (value) === "string") {
        value = value.toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
            return true;
        default:
            return false;
    }
}

function parseURL(str) {
    var o = parseURL.options,
        m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
};

parseURL.options = {
    strictMode: true,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};
//Handles Ajax error
function handleAjaxError() {
}

function refreshScroller() {
    var expandCollapseIconHeight = $(".collapseIcon").css("display") == "block" ? $(".collapseIcon").height() : 0;
    if ($(window).height() - ($("#CatergoryHeading").outerHeight() + $("#base_menu_container_Div").outerHeight() + $("#listing").outerHeight() + expandCollapseIconHeight) < 0) {
        var scrollerHeight = $(window).height() - ($("#CatergoryHeading").outerHeight() + $("#base_menu_container_Div").outerHeight() + expandCollapseIconHeight);
        var scrollerWidth = $("#CatergoryHeading").outerWidth();
        $("#ScrollElement").ejScroller({
            height: window.innerWidth < 1041 ? (scrollerHeight < 200 ? 200 : scrollerHeight) : scrollerHeight,
            width: scrollerWidth,
            buttonSize: 0,
            scrollerSize: 9
        });
    }
    else {
        if ($("#ScrollElement").data("ejScroller") != undefined) {
            $("#ScrollElement").data("ejScroller").destroy();
        }
    }
}

function refreshScrollerForCategory() {
    var scrollContentHeight = 0;
    for (var i = 0; i < $("#scroll-content #listing>li").length; i++) {
        scrollContentHeight += $($("#scroll-content #listing>li")[i]).outerHeight();
    }
    if ($(window).height() - ($(".item-navigation").outerHeight() + $("#header-area").outerHeight() + $("#category-listing").outerHeight() + scrollContentHeight + $("#create-new-category").outerHeight()) < 0) {
        var scrollerHeight = $(window).height() - ($(".item-navigation").outerHeight() + $("#header-area").outerHeight() + $("#category-listing").outerHeight() + $("#create-new-category").outerHeight());
        var scrollerWidth = $(".item-navigation").outerWidth();

        if ($(".all-items").hasClass("active") && $("#category-list").is(":visible")) {
            $("#scroll-content").ejScroller({
                height: scrollerHeight,
                buttonSize: 0,
                scrollerSize: 9,
                autoHide: true
            });
        }
    }
    else {
        if ($("#scroll-content").data("ejScroller") != undefined) {
            $("#scroll-content").data("ejScroller").destroy();
        }
    }
}

function addPlacehoder(object) {
    if (regexIe8.test(userAgent)) {
        $(object).find("input[type=text],input[type=password],textarea").each(function () {
            if ($(this).val() === "") {
                $($("<div>", { "class": "placeholder", text: $(this).attr("placeholder") })).insertAfter(this).show();
            }
            else {
                $($("<div>", { "class": "placeholder", text: $(this).attr("placeholder") })).insertAfter(this).hide();
            }
        });
    }
}

$("textarea").keyup(function (event) {
    if (event.keyCode != 8 && event.keyCode != 46) {
        var max = 255;
        if ($(this).attr("maxlength") != undefined) {
            max = $(this).attr("maxlength");
        }
        if ($(this).val().length >= max) {
            $(this).val($(this).val().substring(0, max));
        }
    }
});

$(document).on("focus", "input[type=text],input[type=password],textarea", function () {
    if (regexIe8.test(userAgent)) {
        $(this).next(".placeholder").removeClass("show").addClass("hide");
    }
});

$(document).on("focusout", "input[type=text],input[type=password],textarea", function () {
    if (regexIe8.test(userAgent) && $(this).val() === "") {
        $(this).next(".placeholder").removeClass("hide").addClass("show");
    }
});
$(document).on("focus", ".placeholder", function () {
    $(this).prev("input").focus();
});

function doAjaxPost(type, url, data, onSuccess, onError, onComplete, element, processData, contentType, passDataToCallbackFn) {
    if (element) {
        if (element.is(":input:button") || element.is("button"))
            element.prop({ "disabled": true });
        else {
            showWaitingPopup(element);
        }
    }
    if (processData === undefined || processData === null) processData = true;
    if (contentType === undefined || contentType === null) contentType = "application/x-www-form-urlencoded; charset=UTF-8";
    $.ajax({
        type: type,
        url: url,
        context: this,
        processData: processData,
        contentType: contentType,
        data: data,
        success: (passDataToCallbackFn === true) ? $.proxy(getFnObj(onSuccess), window, data) : $.proxy(getFnObj(onSuccess), window),
        error: $.proxy(function (error, status, errorThrown) {
            if (error.statusText != "abort") {
            }
            if (onError)
                getFnObj(onError).call(window, error, status, errorThrown);
        }, this),
        complete: $.proxy(function (e) {
            try {
                var response = JSON.parse(e.responseText);
                if (response.data != undefined && response.data != null
                    && response.data.Message != undefined && response.data.Message != null
                    && response.data.Message.toLowerCase() == "unauthorized") {
                    window.location.replace(window.location.href);
                }
            } catch (exception) {
            }

            if (element) {
                if (element.is(":input:button") || element.is("button"))
                    element.prop({ "disabled": false });
                else
                    hideWaitingPopup(element);
            }
            if (onComplete)
                getFnObj(onComplete).call(window, e);
        }, this)
    });
};

function ShowWaitingProgress(selector, show) {
    if (show == "show") {
        $(selector).ejWaitingPopup();
        $(selector).ejWaitingPopup("show");
    } else
        $(selector).ejWaitingPopup("hide");
};

function getFnObj(obj) {
    if (typeof obj === "function") return obj;
    if (typeof obj === "string" && window[obj])
        return obj;
};

function showWaitingPopup(element) {
    if (typeof element === "string")
        element = $((element.indexOf(".") === 0) ? element : "#" + element);
    element.ejWaitingPopup();
    element.ejWaitingPopup("show");
};

function hideWaitingPopup(element) {
    if (typeof element === "string")
        element = $((element.indexOf(".") === 0) ? element : "#" + element);
    element.ejWaitingPopup("hide");
};

function redirect(url, interval) {
    if (interval)
        setTimeout(function () { window.location.assign(url) }, interval);
    else
        window.location.assign(url);
};

function CheckMonthFormat(value, format) {
    return value.includes(format);
}

function DateCustomFormat(formatString, dateValue, isTimeFormat) {
    var yyyy, yy, MMMM, MMM, MM, M, dddd, ddd, dd, d, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th, HH;
    var dateObject = new Date(dateValue);
    var datetime = formatString;
    //var dateObject = MilltoDate.toString();
    yy = ((yyyy = dateObject.getFullYear()) + "").slice(-2);
    MM = (M = dateObject.getMonth() + 1) < 10 ? ("0" + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    dd = (d = dateObject.getDate()) < 10 ? ("0" + d) : d;
    ddd = (dddd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObject.getDay()]).substring(0, 3);
    th = (d >= 10 && d <= 20) ? "th" : ((dMod = d % 10) == 1) ? "st" : (dMod == 2) ? "nd" : (dMod == 3) ? "rd" : "th";
    formatString = formatString.replace("yyyy", yyyy).replace("yy", yy).replace("dddd", dddd).replace("ddd", ddd).replace("dd", dd).replace("d", d).replace("th", th);
    switch (true) {
        case CheckMonthFormat(formatString, "MMMM"):
            formatString = formatString.replace("MMMM", MMMM);
            break;
        case CheckMonthFormat(formatString, "MMM"):
            formatString = formatString.replace("MMM", MMM);
            break;
        case CheckMonthFormat(formatString, "MM"):
            formatString = formatString.replace("MM", MM);
            break;
        case CheckMonthFormat(formatString, "M "):
            formatString = formatString.replace("M ", M + " ");
            break;
        case CheckMonthFormat(formatString, "M,"):
            formatString = formatString.replace("M,", M + ",");
            break;
        case CheckMonthFormat(formatString, "M"):
            formatString = formatString.replace("M", M);
            break;
    }
    if (isTimeFormat == "True") {
        h = (hhh = dateObject.getHours());
        HH = h < 10 ? ("0" + h) : h;
        var lastPage = difference % pageSize === 0 ? difference / pageSize : Math.floor((difference / pageSize) + 1);
        if (currentPage > lastPage) {
            return lastPage;
        } else {
            return currentPage;
        }
    }

    else {
        h = (hhh = dateObject.getHours());
        if (h == 0) h = 24;
        if (h > 12) h -= 12;
        hh = h < 10 ? ("0" + h) : h;
        AMPM = (ampm = hhh < 12 ? "am" : "pm").toUpperCase();
        mm = (m = dateObject.getMinutes()) < 10 ? ("0" + m) : m;
        ss = (s = dateObject.getSeconds()) < 10 ? ("0" + s) : s;
        datetime = formatString.replace("hhh", hhh).replace("hh", hh).replace("h", h).replace("mm", mm).replace("m", m).replace("ss", ss).replace("s", s).replace("ampm", ampm).replace("AMPM", AMPM);
    }
    return datetime;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validateUserName(userName) {
    if (/\s/g.test(userName)) {
        return { isValid: false, message: window.TM.App.LocalizationContent.UserNameHasWhiteSpace };
    }
    if (/[^a-zA-Z0-9]/.test(userName)) {
        return { isValid: false, message: window.TM.App.LocalizationContent.UserNameSpecialCharacterValicator };
    }
    return { isValid: true, message: window.TM.App.LocalizationContent.Valid };
}

function isValidUrl(url) {
    var regexExpression = /^(?!(ftp|https?):\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-]+(\.[a-z]{2,6})?(:\d{1,5})?(!\/[a-zA-Z0-9-]+[a-zA-Z0-9-]*(\.[a-z]{2,8})?)*?$/gm;
    var ipAddressRegexExpression = /^(?:(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)(?:\:(?:\d|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?$/;

    if (!regexExpression.test(url) && !url.match(ipAddressRegexExpression)) {
        return false;
    } else {
        return true;
    }
}

function getMaxZIndex() {
    var maxZIndex = 0;
    $("div").each(function () {
        var currentZIndex = parseInt($(this).css("zIndex"), 10);
        if (currentZIndex > maxZIndex) {
            maxZIndex = currentZIndex;
        }
    });
    return maxZIndex;
}

function IsEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,63}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

function UsernameValidation(username) {
    var filter = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,252}[a-zA-Z0-9]$/;
    if (filter.test(username)) {
        return true;
    }
    else {
        return false;
    }
}

function IsValidUsername(username) {
    return UsernameValidation(username) || IsEmail(username);
}

function IsValidUsernameLength(username) {
    var filter = /^.{3,254}$/;
    if (filter.test(username)) {
        return true;
    }
    else {
        return false;
    }
}

function IsValidContactNumber(contactNumber) {
    var regex = /^(?:|[0-9\-\+]{9,15})$/;
    if (regex.test(contactNumber)) {
        return true;
    }
    else {
        return false;
    }
}

function onCloseMessageBox() {
    document.getElementById("messageBox").ej2_instances[0].hide();
}

function onMessageDialogClose() {
    $("#messageBox").find(".message-content").text("");
    $(".message-box-btn-holder").html("");
    $(".message-box-close").html("");
}

function messageBox(messageIcon, messageHeader, messageText, type, successCallback, errorCallback, width, height, maxHeight, cssClass) {
    $("#messageBox").find(".message-content").text("");
    $(".e-footer-content").html("");
    $(".message-box-close").html("");
    $("#messageBox").find(".e-dlg-header").html("<span class='su " + messageIcon + "'></span> <span class='modal-title' data-toggle='tooltip' data-placement='bottom' data-container='body' title='" + messageHeader + "'  >" + messageHeader + "</h2>");
    $("#messageBox").find(".message-content").html(messageText);
    $("#messageBox").find(".message-content").removeClass("text-left");
    if (type == "error") {
        var successButton;
        var closeIcon;
        var errorButton;
        if (successCallback != undefined) {
            successButton = $("<input type='button' class='critical-action-button pull-right' value='" + window.TM.App.LocalizationContent.YesButton + "'></input>");
            successButton.bind("click", $.proxy(getFnObj(successCallback), window));
        }
        if (errorCallback != undefined) {
            errorButton = $("<input type='button' class='secondary-button pull-right' value='" + window.TM.App.LocalizationContent.NoButton + "'></input>");
            errorButton.bind("click", $.proxy(getFnObj(errorCallback), window));
            closeIcon = $('<span class="su su-close"></span>');
            closeIcon.bind("click", $.proxy(getFnObj(errorCallback), window));
        }
        else {
            errorButton = $("<input type='button' class='secondary-button pull-right' value='" + window.TM.App.LocalizationContent.NoButton + "'></input>");
            closeIcon = $('<span class="su su-close"></span>');
            errorButton.click(function () {
                onCloseMessageBox();
            });
            closeIcon.click(function () {
                onCloseMessageBox();
            });
        }
        $(".message-box-close").html(closeIcon);
        $(".e-footer-content").append(errorButton, successButton);
        $("#messageBox").unbind("keydown");
    }
    else {
        var successButton;
        var closeIcon;
        if (successCallback != undefined) {
            successButton = $("<input type='button' class='secondary-button' value='" + window.TM.App.LocalizationContent.OKButton + "'></input>");
            successButton.bind("click", $.proxy(getFnObj(successCallback), window));
            closeIcon = $('<span class="su su-close"></span>');
            closeIcon.bind("click", $.proxy(getFnObj(successCallback), window));
        }
        else {
            successButton = $("<input type='button' class='secondary-button' value='" + window.TM.App.LocalizationContent.OKButton + "'></input>");
            closeIcon = $('<span class="su su-close"></span>');
            successButton.click(function () {
                onCloseMessageBox();
            });
            closeIcon.click(function () {
                onCloseMessageBox();
            });
        }
        $(".message-box-close").html(closeIcon);
        $(".e-footer-content").append(successButton);
        $("#messageBox").on("keydown", function (event) {
            switch (event.keyCode) {
                case 13:
                case 27:
                    successButton.click();
            }
        });
    }

    $('[data-toggle="tooltip"]').tooltip();
    document.getElementById("messageBox").ej2_instances[0].show();
    $("#messageBox").focus();
    var sizeobj = document.getElementById("messageBox").ej2_instances[0];
    setTimeout(function () {
        if (width != undefined)
            sizeobj.width = width;
        sizeobj.height = height;
        if (maxHeight != undefined)
            sizeobj.setMaxHeight(maxHeight);
    }, 50);
    if (cssClass != null && cssClass != undefined) {
        sizeobj.cssClass = cssClass;
    }
}

function deleteUserAvatar() {
    ShowWaitingProgress("#user-profile-master", "show");
    doAjaxPost('POST', deleteavatarUrl, { userName: $("#user-name").val() },
        function (result) {
            ShowWaitingProgress("#user-profile-master", "hide");
            if (result.status) {
                messageBox("su-delete", window.TM.App.LocalizationContent.DeleteAvatar, window.TM.App.LocalizationContent.DeleteAvatarSuccess, "success", function () {
                    var isLoggedUser = $("#logged-user").html().toLowerCase();
                    $("#user-profile-picture").attr("src", getdefaultavatarUrl);
                    $("#user-profile-picture").siblings("#avatar-delete-click").remove();
                    if ($("#user-name").val() == isLoggedUser) {
                        $(".profile-picture,#profile-picture-menu").find("img").attr("src", getdefaultavatarUrl);
                    }
                    onCloseMessageBox();
                });
            }
            else {
                messageBox("su-delete", window.TM.App.LocalizationContent.DeleteAvatarTitle, window.TM.App.LocalizationContent.DeleteAvatarError, "success", function () {
                    onCloseMessageBox();
                });
            }
        }
    );
}

function IsValidName(validationType, inputString) {
    var regex;
    if (validationType.toLowerCase() === "username") {
        regex = new RegExp(/[*\[\\\]\|\/\:\<\>\%\+\#\&\?\'\"\@\;\,]/);
    }
    else {
        regex = new RegExp(/[*\[\\\]\|\/\:\<\>\%\+\#\?\'\"\;\,]/);
    }
    return !regex.test(inputString);
}

function GridLocalization() {
    ej.Grid.Locale["en-US"] = {
        EmptyRecord: window.TM.App.LocalizationContent.NoRecords,
        StringMenuOptions: [{ text: window.TM.App.LocalizationContent.SearchKeyStart, value: "StartsWith" }, { text: window.TM.App.LocalizationContent.SearchKeyEnd, value: "EndsWith" }, { text: window.TM.App.LocalizationContent.SearchKeyContanins, value: "Contains" }, { text: window.TM.App.LocalizationContent.SearchKeyEqual, value: "Equal" }, { text: window.TM.App.LocalizationContent.SearchKeyNotEqual, value: "NotEqual" }],
        FilterMenuCaption: window.TM.App.LocalizationContent.SearchValue,
        Filter: window.TM.App.LocalizationContent.Search,
        Clear: window.TM.App.LocalizationContent.ClearSearch
    };
    ej.Pager.Locale["en-US"] = {
        pagerInfo: window.TM.App.LocalizationContent.PageCount,
        firstPageTooltip: window.TM.App.LocalizationContent.FirstPage,
        lastPageTooltip: window.TM.App.LocalizationContent.LastPage,
        nextPageTooltip: window.TM.App.LocalizationContent.NextPage,
        previousPageTooltip: window.TM.App.LocalizationContent.PreviousPage
    };
}

$(document).on("keyup", "#SearchCategory, #search-groups, #search-group-users, #ad-user-import, #userSearchKey,#groupSearchKey, #ad-group-import, #searchItems, #search-schedules, #search-users, #search-ad-users, #search-ad-groups, #search-user-permission, #search-group-permission, #search-database-users,#search-tree, #search-home-page, #search-items, .search-user-holder, .tree-view-search-holder, #search-tenants, #search-app-users, #add-user-search,#search-tenant-users,#add-tenant-search", function (e) {
    var element = "#" + this.id;
    if ($(element).val() != "") {
        if (element == "#search-home-page" || element == "#search-tenant-users") {
            $(element).parent().siblings("span.close-icon").css("display", "block");
            $(element).parent().siblings("span.search-icon").css("display", "none");
        }
        else {
            $(element).siblings("span.close-icon").css("display", "block");
            $(element).siblings("span.search-user").css("display", "none");
            $(element).siblings("span.search-group").css("display", "none");
            $(element).siblings("span.search-group-users").css("display", "none");
            $(element).siblings("span.search-icon").css("display", "none");
            $(element).siblings("span.search-item").css("display", "none");
            $(element).siblings("span.search-schedule").css("display", "none");
            $(element).siblings("span.search").css("display", "none");
            $(element).siblings("span.search-application").css("display", "none");
        }
    } else {
        if (element == "#search-home-page" || element == "#search-tenant-users") {
            $(element).parent().siblings("span.close-icon").css("display", "none");
            $(element).parent().siblings("span.su-search").css("display", "block");
        }
        else {
            $(element).siblings("span.close-icon").css("display", "none");
            $(element).siblings("span.su-search").css("display", "block");
        }
    }
});

$(document).on("click", "#clear-search,.clear-search,#add-user-clear-search,#add-tenant-clear-search", function () {
    var currentElement = $(this).prevAll("input");
    if (currentElement == "" || currentElement == null || currentElement == undefined || currentElement.length <= 0) {
        currentElement = $(this).prev("div").find("input");
    }
    var currentId = "#" + currentElement.attr("id");
    currentElement.val("");

    if (!clearSearch) {
        $("#clear-search").css("display", "none");
        $("#add-user-clear-search").css("display", "none");
        $("#add-tenant-clear-search").css("display", "none");
    }

    if (currentElement.val() == "") {
        if (currentId == "#search-home-page" && !clearSearch) {
            $("#clear-search").parent().siblings("span.su-search").css("display", "block");
            $(".search-area").removeClass("add-background");
            $(".placeholder, #clear-search").hide();
            if ($(".all-items").hasClass("active") && !$("#category-list").is(":visible")) {
                setTimeout(function () { $(".search-area").prevAll().show().parent().removeClass("pull-right"); $("#category-section-name").show(); }, 300);
            }
            else {
                setTimeout(function () { $(".search-area").prevAll(":not(#back-icon)").show().parent().removeClass("pull-right"); $("#category-section-name").show(); }, 300);
            }
            setTimeout(function () { $(".search-home-section:visible").removeClass("show"); }, 300);
        }
        else {
            $("#clear-search").siblings("span.su-search").css("display", "block");
            $("#add-user-clear-search").siblings("span.su-search").css("display", "block");
            $("#add-tenant-clear-search").siblings("span.su-search").css("display", "block");
        }

        if (currentId == "#ad-user-import" || currentId == "#ad-group-import" || currentId == "#search-database-users") {
            var gridObj = $("#Grid").data("ejGrid");
            gridObj.option("dataSource", "");
            if (currentId == "#search-database-users") {
                var e = jQuery.Event("keypress", { keyCode: 13 });
                $("#search-database-users").trigger(e);
            }
        } else {
            PerformSearch(currentId);
        }

        if (currentId == "#search-ad-users" || currentId == "#search-ad-groups") {
            if (currentId == "#search-ad-groups") {
                var gridObj = $("#Grid").data("ejGrid");
                $("#checkbox-header").prop("checked", false);
                $(".checkbox-row").prop("checked", false);
                gridObj.clearSelection();
            } else {
                var gridObj = $("#user_grid").data("ejGrid");
                $("#checkbox-header").prop("checked", false);
                $(".checkbox-row").prop("checked", false);
                gridObj.clearSelection();
            }
        }
    }
    else {
        currentElement.val("");
    }
});

$(document).on("keydown", "#search-groups, #search-group-users, #searchItems, #search-schedules,#userSearchKey,#groupSearchKey, #search-users, #search-user-permission, #search-group-permission, #search-home-page, #search-items, #search-tenants, #search-app-users, #add-tenant-search,#add-user-search", function (e) {
    $.xhrPool.abortAll();
    var currentKeyCode = parseInt(e.which);
    var element = "#" + this.id;
    if (timeOut != null) {
        clearTimeout(timeOut);
        timeOut = null;
    }
    if (currentKeyCode === keyCode.Enter) {
        PerformSearch(element);
    }
    else if (excludedSearchKeys.indexOf(currentKeyCode) === -1) {
        timeOut = setTimeout(function () {
            PerformSearch(element);
        }, 900);
    }
});

function PerformSearch(currentId) {
    var gridObj;
    if (currentId == "#search-schedules") {
        gridObj = $("#scheduleGrid").data("ejGrid");
        gridObj.search($("#search-schedules").val());
    }
    else if (currentId == "#search-users") {
        gridObj = $("#user_grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId == "#search-ad-users") {
        $("#checkbox-header").prop("checked", false);
        $(".checkbox-row").prop("checked", false);
        gridObj = $("#user_grid").data("ejGrid");
        gridObj.search($("#search-ad-users").val());
    }
    else if (currentId == "#search-items") {
        gridObj = $("#items").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId == "#search-tenants") {
        gridObj = $("#tenants_grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId === "#search-app-users") {
        gridObj = $("#users_grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId === "#add-user-search") {
        gridObj = $("#add_users_grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId === "#add-tenant-search") {
        gridObj = $("#add_tenants_grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId == "#search-home-page") {
        gridObj = $("#items").data("ejGrid");
        gridObj.model.filterSettings.filteredColumns = [];
        if (!$("#category-list").is(":visible") || $("#category-list").length <= 0) {
            if ($(".all-items").hasClass("active")) {
                gridObj.model.filterSettings.filteredColumns = [{ field: "CategoryName", operator: "equal", value: $("#category-section-name").html() }];
            }
            gridObj.model.pageSettings.currentPage = 1;
            gridObj.refreshContent();
        }
    }
    else if (currentId == "#search-group-users" || currentId == "#search-groups") {
        gridObj = $("#Grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
    else if (currentId == "#search-ad-groups") {
        gridObj = $("#Grid").data("ejGrid");
        gridObj.search($("#search-ad-groups").val());
    }
    else if (currentId == "#ad-user-import") {
        $(".grid-error-validation").css("display", "none");
        $(".empty-validation").css("display", "none");
        $(".grid-validation").css("display", "none");
        searchADUsers($("#ad-user-import").val());
    }
    else if (currentId == "#ad-group-import") {
        $(".grid_error_validation").css("display", "none");
        $(".empty_validation").css("display", "none");
        $(".grid_validation").css("display", "none");
        searchADGroups($("#ad-group-import").val());
    }
    else if (currentId == "#search-user-permission") {
        gridObj = $("#itempermissiongrid").data("ejGrid");
        gridObj.search($("#search-user-permission").val());
    }
    else if (currentId == "#search-group-permission") {
        gridObj = $("#itemgrouppermissiongrid").data("ejGrid");
        gridObj.search($("#search-group-permission").val());
    }
    else if (currentId == "#userSearchKey") {
        gridObj = $("#UserGrid").data("ejGrid");
        gridObj.refreshContent();
    }
    else if (currentId == "#groupSearchKey") {
        gridObj = $("#GroupGrid").data("ejGrid");
        gridObj.refreshContent();
    }
    else if (currentId == "#search-tenant-users") {
        gridObj = $("#add_admins_grid").data("ejGrid");
        gridObj.model.pageSettings.currentPage = 1;
        gridObj.refreshContent();
    }
}

function SuccessAlert(header, content, duration) {
    clearTimeout(toastTimeout);
    window.top.$('#success-alert').css("display", "none");
    window.top.$("#message-header").html(header);
    window.top.$("#message-content").html(content);
    window.top.$("#success-alert").css("display", "table");
    
    toastTimeout = setTimeout(function () {
        window.top.$('#success-alert').fadeOut()
    }, duration);
}

function WarningAlert(header, content, duration) {
    clearTimeout(toastTimeout);
    parent.$('#warning-alert').css("display", "none");
    parent.$("#warning-alert #message-header").html(header);
    parent.$(" #warning-alert #message-content").html(content);
    parent.$("#warning-alert").css("display", "table");
    
    if (duration != null && duration != "") {
        toastTimeout = setTimeout(function () {
            parent.$('#warning-alert').fadeOut()
        }, duration);
    }
    $(document).on("click", ".close-div", function () {
        parent.$('#warning-alert').fadeOut()
    });
}

function MobileAlert(message, duration) {
    parent.$("#mobile-alert").fadeIn();
    parent.$("#mobile-alert #message").html(message);
    if (duration != null && duration != "") {
        setTimeout(function () {
            parent.$('#mobile-alert').fadeOut(1000)
        }, duration);
    }
}

window.onpopstate = function (e) {
    var queryString = window.location.search;
    var url = window.location.pathname;
    var pathArray = url.split('/');
    e.preventDefault();

    var section = getQueryVariable("view");
    var categoryName = getQueryVariable("category");
    var dashboardName = getQueryVariable("dashboard");
    var tabName = getQueryVariable("tab");

    if (section != null && categoryName != null && dashboardName != null) {
        var previousUrl = $("#current-url").attr("data-url");
        var previousCategoryName = getUrlQueryVariable(previousUrl, "category");
        var previousDashboardName = getUrlQueryVariable(previousUrl, "dashboard");
        if (decodeURI(dashboardName) !== decodeURI(previousDashboardName) || decodeURI(categoryName) !== decodeURI(previousCategoryName)) {
            DashboardRender(url, categoryName, dashboardName, section, tabName);
        } else {
            $("#current-url").attr("data-url", decodeURI(url) + "?category=" + decodeURI(categoryName) + "&dashboard=" + decodeURI(dashboardName) + "&view=" + decodeURI(section));
        }
    }
    else if (section != null && categoryName == null && dashboardName == null) {
        if ($(".item-navigation li[data-value='" + section + "']").hasClass("active") == false) {
            $(".item-navigation li").removeClass("active");
            $(".item-navigation li[data-value='" + section + "']").addClass("active");
        }
        $(".item-navigation li[data-value='" + section + "']").trigger("click");
        var iFrame = document.getElementById("dashboard_render_iframe");
        iFrame.contentWindow.location.href = "about:blank";
        $("#item-viewer #iframe-content").css("display", "block");
    }
    else if (queryString == "" && categoryName == null && section == null && pathArray.length < 5) {
        if ($(".item-navigation li[data-value='categories']").hasClass("active") == false) {
            $(".item-navigation li").removeClass("active");
            $(".item-navigation li[data-value='categories']").addClass("active");
        }
        $(".item-navigation li[data-value='categories']").trigger("click");
        var category = decodeURI(pathArray[pathArray.length - 1]);
        $(".category-link[data-category='" + category + "']").trigger("click");
    }
    if (e.state !== null && (JSON.stringify(e.state) !== JSON.stringify({}) || tabName !== null)) {
        document.getElementById('dashboard_render_iframe').contentWindow.postMessage('filter', "*");
    }
};

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return null;
}
function getUrlQueryVariable(url, variable) {
    var query = url.substring(url.indexOf('?') + 1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return null;
}

function showOrHideGridPager(gridId) {
    var pageDetails = $(gridId).ejGrid("option", "pageSettings");
    if (pageDetails.totalRecordsCount <= pageDetails.pageSize) {
        $(gridId + " .e-pager").css("display", "none");
    }
    else {
        $(gridId + " .e-pager").css("display", "block");
    }
}

$(document).ready(function (e) {
    if ($(".cookie-notification").length > 0 && $(".agreement-wrapper .agreement-div").length > 0) {
        $('.agreement-wrapper .agreement-div').css('margin-top', 10);
    }

    $('#cookiesubs').on('click', function () {
        $(".cookie-notification").remove();
        SetCookie();
    });

    setClientLocaleCookie("boldservice.client.locale", 365);

    function SetCookie() {
        $.ajax({
            type: "POST",
            url: window.setPermissionUrl,
        });
    }

    function setClientLocaleCookie(name, exdays) {
        var value = {
            Locale: navigator.language,
            TimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays++);
        var cookie_value = escape(JSON.stringify(value)) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = name + "=" + cookie_value + ";path=/";
    }


});

$(document).on('click', ".close-user-warning-icons", function (e) {
    $("#content-area").removeClass("user-warning-space");
    $(".user-warning").css("display", "none");
});

function profileDisplayNameSelection() {
    $(".profile-pic-tag").each(function () {
        var id = $(this).attr("data-id");
        var imageSize = $(this).attr("data-image-size");
        var displayName = $(this).attr("data-display-name");
        var type = $(this).attr("data-type");
        $(this).html("");
        var colors = ["#b7fbff", "#a9eec2", "#ffe0a3", "#ffa1ac", "#8ed6ff", "#bf9fee", "#ffa0d2", "#32dbc6", "#d2c8c8", "#e3e7f1"];
        if (type == "user") {
            var stringArray = id.match(/(\d+)/g);
            var i = 0;
            for (i = 0; i < stringArray.length; i++) {
                var number = stringArray[0][0];
            }
            $(this).css("background-color", colors[number]);
            var imageUrl = idpUrl + "/User/Avatar?id=" + id;
            var image = $('<img id="default-profile-image">');
            image.attr("src", imageUrl);
            image.attr("width", imageSize);
            image.attr("height", imageSize);
            image.appendTo($(this));
        }
        else {
            var userIdLastNumber = id % 10;
            $(this).css("background-color", colors[userIdLastNumber]);
        }
        $(this).css("width", imageSize);
        $(this).css("height", imageSize);
        $(this).css("line-height", imageSize + "px");
        var nameLetters = displayName.trim().toUpperCase().split(/ /);
        var firstCharacter = $('<span id="first-letter">');
        if (nameLetters[1] == null) {
            firstCharacter.text(nameLetters[0][0]);
        } else {
            firstCharacter.text(nameLetters[0][0] + nameLetters[1][0]);
        }
        firstCharacter.appendTo($(this));
    });
}

function getCurrentPageNumber(pageSize, selectedRecordsCount, totalRecordsCount, currentPage) {
    var difference = totalRecordsCount - selectedRecordsCount;
    if (difference > pageSize) {
        var lastPage = difference % pageSize == 0 ? difference / pageSize : Math.floor((difference / pageSize) + 1);
        if (currentPage > lastPage) {
            return lastPage;
        } else {
            return currentPage;
        }
    }
    else {
        return 1;
    }
}

function copyToClipboard(inputId, buttonId) {
    if (typeof (navigator.clipboard) != 'undefined') {
        var value = "";
        if (inputId === "#subscription-id-bi" || inputId == "#subscription-id-reports") {
            value = $(inputId).text();
        }
        else {
            value = $(inputId).val();
        }
        var copyText = $(inputId);
        copyText.attr("type", "text").select();
        navigator.clipboard.writeText(value)
        if (buttonId == "#api-copy-client-secret" || buttonId == "#copy-client-secret") {
            copyText.attr("type", "password");
        }
    }
    else {
        var copyText = $(inputId);
        copyText.attr("type", "text").select();
        document.execCommand("copy");
        if (buttonId == "#api-copy-client-secret" || buttonId == "#copy-client-secret") {
            copyText.attr("type", "password");
        }    }
    setTimeout(function () {
        $(buttonId).attr("data-original-title", window.TM.App.LocalizationContent.Copied);
        $(buttonId).tooltip('show');
    }, 200);
    setTimeout(function () {
        $(buttonId).attr("data-original-title", window.TM.App.LocalizationContent.ClickToCopy);
        $(buttonId).tooltip();
    }, 3000);
}


function bindEj2Data(id, value) {
    document.getElementById(id).ej2_instances[0].value = value;
    document.getElementById(id).ej2_instances[0].dataBind();
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function ValidateIsolationCode(code, id) {
    var isValid = false;

    $.ajax({
        type: "POST",
        url: validateIsolationCodeUrl,
        data: { code: code },
        success: function (result) {
            isValid = result.Status;
            if (result.Status) {
                $("#isolation-code-validation").html("");
                $(id).closest('div').removeClass("e-error");
                $("#update-isolation-code").attr("disabled", false);
            } else {
                $("#isolation-code-validation").html(window.TM.App.LocalizationContent.IsolationCodeValidator);
                $(id).closest('div').addClass("e-error");
                $("#update-isolation-code").attr("disabled", true);
            }
        }
    });

    return isValid;
}
var validateUserpassword = {
    p_policy_uppercase: function (userpassword) {
        this.name = "p_policy_uppercase";
        var re = /^(?=.*[A-Z]).+$/;
        if (re.test(userpassword))
            return "p_policy_uppercase"
    },
    p_policy_lowercase: function (userpassword) {
        this.name = "p_policy_lowercase";
        var re = /^(?=.*[a-z]).+$/;
        if (re.test(userpassword))
            return "p_policy_lowercase";
    },
    p_policy_number: function (userpassword) {
        this.name = "p_policy_number";
        var re = /^(?=.*\d).+$/;
        if (re.test(userpassword))
            return "p_policy_number"
    },
    p_policy_specialcharacter: function (userpassword) {
        this.name = "p_policy_specialcharacter";
        var re = /^(?=.*(_|[^\w])).+$/;
        if (re.test(userpassword))
            return "p_policy_specialcharacter"
    },
    p_policy_length: function (userpassword) {
        this.name = "p_policy_length";
        var re = /^(?=.{6,}).+$/
        if (re.test(userpassword))
            return "p_policy_length"
    }
};

function passwordBoxHightlight(element) {
    var rules = "";
    $(element).closest('div').addClass("e-error");
    var isPopoverPasswordPolicy = $("#new-password").data("toggle") === "popover";
    var passwordPolicyElement = !isPopoverPasswordPolicy ? $('#password_policy_rules').find('li>span') : $('#password_policy_rules').find('li>span:not(.content)');
    var passwordPolicyClass = !isPopoverPasswordPolicy ? "su-tick" : "su-password-tick";
    if ($(element).attr('id') == "new-password") {
        for (var i = 0; i < passwordPolicyElement.length; i++) {
            if ($(passwordPolicyElement[i]).attr('class') == passwordPolicyClass)
                $(element).closest('div').removeClass("e-error");
            else
                rules = "[[[unsatisfied-rule]]]";
        }
        if (rules != "" && rules != undefined) {
            $(element).closest('div').addClass("e-error");
            rules = "";
        }
    }
}

function passwordBoxUnhightlight(element) {
    var rules = "";
    $(element).closest('div').removeClass('e-error');
    var isPopoverPasswordPolicy = $("#new-password").data("toggle") === "popover";
    var passwordPolicyElement = !isPopoverPasswordPolicy ? $('#password_policy_rules').find('li>span') : $('#password_policy_rules').find('li>span:not(.content)');
    var passwordPolicyClass = !isPopoverPasswordPolicy ? "su-tick" : "su-password-tick";

    if ($(element).attr('id') == "new-password") {
        for (var i = 0; i < passwordPolicyElement.length; i++) {
            if ($(passwordPolicyElement[i]).attr('class') != passwordPolicyClass)
                rules = "[[[unsatisfied-rule]]]";
            if ($(passwordPolicyElement[i]).attr('class') == passwordPolicyClass)
                $(element).closest('div').removeClass("e-error");
        }
        if (rules != "" && rules != undefined) {
            $(element).closest('div').addClass("e-error");
            rules = "";
        }
    }
    $(element).closest('div').find(".password-validate-holder").html("");
}

function createPasswordPolicyRules() {
    if ($("#new-password").data("toggle") !== "popover") {
        if ($("#new-password").val() != '' && $("#new-password").next("ul").length == 0) {
            $("#new-password").after("<ul id='password_policy_rules'></ul>");
            $("#password_policy_rules").append("<li id='p_policy_heading'>Password must meet the following requirements:</li>")
            $("#tenant-password-policy").attr("data-policy-minimumlength") != "" ? $("#password_policy_rules").append("<li id='p_policy_length'><span class='su su-close'></span>At least " + $("#tenant-password-policy").attr("data-policy-minimumlength") + " characters.</li>") : ""
            $("#tenant-password-policy").attr("data-policy-uppercase").toLowerCase() == "true" ? $("#password_policy_rules").append("<li id='p_policy_uppercase'><span class='su su-close'></span>One uppercase.</li>") : ""
            $("#tenant-password-policy").attr("data-policy-lowercase").toLowerCase() == "true" ? $("#password_policy_rules").append("<li id='p_policy_lowercase'><span class='su su-close'></span>One lowercase.</li>") : ""
            $("#tenant-password-policy").attr("data-policy-number").toLowerCase() == "true" ? $("#password_policy_rules").append("<li id='p_policy_number'><span class='su su-close'></span>One numeric.</li>") : ""
            $("#tenant-password-policy").attr("data-policy-specialcharacter").toLowerCase() == "true" ? $("#password_policy_rules").append("<li id='p_policy_specialcharacter'><span class='su su-close'></span>One special character.</li>") : ""
        }
        if ($("#new-password").val() == '' && $("#new-password").next("ul").length != 0) {
            $("#new-password").next("ul").remove();
        }
    }
    else {
        passwordPolicyPopover("#new-password", $("#new-password").val());
    }
}

$.validator.addMethod("isValidPassword", function (value, element) {
    var validateMethods = new Array();
    validateMethods.push(validateUserpassword.p_policy_uppercase);
    validateMethods.push(validateUserpassword.p_policy_lowercase);
    validateMethods.push(validateUserpassword.p_policy_number);
    validateMethods.push(validateUserpassword.p_policy_specialcharacter);
    validateMethods.push(validateUserpassword.p_policy_length);
    if ($("#new-password").data("toggle") !== "popover") {
        for (var n = 0; n < validateMethods.length; n++) {
            var currentMethodName = validateMethods[n];
            if (currentMethodName(value) != "" && currentMethodName(value) != undefined) {
                ruleName = currentMethodName(value);
                if ($('#password_policy_rules').find('li#' + ruleName + ' span').attr("class") != "su-tick") {
                    $('#password_policy_rules').find('li#' + ruleName + ' span').addClass("su su-tick").removeClass("su su-close");
                    $('#password_policy_rules').find('li#' + ruleName).addClass("clear-error");
                    ruleName = ""
                }
            }
            else {
                ruleName = name;
                $(element).closest('div').addClass("has-error");
                if ($('#password_policy_rules').find('li#' + ruleName + ' span').attr("class") == "su-tick") {
                    $('#password_policy_rules').find('li#' + ruleName + ' span').addClass("su su-close").removeClass("su-tick");
                    $('#password_policy_rules').find('li#' + ruleName).removeClass("clear-error");
                    ruleName = "";
                }
            }
        }
        if ($('#password_policy_rules li>span.su-tick').length == $('#password_policy_rules').find('li>span').length)
            return true;
    }
    else {
        passwordPolicyPopover("#new-password", value);
        if ($('#password_policy_rules li>span.su-password-tick').length == $('#password_policy_rules li>span:not(.content)').length) {
            return true;
        }
    }
}, "");

function passwordPolicyPopover(element, value) {
    var newPassword = $(element);
    newPassword.popover("show");
    var validateMethods = new Array();
    validateMethods.push(validateUserpassword.p_policy_uppercase);
    validateMethods.push(validateUserpassword.p_policy_lowercase);
    validateMethods.push(validateUserpassword.p_policy_number);
    validateMethods.push(validateUserpassword.p_policy_specialcharacter);
    validateMethods.push(validateUserpassword.p_policy_length);
    $.each(validateMethods, function (i) {
        var currentMethodName = validateMethods[i];
        ruleName = currentMethodName(value);
        if (ruleName != undefined && ruleName != "") {
            if (!newPassword.next().find("#password_policy_rules").find("li#" + ruleName + " span:first").hasClass("su-password-tick")) {
                newPassword.next().find("#password_policy_rules").find("li#" + ruleName + " span:first").addClass("su-password-tick").removeClass("icon");
            }
        }
        else {
            ruleName = name;
            if (newPassword.next().find("#password_policy_rules").find("li#" + ruleName + " span:first").hasClass("su-password-tick")) {
                newPassword.next().find("#password_policy_rules").find("li#" + ruleName + " span:first").removeClass("su-password-tick").addClass("icon");
            }
        }

        ruleName = "";
    });
}
$(document).ready(function () {

    //user account validation methods
    $.validator.addMethod("isRequired", function (value, element) {
        return !isEmptyOrWhitespace(value);
    }, window.TM.App.LocalizationContent.EnterName);

    $.validator.addMethod("additionalSpecialCharValidation", function (value, element) {
        if (/^[a-zA-Z_0-9`~!\$\^()=\-\.\{\} ]+$/.test(value) || value === "") {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters);

    $.validator.addMethod("isValidName", function (value, element) {
        return IsValidName("name", value);
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters);

    $.validator.addMethod("hasWhiteSpace", function (value, element) {
        return /\s/.test(value);
    }, window.TM.App.LocalizationContent.HasSpace);

    $.validator.addMethod("isValidUser", function (value, element) {
        return isValidUserName(value)
    }, window.TM.App.LocalizationContent.UsernameInvalidChar);

    $.validator.addMethod("isValidUsername", function (value, element) {
        return IsValidUsername(value);
    }, window.TM.App.LocalizationContent.InvalidUsername);

    $.validator.addMethod("isValidUsernameLength", function (value, element) {
        return IsValidUsernameLength(value);
    }, window.TM.App.LocalizationContent.UsernameExceeds);

    $.validator.addMethod("isValidEmail", function (value, element) {
        return IsEmail(value);
    }, window.TM.App.LocalizationContent.EnterValidEmail);

    //database validation methods

    $.validator.addMethod("isValidPrefix", function (value, element) {
        if (/^[a-zA-Z\_]+$/g.test(value) || value === "") {
            return true;
        } else {
            return false;
        }
    }, window.TM.App.LocalizationContent.AvoidNumberSpace);

    $.validator.addMethod("isValidDatabaseName", function (value, element) {
        if (/^[a-zA-Z_0-9@~!#\$\^&()+=\-,\.\/\{\} ]+$/.test(value) && !/^[\s]+|[\s]+$/g.test(value)) {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (<>%*?\":`;'[]|\\) " + window.TM.App.LocalizationContent.AvoidLeadingTrailingSpace);

    $.validator.addMethod("sqlUsernamevalidation", function (value, element) {
        if (/^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\\\',\.\/\{\}\|:<>\? ]+$/.test(value) && !/^[\s]/g.test(value)) {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (\";) " + window.TM.App.LocalizationContent.AvoidLeadingSpace);

    $.validator.addMethod("isValidCredentials", function (value, element) {
        return /^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\\\',\.\/\{\}\|:<>\? ]+$/.test(value);
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (\";)");



    $.validator.addMethod("mySqlCredentials", function (value, element) {
        if ((/^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\\\',\.\/\{\}\|\":<>\? ]+$/.test(value) && !/^[\s]+|[\s]+$/g.test(value)) || value === "") {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " ; " + window.TM.App.LocalizationContent.MySqlAvoidLeadingTrailingSpace);

    $.validator.addMethod("oraclePasswordValidation", function (value, element) {
        if (/^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\\,\.\/\{\}\|:<>\? ]+$/.test(value) && !/^[\s]+|[\s]+$/g.test(value)) {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (';\") " + window.TM.App.LocalizationContent.OracleAvoidLeadingTrailingSpace);

    $.validator.addMethod("oracleUsernameValidation", function (value, element) {
        if (/^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\\,\.\/\{\}\|:<>\? ]+$/.test(value)) {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (';\")");

    $.validator.addMethod("additionalSpecialCharValidation", function (value, element) {
        if (/^[a-zA-Z_0-9`~!\$\^()=\-\.\{\} ]+$/.test(value) || value === "") {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters);

    $.validator.addMethod("postgresqlUsernamevalidation", function (value, element) {
        if (/^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\',\.\/\{\}\|:<>\? ]+$/.test(value) && !/^[\s]+|[\s]+$/g.test(value)) {
            return true;
        }
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (\"\\;) " + window.TM.App.LocalizationContent.PostgresqlAvoidLeadingTrailingSpace);

    $.validator.addMethod("isValidPostgresqlCredentials", function (value, element) {
        return /^[a-zA-Z_0-9@`~!#\$\^%&*()+=\-\[\]\',\.\/\{\}\|:<>\? ]+$/.test(value);
    }, window.TM.App.LocalizationContent.AvoidSpecailCharacters + " (\"\\;)");

    $.validator.addMethod("isValidPortNumber", function (value, element) {
        return /^\d{1,5}$/.test(value) && value < 65536 && !/^[\s]/g.test(value);
    }, window.TM.App.LocalizationContent.IsValidPort);


    //storage validation
    $.validator.addMethod("IsValidEndPoint", function (value, element) {
        return IsValidEndPoint(value);
    }, window.TM.App.LocalizationContent.EndPoint);

    $.validator.addMethod("IsCustomEndpoint", function (value, element) {
        return IsCustomEndPoint(value, element);
    }, window.TM.App.LocalizationContent.IsValidCustomEndPoint);
    $.validator.addMethod("IsValidCustomEndPoint", function (value, element) {
        return IsValidCustomEndPoint(value, element);
    }, window.TM.App.LocalizationContent.IsValidCustomEndPoint);


    //site configuration validation
    $.validator.addMethod("isRequired", function (value, element) {
        return !isEmptyOrWhitespace(value);
    }, "Please enter the name.");

    $.validator.addMethod("isDomainRequired", function (value, element) {
        return !isEmptyOrWhitespace(value);
    }, window.TM.App.LocalizationContent.Urlvalidator);

    $.validator.addMethod("isValidName", function (value, element) {
        return parent.IsValidName("name", value);
    }, "Please avoid special characters.");

    $.validator.addMethod("isValidIdentifier", function (value, element) {
        return IsValidIdentifier(value);
    }, "Please avoid special characters.");

    $.validator.addMethod("isValidUrl", function (value, element) {
        return isValidUrl(value);
        var givenUrl = $("#input-domain").val();
        var url = parseURL(givenUrl);
        if (isValidUrl(value) == false || parseInt(url.port) > 65535)
            return false;
        else
            return true;
    }, window.TM.App.LocalizationContent.DomainValidator);
});

function isValidUserName(userName) {
    if (isKeyUp) {
        return true;
    }
    else {
        var filter = /^[A-Za-z0-9][A-Za-z0-9]*([._-][A-Za-z0-9]+){0,3}$/;
        return filter.test(userName);
    }

}

function IsValidEndPoint(domainName) {
    var filter = /(?:http)s?:\/\/(?:(?!.*\d[\/?:])[a-z0-9\-._~%]+|(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\[[a-z0-9\-._~%!$&'()*+,;=:]+\])(?::\d+)?(?:[\/?][\-A-Z0-9+&@#\/%?=~_|$!:,.;]*)?/i;
    if (filter.test(domainName)) {
        return true;
    } else {
        return false;
    }
}

function IsCustomEndPoint(fieldValue, element) {
    var connectionType = $("input[name='Connection']:checked").val();
    if (connectionType == "customendpoint") {
        if (fieldValue == "")
            return false;
        else
            return true;
    }
    else
        return false;
}

function IsValidCustomEndPoint(fieldValue, element) {
    var connectionType = $("input[name='Connection']:checked").val();
    var accountname = $("#txt-accountname").val();
    if (connectionType == "customendpoint") {
        var accountName = $("#txt-accountname").val();
        var elementDomainName = $(element).val().split(".");
        var subdomain = elementDomainName.shift();
        var sndleveldomain = subdomain.split("//");
        if (sndleveldomain[1] != accountname)
            return false;
        else
            return true;
    }
    else
        return false;
}

function IsValidIdentifier(inputString) {
    var regex = /^[a-zA-Z0-9-]+$/;
    return regex.test(inputString) || inputString == "";
}
var userAgent = navigator.userAgent;
var regexIe8 = new RegExp("Trident(\/4.0)|(Trident\/5.0)");
var isKeyUp = false;
var ruleName;
var rules;
var errorContent = "";
var databaseValidationMessage = window.TM.App.LocalizationContent.OneOrMoreErrors + " " + window.TM.App.LocalizationContent.Click + " " + "<a id='know-more-error'>" + window.TM.App.LocalizationContent.Here + "</a> " + window.TM.App.LocalizationContent.KnowMore + ".";
var systemSettingsDetails, intermediateDbDetails;
var isNewServerDB = true, isNewIntermediateDB = true;
var storagetype = window.storageType;
var storageButtonValue;
var azureDataforBoldbi = null;

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $("#blob-storage-form").hide();
    $("#report-storage").hide();
    $("#system-settings-user-account-container").hide();

    var messageBoxDialog = new ej.popups.Dialog({
        header: "title",
        width: "450px",
        height: "auto",
        visible: false,
        allowDragging: true,
        isModal: true,
        footerTemplate: "footer",
        close: "onMessageDialogClose"
    });
    messageBoxDialog.appendTo("#messageBox");


    var autoDeploymentResponseDialog = new ej.popups.Dialog({
        header: window.TM.App.LocalizationContent.AutoDeployment,
        content: document.getElementById("auto-deployment-response-dialog-content"),
        showCloseIcon: false,
        buttons: [
            { click: skipAutoDeploy, buttonModel: { content: window.TM.App.LocalizationContent.OKButton } }
        ],
        width: '400px',
        height: '200px',
        isModal: true,
        visible: false
    });
    autoDeploymentResponseDialog.appendTo("#auto-deployment-response");

    $("#default-tab").popover({
        html: true,
        trigger: 'hover',
        placement: "right",
        content: isSiteCreation ? window.TM.App.LocalizationContent.SimpleTabSiteCreationMsg : window.TM.App.LocalizationContent.SimpleTabStartupMsg
    });

    $("#advanced-tab").popover({
        html: true,
        trigger: 'hover',
        placement: "right",
        content: isSiteCreation ? window.TM.App.LocalizationContent.AdvanceTabSiteCreationMsg : window.TM.App.LocalizationContent.AdvanceTabStartupMsg
    });

    $("a[data-toggle='tab']").on('click', function (e) {
        removeError();
        if ($(this).attr("id") == "advanced-tab") {
            $("#default-tab").removeClass("active");
            $("#advanced-tab").addClass("active");
            if (!isSiteCreation) {
                $("#label_txt-dbname").html(window.TM.App.LocalizationContent.IDDatabaseName);
                $("#label_database-name").html(window.TM.App.LocalizationContent.IDDatabaseName);
            }
            $("#simple_tab_db_name").hide();
            $("#advanced_tab_db_name").show();
            if (getDropDownValue("database-type").toLowerCase() == "mysql" || !isBoldBI && isSiteCreation && isBoldReportsTenantType() || !isBoldBI && !isSiteCreation) {
                hideDataStore();
            }
            else {
                showDataStore();
            }

            if (!isSiteCreation) {
                $(".db-name-info").html(window.TM.App.LocalizationContent.DatabaseInfo);
                $("#simple_tab_db_name").show();
                prefillDbNames();
            }

            isSimpleModeValue = "false";
        }
        else {
            $("#default-tab").addClass("active");
            $("#advanced-tab").removeClass("active");
            $("#simple_tab_db_name").show();
            if (!isSiteCreation) {
                $("#label_txt-dbname").html(window.TM.App.LocalizationContent.DatabaseName);
                $("#label_database-name").html(window.TM.App.LocalizationContent.DatabaseName);
            }
            $(".db-name-info").html(isBoldBI ? window.TM.App.LocalizationContent.DatabaseInfoBI : window.TM.App.LocalizationContent.DatabaseInfoReports);
            if (!isSiteCreation) {
                $(".db-name-info").html(isBoldBI ? window.TM.App.LocalizationContent.DatabaseInfoBI3 : window.TM.App.LocalizationContentDatabaseInfoReports2);
                prefillDbNames();
            }
            $("#advanced_tab_db_name").hide();
            isSimpleModeValue = "true";
        }
        if (isSiteCreation) {
            ResizeHeightForDOM();
        }
    });

    if ($('meta[name=has-drm-configuration]').attr("content") == "true") {
        if (typeof isDockerOrk8s != "undefined" && isDockerOrk8s) {
            autoDeploy();
        }
        else {
            $("#image-parent-container .startup-image").hide().attr("src", adminSetupImageUrl).fadeIn();
            $(".startup-content").fadeIn();
            $("#system-settings-welcome-container").hide();
            $(".welcome-content").addClass("display-none");
            $("#system-settings-offline-license-container").hide();
            $('#auth-type-dropdown').removeClass("hide").addClass("show");
            $("#system-settings-user-account-container").slideDown("slow");
            autoFocus("txt-firstname");
        }
    }

    $("#db-content-holder,#db-config-submit").show();
    $("#advanced_tab_db_name").hide();
    $(".sql-server-existing-db").hide();

    $(window).resize(function () {
        changeFooterPostion();
    });

    changeFooterPostion();

    $("#db-content-holder").on("keyup", "input", function (event) {
        if (event.keyCode == 13 && $(this).hasClass("site-creation")) {
            $("input[name='databaseType']:checked").val() === "1" ? $("#sql-existing-db-submit, #sql-existing-ds-db-submit").click() : $("#db-config-submit, #ds-db-config-submit").click();
        }
    });
});

function getFormData() {
    var serverType = getDropDownValue("database-type");
    var serverName = $("#txt-servername").val();
    var database = getDropDownValue("database-type").toLowerCase();
    var portNumber = $("#txt-portnumber").val();
    var maintenanceDb = $('#maintenance-db').val();
    var enableSSL = $("#secure-sql-connection").is(":checked");
    var additionalParameters = $("#additional-parameter").val();

    switch (database) {
        case "mssqlce":
            var prefix = $("#tenant-table-prefix").val();
            break;
        case "mssql":
            var prefix = ($("#table-prefix").val() === "" || $("#new-db").is(":checked")) ? $("#tenant-table-prefix").val() : $("#table-prefix").val();
            var databaseName = $("#new-db").is(":checked") ? $("#txt-dbname").val() : $("#databaseName").val();
            break;
        case "mysql":
            var prefix = ($("#table-prefix").val() === "" || $("#new-db").is(":checked")) ? $("#tenant-table-prefix").val() : $("#table-prefix").val();
            var databaseName = $("#new-db").is(":checked") ? $("#txt-dbname").val() : $("#database-name").val();
            break;
        case "oracle":
            var prefix = ($("#table-prefix-oracle").val() === "" || $("#new-db-oracle").is(":checked")) ? $("#tenant-table-prefix").val() : $("#table-prefix-oracle").val();
            var databaseName = $("#new-db-oracle").is(":checked") ? $("#client-username").val() : $("#database-name-oracle").val();
            break;
        case "postgresql":
            var prefix = ($("#table-prefix").val() === "" || $("#new-db").is(":checked")) ? $("#tenant-table-prefix").val() : $("#table-prefix").val();
            var databaseName = $("#new-db").is(":checked") ? $("#txt-dbname").val() : $("#database-name").val();
            break;
    }

    var isNewDatabase = $("#new-db").is(":checked");

    var authenticationType = 0;
    if (!(getRadioButtonValue("checkWindows") == "windows"))
        authenticationType = 1;

    var globalAdmin = {
        UserName: $("#txt-username").val(),
        FirstName: $("#txt-firstname").val(),
        LastName: $("#txt-lastname").val(),
        Email: $("#txt-emailid").val(),
        Password: $("#new-password").val()
    };
    var systemSettingsData = {
        SQLConfiguration:
        {
            ConnectionString: window.connectionString,
            IntermediateServerConnectionString: window.intermediateServerConnectionString,
            TenantServerConnectionString: window.tenantServerConnectionString,
            ServerType: serverType,
            ServerName: serverName,
            Port: portNumber,
            MaintenanceDatabase: maintenanceDb,
            AuthenticationType: authenticationType,
            DatabaseName: databaseName,
            Prefix: prefix,
            SslEnabled: enableSSL,
            IsNewDatabase: isNewDatabase,
            AdditionalParameters: additionalParameters
        },
        StorageType: window.storageType
    };

    var azureData = {
        AzureBlobStorageUri: window.endpoint,
        AzureBlobStorageContainerName: window.containername,
        ConnectionType: window.connectionType,
        ConnectionString: window.azureconnectionString,
        AccountName: window.accountname,
        AccessKey: window.accesskey
    };

    var tenantInfo = {
        TenantType: getTenantType(),
        TenantName: isBoldBI ? "Bold BI Enterprise Dashboards" : "Bold Reports Enterprise Reporting",
        TenantIdentifier: "site1",
    };

    $("#global-admin-details").val(JSON.stringify(globalAdmin));
    $("#system-settings-data").val(JSON.stringify(systemSettingsData));
    $("#azure-data").val(JSON.stringify(azureData));
    $("#tenant-info").val(JSON.stringify(tenantInfo));
}

function validateEmail(email, eventType) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function changeFooterPostion() {
    if (window.innerHeight - $("#system-settings-general").height() > 70) {
        $("#base-footer-div").addClass("footer-fixed");
    } else {
        $("#base-footer-div").removeClass("footer-fixed");
    }
}

$(document).on("focus", "input[type=text],input[type=password]", function () {
    if (regexIe8.test(userAgent)) {
        $(this).next(".placeholder").removeClass("show").addClass("hide");
    }
});

$(document).on("focusout", "input[type=text],input[type=password]", function () {
    if (regexIe8.test(userAgent) && $(this).val() === "") {
        $(this).next(".placeholder").removeClass("hide").addClass("show");
    }
});

$(document).on("focus", ".placeholder", function () {
    $(this).prev("input").focus();
});

function addPlacehoder(object) {
    if (regexIe8.test(userAgent)) {
        $(object).find("input[type=text],input[type=password]").each(function () {
            if ($(this).val() === "") {
                $($("<div>", { "class": "placeholder", text: $(this).attr("placeholder") })).insertAfter(this).show();
            }
            else {
                $($("<div>", { "class": "placeholder", text: $(this).attr("placeholder") })).insertAfter(this).hide();
            }
        });
    }
}

$(document).on("click", "#info-icon-postgressql", function () {
    $("#prefix-message-postgresql").css("display", "block");
});

$(document).on("click", "#info-icon", function () {
    $("#prefix-message").css("display", "block");
});

function DomResize() {
    //$("#startup-page-conatiner").height($("#system-settings-general").height() + $("#base-footer-div").height());
}

//To  stop animation in radio-button on page rendering
$(document).on("click", ".css-radio", function () {
    $(this).siblings("label").removeClass("notransition");
});
$(document).on("click", "#database-type-dropdown, .proceed-button", function () {
    $(".css-radio").siblings("label").addClass("notransition");
});

function existingDbConfiguration(element) {
    removeError();
    DomResize();
    checkingExistingDB(element);
}

function checkingExistingDB(element) {
    $('#details-next').attr("disabled", true);

    window.serverName = $("#txt-servername").val();
    window.portNumber = $("#txt-portnumber").val();
    window.maintenanceDb = $('#maintenance-db').val();
    window.IsWindowsAuthentication = getRadioButtonValue("checkWindows") == "windows";
    window.login = $("#txt-login").val();
    window.password = $("#txt-password-db").val();
    var databaseType = getDropDownValue("database-type");

    window.databaseName = $("#database-name").val();
    window.serverDatabaseName = $("#server-existing-dbname").val();
    window.intermediateDatabaseName = $("#imdb-existing-dbname").val();
    window.sslEnabled = $("#secure-sql-connection").is(":checked");
    window.additionalParameters = $("#additional-parameter").val();
   
    $.ajax({
        type: "POST",
        url: connectDatabaseUrl,
        async: false,
        data: {
            data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, MaintenanceDatabase: window.maintenanceDb, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, ServerDatabaseName: window.serverDatabaseName, IntermediateDatabaseName: window.intermediateDatabaseName, sslEnabled: window.sslEnabled, IsNewDatabase: false, TenantType: getTenantType(), additionalParameters: window.additionalParameters }),
            isSimpleMode: isSimpleModeSelction(),
            isSiteCreation: true
        },
        success: function (result) {
            if (result.Data.key) {
                window.connectionString = result.Data.connectionResponse.ServerConnectionString;
                window.tenantServerConnectionString = result.Data.connectionResponse.TenantServerConnectionString;
                window.intermediateServerConnectionString = result.Data.connectionResponse.IntermediateServerConnectionString;
                var databaseType = getDropDownValue("database-type");
                $.ajax({
                    type: "POST",
                    url: checkTableExistsUrl,
                    async: false,
                    data: {
                        data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, MaintenanceDatabase: window.maintenanceDb, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, ServerDatabaseName: window.serverDatabaseName, IntermediateDatabaseName: window.intermediateDatabaseName, sslEnabled: window.sslEnabled, TenantType: getTenantType(), IsNewDatabase: false, additionalParameters: window.additionalParameters }),
                        isSimpleMode: isSimpleModeSelction(),
                        isSiteCreation: true
                    },
                    success: function (result) {
                        var items = result.Data.value;
                        if (result.Data.key && items.length > 0) {

                            hideWaitingPopup(element);
                            $('#details-next').removeAttr("disabled");

                            var html = window.TM.App.LocalizationContent.TablesAlreadyExists;
                            html += "<ol class='list-area'>";
                            for (var t = 0; t < items.length; t++) {
                                html += "<li>" + items[t] + "</li>";
                            }
                            html += "</ol>";
                            errorContent = html;
                            $(".database-error").html(databaseValidationMessage).show();

                        } else if (!result.Data.key && items.length <= 0) {
                            delete window.serverName;
                            delete window.portNumber;
                            delete window.login;
                            delete window.password;
                            delete window.databaseName;
                            delete window.sslEnabled;
                            hideWaitingPopup(element);
                            $('#details-next').removeAttr("disabled");
                            changeFooterPostion();
                            $(".db-connect-outer-container").find(".title").html(window.TM.App.LocalizationContent.DatabaseCreation + "!");
                            $("#database-name").focus();
                        } else {
                            $('#details-next').removeAttr("disabled");
                            hideWaitingPopup(element);
                            errorContent = result.Data.value;
                            $(".database-error").html(databaseValidationMessage).show();
                        }
                    }
                });
            } else {

                hideWaitingPopup(element);
                $('#details-next').removeAttr("disabled");
                errorContent = result.Data.value;
                $(".database-error").html(databaseValidationMessage).show();
            }
        }
    });
}

function newDbConfiguration(element) {
    removeError();
    $('#details-next').attr("disabled", true);
    checkingNewDBConnection(element);
}

function checkingNewDBConnection(element, actionType) {
    var result = connectDatabase(element, actionType);
    
    if (result.Data != undefined && result.Data.key && actionType == "edit") {
        var isValidDBDetail = false;
        $.ajax({
            type: "POST",
            url: checkValidDatabaseUrl,
            async: false,
            data: { tenantId: tenantId, connectionString: window.connectionString },
            success: function (response) {
                if (response.Status) {
                    isValidDBDetail = true;
                }
                else {
                    if (result.Data != undefined) {
                        result.Data.value = response.Data;
                    }
                    else {
                        errorContent = response.Data;
                    }
                }
            }
        });
    }

    if (result.Data != undefined && result.Data.key && (actionType == "edit" ? isValidDBDetail : true)) {
        delete window.serverName;
        delete window.portNumber;
        delete Window.dns;
        delete window.login;
        delete window.password;
        delete window.databaseName;
        delete window.sslEnabled;
            if (actionType == "edit") {
                updateTenant(waitingPopUpElement, window.tenantServerConnectionString);
            }
        if (actionType != "edit") {
            changeFooterPostion();
            $(".db-connect-outer-container").find(".title").html(window.TM.App.LocalizationContent.DatabaseCreation + "!");
        }
    }
    else {
            hideWaitingPopup(element);
            $('#details-next').removeAttr("disabled");
        if (result.Data != undefined) {
            errorContent = result.Data.value;
        }
        $(".database-error").html(databaseValidationMessage).show();
    }
}

function connectDatabase(element, actionType) {
    showWaitingPopup(element);
    var result = "";
    var isNewDatabase = true;
    window.serverName = $("#txt-servername").val();
    window.portNumber = $("#txt-portnumber").val();
    window.maintenanceDb = $('#maintenance-db').val();
    window.IsWindowsAuthentication = getRadioButtonValue("checkWindows") == "windows";
    window.login = $("#txt-login").val();
    window.password = $("#txt-password-db").val();
    var databaseType = getDropDownValue("database-type");
    window.databaseName = $("#txt-dbname").val();
    window.serverDatabaseName = $("#server-dbname").val();
    window.intermediateDatabaseName = $("#imdbname").val();
    window.sslEnabled = $("#secure-sql-connection").is(":checked");
    window.additionalParameters = $("#additional-parameter").val();
    if (actionType == "edit") {
        isNewDatabase = false;
    }

    $.ajax({
        type: "POST",
        url: connectDatabaseUrl,
        async: false,
        data: {
            data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, MaintenanceDatabase: window.maintenanceDb, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, ServerDatabaseName: window.serverDatabaseName, IntermediateDatabaseName: window.intermediateDatabaseName, sslEnabled: window.sslEnabled, IsNewDatabase: isNewDatabase, TenantType: getTenantType(), additionalParameters: window.additionalParameters }),
            isSimpleMode: isSimpleModeSelction(),
            isSiteCreation: true
        },
        success: function (serverResult) {
            hideWaitingPopup(element);
            if (serverResult.Data.key) {
                window.connectionString = serverResult.Data.connectionResponse.ServerConnectionString;
                window.tenantServerConnectionString = serverResult.Data.connectionResponse.TenantServerConnectionString;
                window.intermediateServerConnectionString = serverResult.Data.connectionResponse.IntermediateServerConnectionString;
                if (actionType != undefined && actionType == "edit") {
                    result = { "Data": { "key": true, "value": "connected successfully" } };
                }
                else {
                    result = serverResult;
                }
            } else {
                $('#details-next').removeAttr("disabled");
                if (serverResult.Data != undefined) {
                    errorContent = serverResult.Data.value;
                }
                $(".database-error").html(databaseValidationMessage).show();
            }
        }
    });

    return result;
}

function getDatabaseFormValues() {
    var formData;
    var isNewDatabase = $("#new-db").is(":checked");
    var databaseName = $("#new-db").is(":checked") ? $("#txt-dbname").val() : $("#database-name").val();
    var serverType = getDropDownValue("database-type");
    var maintenanceDb = $('#maintenance-db').val();
    var authenticationType = 0;
    var enableSSL = $("#secure-sql-connection").is(":checked");
    var additionalParameters = $("#additional-parameter").val();
    if (!(getRadioButtonValue("checkWindows") == "windows"))
        authenticationType = 1;
        formData = {
            SQLConfiguration:
            {
                ConnectionString: window.connectionString,
                IntermediateServerConnectionString: window.intermediateServerConnectionString,
                TenantServerConnectionString: window.tenantServerConnectionString,
                ServerType: serverType,
                AuthenticationType: authenticationType,
                DatabaseName: databaseName,
                MaintenanceDatabase: maintenanceDb,
                SslEnabled: enableSSL,
                IsNewDatabase: isNewDatabase,
                AdditionalParameters: additionalParameters
            },
            StorageType: $("input[name='IsBlobStorage']:checked").val(),
            TenantIsolation:
            {
                IsEnabled: $("#isolation-enable-switch").is(":checked"),
                IsolationCode: $("#site-isolation-code").val()
            },
            CustomAttribute: [],
        };

    return formData;
}


function postSystemSettingsData(systemSettingsDetails, azuredetails, userEmail, tenantDetails, brandingType, isAddFromServer) {

    var userEmailData = (userEmail != undefined && userEmail != null) ? JSON.stringify(userEmail) : $("#tenant-email").val();
    var tenantDetailsData = (tenantDetails != undefined && tenantDetails != null) ? JSON.stringify(tenantDetails) : null;
    setSystemSettingsData = { systemSettingsData: JSON.stringify(systemSettingsDetails), azureData: JSON.stringify(azuredetails), userEmail: userEmailData, tenantDetails: tenantDetailsData, brandingType: brandingType };
    $.ajax({
        type: "POST", url: setSystemSettingsUrl, data: setSystemSettingsData,
        success: function (setSystemSettingsResponse) {
            if (isAddFromServer != undefined && isAddFromServer) {
                hideWaitingPopup(waitingPopUpElement);
                $("#provide-admin-access-button").attr("disabled", "disabled");
                var tenantGridObj = parent.$("#tenants_grid").data("ejGrid");
                tenantGridObj.refreshContent();
                onAddAdminsDialogClose();
                parent.$("#add-tenant-popup").ejDialog("close");

                if (parent.window.location.href.indexOf("action=create-new-site") > -1) {
                    parent.history.pushState(null, '', umsSitesUrl);
                }

                parent.window.location.href = setSystemSettingsResponse.redirectUrl;
            }
            else {
                showWaitingPopup($(".startup-page-container-body"));
                window.location = setSystemSettingsResponse.redirectUrl;
            }
        }
    });
}

function validate_report_storage() {
    $(".blob-error-message").hide();
    showWaitingPopup($(".startup-page-conatiner"));
    var storageType = $("input[name='IsBlobStorage']:checked").val();
    window.storageType = storageType;
    var azuredetails = "";
    var tenantDetails = {
        TenantName: $("#txt-site-name").val(),
        TenantIdentifier: $("#txt-site-identifier").val(),
        TenantType: isBoldBI ? "BoldBIOnPremise" : "BoldReportsOnPremise",
        UseSiteIdentifier: useSiteIdentifier
    };
    var tenantType = isBoldBI ? "Bold BI" : "Bold Reports"
    if (storageType == "1") {
        if ($("#blob-storage-form").valid()) {
            window.accountname = $("#txt-accountname").val();
            window.endpoint = $("#txt-bloburl").val() == "" ? "https://" + $("#txt-accountname").val() + ".blob.core.windows.net" : $("#txt-bloburl").val();
            window.accesskey = $("#txt-accesskey").val();
            window.containername = $("#txt-containername").val();
            window.storageenable = $(".storage-checkbox").is(":checked");

            var blobUrl = $("#txt-bloburl").val();
            var connectionType = $("input[name='Connection']:checked").val();
            var connectionString = "";


            if (connectionType == "http" || connectionType == "https") {
                connectionString = "DefaultEndpointsProtocol=" + connectionType + ";AccountName=" + window.accountname + ";AccountKey=" + window.accesskey;

            } else {
                connectionString = "BlobEndpoint=" + blobUrl + ";AccountName=" + window.accountname + ";AccountKey=" + window.accesskey;
            }
            window.connectionType = connectionType;
            azuredetails = {
                AzureBlobStorageUri: window.endpoint,
                AzureBlobStorageContainerName: window.containername,
                ConnectionType: window.connectionType,
                ConnectionString: connectionString,
                AccountName: window.accountname,
                AccessKey: window.accesskey
            };

            var isIntermediateDatabaseFormSubmit = $("#ds-db-config-submit").data("form") === "intermediate-db";

            if (window.storageenable == false) {
                $.ajax({
                    type: "POST",
                    url: blobExist,
                    data: { connectionString: connectionString, containerName: window.containername },
                    success: function (result) {
                        if (typeof result.Data != "undefined") {
                            if (result.Data.Key.toString().toLowerCase() == "true") {
                                hideWaitingPopup(".startup-page-conatiner");
                                if (isBoldBI && !isIntermediateDatabaseFormSubmit) {
                                    azureDataforBoldbi = azuredetails;
                                    dssystemsettings();
                                }

                                if (isIntermediateDatabaseFormSubmit) {
                                    intermediateDbDetails = getDatabaseFormValues(true);
                                }
                                else {
                                    systemSettingsDetails = getDatabaseFormValues();
                                }
                                if (isBoldReports) {
                                    postSystemSettingsData(systemSettingsDetails, azuredetails, intermediateDbDetails, null, tenantDetails, tenantType);
                                }
                            } else {
                                hideWaitingPopup(".startup-page-conatiner");
                                $(".azure-validation,.blob-error-message").css("display", "block");
                                changeFooterPostion();
                            }
                        } else {
                            hideWaitingPopup(".startup-page-conatiner");
                            $(".azure-validation,.blob-error-message").css("display", "block");
                            changeFooterPostion();
                        }
                    }
                });

                return false;
            }
            else {
                hideWaitingPopup(".startup-page-conatiner");
                if (isBoldReports) {
                    postSystemSettingsData(systemSettingsDetails, azuredetails, intermediateDbDetails, null, tenantDetails, tenantType);
                }
            }
        } else {
            hideWaitingPopup(".startup-page-conatiner");
            changeFooterPostion();
            return false;
        }
    } else {
        var isIntermediateDatabaseFormSubmit = $("#ds-db-config-submit").data("form") === "intermediate-db";

        if (isBoldBI && !isIntermediateDatabaseFormSubmit) {
            dssystemsettings();
        }

        if (isIntermediateDatabaseFormSubmit) {
            intermediateDbDetails = getDatabaseFormValues(true);
        }
        else {
            systemSettingsDetails = getDatabaseFormValues();
        }
        hideWaitingPopup(".startup-page-conatiner");
        if (isBoldReports) {
            postSystemSettingsData(systemSettingsDetails, azuredetails, intermediateDbDetails, null, tenantDetails, tenantType);
        }
    }
}

function isSimpleModeSelction() {
    return isSimpleModeValue === "true";
}

$(document).on("change", ".storage-checkbox", function () {
    $(".storage-form").find(".e-error").removeClass("e-error");
    $(".startup-validation").hide();
    var value = $("#storage-checkbox").is(":checked");
    if (value == true) {
        $.ajax({
            type: "POST",
            url: blobDetails,
            async: false,
            dataType: 'json',
            success: function (data) {
                var systemSetting = JSON.parse(data.AzureDetails);
                document.getElementById("txt-accountname").ej2_instances[0].value = systemSetting.BlobStorageAccountName;
                document.getElementById("txt-accesskey").ej2_instances[0].value = systemSetting.BlobStorageAccessKey;
                document.getElementById("txt-containername").ej2_instances[0].value = systemSetting.AzureBlobStorageContainerName;
                var checkedVal = getRadioButtonValue("Connection");
                var finalValue = "DefaultEndpointsProtocol=" + checkedVal + ";AccountName=" + systemSetting.BlobStorageAccountName + ";AccountKey=" + systemSetting.BlobStorageAccessKey;
                $("#connection-string").val(finalValue);
            }
        });
    }
    else {
        document.getElementById("txt-accountname").ej2_instances[0].value = null;
        document.getElementById("txt-accesskey").ej2_instances[0].value = null;
        document.getElementById("txt-containername").ej2_instances[0].value = null;
        var checkedVal = getRadioButtonValue("Connection");
        var finalValue = "DefaultEndpointsProtocol=" + checkedVal + ";AccountName=;AccountKey=";
        $("#connection-string").val(finalValue);
    }
});

function getTenantType() {
    var tenantType = "100";
    if ($("#tenant-type").length > 0 && isSiteCreation) {
            dropdownValue = document.getElementById("tenant-type").ej2_instances[0].value;
        if (dropdownValue === "BoldReportsOnPremise") {
            tenantType = "BoldReportsOnPremise";
        }
        else {
            tenantType = "BoldBIOnPremise";
        }
    }
    else {
        tenantType = isBoldBI ? "BoldBIOnPremise" : "BoldReportsOnPremise"
    }

    return tenantType;
}

function forceToLower(input) {
    input.value = input.value.toLowerCase();
}

function getDropDownValue(id) {
    return document.getElementById(id).ej2_instances[0].value;
}

function getRadioButtonValue(name) {
    return $("input[name='" + name + "']:checked").val();
}

function autoFocus(id) {
    document.getElementById(id).ej2_instances[0].focusIn();
}

function autoDeploy() {
    showWaitingPopup($(".startup-page-container-body"));
    $.ajax({
        type: "GET",
        url: autoDeploymentUrl,
        async: false,
        success: function (result) {
            if (typeof result.status != "undefined" && result.status) {
                $.ajax({
                    url: setSystemSettingsUrl,
                    type: "POST",
                    async: false,
                    data: {
                        systemSettingsData: result.systemSettingsData,
                        azureData: result.azureData,
                        tenantInfo: result.tenantInfo,
                        globalAdminDetails: result.globalAdminDetails
                    },
                    success: function (setSystemSettingsResponse) {
                        window.location = setSystemSettingsResponse.redirectUrl;
                    },
                    error: function (setSystemSettingsResponse) {
                        hideWaitingPopup($(".startup-page-container-body"));
                    }
                });
            }
            else {
                if (typeof result.message != "undefined" && result.message == "skipautodeploy") {
                    window.location = startUpUrl + "?skipAutoDeploy=true";
                }
                else {
                    hideWaitingPopup($(".startup-page-container-body"));
                    document.getElementById("auto-deployment-response").ej2_instances[0].show();
                    $("#auto-deployment-response-dialog-content").css("display", "block");
                }
            }
        }
    });
}

function skipAutoDeploy() {
    window.location = startUpUrl + "?skipAutoDeploy=true";
}


$(document).ready(function () {
    $("#txt-bloburl,#txt_tableurl,#txt_queueurl,#txt-accountname,#txt-accesskey").on("keyup", function () {
        var checkedVal = $("input[name='Connection']:checked").val();
        var accountName = $("#txt-accountname").val();
        var accessKey = $("#txt-accesskey").val();
        if (checkedVal == "http" || checkedVal == "https") {
            var finalValue = "DefaultEndpointsProtocol=" + checkedVal + ";AccountName=" + accountName + ";AccountKey=" + accessKey;
            $("#connection-string").val(finalValue);

        } else {
            var blobUrl = $("#txt-bloburl").val();
            var finalValue = "BlobEndpoint=" + blobUrl + ";AccountName=" + accountName + ";AccountKey=" + accessKey;
            $("#connection-string").val(finalValue);
        }
    });

    $("#blob-storage-form").validate({
        focusInvalid: false,
        errorElement: "span",
        onkeyup: function (element, event) {
            if (event.keyCode != 9) {
                isKeyUp = true;
                $(element).valid();
                isKeyUp = false;
            }
            else
                true;
        },
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            accountname: {
                isRequired: true,
                hasWhiteSpace: false
            },
            endpoint: {
                isRequired: true,
                IsValidEndPoint: true
            },
            accesskey: {
                isRequired: true
            },
            containername: {
                required: true
            },
            bloburl: {
                IsCustomEndpoint: true,
                IsValidEndPoint: true,
                IsValidCustomEndPoint: true
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("e-error");
            $(element).closest(".e-outline").siblings(".startup-validation").show();
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('e-error');
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
            $(".blob-error-message").css("display", "none");
            changeFooterPostion();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").text(error.html());
            changeFooterPostion();
        },
        messages: {
            accountname: {
                isRequired: window.TM.App.LocalizationContent.StorageAccount
            },
            endpoint: {
                isRequired: window.TM.App.LocalizationContent.EndPoint,
                IsValidEndPoint: window.TM.App.LocalizationContent.IsValidEndpoint,
            },
            accesskey: {
                isRequired: window.TM.App.LocalizationContent.AccessKey
            },
            containername: {
                required: window.TM.App.LocalizationContent.ContainerName
            },
            bloburl: {
                IsCustomEndpoint: window.TM.App.LocalizationContent.BlobUrl,
                IsValidEndPoint: window.TM.App.LocalizationContent.IsValidBlobUrl,
                IsValidCustomEndPoint: window.TM.App.LocalizationContent.IsValidCustomBlobUrl
            }
        }

    });
});

function validate_storage_type() {
    $(".blob-error-message").hide();
    var storageType = getRadioButtonValue('IsBlobStorage');
    window.storageType = storageType;
    if (storageType == "1") {
        if ($("#blob-storage-form").valid()) {
            window.accountname = $("#txt-accountname").val();
            window.endpoint = $("#txt-bloburl").val() == "" ? "https://" + $("#txt-accountname").val() + ".blob.core.windows.net" : $("#txt-bloburl").val();
            window.accesskey = $("#txt-accesskey").val();
            window.containername = $("#txt-containername").val();
            window.storageType = storageType;
            var blobUrl = $("#txt-bloburl").val();
            var connectionType = $("input[name='Connection']:checked").val();
            var connectionString = "";
            var storageEndPoint = $("#txt-endpoint").val();

            if (connectionType == "http" || connectionType == "https") {
                connectionString = "DefaultEndpointsProtocol=" + connectionType + ";AccountName=" + window.accountname + ";AccountKey=" + window.accesskey;

            } else {
                connectionString = "BlobEndpoint=" + blobUrl + ";AccountName=" + window.accountname + ";AccountKey=" + window.accesskey;
            }
            window.connectionType = connectionType;
            $.ajax({
                type: "POST",
                url: blobExist,
                data: { connectionString: connectionString, containerName: window.containername },
                success: function (result) {
                    if (typeof result.Data != "undefined") {
                        if (result.Data.Key.toString().toLowerCase() == "true") {
                            window.azureconnectionString = result.Data.ConnectionString;
                            $("#image-parent-container, #system-settings-filestorage-container").hide();
                            registerApplication(isSimpleModeSelction());
                            return false;
                        } else {
                            hideWaitingPopup(".startup-waiting-popup");
                            $(".azure-validation,.blob-error-message").css("display", "block");
                            changeFooterPostion();
                        }
                    } else {
                        hideWaitingPopup(".startup-waiting-popup");
                        $(".azure-validation,.blob-error-message").css("display", "block");
                        changeFooterPostion();
                    }
                }
            });

            return false;
        } else {
            hideWaitingPopup(".startup-waiting-popup");
            changeFooterPostion();
            return false;
        }
    } else {
        $("#image-parent-container, #system-settings-filestorage-container").hide();
        registerApplication(isSimpleModeSelction());
        return false;
    }
}


function onConnectionRadioChange(args) {
    var checkedVal = args.value;
    var accountName = $("#txt-accountname").val();
    var accessKey = $("#txt-accesskey").val();

    if (checkedVal == "http" || checkedVal == "https") {
        $(".custom-endpoint-form-element").hide();
        var finalValue = "DefaultEndpointsProtocol=" + checkedVal + ";AccountName=" + accountName + ";AccountKey=" + accessKey;
        $("#connection-string").val(finalValue);

    } else {
        var blobUrl = $("#txt-bloburl").val();

        var finalValue = "BlobEndpoint=" + blobUrl + ";AccountName=" + accountName + ";AccountKey=" + accessKey;
        $("#connection-string").val(finalValue);
        $(".custom-endpoint-form-element").show();
    }
    $("div.placeholder").remove();
    addPlacehoder("#system-settings-filestorage-container");
    changeFooterPostion();
}

function onBlobStorageChange(args) {
    var checkedVal = args.value;
    if (checkedVal == "0") {
        $("#blob-storage-form").hide("slow");
        if (storageButtonValue === "tenant") {
            $(".content-value").slideDown("slow");
        } else {
            $(".report-content").slideDown("slow");
        }
        $(".storage-checkbox").hide("slow");
        $(".azure-validation").css("display", "none");
    } else {
        $(".content-value").hide();
        $(".report-content").hide();
        if (storageButtonValue === "tenant") {
            $(".storage-checkbox").hide("slow");
        }
        else {
            $(".storage-checkbox").show("slow");
        }
        $("#blob-storage-form").slideDown("slow");
        $(".validation-txt-errors").hide();
        $(".azure-validation").css("display", "none");
        $(".e-error").removeClass("e-error");
        $("div.placeholder").remove();
        ResizeHeightForDOM();
    }
    addPlacehoder("#system-settings-filestorage-container");
    changeFooterPostion();
}


$(document).ready(function () {
    $(".admin-account-fields-container").validate({
        focusInvalid: false,
        errorElement: "span",
        onkeyup: function (element, event) {
            if ($(element).attr('id') == "txt-username") {
                $("#user-details").attr("data-username", $("#txt-username").val());
            }
            if ($(element).attr('id') == "txt-emailid") {
                $("#user-details").attr("data-email", $("#txt-emailid").val());
            }
            if ($(element).attr('id') == "txt-firstname" || $(element).attr('id') == "txt-lastname") {
                $("#user-details").attr("data-displayname", $("#txt-firstname").val() + " " + $("#txt-lastname").val());
            }
            if (event.keyCode != 9) {
                isKeyUp = true;
                $(element).valid();
                isKeyUp = false;
            }
            else
                true;
        },
        onfocusout: function (element) {
            $(element).valid();
        },
        onfocusin: function (element) {
            if (element.id === "new-password" && $("#new-password").data("toggle") === "popover" && $("#new-password").val() != undefined && $("#new-password").val() != "") {
                createPasswordPolicyRules();
            }
        },
        rules: {
            username: {
                isRequired: true,
                hasWhiteSpace: false,
                isValidName: true,
                isValidUser: true,
                additionalSpecialCharValidation: false
            },
            firstname: {
                isRequired: true,
                isValidName: true,
                additionalSpecialCharValidation: false
            },
            lastname: {
                additionalSpecialCharValidation: false
            },
            username: {
                isRequired: true,
                isValidUsernameLength: true,
                isValidUsername: false
            },
            email: {
                isRequired: true,
                isValidName: true,
                isValidEmail: true
            },
            password: {
                required: true,
                isValidPassword: true
            },
            confirm: {
                required: true,
                equalTo: "#new-password"
            }
        },
        highlight: function (element) {
            $(element).closest(".e-outline").siblings(".startup-validation").show();
            passwordBoxHightlight(element);
        },
        unhighlight: function (element) {
            passwordBoxUnhightlight(element);
         
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").text(error.html());
        },
        messages: {
            username: {
                isRequired: window.TM.App.LocalizationContent.UserNameValidator
            },
            firstname: {
                isRequired: window.TM.App.LocalizationContent.FirstNameValidator
            },
            lastname: {
                isValidName: window.TM.App.LocalizationContent.AvoidSpecailCharacters
            },
            email: {
                isRequired: window.TM.App.LocalizationContent.EmailValidator
            },
            password: {
                required: window.TM.App.LocalizationContent.PasswordValidator,
                isValidPassword: window.TM.App.LocalizationContent.InvalidPassword
            },
            confirm: {
                required: window.TM.App.LocalizationContent.ConfirmPasswordValidator,
                equalTo: window.TM.App.LocalizationContent.PasswordsMismatch
            }
        }
    });

    $("#new-password").bind("keyup", function (e) {
        if ($("#new-password").val() == $("#txt-confirm-password").val()) {
            $("#txt-confirm-password").closest(".form-group").removeClass("has-error");
            $("#txt-confirm-password").parent().find(">.startup-validation").hide();
        }
        createPasswordPolicyRules();
    });

    $("#new-password").on("change", function () {
        createPasswordPolicyRules();
        $("#new-password").valid();
    });

    $(document).on("input", "#txt-username", function () {
        if (IsValidUsername($("#txt-username").val())) {
            $(".admin-form-email").css("padding-top", "24px")
        }
        else {
            if ($("#txt-username").val() != "") {
                $(".admin-form-email").css("padding-top", "40px")
            }
        }
    });

    $("#admin-account-fields-container").on("keypress", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#user-account-proceed").click();
        }
    }); 

    $("#user-account-proceed").on("click", function () {
        if ($(".admin-account-fields-container").valid()) {
            $(".startup-waiting-popup").removeClass("storage-page-content");
            $("#system-settings-user-account-container").hide();
            $("#image-parent-container .startup-image").hide().attr("src", serverSetupImageUrl).fadeIn();
            $(".startup-content span.first-content").hide().text(window.TM.App.LocalizationContent.YourSite).slideDown();
            $(".startup-content span.second-content").hide().text(window.TM.App.LocalizationContent.YourSite2 + displayName + window.TM.App.LocalizationContent.YourSite3).slideDown();
            $("#system-settings-db-selection-container").show();
            $("#db-content-holder,#db-config-submit").show();
            $("#sql-existing-db-submit, .sql-server-existing-db").hide();
            autoFocus("txt-servername");
            $("#advanced_tab_db_name").hide();
            prefillDbNames();
            if (!isBoldBI) {
                hideDataStore();
            }
        }
    });
});


var databaseValidationMessage = window.TM.App.LocalizationContent.OneOrMoreErrors + " " + window.TM.App.LocalizationContent.Click + " " + "<a id='know-more-error'>" + window.TM.App.LocalizationContent.Here + "</a> " + window.TM.App.LocalizationContent.KnowMore + ".";
$(document).ready(function () {
    removeError();
    $("#db-content-holder").validate({
        errorElement: "span",
        onkeyup: function (element, event) {
            if (event.keyCode != 9) {
                isKeyUp = true;
                $(element).valid();
                isKeyUp = false;
            }
            else
                true;
        },
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            servername: {
                isRequired: true
            },
            portnumber: {
                isRequired: true
            },
            username: {
                required: true,
                sqlUsernamevalidation: true
            },
            password: {
                required: true,
                isValidCredentials: true
            },
            dbname: {
                required: true,
                isValidDatabaseName: true
            },
            databaseName: {
                required: true,
                isValidDatabaseName: true
            },
            serverdbname: {
                required: true,
                isValidDatabaseName: true
            },
            serverexistingdbname: {
                required: true,
                isValidDatabaseName: true
            },
            designerdbname: {
                required: true,
                isValidDatabaseName: true
            },
            designerexistingdbname: {
                required: true,
                isValidDatabaseName: true
            },
            tablePrefix: {
                isValidPrefix: true
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("e-error");
            $(element).closest(".e-outline").siblings(".startup-validation").show();
            if (element.id === "txt-dbname") {
                $(".database-error").html("").hide();
            }

            if (element.id === "database-name") {
                $(".database-error").html("").hide();
            }
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('e-error');
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
            changeFooterPostion();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").css("display", "block").html(error.html());
            changeFooterPostion();
        },
        messages: {
            servername: {
                isRequired: window.TM.App.LocalizationContent.ServerNamevalidator
            },
            portnumber: {
                isRequired: window.TM.App.LocalizationContent.PortValidator
            },
            username: {
                required: window.TM.App.LocalizationContent.UserNameValidator
            },
            password: {
                required: window.TM.App.LocalizationContent.PasswordValidator
            },
            dbname: {
                required: window.TM.App.LocalizationContent.TheDatabaseValidator
            },
            databaseName: {
                required: window.TM.App.LocalizationContent.ExistingDatabaseValidator
            },
            serverdbname: {
                required: window.TM.App.LocalizationContent.TheTenantServerDatabaseValidator
            },
            serverexistingdbname: {
                required: window.TM.App.LocalizationContent.ExistingDatabaseValidator
            },
            designerdbname: {
                required: window.TM.App.LocalizationContent.TheDesignerDatabaseValidator
            },
            designerexistingdbname: {
                required: window.TM.App.LocalizationContent.ExistingDatabaseValidator
            }
        }
    });

    $("#txt-password-db").validate({
        errorElement: "span",
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            password: {
                isRequired: true
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("e-error");
            $(element).closest(".e-outline").siblings(".startup-validation").show();
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('e-error');
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
            changeFooterPostion();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").text(error.html());
            changeFooterPostion();
        },
        messages: {
            password: {
                isRequired: window.TM.App.LocalizationContent.PasswordValidator
            }
        }
    });

    $("#txt-servername").validate({
        errorElement: "span",
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            servername: {
                isRequired: true
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("e-error");
            $(element).closest(".e-outline").siblings(".startup-validation").show();
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('e-error');
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
            changeFooterPostion();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").text(error.html());
            changeFooterPostion();
        },
        messages: {
            servername: {
                isRequired: window.TM.App.LocalizationContent.ServerNamevalidator
            }
        }
    });

    $("#txt-portnumber").validate({
        errorElement: "span",
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            portnumber: {
                isRequired: true
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("e-error");
            $(element).closest(".e-outline").siblings(".startup-validation").show();
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('e-error');
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
            changeFooterPostion();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").css("display", "block").text(error.html());
            changeFooterPostion();
        },
        messages: {
            servername: {
                isRequired: window.TM.App.LocalizationContent.PortValidator
            }
        }
    });

    $("#txt-login").validate({
        errorElement: "span",
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            username: {
                isRequired: true
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("e-error");
            $(element).closest(".e-outline").siblings(".startup-validation").show();
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('e-error');
            $(element).closest(".e-outline").siblings(".startup-validation").hide();
            changeFooterPostion();
        },
        errorPlacement: function (error, element) {
            $(element).closest(".e-outline").siblings(".startup-validation").text(error.html());
            changeFooterPostion();
        },
        messages: {
            username: {
                isRequired: window.TM.App.LocalizationContent.UserNameValidator
            }
        }
    });

    if (isSiteCreation === "false") {
        var interval = setInterval(function () {
            $.ajax({
                type: "GET",
                url: progressStatusUrl,
                success: function (result) {
                    $(".deployment-status").text(result.Message);
                    $(".progressBar-container .progress-bar").width(result.Percentage);
                    if (result.Percentage == "100%") {
                        clearInterval(interval);
                        $.ajax({
                            type: "POST",
                            url: deleteStatusUrl,
                            success: function (data) {
                                if (data) {
                                    $(".progressBar-container .progress-bar").width("10%")
                                }
                            }
                        });
                    }
                }
            });
        }, 3000);
    }
});




$(document).on("click", "#know-more-error", function () {
    messageBox("su-login-error", window.TM.App.LocalizationContent.DatabaseError, errorContent, "success", function () {
        onCloseMessageBox();
    });
});


$(document).on("click", "#db-config-submit, #sql-existing-db-submit", function () {
    var isNewDatabaseTab = $(this).attr("id") == "db-config-submit";
    removeError();
    var canProceed = $("#db-content-holder").valid();
    if (canProceed) {
        if (typeof isDockerOrk8s != "undefined" && !isDockerOrk8s) {
            showWaitingPopup($(".startup-waiting-popup"));
        }
        $(this).prop("disabled", true);
        window.serverName = $("#txt-servername").val();
        window.portNumber = $("#txt-portnumber").val();
        window.maintenanceDb = $('#maintenance-db').val();
        window.IsWindowsAuthentication = getRadioButtonValue("checkWindows") == "windows";
        window.login = $("#txt-login").val();
        window.password = $("#txt-password-db").val();
        var databaseType = getDropDownValue("database-type");
        window.databaseName = isNewDatabaseTab ? $("#txt-dbname").val() : $("#database-name").val();
        window.serverDatabaseName = isNewDatabaseTab ? $("#server-dbname").val() : $("#server-existing-dbname").val();
        window.intermediateDatabaseName = isNewDatabaseTab ? $("#imdbname").val() : $("#imdb-existing-dbname").val();
        window.sslEnabled = $("#secure-sql-connection").is(":checked");
        window.additionalParameters = $("#additional-parameter").val();
        if (!isNewDatabaseTab) {
            var tenantype = $("#tenant-type").val() === "" ? getTenantType() : $("#tenant-type").val();
        }
        doAjaxPost("POST", connectDatabaseUrl,
            {
                data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, MaintenanceDatabase: window.maintenanceDb, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, ServerDatabaseName: window.serverDatabaseName, IntermediateDatabaseName: window.intermediateDatabaseName, sslEnabled: window.sslEnabled, IsNewDatabase: isNewDatabaseTab, TenantType: getTenantType(), additionalParameters: window.additionalParameters }),
                isSimpleMode: isSimpleModeSelction()
            },
            function (result) {
                if (result.Data.key) {
                    window.connectionString = result.Data.connectionResponse.ServerConnectionString;
                    window.tenantServerConnectionString = result.Data.connectionResponse.TenantServerConnectionString;
                    window.intermediateServerConnectionString = result.Data.connectionResponse.IntermediateServerConnectionString;
                    var databaseType = getDropDownValue("database-type");
                    if (isNewDatabaseTab) {
                        doAjaxPost("POST", generateDatabaseUrl,
                            {
                                data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, MaintenanceDatabase: window.maintenanceDb, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, sslEnabled: window.sslEnabled, IsNewDatabase: true, additionalParameters: window.additionalParameters }),
                                isSimpleMode: isSimpleModeSelction()
                            },
                            function (result) {
                                hideWaitingPopup($(".startup-waiting-popup"));
                                if (result.Data.key) {
                                    registration(isSimpleModeSelction());
                                }
                                else {
                                    $("#db-config-submit").prop("disabled", false);
                                    errorContent = result.Data.value;
                                    $(".database-error").html(databaseValidationMessage).show();
                                }
                                changeFooterPostion();
                            }
                        );
                    }
                    else {
                        doAjaxPost("POST", checkTableExistsUrl,
                            {
                                data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, MaintenanceDatabase: window.maintenanceDb, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, ServerDatabaseName: window.serverDatabaseName, IntermediateDatabaseName: window.intermediateDatabaseName, sslEnabled: window.sslEnabled, TenantType: tenantype, IsNewDatabase: false, additionalParameters: window.additionalParameters }),
                                isSimpleMode: isSimpleModeSelction()
                            },
                            function (result) {
                                var items = result.Data.value;
                                if (result.Data.key && items.length > 0) {
                                    hideWaitingPopup($(".startup-waiting-popup"));
                                    var html = window.TM.App.LocalizationContent.TablesAlreadyExists;
                                    html += "<ol class='list-area'>";
                                    for (var t = 0; t < items.length; t++) {
                                        html += "<li>" + items[t] + "</li>";
                                    }
                                    html += "</ol>";
                                    errorContent = html;
                                    var id = result.Data.isServerError ? "#server-existing-dbname" : "#database-name";
                                    $(id).closest(".txt-holder").addClass("has-error");
                                    $(id).parent().find(">.startup-validation").html(databaseValidationMessage).show();
                                    $(".database-error").html(databaseValidationMessage).show();
                                    $("#sql-existing-db-submit").prop("disabled", false);
                                } else if (!result.Data.key && items.length <= 0) {
                                    doAjaxPost("POST", generateSQLTablesUrl,
                                        {
                                            data: JSON.stringify({ ServerType: databaseType, serverName: window.serverName, Port: window.portNumber, userName: window.login, password: window.password, IsWindowsAuthentication: window.IsWindowsAuthentication, databaseName: window.databaseName, IsNewDatabase: false })
                                        },
                                        function (result) {
                                            hideWaitingPopup($(".startup-waiting-popup"));
                                            if (result.Data.key) {
                                                registration(isSimpleModeSelction());
                                            }
                                            else {
                                                $("#sql-existing-db-submit").prop("disabled", false);
                                                $("#db_loader").hide();
                                                errorContent = result.Data.value;
                                                $(".database-error").html(databaseValidationMessage).show();
                                            }
                                        }
                                    );
                                    $(".db-connect-outer-container").find(".title").html(window.TM.App.LocalizationContent.DatabaseCreation + "!");
                                    $("#database-name").focus();
                                } else {
                                    hideWaitingPopup($(".startup-waiting-popup"));
                                    $("#db_config_generate, #db-config-submit").hide();
                                    $("#sql-existing-db-submit").show().prop("disabled", false);
                                    errorContent = result.Data.value;
                                    $(".database-error").html(databaseValidationMessage).show();
                                }
                            });
                    }
                   
                    $(".db-connect-outer-container").find(".title").html(window.TM.App.LocalizationContent.DatabaseCreation + "!");
                    $("#txt-dbname").focus();
                }
                else {
                    hideWaitingPopup($(".startup-waiting-popup"));
                    var id = "#txt-dbname";
                    if (isNewDatabaseTab) {
                       id = result.Data.connectionResponse.IsServerDatabaseError ? "#txt-dbname" : result.Data.connectionResponse.IsTenantServerDatabaseError ? "#server-dbname" : result.Data.connectionResponse.IsIntermediateServerDatabaseError ? "#imdbname" : id;
                    }
                    else {
                        id = result.Data.connectionResponse.IsServerDatabaseError ? "#database-name" : result.Data.connectionResponse.IsTenantServerDatabaseError ? "#server-existing-dbname" : result.Data.connectionResponse.IsIntermediateServerDatabaseError ? "#imdb-existing-dbname" : id;
                    }
                    if (isNewDatabaseTab) {
                        $("#db-config-submit").show().prop("disabled", false);
                    }
                    else {
                        $("#sql-existing-db-submit").show().prop("disabled", false);
                    }
                   
                    errorContent = result.Data.value;
                    $(id).closest('div').addClass("e-error");
                    $(id).closest(".e-outline").siblings(".startup-validation").html(databaseValidationMessage).show();
                }
            }
        );
    }
});

function registerApplication(isSimpleMode) {
    getFormData();
    hideWaitingPopup($(".startup-waiting-popup"));
    $(".startup-waiting-popup").addClass("storage-page-content");
    var elem = $(".system-startUp-settings-bg");
    elem.ejWaitingPopup({ text: " " });
    $(".e-text").find(".configuration-status").remove();
    $(".e-text").append('<span class="configuration-status"></span>');
    $("#progress-parent-container").show();
    var globalAdminDetails = $("#global-admin-details").val();
    var systemSettingsData = $("#system-settings-data").val();
    var azureData = $("#azure-data").val();
    var tenantInfo = $("#tenant-info").val();
    $.ajax({
        url: setSystemSettingsUrl,
        type: "POST",
        data: {
            systemSettingsData: systemSettingsData,
            azureData: azureData,
            tenantInfo: tenantInfo,
            globalAdminDetails: globalAdminDetails,
            isSimpleMode: isSimpleMode,
        },
        success: function (setSystemSettingsResponse) {
            window.location = setSystemSettingsResponse.redirectUrl;
        },
        error: function (setSystemSettingsResponse) {

        }
    });
}

function registration(isSimpleMode) {
    $("#image-parent-container, #system-settings-db-selection-container").hide();
    delete window.serverName;
    delete window.portNumber;
    delete window.login;
    delete window.password;
    delete window.databaseName;
    delete window.sslEnabled;
    if (isSimpleMode && !isAzureApplication ) {
        registerApplication(isSimpleMode);
    }
    else if (isAzureApplication && selfHosted) {
        azureStep();
    }
    else {
        advancedThirdStep();
    }
}

function azureStep() {
    $("#image-parent-container").show();
    $("#image-parent-container .startup-image").hide().attr("src", storageUrl).fadeIn();
    $(".startup-content span.first-content").hide().text(window.TM.App.LocalizationContent.YourStorage).slideDown();
    $(".startup-content span.second-content").hide().text(isBoldBI ? window.TM.App.LocalizationContent.StorageBIMsg : window.TM.App.LocalizationContent.StorageReportsMsg).slideDown();
    $(".startup-content a#help-link").attr("href", idStorageConfiguration);
    $(".startup-waiting-popup").addClass("storage-page-content");
    $("#system-settings-filestorage-container").slideDown("slow");
    $("#file-storage").prop("disabled", true);
    $("#blob-storage").prop("checked", true);
    $(".custom-endpoint-form-element, .report-content").hide();
    $("#blob-storage-form").slideDown("slow");
    $("#report-storage").hide();
    $(".content-value").hide();
    storageButtonValue = "tenant";
    $(".storage-checkbox").hide();
    $("body").removeClass("startup-page-container-body");

    if (connectionType === "https") {
        $("#https").prop("checked", true);
    } else if (connectionType === "http") {
        $("#http").prop("checked", true);
    }

    $("#txt-accountname").val(storageAccountName);
    $("#txt-endpoint").val(blobServiceEndpoint);
    $("#txt-accesskey").val(accessKey);
    $("#txt-containername").val(containerName);
    validate_storage_type();
    
    if (connectionType === "https") {
        $("#https").prop("checked", true);
    } else if (connectionType === "http") {
        $("#http").prop("checked", true);
    }

    $("#txt-accountname").val(storageAccountName);
    $("#txt-endpoint").val(blobServiceEndpoint);
    $("#txt-accesskey").val(accessKey);
    $("#txt-containername").val(containerName);
    validate_storage_type();
}

function advancedThirdStep() {
    $("#image-parent-container").show();
    $("#image-parent-container .startup-image").hide().attr("src", storageUrl).fadeIn();
    $(".startup-content span.first-content").hide().text(window.TM.App.LocalizationContent.YourStorage).slideDown();
    $(".startup-content span.second-content").hide().text(isBoldBI ? window.TM.App.LocalizationContent.StorageBIMsg : window.TM.App.LocalizationContent.StorageReportsMsg).slideDown();
    $(".startup-content a#help-link").attr("href", idStorageConfiguration);
    $(".startup-waiting-popup").addClass("storage-page-content");
    $("#system-settings-filestorage-container").slideDown("slow");
    $(".custom-endpoint-form-element, .report-content").hide();
    $("#blob-storage-form").hide();
    $("#report-storage").hide();
    storageButtonValue = "tenant";
    $(".storage-checkbox").hide("slow");
}

function forceToLower(input) {
    input.value = input.value.toLowerCase();
}

function DomResize() {
    //$("#startup-page-conatiner").height($("#system-settings-general").height() + $("#base-footer-div").height());
}

function onDatbaseChange(args) {
    removeError();
    var checkedVal = args.value.toLowerCase();
    if (!isSiteCreation) {
        $("#admin-nav").show();
    }
    else if (!isBoldReportsTenantType() && isSiteCreation) {
        $("#admin-nav").show();
    }
    else if (isBoldReportsTenantType && isSiteCreation) {
        $("#admin-nav").hide();
    }

    showDataStore();
    switch (checkedVal) {
        case "mssql":
            $('.port-num').removeClass("show").addClass("hidden");
            $('.maintenancedb').removeClass("show").addClass("hidden");
            $('.auth-type').removeClass("hidden").addClass("show");
            var isWindowsAuth = getRadioButtonValue("checkWindows") === "windows";
            document.getElementById("txt-login").ej2_instances[0].enabled = !isWindowsAuth;
            document.getElementById("txt-password-db").ej2_instances[0].enabled = !isWindowsAuth;
            $('#db-content-holder').css("display", "block");
            $('#db-config-submit,#sql-existing-db-submit').removeClass("hide");
            $("#move-to-next,.sqlce-content").removeClass("show").addClass("hide");
            $(".content-display").hide();
            $(".show-sql-content").slideDown("slow");
            if (!isSiteCreation) {
                prefillDbNames();
            }
            if (!isSiteCreation && isBoldReports) {
                hideDataStore();
            }
            else if (isSiteCreation && isBoldReportsTenantType()) {
                hideDataStore();
            }
            $("div.placeholder").remove();
            $(".note-additional-parameter a").attr("href", sqlParameter);
            DomResize();
            break;
        case "mssqlce":
            $('#db-content-holder').css("display", "none");
            $('#db-config-submit,#sql-existing-db-submit').addClass("hide");
            $("#move-to-next,.sqlce-content").removeClass("hide").addClass("show");
            break;
        case "mysql":
            $('.port-num').removeClass("hidden").addClass("show");
            $('.maintenancedb').removeClass("show").addClass("hidden");
            $('.auth-type').removeClass("show").addClass("hidden");
            $('#db-content-holder').css("display", "block");
            document.getElementById("txt-login").ej2_instances[0].enabled = true;
            document.getElementById("txt-password-db").ej2_instances[0].enabled = true;
            $('#db-config-submit,#sql-existing-db-submit').removeClass("hide");
            $("#move-to-next,.sqlce-content").removeClass("show").addClass("hide");
            $(".content-display").hide();
            $(".show-sql-content").slideDown("slow");
            hideDataStore();
            if (isSiteCreation) {
                $("#admin-nav").hide();
            }

            if (!isSiteCreation) {
                prefillDbNames();
            }
           
            $("div.placeholder").remove();
            $(".note-additional-parameter a").attr("href", mySQLParameter);
            DomResize();
            break;
        case "oracle":
            $("#oracle-dsn>option:eq(0)").prop("selected", true);
            $("#oracle-dsn").selectpicker("refresh");
            $(".database-dropdown-oracle ul").html("");
            $("#database-name-oracle").html("<option value='' class='display-none'>" + window.TM.App.LocalizationContent.SelectDatabase + "</option>");
            $("#database-name-oracle").selectpicker("refresh");
            $("#new-db-oracle").prop("checked", true).trigger("change");
            $(".content-display").hide();
            $(".show-oracle-content").slideDown("slow");
            $("div.placeholder").remove();
            DomResize();
            break;
        case "postgresql":
            $('.auth-type').removeClass("show").addClass("hidden");
            $('.port-num').removeClass("hidden").addClass("show");
            $('.maintenancedb').removeClass("hidden").addClass("show");
            $('#db-content-holder').css("display", "block");
            document.getElementById("txt-login").ej2_instances[0].enabled = true;
            document.getElementById("txt-password-db").ej2_instances[0].enabled = true;
            $('#db-config-submit,#sql-existing-db-submit').removeClass("hide");
            $("#move-to-next,.sqlce-content").removeClass("show").addClass("hide");
            $(".content-display").hide();
            $(".show-sql-content").slideDown("slow");
           
            if (!isSiteCreation) {
                prefillDbNames();
            }
            if (!isSiteCreation && isBoldReports) {
                hideDataStore();
            }
            else if (isSiteCreation && isBoldReportsTenantType()) {
                hideDataStore();
            }
            $("div.placeholder").remove();
            $(".note-additional-parameter a").attr("href", postgresSQLParameter);
            DomResize();
            if (isSiteCreation) {
                ResizeHeightForDOM();
            }

            break;
    }
        $("#new-db").prop("checked", true).trigger("change");

    if (getRadioButtonValue("databaseType") == "1") {
        $("#sql-existing-db-submit, .sql-server-existing-db").show();
        $(".database-name, #db-config-submit").hide();
    }
    else {
        $("#sql-existing-db-submit, .sql-server-existing-db").hide();
        $(".database-name, #db-config-submit").show();
    }

    if (actionType.toLowerCase() != "edit") {
        document.getElementById("txt-login").ej2_instances[0].value = null;
        document.getElementById("txt-password-db").ej2_instances[0].value = null;
        document.getElementById("txt-servername").ej2_instances[0].value = null;
        document.getElementById("additional-parameter").ej2_instances[0].value = null;
    }

    if (typeof actionType != 'undefined' && actionType.toLowerCase() != "edit") {
        switch (checkedVal) {
            case "mysql":
                $('#txt-portnumber-info').html(window.TM.App.LocalizationContent.MySqlPortInfo);
                document.getElementById("txt-portnumber").ej2_instances[0].value = "3306";
                break;
            case "postgresql":
                $('#txt-portnumber-info').html(window.TM.App.LocalizationContent.postgresPortInfo);
                document.getElementById("txt-portnumber").ej2_instances[0].value = "5432";
                document.getElementById("maintenance-db").ej2_instances[0].value = "postgres";
                break;
        }
    }
 
    addPlacehoder("#system-settings-db-selection-container");
    changeFooterPostion();
};

function onWindowsChange(args) {
    var windowsCheck = args.value == "windows";
    var databaseType = getDropDownValue("database-type");
    $("#auth-type-info").removeClass("show").addClass("hide");
    if (windowsCheck && databaseType == "MSSQL") {
        document.getElementById("txt-login").ej2_instances[0].enabled = false;
        document.getElementById("txt-password-db").ej2_instances[0].enabled = false;
        document.getElementById("txt-login").ej2_instances[0].value = null;
        document.getElementById("txt-password-db").ej2_instances[0].value = null;
        $("#auth-type-info").removeClass("hide").addClass("show");
    }
    else if (databaseType == "MSSQL") {
        document.getElementById("txt-login").ej2_instances[0].enabled = true;
        document.getElementById("txt-password-db").ej2_instances[0].enabled = true;
    }
    removeError();
}


function onDbSelectChange() {
    removeError();
    if ($("input[name='databaseType']:checked").val() === "1") {
        $(".sql-server-existing-db, #sql-existing-db-submit").show();
        $(".database-name, #db-config-submit").hide();
    } else {
        $(".sql-server-existing-db, #sql-existing-db-submit").hide();
        $(".database-name, #db-config-submit").show();
    }

    var databaseType = getDropDownValue("database-type");
    if (databaseType == "MySQL") {
        hideDataStore();
    }
    changeFooterPostion();
    DomResize();
    if (!isBoldBI) {
        hideDataStore();
    }
}

function prefillDbNames() {
    document.getElementById("txt-dbname").ej2_instances[0].value = "bold_services";
    document.getElementById("server-dbname").ej2_instances[0].value = "bold_services_server";
    document.getElementById("imdbname").ej2_instances[0].value = "bold_services_datastore";
}

function hideDataStore() {
    $(".data-store-hide").removeClass("show").addClass("hidden");
    $(".data-store-existing-db-hide").removeClass("show").addClass("hidden");
}

function showDataStore() {
    if (getRadioButtonValue("databaseType") == "1") {
        $(".data-store-existing-db-hide").removeClass("hidden").addClass("show");
    }
    else {
        $(".data-store-hide").removeClass("hidden").addClass("show");
    }
}

function removeError() {
    $(".e-error").removeClass("e-error");
    $(".validation-txt-errors").hide();
    $(".database-error").hide();
}
var windowRef;
var licenseKey;
var getLicenseUrl;
var licenseToken;
$(document).ready(function () {
    $(document).on("click", "#online-license", function (e) {
        showWaitingPopup($(".startup-page-container-body"));
        if (windowRef !== undefined) {
            clearInterval(timer);
            windowRef.close();
        }

        addButtonObj = $(this);
        $(window).off('message', $.proxy(handleApplyLicense, window, addButtonObj));
        $(window).on('message', $.proxy(handleApplyLicense, window, addButtonObj));
        windowRef = window.open($(this).attr("license-service-url") + "&origin=" + window.location.origin, "", "height=800,width=960");
        timer = setInterval($.proxy(checkWindowRef, 500, addButtonObj));
    });

    $(document).on("click", "#browse-lic, #file-name", function () {
        $("#getFile").click();
    });

    $('[data-toggle="popover"]').popover();

    $('input[type="file"]').change(function (event) {
        $(".validation-error-message").html('');
        $(".validation-error-message").addClass("display-none");
        var fileName = event.originalEvent.target.files[0].name;

        if (fileName.split('.').pop() == "lic") {
            $("#file-name").val(fileName);
            var file = event.originalEvent.target.files[0];
            var data = {};
            showWaitingPopup($(".startup-page-container-body"));
            readFile(file, function (content) {
                data.content = content;
                sendData(data, validateLicenseKeyUrl);
            })
            hideWaitingPopup($(".startup-page-container-body"));
        }
        else {
            $("#file-name").val('');
            $(".validation-error-message").html("Invalid file type. Please select .lic format only");
            $(".validation-error-message").removeClass("display-none");
        }

    });

    $(document).on("click", "#offline-license", function () {
        getLicenseUrl = $(this).attr("data-offlinelicense-url");
        $("#tenant-type").val($(this).attr("data-tenant-type"));
        $("#system-settings-welcome-container").hide();
        $(".startup-content").addClass("display-none");
        $(".welcome-content").addClass("display-none");
        $("#image-parent-container .startup-image").addClass("offline-width")
        $("#image-parent-container .startup-image").hide().attr("src", offlineSetupImageUrl).fadeIn();
        $("#system-settings-offline-license-container").show();
    });
});

function checkWindowRef(addButtonObj) {
    if (windowRef.closed) {
        hideWaitingPopup($(".startup-page-container-body"));
        clearInterval(timer);
    }
}

function handleApplyLicense(addButtonObj, evt) {
    if (evt.originalEvent.data.isSuccess !== undefined) {
        if (evt.originalEvent.data.isSuccess === true) {

            var refreshToken = evt.originalEvent.data.refreshtoken != undefined ? evt.originalEvent.data.refreshtoken : "";
            var boldLicenseToken = evt.originalEvent.data.boldLicenseToken != undefined && evt.originalEvent.data.boldLicenseToken != null ? evt.originalEvent.data.boldLicenseToken : "";

            $.ajax({
                type: "POST",
                url: updateLicenseKeyUrl,
                data: { licenseKey: evt.originalEvent.data.licenseKey, refreshToken: refreshToken, licenseType: "1", boldLicenseToken: boldLicenseToken, currentUrl: window.location.origin },
                beforeSend: showWaitingPopup($(".startup-page-container-body")),
                success: function (result) {
                    if (result.Status) {
                        $('meta[name=has-drm-configuration]').attr("content", "true");
                        if (isDockerOrk8s) {
                            autoDeploy();
                        }
                        else {
                            $("#image-parent-container .startup-image").hide().attr("src", adminSetupImageUrl).fadeIn();
                            $(".startup-content").fadeIn();
                            $("#system-settings-welcome-container").hide();
                            $(".welcome-content").addClass("display-none");
                            $("#system-settings-offline-license-container").hide();
                            $('#auth-type-dropdown').removeClass("hide").addClass("show");
                            $("#system-settings-user-account-container").slideDown("slow");

                            if (evt.originalEvent.data.userInfo != undefined && evt.originalEvent.data.userInfo != null) {
                                preFillUser(evt.originalEvent.data.userInfo);
                                autoFocus("new-password");
                            }
                            else {
                                autoFocus("txt-firstname");
                            }
                        }
                    }
                    hideWaitingPopup($(".startup-page-container-body"));
                }
            });

        } else if (evt.originalEvent.data.isSuccess === false) {
        }
    }
}

function readFile(file, cb) {
    var content = "";
    var reader = new FileReader();

    reader.onload = function (e) {
        content = reader.result;
        cb(content);
    }

    reader.readAsText(file);
    $("#getFile")[0].value = '';
}

function sendData(data, url) {
    var validJSON = false;

    try {
        JSON.parse(data.content);
        validJSON = true;
    }
    catch(err) {
        $(".validation-error-message").html(window.TM.App.LocalizationContent.LicenseFileCorrupt + "<a target='_blank' href='" + getLicenseUrl + "'>" + window.TM.App.LocalizationContent.Here + "</a>");
        $(".validation-error-message").removeClass("display-none");
    }

    if (validJSON) {
        var key = JSON.parse(data.content).unlock_key;
        var boldLicenseToken = JSON.parse(data.content).license_token;
        licenseKey = key;
        licenseToken = boldLicenseToken;
        if (key !== undefined && !isEmptyOrSpaces(key)) {
            $.ajax({
                type: 'POST',
                data: { key: key, tenantType: parseInt($("#tenant-type").val()) },
                url: url,
                beforeSend: showWaitingPopup($(".startup-page-container-body")),
                success: function (data) {
                    if (data.Status) {

                        if (data.Email !== undefined && !isEmptyOrSpaces(data.Email)) {
                            $("#customer-email").html(data.Email);
                            $("#customer-email-container").removeClass("display-none");
                        }

                        if (data.SubscriptionId !== undefined && !isEmptyOrSpaces(data.SubscriptionId)) {
                            $("#subscription-id").html(data.SubscriptionId);
                            $("#subscription-id-container").removeClass("display-none");
                        }

                        if (data.SubscriptionName !== undefined && !isEmptyOrSpaces(data.SubscriptionName)) {
                            $("#subscription-name").html(data.SubscriptionName);
                            $("#subscription-name-container").removeClass("display-none");
                        }

                        if (data.PlanName !== undefined && !isEmptyOrSpaces(data.PlanName)) {
                            $("#plan-name").html(data.PlanName);
                            $("#plan-name-container").removeClass("display-none");
                        }

                        if (!data.IsPerpetualLicense) {
                            if (data.ExpiryDate !== undefined && !isEmptyOrSpaces(data.ExpiryDate)) {
                                $("#expiry-date").html(data.ExpiryDate);
                                $("#expiry-date-container").removeClass("display-none");
                            }
                        }

                        if (data.TenantStatus !== undefined && !isEmptyOrSpaces(data.TenantStatus)) {
     
                            $("#tenant-status").html(data.TenantStatus);
                            $("#tenant-status-container").removeClass("display-none");

                            if (data.TenantStatus == "Active") {
                                $("#tenant-status").addClass("active-status");
                            }
                            else if (data.TenantStatus == "Trial") {
                                $("#tenant-status").addClass("trial");
                            }

                            if (data.IsPerpetualLicense) {
                                $("#tenant-status").html("Perpetual")
                                $("#tenant-status").addClass("active-status");
                            }
                        }

                        $("#confirm-license").prop('disabled', false);
                    }
                    else if (!data.Status && data.Message != undefined) {
                        $("#customer-email-container, #subscription-id-container, #subscription-name-container,#plan-name-container, #expiry-date-container, #tenant-status-container").addClass("display-none");
                        data.Message += "<a target='_blank' href='" + getLicenseUrl + "'> here</a>";
                        $(".validation-error-message").html(data.Message);
                        $(".validation-error-message").removeClass("display-none");
                        $("#confirm-license").prop('disabled', true);
                    }

                    hideWaitingPopup($(".startup-page-container-body"));
                },
                error: function () {
                    hideWaitingPopup($(".startup-page-container-body"));
                }
            });
        }
        else {
            $(".validation-error-message").html(window.TM.App.LocalizationContent.LicenseFileCorrupt + "<a target='_blank' href='" + getLicenseUrl + "'>" + window.TM.App.LocalizationContent.Here + "</a>");
            $(".validation-error-message").removeClass("display-none");
        }
    }
}

function offlineLicenseComplete() {
    $("#image-parent-container .startup-image").removeClass("offline-width")
    $("#license-details").slideUp("slow");
    $(".validation-error-message").addClass("display-none");
    $("#confirm-license").prop('disabled', true);
    $("#file-name").val('');
    licenseKey = "";
    licenseToken = "";
    $("#tenant-type").val("");
    hideWaitingPopup($(".startup-page-container-body"));
}

function confirmLicenseUpdate() {
    if (licenseKey !== undefined && !isEmptyOrSpaces(licenseKey)) {
        $.ajax({
            type: "POST",
            url: updateLicenseKeyUrl,
            data: { licenseKey: licenseKey, licenseType: "2", currentUrl: window.location.origin, boldLicenseToken: licenseToken   },
            beforeSend: showWaitingPopup($(".startup-page-container-body")),
            success: function (result) {
                if (result.Status) {
                    $('meta[name=has-drm-configuration]').attr("content", "true");
                    offlineLicenseComplete();
                    if (isDockerOrk8s) {
                        autoDeploy();
                    }
                    else {
                        $("#image-parent-container .startup-image").removeClass("offline-width")
                        $("#image-parent-container .startup-image").hide().attr("src", adminSetupImageUrl).fadeIn();
                        $(".startup-content").fadeIn();
                        $("#system-settings-welcome-container").hide();
                        $(".welcome-content").addClass("display-none");
                        $("#system-settings-offline-license-container").hide();
                        $('#auth-type-dropdown').removeClass("hide").addClass("show");
                        $("#system-settings-user-account-container").slideDown("slow");
                        autoFocus("txt-firstname");
                    }
                }
                else {
                    offlineLicenseComplete();
                }
            }
        });
    }
    else {
        hideWaitingPopup($(".startup-page-container-body"));
        WarningAlert(window.TM.App.LocalizationContent.ManageLicense, window.TM.App.LocalizationContent.LicenseUpdateFailed, 0);
    }
}

function returnStartupHome() {
    $("#system-settings-welcome-container").show();
    $(".startup-content").addClass("display-none");
    $(".welcome-content").removeClass("display-none");
    $("#image-parent-container .startup-image").removeClass("offline-width")
    $("#image-parent-container .startup-image").hide().attr("src", startupHome).fadeIn();
    $("#customer-email-container").addClass("display-none");
    $("#subscription-id-container").addClass("display-none");
    $("#subscription-name-container").addClass("display-none");
    $("#plan-name-container").addClass("display-none");
    $("#expiry-date-container").addClass("display-none");
    $("#tenant-status-container").addClass("display-none");
    $(".validation-error-message").addClass("display-none");
    $("#file-name").val('');
    licenseKey = "";
    $("#tenant-type").val("");
    $("#system-settings-offline-license-container").hide();
}

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function preFillUser(obj) {
    var userInfo = JSON.parse(obj);

    document.getElementById("txt-username").ej2_instances[0].value = userInfo.email;
    document.getElementById("txt-emailid").ej2_instances[0].value = userInfo.email;
    document.getElementById("txt-firstname").ej2_instances[0].value = userInfo.first_name;
    document.getElementById("txt-lastname").ej2_instances[0].value = userInfo.last_name;
}
$(document).on("ready", function () {
    $(".show-hide-password").on("click", function () {
        if ($(this).siblings("input").is(":password")) {
            $(this).siblings("input").attr('type', 'text').val();
            $(this).removeClass('su-show').addClass('su-hide').attr("data-original-title", window.TM.App.LocalizationContent.ClicktoHide);
            $(this).tooltip('show');
        }
        else {
            $(this).siblings("input").attr('type', 'password');
            $(this).removeClass('su-hide').addClass('su-show').attr("data-original-title", window.TM.App.LocalizationContent.ClicktoView);
            $(this).tooltip('show');
        }
    });

    //For the purpose of Responsive layout
    $(".show-hide-password").bind("touchstart", function () {
        if ($(this).siblings("input").is(":password")) {
            $(this).siblings("input").attr("type", "text");
        }
        else {
            $(this).siblings("input").attr("type", "password");
        }
    });
    $(".show-hide-password").on("touchend", function () {
        if ($(this).siblings("input").is(":password")) {
            $(this).siblings("input").attr('type', 'text');
        }
        else {
            $(this).siblings("input").attr('type', 'password');
        }
    });

  
    if (window.innerWidth < 1041) {

        $(".show-hide-password").on("click", function () {
            if ($(this).siblings("input").is(":password")) {
                $(this).siblings("input").attr('type', 'text');
            }
            else {
                $(this).siblings("input").attr('type', 'password');
            }
        });
    }


    //Ej2 inputbox show/hide password
    $(".show-hide-password-ej2").on("click", function () {
        if ($(this).siblings().find("input").is(":password")) {
            $(this).siblings().find("input").attr('type', 'text');
            $(this).removeClass('su-show').addClass('su-hide').attr("data-original-title", window.TM.App.LocalizationContent.ClicktoHide);
            $(this).tooltip('show');
        }
        else {
            $(this).siblings().find("input").attr('type', 'password');
            $(this).removeClass('su-hide').addClass('su-show').attr("data-original-title", window.TM.App.LocalizationContent.ClicktoView);
            $(this).tooltip('show');
        }
    });

    $(".show-hide-password-ej2").bind("touch", function () {
        if ($(this).siblings().find("input").is(":password")) {
            $(this).siblings().find("input").attr('type', 'text');
            $(this).removeClass('su-show');
            $(this).addClass('su-hide');

        }
        else {
            $(this).siblings().find("input").attr('type', 'password');
            $(this).removeClass('su-hide');
            $(this).addClass('su-show');

        }
    });
});