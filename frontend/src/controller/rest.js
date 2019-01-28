export function addHive(title, description, username, location){
    let request = new XMLHttpRequest();
    let url = "http://localhost:8080/hive";

    request.open("POST", url, true);

    request.onload = function() {
        let response = request.responseText;
        if (request.status === 200) {
            console.log(response);
        } else {
            console.log(response);
        }
    };

    request.onerror = function() {
        let response = request.responseText;
    };

    request.setRequestHeader("Content-Type", "application/json");

    request.send(JSON.stringify({
        title:title,
        description:description,
        username:username,
        location:location
    }));
}

export function getProfile(username) {
    let request = new XMLHttpRequest();
    let url = "http://localhost:8080/user/" + username;

    request.open("GET", url, true);

    request.onload = function() {
        let response = request.responseText;
        if (request.status === 200) {
            console.log(response);
        } else {
            console.log(response);
        }
    };

    request.onerror = function() {
        let response = request.responseText;
        console.log("2"+response);
    };

    request.setRequestHeader("Content-Type", "application/json");

    request.send();
}