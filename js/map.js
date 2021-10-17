var container = document.getElementById('map1');
var options = {
    center: new kakao.maps.LatLng(35.79236352987305, 127.42682652661878),
    level: 3
};

var map = new kakao.maps.Map(container, options);

var markerPosition  = new kakao.maps.LatLng(35.79236352987305, 127.42682652661878); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

var container2 = document.getElementById('map2');
var options2 = {
    center: new kakao.maps.LatLng(35.98935452396864, 126.71108059764146),
    level: 3
};

var map = new kakao.maps.Map(container2, options2);

var markerPosition  = new kakao.maps.LatLng(35.98935452396864, 126.71108059764146); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

var container3 = document.getElementById('map3');
var options3 = {
    center: new kakao.maps.LatLng(35.85742410789543, 127.15551606880165),
    level: 3
};

var map = new kakao.maps.Map(container3, options3);

var markerPosition  = new kakao.maps.LatLng(35.85742410789543, 127.15551606880165); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);