(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{NljB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/position-size-calculator",function(){return n("l3E+")}])},"hKI/":function(e,t,n){(function(t){var n="Expected a function",a=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,f=u||p||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,h=function(){return f.Date.now()};function b(e,t,a){var i,r,o,c,s,l,u=0,p=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=i,a=r;return i=r=void 0,u=t,c=e.apply(a,n)}function w(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=o}function S(){var e=h();if(w(e))return O(e);s=setTimeout(S,function(e){var n=t-(e-l);return f?m(n,o-(e-u)):n}(e))}function O(e){return s=void 0,d&&i?b(e):(i=r=void 0,c)}function T(){var e=h(),n=w(e);if(i=arguments,r=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(S,t),p?b(e):c}(l);if(f)return s=setTimeout(S,t),b(l)}return void 0===s&&(s=setTimeout(S,t)),c}return t=y(t)||0,g(a)&&(p=!!a.leading,o=(f="maxWait"in a)?v(y(a.maxWait)||0,t):o,d="trailing"in a?!!a.trailing:d),T.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=l=r=s=void 0},T.flush=function(){return void 0===s?c:O(h())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==i}(e))return a;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):o.test(e)?a:+e}e.exports=function(e,t,a){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return g(a)&&(i="leading"in a?!!a.leading:i,r="trailing"in a?!!a.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})}}).call(this,n("yLpj"))},"l3E+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n("o0o1"),i=n.n(a),r=n("1OyB"),o=n("vuIU"),c=n("md7G"),s=n("foSv"),l=n("JX7q"),u=n("Ji7U"),p=n("rePB"),f=n("q1tI"),d=n.n(f),v=n("nc0P"),m=n.n(v),h=n("iuhU"),b=n("wOhW"),g=n("wqhH"),y=n("wx14");function w(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var S=d.a.createElement,O=function(e){var t=e.disabled,n=w(e,["disabled"]);return S("select",Object(y.a)({className:Object(h.a)("form-select block w-full mt-1 text-text bg-background border border-highlight"),disabled:t},n))},T=n("hKI/"),j=function(e){try{var t=window.localStorage.getItem("".concat("TTT","__").concat(e));return JSON.parse(t)}catch(n){return console.log(n),null}},x=function(e){try{window.localStorage.removeItem("".concat("TTT","__").concat(e))}catch(t){return console.log(t),null}},P=n.n(T)()((function(e,t){try{var n=JSON.stringify(t);return window.localStorage.setItem("".concat("TTT","__").concat(e),n),JSON.parse(n)}catch(a){console.log(a)}}),100),k=function(){var e,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(fetch("https://data.messari.io/api/v1/assets/eth/metrics"));case 3:return e=n.sent,n.next=6,i.a.awrap(e.json());case 6:return t=n.sent,n.abrupt("return",new m.a(t.data.market_data.price_usd).toFixed(2));case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",null);case 13:case"end":return n.stop()}}),null,null,[[0,10]],Promise)},C=d.a.createElement;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _="bitmex_calculator",D=[{key:"XBTUSD",value:"XBTUSD (BitMEX contracts)"},{key:"ETHUSD",value:"ETHUSD (BitMEX perpetual contracts)"},{key:"ALTS",value:"Alt pairs (BitMEX, Binance, etc...)"}],N=4,z={capital:1,entry:8e3,stop:7e3,target:9e3,risk:5,ethPrice:300},A=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o))),Object(p.a)(Object(l.a)(n),"state",{ready:!1,storageVersion:N,pair:"ALTS",form:z}),Object(p.a)(Object(l.a)(n),"handleInputChange",(function(e){var t,a,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.target.name,a=e.target.value,"pair"!==e.target.name){o.next=10;break}if(n.setState({pair:e.target.value},(function(){P("".concat(_,"_pair"),n.state.pair);var e=j("".concat(_,"_").concat(n.state.pair));n.setState({form:e||z})})),"ETHUSD"!==a){o.next=9;break}return o.next=7,i.a.awrap(k());case 7:(r=o.sent)&&n.setState((function(e){return B({},e,{form:B({},e.form,{},{ethPrice:r})})}),(function(){P("".concat(_,"_").concat(n.state.pair),n.state.form)}));case 9:return o.abrupt("return");case 10:n.setState((function(e){return B({},e,{form:B({},e.form,{},Object(p.a)({},t,a))})}),(function(){P("".concat(_,"_").concat(n.state.pair),n.state.form),P("".concat(_,"_pair"),n.state.pair),P("".concat(_,"_storageVersion"),n.state.storageVersion)}));case 11:case"end":return o.stop()}}),null,null,null,Promise)})),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a,r=this;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=j("".concat(_,"_pair"))||"XBTUSD",t=j("".concat(_,"_storageVersion")),n=j("".concat(_,"_").concat(e)),t!==this.state.storageVersion&&(x("".concat(_,"_XBTUSD")),x("".concat(_,"_ETHUSD")),x("".concat(_,"_ALTS"))),this.setState({form:n&&t===this.state.storageVersion?n:z,pair:e,ready:!0}),o.next=7,i.a.awrap(k());case 7:(a=o.sent)&&this.setState((function(e){return B({},e,{form:B({},e.form,{},{ethPrice:a})})}),(function(){P("".concat(_,"_").concat(r.state.pair),r.state.form)}));case 9:case"end":return o.stop()}}),null,this,null,Promise)}},{key:"compute",value:function(){var e={riskAmount:0,distanceToStop:0,positionSizeBTC:0,positionSize:0,riskReward:0,contractValue:0,isLong:!1};try{var t=this.state,n=t.form,a=t.pair,i=n.capital,r=n.entry,o=n.stop,c=n.target,s=n.risk,l=n.ethPrice,u=new m.a(c).gt(new m.a(r)),p=new m.a(i).times(new m.a(s).div(100)).toFixed(8),f=new m.a(o).div(new m.a(r)).minus(1).times(u?-100:100).toFixed(3),d=new m.a(p).div(new m.a(f)).times(100).toFixed(8),v=u?new m.a(c).minus(new m.a(r)).div(new m.a(new m.a(r).minus(new m.a(o)))).toFixed(2):new m.a(r).minus(new m.a(c)).div(new m.a(new m.a(o).minus(new m.a(r)))).toFixed(2);if("ETHUSD"===a){var h=new m.a(l).times(1e-6).toFixed(8);e.contractValue=h,e.positionSize=new m.a(p).div(h).div(f).times(100).toFixed(0)}else"ALTS"===a?e.positionSize=new m.a(d).div(r).toFixed(2):"XBTUSD"===a&&(e.positionSize=new m.a(r).times(new m.a(d)).toFixed(0));return e.isLong=u,e.riskReward=v,e.positionSizeBTC=d,e.gain=new m.a(v).times(new m.a(p)).toFixed(8),e.riskAmount=p,e.distanceToStop=f,e}catch(b){return console.error("ouch!",b.message),e}}},{key:"render",value:function(){var e=this.state,t=e.ready,n=e.form,a=e.pair,i=n.capital,r=n.entry,o=n.stop,c=n.target,s=n.risk,l=n.ethPrice,u=this.compute(),p=u.riskAmount,f=u.contractValue,v=u.distanceToStop,m=u.positionSizeBTC,y=u.gain,w=u.positionSize,S=u.riskReward,T=u.isLong;return C(b.a,{title:"BitMEX and Binance Position Size Calculator",description:"Position Size Calculator for Bitcoin and Altcoins"},C("div",{className:Object(h.a)({"opacity-100":t,"opacity-0":!t})},C("h1",{className:"text-2xl text-left"},"Position size calculator"),C("div",null,C("div",{className:"mt-8"},C(O,{name:"pair",value:a,onChange:this.handleInputChange},D.map((function(e){return C("option",{key:e.key,value:e.key},e.value)})))),C("div",{className:"mt-4"},C("table",{className:Object(h.a)({"border-green":T},{"border-red":!T},"border-l-2 shadow-xl table-fixed w-full mt-2")},C("tbody",null,C(g.a,{label:"Account Balance",name:"capital",value:i,onChange:this.handleInputChange,tip:"This is your total account balance."}),C(g.a,{label:"Risk (%)",name:"risk",value:s,onChange:this.handleInputChange,tip:"Percentage of acceptable risk."}),"ETHUSD"===a&&C(d.a.Fragment,null,C(g.a,{label:"ETH price ($)",name:"ethPrice",value:l,onChange:this.handleInputChange,tip:"Spot ETH price ($)"}),C(g.a,{label:"Contract Value",value:f,readOnly:!0,tip:"ETH/USD perpetual contract value."})),C(g.a,{label:"Entry price",name:"entry",value:r,onChange:this.handleInputChange,tip:"Position entry price."}),C(g.a,{label:"Stop-Loss Price",name:"stop",value:o,onChange:this.handleInputChange,tip:"Stop-Loss price."}),C(g.a,{label:"Take Profit Price",name:"target",value:c,onChange:this.handleInputChange,tip:"Take Profit price."}),C(g.a,{label:"Total Risk in BTC",value:p,readOnly:!0,tip:"Maximum loss in case the Stop-Loss gets hit."}),C(g.a,{label:"Distance to Stop-Loss (%)",value:v,readOnly:!0,tip:C("div",null,C("div",null,"Difference between Entry price and Stop-Loss."),C("div",null,"Expressed in percentage."))}),C(g.a,{label:"Position Size in BTC",value:m,readOnly:!0,tip:C("div",null,C("div",null,"Position size expressed in BTC."),C("div",{className:"mt-1"},"Calculated with the following formula:"),C("div",{className:"underline"},"Position Size = Risk Amount/Distance to Stop"),C("div",{className:"mt-1"},"Assuming an account of 1 BTC."),C("div",null,"A risk of 5% per trade."),C("div",null,"A 10% distance from the entry to the Stop-Loss."),C("div",{className:"underline"},"Position Size = (1 BTC x 0.05)/0.1 = 0.5 BTC"))}),C(g.a,{label:"Position Size",value:w,variant:T?"long":"short",readOnly:!0,tip:C("div",null,C("div",null,"Position size expressed in USD or $ALT."),C("div",null,"On BitMEX it corresponds to the amount of contracts to buy."),C("div",null,"For $ALTS it corresponds to the amount to buy."),C("div",{className:"mt-1"},"Calculated with the following formula:"),C("div",{className:"underline"},"Position Size = Entry price * Position Size in BTC"))}),C(g.a,{label:"Risk Reward Ratio",value:S,readOnly:!0,tip:"Risk/Reward Ratio."}),C(g.a,{label:"Potential Gain",value:y,readOnly:!0,tip:"Realised gain in case of Take Profit."})))))))}}]),t}(f.Component)}},[["NljB",0,2,1,4,5]]]);