$(document).ready(function () {

    // Shipment Item click from list
    $('.shipment-item').on('click', function () {
        if (!($(this).hasClass('selected'))) {
            $('.shipment-item').removeClass('selected');
            $(this).addClass('selected');
            $('.single-shipment-details-panel-wrapper').addClass('show');
        }
    })

    //Close Single Shipment Detail Panel
    $('#close-single-shipment-detail-panel').on('click', function () {
        $('.shipment-item').removeClass('selected');
        $('.single-shipment-details-panel-wrapper').removeClass('show');
    })

})