function t1(){
    let num = document.getElementById("num1").value;
    let ans = document.getElementById("getnum1");

    if(num == "")
    {
        ans.style.cssText = "color : red;";
        ans.innerText = "Please enter the year number...!";
    }
    else if(num > 0 || num == 0)
    {
        if((num%4==0 && num%100 != 0) || num % 400 == 0)
        {
            ans.style.cssText = "color : black;";
            ans.innerText = num +" is a leap year...!"; 
        }
        else
        {
            ans.style.cssText = "color : black;";
            ans.innerText = num +" is not a leap year...!";
        }
    }
    else
    {
        ans.style.cssText = "color : blue;";
        ans.innerText = num +" value is invalid...!";
    }
}

function t2()
{
    let num2 = document.getElementById("age").value;
    let ans2 = document.getElementById("getnum2");
    let citizen =  true;

    if(num2 == "")
    {
        ans2.style.cssText = "color : red;";
        ans2.innerText = "Please enter the age...!";
    }
    else if(num2 > 0 || num2 == 0)
    {
        if(num2 >= 18 && citizen == true)
        {
            ans2.style.cssText = "color : black;";
            ans2.innerText = num2 + " age is eligible for vote...!";
        }
        else{
            ans2.style.cssText = "color : blue;";
            ans2.innerText = num2 + " age is not eligible for vote...!";
        }
    }
    else
    {
        ans2.style.cssText = "color : red;";
        ans2.innerText = num2 +" value is invalid...!";
    }
    
}

function t3()
{
    let temperature = document.getElementById("temp").value;
    let ans3 = document.getElementById("getnum3");

    if(temperature > 0 || temperature < 0 || temperature == 0)
    {
        if(temperature == "")
        {
            ans3.style.cssText = "color : red;";
            ans3.innerText = "Please enter the number...!";
        }
        else if (temperature >= 30) {
            ans3.style.cssText = "color : red;";
            ans3.innerText = "It's hot!";
        } 
        else if (temperature >= 15 && temperature < 30) 
        {
            ans3.style.cssText = "color : black;";
            ans3.innerText = "It's moderate.";
        } else 
        {
            ans3.style.cssText = "color : blue;";
            ans3.innerText = "It's cold.";
        }
    }
    else
    {
        ans3.style.cssText = "color : red;";    
        ans3.innerText = "Invalid value...!";
    }
}

function t4()
{
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let num3 = parseInt(document.getElementById("n3").value);

    let ans4 = document.getElementById("getnum4");

    if((num1 >= 0 || num1 <= 0) && (num2 >= 0 || num2 <= 0) && (num3 >= 0 || num3 <= 0))
    {
        if(num1 == num2 && num1 == num3 && num2 == num3)
        {
            ans4.style.cssText = "color : blue;";
            ans4.innerText = "All numbers are same...!";
        }
        else if((num1 > num2) && (num1 > num3))
        {
            ans4.style.cssText = "color : black;";
            ans4.innerText = num1 + " is a largest number...!";
        }
        else if((num2 > num1) && (num2 > num3))
        {
            ans4.style.cssText = "color : black;";
            ans4.innerText = num2 + " is a largest number...!";
        }
        else
        {
            ans4.style.cssText = "color : black;";
            ans4.innerText = num3 + " is a largest number...!";
        }
    }
    else
    {
        ans4.style.cssText = "color : red;";
        ans4.innerText = "Please enter the value...!";
    }

}

function t5()
{
    let num5 = document.getElementById("no").value;
    
    let ans5 = document.getElementById("getnum5");
    
    if(num5 == "")
    {
        ans5.style.cssText = "color : red;";
        ans5.innerText = "Please enter the number...!";
    }
    else if(num5 > 0 || num5 < 0 || num5 == 0)
        {
            if(num5%2==0)
        {
            ans5.style.cssText = "color : black;";
            ans5.innerText = num5 + " is a even number...!";
        }
        else
        {
            ans5.style.cssText = "color : black;";
            ans5.innerText = num5+ " is a odd number...!";
        }
    }
    else
    {
        ans5.style.cssText = "color : red;";
        ans5.innerText = num5+ " is a invalid value...!";   
    }

}

function t6()
{
    let p = parseInt(document.getElementById("pa").value);
    let r = parseInt(document.getElementById("ra").value);
    let t = parseInt(document.getElementById("tp").value);
    let total = (p * r * t) / 100;
    let ans6 = document.getElementById("getnum6");

    if((p > 0 || p==0) && (r > 0 || r==0) && (t > 0 || t==0))
    {
        ans6.style.cssText = "color : black;";
        ans6.innerText = "Simple interest is :- " +total;
    }
    else
    {
        ans6.style.cssText = "color : red;";
        ans6.innerText = "Please enter the positive numbers...!";
    }

}

function t8()
{
    let ch = document.getElementById("chr").value;
    let ans8 = document.getElementById("getnum8");

    if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
    {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            ans8.style.cssText = "color : black;";
            ans8.innerText = ch + " is a vowel...!";   
        }
        else
        {
            ans8.style.cssText = "color : black;";
            ans8.innerText = ch + " is a consonant...!";   
        }
    }
    else if(ch > 0 || ch < 0 || ch == 0)
    {
        ans8.style.cssText = "color : red;";
        ans8.innerText = "Please enter the character...!";   
    }
    else
    {
        ans8.style.cssText = "color : red;";
        ans8.innerText = "Please enter the character...!";   
    }

}

function t9()
{
    let age_no = document.getElementById("age").value;
    let ans9 = document.getElementById("getnum9");

    if(age_no > 0 || age_no < 0)
    {
        if (age_no >= 13) {
            ans9.style.cssText = "color : black;"; 
            ans9.innerText = "Welcome! You are old enough to access the website.";
        } else {
            ans9.style.cssText = "color : black;"; 
            ans9.innerText = "Sorry, you are not old enough to access the website.";
        }
    }
    else
    {
        ans9.style.cssText = "color : red;";
        ans9.innerText = "Please enter the valid age.";
    }
}

function t10()
{
    let no = parseInt(document.getElementById("v1").value);
    let ans10 = document.getElementById("getnum10");

    if(no < 0 || no > 0 || no==0)
    {
        if(no%3==0 && no%5==0)
        {
            ans10.style.cssText = "color : black;"; 
            ans10.innerText = no +" number is divisible by both 3 and 5";
        }   
        else
        {
            ans10.style.cssText = "color : black;"; 
            ans10.innerText = no +" number is not divisible by both 3 and 5";
        }
    }
    else
    {
        ans10.style.cssText = "color : red;";
        ans10.innerText = "Please enter the valid number....!";
    }

}