let i = 0;
function ColR()
{
    var x = document.getElementsByTagName("body")[0];
    x.style.backgroundColor = "red";
    if (i==1)
    {
        x.style.backgroundColor = "green";
    } 
    else if(i==2){
        x.style.backgroundColor = "blue";
    
    }
    i++;
    if (i==3)
    {
        i = 0;
    }
}