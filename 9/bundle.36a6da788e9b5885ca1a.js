(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",d="quarter",c="year",h="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:o,D:h,h:r,m:s,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",$={};$[_]=v;var g="$isDayjsObject",b=function(t){return t instanceof T||!(!t||!t[g])},w=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new T(n)},C=y;C.l=w,C.i=b,C.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var T=function(){function v(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(C.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return C},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return C.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,d=!!C.u(e)||e,u=C.p(t),p=function(t,e){var i=C.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return d?i:i.endOf(o)},f=function(t,e){return C.w(n.toDate()[t].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case c:return d?p(1,0):p(31,11);case l:return d?p(1,m):p(0,m+1);case a:var $=this.$locale().weekStart||0,g=(v<$?v+7:v)-$;return p(d?y-g:y+(6-g),m);case o:case h:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,d=C.p(t),u="set"+(this.$u?"UTC":""),p=(a={},a[o]=u+"Date",a[h]=u+"Date",a[l]=u+"Month",a[c]=u+"FullYear",a[r]=u+"Hours",a[s]=u+"Minutes",a[i]=u+"Seconds",a[n]=u+"Milliseconds",a)[d],f=d===o?this.$D+(e-this.$W):e;if(d===l||d===c){var v=this.clone().set(h,1);v.$d[p](f),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[C.p(t)]()},m.add=function(n,d){var h,u=this;n=Number(n);var p=C.p(d),f=function(t){var e=M(u);return C.w(e.date(e.date()+Math.round(t*n)),u)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===o)return f(1);if(p===a)return f(7);var v=(h={},h[s]=t,h[r]=e,h[i]=1e3,h)[p]||1,m=this.$d.getTime()+n*v;return C.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=C.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,h=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},p=function(t){return C.s(r%12||12,t,"0")},v=c||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(f,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return C.s(e.$y,4,"0");case"M":return a+1;case"MM":return C.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,d,3);case"MMMM":return h(d,a);case"D":return e.$D;case"DD":return C.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,l,2);case"ddd":return h(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(r);case"HH":return C.s(r,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return v(r,o,!0);case"A":return v(r,o,!1);case"m":return String(o);case"mm":return C.s(o,2,"0");case"s":return String(e.$s);case"ss":return C.s(e.$s,2,"0");case"SSS":return C.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,h,u){var p,f=this,v=C.p(h),m=M(n),y=(m.utcOffset()-this.utcOffset())*t,_=this-m,$=function(){return C.m(f,m)};switch(v){case c:p=$()/12;break;case l:p=$();break;case d:p=$()/3;break;case a:p=(_-y)/6048e5;break;case o:p=(_-y)/864e5;break;case r:p=_/e;break;case s:p=_/t;break;case i:p=_/1e3;break;default:p=_}return u?p:C.a(p)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return C.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),E=T.prototype;return M.prototype=E,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",h]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,T,M),t.$i=!0),M},M.locale=w,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=$[_],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2628e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},h=function(t){return t instanceof _},u=function(t,e,n){return new _(t,n,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},v=function(t){return f(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},y=function(t,e){return t?f(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return u(t*c[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(d);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/a),t%=a,this.$d.months=v(t/l),t%=l,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/s),t%=s,this.$d.minutes=v(t/i),t%=i,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var a=y(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,d=s.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+d+s.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},m.as=function(t){return this.$ms/c[p(t)]},m.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/c[n]):this.$d[n],e||0},m.add=function(t,e,n){var i;return i=e?t*c[p(e)]:h(t)?t.$ms:u(t,this).$ms,u(this.$ms+i*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return u(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.valueOf=function(){return this.asMilliseconds()},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}(),$=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")};return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return u(t,{$l:n},e)},s.isDuration=h;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return h(t)?$(this,t,1):r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return h(t)?$(this,t,-1):o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],d=i.base?l[0]+i.base:l[0],c=r[d]||0,h="".concat(d," ").concat(c);r[d]=c+1;var u=n(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:h,updater:f,references:1})}o.push(h)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),d=0;d<r.length;d++){var c=n(r[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";class t{#t=new Set;addObserver(t){this.#t.add(t)}removeObserver(t){this.#t.delete(t)}_notify(t,e){this.#t.forEach((n=>n(t,e)))}}const e=["taxi","bus","flight","train","ship","check-in","sightseeing","restaurant"],i="DEFAULT",s="EDITING",r={EVERYTHING:"Click New Event to create your first point",PAST:"There are no past events now",PRESENT:"There are no present events now",FUTURE:"There are no future events now"},o={PATCH:"Patch",MINOR:"Minor",MAJOR:"Major"},a={EVERYTHING:"everything",PAST:"past",PRESENT:"present",FUTURE:"future"},l=["day","event","time","price","offers"],d={DAY:"day",TIME:"time",PRICE:"price"},c="UpdateWaypoint",h="AddWaypoint",u="DeleteWaypoint",p="flight";class f{constructor(t,e){this._endPoint=t,this._authorization=e}async _load({url:t,method:e="GET",body:n=null,headers:i=new Headers}){i.append("Authorization",this._authorization);const s=await fetch(`${this._endPoint}/${t}`,{method:e,body:n,headers:i});try{return f.checkStatus(s),s}catch(t){f.catchError(t)}}static parseResponse(t){return t.json()}static checkStatus(t){if(!t.ok)throw new Error(`${t.status}: ${t.statusText}`)}static catchError(t){throw t}}class v extends f{get points(){return this._load({url:"points"}).then(f.parseResponse)}get destinations(){return this._load({url:"destinations"}).then(f.parseResponse)}get offers(){return this._load({url:"offers"}).then(f.parseResponse)}async updatePoint(t){const e=await this._load({url:`points/${t.id}`,method:"PUT",body:JSON.stringify(this.#e(t)),headers:new Headers({"Content-Type":"application/json"})});return await f.parseResponse(e)}async addPoint(t){const e=await this._load({url:"points",method:"POST",body:JSON.stringify(this.#e(t)),headers:new Headers({"Content-Type":"application/json"})});return await f.parseResponse(e)}async deletePoint(t){return await this._load({url:`points/${t.id}`,method:"DELETE"})}#e(t){const e={...t,base_price:+t.basePrice,date_from:t.dateFrom,date_to:t.dateTo,is_favorite:t.isFavorite||!1,offers:t.offersId||[]};return delete e.basePrice,delete e.dateFrom,delete e.dateTo,delete e.isFavorite,delete e.offersId,e}}const m="afterbegin";function y(t,e,n="beforeend"){if(!(t instanceof x))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function _(t,e){if(!(t instanceof x&&e instanceof x))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function $(t){if(null!==t){if(!(t instanceof x))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var g=n(379),b=n.n(g),w=n(795),M=n.n(w),C=n(569),T=n.n(C),E=n(565),S=n.n(E),A=n(216),k=n.n(A),D=n(589),P=n.n(D),F=n(10),I={};I.styleTagTransform=P(),I.setAttributes=S(),I.insert=T().bind(null,"head"),I.domAPI=M(),I.insertStyleElement=k(),b()(F.Z,I),F.Z&&F.Z.locals&&F.Z.locals;const O="shake";class x{#n=null;constructor(){if(new.target===x)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#n||(this.#n=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#n}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#n=null}shake(t){this.element.classList.add(O),setTimeout((()=>{this.element.classList.remove(O),t?.()}),600)}}class H extends x{#i;#s;#r;constructor({filters:t,currentFilterType:e,onFilterTypeChange:n}){super(),this.#i=t,this.#s=e,this.#r=n,this.element.addEventListener("change",this.#o)}get template(){return function(t,e){const n=t.map((t=>function(t,e){const{type:n,count:i}=t;return`<div class="trip-filters__filter">\n      <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}"\n      ${n===e?"checked":""}\n      ${0===i?"disabled":""}\n      >\n      <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n    </div>`}(t,e))).join("");return`<div class="trip-main__trip-controls  trip-controls">\n  <div class="trip-controls__filters">\n    <h2 class="visually-hidden">Filter events</h2>\n    <form class="trip-filters" action="#" method="get">\n      ${n}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  </div>\n</div>`}(this.#i,this.#s)}#o=t=>{t.preventDefault(),this.#r(t.target.value)}}var L=n(484),B=n.n(L),N=n(646),Y=n.n(N);B().extend(Y());const R={[a.EVERYTHING]:t=>t,[a.PAST]:t=>t.filter((t=>{return(e=t.dateFrom)&&B()(e).isBefore(B()(),"D");var e})),[a.PRESENT]:t=>t.filter((t=>{return(e=t.dateFrom)&&B()(e).isSame(B()(),"D");var e})),[a.FUTURE]:t=>t.filter((t=>{return(e=t.dateFrom)&&B()(e).isAfter(B()(),"D");var e}))};function W(t,e){return t.dateFrom>e.dateFrom?1:t.dateFrom<e.dateFrom?-1:0}function j(t,e){const n=(t,e)=>B().duration(B()(e).diff(B()(t)));return n(t.dateFrom,t.dateTo)<n(e.dateFrom,e.dateTo)?1:n(t.dateFrom,t.dateTo)>n(e.dateFrom,e.dateTo)?-1:0}function U(t,e){return Number(t.basePrice)<Number(e.basePrice)?1:Number(t.basePrice)>Number(e.basePrice)?-1:0}class V{#a;#l;#d;#c=null;constructor({filterContainer:t,filterModel:e,pointsModel:n}){this.#a=t,this.#l=e,this.#d=n,this.#d.addObserver(this.#h),this.#l.addObserver(this.#h)}get filters(){const t=[...this.#d.points];return Object.values(a).map((e=>({type:e,count:R[e](t).length})))}init(){const t=this.filters,e=this.#c;this.#c=new H({filters:t,currentFilterType:this.#l.filter,onFilterTypeChange:this.#r}),null!==e?(_(this.#c,e),$(e)):y(this.#c,this.#a)}#h=()=>{this.init()};#r=t=>{this.#l.filter!==t&&this.#l.setFilter(o.MAJOR,t)}}class q extends x{_state={};updateElement(t){t&&(this._setState(t),this.#u())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(t){this._state=structuredClone({...this._state,...t})}#u(){const t=this.element,e=t.parentElement;this.removeElement();const n=this.element;e.replaceChild(n,t),this._restoreHandlers()}}class J extends q{#p=null;#f=null;#v=null;#m;constructor({point:t,destination:e,offersByType:n,offersAll:i,offersById:s,destinations:r,onFormSubmit:o}){super(),this._setState(J.parsePointToStat(t,e,n)),this.#p=i,this.#f=s,this.#v=r,this.#m=o,this._restoreHandlers()}get template(){return function(t,n,i){const{point:s,destination:r,offersByType:o}=t;return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        ${function(t,n,i){const{type:s,id:r}=t,{name:o}=n;return`<div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-${r}">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${r}" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n            ${e.map((t=>`<div class="event__type-item">\n              <input id="event-type-${t}-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}"\n              ${t===s?"checked":""}>\n              <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-${r}">${t}</label>\n            </div>`)).join("")}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-${r}">\n          ${s}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-${r}" type="text" name="event-destination" value="${o}" list="destination-list-${r}">\n        <datalist id="destination-list-${r}">\n        ${i.map((({name:t})=>`<option value="${t}"></option>`)).join("")}\n        </datalist>\n      </div>`}(s,r,n)}\n        ${function(t){const{dateFrom:e,dateTo:n,id:i}=t;return`<div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-${i}">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-${i}" type="text" name="event-start-time" value="${e}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-${i}">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-${i}" type="text" name="event-end-time" value="${n}">\n    </div>`}(s)}\n        ${function(t){const{basePrice:e,id:n}=t;return`<div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-${n}">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-${n}" type="text" name="event-price" value="${e}">\n    </div>`}(s)}\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    \n      </header>\n      <section class = "event__details"\n        ${function(t,e){const n=t.map((t=>t.id));return 0!==e.offers.length?`<section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n        ${e.offers.map((({title:t,id:e,price:i})=>`<div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${e}" type="checkbox" name="event-offer-${t}" ${n.includes(e)?"checked":""}>\n            <label class="event__offer-label" for="event-offer-${t}-${e}">\n              <span class="event__offer-title">${t}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${i}</span>\n            </label>\n          </div>`)).join("")}\n        </div>\n      </section>`:""}(i,o)}\n        ${function(t){const{description:e,pictures:n}=t;return 0===e.length&&0===n.length?"":`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${e}</p>\n      ${function(t){const{pictures:e}=t;return 0===e.length?"":`<div class="event__photos-container">\n      <div class="event__photos-tape">\n      ${e.map((({src:t,description:e})=>`<img class="event__photo" src="${t}" alt="${e}">`)).join("")}\n      </div>\n    </div>`}(t)}\n    </section>`}(r)}\n      </section>\n    </form>\n  </li>`}(this._state,this.#p,this.#f,this.#v)}reset(t,e,n){this.updateElement(J.parsePointToStat(t,e,n))}_restoreHandlers(){this.element.querySelector(".event--edit")?.addEventListener("submit",this.#y),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#_),this.element.querySelector(".event__save-btn").addEventListener("click",(t=>t.preventDefault())),this.element.querySelector(".event__type-group").addEventListener("change",this.#$),this.element.querySelector(".event__input--destination").addEventListener("input",this.#g)}#_=t=>{t.preventDefault(),t.isTrusted&&document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))};#y=t=>{t.preventDefault(),this.#m(J.parseStatToPoint(this._state))};#$=t=>{this.updateElement({point:{...this._state.point,type:t.target.value},offersByType:this.#p.find((e=>e.type===t.target.value))})};#g=t=>{const e=t.target.value,n=[];if(this.#v.forEach((t=>{n.push(t.name)})),!n.includes(e))return t.target.value="","";e&&this.updateElement({destination:this.#v.find((t=>t.name===e))})};static parsePointToStat(t,e,n){return{point:{...t},destination:{...e},offersByType:{...n}}}static parseStatToPoint(t){return{...t}}}class z{#b;#w;#M;#C;#T;#E=null;constructor({pointsList:t,onDataChange:e,onClose:n,destinationModel:i,offersModel:s}){this.#b=t,this.#w=e,this.#M=n,this.#C=i,this.#T=s}init(){null===this.#E&&(this.#E=new J({point:{type:p,basePrice:0},offersById:[],destination:{name:"",photos:[],description:""},offersType:this.#T.getOffersByType(p),destinations:this.#C.destinations,offersAll:[...this.#T.offers],onFormSubmit:this.#m,onDeleteClick:this.#S,isEditMode:!1}),y(this.#E,this.#b.element,m),document.addEventListener("keydown",this.#A))}destroy(){null!==this.#E&&(this.#M(),$(this.#E),this.#E=null,document.removeEventListener("keydown",this.#A))}#m=t=>{this.#w(h,o.MINOR,t),this.destroy()};#S=()=>{this.destroy()};#A=t=>{"Escape"!==t.key&&"Esc"!==t.key||(t.preventDefault(),this.destroy())}}class Z extends x{get template(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title" >Amsterdam — Chamonix — Geneva</h1>\n        <p class="trip-info__dates">18 — 20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: € <span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}}class G extends x{#k;constructor({filterType:t}){super(),this.#k=t}get template(){return t=this.#k,`<p class="trip-events__msg">${r[t.toUpperCase()]}</p>`;var t}}class K extends x{#D;#P;constructor({onSortTypeChange:t,sorting:e}){super(),this.#D=t,this.#P=e,this.element.addEventListener("click",this.#F)}get template(){return function(t){const e=Object.values(d);return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${t.map((t=>`<div div class="trip-sort__item  trip-sort__item--${t.value}" >\n    <input id="sort-${t.value}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${t.value}" ${e.includes(t.value)?`data-sort-type="${t.value}"`:""} ${t.isSelected?"checked":""} ${t.isDisabled?"disabled":""}>\n      <label class="trip-sort__btn" for="sort-${t.value}">${t.value}</label>\n    </div>`)).join("")}\n    </form>`}(this.#P)}#F=t=>{"INPUT"===t.target.tagName&&(t.preventDefault(),this.#D(t.target.dataset.sortType))}}class X extends x{#I;#f;#O;#x;#H;constructor({point:t,offersById:e,destination:n,onFavoriteClick:i,onEditClick:s}){super(),this.#I=t,this.#f=e,this.#O=n,this.#H=i,this.#x=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#L),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#B)}get template(){return t=this.#I,e=this.#f,`\n  <li class="trip-events__item">\n    <div class="event">\n    <time class="event__date" datetime="2019-03-18">MAR 18</time>\n    ${function(t,e){const{type:n}=t,{name:i}=e;return`<div class="event__type">\n    <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n  </div>\n  <h3 class="event__title">${n} ${i}</h3>`}(t,this.#O)}\n    ${function(t){const{dateFrom:e,dateTo:n}=t;return`<div class="event__schedule">\n    <p class="event__time">\n      <time class="event__start-time" datetime="2019-03-18T10:30">${e}</time>&mdash;\n      <time class="event__end-time" datetime="2019-03-18T11:00">${n}</time>\n    </p>\n    <p class="event__duration">30M</p>\n  </div>`}(t)}\n    ${function(t){const{basePrice:e}=t;return`<p class="event__price">&euro;&nbsp;<span class="event__price-value">${e}</span></p>`}(t)}\n    ${function(t){return`<h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${t.map((({title:t,price:e})=>`<li class="event__offer">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e}</span>\n      </li>`)).join("")}\n    </ul>`}(e)}\n    ${function(t){const{isFavorite:e}=t;return`<button class="event__favorite-btn ${e?"event__favorite-btn--active":""}" type="button">\n    <span class="visually-hidden">Add to favorite</span>\n    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n    </svg>\n  </button>`}(t)}\n    <button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>\n    </div>\n  </li>`;var t,e}#L=t=>{t.preventDefault(),this.#x()};#B=t=>{t.preventDefault(),this.#H()}}class Q{#N=null;#Y=null;#I=null;#T=null;#C=null;#O=null;#R=null;#b=null;#W=null;#j=null;#U=i;constructor({pointsList:t,offersModel:e,destinationModel:n,onPointChange:i,onModeChange:s}){this.#b=t,this.#T=e,this.#C=n,this.#W=i,this.#j=s}init(t){this.#I=t,this.#R=this.#T.getOffersByType(t.type),this.#O=this.#C.getDestinationById(t.destination);const e=this.#N,n=this.#Y;this.#N=new X({point:this.#I,offersById:[...this.#T.getOffersById(t.type,t.offersId)],destination:this.#O,onFavoriteClick:this.#V,onEditClick:this.#q}),this.#Y=new J({point:this.#I,destinations:this.#C.destinations,offersByType:this.#R,offersAll:[...this.#T.offers],offersById:[...this.#T.getOffersById(t.type,t.offersId)],destination:this.#O,onFormSubmit:this.#m,onDeleteClick:this.#S,isEditMode:!0}),null!==e&&null!==n?(this.#U===i&&_(this.#N,e),this.#U===s&&_(this.#Y,n),$(e),$(n)):y(this.#N,this.#b.element)}destroy(){$(this.#N),$(this.#Y)}#A=t=>{"Escape"===t.kay&&(t.preventDefault(),this.#Y.reset(this.#I,this.#R,this.#O),this.#J())};resetView(){this.#U!==i&&(this.#Y.reset(this.#I,this.#R,this.#O),this.#J())}#z(){_(this.#Y,this.#N),document.addEventListener("keydown",this.#A),this.#j(),this.#U=s}#J(){_(this.#N,this.#Y),document.removeEventListener("keydown",this.#A),this.#U=i}#q=()=>{this.#z()};#V=()=>{this.#W(c,o.PATCH,{...this.#N,isFavorite:!this.#N.isFavorite})};#m=t=>{this.#W(c,o.MINOR,t),this.#J()};#S=t=>{this.#W(u,o.MINOR,t)}}class tt extends x{get template(){return'<ul class="trip-events__list"></ul>'}}function et(t){return l.map((e=>({value:e,isSelected:e===t,isDisabled:"event"===e||"offers"===e})))}const nt="Basic eo0w590ik78664R5",it="https://21.objects.pages.academy/big-trip",st=document.querySelector(".trip-main__trip-controls"),rt=document.querySelector(".trip-events"),ot=new class extends t{#Z;#G=[];constructor({pointsApiService:t}){super(),this.#Z=t}get points(){return this.#G}async init(){try{const t=await this.pointsApiService.points;this.#G=t.map(this.#K)}catch(t){this.#G=[]}this._notify(o.INIT)}async updatePoint(t,e){const n=this.#G.findIndex((t=>t.id===e.id));if(-1===n)throw new Error("Can't update point");try{const i=await this.#Z.updatePoint(e),s=this.#K(i);this.#G=[...this.#G.slice(0,n),e,...this.#G.slice(n+1)],this._notify(t,s)}catch(t){throw new Error("Can't update point")}}async addPoint(t,e){try{const n=await this.#Z.addPoint(e),i=this.#K(n);this.#G=[i,...this.#G],this._notify(t,i)}catch(t){throw new Error("Can't add point")}}async deletePoint(t,e){const n=this.#G.findIndex((t=>t.id===e.id));if(-1===n)throw new Error("Can't delete point");try{await this.#Z.deletePoint(e),this.#G=[...this.#G.slice(0,n),...this.#G.slice(n+1)],this._notify(t)}catch(t){throw new Error("Can't delete point")}}#K(t){const e={...t,basePrice:t.base_price,dateFrom:t.date_from,dateTo:t.date_to,isFavorite:t.is_favorite,offersId:t.offers};return delete e.base_price,delete e.date_from,delete e.date_to,delete e.is_favorite,delete e.offers,e}}({pointsApiService:new v(it,nt)}),at=new class extends t{#Z;#v;constructor({pointsApiService:t}){super(),this.pointsApiService=t}get destinations(){return this.#v}async init(){try{this.#v=await this.#Z.destinations}catch(t){this.#v=[]}this._notify(o.INIT)}getDestinationById(t){return this.destinations.find((e=>e.id===t))}}({pointsApiService:new v(it,nt)}),lt=new class extends t{#Z;#X=[];constructor({pointsApiService:t}){super(),this.pointsApiService=t}get offers(){return this.#X}async init(){try{this.#X=await this.#Z.offers}catch(t){this.#X=[]}this._notify(o.INIT)}getOffersByType(t){return this.#X.find((e=>e.type===t))}getOffersById(t,e=[""]){return this.getOffersByType(t).offers.filter((t=>e.find((e=>t.id===e))))}}({pointsApiService:new v(it,nt)}),dt=new class extends t{#Q=a.EVERYTHING;get filter(){return this.#Q}setFilter(t,e){this.#Q=e,this._notify(t,e)}},ct=new class{#tt=null;#et=null;#d=null;#T=null;#C=null;#l=null;#b;#nt;#it=new Z;#st;#rt=d.DAY;#ot=et(this.#rt);#k=a.EVERYTHING;#at=new Map;#lt;constructor({headerContainer:t,mainContainer:e,pointsModel:n,offersModel:i,destinationModel:s,filterModel:r,onNewEventClose:o}){this.#tt=t,this.#et=e,this.#d=n,this.#T=i,this.#C=s,this.#l=r,this.#b=new tt,this.#d.addObserver(this.#h),this.#l.addObserver(this.#h),this.#lt=new z({destinationModel:this.#C,offersModel:this.#T,pointsList:this.#b,onDataChange:this.#dt,onClose:o})}get points(){this.#k=this.#l.filter;const t=this.#d.points,e=R[this.#k](t);switch(this.#rt){case d.DAY:return e.sort(W);case d.TIME:return e.sort(j);case d.PRICE:return e.sort(U)}return e.sort(W)}init(){this.#ct(),y(this.#b,this.#et)}#ht(t){const e=new Q({pointsList:this.#b,pointsModel:this.#d,offersModel:this.#T,destinationModel:this.#C,onPointChange:this.#dt,onModeChange:this.#j});e.init(t),this.#at.set(t.id,e)}createNewWaypoint(){this.#l.setFilter(o.MAJOR,a.EVERYTHING),this.#ut({resetSortType:!0}),this.#pt(),this.#lt.init()}#ut(t=!1){this.#lt.destroy(),this.#at.forEach((t=>t.destroy())),this.#at.clear(),$(this.#st),this.#nt&&$(this.#nt),t&&(this.#rt=d.DAY)}#pt(){const t=this.points.length,e=this.points.slice(0,t);if(0!==t){this.#ft();for(let n=0;n<t;n++)this.#ht(e[n])}else this.#vt()}#j=()=>{this.#lt.destroy(),this.#at.forEach((t=>t.resetView()))};#dt=(t,e,n)=>{switch(t){case c:this.#d.updateWaypoint(e,n);break;case h:this.#d.addWaypoint(e,n);break;case u:this.#d.deleteWaypoint(e,n)}};#h=(t,e)=>{switch(t){case o.PATCH:this.#at.get(e.id).init(e);break;case o.MINOR:this.#ut(),this.#pt();break;case o.MAJOR:this.#ut({resetSortType:!0}),this.#pt()}};#mt(){new V({filterContainer:this.#tt,filterModel:this.#l,pointsModel:this.#d}).init()}#yt(){y(this.#it,this.#tt,"beforebegin")}#vt(){this.#nt=new G({filterType:this.#k}),y(this.#nt,this.#et)}#D=t=>{this.#rt!==t&&(this.#rt=t,this.#ut(),this.#pt())};#ft(){this.#ot=et(this.#rt),this.#st=new K({currentSortType:this.#rt,onSortTypeChange:this.#D,sorting:this.#ot}),y(this.#st,this.#et,m)}#ct(){this.#mt(),this.#yt(),this.#pt()}}({headerContainer:st,mainContainer:rt,pointsModel:ot,destinationModel:at,offersModel:lt,filterModel:dt,onNewEventClose:function(){ht.element.disabled=!1}}),ht=new class extends x{#_t;constructor({onClick:t}){super(),this.#_t=t,this.element.addEventListener("click",this.#$t)}get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}#$t=t=>{t.preventDefault(),this.#_t()}}({onClick:function(){ct.createNewWaypoint(),ht.element.disabled=!0}});at.init().then((()=>lt.init())).then((()=>ot.init())).finally((()=>{y(ht,st,"afterend")})),ct.init()})()})();
//# sourceMappingURL=bundle.36a6da788e9b5885ca1a.js.map