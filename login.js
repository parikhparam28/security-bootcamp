function createAcc(){

}

function loginAcc(){
    let emailid = document.getElementById("emailid").value;
    let password = document.getElementById("pass-word").value;
    console.log(emailid,password)

    const data = fetch('url_here',{
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({'email': emailid, 'password': password})
    })
    .then(response => response.json())
    .catch((error)=> {
        alert('Error:' + error)
    })

    if(data.response == 'success')
        window.open('login_page_url',"_blank")
    else 
        alert('Wrong Credentials')
}