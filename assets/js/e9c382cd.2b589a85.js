"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[134],{4047:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return h}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),s=o(6738),l=["components"],a={title:"Controller - Xiaomi WXCJKG13LM Aqara Opple 6 button remote",description:"Controller automation for executing any kind of action triggered by the provided Xiaomi WXCJKG13LM Aqara Opple 6 button remote. Supports deCONZ, ZHA, Zigbee2MQTT."},p=void 0,u={unversionedId:"blueprints/controllers/xiaomi_wxcjkg13lm",id:"blueprints/controllers/xiaomi_wxcjkg13lm",title:"Controller - Xiaomi WXCJKG13LM Aqara Opple 6 button remote",description:"Controller automation for executing any kind of action triggered by the provided Xiaomi WXCJKG13LM Aqara Opple 6 button remote. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/xiaomi_wxcjkg13lm.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/xiaomi_wxcjkg13lm",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/xiaomi_wxcjkg13lm",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/xiaomi_wxcjkg13lm.mdx",tags:[],version:"current",frontMatter:{title:"Controller - Xiaomi WXCJKG13LM Aqara Opple 6 button remote",description:"Controller automation for executing any kind of action triggered by the provided Xiaomi WXCJKG13LM Aqara Opple 6 button remote. Supports deCONZ, ZHA, Zigbee2MQTT."}},c={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Available Hooks",id:"available-hooks",level:2},{value:"Light",id:"light",level:3},{value:"Default Mapping",id:"default-mapping",level:4},{value:"Mapping #2",id:"mapping-2",level:4},{value:"Mapping #3",id:"mapping-3",level:4},{value:"Media Player",id:"media-player",level:3},{value:"Default Mapping",id:"default-mapping-1",level:4},{value:"Mapping #2",id:"mapping-2-1",level:4},{value:"Mapping #3",id:"mapping-3-1",level:4},{value:"Cover",id:"cover",level:3},{value:"Default Mapping",id:"default-mapping-2",level:4},{value:"Mapping #2",id:"mapping-2-2",level:4},{value:"Mapping #3",id:"mapping-3-2",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Helper - Last Controller Event",id:"helper---last-controller-event",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Lu,{id:"xiaomi_wxcjkg13lm",category:"controllers",mdxType:"ImportCard"}),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,i.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided Xiaomi WXCJKG13LM Aqara Opple 6 button remote. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,i.kt)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers/xiaomi_wxcjkg13lm#available-hooks"},"Hooks available for this controller")," for additional details."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)(s.nb,{id:"deconz",mdxType:"Requirement"}),(0,i.kt)(s.nb,{id:"zha",mdxType:"Requirement"}),(0,i.kt)(s.nb,{id:"zigbee2mqtt",mdxType:"Requirement"}),(0,i.kt)(s.nb,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,i.kt)("p",null,"This integration provides the entity which must be provided to the blueprint in the ",(0,i.kt)("strong",{parentName:"p"},"Helper - Last Controller Event")," input. Learn more about this helper by reading the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"#helper---last-controller-event"},"Additional Notes"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)(s.II,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,i.kt)(s.II,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"deCONZ, ZHA",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 short press",description:"Action to run on short button 1 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 long press",description:"Action to run on long button 1 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 release",description:"Action to run on button 1 release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 double press",description:"Action to run on double button 1 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 triple press",description:"Action to run on triple button 1 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 short press",description:"Action to run on short button 2 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 long press",description:"Action to run on long button 2 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 release",description:"Action to run on button 2 release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 double press",description:"Action to run on double button 2 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 triple press",description:"Action to run on triple button 2 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 short press",description:"Action to run on short button 3 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 long press",description:"Action to run on long button 3 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 release",description:"Action to run on button 3 release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 double press",description:"Action to run on double button 3 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 triple press",description:"Action to run on triple button 3 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 short press",description:"Action to run on short button 4 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 long press",description:"Action to run on long button 4 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 release",description:"Action to run on button 4 release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 double press",description:"Action to run on double button 4 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 triple press",description:"Action to run on triple button 4 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 short press",description:"Action to run on short button 5 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 long press",description:"Action to run on long button 5 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 release",description:"Action to run on button 5 release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 double press",description:"Action to run on double button 5 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 triple press",description:"Action to run on triple button 5 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 short press",description:"Action to run on short button 6 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 long press",description:"Action to run on long button 6 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 release",description:"Action to run on button 6 release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 double press",description:"Action to run on double button 6 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 triple press",description:"Action to run on triple button 6 press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 long press - loop until release",description:"Loop the button 1 action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 1 long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 long press - loop until release",description:"Loop the button 2 action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 2 long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 long press - loop until release",description:"Loop the button 3 action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 3 long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 long press - loop until release",description:"Loop the button 4 action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 4 long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 long press - loop until release",description:"Loop the button 5 action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 5 long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 long press - loop until release",description:"Loop the button 6 action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Button 6 long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,i.kt)("h2",{id:"available-hooks"},"Available Hooks"),(0,i.kt)("h3",{id:"light"},"Light"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,i.kt)("h4",{id:"default-mapping"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 1 short press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"Button 1 long press -> Brightness up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 1 double press -> Color up"),(0,i.kt)("li",{parentName:"ul"},"Button 2 short press -> Turn off"),(0,i.kt)("li",{parentName:"ul"},"Button 2 long press -> Brightness down (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 2 double press -> Color down")),(0,i.kt)("h4",{id:"mapping-2"},"Mapping #2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 3 short press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"Button 3 long press -> Brightness up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 3 double press -> Color up"),(0,i.kt)("li",{parentName:"ul"},"Button 4 short press -> Turn off"),(0,i.kt)("li",{parentName:"ul"},"Button 4 long press -> Brightness down (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 4 double press -> Color down")),(0,i.kt)("h4",{id:"mapping-3"},"Mapping #3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 5 short press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"Button 5 long press -> Brightness up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 5 double press -> Color up"),(0,i.kt)("li",{parentName:"ul"},"Button 6 short press -> Turn off"),(0,i.kt)("li",{parentName:"ul"},"Button 6 long press -> Brightness down (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 6 double press -> Color down")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,i.kt)("h3",{id:"media-player"},"Media Player"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,i.kt)("h4",{id:"default-mapping-1"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 1 short press -> Volume up"),(0,i.kt)("li",{parentName:"ul"},"Button 1 long press -> Volume up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 1 double press -> Next track"),(0,i.kt)("li",{parentName:"ul"},"Button 2 short press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Button 2 long press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Button 2 double press -> Play/Pause")),(0,i.kt)("h4",{id:"mapping-2-1"},"Mapping #2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 3 short press -> Volume up"),(0,i.kt)("li",{parentName:"ul"},"Button 3 long press -> Volume up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 3 double press -> Next track"),(0,i.kt)("li",{parentName:"ul"},"Button 4 short press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Button 4 long press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Button 4 double press -> Play/Pause")),(0,i.kt)("h4",{id:"mapping-3-1"},"Mapping #3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 5 short press -> Volume up"),(0,i.kt)("li",{parentName:"ul"},"Button 5 long press -> Volume up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Button 5 double press -> Next track"),(0,i.kt)("li",{parentName:"ul"},"Button 6 short press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Button 6 long press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Button 6 double press -> Play/Pause")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,i.kt)("h3",{id:"cover"},"Cover"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."),(0,i.kt)("h4",{id:"default-mapping-2"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 1 short press -> Open cover"),(0,i.kt)("li",{parentName:"ul"},"Button 1 long press -> Open the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Button 2 short press -> Close cover"),(0,i.kt)("li",{parentName:"ul"},"Button 2 long press -> Close the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Button 2 double press -> Stop cover and cover tilt")),(0,i.kt)("h4",{id:"mapping-2-2"},"Mapping #2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 3 short press -> Open cover"),(0,i.kt)("li",{parentName:"ul"},"Button 3 long press -> Open the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Button 4 short press -> Close cover"),(0,i.kt)("li",{parentName:"ul"},"Button 4 long press -> Close the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Button 4 double press -> Stop cover and cover tilt")),(0,i.kt)("h4",{id:"mapping-3-2"},"Mapping #3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button 5 short press -> Open cover"),(0,i.kt)("li",{parentName:"ul"},"Button 5 long press -> Open the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Button 6 short press -> Close cover"),(0,i.kt)("li",{parentName:"ul"},"Button 6 long press -> Close the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Button 6 double press -> Stop cover and cover tilt")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/cover"},"Cover Hook docs")),(0,i.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2021-12-03"),": first blueprint version \ud83c\udf89")))}h.isMDXComponent=!0}}]);