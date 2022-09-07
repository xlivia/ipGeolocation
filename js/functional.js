function ipfindWebSearch() {
    let xmlhttp = new XMLHttpRequest();
    let ip_address = document.getElementById("input-ip-address").value;
    let auth = '650b3015-2e71-48aa-9195-f6d1cfa9ecc2';
    let url = "https://ipfind.co/?auth=" + auth + "&ip=" + ip_address;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            addPin(result.ip_address, result.latitude, result.longitude);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

function addPin(ip, lat, long) {
    L.marker([lat, long], 15).addTo(map).bindPopup(ip).openPopup();
}

function userInfo(user, pass) {
    let person = {
        username: user,
        password: pass
    }
    document.getElementById('person');
}

function displayFormElements() {
    var x = document.getElementById('lgnfrm');
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById('formElements').innerHTML = text;
}

function displayUserName() {
    var x = document.getElementById('lgnfrm');
    var text = x.elements[0].value;
    document.getElementById('displayUserName').innerHTML = text;
    window.localStorage.setItem("personUsername", text);
}

function displayName() {
    //document.getElementById('displayName') = window.localStorage.getItem("personUsername");
    
    function getParams() {
        var idx = document.URL.indexOf('?');
        var params = new Array(); 
        if (idx != -1) {
            var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
            for (var i = 0; i < pairs.length; i++) {
                nameVal = pairs[i].split('=');
                params[nameVal[0]] = nameVal[1];
            }
        }
        return params;
    }

    params = getParams();
    username = unescape(params["uname"]);
    document.write(username);

}