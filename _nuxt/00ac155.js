(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{281:function(e,t,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("116fb410",content,!0,{sourceMap:!1})},282:function(e,t,o){"use strict";o.r(t);var n={props:{testimony:{type:Object,required:!0}}},r=(o(291),o(23)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card has-background-info has-text-white"},[o("div",{staticClass:"card-content"},[o("p",{staticClass:"title is-size-5 has-text-white"},[e._v(e._s(e.testimony.title))]),e._v(" "),o("blockquote",{staticClass:"is-size-6 has-text-weight-medium"},[e._v("\n      “"+e._s(e.testimony.quote)+"”\n    ")]),e._v(" "),o("br"),e._v(" "),o("p",{staticClass:"is-italic"},[e._v("\n      - "+e._s(e.testimony.author)+" | "+e._s(e.testimony.location)+"\n    ")])])])}),[],!1,null,"5f54c854",null);t.default=component.exports},291:function(e,t,o){"use strict";o(281)},292:function(e,t,o){var n=o(59)(!1);n.push([e.i,".card[data-v-5f54c854]{min-height:100%}.card-content[data-v-5f54c854]{padding:1.5rem 3.5rem}",""]),e.exports=n},293:function(e,t,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("068986a6",content,!0,{sourceMap:!1})},298:function(e,t,o){"use strict";o(293)},299:function(e,t,o){var n=o(59)(!1);n.push([e.i,".carousel-arrow .icon.has-icons-right.is-large{right:0}.carousel-arrow .icon.has-icons-left.is-large{left:0}",""]),e.exports=n},304:function(e,t,o){"use strict";o.r(t);var n={components:{AppTestimonialCard:o(282).default},data:function(){return{showing:0,testimonies:[{title:"Home Renovation Issues",quote:"We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.",author:"Jamie",location:"Detroit, MI"},{title:"Step-by-step walk through",quote:"Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.",author:"Robert",location:"Greenville, SC"},{title:"Home Renovation Issues",quote:"We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.",author:"Jamie",location:"Detroit, MI"},{title:"Step-by-step walk through",quote:"Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.",author:"Robert",location:"Greenville, SC"}]}}},r=(o(298),o(23)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-carousel-list",{attrs:{data:e.testimonies,"items-to-show":2,"arrow-hover":!1,"icon-size":"is-large"},scopedSlots:e._u([{key:"item",fn:function(e){return[o("app-testimonial-card",{attrs:{testimony:e}})]}}]),model:{value:e.showing,callback:function(t){e.showing=t},expression:"showing"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppTestimonialCard:o(282).default})}}]);