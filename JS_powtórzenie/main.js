$.getJSON('https://blockchain.info/pl/ticker', function (data) {

    $.each(data, function (i) {
        $("select").append("<option value=" + i + ">" + i + "</option>");
        
    });


  
});

  $('#policz').click(function (event) {
        event.preventDefault();
        var waluta = $("#select option:selected").text();
        var ilosc = $("#ilosc").val();
        if(ilosc>0){
        $.getJSON('https://blockchain.info/tobtc?currency=' + waluta + '&value=' + ilosc, function (data) {
            var waluta = $("#select option:selected").text();
            var ilosc = $("#ilosc").val();

//            console.log('https://blockchain.info/tobtc?currency=' + waluta + '&value=' + ilosc);
//            console.log(data);
            $("#cena").text("Cena: ");
            $("#cena").append(data);
        });};
    });









//
//$.ajax({
//    url: "https://blockchain.info/tobtc?currency=USD&value=500",
//    dataType: 'data',
//    success: function (data) {
//        console.log(data);
//
//    },
//    onerror: function (msg) {
//        console.log(msg);
//    }
//});
//
//
//
//$.getJSON('https://blockchain.info/tobtc?currency=USD&value=500', function (data) {
//
//    console.log(data);
//
//});
