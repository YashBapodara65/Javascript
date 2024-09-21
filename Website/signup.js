document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let email = document.querySelector("#remail").value;
    let mno = document.querySelector("#rmno").value;
    let user = document.querySelector("#rusername").value;
    let dob = document.querySelector("#rdob").value;
    let pwd = document.querySelector("#rpassword").value;
    let isValid = true;

    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const specialChar = new RegExp("(?=.*[!@#\$%\^&\*])");
    const eightChar = new RegExp("(?=.{8,})");

    let obj = {
        email : email,
        mobile_no : mno,
        username : user,
        dob : dob,
        password : pwd
    }

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

    if(mno == "")
    {
        document.querySelector("#mno-err").innerText = "Mobile Number is required *";
        document.querySelector("#mno-err").style.color = "red";
        isValid = false;
    }
    else if(isNaN(mno))
    {
        document.querySelector("#mno-err").innerText = "Only digits alllowed *";
        document.querySelector("#mno-err").style.color = "red";
        isValid = false;
    }
    else if(mno.length != 10)
    {
        document.querySelector("#mno-err").innerText = "Mobile Number should have a minimum 10 digits *";
        document.querySelector("#mno-err").style.color = "red";
        isValid = false;
    }
    else
    {
        document.querySelector("#mno-err").innerText = "";
    }

    if(user == "")
    {
        document.querySelector("#name-err").innerText = "Username is required *";
        document.querySelector("#name-err").style.color = "red";
        isValid = false;
    }
    else
    {
        document.querySelector("#name-err").innerText = "";
    }

    if(dob == "")
    {
        document.querySelector("#dob-err").innerText = "DOB is required *";
        document.querySelector("#dob-err").style.color = "red";
        isValid = false;
    }
    else
    {
        document.querySelector("#dob-err").innerText = "";
    }

    if(pwd == "")
    {
        document.querySelector("#pwd-err").innerText = "Password is required *";
        document.querySelector("#pwd-err").style.color = "red";
        isValid = false;
    }
    else if(eightChar.test(pwd) && number.test(pwd) && specialChar.test(pwd) && (lowerCase.test(pwd) || upperCase.test(pwd)))
    {
        document.querySelector("#pwd-err").innerText = "";
    }
    else
    {
        document.querySelector("#pwd-err").innerText = "Password should have a minimum 8 characters at least 1 alphabet, 1 numeric, 1 special character *";
        document.querySelector("#pwd-err").style.color = "red";
        isValid = false;
    }

    if(isValid)
    {
        fetch(`http://localhost:3000/users?email=${email}`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            // console.log(res);
            if(res.length > 0)
            {
                Swal.fire({
                    title: "Email'ID",
                    text: "Try to register with different email'id",
                    icon: "info"
                  });
            }
            else
            {
                add(obj)
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }
});

function add(data)
{
    fetch("http://localhost:3000/users",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        Swal.fire({
            title: "Login",
            text: "Please login with your email and password...!",
            icon: "info"
        }).then((res)=>{
            if(res.isConfirmed)
            {
                window.location.href = "signin.html";
            }
        });
    })
    .catch((err)=>{
        console.log(err);
    });
}