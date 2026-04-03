let form=document.getElementById("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let isvalid=true;
    let username=document.getElementById("username").value
    let email=document.getElementById("email").value

    if(username.length<6)
    {
        document.getElementById("nameerror").innerText="Password must be more than 6 characters"
        isvalid=false
    }
    else{
        document.getElementById("nameerror").innerText=""

    }

    if(!email.includes("@"))
    {
        document.getElementById("emailerror").innerText="Invalid Email"
        isvalid=false
    }
    else{
         document.getElementById("emailerror").innerText=""
    }
    if(isvalid)
    {
        alert("Form submitted successfully")
    }
});