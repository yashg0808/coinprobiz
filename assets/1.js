define("@widget/MESSAGING/bs-Component-ee6747ba.js",["radpack","exports","@wsb/guac-widget-shared@^1/lib/components/Recaptcha/badge","@wsb/guac-widget-shared@^1/lib/common/constants/traffic2","@wsb/guac-widget-shared@^1/lib/common/constants/form/formIdentifiers"],(function(e,o,a,t,r){"use strict";var l=(global.keyMirror||guac.keymirror)({MESSAGING_FAB:null,MESSAGING_MESSAGE_FLYOUT:null,WELCOME_MESSAGE:null,SEND_MESSAGE_TO:null,EMAIL_OPT_IN_TOGGLE:null,EMAIL_OPT_IN_MESSAGE:null,COLOR_SATURATION_KNOB:null,COLOR_HUE_SLIDER_KNOB:null});const c="formEmail",s=(global.React||guac.react).createElement("path",{d:"M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"});function p(e){let{text:o}=e;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{category:"neutral",section:"overlay",style:{backgroundColor:"neutral",margin:"-medium medium medium medium",borderRadius:"5px",position:"relative"}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Text,{style:{padding:"12px 15px",borderRadius:"5px",backgroundColor:"primaryOverlay",fontSize:"16px",color:"neutral"}},o),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{icon:s,size:24,style:{width:"33px",height:"16px",color:"primaryOverlay",position:"absolute",top:"100%",left:"3px",marginTop:"-1px"}}))}function n(e){let{title:o,message:a,children:t,onClose:r}=e;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{"data-aid":l.MESSAGING_MESSAGE_FLYOUT,style:{"-webkit-overflow-scrolling":"touch",overflowX:"hidden",overflowY:"auto",boxShadow:"0px 3px 18px rgba(0, 0, 0, 0.25)",backgroundColor:"neutral",borderRadius:"5px",borderWidth:"xsmall",borderStyle:"solid",borderColor:"#fff",width:"382px",marginBottom:"small",position:"absolute",maxHeight:"calc(100vh - 105px)",right:"-1px",bottom:"100%","@xs-only":{maxHeight:"100vh",height:"100vh",zIndex:"inherit",position:"fixed",left:"0",top:"0",bottom:"89px",width:"100%"}}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{"data-field-id":c},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{onClick:r,icon:"close",size:22,style:{color:"#fff",position:"absolute",top:"18px",right:"14px",cursor:"pointer","@sm":{display:"none"}}}),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Heading,{style:{color:"action",fontSize:"large",backgroundColor:"action",paddingTop:"small",paddingBottom:a?"xlarge":"small",paddingLeft:"medium",paddingRight:"medium",margin:a?"0":"0 0 medium 0",textAlign:"left","@md":{textAlign:"left"}}},o),a?(global.React||guac.react).createElement(p,{text:a}):null,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:{overflow:"hidden",padding:"0 medium"}},t)))}p.propTypes={text:(global.PropTypes||guac["prop-types"]).string.isRequired},n.propTypes={title:(global.PropTypes||guac["prop-types"]).string.isRequired,message:(global.PropTypes||guac["prop-types"]).string.isRequired,children:(global.PropTypes||guac["prop-types"]).node.isRequired,onClose:(global.PropTypes||guac["prop-types"]).func.isRequired};const{renderModes:i}=(global.Core||guac["@wsb/guac-widget-core"]).constants,g="reamazejs-container";function u(e){const{position:o,prompt:a,promptEnabled:t,starter1:r,starter2:l,starter3:c,color:s,reamazeBrandId:p,reamazeWrap:n,reamazeJsSource:u,reamazeCookieJsSource:d,cookieBannerEnabled:m,confirmationMessage:b,avatar:y,forceShowFlyout:w,renderMode:f}=e,[E,T]=(global.React||guac.react).useState(!0),[S,P]=(global.React||guac.react).useState(!0),R=(e,o,a,t)=>({mode:"notification",delay:f===i.EDIT?0:10,text:e,primary:o||null,primary2:a||null,primary3:t||null}),_=(e,o)=>{e.forEach((e=>{const a=e.addedNodes[0];if(a?.id===g&&f===i.EDIT&&n?.current)return n.current.append(a),void o.disconnect()}))};return(global.React||guac.react).useEffect((()=>{if(f===i.EDIT){const e=document.getElementById(g);if(void 0!==window.reamaze&&e)n.current.append(e);else{const e={childList:!0};new MutationObserver(_).observe(document.body,e)}}const e=(e=>{const o=e.createElement("script");return o.src=f!==i.EDIT&&m?d:u,o.async=!0,o.type="text/javascript",o})(document);return document.body.appendChild(e),window._support={account:p,openPopup:w,ui:{contactMode:"default",enableKb:"false",styles:{widgetColor:s},widget:{icon:"webChat",label:!(!(t||r||l||c)||f===i.EDIT)&&R(a,r,l,c),position:o},shoutboxFacesMode:"custom",overrides:{confirmationMessage:b}},user:{authpath:`/m/api/reamaze/v2/customers/auth?brand=${p}`},_preview:w},()=>{void 0!==window.reamaze&&f===i.EDIT&&(window._support.ui.widget=!1,window._support.openPopup=!1,window._support._preview=!1,window.reamaze.reload());const e=document.querySelector(`script[src='${u}']`);e&&e.remove();const o=document.getElementById(g);o&&o.remove()}}),[]),(global.React||guac.react).useEffect((()=>{f===i.EDIT&&(window._support.ui.widget.position=o,window._support.ui.styles={widgetColor:s},window._support.ui.shoutboxFacesMode="custom",window._support.openPopup=w,window._support._preview=w,window._support._route=null,window._support.ui.widget.label=!1,void 0!==window.reamaze&&window.reamaze.reload())}),[o,s,y,w]),(global.React||guac.react).useEffect((()=>{f===i.EDIT&&(E?T(!1):(window._support.ui.widget.label=!(!t||!w)&&R(a,r,l,c),window._support.openPopup=!1,void 0!==window.reamaze&&window.reamaze.reload()))}),[a,t,r,l,c]),(global.React||guac.react).useEffect((()=>{f===i.EDIT&&(S?P(!1):(window._support._route="conversations:show",window._support._routeParams={slug:"*mock_confirm_convo*"},window._support.ui.overrides.confirmationMessage=b,window._support.openPopup=w,window._support._preview=w,void 0!==window.reamaze&&window.reamaze.reload()))}),[b]),(global.React||guac.react).createElement("div",null)}u.propTypes={position:(global.PropTypes||guac["prop-types"]).string,prompt:(global.PropTypes||guac["prop-types"]).string,promptEnabled:(global.PropTypes||guac["prop-types"]).bool,starter1:(global.PropTypes||guac["prop-types"]).string,starter2:(global.PropTypes||guac["prop-types"]).string,starter3:(global.PropTypes||guac["prop-types"]).string,color:(global.PropTypes||guac["prop-types"]).string,reamazeBrandId:(global.PropTypes||guac["prop-types"]).string,reamazeJsSource:(global.PropTypes||guac["prop-types"]).string,reamazeCookieJsSource:(global.PropTypes||guac["prop-types"]).string,reamazeWrap:(global.PropTypes||guac["prop-types"]).node,confirmationMessage:(global.PropTypes||guac["prop-types"]).string,avatar:(global.PropTypes||guac["prop-types"]).string,forceShowFlyout:(global.PropTypes||guac["prop-types"]).bool,renderMode:(global.PropTypes||guac["prop-types"]).string,cookieBannerEnabled:(global.PropTypes||guac["prop-types"]).bool};const d={contactApi:/[?&]contactApiVersion=([^&]*)/};function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"contactApi";if("undefined"==typeof window)return"";const{location:{search:o=""}}=window||{},a=d[e].exec(o);return a&&a[1]?`${a[1]}.`:""}const b="EMAIL",y="CONVERSATIONS",{utils:{TCCLUtils:w}}=(global.Core||guac["@wsb/guac-widget-core"]).UX2,{MESSAGING_EMAIL:f,MESSAGING_CONVERSATIONS:E}=r.default,{Z_INDEX_COOKIE_BANNER:T,Z_INDEX_FULL_SCREEN_OVERLAY:S,Z_INDEX_STICKY_NAV:P}=(global.Core||guac["@wsb/guac-widget-core"]).constants.layers,{renderModes:R}=(global.Core||guac["@wsb/guac-widget-core"]).constants,_=e=>{let{keyName:o}=e;return"phone"!==o},C=(global.React||guac.react).lazy((()=>new Promise((function(o,a){e.require(["@wsb/guac-widget-shared@^1/lib/components/Form"],o,a)})))),I={marginBottom:"medium",display:"block",textAlign:"center",color:"action"};function h(e){const{id:o,section:r,forceShowFlyout:c,welcomeMessage:s,config:p,formFields:i,formSuccessMessage:g,emailOptInEnabled:d,emailOptInMessage:h,notificationPreference:z,recaptchaType:M,emailConfirmationMessage:x,locale:v,websiteId:A,accountId:k,domainName:N,staticContent:O,isReseller:B,businessName:G,reamazeBrandId:L,reamazePrompt:U,reamazeStarter1:X,reamazeStarter2:F,reamazeStarter3:D,reamazePromptEnabled:q,reamazeThemeColor:J,reamazePosition:H,reamazeConfirmationMessage:j,reamazeAvatarImage:V,renderMode:W,cookieBannerEnabled:Z}=e,K=(global.React||guac.react).useRef(!1),[Y,$]=(global.React||guac.react).useState(c),[Q,ee]=(global.React||guac.react).useState(e.isMobile),oe=W===(global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH,ae=()=>$(!Y);(global.React||guac.react).useEffect((()=>{const e=window.document?.body;e&&oe&&(Q&&Y?e.classList.add("disable-scroll"):e.classList.remove("disable-scroll"))}),[Y,Q]),(global.React||guac.react).useEffect((()=>{Y!==c&&$(c)}),[c]),(global.React||guac.react).useEffect((()=>{K.current?$(!0):K.current=!0}),[s,g,d,h]);const te=z===b?i.filter(_):i,re=z===b?f:E,le=(global.React||guac.react).useRef(null);return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{category:"neutral",section:r,style:{position:"fixed",right:"medium",bottom:"medium",zIndex:Y?S:T-1,width:"65px",height:"65px","@md":{zIndex:Y?P+1:T-1}}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX.MatchMedia,{onChange:o=>{const a=oe&&o?"xs"===o.size:e.isMobile;ee(a)}}),W!==R.PREVIEW&&"REAMAZE"===z&&L&&(global.React||guac.react).createElement("div",{ref:le},(global.React||guac.react).createElement(u,{position:H,prompt:U,promptEnabled:q,starter1:X,starter2:F,starter3:D,color:J,reamazeBrandId:L,reamazeWrap:le,reamazeJsSource:p.reamazeJsSource,reamazeCookieJsSource:p.reamazeCookieJsSource,confirmationMessage:j,avatar:V,forceShowFlyout:c,cookieBannerEnabled:Z,renderMode:W})),[b,y].includes(z)&&(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,Y?(global.React||guac.react).createElement(n,{title:G,message:s,onClose:ae},"undefined"!=typeof window?(global.React||guac.react).createElement((global.React||guac.react).Suspense,{fallback:(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:I},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Loader,{size:"medium"}))},(global.React||guac.react).createElement(C,{locale:v,websiteId:A,accountId:k,domainName:N,staticContent:O,emailConfirmationMessage:x,emailOptInEnabled:d,emailOptInMessage:h,formSuccessMessage:g,formSubmitEndpoint:p.formSubmitEndpoint,formSubmitHost:p.formSubmitHost.replace("{{SHA}}",m()),formFields:te,formIdentifier:re,recaptchaType:M,recaptchaEnabled:Boolean(M),isReseller:B,category:"neutral",pageId:"00000000-0000-0000-0000-000000000000",widgetId:o,renderMode:W,dataAidPrefix:"MESSAGING"})):null):(global.React||guac.react).createElement(a.default,null),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{"data-aid":l.MESSAGING_FAB,"data-field-id":Q||c?null:"enabled","data-edit-interactive":"true",onClick:ae,"data-traffic2":Y?t.default.editor_preview.messaging_fab_close:t.default.editor_preview.messaging_fab_open,"data-tccl":w.getTCCLString({eid:Y?"ux2.messaging.fab.close":"ux2.messaging.fab.open",type:"click"}),style:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:Y?"#555":"action",boxShadow:"0px 3px 18px rgba(0, 0, 0, 0.25)",transform:"translateZ(0)"}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{style:{color:Y?"#fff":"action"},icon:Y?"close":"chat",size:Y?34:44}))))}h.propTypes={forceShowFlyout:(global.PropTypes||guac["prop-types"]).bool,businessName:(global.PropTypes||guac["prop-types"]).string,reamazeBrandId:(global.PropTypes||guac["prop-types"]).string,welcomeMessage:(global.PropTypes||guac["prop-types"]).string,formSuccessMessage:(global.PropTypes||guac["prop-types"]).string,emailOptInMessage:(global.PropTypes||guac["prop-types"]).string,emailOptInEnabled:(global.PropTypes||guac["prop-types"]).bool,section:(global.PropTypes||guac["prop-types"]).string,domainName:(global.PropTypes||guac["prop-types"]).string,cookieBannerEnabled:(global.PropTypes||guac["prop-types"]).bool,config:(global.PropTypes||guac["prop-types"]).shape({formSubmitEndpoint:(global.PropTypes||guac["prop-types"]).string,formSubmitHost:(global.PropTypes||guac["prop-types"]).string,reamazeJsSource:(global.PropTypes||guac["prop-types"]).string,reamazeCookieJsSource:(global.PropTypes||guac["prop-types"]).string}),formFields:(global.PropTypes||guac["prop-types"]).array,accountId:(global.PropTypes||guac["prop-types"]).string.isRequired,websiteId:(global.PropTypes||guac["prop-types"]).string.isRequired,id:(global.PropTypes||guac["prop-types"]).string,staticContent:(global.PropTypes||guac["prop-types"]).object.isRequired,locale:(global.PropTypes||guac["prop-types"]).string,emailConfirmationMessage:(global.PropTypes||guac["prop-types"]).string,recaptchaType:(global.PropTypes||guac["prop-types"]).string,isMobile:(global.PropTypes||guac["prop-types"]).bool,notificationPreference:(global.PropTypes||guac["prop-types"]).string,isReseller:(global.PropTypes||guac["prop-types"]).bool,reamazePrompt:(global.PropTypes||guac["prop-types"]).string,reamazePromptEnabled:(global.PropTypes||guac["prop-types"]).bool,reamazeStarter1:(global.PropTypes||guac["prop-types"]).string,reamazeStarter2:(global.PropTypes||guac["prop-types"]).string,reamazeStarter3:(global.PropTypes||guac["prop-types"]).string,reamazeThemeColor:(global.PropTypes||guac["prop-types"]).string,reamazePosition:(global.PropTypes||guac["prop-types"]).string,reamazeConfirmationMessage:(global.PropTypes||guac["prop-types"]).string,reamazeAvatarImage:(global.PropTypes||guac["prop-types"]).string,renderMode:(global.PropTypes||guac["prop-types"]).string},o.default=h,Object.defineProperty(o,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-Component-ee6747ba.js.map