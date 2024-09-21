document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let email = document.querySelector("#lemail").value;
    let pwd = document.querySelector("#lpassword").value;
    let isValid = true;

    if(email == "")
    {
        document.querySelector("#email-err").innerText = "Email is required *";
        document.querySelector("#email-err").style.color = "red";
        isValid = false;
    }
    else
    {
        document.querySelector("#email-err").innerText = "";
    }

    if(pwd == "")
    {
        document.querySelector("#pwd-err").innerText = "Password is required *";
        document.querySelector("#pwd-err").style.color = "red";
        isValid = false;
    }
    else
    {
        document.querySelector("#pwd-err").innerText = "";
    }

    if(isValid)
    {
        fetch(`http://localhost:3000/users?email=${email}`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            // console.log(res);
            if(res.length == 0)
            {
                document.querySelector("#email-err").innerText = "Invalid email'id...!";
                document.querySelector("#email-err").style.color = "red";
            }
            else
            {
                if(res[0].password == pwd)
                {
                    localStorage.setItem("email",JSON.stringify(email));
                    Swal.fire({
                    title: "Login Successfull!",
                    icon: "success"
                    }).then((res)=>{
                        if(res.isConfirmed)
                        {
                            window.location.href = "index.html";
                        }
                    });
                }
                else
                {
                    document.querySelector("#pwd-err").innerText = "Wrong password...!";
                    document.querySelector("#pwd-err").style.color = "red";
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }
});