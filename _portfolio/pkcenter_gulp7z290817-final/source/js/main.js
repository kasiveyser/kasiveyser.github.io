/* google maps */

var marker1;
var marker2;
var marker3;
var marker4;
var marker5;
var marker6;


function initMap() {

    var image = {
        url: 'img/icon_small.gif',
        size: new google.maps.Size(25, 18),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(28, 41)
    };
    /*
    Приморский культурный центр, офис
    Адрес: 197183, Санкт-Петербург, Приморский пр., 35
    */
    var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 16,
        scrollwheel: false,
        center: {lat: 59.9841226, lng: 30.2842381}
        //  center: {lat: 59.983881, lng: 30.2819743}
    });

    marker1 = new google.maps.Marker({
        map: map1,
        title: 'Приморский культурный центр, офис\n' +
        'Приморский пр., 35',
        draggable: true,
        icon: image,
        position: {lat: 59.983651, lng: 30.284363}
    });

    // Создаем наполнение для информационного окна
    var contentString1 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">' +
        '<h3 class="contacts__title">Приморский культурный центр, офис<br>' +
        'Приморский пр., 35</h3>' +
        // '<p>Адрес: 197183, Санкт-Петербург, Приморский пр., 35 <br>' +
        // 'Телефон: <a href="tel:+78124311149">431-11-49</a> <br>' +
        // 'Факс: 430-32-39 <br>' +
        // 'e-mail: <a href="mailto:pkc@pkcentr.ru">pkc@pkcentr.ru</a> <br>' +
        // 'Директор: Иванова Надежда Сергеевна <br>' +
        // '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker1.addListener('click', function() {
        infowindow1.open(map1, marker1);
    });


    /*
    Дом культуры по адресу: Санкт-Петербург, Богатырский пр., д. 36
    */
    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 16,
        scrollwheel: false,
        center: {lat: 60.002778, lng: 30.238213}
    });

    marker2 = new google.maps.Marker({
        map: map2,
        title: 'Дом культуры\n' +
        'Богатырский пр., д. 36',
        draggable: true,
        icon: image,
        position: {lat: 60.0024291, lng: 30.2392142}
    });

    // Создаем наполнение для информационного окна
    var contentString2 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">' +
        '<h3 class="contacts__title">Дом культуры<br>' +
        'Богатырский пр., д. 36</h3>' +
        // '<p>Адрес: 197372, Санкт-Петербург, Богатырский пр., 36 <br>' +
        // 'Телефон: <a href="tel:+78123080921">308-09-21</a>, ' +
        // '<a href="tel:+78123080925">308-09-25</a><br>' +
        // 'e-mail: <a href="mailto:bogatirek@pkcentr.ru">bogatirek@pkcentr.ru</a><br>' +
        // '<a target="_blank" href="https://vk.com/pkc_bogatir36">ВКонтакте</a><br>' +
        // 'Заведующий подразделением: Богатская Елена Викторовна<br>' +
        // '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker2.addListener('click', function() {
        infowindow2.open(map2, marker2);
    });



    /*
    Дом культуры по адресу: Санкт-Петербург, Богатырский пр., д. 52
    */
    var map3 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 16,
        scrollwheel: false,
        center: {lat: 60.0058002, lng: 30.2135786}
    });

    marker3 = new google.maps.Marker({
        map: map3,
        title: 'Дом культуры\n' +
        'Богатырский пр., д. 52',
        draggable: true,
        icon: image,
        position: {lat: 60.0054646, lng: 30.2146898}
    });
    // Создаем наполнение для информационного окна
    var contentString3 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">' +
        '<h3 class="contacts__title">Дом культуры' +
        '<br>Богатырский&nbsp;пр., д.&nbsp;52</h3>' +
        // '<p>Адрес: 197372, Санкт-Петербург, Богатырский пр., 52<br>' +
        // 'Телефон: <a href="tel:+78126519587">651-95-87</a>, <a href="tel:+78126519547">651-95-47</a><br>' +
        // 'e-mail: <a href="mailto:bogatyr@pkcentr.ru">bogatyr@pkcentr.ru</a><br>' +
        // '<a target="_blank" href="https://vk.com/dkbogatir">ВКонтакте</a><br>' +
        // 'Заведующий подразделением: Виленская Анастасия Владимировна<br>' +
        // '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker3.addListener('click', function() {
        infowindow3.open(map3, marker3);
    });

    /*
    Дом культуры по адресу: пос. Лисий Нос, Приморское ш., д. 48
    */
    var map4 = new google.maps.Map(document.getElementById('map4'), {
        zoom: 16,
        scrollwheel: false,
        center: {lat: 59.9970019, lng: 30.111664}
    });

    marker4 = new google.maps.Marker({
        map: map4,
        title: 'Дом культуры\n' +
        'пос. Лисий Нос, Приморское ш., д. 48',
        draggable: true,
        icon: image,
        position: {lat: 59.9967668, lng: 30.1117343}
    });

    // Создаем наполнение для информационного окна
    var contentString4 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">' +
        '<h3 class="contacts__title">Дом культуры' +
        '<br>пос. Лисий Нос, Приморское&nbsp;ш., д.&nbsp;48</h3>' +
        // '<p>Адрес: 197755, Санкт-Петербург, пос. Лисий Нос, Приморское ш., 48<br>' +
        // 'Телефон: <a href="tel:+78124349459">434-94-59</a><br>' +
        // 'e-mail: <a href="mailto:tesib@mail.ru">tesib@mail.ru</a><br>' +
        // '<a target="_blank" href="https://vk.com/club30956086">ВКонтакте</a><br>' +
        // 'Заведующий подразделением: Симонова Татьяна Сергеевна <br>' +
        // '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker4.addListener('click', function() {
        infowindow4.open(map4, marker4);
    });


    /*
    Дом культуры по адресу: пос. Ольгино, ул. Садовая, д. 6
    */
    var map5 = new google.maps.Map(document.getElementById('map5'), {
        zoom: 18,
        scrollwheel: false,
        center: {lat: 59.9956415, lng: 30.1305271}
    });

    marker5 = new google.maps.Marker({
        map: map5,
        title: 'Дом культуры\n' +
        'пос. Ольгино, ул. Садовая, д. 6',
        draggable: true,
        icon: image,
        position: {lat: 59.995579, lng: 30.1307049}
    });

    // Создаем наполнение для информационного окна
    var contentString5 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">' +
        '<h3 class="contacts__title">Дом культуры<br>' +
        'пос. Ольгино, ул.&nbsp;Садовая, д.&nbsp;6</h3>' +
        // '<p>Адрес: 197229, Санкт-Петербург, пос. Ольгино, Садовая ул., 6 <br>' +
        // 'Телефон: <a href="tel:+78124983629">498-36-29</a> <br>' +
        // 'e-mail: <a href="mailto:olgino@pkcentr.ru">olgino@pkcentr.ru</a> <br>' +
        // 'Заведующий подразделением: Риссо Марина Владимировна<br>' +
        // '</p>';
    '</div>'+
    '</div>';

    // Создаем информационное окно
    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker5.addListener('click', function() {
        infowindow5.open(map5, marker5);
    });


    /*
    Дом культуры по адресу: Санкт-Петербург, ул. Мебельная, д. 25
    */
    var map6 = new google.maps.Map(document.getElementById('map6'), {
        zoom: 16,
        scrollwheel: false,
        center: {lat: 59.9955433, lng: 30.2104386}
    });

    marker6 = new google.maps.Marker({
        map: map6,
        title: 'Дом культуры\n' +
        'ул. Мебельная, д. 25',
        draggable: true,
        icon: image,
        position: {lat: 59.995348, lng: 30.2115888}
    });
    // Создаем наполнение для информационного окна
    var contentString6 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">' +
        '<h3 class="contacts__title">Дом культуры' +
        '<br>ул.&nbsp;Мебельная, д.&nbsp;25</h3>' +
        // '<p>Адрес: 197374, Санкт-Петербург, ул. Мебельная, 25<br>' +
        // 'Телефон: <a href="tel:+78126893428">689-34-28</a><br>' +
        // 'Заведующий подразделением: Шаплёва Инна Викторовна<br>' +
        // '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow6 = new google.maps.InfoWindow({
        content: contentString6,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker6.addListener('click', function() {
        infowindow6.open(map6, marker6);
    });


}

/* end google maps */