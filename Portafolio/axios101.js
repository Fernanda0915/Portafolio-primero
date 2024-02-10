//import {axios} from "axios";

const axios = require('axios');

var url = "https://jsonplaceholder.typicode.com/posts"

// axios.get(url).then(({data}) => {
//     for (const key in data){
//         console.log(data[key].title)
//     }


// }).catch((err) => {
//     console.log(err)
// });

axios.post(url, {
    userId: 2,
    title: "Lorem Ipsum ETC ETC"
}).then(({data}) => console.log(data))

axios.post(url, {
    userId: 4,
    title: " ETC"
}).then(({data}) => console.log(data))

