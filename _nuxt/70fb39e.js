(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,6,7],{265:function(e,t,o){"use strict";o.r(t);var r={props:{projectCard:{type:Object,default:function(){return{}}}},computed:{projectCardImage:function(){return o(267)("./".concat(this.projectCard.image,".png"))}}},n=o(32),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("div",{staticClass:"card-image"},[o("figure",{staticClass:"image is-square"},[o("img",{attrs:{src:e.projectCardImage,alt:e.projectCard.title}})])]),e._v(" "),o("div",{staticClass:"card-content"},[o("p",{staticClass:"is-size-6"},[e._v(e._s(e.projectCard.title))]),e._v(" "),o("p",{staticClass:"is-size-7 has-text-primary"},[o("b-icon",{attrs:{icon:"account",size:"is-small"}}),e._v("\n      "+e._s(e.projectCard.prosAvailable)+" pros available\n    ")],1),e._v(" "),o("p",{staticClass:"is-size-7 has-text-primary"},[o("b-icon",{attrs:{icon:"tag",size:"is-small"}}),e._v("\n      "+e._s(e.projectCard.priceRange)+" / avg session\n    ")],1)])])}),[],!1,null,null,null);t.default=component.exports},266:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{switchValue:"maker"}},watch:{switchValue:function(e){this.$emit("switch-value",e)}}},n=o(32),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-field",{staticClass:"is-inline-block p-2"},[o("b-radio-button",{attrs:{"native-value":"maker",type:"is-primary"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}},[e._v("\n    Makers\n  ")]),e._v(" "),o("b-radio-button",{attrs:{"native-value":"pro",type:"is-primary"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}},[e._v("\n    Pros\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},267:function(e,t,o){var map={"./home-renovation.png":268,"./interior-design.png":269,"./van-builds.png":270,"./wood-working.png":271};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=267},268:function(e,t,o){e.exports=o.p+"img/home-renovation.e2be30b.png"},269:function(e,t,o){e.exports=o.p+"img/interior-design.9c9fed8.png"},270:function(e,t,o){e.exports=o.p+"img/van-builds.02e712e.png"},271:function(e,t,o){e.exports=o.p+"img/wood-working.7295266.png"},272:function(e,t,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("14ba7e1e",content,!0,{sourceMap:!1})},273:function(e,t,o){var content=o(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("45867da7",content,!0,{sourceMap:!1})},274:function(e,t,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("6ff4e3ea",content,!0,{sourceMap:!1})},275:function(e,t,o){e.exports=o.p+"img/hero-image.8027c96.png"},276:function(e,t,o){"use strict";o(272)},277:function(e,t,o){var r=o(55)(!1);r.push([e.i,".hero-body{margin:0 5rem}",""]),e.exports=r},278:function(e,t,o){"use strict";o(273)},279:function(e,t,o){var r=o(55)(!1);r.push([e.i,".card-content[data-v-6969695a]{padding:1.5rem 4.5rem}",""]),e.exports=r},280:function(e,t,o){"use strict";o(274)},281:function(e,t,o){var r=o(55)(!1);r.push([e.i,".how-it-works[data-v-46780e1a]{margin:0 7.5rem}.icon[data-v-46780e1a]{margin-bottom:.5rem}",""]),e.exports=r},282:function(e,t,o){"use strict";o.r(t);var r={components:{AppProjectCard:o(265).default},props:{exploreProjectCards:{type:Array,default:function(){return[]}}}},n=o(32),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"section"},[o("div",{staticClass:"columns"},e._l(e.exploreProjectCards,(function(e){return o("div",{key:e.title,staticClass:"column"},[o("app-project-card",{attrs:{"project-card":e}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppProjectCard:o(265).default})},283:function(e,t,o){"use strict";o.r(t);var r={components:{AppMakerProSwitch:o(266).default},props:{title:{type:String,default:"Title"},subtitle:{type:String,default:"Subtitle"},selectLabel:{type:String,default:"I need help with..."},selectPlaceholder:{type:String,default:"ex. Home renovations"},selectOptions:{type:Array,default:function(){return["Woodworking","Home recording","Social media marketing"]}}},methods:{handleSwitchValue:function(e){this.$emit("hero-switch-value",e)}}},n=(o(276),o(32)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-medium is-primary-light"},[r("div",{staticClass:"hero-body pb-6"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-two-thirds"},[r("app-maker-pro-switch",{on:{"switch-value":e.handleSwitchValue}}),e._v(" "),r("p",{staticClass:"title is-spaced"},[e._v("\n            "+e._s(e.title)+"\n          ")]),e._v(" "),r("p",{staticClass:"subtitle"},[e._v("\n            "+e._s(e.subtitle)+"\n          ")]),e._v(" "),r("form",[r("b-field",{attrs:{label:e.selectLabel,grouped:""}},[r("b-select",{attrs:{placeholder:e.selectPlaceholder}},e._l(e.selectOptions,(function(option){return r("option",{key:option,domProps:{value:option}},[e._v("\n                  "+e._s(option)+"\n                ")])})),0),e._v(" "),r("b-button",{attrs:{type:"is-primary"}},[e._v("Get Started")])],1)],1)],1),e._v(" "),r("div",{staticClass:"column is-one-third is-flex level"},[r("img",{staticClass:"level-item",attrs:{src:o(275),alt:"hero-image"}})])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppMakerProSwitch:o(266).default})},284:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{showing:0,testimonies:[{title:"Home Renovation Issues",quote:"We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.",author:"Jamie",location:"Detroit, MI"},{title:"Step-by-step walk through",quote:"Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.",author:"Robert",location:"Greenville, SC"},{title:"Home Renovation Issues",quote:"We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.",author:"Jamie",location:"Detroit, MI"},{title:"Step-by-step walk through",quote:"Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.",author:"Robert",location:"Greenville, SC"}]}}},n=(o(278),o(32)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-carousel-list",{attrs:{data:e.testimonies,"items-to-show":2,"arrow-hover":!1,"icon-size":"is-large"},scopedSlots:e._u([{key:"item",fn:function(t){return[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("p",{staticClass:"title is-size-5"},[e._v(e._s(t.title))]),e._v(" "),o("blockquote",{staticClass:"is-size-6 has-text-weight-medium"},[e._v("\n          “"+e._s(t.quote)+"”\n        ")]),e._v(" "),o("br"),e._v(" "),o("p",{staticClass:"is-italic"},[e._v("\n          - "+e._s(t.author)+" | "+e._s(t.location)+"\n        ")])])])]}}]),model:{value:e.showing,callback:function(t){e.showing=t},expression:"showing"}})}),[],!1,null,"6969695a",null);t.default=component.exports},285:function(e,t,o){"use strict";o.r(t);o(280);var r=o(32),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"how-it-works"},[e._m(0),e._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-flex is-flex-grow-1"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("b-icon",{attrs:{icon:"lightning-bolt",size:"is-medium",type:"is-black"}}),e._v(" "),o("p",{staticClass:"has-text-weight-bold"},[e._v("1. Get matched with a pro")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("We can help with any project. Find a pro that works for your schedule and budget.")])],1)])]),e._v(" "),o("div",{staticClass:"column is-flex is-flex-grow-1"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("b-icon",{attrs:{icon:"comment-text",size:"is-medium",type:"is-black"}}),e._v(" "),o("p",{staticClass:"has-text-weight-bold"},[e._v("2. Share your project details")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("Let your pro see your project’s specific challenges so they can effectively guide you to a solution.")])],1)])]),e._v(" "),o("div",{staticClass:"column is-flex is-flex-grow-1"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("b-icon",{attrs:{icon:"tooltip-account",size:"is-medium",type:"is-black"}}),e._v(" "),o("p",{staticClass:"has-text-weight-bold"},[e._v("3. Receive personalized guidance to achieve your project’s goals")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("Get the feedback and confidence you need on your project all from interactive video or real-time chat with your pro.")])],1)])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("h3",{staticClass:"is-size-4 has-text-weight-bold"},[e._v("\n        How it works\n      ")])])])}],!1,null,"46780e1a",null);t.default=component.exports},286:function(e,t,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("28f1127f",content,!0,{sourceMap:!1})},288:function(e,t,o){e.exports=o.p+"img/meet-makr.d9a02c5.png"},289:function(e,t,o){e.exports=o.p+"img/get-feedback.c3d0c72.png"},290:function(e,t,o){e.exports=o.p+"img/become-a-makr.87f4b6e.png"},291:function(e,t,o){"use strict";o(286)},292:function(e,t,o){var r=o(55)(!1);r.push([e.i,".carousel-container{margin:0 6rem 2rem}.become-a-pro{margin:0 10rem}",""]),e.exports=r},306:function(e,t,o){"use strict";o.r(t);var r=o(282),n=o(283),l=o(284),c={components:{AppHowItWorks:o(285).default,AppExploreProjects:r.default,AppHero:n.default,AppTestimonialCarousel:l.default},data:function(){return{commonQuestions:[{question:"Am I liable for consulting on maker projects?",answer:"No, all pros under the Makr network are covered under our liability waiver"},{question:"How will I know when I get booked with a maker?",answer:"We’ll send you a message with your maker’s project details and timing for the booked session"},{question:"How long is each personalized session?",answer:"Each session is 30 minutes long. Makers can request additional time pending your approval."}],hero:{title:"Personalized expert assistance to help makers accomplish more",subtitle:"Affordable experts available at anytime to help you get your jobs done with confidence, all from your device"},exploreProjectCards:[{title:"Interior Design",image:"interior-design",prosAvailable:10,priceRange:"$55 - 70"},{title:"Home Renovation",image:"home-renovation",prosAvailable:8,priceRange:"$15 - 30"},{title:"Van Builds",image:"van-builds",prosAvailable:15,priceRange:"$15 - 30"},{title:"Wood Working",image:"wood-working",prosAvailable:5,priceRange:"$15 - 40"}]}},methods:{handleHeroSwitchValue:function(e){console.log("emitted value:: ",e)}}},d=(o(291),o(32)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("app-hero",{attrs:{title:e.hero.title,subtitle:e.hero.subtitle},on:{"hero-switch-value":e.handleHeroSwitchValue}})],1)]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"columns is-centered mb-5"},[r("div",{staticClass:"column is-four-fifths has-background-primary-light"},[r("app-explore-projects",{attrs:{"explore-project-cards":e.exploreProjectCards}})],1)]),e._v(" "),r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-three-fifths"},[r("h3",{staticClass:"mb-3 is-size-3 has-text-weight-bold has-text-centered"},[e._v("Meet Makr")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("figure",{staticClass:"image m-auto",staticStyle:{width:"500px"}},[r("img",{attrs:{src:o(288),alt:"Placeholder image"}})])])]),e._v(" "),e._m(3),e._v(" "),r("div",{staticClass:"carousel-container"},[r("app-testimonial-carousel")],1),e._v(" "),r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column"}),e._v(" "),r("div",{staticClass:"column is-one-third"},[r("img",{staticClass:"image",attrs:{src:o(289),alt:"get-feedback-image"}})]),e._v(" "),r("div",{staticClass:"column is-one-third"},[r("p",{staticClass:"mb-4 is-size-3 has-text-weight-bold"},[e._v("\n        Get the feedback and confidence you need fast\n      ")]),e._v(" "),r("p",{staticClass:"mb-6"},[e._v("\n        Whether you need quick answers, project-specific feedback, or step-by-step guidance, our pros are available at anytime to get you where you’re going\n      ")]),e._v(" "),r("b-button",{attrs:{type:"is-primary"}},[e._v("Start Getting Feedback")])],1),e._v(" "),r("div",{staticClass:"column"})]),e._v(" "),r("app-how-it-works",{staticClass:"mb-6"}),e._v(" "),r("div",{staticClass:"become-a-pro columns"},[r("div",{staticClass:"column is-two-thirds"},[r("p",{staticClass:"title is-spaced"},[e._v("\n        Become a Makr pro\n      ")]),e._v(" "),r("p",{staticClass:"subtitle"},[e._v("\n        Help Makrs accomplish more with their projects, right from your device. Earn on your own time, from anywhere.\n      ")]),e._v(" "),r("b-button",{attrs:{type:"is-primary"}},[e._v("Learn More")])],1),e._v(" "),r("div",{staticClass:"column is-one-third is-flex level"},[r("img",{staticClass:"level-item",attrs:{src:o(290),alt:"hero-image"}})])]),e._v(" "),r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-two-thirds"},[r("p",{staticClass:"title has-text-centered is-size-4"},[e._v("Common Questions")]),e._v(" "),e._l(e.commonQuestions,(function(t){return r("div",{key:t.question,staticClass:"mb-4"},[r("p",{staticClass:"has-text-weight-bold"},[e._v(e._s(t.question))]),e._v(" "),r("p",[e._v(e._s(t.answer))])])})),e._v(" "),e._m(4)],2)])],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"columns is-centered is-gapless"},[o("div",{staticClass:"column is-four-fifths"},[o("p",{staticClass:"title is-size-5"},[e._v("Explore popular projects")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"px-6 mb-2 has-text-centered"},[e._v("Welcome to Makr, the platform that helps the makers, the doers, and the\n        DIYers accomplish more with "),o("span",{staticClass:"has-text-weight-bold"},[e._v("personalized expert assistance")]),e._v(" directly\n        from your device.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"px-6 has-text-centered"},[e._v("We’re on a mission to accomplish more "),o("span",{staticClass:"has-text-weight-bold"},[e._v("together")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("h3",{staticClass:"is-size-4 has-text-weight-bold has-text-centered"},[e._v("\n        Every project has its unique challenges."),o("br"),e._v("\n        We’re here to help.\n      ")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"mb-6"},[e._v("Still have questions?  "),o("a",{attrs:{href:"mailto:mikeulvila@me.com"}},[e._v("Send us a message")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{AppHero:o(283).default,AppExploreProjects:o(282).default,AppTestimonialCarousel:o(284).default,AppHowItWorks:o(285).default})}}]);