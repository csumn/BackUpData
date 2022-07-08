fetch('http://localhost:3000/webpagedata4')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        appendData(data)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    console.log(data);
    let innerHtml;
    innerHtml = `<p class = "bottom-heading-titleOne"> ${data.TitleLine1}</p>
    <p class = "bottom-heading-titleTwo"> ${data.TitleLine2}</p>
    <p class = "bottom-heading-Description"> ${data.smallDescription}</p>`
    document.querySelector("#bottom-heading").innerHTML = innerHtml;
}
