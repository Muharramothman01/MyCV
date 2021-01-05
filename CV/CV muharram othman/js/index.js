let active = document.querySelectorAll(".active");

let ul = document.querySelector("ul");

function nav_bar(e)
{

    const sections = document.querySelectorAll('section');

    const lists = document.querySelectorAll("ul li");

    const home = document.querySelector("main");

    const contact = document.querySelector('footer');

    const li_id = e.target.id;

    
    for (const index of lists) 
    {
        if(index.className == "active")
        {
            index.classList.remove('active');
        }

        else if(li_id == index.id)
        {
            index.classList.add('active');
        }
    }

    for(const index of sections)
    {

        if(li_id == index.id)
        {
            index.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }


    }
    
    if(li_id == home.id)
    {
        home.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});
    }
    
    else if(li_id == contact.id)
    {
        contact.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});
    }

}



window.addEventListener('scroll',function()
{
    if(window.pageYOffset == 0)
    {
        document.querySelector('nav').style.cssText = "background-color:black;";
    }
    else
    {
        document.querySelector('nav').style.cssText = "background-color:#131314;";
    }
    
})
ul.addEventListener("click",nav_bar);