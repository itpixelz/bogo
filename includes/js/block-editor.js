!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var r=n(3),l=n(4),o=n(5);e.exports=function(e,t){return r(e)||l(e,t)||o()}},function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),o=n(0),a=wp.plugins.registerPlugin,c=wp.editPost.PluginDocumentSettingPanel,i=wp.components,u=i.PanelRow,s=i.Button,b=wp.element.useState,f=wp.data,p=f.dispatch,g=f.useSelect,m=wp.apiFetch;a("bogo-language-panel",{render:function(){var e=g((function(e){return Object.assign({},e("core/editor").getCurrentPost(),bogo.currentPost)}));if(-1==bogo.localizablePostTypes.indexOf(e.type))return Object(o.createElement)(o.Fragment,null);var t=b(e.translations),n=l()(t,2),r=n[0],a=n[1];return Object(o.createElement)(c,{name:"bogo-language-panel",title:bogo.l10n.language,className:"bogo-language-panel"},Object(o.createElement)((function(){return Object(o.createElement)(u,null,Object(o.createElement)("span",null,bogo.l10n.language),Object(o.createElement)("div",null,d(e.locale)))}),null),Object(o.createElement)((function(){var e=[];Object.entries(r).forEach((function(t){var n=l()(t,2),r=n[0],a=n[1];a.editLink&&a.postTitle&&e.push(Object(o.createElement)("li",{key:r},Object(o.createElement)("a",{href:a.editLink,target:"_blank",rel:"noopener noreferrer"},a.postTitle),Object(o.createElement)("span",{className:"screen-reader-text"},bogo.l10n.targetBlank),Object(o.createElement)("br",null),Object(o.createElement)("em",null,d(r))))}));return Object(o.createElement)(u,null,Object(o.createElement)("span",null,bogo.l10n.translations),Object(o.createElement)((function(e){return e.listItems.length?Object(o.createElement)("ul",null,e.listItems):Object(o.createElement)("em",null,bogo.l10n.none)}),{listItems:e}))}),null),Object(o.createElement)((function(){var t=[];return Object.entries(r).forEach((function(n){var c=l()(n,2),i=c[0];c[1].postId||t.push(Object(o.createElement)("li",{key:i},Object(o.createElement)(s,{isDefault:!0,onClick:function(){var t;t=i,m({path:"/bogo/v1/posts/"+e.id+"/translations/"+t,method:"POST"}).then((function(e){var n=Object.assign({},r);n[t]={postId:e[t].id,postTitle:e[t].title.rendered,editLink:e[t].edit_link},a(n),p("core/notices").createInfoNotice(bogo.l10n.noticePostCreation,{isDismissible:!0,type:"snackbar",speak:!0,actions:[{url:n[t].editLink,label:bogo.l10n.editPost}]})}))}},bogo.l10n.addTranslation[i])))})),t.length<1||"auto-draft"==e.status?Object(o.createElement)(o.Fragment,null):Object(o.createElement)(u,null,Object(o.createElement)("ul",null,t))}),null))},icon:"translation"});var d=function(e){return bogo.availableLanguages[e]?bogo.availableLanguages[e]:e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,l=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}]);