function demo()
{
    console.log("outer function called");
    function inner()
    {
        console.log("inner function called")
    }
    inner();
}

demo();