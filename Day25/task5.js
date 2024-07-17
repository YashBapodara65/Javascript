function getFormattedDate()
{
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let fullDate = year +"-" +month +"-" +day;

    return fullDate;

}

console.log(getFormattedDate())