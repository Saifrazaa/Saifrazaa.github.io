$(document).ready(function () {

    //Shipment Detail Section Testing Btn Click
    $('#dashboard-filter-download').on('click', function () {
        $('.dashboard-shipment-detail').addClass('show');
    })

    //Close Shipment Detail From Dashboard
    $('#close-shipment-detail-dashboard').on('click', function () {
        $('#dashboard-filter-download').removeClass('active');
        $('.dashboard-shipment-detail').removeClass('show');
    })

})