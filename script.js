var xmlhttp;
var loadxml = function(code) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject();
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            if (json.status == 1002 && code == 0) {
                alert("输入的城市名有误！");
            } else if (json.status == 1002 && code == 1) {
                alert("输入的城市代码有误！");
            } else {
                for (var i = 1; i <= 5; i++) {
                    document.getElementsByClassName("date")[i].innerHTML = json.data.forecast[i - 1].date;
                    document.getElementsByClassName("high")[i].innerHTML = json.data.forecast[i - 1].high;
                    document.getElementsByClassName("low")[i].innerHTML = json.data.forecast[i - 1].low;
                    // document.getElementsByClassName("power")[i].innerHTML = json.data.forecast[i - 1].fengli;
                    document.getElementsByClassName("direction")[i].innerHTML = json.data.forecast[i - 1].fengxiang;
                    document.getElementsByClassName("weather")[i].innerHTML = json.data.forecast[i - 1].type;
                }
                document.getElementById("city").innerHTML = "当前城市：" + json.data.city;
                document.getElementById("date1").innerHTML = json.data.yesterday.date;
                document.getElementById("high1").innerHTML = json.data.yesterday.high;
                document.getElementById("low1").innerHTML = json.data.yesterday.low;
                // document.getElementById("power1").innerHTML = json.data.yesterday.fl;
                document.getElementById("direction1").innerHTML = json.data.yesterday.fx;
                document.getElementById("weather1").innerHTML = json.data.yesterday.type;
                document.getElementById("inputDiv").value = "";
            }
        }
    }
    if (code == 0) {
        getDataByCityName();
    } else if (code == 1) {
        getDataByCityKey();
    } else {
        xmlhttp.open("GET", " http://wthrcdn.etouch.cn/weather_mini?city=都江堰", true);
    }
    xmlhttp.send();
}
var getDataByCityName = function() {
    var name = document.getElementById("inputDiv").value;
    var url = "http://wthrcdn.etouch.cn/weather_mini?city=" + name;
    xmlhttp.open("GET", url, true);
}

var getDataByCityKey = function() {
    var key = document.getElementById("inputDiv").value;
    var url = "http://wthrcdn.etouch.cn/weather_mini?citykey=" + key;
    xmlhttp.open("GET", url, true);
}