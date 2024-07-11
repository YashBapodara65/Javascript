function print(no)
{
    if(no<=0)
    {
        return;
    }
    // document.write("Hello");
    console.log("Hello");
    no = no - print(no - 1);
}

print(5)