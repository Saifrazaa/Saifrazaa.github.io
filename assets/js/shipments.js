$(document).ready((function(){$(".shipment-item").on("click",(function(){$(this).hasClass("selected")||($(".shipment-item").removeClass("selected"),$(this).addClass("selected"),$(".single-shipment-details-panel-wrapper").addClass("show"))})),$("#close-single-shipment-detail-panel").on("click",(function(){$(".shipment-item").removeClass("selected"),$(".single-shipment-details-panel-wrapper").removeClass("show")}))}));