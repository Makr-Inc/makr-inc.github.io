(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{282:function(e,t,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("d9879e00",content,!0,{sourceMap:!1})},283:function(e,t,o){"use strict";o.r(t);var n={props:{testimony:{type:Object,required:!0}}},r=(o(292),o(23)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("p",{staticClass:"title is-size-5"},[e._v(e._s(e.testimony.title))]),e._v(" "),o("blockquote",{staticClass:"is-size-6 has-text-weight-medium"},[e._v("\n      “"+e._s(e.testimony.quote)+"”\n    ")]),e._v(" "),o("br"),e._v(" "),o("p",{staticClass:"is-italic"},[e._v("\n      - "+e._s(e.testimony.author)+" | "+e._s(e.testimony.location)+"\n    ")])])])}),[],!1,null,"3a32d960",null);t.default=component.exports},292:function(e,t,o){"use strict";o(282)},293:function(e,t,o){var n=o(59)(!1);n.push([e.i,".card[data-v-3a32d960]{min-height:100%}.card-content[data-v-3a32d960]{padding:1.5rem 3.5rem}",""]),e.exports=n},294:function(e,t,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("068986a6",content,!0,{sourceMap:!1})},299:function(e,t,o){"use strict";o(294)},300:function(e,t,o){var n=o(59)(!1);n.push([e.i,".carousel-arrow .icon.has-icons-right{right:0}.carousel-arrow .icon.has-icons-left{left:0}",""]),e.exports=n},305:function(e,t,o){"use strict";o.r(t);var n={components:{AppTestimonialCard:o(283).default},data:function(){return{showing:0,testimonies:[{title:"Home Renovation Issues",quote:"We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.",author:"Jamie",location:"Detroit, MI"},{title:"Step-by-step walk through",quote:"Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.",author:"Robert",location:"Greenville, SC"},{title:"Home Renovation Issues",quote:"We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.",author:"Jamie",location:"Detroit, MI"},{title:"Step-by-step walk through",quote:"Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.",author:"Robert",location:"Greenville, SC"}]}}},r=(o(299),o(23)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-carousel-list",{attrs:{data:e.testimonies,"items-to-show":2,"arrow-hover":!1,"icon-size":"is-large"},scopedSlots:e._u([{key:"item",fn:function(e){return[o("app-testimonial-card",{attrs:{testimony:e}})]}}]),model:{value:e.showing,callback:function(t){e.showing=t},expression:"showing"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppTestimonialCard:o(283).default})}}]);