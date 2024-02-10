// var url = ""

// const responseData = fetch(url).then(response => reesponse.json());
// responseData.then(({items, has_more, quota_max, quota_remaining}) => {
//     for(const {title, score, owner, link} of items)
//     console.log("Question Title: ---" + title)
// })

// var url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => response.json())
//     .then(response => {
//         for (var key in response){
//             console.log("username: " + response[key].username +
//             "---email: " + response[key].email + "cyty: " 
//             + response[key].adress.city + "---zipcoe: " 
//             + response[key].adress.zipcode + "---")
//         }
//     })


fetch (url, {
    method: "POST",
    headers: {
        "Content_type": "application/json"
    },
    body: JSON.stringify({
        userID: 101,
        id: 101,
        title: "Foo Bar Title"
    })
}).then(response => response.json())
    .then(consol.log(response))

