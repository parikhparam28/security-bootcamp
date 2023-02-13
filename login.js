function createAcc(){
    
}

function loginAcc(){
    let emailid = document.getElementById("emailid").value;
    let password = document.getElementById("pass-word").value;
    console.log(emailid,password)

    fetch('url_here',{
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({'id': emailid, 'password': password})
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}