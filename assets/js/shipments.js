$(document).ready(function () {

    // Shipment Item click from list
    $('.shipment-item').on('click', function () {
        var windowWidth = $(window).width();
        if (!($(this).hasClass('selected'))) {
            $('.shipment-item').removeClass('selected');
            $(this).addClass('selected');
            $('.single-shipment-details-panel-wrapper').addClass('show');
        }
        if (windowWidth <= 990) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    })

    //Close Single Shipment Detail Panel
    $('#close-single-shipment-detail-panel,#close-single-shipment-detail-panel2').on('click', function () {
        $('.shipment-item').removeClass('selected');
        $('.single-shipment-details-panel-wrapper').removeClass('show');
    })

})