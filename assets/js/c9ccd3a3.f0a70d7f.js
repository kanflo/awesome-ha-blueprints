"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[851],{7721:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return d},default:function(){return h}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=o(6738),l=["components"],s={title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."},p=void 0,m={unversionedId:"blueprints/hooks/media_player",id:"blueprints/hooks/media_player",title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection.",source:"@site/docs/blueprints/hooks/media_player.mdx",sourceDirName:"blueprints/hooks",slug:"/blueprints/hooks/media_player",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks/media_player",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks/media_player.mdx",tags:[],version:"current",frontMatter:{title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}},u={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Supported Controllers",id:"supported-controllers",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:d};function h(e){var t=e.components,o=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Lu,{id:"media_player",category:"hooks",mdxType:"ImportCard"}),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,r.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An automation created with this blueprint must be linked to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers"},"Controller")," automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations."),(0,r.kt)("p",{parentName:"div"},"See the list of ",(0,r.kt)("a",{parentName:"p",href:"#supported-controllers"},"Controllers supported by this Hook")," for additional details."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)(i.nb,{id:"controller",required:!0,mdxType:"Requirement"}),(0,r.kt)(i.nb,{name:"Media Player Integration",required:!0,mdxType:"Requirement"},(0,r.kt)("p",null,"This integration provides the entity which represents a media player in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/media_player/"},"Media Player Integration Docs"))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)(i.II,{name:"Controller Device",description:"The controller device which will control the Media Player. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.",selector:"device",required:!0,mdxType:"Input"}),(0,r.kt)(i.II,{name:"Controller Entity",description:"The controller entity which will control the Media Player. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as an Entity. This value should match the one specified in the corresponding Controller automation.",selector:"entity",required:!0,mdxType:"Input"}),(0,r.kt)(i.II,{name:"Controller model",description:"The model for the controller used in this automation. Choose a value from the list of supported controllers.",selector:"select",required:!0,mdxType:"Input"}),(0,r.kt)(i.II,{name:"Media Player",description:"Media player which will be controlled with this automation.",selector:"entity",required:!0,mdxType:"Input"}),(0,r.kt)(i.II,{name:"Volume steps - short actions",description:"Number of steps from min to max volume when controlling volume with short actions (eg. button press), if the media player supports it.",selector:"number",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Volume steps - long actions",description:"Number of steps from min to max volume when controlling volume with long actions (eg. button hold or controller rotation), if the media player supports it.",selector:"number",mdxType:"Input"}),(0,r.kt)("h2",{id:"supported-controllers"},"Supported Controllers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"IKEA E1524/E1810 TR\xc5DFRI Wireless 5-Button Remote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1743"},"IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1744"},"IKEA E1744 SYMFONISK Rotary Remote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1766"},"IKEA E1766 TR\xc5DFRI Open/Close Remote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1812"},"IKEA E1812 TR\xc5DFRI Shortcut button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e2001_e2002"},"IKEA E2001/E2002 STYRBAR Remote control")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_ictc_g_1"},"IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/osram_ac025xx00nj"},"OSRAM AC025XX00NJ SMART+ Switch Mini")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_324131092621"},"Philips 324131092621 Hue Dimmer switch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_8718699693985"},"Philips 8718699693985 Hue Smart Button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_929002398602"},"Philips 929002398602 Hue Dimmer switch v2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/xiaomi_wxcjkg11lm"},"Xiaomi WXCJKG11LM Aqara Opple 2 button remote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/xiaomi_wxcjkg12lm"},"Xiaomi WXCJKG12LM Aqara Opple 4 button remote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/xiaomi_wxcjkg13lm"},"Xiaomi WXCJKG13LM Aqara Opple 6 button remote"))),(0,r.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,r.kt)("p",null,"Not all media players support the customization of the number of steps for volume control, due to the fact that some of them do not expose their current volume level to Home Assistant. In these situations, the automation will fallback to the ",(0,r.kt)("inlineCode",{parentName:"p"},"media_player.volume_up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"media_player.volume_down")," services."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-04"),": first blueprint version \ud83c\udf89"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-07"),": add support for IKEA E1744 SYMFONISK rotary remote"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-14"),": add support for IKEA E1812 Shortcut button, fix E1743 naming"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-25"),": update action mapping for IKEA E1744. If you're using this Hook with an IKEA E1744, please update also the corresponding Controller blueprint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-26"),": add the ability to specify number of steps from min to max volume, both for short and long actions, when controlling the media player"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-27"),": Add support for Philips Hue dimmer switch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-04-19"),": remove unused variable, fix warnings for undefined variables in Home Assistant Core >=2021.4.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-05-16"),": Add support for Osram SMART+ Switch Mini"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-07-03"),": Add support for Philips Hue Smart Button"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-08-02"),": Improve inputs documentation and organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-10-26"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Standardize blueprints structure and inputs naming across the whole collection."),(0,r.kt)("li",{parentName:"ul"},"Improve blueprint documentation."),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 Add support for alternate mappings. Additional mappings for currently supported controllers will be added from now on. Refer to the documentation of your controller for more details."),(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Breaking Change"),": update controller names in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Controller Model")," input, to match the full name of controllers, prevent ambiguities and enable support for alternate mappings. After updating this blueprint, please reconfigure your automations by selecting again the value for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Controller Model")," input, matching the full name of the controller you're using with this hook."),(0,r.kt)("li",{parentName:"ul"},"Fix typo for IKEA E1524/E1810 center button long press action in mapping definition."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-10-29"),": Add support for IKEA E1766 TR\xc5DFRI Open/Close Remote."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-11-07"),": Add support for IKEA E2001/E2002 STYRBAR Remote control."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-11-21"),": Add support for Philips 929002398602 Hue Dimmer switch v2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-12-03"),": Add support for Xiaomi WXCJKG11LM, WXCJKG12LM, WXCJKG13LM.")))}h.isMDXComponent=!0}}]);