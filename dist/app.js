(function(t){function e(e){for(var i,a,r=e[0],c=e[1],u=e[2],h=0,d=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b65":function(t,e,n){"use strict";var i=n("5d50"),s=n.n(i);s.a},2982:function(t,e,n){"use strict";var i=n("a4ba"),s=n.n(i);s.a},"2b7c":function(t,e,n){"use strict";var i=n("91e7"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.isActive},attrs:{id:"auto-adaptive-app"}},[n("div",{staticClass:"window-header"},[n("div",{staticClass:"window-title"},[t._v("\n            Auto-adaptive\n        ")]),n("div",{staticClass:"window-close",attrs:{id:"window-close"},on:{click:t.toggleActive}})]),n("div",{staticClass:"window-body"},[n("div",{staticClass:"text-input-container base-selector-container"},[n("span",{staticClass:"input-title"},[t._v("Base selector: ")]),n("input",{staticClass:"text-input",attrs:{type:"text"},domProps:{value:t.settings.baseSelector},on:{input:function(e){return t.onSettingChange("baseSelector",e.target.value)},focus:function(t){return t.target.select()}}})]),n("div",{staticClass:"text-input-container"},[n("span",{staticClass:"input-title"},[t._v("From: ")]),n("input",{staticClass:"text-input",attrs:{type:"number"},domProps:{value:t.settings.fromWidth},on:{input:function(e){return t.onSettingChange("fromWidth",e.target.value)},focus:function(t){return t.target.select()}}}),n("div",{staticClass:"dimension"},[t._v("px")])]),n("div",{staticClass:"text-input-container input-container-width-checkbox"},[n("span",{staticClass:"input-title"},[t._v("To: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.toWidth,expression:"settings.toWidth"}],staticClass:"text-input",attrs:{type:"number",disabled:t.toWidthByWindowWidth},domProps:{value:t.settings.toWidth},on:{focus:function(t){return t.target.select()},input:function(e){e.target.composing||t.$set(t.settings,"toWidth",e.target.value)}}}),n("div",{staticClass:"dimension"},[t._v("px")]),n("Checkbox",{attrs:{"setting-title":"Use window width","setting-name":"toWidthByWindowWidth","setting-initial-value":t.toWidthByWindowWidth},on:{change:t.onWhichWidthUseSettingChange}})],1),n("div",{staticClass:"input-title"},[t._v("Input SCSS:")]),n("CodeContainer",{model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("div",{staticClass:"input-title"},[t._v("Output:")]),n("CodeContainer",{model:{value:t.output,callback:function(e){t.output=e},expression:"output"}}),n("div",{staticClass:"settings-container"},[n("div",{staticClass:"settings-section"},[n("Checkbox",{attrs:{"setting-title":"Copy result to clipboard","setting-name":"copyToClipboard","setting-initial-value":t.settings.copyToClipboard},on:{change:t.onSettingChange}}),n("Checkbox",{attrs:{"setting-title":"Wrap into @media","setting-name":"wrapIntoMedia","setting-initial-value":t.settings.wrapIntoMedia},on:{change:t.onSettingChange}}),n("Checkbox",{attrs:{"setting-title":"Add unlock","setting-name":"addUnlock","setting-initial-value":t.settings.addUnlock},on:{change:t.onSettingChange}}),n("Checkbox",{attrs:{"setting-title":"Unlock to start value","setting-name":"unlockToStartValue","setting-initial-value":t.settings.unlockToStartValue},on:{change:t.onSettingChange}}),n("Checkbox",{attrs:{"setting-title":"Shake","setting-name":"shake","setting-initial-value":t.settings.shake},on:{change:t.onSettingChange}})],1),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"indent-title"},[t._v("Output indent")]),n("RadioButton",{attrs:{"setting-name":"indentSize","setting-title":"4 spaces","setting-initial-value":t.settings.indentSize,value:4},on:{change:t.onSettingChange}}),n("RadioButton",{attrs:{"setting-name":"indentSize","setting-title":"2 spaces","setting-initial-value":t.settings.indentSize,value:2},on:{change:t.onSettingChange}})],1)]),n("button",{ref:"calculateButton",staticClass:"calculate-button",attrs:{type:"button"},on:{click:t.calculate}},[n("span",{staticClass:"normal-text"},[t._v("Calculate")]),n("span",{staticClass:"done-text"},[t._v("Done!")])]),n("div",{ref:"logContainer",staticClass:"auto-adaptive-log"})],1)])},o=[],a=(n("6b54"),n("456d"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-container-wrap"},[n("div",{staticClass:"code-container",class:{expanded:t.isExpanded}},[n("button",{staticClass:"expand-button",attrs:{type:"button"},on:{click:t.expand}},[n("ExpandIcon"),n("CompressIcon")],1),n("textarea",t._g({domProps:{value:t.value}},t.inputListeners))])])}),r=[],c={functional:!0,render(t,e){const{_c:n,_v:i,data:s,children:o=[]}=e,{class:a,staticClass:r,style:c,staticStyle:u,attrs:l={},...h}=s;return n("svg",{class:["expand-icon",a,r],style:[c,u],attrs:Object.assign({class:"expand-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l),...h},o.concat([n("path",{attrs:{fill:"currentColor",d:"M0 212V88c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM364 64h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V96H364c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 236v124c0 13.3-10.7 24-24 24H364c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V300c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 448H24c-13.3 0-24-10.7-24-24V300c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"}})]))}},u={functional:!0,render(t,e){const{_c:n,_v:i,data:s,children:o=[]}=e,{class:a,staticClass:r,style:c,staticStyle:u,attrs:l={},...h}=s;return n("svg",{class:["compress-icon",a,r],style:[c,u],attrs:Object.assign({class:"compress-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l),...h},o.concat([n("path",{attrs:{fill:"currentColor",d:"M500 224H376c-13.3 0-24-10.7-24-24V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm-340-24V76c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v116H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 236V312c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h116v116c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12zm224 0V320h116c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H376c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12z"}})]))}},l={name:"CodeContainer",props:["value"],data:function(){return{isExpanded:!1}},components:{ExpandIcon:c,CompressIcon:u},methods:{expand:function(){this.isExpanded=!this.isExpanded}},computed:{inputListeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(e){return t.$emit("input",e.target.value)}})}}},h=l,d=(n("2b7c"),n("2877")),p=Object(d["a"])(h,a,r,!1,null,"615b6255",null),f=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"checkbox-container",on:{click:t.toggleCheck}},[n("span",{staticClass:"checkbox",class:{checked:t.isChecked}}),t._v("\n    "+t._s(this.settingTitle)+"\n")])},v=[],m={name:"Checkbox",props:["setting-title","setting-name","setting-initial-value"],data:function(){return{isChecked:!1}},methods:{toggleCheck:function(){this.isChecked=!this.isChecked,this.$emit("change",this.settingName,this.isChecked)}},mounted:function(){this.isChecked=this.settingInitialValue}},y=m,k=(n("0b65"),Object(d["a"])(y,g,v,!1,null,"480eaff5",null)),b=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"radio-button-container"},[n("input",{attrs:{type:"radio",name:t.settingName},domProps:{value:t.value,checked:{checked:t.checked}},on:{click:t.onClick}}),n("span",{staticClass:"radio-button"}),n("span",[t._v(t._s(t.settingTitle))])])},C=[],w={name:"RadioButton",props:["setting-name","setting-title","value","setting-initial-value"],data:function(){return{checked:!1}},methods:{onClick:function(){this.$emit("change",this.settingName,this.value)}},mounted:function(){this.checked=this.value===this.settingInitialValue}},x=w,O=(n("2982"),Object(d["a"])(x,S,C,!1,null,"3492123f",null)),_=O.exports,I=n("d225"),j=n("b0b4"),E=(n("ac4d"),n("8a81"),Symbol("instanceId")),W=Symbol("instanceSecurityKey"),N=function(){function t(e){if(Object(I["a"])(this,t),e!==W)throw new Error("Use .getInstance instead of new!");this.logs=[]}return Object(j["a"])(t,[{key:"log",value:function(t){this.logs.push(t)}},{key:"clear",value:function(){this.logs=[]}},{key:"getLogs",value:function(){return this.logs}},{key:"getLogsFormatted",value:function(){return this.logs.map((function(t){return'<div class="log-message">'.concat(t,"</div>")})).join("")}}],[{key:"getInstance",value:function(){return this[E]||(this[E]=new this(W)),this[E]}}]),t}(),T=(n("14b9"),Symbol("instanceId")),L=Symbol("instanceSecurityKey"),P=function(){function t(e){if(Object(I["a"])(this,t),e!==L)throw new Error("Use .getInstance() instead of new!")}return Object(j["a"])(t,[{key:"setSettings",value:function(t){Object.assign(this,t)}},{key:"indentLevel",value:function(t){return this.indent.repeat(t)}},{key:"indent",get:function(){return" ".repeat(this.indentSize)}}],[{key:"getInstance",value:function(){return this[T]||(this[T]=new this(L)),this[T]}}]),t}(),V=(n("6762"),n("2fdb"),n("a481"),n("28a5"),n("4917"),n("7f7f"),function t(e,n){Object(I["a"])(this,t),this.selector=e,this.pseudoElement=n}),A=(n("5df3"),n("1c4c"),n("3b2b"),function(){function t(e){Object(I["a"])(this,t),this.selector=":".concat(e),this.selectorRegExp=new RegExp(this.selector,"g"),this.substituteName="item-".concat(e,"-state-class"),this.substitute=".".concat(this.substituteName)}return Object(j["a"])(t,null,[{key:"selectorToSubstitute",value:function(t){return".item-".concat(t.replace(":",""),"-state-class")}}]),t}()),B=Symbol("instanceId"),U=Symbol("instanceSecurityKey"),$=function(){function t(e){if(Object(I["a"])(this,t),e!==U)throw new Error("Instantiation failed: use Settings.getInstance() instead of new.");this.pseudoClassNames=["hover","focus"],this.list=this.pseudoClassNames.map((function(t){return new A(t)})),this.pseudoClassesToSubstitutesReplacementRegExp=new RegExp(this.pseudoClassNames.map((function(t){return":".concat(t)})).join("|"),"g")}return Object(j["a"])(t,[{key:"replacePseudoClassesToSubstitutes",value:function(t){return t.replace(this.pseudoClassesToSubstitutesReplacementRegExp,(function(t){return A.selectorToSubstitute(t)}))}}],[{key:"getInstance",value:function(){return this[B]||(this[B]=new t(U)),this[B]}}]),t}(),R=function(){function t(){Object(I["a"])(this,t)}return Object(j["a"])(t,null,[{key:"toIntOrZero",value:function(t){return parseInt(t)||0}},{key:"toFloatOrZero",value:function(t){return parseFloat(t)||0}},{key:"toKebabCase",value:function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}},{key:"toCamelCase",value:function(t){return t.replace(/-[a-z]/g,(function(t){return t.toUpperCase()})).replace(/-/g,"")}},{key:"isEmptyObject",value:function(t){return 0===Object.getOwnPropertyNames(t).length}}]),t}(),F=Symbol("instanceId"),z=Symbol("instanceSecurityKey"),M=function(){function t(e){if(Object(I["a"])(this,t),e!==z)throw new Error("Use .getInstance() instead of new!");this.styleSheetsList=Array.prototype.filter.call(document.styleSheets,(function(t){return null===t.href||t.href.substring(0,location.origin.length)===location.origin}))}return Object(j["a"])(t,[{key:"_modifyCssRule",value:function(t){$.getInstance().list.forEach((function(e){if(t.selectorText.includes(e.selector)){var n=t.selectorText.split(",").map((function(t){return t.trim()})),i=n.filter((function(t){return t.includes(e.selector)})).map((function(t){return t.replace(e.selectorRegExp,e.substitute)}));t.selectorText=n.concat(i).join(", ")}}))}},{key:"modify",value:function(){var t=this;this.styleSheetsList.forEach((function e(n){[].forEach.call(n.cssRules,(function(n){n instanceof CSSStyleRule?t._modifyCssRule(n):n instanceof CSSMediaRule&&e(n)}))}))}},{key:"getPropertiesFromStylesheets",value:function(t){var e=this,n={},i=function(n){return n.selectorText===t||n.selectorText.split(",").map((function(t){return t.trim()})).includes(t)||e.constructor._selectorsAsArraysAreEqual(n.selectorText,t)},s=function t(e){Array.from(e.cssRules).filter((function(t){return t.constructor===CSSStyleRule})).filter((function(t){return i(t)})).forEach((function(t){n=t.style})),Array.from(e.cssRules).filter((function(t){return t.constructor===CSSMediaRule})).forEach(t)};return this.styleSheetsList.forEach(s),R.isEmptyObject(n)&&N.getInstance().log("SELECTOR STYLE NOT FOUND: ".concat(t)),n}},{key:"getPropertiesFromElement",value:function(t){var e=this._getTargetElement(t),n={};if(e){var i=0;while(e.style[i]){var s=R.toCamelCase(e.style[i]);n[s]=e.style[s],++i}}return n}},{key:"getComputedElementProperties",value:function(t){var e=this._getTargetElement(t);return e?window.getComputedStyle(e,t.pseudoElement):{}}},{key:"_getTargetElement",value:function(t){var e=$.getInstance();return e.list.forEach((function(e){if(t.selector.includes(e.selector)){var n=t.selector.indexOf(e.selector),i=t.selector.substring(0,n);document.querySelector(i).classList.add(e.substituteName)}})),document.querySelector(e.replacePseudoClassesToSubstitutes(t.selector))}}],[{key:"getInstance",value:function(){return this[F]||(this[F]=new this(z)),this[F]}},{key:"_selectorsAsArraysAreEqual",value:function(t,e){return t=t.split(",").map((function(t){return t.trim()})),e=e.split(",").map((function(t){return t.trim()})),t.every((function(t){return e.includes(t)}))}}]),t}(),H=function(){function t(e){Object(I["a"])(this,t);var n="string"===typeof e?e.split(":"):e;this.name=n[0].trim(),this.value=n[1].replace(";","").trim().split(" ").map((function(t){return t.trim()})).join(" "),this.newValue=null}return Object(j["a"])(t,[{key:"addNewValue",value:function(t){var e=t.element||t.stylesheet||t.computed;if(!(!this.cssLockAvailable()||this.constructor.isHEXColor(e)||this.constructor.isVariable(e)||"line-height"===this.name&&this.constructor.isDimensionless(this.value)||"auto"===this.value)){var n=this.constructor.compareValue(this.value,e);this.value!==n&&(this.newValue=n)}}},{key:"toLockString",value:function(){var t=P.getInstance();return this.newValue?"".concat(this.name,": ").concat(this.constructor.makeCssLockString(this.value,this.newValue,t.fromWidth,t.toWidth),";"):"".concat(this.name,": ").concat(this.value,";")}},{key:"toUnlockString",value:function(){return P.getInstance().unlockToStartValue?"".concat(this.name,": ").concat(this.value,";"):this.newValue?"".concat(this.name,": ").concat(this.newValue,";"):null}},{key:"cssLockAvailable",value:function(){return["border-width","border-top-width","border-right-width","border-left-width","border-bottom-width","border-radius","bottom","flex-basis","font-size","height","left","line-height","margin","margin-bottom","margin-left","margin-right","margin-top","max-height","max-width","min-height","min-width","outline-width","padding","padding-bottom","padding-left","padding-right","padding-top","right","top","width"].includes(this.name)}},{key:"saveOnShake",get:function(){return null!==this.newValue}}],[{key:"isHEXColor",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}},{key:"isVariable",value:function(t){return"$"===t.charAt(0)}},{key:"isDimensionless",value:function(t){return t.length>0&&/^\d*\.*\d*$/i.test(t)}},{key:"isValueInPercent",value:function(t){return t.includes("%")}},{key:"compareValue",value:function(t,e){var n=this;return t=t.split(" "),e=e.split(" "),t.map((function(t,i){return"auto"===t?t:n.isValueInPercent(t)?t:"0"!==t&&"0px"!==t||"0"!==e[i]&&"0px"!==e[i]?2===i&&void 0===e[i]?e[0]:3===i&&void 0===e[i]?e[1]:e[i]||"":t})).join(" ")}},{key:"makeString",value:function(t,e,n,i){return"auto"===t?"auto":(t=Math.round(parseFloat(t)),e=Math.round(parseFloat(e)),t===e?t+(t>0?"px":""):"calc(".concat(t,"px + (").concat(t," - ").concat(e,") * (100vw - ").concat(n,"px) / (").concat(n," - ").concat(i,"))"))}},{key:"valueByIndex",value:function(t,e){var n=t.split(" ");return void 0!==n[e]?n[e]:1===e||2===e?n[0]:3===e&&void 0!==n[1]?n[1]:n[0]}},{key:"cssLockStringSeparator",value:function(t){var e=0;return t.forEach((function(t){t.includes("calc")&&(e+=1)})),e>=2?"\n":" "}},{key:"makeCssLockString",value:function(t,e,n,i){for(var s=t.split(" "),o=[],a=0;a<s.length;++a){var r=this.valueByIndex(e,a);o.push(this.makeString(s[a],r,n,i))}if(1===o.length)return o[0];var c=this.cssLockStringSeparator(o);return o.join(c)}}]),t}(),K=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(I["a"])(this,t),this.selector=e.replace("{","").split(",").map((function(t){return t.trim()})),this.childNodes=[],this.properties=[],this.parentNode=n,this._levelComputingStartValue=0}return Object(j["a"])(t,[{key:"appendChild",value:function(t){this.childNodes.push(t)}},{key:"removeChild",value:function(t){t.parentNode=null,this.childNodes.splice(this.childNodes.indexOf(t),1)}},{key:"appendProperty",value:function(t){this.properties.push(t)}},{key:"shake",value:function(){this.properties=this.properties.filter((function(t){return t.saveOnShake}));for(var t=this.childNodes.length-1;t>=0;--t)this.childNodes[t].shake();0===this.childNodes.length&&0===this.properties.length&&this.parentNode.removeChild(this)}},{key:"getFullSelectorObject",value:function(){var t=this.fullSelector,e=null;return(t.includes(":before")||t.includes(":after"))&&(e=t.includes(":before")?":before":":after",t=t.substring(0,t.indexOf(e)),":"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1))),new V(t,e)}},{key:"_stylesToLockString",value:function(){var t=this;return this.properties.reduce((function(e,n){return"".concat(e,"\n").concat(t._nodeContentIndent).concat(n.toLockString())}),"")}},{key:"_childNodesToLockString",value:function(){var t=this;return this.childNodes.reduce((function(e,n){return"".concat(e,"\n").concat(t._nodeContentIndent).concat(n.toLockString())}),"")}},{key:"toLockString",value:function(){return"".concat(this.selector," {").concat(this._stylesToLockString()).concat(this._childNodesToLockString(),"\n").concat(this._nodeIndent,"}")}},{key:"_stylesToUnlockString",value:function(){var t=this;return this.properties.reduce((function(e,n){var i=n.toUnlockString();return i?"".concat(e,"\n").concat(t._nodeContentIndent).concat(i):e}),"")}},{key:"_childNodesToUnlockString",value:function(){var t=this;return this.childNodes.reduce((function(e,n){return"".concat(e,"\n").concat(t._nodeContentIndent).concat(n.toUnlockString())}),"")}},{key:"toUnlockString",value:function(){return"".concat(this.selector," {").concat(this._stylesToUnlockString()).concat(this._childNodesToUnlockString(),"\n").concat(this._nodeIndent,"}")}},{key:"addCurrentStyleValues",value:function(){if(this.hasStyleProperties){var e=M.getInstance(),n=this.getFullSelectorObject(),i=e.getPropertiesFromStylesheets(this.fullSelector),s=e.getPropertiesFromElement(n),o=e.getComputedElementProperties(n),a=function(t){var e=R.toCamelCase(t.name);return{element:s[e],stylesheet:i[e],computed:o[e]}};this.properties.forEach((function(t){t.constructor===H&&t.addNewValue(a(t))}))}this.childNodes&&this.childNodes.filter((function(e){return e instanceof t})).forEach((function(t){return t.addCurrentStyleValues()}))}},{key:"hasStyleProperties",get:function(){return this.properties.length>0}},{key:"_nodeIndent",get:function(){return P.getInstance().indentLevel(this._level)}},{key:"_nodeContentIndent",get:function(){return P.getInstance().indentLevel(this._level+1)}},{key:"_level",get:function(){return function t(e,n){return null===e.parentNode?n:t(e.parentNode,++n)}(this,this._levelComputingStartValue)}},{key:"fullSelector",get:function(){return this.constructor._fullSelector(this).join(",").trim()}}],[{key:"indent",value:function(t){return P.getInstance().indentLevel(t)}},{key:"_prepareFullSelectorItem",value:function(t){return t.map((function(t){return"&"===t.charAt(0)?t.substring(1):" "+t}))}},{key:"_fullSelector",value:function(e){return e.parentNode&&e.parentNode.constructor===t?this._multipleSelectors(this._fullSelector(e.parentNode),this._prepareFullSelectorItem(e.selector)):P.getInstance().baseSelector?this._multipleSelectors([P.getInstance().baseSelector],this._prepareFullSelectorItem(e.selector)):this._prepareFullSelectorItem(e.selector)}},{key:"_multipleSelectors",value:function(t,e){for(var n=[],i=0;i<t.length;++i)for(var s=0;s<e.length;++s)n.push(t[i]+e[s]);return n}}]),t}(),q=function(){function t(e){Object(I["a"])(this,t),this.data=e}return Object(j["a"])(t,[{key:"addNewValue",value:function(){}},{key:"toString",value:function(){return this.data}},{key:"toLockString",value:function(){return this.data}},{key:"toUnlockString",value:function(){return this.data}},{key:"saveOnShake",get:function(){return!1}}]),t}(),D=n("308d"),J=n("6bb5"),Z=n("4e2b"),X=function(t){function e(t){var n;return Object(I["a"])(this,e),n=Object(D["a"])(this,Object(J["a"])(e).call(this,"")),n.selector=["@media (max-width: ".concat(t,"px)")],n}return Object(Z["a"])(e,t),Object(j["a"])(e,[{key:"setWidth",value:function(t){this.selector=["@media (max-width: ".concat(t,"px)")]}}]),e}(K),Y=function(t){function e(){var t;return Object(I["a"])(this,e),t=Object(D["a"])(this,Object(J["a"])(e).call(this,"")),t._levelComputingStartValue=-1,t}return Object(Z["a"])(e,t),Object(j["a"])(e,[{key:"toLockString",value:function(){return"".concat(this._childNodesToLockString(),"\n")}},{key:"toUnlockString",value:function(){return"".concat(this._childNodesToUnlockString(),"\n")}}],[{key:"iSPseudo",get:function(){return!0}}]),e}(K),G=function(){function t(e){Object(I["a"])(this,t),this.scss=e,this.allCSSProperties=this.constructor.getAllCSSProperties()}return Object(j["a"])(t,[{key:"validate",value:function(){return 0!==this.scss.trim().length||(N.getInstance().log("ERROR: Input is empty"),!1)}},{key:"prepareSCSSForParsing",value:function(){var t=this.scss,e=t.match(/{/g).length,n=t.match(/}/g).length;if(e>n){var i=e-n;t+="\n}".repeat(i)}var s=/\/\*[\s\S]*?\*\/|\/\/.*$/gm,o=/^([^{}\n]+){([^{}\n]*)}$/gm,a=t.replace(s,"").replace(o,"$1{\n$2\n}").split("\n").map((function(t){return t.trim()})).filter((function(t){return""!==t}));return a[0].includes("@media")&&(a.shift(),a.pop()),a}},{key:"parse",value:function(){var t=this,e=["#",".","&"],n=["@","$"];if(!this.validate())return new K("");var i,s=this.prepareSCSSForParsing(),o=function t(e){return","===e.charAt(e.length-1)?t(e+s.shift()):new K(e,i)},a=function(s){if(void 0!==s)if("}"!==s){if(e.includes(s.charAt(0))){var a=o(s);return i.appendChild(a),void(i=a)}if(n.includes(s.charAt(0)))i.appendProperty(new q(s));else if(s.includes(":")&&t.allCSSProperties.includes(s.split(":")[0].trim()))i.appendProperty(new H(s));else{var r=o(s);i.appendChild(r),i=r}}else i=i.parentNode},r=function(){s.forEach((function(t){return a(t)}))},c=P.getInstance();return c.wrapIntoMedia?(i=new X(c.fromWidth),r(),i):(i=new Y,r(),i)}}],[{key:"getAllCSSProperties",value:function(){return Object.keys(document.createElement("div").style).map((function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}))}}]),t}();M.getInstance().modify();var Q=function(t,e){var n=P.getInstance();n.setSettings(e),N.getInstance().clear();var i=new G(t),s=i.parse();s.addCurrentStyleValues(),n.shake&&s.shake();var o=s.toLockString();if(n.addUnlock){var a="\n\n";s.constructor===X&&s.setWidth(n.toWidth),a+=s.toUnlockString(),o+=a}return{output:o,logs:N.getInstance().getLogs()}},tt=Q,et=function(t,e){var n=e;if(localStorage){var i=localStorage.getItem(t);if(i)try{var s=JSON.parse(i);for(var o in n)n.hasOwnProperty(o)&&s.hasOwnProperty(o)&&(n[o]=s[o])}catch(a){return console.error("Settings can't be loaded. Use default settings."),console.error(a),e}}return n},nt=et,it=function(t){var e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.height="100px",e.style.top="-1000px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},st=it,ot={name:"app",data:function(){return{isActive:!1,settings:{baseSelector:"",indentSize:4,fromWidth:0,toWidth:0,copyToClipboard:!0,addUnlock:!0,wrapIntoMedia:!0,shake:!0,unlockToStartValue:!1},input:"",output:"",calculateButtonIsBlocked:!1,toWidthByWindowWidth:!1}},components:{CodeContainer:f,Checkbox:b,RadioButton:_},methods:{onWhichWidthUseSettingChange:function(t,e){this.toWidthByWindowWidth=!this.toWidthByWindowWidth,this.toWidthByWindowWidth&&(this.settings.toWidth=window.innerWidth)},toggleActive:function(){this.isActive=!this.isActive},onSettingChange:function(t,e){this.settings[t]=e,this.saveSettings()},saveSettings:function(){localStorage.setItem("autoAdaptiveSettings",JSON.stringify(this.settings))},loadSettings:function(){var t=this,e=nt("autoAdaptiveSettings",this.defaultSettings());Object.keys(e).forEach((function(n){t.settings[n]=e[n]}))},defaultSettings:function(){return Object.assign({},this.settings)},getConfig:function(){var t=Object.assign({},this.settings);return this.settings.toWidthByWindowWidth&&(t.toWidth=window.innerWidth),t},calculate:function(){var t=this;if(!this.calculateButtonIsBlocked){this.calculateButtonIsBlocked=!0,this.output="";try{var e=tt(this.input,this.getConfig());this.output=e.output,this.settings.copyToClipboard&&st(e.output)}catch(n){N.getInstance().log(n.toString())}this.$refs.logContainer.innerHTML=N.getInstance().getLogsFormatted(),this.$refs.calculateButton.classList.add("animated"),setTimeout((function(){t.calculateButtonIsBlocked=!1,t.$refs.calculateButton.classList.remove("animated")}),1e3)}}},beforeMount:function(){this.loadSettings()},mounted:function(){var t=this;document.addEventListener("keyup",(function(e){"Enter"===e.key&&e.ctrlKey&&t.toggleActive()})),window.addEventListener("resize",(function(){t.toWidthByWindowWidth&&(t.settings.toWidth=window.innerWidth)}))}},at=ot,rt=(n("5c0b"),Object(d["a"])(at,s,o,!1,null,null,null)),ct=rt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ct)}}).$mount("#auto-adaptive-app")},"5c0b":function(t,e,n){"use strict";var i=n("e332"),s=n.n(i);s.a},"5d50":function(t,e,n){},"91e7":function(t,e,n){},a4ba:function(t,e,n){},e332:function(t,e,n){}});
//# sourceMappingURL=app.js.map