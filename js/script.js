$(document).on("click", "#js-button", function(){
    $('#main').empty();
    $.ajax({
        method: "POST",
        url: "link.php",
        data: {
        'ext_url': 'http://www.cbr.ru/scripts/XML_daily.asp'
                },
        success: xmlParser
    });
})
function xmlParser(data) {
    var value = $('#select').val();
    $(data).find(value).each(function () {
        $(".main").append('<div class="page"><div class="title">' + $(this).find("CharCode").text() + '</div><div class="description">' + $(this).find("Name").text() + '</div><div class="kurs">Курс за ' + $(this).find("Nominal").text() + ' ' + $(this).find("Name").text() + ': ' + $(this).find("Value").text() + '</div></div>');
        $(".page").fadeIn(1000);
    });
}