(()=>{var e={732:()=>{$(document).ready((function(){$("#new-shipment-btn").on("click",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".new-shipment-sidebar").removeClass("show"),$(".sidebar-wrapper .overlay").addClass("d-none")):($(this).addClass("active"),$(".new-shipment-sidebar").addClass("show"),$(".sidebar-wrapper .overlay").removeClass("d-none"))})),$("#cancel-newshipment-creation-btn").on("click",(function(){$(".new-shipment-sidebar").removeClass("show"),$("#new-shipment-btn").removeClass("active")})),$("#currency-converter-btn").on("click",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".currency-converter-sidebar").removeClass("show"),$(".sidebar-wrapper .overlay").addClass("d-none")):($(this).addClass("active"),$(".currency-converter-sidebar").addClass("show"),$(".sidebar-wrapper .overlay").removeClass("d-none"))})),$("#cancel-currency-converter-btn").on("click",(function(){$(".currency-converter-sidebar").removeClass("show"),$("#currency-converter-btn").removeClass("active")})),$(".sidebar-wrapper .overlay").on("click",(function(){$(this).addClass("d-none"),$(".new-shipment-sidebar,.currency-converter-sidebar").removeClass("show"),$("#new-shipment-btn,#currency-converter-btn").removeClass("active")})),$("#notifications-btn").on("click",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".notifications-panel").removeClass("show"),$(".notifications-wrapper .pointer").addClass("d-none"),$(".topbar-right .overlay").addClass("d-none")):($(this).addClass("active"),$(".notifications-panel").addClass("show"),$(".notifications-wrapper .pointer").removeClass("d-none"),$(".topbar-right .overlay").removeClass("d-none"))})),$("#user-avatar-btn").on("click",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).parent().find(".user-profile-dropdown").removeClass("show")):($(this).addClass("active"),$(this).parent().find(".user-profile-dropdown").addClass("show"))})),$(".topbar-right .overlay").on("click",(function(){$("#notifications-btn").removeClass("active"),$(".notifications-panel").removeClass("show"),$(".notifications-wrapper .pointer").addClass("d-none"),$(this).addClass("d-none")})),$("#profile-settings-btn").on("click",(function(){$(".profile-settings-popup").addClass("show"),$(".profile-settings-popup .overlay").removeClass("d-none")})),$(".profile-settings-popup .overlay").on("click",(function(){$(".profile-settings-popup").removeClass("show"),$(".profile-settings-popup .overlay").addClass("d-none")})),$("#menu-btn-tab-mobile").on("click",(function(){$(".tablet-mobile-sidebar-menu").addClass("show"),$(".tablet-mobile-sidebar-menu .overlay").removeClass("d-none")})),$(".tablet-mobile-sidebar-menu .overlay").on("click",(function(){$(this).addClass("d-none"),$(".tablet-mobile-sidebar-menu").removeClass("show"),$(".tablet-mobile-sidebar-menu .overlay").addClass("d-none"),$("#new-shipment-btn,#currency-converter-btn").removeClass("active")})),$('input[name="singledate"]').daterangepicker({singleDatePicker:!0,showDropdowns:!0,minYear:1901,autoUpdateInput:!1,locale:{cancelLabel:"Clear"}}),$('input[name="singledate"]').on("apply.daterangepicker",(function(e,s){$(this).val(s.startDate.format("MMMM DD, YYYY"))})),$('input[name="singledate"]').on("cancel.daterangepicker",(function(e,s){$(this).val("")})),$('input[name="daterange"]').daterangepicker({autoUpdateInput:!1,locale:{cancelLabel:"Clear"}}),$('input[name="daterange"]').on("apply.daterangepicker",(function(e,s){$(this).val(s.startDate.format("MMM DD, YYYY")+" - "+s.endDate.format("MMM DD, YYYY"))})),$('input[name="daterange"]').on("cancel.daterangepicker",(function(e,s){$(this).val("")})),$('input[name="timepicker"]').mdtimepicker(),$("#new-shipment-next-btn").on("click",(function(){$(".step.step-1").hasClass("completed")?$(".step.step-2").hasClass("completed")||($(".step.step-2").removeClass("active"),$(".step.step-2").addClass("completed"),$(".step.step-3").addClass("active"),$(this).text("Finish"),$(".new-shipment-form .step-2-form").addClass("d-none"),$(".new-shipment-form .step-3-form").removeClass("d-none")):($(".step.step-1").removeClass("active"),$(".step.step-1").addClass("completed"),$(".step.step-2").addClass("active"),$("#new-shipment-back-btn").removeClass("d-none"),$(".new-shipment-form .step-1-form").addClass("d-none"),$(".new-shipment-form .step-2-form").removeClass("d-none"))})),$("#new-shipment-back-btn").on("click",(function(){$(".step.step-3").hasClass("active")?($(".step.step-3").removeClass("active"),$(".step.step-2").removeClass("completed"),$(".step.step-2").addClass("active"),$("#new-shipment-next-btn").text("Next"),$(".new-shipment-form .step-3-form").addClass("d-none"),$(".new-shipment-form .step-2-form").removeClass("d-none")):$(".step.step-2").hasClass("active")&&($(".step.step-2").removeClass("active"),$(".step.step-1").removeClass("completed"),$(".step.step-1").addClass("active"),$(this).addClass("d-none"),$(".new-shipment-form .step-2-form").addClass("d-none"),$(".new-shipment-form .step-1-form").removeClass("d-none"))})),$(".ship-vehicle-images-wrap .vehicle-img").on("click",(function(){$(this).toggleClass("selected")}))}))}},s={};function t(n){if(s[n])return s[n].exports;var a=s[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{"use strict";t(732),$(document).ready((function(){$(".shipment-item").on("click",(function(){$(this).hasClass("selected")||($(".shipment-item").removeClass("selected"),$(this).addClass("selected"),$(".single-shipment-details-panel-wrapper").addClass("show"))}))}))})()})();