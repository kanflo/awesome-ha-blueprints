"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[508],{1984:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return h}});var n=i(7462),o=i(3366),s=(i(7294),i(3905)),a=i(6738),r=["components"],c={title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices."},p=void 0,l={unversionedId:"blueprints/automation/persistent_notification_to_mobile",id:"blueprints/automation/persistent_notification_to_mobile",title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices.",source:"@site/docs/blueprints/automation/persistent_notification_to_mobile.mdx",sourceDirName:"blueprints/automation",slug:"/blueprints/automation/persistent_notification_to_mobile",permalink:"/awesome-ha-blueprints/docs/blueprints/automation/persistent_notification_to_mobile",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/automation/persistent_notification_to_mobile.mdx",tags:[],version:"current",frontMatter:{title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices."}},u={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Changelog",id:"changelog",level:2}],f={toc:d};function h(t){var e=t.components,i=(0,o.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(a.Lu,{id:"persistent_notification_to_mobile",category:"automation",mdxType:"ImportCard"}),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"This blueprint enables to send Web UI persistent notifications, (ie. the ones created with the ",(0,s.kt)("inlineCode",{parentName:"p"},"persistent_notification.create")," service) to the specified mobile device or device group. It also provides the option to choose which notifications must be forwarded, based on the provided notification ID."),(0,s.kt)("p",null,"Working both on iOS and Android devices, mobile notifications can then be organized into a specific group. For Android devices, they can also be assigned to a specific channel (for applying custom notification settings such as sound, vibration, etc.)."),(0,s.kt)("p",null,"This blueprint can be useful in all situations when a web interface persistent notification is desired but the event should be reported also on a mobile device."),(0,s.kt)("p",null,"Moreover, it can be handy in scenarios when a notification cannot be sent directly to a mobile device, for example for system generated persistent notifications (invalid login attempts, integration setup required, supervisor alerts, etc.) and for integrations/addons which, instead of providing a custom event for triggering automations, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"persistent_notification.create")," service as an event report mechanism."),(0,s.kt)("p",null,"Once opened on the mobile device, the relative persistent notification in the web UI is not dismissed."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)(a.nb,{name:"Persistent Notification Integration",required:!0,mdxType:"Requirement"},(0,s.kt)("p",null,"You must have this integration enabled on your system to run the automation, since the notifications on the web interface are generated by this integration. This should be activated by default so unless you tweaked the default configuration you're good to go."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/persistent_notification/"},"Persistent Notification Integration Docs"))),(0,s.kt)(a.nb,{name:"Mobile App Integration",required:!0,mdxType:"Requirement"},(0,s.kt)("p",null,"This integration provides the service to send notification to mobile devices. This should be activated by default so unless you tweaked the default configuration you're good to go."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/mobile_app/"},"Mobile App Integration Docs"))),(0,s.kt)(a.nb,{name:"Home Assistant Companion App",required:!0,mdxType:"Requirement"},(0,s.kt)("p",null,"The official mobile app for Home Assistant. Make sure to have the Home Assistant Companion App installed and configured on mobile devices you plan to use for this automation."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://companion.home-assistant.io/docs/notifications/notifications-basic#sending-notifications-to-multiple-devices"},"Home Assistant Companion App Docs"))),(0,s.kt)(a.nb,{name:"Notify Group Integration",required:!0,mdxType:"Requirement"},(0,s.kt)("p",null,"If you want to simultaneously send the notification to multiple devices, you can define a notification group using this integration in your ",(0,s.kt)("inlineCode",{parentName:"p"},"configuration.yaml"),", then provide the service for the notification group in the ",(0,s.kt)("a",{parentName:"p",href:"#mobile-devices-notification-service"},"Mobile devices notification service input"),". This integration should be enabled by default. More on how to setup notification groups in the official docs."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/notify.group/"},"Notify Group Integration Docs"))),(0,s.kt)("h2",{id:"inputs"},"Inputs"),(0,s.kt)(a.II,{name:"Notification ID",description:"The notification ID of persistent notifications which must be sent to mobile devices. Empty for all notifications. This allows to filter notifications based on their ID before it gets created on the mobile device. For example, if you want to receive notifications on your mobile device for all invalid login attempts, you could set this input to `http-login`, the ID of such persistent notifications.",selector:"text",mdxType:"Input"}),(0,s.kt)(a.II,{name:"Mobile devices notification service",description:"The notification service for mobile devices (eg. service.mobile_app_<your_device_id_here>). You can provide both a notify group or a single notify device here.",selector:"text",required:!0,mdxType:"Input"}),(0,s.kt)(a.II,{name:"Replace notifications with same ID",description:"Replace existing notifications with the same notification ID.",selector:"boolean",mdxType:"Input"}),(0,s.kt)(a.II,{name:"(Android only) Notification channel",description:"Android notification channel. Allows to group notifications to then apply custom settings for sound, vibration, etc. Leave blank if you do not want to use this feature.",selector:"text",mdxType:"Input"}),(0,s.kt)(a.II,{name:"Notification group",description:"Notification group for the notifications sent with this automation. Use this to group notifications in the notification tray. Leave blank if you do not want to use this feature.",selector:"text",mdxType:"Input"}),(0,s.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,s.kt)("p",null,"Please be aware that if you use notification groups which include both iOS and Android devices, some features (like Android Channels and notification groups) don't work. More details in the ",(0,s.kt)("a",{parentName:"p",href:"https://companion.home-assistant.io/docs/notifications/notifications-basic#sending-notifications-to-multiple-devices"},"Home Assistant Companion App Docs")),(0,s.kt)("h2",{id:"changelog"},"Changelog"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"2021-02-01"),": first blueprint version \ud83c\udf89"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"2021-10-26"),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change.")))}h.isMDXComponent=!0}}]);