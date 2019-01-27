import * as $ from "jquery";

export function addHive(title, description, username, location){
    $.ajax({
        type: "POST",
        url:"http://api.allorigins.ml/get?url=" + encodeURIComponent("http://10.19.129.136:8080/hive") + "&callback=?",
        data:JSON.stringify({
            title: title,
            description: description,
            username: username,
            location: location
        }),
        contentType:"application/json",
        success: (res) => {
            console.log(res);
        },
        error: (xhr,status, error) => {
            console.error(error.error);
            console.log(status);
        }
    })
}