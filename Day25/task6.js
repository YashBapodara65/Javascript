const sentence = "hello world";


function capitalizeWords(sen)
{

    let str = '';

    for(let i=0; i<sen.length; i++)
    {
        if(i == 0 || str[i-1] == " ")
        {
            str += sen[i].toUpperCase();
        }   
        else
        {
            str += sen[i];
        }
    }

    return str;

}

console.log(capitalizeWords(sentence));