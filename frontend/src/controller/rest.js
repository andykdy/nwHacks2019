
export function addHive(title, description, username, location){
    let request = new XMLHttpRequest();
    let url = "http://localhost:8080/hive";

    request.open("POST", url, true);

    let query = {
        title:title,
        description:description,
        username:username,
        location:location
    };

    console.log(query);

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

    request.send(JSON.stringify({
        title:title,
        description:description,
        username:username,
        location:location
    }));
}