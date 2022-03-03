"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[796],{5054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return d},toc:function(){return m},default:function(){return h}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=n(6738),l=["components"],s={title:"Controller - IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."},p=void 0,u={unversionedId:"blueprints/controllers/ikea_e1743",id:"blueprints/controllers/ikea_e1743",title:"Controller - IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_e1743.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/ikea_e1743",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_e1743",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_e1743.mdx",tags:[],version:"current",frontMatter:{title:"Controller - IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."}},d={},m=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Available Hooks",id:"available-hooks",level:2},{value:"Light",id:"light",level:3},{value:"Default Mapping",id:"default-mapping",level:4},{value:"Mapping #2",id:"mapping-2",level:4},{value:"Media Player",id:"media-player",level:3},{value:"Default Mapping",id:"default-mapping-1",level:4},{value:"Cover",id:"cover",level:3},{value:"Default Mapping",id:"default-mapping-2",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Helper - Last Controller Event",id:"helper---last-controller-event",level:3},{value:"Virtual double press events",id:"virtual-double-press-events",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Lu,{id:"ikea_e1743",category:"controllers",mdxType:"ImportCard"}),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,i.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,i.kt)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),(0,i.kt)("p",null,"The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_e1743#available-hooks"},"Hooks available for this controller")," for additional details."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)(a.nb,{id:"deconz",mdxType:"Requirement"}),(0,i.kt)(a.nb,{id:"zha",mdxType:"Requirement"}),(0,i.kt)(a.nb,{id:"zigbee2mqtt",mdxType:"Requirement"}),(0,i.kt)(a.nb,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,i.kt)("p",null,"This integration provides the entity which must be provided to the blueprint in the ",(0,i.kt)("strong",{parentName:"p"},"Helper - Last Controller Event")," input. Learn more about this helper by reading the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"#helper---last-controller-event"},"Additional Notes"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)(a.II,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,i.kt)(a.II,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"deCONZ, ZHA",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,i.kt)(a.II,{name:"Up button short press",description:"Action to run on short up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Up button long press",description:"Action to run on long up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Up button release",description:"Action to run on up button release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Up button double press",description:"Action to run on double up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Down button short press",description:"Action to run on short down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Down button long press",description:"Action to run on long down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Down button release",description:"Action to run on down button release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Down button double press",description:"Action to run on double down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Up button long press - loop until release",description:"Loop the up button action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Up button long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Down button long press - loop until release",description:"Loop the down button action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Down button long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Expose up button double press event",description:"Choose whether or not to expose the virtual double press event for the up button. Turn this on if you are providing an action for the up button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Expose down button double press event",description:"Choose whether or not to expose the virtual double press event for the down button. Turn this on if you are providing an action for the down button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Helper - Double Press delay",description:"Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.",selector:"number",mdxType:"Input"}),(0,i.kt)(a.II,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,i.kt)("h2",{id:"available-hooks"},"Available Hooks"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Virtual double press actions")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some of the following mappings might include actions for virtual double press events, which are disabled by default.\nIf you are using a hook mapping which provides an action for a virtual double press event, please make sure to enable support for virtual double press on the corresponding buttons with the corresponding blueprint input."))),(0,i.kt)("h3",{id:"light"},"Light"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,i.kt)("h4",{id:"default-mapping"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"Up button long press -> Brightness up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Up button double press -> Color up"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Turn off"),(0,i.kt)("li",{parentName:"ul"},"Down button long press -> Brightness down (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Color down")),(0,i.kt)("h4",{id:"mapping-2"},"Mapping #2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Brightness up"),(0,i.kt)("li",{parentName:"ul"},"Up button long press -> Brightness up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Up button double press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Brightness down"),(0,i.kt)("li",{parentName:"ul"},"Down button long press -> Brightness down (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Turn off")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,i.kt)("h3",{id:"media-player"},"Media Player"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,i.kt)("h4",{id:"default-mapping-1"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Volume up"),(0,i.kt)("li",{parentName:"ul"},"Up button long press -> Volume up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Up button double press -> Next track"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Down button long press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Play/Pause")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,i.kt)("h3",{id:"cover"},"Cover"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."),(0,i.kt)("h4",{id:"default-mapping-2"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Open cover"),(0,i.kt)("li",{parentName:"ul"},"Up button long press -> Open the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Close cover"),(0,i.kt)("li",{parentName:"ul"},"Down button long press -> Close the cover tilt"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Stop cover and cover tilt")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/cover"},"Cover Hook docs")),(0,i.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("p",null,"The helper is used to determine button release events when the controller is integrated with ZHA, Zigbee2MQTT, because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button."),(0,i.kt)("h3",{id:"virtual-double-press-events"},"Virtual double press events"),(0,i.kt)("p",null,"It's also important to note that the controller doesn't natively support double press events. Instead , this blueprint provides virtual double press events. You can read more about them in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#virtual-events"},"general Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-02-07"),": first blueprint version \ud83c\udf89")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-02-07"),": fix an issue on Zigbee2MQTT triggering rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-02-07"),": fix an issue which prevented to create automations for ZHA or deCONZ (thanks @kks36! \ud83c\udf89 ).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-02-08"),": update example, fix an issue which executed actions twice when the remote was connected via Zigbee2MQTT.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-02-23"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"add support for virtual double press events"),(0,i.kt)("li",{parentName:"ul"},"block automation runs for empty and repeated messages"),(0,i.kt)("li",{parentName:"ul"},"reduce ",(0,i.kt)("inlineCode",{parentName:"li"},"input_text helper")," writes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-03-03"),": move the blueprint in the Controllers-Hooks Ecosystem. See announcement ",(0,i.kt)("a",{parentName:"p",href:"https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687/7"},"here"),". \ud83c\udf89")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-03-25"),": \u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Breaking Change"),": standardize input names across all the Controller blueprints.\nIf you plan to update this blueprint, please update the inputs in your automations as follows:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remote")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"controller_device")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zigbee2mqtt_remote")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"controller_entity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"action_*")," inputs -> ",(0,i.kt)("inlineCode",{parentName:"li"},"action_button_*")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"helper_last_loop_event_input")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"helper_last_controller_event")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-03-26"),": add support for the Cover Hook")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-04-19"),": Fix double press events not being detected with deCONZ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-04-23"),": Fix deCONZ events not being recognized")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-05-26"),":"),(0,i.kt)("p",{parentName:"li"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Breaking Change"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," is now a mandatory input. It also simplifies the blueprint setup (reducing issues due to improper configuration missing the helper, which was required only in certain conditions as was stated in the docs), and provides support for advanced features which might be developed in the future."),(0,i.kt)("p",{parentName:"li"},"If you plan to update this blueprint, please make sure to provide a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"input_text")," entity for the ",(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," input. You should create a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"input_text")," for each Controller blueprint you're configuring, since using the same for multiple automation could lead to inconsistencies and undefined behaviour."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Other changes:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf89 Add Debouncing support. Debouncing avoids duplicate action runs which might occur with certain controllers and integrations. The feature is disabled by default, check the documentation to find out how to enable it"),(0,i.kt)("li",{parentName:"ul"},"Prevent undesired endless loops, which might occur in rare cases when the corresponding stop event is not received, by running loop actions a finite number of times, customizable with two new blueprint inputs"),(0,i.kt)("li",{parentName:"ul"},"Fix inputs wrongly marked as required"),(0,i.kt)("li",{parentName:"ul"},"Fix for Zigbee2MQTT reporting null state changes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-07-04"),": Fix deCONZ button release events not being properly recognized")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-08-02"),": Improve inputs documentation and organization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-10-26"),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change."))))}h.isMDXComponent=!0}}]);