!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){e.exports=n(1)},function(e,r,n){"use strict";n.r(r);class t{print(){console.log("Fuck you!")}}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,p=void 0;try{for(var l,a=e[Symbol.iterator]();!(t=(l=a.next()).done)&&(n.push(l.value),!r||n.length!==r);t=!0);}catch(e){o=!0,p=e}finally{try{t||null==a.return||a.return()}finally{if(o)throw p}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=new RegExp("(<((?=!--|!\\[CDATA\\[)((?=!-)!(?:-(?!->)[^\\-]*)*(?:--\x3e)?|!\\[CDATA\\[[^\\]]*(?:](?!]>)[^\\]]*)*?(?:]]>)?)|[^>]*>?))");function l(e,r){for(var n=function(e){for(var r,n=[],t=e;r=t.match(p);)n.push(t.slice(0,r.index)),n.push(r[0]),t=t.slice(r.index+r[0].length);return t.length&&n.push(t),n}(e),t=!1,o=Object.keys(r),l=1;l<n.length;l+=2)for(var a=0;a<o.length;a++){var c=o[a];if(-1!==n[l].indexOf(c)){n[l]=n[l].replace(new RegExp(c,"g"),r[c]),t=!0;break}}return t&&(e=n.join("")),e}console.log(function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];if(""===e.trim())return"";if(-1!==(e+="\n").indexOf("<pre")){var t=e.split("</pre>"),p=t.pop();e="";for(var a=0;a<t.length;a++){var c=t[a],i=c.indexOf("<pre");if(-1!==i){var u="<pre wp-pre-tag-"+a+"></pre>";n.push([u,c.substr(i)+"</pre>"]),e+=c.substr(0,i)+u}else e+=c}e+=p}var s="(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";-1!==(e=l(e=(e=(e=(e=e.replace(/<br\s*\/?>\s*<br\s*\/?>/g,"\n\n")).replace(new RegExp("(<"+s+"[\\s/>])","g"),"\n\n$1")).replace(new RegExp("(</"+s+">)","g"),"$1\n\n")).replace(/\r\n|\r/g,"\n"),{"\n":" \x3c!-- wpnl --\x3e "})).indexOf("<option")&&(e=(e=e.replace(/\s*<option/g,"<option")).replace(/<\/option>\s*/g,"</option>")),-1!==e.indexOf("</object>")&&(e=(e=(e=e.replace(/(<object[^>]*>)\s*/g,"$1")).replace(/\s*<\/object>/g,"</object>")).replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g,"$1")),-1===e.indexOf("<source")&&-1===e.indexOf("<track")||(e=(e=(e=e.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g,"$1")).replace(/\s*([<\[]\/(?:audio|video)[>\]])/g,"$1")).replace(/\s*(<(?:source|track)[^>]*>)\s*/g,"$1")),-1!==e.indexOf("<figcaption")&&(e=(e=e.replace(/\s*(<figcaption[^>]*>)/,"$1")).replace(/<\/figcaption>\s*/,"</figcaption>"));var f=(e=e.replace(/\n\n+/g,"\n\n")).split(/\n\s*\n/).filter(Boolean);return e="",f.forEach(function(r){e+="<p>"+r.replace(/^\n*|\n*$/g,"")+"</p>\n"}),e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p>\s*<\/p>/g,"")).replace(/<p>([^<]+)<\/(div|address|form)>/g,"<p>$1</p></$2>")).replace(new RegExp("<p>\\s*(</?"+s+"[^>]*>)\\s*</p>","g"),"$1")).replace(/<p>(<li.+?)<\/p>/g,"$1")).replace(/<p><blockquote([^>]*)>/gi,"<blockquote$1><p>")).replace(/<\/blockquote><\/p>/g,"</p></blockquote>")).replace(new RegExp("<p>\\s*(</?"+s+"[^>]*>)","g"),"$1")).replace(new RegExp("(</?"+s+"[^>]*>)\\s*</p>","g"),"$1"),r&&(e=(e=(e=(e=e.replace(/<(script|style).*?<\/\\1>/g,function(e){return e[0].replace(/\n/g,"<WPPreserveNewline />")})).replace(/<br>|<br\/>/g,"<br />")).replace(/(<br \/>)?\s*\n/g,function(e,r){return r?e:"<br />\n"})).replace(/<WPPreserveNewline \/>/g,"\n")),e=(e=(e=e.replace(new RegExp("(</?"+s+"[^>]*>)\\s*<br />","g"),"$1")).replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g,"$1")).replace(/\n<\/p>$/g,"</p>"),n.forEach(function(r){var n=o(r,2),t=n[0],p=n[1];e=e.replace(t,p)}),-1!==e.indexOf("\x3c!-- wpnl --\x3e")&&(e=e.replace(/\s?<!-- wpnl -->\s?/g,"\n")),e}("Yaddayadda.")),console.log(t),(new t).print()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FkbWluL3NldHRpbmdzL2plcmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2F1dG9wL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWRtaW4vc2V0dGluZ3MvdGVzdC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkplcmsiLCJbb2JqZWN0IE9iamVjdF0iLCJjb25zb2xlIiwibG9nIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwidW5kZWZpbmVkIiwiX3MiLCJfaSIsIml0ZXJhdG9yIiwibmV4dCIsImRvbmUiLCJwdXNoIiwibGVuZ3RoIiwiZXJyIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiVHlwZUVycm9yIiwiX25vbkl0ZXJhYmxlUmVzdCIsImh0bWxTcGxpdFJlZ2V4IiwiUmVnRXhwIiwicmVwbGFjZUluSHRtbFRhZ3MiLCJoYXlzdGFjayIsInJlcGxhY2VQYWlycyIsInRleHRBcnIiLCJpbnB1dCIsIm1hdGNoIiwicGFydHMiLCJ3b3JraW5nSW5wdXQiLCJzbGljZSIsImluZGV4IiwiaHRtbFNwbGl0IiwiY2hhbmdlZCIsIm5lZWRsZXMiLCJrZXlzIiwiaiIsIm5lZWRsZSIsImluZGV4T2YiLCJyZXBsYWNlIiwiam9pbiIsInRleHQiLCJiciIsImFyZ3VtZW50cyIsInByZVRhZ3MiLCJ0cmltIiwidGV4dFBhcnRzIiwic3BsaXQiLCJsYXN0VGV4dCIsInBvcCIsInRleHRQYXJ0Iiwic3RhcnQiLCJzdWJzdHIiLCJhbGxCbG9ja3MiLCJcbiIsInRleHRzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImZvckVhY2giLCJ0ZXh0UGllY2UiLCJhIiwiYiIsInByZVRhZyIsIl9wcmVUYWciLCJvcmlnaW5hbCIsImF1dG9wIiwicHJpbnQiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMs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LEVDalFhd0IsQ0FBSyxnQkFJbEJwRSxRQUFBQyxJQUFZSCxJQUNaLElBQWFBLEdBRWJ1RSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY2xhc3MgSmVyayB7XG5cdHByaW50KCkge1xuXHRcdGNvbnNvbGUubG9nKCdGdWNrIHlvdSEnKVxuXHR9XG59XG5leHBvcnQgeyBKZXJrIH1cbiIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuXG4vKipcbiAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIGFuIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICovXG52YXIgaHRtbFNwbGl0UmVnZXggPSBmdW5jdGlvbiAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLXNwYWNlcyAqL1xuICB2YXIgY29tbWVudHMgPSAnIScgKyAvLyBTdGFydCBvZiBjb21tZW50LCBhZnRlciB0aGUgPC5cbiAgJyg/OicgKyAvLyBVbnJvbGwgdGhlIGxvb3A6IENvbnN1bWUgZXZlcnl0aGluZyB1bnRpbCAtLT4gaXMgZm91bmQuXG4gICctKD8hLT4pJyArIC8vIERhc2ggbm90IGZvbGxvd2VkIGJ5IGVuZCBvZiBjb21tZW50LlxuICAnW15cXFxcLV0qJyArIC8vIENvbnN1bWUgbm9uLWRhc2hlcy5cbiAgJykqJyArIC8vIExvb3AgcG9zc2Vzc2l2ZWx5LlxuICAnKD86LS0+KT8nOyAvLyBFbmQgb2YgY29tbWVudC4gSWYgbm90IGZvdW5kLCBtYXRjaCBhbGwgaW5wdXQuXG5cbiAgdmFyIGNkYXRhID0gJyFcXFxcW0NEQVRBXFxcXFsnICsgLy8gU3RhcnQgb2YgY29tbWVudCwgYWZ0ZXIgdGhlIDwuXG4gICdbXlxcXFxdXSonICsgLy8gQ29uc3VtZSBub24tXS5cbiAgJyg/OicgKyAvLyBVbnJvbGwgdGhlIGxvb3A6IENvbnN1bWUgZXZlcnl0aGluZyB1bnRpbCBdXT4gaXMgZm91bmQuXG4gICddKD8hXT4pJyArIC8vIE9uZSBdIG5vdCBmb2xsb3dlZCBieSBlbmQgb2YgY29tbWVudC5cbiAgJ1teXFxcXF1dKicgKyAvLyBDb25zdW1lIG5vbi1dLlxuICAnKSo/JyArIC8vIExvb3AgcG9zc2Vzc2l2ZWx5LlxuICAnKD86XV0+KT8nOyAvLyBFbmQgb2YgY29tbWVudC4gSWYgbm90IGZvdW5kLCBtYXRjaCBhbGwgaW5wdXQuXG5cbiAgdmFyIGVzY2FwZWQgPSAnKD89JyArIC8vIElzIHRoZSBlbGVtZW50IGVzY2FwZWQ/XG4gICchLS0nICsgJ3wnICsgJyFcXFxcW0NEQVRBXFxcXFsnICsgJyknICsgJygoPz0hLSknICsgLy8gSWYgeWVzLCB3aGljaCB0eXBlP1xuICBjb21tZW50cyArICd8JyArIGNkYXRhICsgJyknO1xuICB2YXIgcmVnZXggPSAnKCcgKyAvLyBDYXB0dXJlIHRoZSBlbnRpcmUgbWF0Y2guXG4gICc8JyArIC8vIEZpbmQgc3RhcnQgb2YgZWxlbWVudC5cbiAgJygnICsgLy8gQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiBmb2xsb3dzLlxuICBlc2NhcGVkICsgLy8gRmluZCBlbmQgb2YgZXNjYXBlZCBlbGVtZW50LlxuICAnfCcgKyAvLyAuLi4gZWxzZSAuLi5cbiAgJ1tePl0qPj8nICsgLy8gRmluZCBlbmQgb2Ygbm9ybWFsIGVsZW1lbnQuXG4gICcpJyArICcpJztcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgpO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLW11bHRpLXNwYWNlcyAqL1xufSgpO1xuLyoqXG4gKiBTZXBhcmF0ZSBIVE1MIGVsZW1lbnRzIGFuZCBjb21tZW50cyBmcm9tIHRoZSB0ZXh0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5wdXQgVGhlIHRleHQgd2hpY2ggaGFzIHRvIGJlIGZvcm1hdHRlZC5cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgVGhlIGZvcm1hdHRlZCB0ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gaHRtbFNwbGl0KGlucHV0KSB7XG4gIHZhciBwYXJ0cyA9IFtdO1xuICB2YXIgd29ya2luZ0lucHV0ID0gaW5wdXQ7XG4gIHZhciBtYXRjaDtcblxuICB3aGlsZSAobWF0Y2ggPSB3b3JraW5nSW5wdXQubWF0Y2goaHRtbFNwbGl0UmVnZXgpKSB7XG4gICAgcGFydHMucHVzaCh3b3JraW5nSW5wdXQuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKTtcbiAgICBwYXJ0cy5wdXNoKG1hdGNoWzBdKTtcbiAgICB3b3JraW5nSW5wdXQgPSB3b3JraW5nSW5wdXQuc2xpY2UobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICB9XG5cbiAgaWYgKHdvcmtpbmdJbnB1dC5sZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKHdvcmtpbmdJbnB1dCk7XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG4vKipcbiAqIFJlcGxhY2UgY2hhcmFjdGVycyBvciBwaHJhc2VzIHdpdGhpbiBIVE1MIGVsZW1lbnRzIG9ubHkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBoYXlzdGFjayAgICAgVGhlIHRleHQgd2hpY2ggaGFzIHRvIGJlIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSAge09iamVjdH0gcmVwbGFjZVBhaXJzIEluIHRoZSBmb3JtIHtmcm9tOiAndG8nLCAuLi59LlxuICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgICAgICAgVGhlIGZvcm1hdHRlZCB0ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gcmVwbGFjZUluSHRtbFRhZ3MoaGF5c3RhY2ssIHJlcGxhY2VQYWlycykge1xuICAvLyBGaW5kIGFsbCBlbGVtZW50cy5cbiAgdmFyIHRleHRBcnIgPSBodG1sU3BsaXQoaGF5c3RhY2spO1xuICB2YXIgY2hhbmdlZCA9IGZhbHNlOyAvLyBFeHRyYWN0IGFsbCBuZWVkbGVzLlxuXG4gIHZhciBuZWVkbGVzID0gT2JqZWN0LmtleXMocmVwbGFjZVBhaXJzKTsgLy8gTG9vcCB0aHJvdWdoIGRlbGltaXRlcnMgKGVsZW1lbnRzKSBvbmx5LlxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkgKz0gMikge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmVlZGxlcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIG5lZWRsZSA9IG5lZWRsZXNbal07XG5cbiAgICAgIGlmICgtMSAhPT0gdGV4dEFycltpXS5pbmRleE9mKG5lZWRsZSkpIHtcbiAgICAgICAgdGV4dEFycltpXSA9IHRleHRBcnJbaV0ucmVwbGFjZShuZXcgUmVnRXhwKG5lZWRsZSwgJ2cnKSwgcmVwbGFjZVBhaXJzW25lZWRsZV0pO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTsgLy8gQWZ0ZXIgb25lIHN0cnRyKCkgYnJlYWsgb3V0IG9mIHRoZSBmb3JlYWNoIGxvb3AgYW5kIGxvb2sgYXQgbmV4dCBlbGVtZW50LlxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjaGFuZ2VkKSB7XG4gICAgaGF5c3RhY2sgPSB0ZXh0QXJyLmpvaW4oJycpO1xuICB9XG5cbiAgcmV0dXJuIGhheXN0YWNrO1xufVxuLyoqXG4gKiBSZXBsYWNlcyBkb3VibGUgbGluZS1icmVha3Mgd2l0aCBwYXJhZ3JhcGggZWxlbWVudHMuXG4gKlxuICogQSBncm91cCBvZiByZWdleCByZXBsYWNlcyB1c2VkIHRvIGlkZW50aWZ5IHRleHQgZm9ybWF0dGVkIHdpdGggbmV3bGluZXMgYW5kXG4gKiByZXBsYWNlIGRvdWJsZSBsaW5lLWJyZWFrcyB3aXRoIEhUTUwgcGFyYWdyYXBoIHRhZ3MuIFRoZSByZW1haW5pbmcgbGluZS1cbiAqIGJyZWFrcyBhZnRlciBjb252ZXJzaW9uIGJlY29tZSBgPGJyIC8+YCB0YWdzLCB1bmxlc3MgYnIgaXMgc2V0IHRvICdmYWxzZScuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICB0ZXh0IFRoZSB0ZXh0IHdoaWNoIGhhcyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0gIHtib29sZWFufSAgIGJyICAgT3B0aW9uYWwuIElmIHNldCwgd2lsbCBjb252ZXJ0IGFsbCByZW1haW5pbmcgbGluZS1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3MgYWZ0ZXIgcGFyYWdyYXBoaW5nLiBEZWZhdWx0IHRydWUuXG4gKlxuICogQGV4YW1wbGVcbiAqYGBganNcbiAqIGltcG9ydCB7IGF1dG9wIH0gZnJvbSAnQHdvcmRwcmVzcy9hdXRvcCc7XG4gKiBhdXRvcCggJ215IHRleHQnICk7IC8vIFwiPHA+bXkgdGV4dDwvcD5cIlxuICogYGBgXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgIFRleHQgd2hpY2ggaGFzIGJlZW4gY29udmVydGVkIGludG8gcGFyYWdyYXBoIHRhZ3MuXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3AodGV4dCkge1xuICB2YXIgYnIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gIHZhciBwcmVUYWdzID0gW107XG5cbiAgaWYgKHRleHQudHJpbSgpID09PSAnJykge1xuICAgIHJldHVybiAnJztcbiAgfSAvLyBKdXN0IHRvIG1ha2UgdGhpbmdzIGEgbGl0dGxlIGVhc2llciwgcGFkIHRoZSBlbmQuXG5cblxuICB0ZXh0ID0gdGV4dCArICdcXG4nO1xuICAvKlxuICAgKiBQcmUgdGFncyBzaG91bGRuJ3QgYmUgdG91Y2hlZCBieSBhdXRvcC5cbiAgICogUmVwbGFjZSBwcmUgdGFncyB3aXRoIHBsYWNlaG9sZGVycyBhbmQgYnJpbmcgdGhlbSBiYWNrIGFmdGVyIGF1dG9wLlxuICAgKi9cblxuICBpZiAodGV4dC5pbmRleE9mKCc8cHJlJykgIT09IC0xKSB7XG4gICAgdmFyIHRleHRQYXJ0cyA9IHRleHQuc3BsaXQoJzwvcHJlPicpO1xuICAgIHZhciBsYXN0VGV4dCA9IHRleHRQYXJ0cy5wb3AoKTtcbiAgICB0ZXh0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRleHRQYXJ0ID0gdGV4dFBhcnRzW2ldO1xuICAgICAgdmFyIHN0YXJ0ID0gdGV4dFBhcnQuaW5kZXhPZignPHByZScpOyAvLyBNYWxmb3JtZWQgaHRtbD9cblxuICAgICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgICB0ZXh0ICs9IHRleHRQYXJ0O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSAnPHByZSB3cC1wcmUtdGFnLScgKyBpICsgJz48L3ByZT4nO1xuICAgICAgcHJlVGFncy5wdXNoKFtuYW1lLCB0ZXh0UGFydC5zdWJzdHIoc3RhcnQpICsgJzwvcHJlPiddKTtcbiAgICAgIHRleHQgKz0gdGV4dFBhcnQuc3Vic3RyKDAsIHN0YXJ0KSArIG5hbWU7XG4gICAgfVxuXG4gICAgdGV4dCArPSBsYXN0VGV4dDtcbiAgfSAvLyBDaGFuZ2UgbXVsdGlwbGUgPGJyPnMgaW50byB0d28gbGluZSBicmVha3MsIHdoaWNoIHdpbGwgdHVybiBpbnRvIHBhcmFncmFwaHMuXG5cblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88YnJcXHMqXFwvPz5cXHMqPGJyXFxzKlxcLz8+L2csICdcXG5cXG4nKTtcbiAgdmFyIGFsbEJsb2NrcyA9ICcoPzp0YWJsZXx0aGVhZHx0Zm9vdHxjYXB0aW9ufGNvbHxjb2xncm91cHx0Ym9keXx0cnx0ZHx0aHxkaXZ8ZGx8ZGR8ZHR8dWx8b2x8bGl8cHJlfGZvcm18bWFwfGFyZWF8YmxvY2txdW90ZXxhZGRyZXNzfG1hdGh8c3R5bGV8cHxoWzEtNl18aHJ8ZmllbGRzZXR8bGVnZW5kfHNlY3Rpb258YXJ0aWNsZXxhc2lkZXxoZ3JvdXB8aGVhZGVyfGZvb3RlcnxuYXZ8ZmlndXJlfGZpZ2NhcHRpb258ZGV0YWlsc3xtZW51fHN1bW1hcnkpJzsgLy8gQWRkIGEgZG91YmxlIGxpbmUgYnJlYWsgYWJvdmUgYmxvY2stbGV2ZWwgb3BlbmluZyB0YWdzLlxuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnKDwnICsgYWxsQmxvY2tzICsgJ1tcXFxcc1xcLz5dKScsICdnJyksICdcXG5cXG4kMScpOyAvLyBBZGQgYSBkb3VibGUgbGluZSBicmVhayBiZWxvdyBibG9jay1sZXZlbCBjbG9zaW5nIHRhZ3MuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoPFxcLycgKyBhbGxCbG9ja3MgKyAnPiknLCAnZycpLCAnJDFcXG5cXG4nKTsgLy8gU3RhbmRhcmRpemUgbmV3bGluZSBjaGFyYWN0ZXJzIHRvIFwiXFxuXCIuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxufFxcci9nLCAnXFxuJyk7IC8vIEZpbmQgbmV3bGluZXMgaW4gYWxsIGVsZW1lbnRzIGFuZCBhZGQgcGxhY2Vob2xkZXJzLlxuXG4gIHRleHQgPSByZXBsYWNlSW5IdG1sVGFncyh0ZXh0LCB7XG4gICAgJ1xcbic6ICcgPCEtLSB3cG5sIC0tPiAnXG4gIH0pOyAvLyBDb2xsYXBzZSBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyIDxvcHRpb24+IGVsZW1lbnRzIHNvIHRoZXkgZG9uJ3QgZ2V0IGF1dG9wJ2QuXG5cbiAgaWYgKHRleHQuaW5kZXhPZignPG9wdGlvbicpICE9PSAtMSkge1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccyo8b3B0aW9uL2csICc8b3B0aW9uJyk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvPFxcL29wdGlvbj5cXHMqL2csICc8L29wdGlvbj4nKTtcbiAgfVxuICAvKlxuICAgKiBDb2xsYXBzZSBsaW5lIGJyZWFrcyBpbnNpZGUgPG9iamVjdD4gZWxlbWVudHMsIGJlZm9yZSA8cGFyYW0+IGFuZCA8ZW1iZWQ+IGVsZW1lbnRzXG4gICAqIHNvIHRoZXkgZG9uJ3QgZ2V0IGF1dG9wJ2QuXG4gICAqL1xuXG5cbiAgaWYgKHRleHQuaW5kZXhPZignPC9vYmplY3Q+JykgIT09IC0xKSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKDxvYmplY3RbXj5dKj4pXFxzKi9nLCAnJDEnKTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHMqPFxcL29iamVjdD4vZywgJzwvb2JqZWN0PicpO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccyooPFxcLz8oPzpwYXJhbXxlbWJlZClbXj5dKj4pXFxzKi9nLCAnJDEnKTtcbiAgfVxuICAvKlxuICAgKiBDb2xsYXBzZSBsaW5lIGJyZWFrcyBpbnNpZGUgPGF1ZGlvPiBhbmQgPHZpZGVvPiBlbGVtZW50cyxcbiAgICogYmVmb3JlIGFuZCBhZnRlciA8c291cmNlPiBhbmQgPHRyYWNrPiBlbGVtZW50cy5cbiAgICovXG5cblxuICBpZiAodGV4dC5pbmRleE9mKCc8c291cmNlJykgIT09IC0xIHx8IHRleHQuaW5kZXhPZignPHRyYWNrJykgIT09IC0xKSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKFs8XFxbXSg/OmF1ZGlvfHZpZGVvKVtePlxcXV0qWz5cXF1dKVxccyovZywgJyQxJyk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKihbPFxcW11cXC8oPzphdWRpb3x2aWRlbylbPlxcXV0pL2csICckMScpO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccyooPCg/OnNvdXJjZXx0cmFjaylbXj5dKj4pXFxzKi9nLCAnJDEnKTtcbiAgfSAvLyBDb2xsYXBzZSBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyIDxmaWdjYXB0aW9uPiBlbGVtZW50cy5cblxuXG4gIGlmICh0ZXh0LmluZGV4T2YoJzxmaWdjYXB0aW9uJykgIT09IC0xKSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKig8ZmlnY2FwdGlvbltePl0qPikvLCAnJDEnKTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88XFwvZmlnY2FwdGlvbj5cXHMqLywgJzwvZmlnY2FwdGlvbj4nKTtcbiAgfSAvLyBSZW1vdmUgbW9yZSB0aGFuIHR3byBjb250aWd1b3VzIGxpbmUgYnJlYWtzLlxuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxuXFxuKy9nLCAnXFxuXFxuJyk7IC8vIFNwbGl0IHVwIHRoZSBjb250ZW50cyBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MsIHNlcGFyYXRlZCBieSBkb3VibGUgbGluZSBicmVha3MuXG5cbiAgdmFyIHRleHRzID0gdGV4dC5zcGxpdCgvXFxuXFxzKlxcbi8pLmZpbHRlcihCb29sZWFuKTsgLy8gUmVzZXQgdGV4dCBwcmlvciB0byByZWJ1aWxkaW5nLlxuXG4gIHRleHQgPSAnJzsgLy8gUmVidWlsZCB0aGUgY29udGVudCBhcyBhIHN0cmluZywgd3JhcHBpbmcgZXZlcnkgYml0IHdpdGggYSA8cD4uXG5cbiAgdGV4dHMuZm9yRWFjaChmdW5jdGlvbiAodGV4dFBpZWNlKSB7XG4gICAgdGV4dCArPSAnPHA+JyArIHRleHRQaWVjZS5yZXBsYWNlKC9eXFxuKnxcXG4qJC9nLCAnJykgKyAnPC9wPlxcbic7XG4gIH0pOyAvLyBVbmRlciBjZXJ0YWluIHN0cmFuZ2UgY29uZGl0aW9ucyBpdCBjb3VsZCBjcmVhdGUgYSBQIG9mIGVudGlyZWx5IHdoaXRlc3BhY2UuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPHA+XFxzKjxcXC9wPi9nLCAnJyk7IC8vIEFkZCBhIGNsb3NpbmcgPHA+IGluc2lkZSA8ZGl2PiwgPGFkZHJlc3M+LCBvciA8Zm9ybT4gdGFnIGlmIG1pc3NpbmcuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPHA+KFtePF0rKTxcXC8oZGl2fGFkZHJlc3N8Zm9ybSk+L2csICc8cD4kMTwvcD48LyQyPicpOyAvLyBJZiBhbiBvcGVuaW5nIG9yIGNsb3NpbmcgYmxvY2sgZWxlbWVudCB0YWcgaXMgd3JhcHBlZCBpbiBhIDxwPiwgdW53cmFwIGl0LlxuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnPHA+XFxcXHMqKDxcXC8/JyArIGFsbEJsb2NrcyArICdbXj5dKj4pXFxcXHMqPFxcL3A+JywgJ2cnKSwgJyQxJyk7IC8vIEluIHNvbWUgY2FzZXMgPGxpPiBtYXkgZ2V0IHdyYXBwZWQgaW4gPHA+LCBmaXggdGhlbS5cblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88cD4oPGxpLis/KTxcXC9wPi9nLCAnJDEnKTsgLy8gSWYgYSA8YmxvY2txdW90ZT4gaXMgd3JhcHBlZCB3aXRoIGEgPHA+LCBtb3ZlIGl0IGluc2lkZSB0aGUgPGJsb2NrcXVvdGU+LlxuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzxwPjxibG9ja3F1b3RlKFtePl0qKT4vZ2ksICc8YmxvY2txdW90ZSQxPjxwPicpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88XFwvYmxvY2txdW90ZT48XFwvcD4vZywgJzwvcD48L2Jsb2NrcXVvdGU+Jyk7IC8vIElmIGFuIG9wZW5pbmcgb3IgY2xvc2luZyBibG9jayBlbGVtZW50IHRhZyBpcyBwcmVjZWRlZCBieSBhbiBvcGVuaW5nIDxwPiB0YWcsIHJlbW92ZSBpdC5cblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJzxwPlxcXFxzKig8XFwvPycgKyBhbGxCbG9ja3MgKyAnW14+XSo+KScsICdnJyksICckMScpOyAvLyBJZiBhbiBvcGVuaW5nIG9yIGNsb3NpbmcgYmxvY2sgZWxlbWVudCB0YWcgaXMgZm9sbG93ZWQgYnkgYSBjbG9zaW5nIDxwPiB0YWcsIHJlbW92ZSBpdC5cblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJyg8XFwvPycgKyBhbGxCbG9ja3MgKyAnW14+XSo+KVxcXFxzKjxcXC9wPicsICdnJyksICckMScpOyAvLyBPcHRpb25hbGx5IGluc2VydCBsaW5lIGJyZWFrcy5cblxuICBpZiAoYnIpIHtcbiAgICAvLyBSZXBsYWNlIG5ld2xpbmVzIHRoYXQgc2hvdWxkbid0IGJlIHRvdWNoZWQgd2l0aCBhIHBsYWNlaG9sZGVyLlxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwoc2NyaXB0fHN0eWxlKS4qPzxcXC9cXFxcMT4vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbMF0ucmVwbGFjZSgvXFxuL2csICc8V1BQcmVzZXJ2ZU5ld2xpbmUgLz4nKTtcbiAgICB9KTsgLy8gTm9ybWFsaXplIDxicj5cblxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzxicj58PGJyXFwvPi9nLCAnPGJyIC8+Jyk7IC8vIFJlcGxhY2UgYW55IG5ldyBsaW5lIGNoYXJhY3RlcnMgdGhhdCBhcmVuJ3QgcHJlY2VkZWQgYnkgYSA8YnIgLz4gd2l0aCBhIDxiciAvPi5cblxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg8YnIgXFwvPik/XFxzKlxcbi9nLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGIgPyBhIDogJzxiciAvPlxcbic7XG4gICAgfSk7IC8vIFJlcGxhY2UgbmV3bGluZSBwbGFjZWhvbGRlcnMgd2l0aCBuZXdsaW5lcy5cblxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzxXUFByZXNlcnZlTmV3bGluZSBcXC8+L2csICdcXG4nKTtcbiAgfSAvLyBJZiBhIDxiciAvPiB0YWcgaXMgYWZ0ZXIgYW4gb3BlbmluZyBvciBjbG9zaW5nIGJsb2NrIHRhZywgcmVtb3ZlIGl0LlxuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoPFxcLz8nICsgYWxsQmxvY2tzICsgJ1tePl0qPilcXFxccyo8YnIgXFwvPicsICdnJyksICckMScpOyAvLyBJZiBhIDxiciAvPiB0YWcgaXMgYmVmb3JlIGEgc3Vic2V0IG9mIG9wZW5pbmcgb3IgY2xvc2luZyBibG9jayB0YWdzLCByZW1vdmUgaXQuXG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPGJyIFxcLz4oXFxzKjxcXC8/KD86cHxsaXxkaXZ8ZGx8ZGR8ZHR8dGh8cHJlfHRkfHVsfG9sKVtePl0qPikvZywgJyQxJyk7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbjxcXC9wPiQvZywgJzwvcD4nKTsgLy8gUmVwbGFjZSBwbGFjZWhvbGRlciA8cHJlPiB0YWdzIHdpdGggdGhlaXIgb3JpZ2luYWwgY29udGVudC5cblxuICBwcmVUYWdzLmZvckVhY2goZnVuY3Rpb24gKHByZVRhZykge1xuICAgIHZhciBfcHJlVGFnID0gX3NsaWNlZFRvQXJyYXkocHJlVGFnLCAyKSxcbiAgICAgICAgbmFtZSA9IF9wcmVUYWdbMF0sXG4gICAgICAgIG9yaWdpbmFsID0gX3ByZVRhZ1sxXTtcblxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobmFtZSwgb3JpZ2luYWwpO1xuICB9KTsgLy8gUmVzdG9yZSBuZXdsaW5lcyBpbiBhbGwgZWxlbWVudHMuXG5cbiAgaWYgKC0xICE9PSB0ZXh0LmluZGV4T2YoJzwhLS0gd3BubCAtLT4nKSkge1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccz88IS0tIHdwbmwgLS0+XFxzPy9nLCAnXFxuJyk7XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn1cbi8qKlxuICogUmVwbGFjZXMgYDxwPmAgdGFncyB3aXRoIHR3byBsaW5lIGJyZWFrcy4gXCJPcHBvc2l0ZVwiIG9mIGF1dG9wKCkuXG4gKlxuICogUmVwbGFjZXMgYDxwPmAgdGFncyB3aXRoIHR3byBsaW5lIGJyZWFrcyBleGNlcHQgd2hlcmUgdGhlIGA8cD5gIGhhcyBhdHRyaWJ1dGVzLlxuICogVW5pZmllcyB3aGl0ZXNwYWNlLiBJbmRlbnRzIGA8bGk+YCwgYDxkdD5gIGFuZCBgPGRkPmAgZm9yIGJldHRlciByZWFkYWJpbGl0eS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgVGhlIGNvbnRlbnQgZnJvbSB0aGUgZWRpdG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgcmVtb3ZlcCB9IGZyb20gJ0B3b3JkcHJlc3MvYXV0b3AnO1xuICogcmVtb3ZlcCggJzxwPm15IHRleHQ8L3A+JyApOyAvLyBcIm15IHRleHRcIlxuICogYGBgXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSAgICAgIFRoZSBjb250ZW50IHdpdGggc3RyaXBwZWQgcGFyYWdyYXBoIHRhZ3MuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZXAoaHRtbCkge1xuICB2YXIgYmxvY2tsaXN0ID0gJ2Jsb2NrcXVvdGV8dWx8b2x8bGl8ZGx8ZHR8ZGR8dGFibGV8dGhlYWR8dGJvZHl8dGZvb3R8dHJ8dGh8dGR8aFsxLTZdfGZpZWxkc2V0fGZpZ3VyZSc7XG4gIHZhciBibG9ja2xpc3QxID0gYmxvY2tsaXN0ICsgJ3xkaXZ8cCc7XG4gIHZhciBibG9ja2xpc3QyID0gYmxvY2tsaXN0ICsgJ3xwcmUnO1xuICB2YXIgcHJlc2VydmUgPSBbXTtcbiAgdmFyIHByZXNlcnZlTGluZWJyZWFrcyA9IGZhbHNlO1xuICB2YXIgcHJlc2VydmVCciA9IGZhbHNlO1xuXG4gIGlmICghaHRtbCkge1xuICAgIHJldHVybiAnJztcbiAgfSAvLyBQcm90ZWN0IHNjcmlwdCBhbmQgc3R5bGUgdGFncy5cblxuXG4gIGlmIChodG1sLmluZGV4T2YoJzxzY3JpcHQnKSAhPT0gLTEgfHwgaHRtbC5pbmRleE9mKCc8c3R5bGUnKSAhPT0gLTEpIHtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC88KHNjcmlwdHxzdHlsZSlbXj5dKj5bXFxzXFxTXSo/PFxcL1xcMT4vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBwcmVzZXJ2ZS5wdXNoKG1hdGNoKTtcbiAgICAgIHJldHVybiAnPHdwLXByZXNlcnZlPic7XG4gICAgfSk7XG4gIH0gLy8gUHJvdGVjdCBwcmUgdGFncy5cblxuXG4gIGlmIChodG1sLmluZGV4T2YoJzxwcmUnKSAhPT0gLTEpIHtcbiAgICBwcmVzZXJ2ZUxpbmVicmVha3MgPSB0cnVlO1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLzxwcmVbXj5dKj5bXFxzXFxTXSs/PFxcL3ByZT4vZywgZnVuY3Rpb24gKGEpIHtcbiAgICAgIGEgPSBhLnJlcGxhY2UoLzxiciA/XFwvPz4oXFxyXFxufFxcbik/L2csICc8d3AtbGluZS1icmVhaz4nKTtcbiAgICAgIGEgPSBhLnJlcGxhY2UoLzxcXC8/cCggW14+XSopPz4oXFxyXFxufFxcbik/L2csICc8d3AtbGluZS1icmVhaz4nKTtcbiAgICAgIHJldHVybiBhLnJlcGxhY2UoL1xccj9cXG4vZywgJzx3cC1saW5lLWJyZWFrPicpO1xuICAgIH0pO1xuICB9IC8vIFJlbW92ZSBsaW5lIGJyZWFrcyBidXQga2VlcCA8YnI+IHRhZ3MgaW5zaWRlIGltYWdlIGNhcHRpb25zLlxuXG5cbiAgaWYgKGh0bWwuaW5kZXhPZignW2NhcHRpb24nKSAhPT0gLTEpIHtcbiAgICBwcmVzZXJ2ZUJyID0gdHJ1ZTtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXFtjYXB0aW9uW1xcc1xcU10rP1xcW1xcL2NhcHRpb25cXF0vZywgZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBhLnJlcGxhY2UoLzxicihbXj5dKik+L2csICc8d3AtdGVtcC1iciQxPicpLnJlcGxhY2UoL1tcXHJcXG5cXHRdKy8sICcnKTtcbiAgICB9KTtcbiAgfSAvLyBOb3JtYWxpemUgd2hpdGUgc3BhY2UgY2hhcmFjdGVycyBiZWZvcmUgYW5kIGFmdGVyIGJsb2NrIHRhZ3MuXG5cblxuICBodG1sID0gaHRtbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFxzKjwvKCcgKyBibG9ja2xpc3QxICsgJyk+XFxcXHMqJywgJ2cnKSwgJzwvJDE+XFxuJyk7XG4gIGh0bWwgPSBodG1sLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxcXHMqPCgoPzonICsgYmxvY2tsaXN0MSArICcpKD86IFtePl0qKT8pPicsICdnJyksICdcXG48JDE+Jyk7IC8vIE1hcmsgPC9wPiBpZiBpdCBoYXMgYW55IGF0dHJpYnV0ZXMuXG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvKDxwIFtePl0rPi4qPyk8XFwvcD4vZywgJyQxPC9wIz4nKTsgLy8gUHJlc2VydmUgdGhlIGZpcnN0IDxwPiBpbnNpZGUgYSA8ZGl2Pi5cblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC88ZGl2KCBbXj5dKik/Plxccyo8cD4vZ2ksICc8ZGl2JDE+XFxuXFxuJyk7IC8vIFJlbW92ZSBwYXJhZ3JhcGggdGFncy5cblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXHMqPHA+L2dpLCAnJyk7XG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xccyo8XFwvcD5cXHMqL2dpLCAnXFxuXFxuJyk7IC8vIE5vcm1hbGl6ZSB3aGl0ZSBzcGFjZSBjaGFycyBhbmQgcmVtb3ZlIG11bHRpcGxlIGxpbmUgYnJlYWtzLlxuXG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcbltcXHNcXHUwMGEwXStcXG4vZywgJ1xcblxcbicpOyAvLyBSZXBsYWNlIDxicj4gdGFncyB3aXRoIGxpbmUgYnJlYWtzLlxuXG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoLyhcXHMqKTxiciA/XFwvPz5cXHMqL2dpLCBmdW5jdGlvbiAobWF0Y2gsIHNwYWNlKSB7XG4gICAgaWYgKHNwYWNlICYmIHNwYWNlLmluZGV4T2YoJ1xcbicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICdcXG5cXG4nO1xuICAgIH1cblxuICAgIHJldHVybiAnXFxuJztcbiAgfSk7IC8vIEZpeCBsaW5lIGJyZWFrcyBhcm91bmQgPGRpdj4uXG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxzKjxkaXYvZywgJ1xcbjxkaXYnKTtcbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPFxcL2Rpdj5cXHMqL2csICc8L2Rpdj5cXG4nKTsgLy8gRml4IGxpbmUgYnJlYWtzIGFyb3VuZCBjYXB0aW9uIHNob3J0Y29kZXMuXG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxzKlxcW2NhcHRpb24oW15cXFtdKylcXFtcXC9jYXB0aW9uXFxdXFxzKi9naSwgJ1xcblxcbltjYXB0aW9uJDFbL2NhcHRpb25dXFxuXFxuJyk7XG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoL2NhcHRpb25cXF1cXG5cXG4rXFxbY2FwdGlvbi9nLCAnY2FwdGlvbl1cXG5cXG5bY2FwdGlvbicpOyAvLyBQYWQgYmxvY2sgZWxlbWVudHMgdGFncyB3aXRoIGEgbGluZSBicmVhay5cblxuICBodG1sID0gaHRtbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFxzKjwoKD86JyArIGJsb2NrbGlzdDIgKyAnKSg/OiBbXj5dKik/KVxcXFxzKj4nLCAnZycpLCAnXFxuPCQxPicpO1xuICBodG1sID0gaHRtbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFxzKjwvKCcgKyBibG9ja2xpc3QyICsgJyk+XFxcXHMqJywgJ2cnKSwgJzwvJDE+XFxuJyk7IC8vIEluZGVudCA8bGk+LCA8ZHQ+IGFuZCA8ZGQ+IHRhZ3MuXG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPCgobGl8ZHR8ZGQpW14+XSopPi9nLCAnIFxcdDwkMT4nKTsgLy8gRml4IGxpbmUgYnJlYWtzIGFyb3VuZCA8c2VsZWN0PiBhbmQgPG9wdGlvbj4uXG5cbiAgaWYgKGh0bWwuaW5kZXhPZignPG9wdGlvbicpICE9PSAtMSkge1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xccyo8b3B0aW9uL2csICdcXG48b3B0aW9uJyk7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxzKjxcXC9zZWxlY3Q+L2csICdcXG48L3NlbGVjdD4nKTtcbiAgfSAvLyBQYWQgPGhyPiB3aXRoIHR3byBsaW5lIGJyZWFrcy5cblxuXG4gIGlmIChodG1sLmluZGV4T2YoJzxocicpICE9PSAtMSkge1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xccyo8aHIoIFtePl0qKT8+XFxzKi9nLCAnXFxuXFxuPGhyJDE+XFxuXFxuJyk7XG4gIH0gLy8gUmVtb3ZlIGxpbmUgYnJlYWtzIGluIDxvYmplY3Q+IHRhZ3MuXG5cblxuICBpZiAoaHRtbC5pbmRleE9mKCc8b2JqZWN0JykgIT09IC0xKSB7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPG9iamVjdFtcXHNcXFNdKz88XFwvb2JqZWN0Pi9nLCBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGEucmVwbGFjZSgvW1xcclxcbl0rL2csICcnKTtcbiAgICB9KTtcbiAgfSAvLyBVbm1hcmsgc3BlY2lhbCBwYXJhZ3JhcGggY2xvc2luZyB0YWdzLlxuXG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPFxcL3AjPi9nLCAnPC9wPlxcbicpOyAvLyBQYWQgcmVtYWluaW5nIDxwPiB0YWdzIHdoaXQgYSBsaW5lIGJyZWFrLlxuXG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xccyooPHAgW14+XSs+W1xcc1xcU10qPzxcXC9wPikvZywgJ1xcbiQxJyk7IC8vIFRyaW0uXG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxccysvLCAnJyk7XG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoL1tcXHNcXHUwMGEwXSskLywgJycpO1xuXG4gIGlmIChwcmVzZXJ2ZUxpbmVicmVha3MpIHtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC88d3AtbGluZS1icmVhaz4vZywgJ1xcbicpO1xuICB9XG5cbiAgaWYgKHByZXNlcnZlQnIpIHtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC88d3AtdGVtcC1icihbXj5dKik+L2csICc8YnIkMT4nKTtcbiAgfSAvLyBSZXN0b3JlIHByZXNlcnZlZCB0YWdzLlxuXG5cbiAgaWYgKHByZXNlcnZlLmxlbmd0aCkge1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLzx3cC1wcmVzZXJ2ZT4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHByZXNlcnZlLnNoaWZ0KCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaHRtbDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7SmVya30gZnJvbSAnLi9qZXJrLmpzJztcbmltcG9ydCB7IGF1dG9wLHJlbW92ZXAgfSBmcm9tICdAd29yZHByZXNzL2F1dG9wJztcblxuY29uc3QgZG9iZWRvbyA9ICgpID0+IHtcblx0Y29uc29sZS5sb2coYXV0b3AoJ1lhZGRheWFkZGEuJykpXG59XG5cbmRvYmVkb28oKTtcbmNvbnNvbGUubG9nKEplcmspXG52YXIgeHggPSBuZXcgSmVyaygpXG5cbnh4LnByaW50KClcbiJdLCJzb3VyY2VSb290IjoiIn0=