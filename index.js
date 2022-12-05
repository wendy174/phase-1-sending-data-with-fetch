// Add your code here

function submitData(user, email) {
    // function configObject() {
    //     method: 'POST'
    //     headers: {
    //         'Content-Type': 'application/json', 
    //         'Accept': 'application/json' 
    //     }
    //     body: ({
    //         username: 'user',
    //         emailAddress: 'email'
    //     }) 
    
    fetch('http://localhost:3000/users', configObject) 
        .then(resp => resp.json())
        .then(object => console.log(object))
}
// post request using fetch 
// function that takes in name and email 
// fetch inside sumbit data --> sumbitdata returns the fetch
