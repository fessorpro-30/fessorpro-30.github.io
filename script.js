var loadxml = function(code) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject();
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            if (json.desc == "invilad-citykey") {
                alert("输入的城市名有误！");
            } else if (json.desc == "no data") {
                alert("输入的城市代码有误！");
            } else {
                for (var i = 1; i <= 5; i++) {
                    document.getElementsByClassName("date")[i].innerHTML = json.data.forecast[i - 1].date;
                    document.getElementsByClassName("high")[i].innerHTML = json.data.forecast[i - 1].high;
                    document.getElementsByClassName("low")[i].innerHTML = json.data.forecast[i - 1].low;
                    document.getElementsByClassName("power")[i].innerHTML = json.data.forecast[i - 1].fengli;
                    document.getElementsByClassName("direction")[i].innerHTML = json.data.forecast[i - 1].fengxiang
                    document.getElementsByClassName("weather")[i].innerHTML = json.data.forecast[i - 1].type;
                }
            }
        }
    }
    if (code == 0) {
        getDataByCityName();
    } else if (code == 1) {
        getDataByCityKey();
    } else {
        xmlhttp.open("GET", " http://wthrcdn.etouch.cn/weather_mini?city=成都", true);
    }
    xmlhttp.send();
}
var getDataByCityName = function() {
    var name = document.getElementById("inputDiv").value;
    xmlhttp.open("GET", "http://wthrcdn.etouch.cn/weather_mini?city=" + name, true);
}

var getDataByCityKey = function() {
    var key = document.getElementById("inputDiv").value;
    xmlhttp.open("GET", "http://wthrcdn.etouch.cn/weather_mini?citykey=" + key, true);
}