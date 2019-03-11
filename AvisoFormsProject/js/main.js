$(window).load(function () {
    carouselFunc(docList);
    $('#hidden').hide();
});
$(document).ready(function () {
    $("#datepicker1").datepicker({
            dateFormat: 'dd-mm-yy',
            changeMonth: true,
            changeYear: true,
            minDate: '01-01-2013',
            maxDate: '-1D'
        },
        $.datepicker.regional["ru"]
    );


    $("#datepicker2").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            maxDate: '-1D'
        },
        $.datepicker.regional["ru"]
    );


    /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
    /* Written by Andrew Stromnov (stromnov@gmail.com). */
    ( function( factory ) {
        if ( typeof define === "function" && define.amd ) {

            // AMD. Register as an anonymous module.
            define( [ "../widgets/datepicker" ], factory );
        } else {

            // Browser globals
            factory( jQuery.datepicker );
        }
    }( function( datepicker ) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
                "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
                "Июл","Авг","Сен","Окт","Ноя","Дек" ],
            dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
            dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
            dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.ru );

        return datepicker.regional.ru;

    } ) );
});




// -----------------------------------------------------------
//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){
    var carusel = $(this).parents('.carousel');
    right_carusel(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){
    var carusel = $(this).parents('.carousel');
    left_carusel(carusel);
    return false;
});
function left_carusel(carusel){
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
    $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
    $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
    $(carusel).find(".carousel-items").animate({left: "0px"}, 200);

}
function right_carusel(carusel){
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
        $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
        $(carusel).find(".carousel-items").css({"left":"0px"});
    });
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
//	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
    setInterval(function(){
        if (!$(carusel).is('.hover'))
            right_carusel(carusel);
    }, 1000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')});
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')});

//
var docList = {
    docs: [
        {
            id:1,
            text: "Паспорт гражданина Украины старого образца",
            src: "./img/passport.jpg",
            series: true,
            number: false,
            issueDate: true,
            expDate: false,
            place: true,
            regNum: false
        },
        {
            id:2,
            text: "Водительское удостоверение старого образца",
            src: "./img/driver-license.jpg",
            series: true,
            number: true,
            issueDate: true,
            expDate: true,
            place: true,
            regNum: false
        },
        {
            id:3,
            text: "Диплом об образовании",
            src: "./img/diploma.jpg",
            series: true,
            number: true,
            issueDate: true,
            expDate: false,
            place: false,
            regNum: false
        },
        {
            id:4,
            text: "Загранпаспорт",
            src: "./img/foreign-passport.jpg",
            series: true,
            number: true,
            issueDate: true,
            expDate: true,
            place: true,
            regNum: true
        },
        {
            id:5,
            text: "Водительское удостоверение нового образца",
            src: "./img/license-new.jpg",
            series: false,
            number: true,
            issueDate: true,
            expDate: true,
            place: true,
            regNum: false
        },
        {
            id:6,
            text: "Диплом об образовании старого образца",
            src: "./img/diploma-old.jpg",
            series: true,
            number: true,
            issueDate: true,
            expDate: false,
            place: false,
            regNum: true
        },
        {
            id:7,
            text: "Паспорт гражданина Украины нового образца",
            src: "./img/passport-new.jpg",
            series: false,
            number: true,
            issueDate: true,
            expDate: true,
            place: false,
            regNum: true
        },
        {
            id:8,
            text: "Свидетельство о рождении",
            src: "./img/svidoctvo-new.jpg",
            series: true,
            number: true,
            issueDate: true,
            expDate: false,
            place: true,
            regNum: true
        },
        {
            id:9,
            text: "Свидетельство о рождении старого образца",
            src: "./img/svidoctvo-old.jpg",
            series: false,
            number: false,
            issueDate: true,
            expDate: false,
            place: true,
            regNum: true
        }
    ]
}
// ------------------------------------- карусель ------------------------------------
function carouselFunc(docList) {

    var resultHtml=  $("<div class='carousel-items'>");
    var list = docList.docs;

    for (var i = 0; i < list.length; i++) {

        var text= list[i]["text"] == null ? "" : list[i]["text"];
        var image = list[i]["src"] == null ? "Image/no-image.png" : list[i]["src"];
        var myBtnId = list[i]["id"] == null ? "" : list[i]["id"];

        // var cutString = storage.movieSimilar[i].overview.slice(0, 200);
        // storage.movieSimilar[i].overview = cutString.slice(0, cutString.lastIndexOf('.')) + '.';
        resultHtml.append(
            "<div class='carousel-block text-center' >"
            + "<figure>"
            + "<figcaption>"
            + text
            + "</figcaption>"
            + "<img  src='" + image + "' alt='" + text + "'/>"
            // + "<img  id='"+ storage.movieSimilar[i]["id"] +"' src='" + image + "' class='poster img-fluid moreInfo'/>"
            + "<button class='btn btn-warning btn-doc' id='docId" + myBtnId + "' type='submit'>Выбрать</button>"
            + "</figure>"
            +  "</div>");
    }

    resultHtml.append("</div>");

    $(".carousel-wrapper").html(resultHtml);
};

// ---------------------------------------

function person() {
    var html = $("<div class='person'>");
    html.append(
    "<h3 class='h4'>Документ зарегистрирован на:</h3>"
        +"<p class=''>"
        +"<label class='col-sm-3 col-form-label' for=''>Фамилия</label>"
        +"<input class='col-sm-9' id='' type='text' name='name' value='' placeholder=''>"
        +"</p>"
        +"<p class=''>"
        +"<label class='col-sm-3 col-form-label' for=''>Имя</label>"
        +"<input class='col-sm-9' id='' type='text' name='name' value='' placeholder=''>"
        +"</p>"
        +"<p class=''>"
        +"<label class='col-sm-3 col-form-label' for=''>Отчество</label>"
        +"<input class='col-sm-9' id='' type='text' name='name' value='' placeholder=''>"
        +"</p>"
        +"</div>"
        +"<div class='formSeries'></div>"
        +"<div class='formNum'></div>"
       // +"<p id='date1'>Date: <input type='text' id='datepicker' name='startDateId' >"
        +"<div class='form-conf'></div>"
    );
    $("#datepicker").datepicker({dateFormat: 'yy-mm-dd'});
    $(".lost-form").html(html);
}

function contact() {
    var html = $("<div class=''>");
    html.append(
        "<h3 class='h4'>Контактные данные:</h3>"
        +"<p>"
        +"<label class='col-form-label d-flex'><span class='col-sm-3'>Фамилия</span>"
        +"<input class='col-sm-9' type='text' name='contact-name' value='' placeholder=''></label>"
        +"</p>"
        +"<p>"
        +"<label class='col-form-label d-flex'><span class='col-sm-3'>Имя</span>"
        +"<input class='col-sm-9' type='text' name='contact-surname' value='' placeholder=''></label>"
        +"</p>"
        +"<p>"
        +"<label class='col-form-label d-flex'><span class='col-sm-3'>Телефон</span>"
        +"<input class='col-sm-9' type='tel' name='phone-number' value='' placeholder=''></label>"
        +"</p>"
        +"<p>"
        +"<label class='col-form-label d-flex'><span class='col-sm-3'>Email</span>"
        +"<input class='col-sm-9'  type='email' name='email-address' value='' placeholder='your@mail.com'></label>"
        +"</p>"
        +"<p class='d-flex justify-content-end'>"
        +"<button class='btn btn-warning' type='submit'>Отправить</button>"
        +"</p>"
    );

    $(".contact").html(html);
}
function series () {
    var html = $( "<p class=''>");
    html.append(
        "<label class='col-sm-3 col-form-label' for=''>Серия</label>"
        +"<input class='col-sm-9' id='' type='text' name='series' value='' placeholder=''>"
        +"</p>");
    $(".formSeries").html(html);
}
function docNumber () {
    var html = $( "<p class=''>");
    html.append(
        "<label class='col-sm-3 col-form-label' or=''>Номер</label>"
        +"<input class='col-sm-9' id='' type='text' name='series' value='' placeholder=''>"
        +"</p>");
    $(".formNum").html(html);
}
//
// datepicker


$(document).on('click', ".btn-doc", function () {
    $('#hidden').show();
    person();
   var i =  this.id.slice(-1)-1;
    if (docList.docs[i].series) series();
    if (docList.docs[i].number) docNumber();
  //  if (docList.docs[i].issueDate) issueDate();
    contact();
});







