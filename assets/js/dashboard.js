$(document).ready(function(){


    //Shipment Detail Section Testing Btn Click
    $('#dashboard-filter-download').on('click',function(){
        $('.dashboard-shipment-detail').addClass('show');
    })

    //Close Shipment Detail From Dashboard
    $('#close-shipment-detail-dashboard').on('click',function(){
        $('#dashboard-filter-download').removeClass('active');
        $('.dashboard-shipment-detail').removeClass('show');
    })

    // Dashboard Filter Buttons Click
    $('.dashboard-filter-btn').on('click',function(){
        $('.dashboard-filter-btn').removeClass('active');
        $(this).addClass('active');
    })

    //Custom Filter Button Click on Dashboard
    $('#dashboard-custom-filter-btn').on('click',function(){
        $('.dashboard-filter-btn').removeClass('active');
        $(this).addClass('active');
        $('.dashboard-filter-panel').addClass('show');
    })

    //Discard Custom Filter
    $('#discard-custom-filter').on('click',function(){
        $('#dashboard-custom-filter-btn').removeClass('active');
        $('.dashboard-filter-panel').removeClass('show');
    })

    //Apply Button Click Custom Filter
    $('#apply-filter-dashboard-btn').on('click',function(){
        $('.dashboard-filter-panel').removeClass('show');
        $('#dashboard-custom-filter-btn').removeClass('active');
        $('.loader-wrapper').removeClass('d-none');
        setTimeout(()=>{
            $('.loader-wrapper').addClass('d-none');
        },3000)
    })

})