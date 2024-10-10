"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75584],{75584:(e,t,i)=>{i.r(t),i.d(t,{createChildApp:()=>C,default:()=>F});var o=i(375),n=i(87837),r=i(60923),s=i(4100),a=i(16828);const l=["sm","md","lg","xl"],{passive:d}=s.mG,c=(0,r.Xj)({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:s.lQ,setDebounce:s.lQ,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const{visualViewport:i}=window,o=i||window,r=document.scrollingElement||document.documentElement,s=void 0===i||!0===n.Sn.is.mobile?()=>[Math.max(window.innerWidth,r.clientWidth),Math.max(window.innerHeight,r.clientHeight)]:()=>[i.width*i.scale+window.innerWidth-r.clientWidth,i.height*i.scale+window.innerHeight-r.clientHeight],c=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const[t,i]=s();if(i!==this.height&&(this.height=i),t!==this.width)this.width=t;else if(!0!==e)return;let o=this.sizes;this.gt.xs=t>=o.sm,this.gt.sm=t>=o.md,this.gt.md=t>=o.lg,this.gt.lg=t>=o.xl,this.lt.sm=t<o.sm,this.lt.md=t<o.md,this.lt.lg=t<o.lg,this.lt.xl=t<o.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,o=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",o!==this.name&&(!0===c&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${o}`)),this.name=o)};let g,h={},u=16;this.setSizes=e=>{l.forEach((t=>{void 0!==e[t]&&(h[t]=e[t])}))},this.setDebounce=e=>{u=e};const _=()=>{const e=getComputedStyle(document.body);e.getPropertyValue("--q-size-sm")&&l.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{l.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==g&&o.removeEventListener("resize",g,d),g=e>0?(0,a.A)(this.__update,e):this.__update,o.addEventListener("resize",g,d)},this.setDebounce(u),0!==Object.keys(h).length?(this.setSizes(h),h=void 0):this.__update(),!0===c&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===n.ot.value?t.push(_):_()}});var g=i(34475);function h(e,t,i=document.body){if("string"!=typeof e)throw new TypeError("Expected a string as propName");if("string"!=typeof t)throw new TypeError("Expected a string as value");if(!(i instanceof Element))throw new TypeError("Expected a DOM element");i.style.setProperty(`--q-${e}`,t)}var u=i(15706);function _(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}const p={install(e){if(!0!==this.__installed){if(!0===n.ot.value)!function(){const{is:e}=n.Sn,t=document.body.className,i=new Set(t.replace(/ {2}/g," ").split(" "));if(!0!==e.nativeMobile&&!0!==e.electron&&!0!==e.bex)if(!0===e.desktop)i.delete("mobile"),i.delete("platform-ios"),i.delete("platform-android"),i.add("desktop");else if(!0===e.mobile){i.delete("desktop"),i.add("mobile"),i.delete("platform-ios"),i.delete("platform-android");const t=_(e);void 0!==t&&i.add(`platform-${t}`)}!0===n.Sn.has.touch&&(i.delete("no-touch"),i.add("touch")),!0===n.Sn.within.iframe&&i.add("within-iframe");const o=Array.from(i).join(" ");t!==o&&(document.body.className=o)}();else{const{$q:t}=e;void 0!==t.config.brand&&function(e){for(const t in e)h(t,e[t])}(t.config.brand);const i=function({is:e,has:t,within:i},o){const n=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=_(e);void 0!==t&&n.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;n.push(t),n.push("native-mobile"),!0!==e.ios||void 0!==o[t]&&!1===o[t].iosStatusBarPadding||n.push("q-ios-padding")}else!0===e.electron?n.push("electron"):!0===e.bex&&n.push("bex");return!0===i.iframe&&n.push("within-iframe"),n}(n.Sn,t.config);document.body.classList.add.apply(document.body.classList,i)}!0===n.Sn.is.ios&&document.body.addEventListener("touchstart",s.lQ),window.addEventListener("keydown",u.V7,!0)}}};var m=i(33248);const f={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,i)=>e+"-"+t+" of "+i,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function v(){const e=!0===Array.isArray(navigator.languages)&&0!==navigator.languages.length?navigator.languages[0]:navigator.language;if("string"==typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const w=(0,r.Xj)({__qLang:{}},{getLocale:v,set(e=f,t){const i={...e,rtl:!0===e.rtl,getLocale:v};if(i.set=w.set,void 0===w.__langConfig||!0!==w.__langConfig.noHtmlAttrs){const e=document.documentElement;e.setAttribute("dir",!0===i.rtl?"rtl":"ltr"),e.setAttribute("lang",i.isoName)}Object.assign(w.__qLang,i)},install({$q:e,lang:t,ssrContext:i}){e.lang=w.__qLang,w.__langConfig=e.config.lang,!0===this.__installed?void 0!==t&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys:e=>Reflect.ownKeys(e).filter((e=>"set"!==e&&"getLocale"!==e))}),this.set(t||f))}}),y=w;var b=i(5173);const S={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},x=(0,r.Xj)({iconMapFn:null,__qIconSet:{}},{set(e,t){const i={...e};i.set=x.set,Object.assign(x.__qIconSet,i)},install({$q:e,iconSet:t,ssrContext:i}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,(0,b.$)(e,"iconMapFn",(()=>this.iconMapFn),(e=>{this.iconMapFn=e})),!0===this.__installed?void 0!==t&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys:e=>Reflect.ownKeys(e).filter((e=>"set"!==e))}),this.set(t||S))}}),k=x;var L=i(98053),z=i(75210),q=i(88574);const E=[n.Ay,p,g.A,c,m.A,y,k];function C(e,t){const i=(0,o.Ef)(e);i.config.globalProperties=t.config.globalProperties;const{reload:n,...r}=t._context;return Object.assign(i._context,r),i}function R(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}const F=function(e,t={}){const i={version:"dev"};var o,r,s;!1===z.Or?(void 0!==t.config&&Object.assign(z.cr,t.config),i.config={...z.cr},(0,z.xX)()):i.config=t.config||{},o=e,r=t,s={parentApp:e,$q:i,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]},o.config.globalProperties.$q=s.$q,o.provide(L.XA,s.$q),R(s,E),void 0!==r.components&&Object.values(r.components).forEach((e=>{!0===(0,q.Gv)(e)&&void 0!==e.name&&o.component(e.name,e)})),void 0!==r.directives&&Object.values(r.directives).forEach((e=>{!0===(0,q.Gv)(e)&&void 0!==e.name&&o.directive(e.name,e)})),void 0!==r.plugins&&R(s,Object.values(r.plugins).filter((e=>"function"==typeof e.install&&!1===E.includes(e)))),!0===n.ot.value&&(s.$q.onSSRHydrated=()=>{s.onSSRHydrated.forEach((e=>{e()})),s.$q.onSSRHydrated=()=>{}})}}}]);