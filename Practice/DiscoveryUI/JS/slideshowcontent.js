// import fetch from 'node-fetch'

fetch('http://localhost:3000/webpagedata3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data[0].image);
        appendData(data)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    let card1;
    card1 = `<img class="onhover" src="${data[0].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[0].Title}</p>
    <p class="DescriptionOfCard onhover">${data[0].Description}</p>`
    document.querySelector("#card0").innerHTML = card1;

    let card2;
    card2 = `<img class="onhover" src="${data[1].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[1].Title}</p>
    <p class="DescriptionOfCard onhover">${data[1].Description}</p>`
    document.querySelector("#card1").innerHTML = card2;

    let card3;
    card3 = `<img class="onhover" src="${data[2].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[2].Title}</p>
    <p class="DescriptionOfCard onhover">${data[2].Description}</p>`
    document.querySelector("#card2").innerHTML = card3;

    let card4;
    card4 = `<img class="onhover" src="${data[3].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[3].Title}</p>
    <p class="DescriptionOfCard onhover">${data[3].Description}</p>`
    document.querySelector("#card3").innerHTML = card4;

    let card5;
    card5 = `<img class="onhover" src="${data[4].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[4].Title}</p>
    <p class="DescriptionOfCard onhover">${data[4].Description}</p>`
    document.querySelector("#card4").innerHTML = card5;

    let card6;
    card6 = `<img class="onhover" src="${data[5].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[5].Title}</p>
    <p class="DescriptionOfCard onhover">${data[5].Description}</p>`
    document.querySelector("#card5").innerHTML = card6;

    let card7;
    card7 = `<img class="onhover" src="${data[6].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[6].Title}</p>
    <p class="DescriptionOfCard onhover">${data[6].Description}</p>`
    document.querySelector("#card6").innerHTML = card7;

    let card8;
    card8 = `<img class="onhover" src="${data[7].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[7].Title}</p>
    <p class="DescriptionOfCard onhover">${data[7].Description}</p>`
    document.querySelector("#card7").innerHTML = card8;

    let card9;
    card9 = `<img class="onhover" src="${data[8].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[8].Title}</p>
    <p class="DescriptionOfCard onhover">${data[8].Description}</p>`
    document.querySelector("#card8").innerHTML = card9;

    let card10;
    card10 = `<img class="onhover" src="${data[9].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[9].Title}</p>
    <p class="DescriptionOfCard onhover">${data[9].Description}</p>`
    document.querySelector("#card9").innerHTML = card10;

    let card11;
    card11 = `<img class="onhover" src="${data[10].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[10].Title}</p>
    <p class="DescriptionOfCard onhover">${data[10].Description}</p>`
    document.querySelector("#card10").innerHTML = card11;

    let card12;
    card12 = `<img class="onhover" src="${data[11].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[11].Title}</p>
    <p class="DescriptionOfCard onhover">${data[11].Description}</p>`
    document.querySelector("#card11").innerHTML = card12;

    let card13;
    card13 = `<img class="onhover" src="${data[12].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[12].Title}</p>
    <p class="DescriptionOfCard onhover">${data[12].Description}</p>`
    document.querySelector("#card12").innerHTML = card13;

    let card14;
    card14 = `<img class="onhover" src="${data[13].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[13].Title}</p>
    <p class="DescriptionOfCard onhover">${data[13].Description}</p>`
    document.querySelector("#card13").innerHTML = card14;

    let card15;
    card15 = `<img class="onhover" src="${data[14].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[14].Title}</p>
    <p class="DescriptionOfCard onhover">${data[14].Description}</p>`
    document.querySelector("#card14").innerHTML = card15;

    let card16;
    card16 = `<img class="onhover" src="${data[15].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[15].Title}</p>
    <p class="DescriptionOfCard onhover">${data[15].Description}</p>`
    document.querySelector("#card15").innerHTML = card16;

    let card17;
    card17 = `<img class="onhover" src="${data[16].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[16].Title}</p>
    <p class="DescriptionOfCard onhover">${data[16].Description}</p>`
    document.querySelector("#card16").innerHTML = card17;

    let card18;
    card18 = `<img class="onhover" src="${data[17].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[17].Title}</p>
    <p class="DescriptionOfCard onhover">${data[17].Description}</p>`
    document.querySelector("#card17").innerHTML = card18;
}












// let card10;
// card10 = `<img class="onhover" src="${data[9].image} "  width="350 px" height="450vh" alt=""/>
// <p class="TitleOfCard onhover">${data[9].Title}</p>
// <p class="DescriptionOfCard onhover">${data[9].Description}</p>`
// document.querySelector("#card8").innerHTML = card10;

// let card11;
// card11 = `<img class="onhover" src="${data[10].image} "  width="350 px" height="450vh" alt=""/>
// <p class="TitleOfCard onhover">${data[10].Title}</p>
// <p class="DescriptionOfCard onhover">${data[10].Description}</p>`
// document.querySelector("#card8").innerHTML = card11;

// let card12;
// card12 = `<img class="onhover" src="${data[11].image} "  width="350 px" height="450vh" alt=""/>
// <p class="TitleOfCard onhover">${data[11].Title}</p>
// <p class="DescriptionOfCard onhover">${data[11].Description}</p>`
// document.querySelector("#card8").innerHTML = card12;



// {,
//     {
//       "Title": "Zapotal",
//       "Description": "Guanacaste, Costa Rica",
//       "image": "../Assets/images/Cards/card10.jpg"
//     },
//     {
//       "Title": "James Island",
//       "Description": "Columbia Canada",
//       "image": "../Assets/images/Cards/card12.jpg"
//     },
//     {
//       "Title": "Costa Terra",
//       "Description": "Comporta, Portugal",
//       "image": "../Assets/images/Cards/card13.jpg"
//     },
//     {
//       "Title": "Driftwood",
//       "Description": "Austin, Texas",
//       "image": "../Assets/images/Cards/card14.jpg"
//     },
//     {
//       "Title": "Troubadour",
//       "Description": "Nashville, Tannessee",
//       "image": "../Assets/images/Cards/card15.jpg"
//     },
//     {
//       "Title": "Playa Grande",
//       "Description": "Rio San Juan, Dominician Republic",
//       "image": "../Assets/images/Cards/card1.jpg"
//     },
//     {
//       "Title": "The Summit",
//       "Description": "Las Vegas, Nevada",
//       "image": "../Assets/images/Cards/card13.jpg"
//     },
//     {
//       "Title": "Dune Deck",
//       "Description": "Westhampton Beach, NY",
//       "image": "../Assets/images/Cards/card12.jpg"
//     },
//     {
//       "Title": "Silo Ridge",
//       "Description": "Amenia, New York",
//       "image": "../Assets/images/Cards/card.jpg"
//     }}