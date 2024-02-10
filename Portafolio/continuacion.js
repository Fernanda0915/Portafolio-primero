



var url = "https://jsonplaceholder.typicode.com/users"

var response  = fetch(url).then(response => response.json());
responseData.then(({userneme, email}) => {
    for (const{username, email} in Promise){
        console.log("username: " + username + "---email: " + email)
    }
    console.log(responseData)
})