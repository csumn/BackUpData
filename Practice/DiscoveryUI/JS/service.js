import { XMLHttpRequest } from "xmlhttprequest";

const makeServiceCall = (methodType, url, async, data = null) => {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    resolve(xhr.responseText);
                } else if (xhr.status >= 400) {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    })
                    console.log("XHR Failed " + xhr.statusText)
                }
            }
        }
        xhr.open(methodType, url, async);
        if (data) {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}

const getURL = 'http://localhost:3000/webpagedata1';

makeServiceCall('GET', getURL, true)
    .then(responseText => {
        console.log("GET USER DATA : " + responseText);
    }).catch(e => {
        console.log(e);
    })


