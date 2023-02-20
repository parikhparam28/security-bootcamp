var jwt_token;

function createAcc(){
    window.open('signup_url','_blank')
}

function loginAcc(){


    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))


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

    jwt_token = data.body

    if(data.response == 'success')
        window.open('login_page_url',"_blank")
    else 
        alert('Wrong Credentials')
}

function checkJWTtoken()
{

}

function forgotPassword()
{
    alert('Reset link has been sent to your email-id')
}

