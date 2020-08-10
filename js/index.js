
body = document.querySelector("body");
h2 = document.querySelector("h2");
h1 = document.querySelector("h1");
menu = document.querySelector(".menu");
container = document.querySelector(".container");
h3 = document.querySelector("h3");
menuStatus = 'closed';
catColorSelected = "white";
catColorUnselected = "rgb(189, 189, 189)";
backgroundInitial = "rgb(37, 127, 211)";
historyBox = document.querySelector(".history");
designBox = document.querySelector(".design");
specsBox = document.querySelector(".specs");
figuresBox = document.querySelector(".figures");
backgroundImg = document.querySelector(".background-img");


function closeMenu()
{
    // h2 styling
    h2.style.top = "200px";
    h2.style.left = "60%";
    h2.style.transform = "translateX(-50%)";
    h2.style.fontSize = "70px";
    h2.style.transition = "1s ease-in-out";
    h2.style.textShadow = "5px 5px 5px rgba(0, 0, 0, 0.281)";

    // h1 styling
    h1.style.top = "300px";
    h1.style.left = "50%";
    h1.style.transform = "translateX(-50%)";
    h1.style.fontSize = "80px";
    h1.style.transition = "1s ease-in-out";
    h1.style.textShadow = "5px 5px 5px rgba(0, 0, 0, 0.281)";

    // menu styling
    menu.style.top = "60%";
    menu.style.transform = "translate(-50%, -50%)";
    menu.style.transition = "1s ease-in-out";

    
    //background-img styling
    backgroundImg.style.top = "50%";
    backgroundImg.style.left = "50%";
    backgroundImg.style.transform = "translate(-50%, -50%) rotate(0deg)";
    backgroundImg.style.width = "50%";
    backgroundImg.style.height = "50%";
    backgroundImg.style.opacity = "0.1";
    backgroundImg.style.transition = "1s ease-in-out";
    // backgroundImg.style.zIndex = "1";

}

function openMenu()
{
    // h2 styling
    h2.style.top = "100px";
    h2.style.left = "743px";
    h2.style.transform = "none";
    h2.style.fontSize = "40px";
    h2.style.transition = "1s ease-in-out";
    h2.style.textShadow = "5px 5px 5px rgba(0, 0, 0, 0.1)";

    // h1 styling
    h1.style.top = "135px";
    h1.style.left = "400px";
    h1.style.transform = "none";
    h1.style.fontSize = "60px";
    h1.style.transition = "1s ease-in-out";
    h1.style.textShadow = "5px 5px 5px rgba(0, 0, 0, 0.1)";

    // menu styling
    menu.style.top = "260px";
    menu.style.transform = "translateX(-50%)";
    menu.style.transition = "1s ease-in-out";
    
    //background-img styling
    backgroundImg.style.top = "20%";
    backgroundImg.style.left = "70%";
    backgroundImg.style.transform = "translate(-50%, -50%) rotate(-10deg)";
    backgroundImg.style.width = "20%";
    backgroundImg.style.height = "20%";
    backgroundImg.style.opacity = "0.8";
    backgroundImg.style.transition = "1.5s ease-in-out";
    // backgroundImg.style.zIndex = "1";
}

function catDeselect() //use this function before calling catSelect()
{
    document.getElementsByTagName("li")[0].style.color = catColorUnselected;
    document.getElementsByTagName("li")[0].style.borderBottomColor = catColorUnselected;
    
    document.getElementsByTagName("li")[1].style.color = catColorUnselected;
    document.getElementsByTagName("li")[1].style.borderBottomColor = catColorUnselected;
    
    document.getElementsByTagName("li")[2].style.color = catColorUnselected;
    document.getElementsByTagName("li")[2].style.borderBottomColor = catColorUnselected;
    
    document.getElementsByTagName("li")[3].style.color = catColorUnselected;
    document.getElementsByTagName("li")[3].style.borderBottomColor = catColorUnselected;
}

function catSelect() //use this function after calling catDeselect()
{
    document.getElementById(menuStatus).style.color = catColorSelected;
    document.getElementById(menuStatus).style.borderBottomColor = catColorSelected;
}

function loadHistory()
{
    unloadDesign();
    unloadSpecs();
    unloadFigures();
    catDeselect();
    catSelect();
    // 

    body.style.backgroundColor = "rgb(46, 131, 82)";
    body.style.transition = "5s ease-in-out";


    container.style.overflow = "visible";
    container.style.height = "500px";
    container.style.top = "280px";
    container.style.opacity = 1;
    container.style.transition = "1.5s ease-in-out"

    historyBox.style.zIndex = "3";
    // historyBox.style.backgroundColor = "green";
    historyBox.style.height = "100%";
    historyBox.style.opacity = "1";
    historyBox.style.transition = "2s ease-in-out";
    
    historyImg = document.querySelector(".history-background");
    historyImg.style.left = "50%";
    historyImg.style.top = "110%";
    historyImg.style.height = "200%";
    historyImg.style.width = "140%";
    historyImg.style.opacity = "0.3";
    historyImg.style.transition = "1s ease-in-out";
}

function loadDesign()
{
    unloadSpecs();
    unloadHistory();
    unloadFigures();
    catDeselect();
    catSelect();
    // 
    
    container.style.overflow = "visible";
    container.style.height = "500px";
    container.style.top = "280px";
    container.style.opacity = 1;
    container.style.transition = "1.5s ease-in-out"

    body.style.backgroundColor = "rgb(117, 111, 26)";
    body.style.transition = "5s ease-in-out";

    
    designBox.style.zIndex = "3";
    // designBox.style.backgroundColor = "yellow";
    designBox.style.height = "100%";
    designBox.style.opacity = "1";
    designBox.style.transition = "2s ease-in-out";
    
    designImg = document.querySelector(".design-background");
    designImg.style.left = "45%";
    designImg.style.top = "120%";
    designImg.style.height = "180%";
    designImg.style.width = "100%";
    designImg.style.opacity = "0.3";
    designImg.style.transition = "1s ease-in-out";

}

function loadSpecs()
{
    unloadDesign();
    unloadHistory();
    unloadFigures();
    catDeselect();
    catSelect();
    // 
    // container.style.display = "block";
    container.style.overflow = "visible";
    container.style.height = "500px";
    container.style.top = "280px";
    container.style.opacity = 1;
    container.style.transition = "1.5s ease-in-out"

    body.style.backgroundColor = "rgb(103, 50, 138)";
    body.style.transition = "5s ease-in-out";

    specsBox.style.zIndex = "3";
    // specsBox.style.backgroundColor = "purple";
    specsBox.style.top = "";
    specsBox.style.height = "100%";
    specsBox.style.opacity = "1";
    specsBox.style.transition = "2s ease-in-out";
}

function loadFigures()
{
    unloadDesign();
    unloadSpecs();
    unloadHistory();
    catDeselect();
    catSelect();
    // 
    container.style.overflow = "visible";
    container.style.height = "500px";
    container.style.top = "280px";
    container.style.opacity = 1;
    container.style.transition = "1.5s ease-in-out"
    
    body.style.backgroundColor = "rgb(82, 39, 33)";
    body.style.transition = "5s ease-in-out";

    figuresBox.style.zIndex = "3";
    figuresBox.style.backgroundColor = "brown";
    figuresBox.style.height = "100%";
    figuresBox.style.opacity = "1";
    figuresBox.style.transition = "2s ease-in-out";
}

function unloadDesign()
{
    container.style.height = "0px";
    container.style.top = "500px";
    container.style.opacity = 0;
    container.style.transition = "0.5s ease-in-out"
    container.style.overflow = "hidden";
    
    body.style.backgroundColor = backgroundInitial;
    body.style.transition = "3s ease-in-out";

    designBox.style.zIndex = "1";
    // designBox.style.backgroundColor = "white";
    designBox.style.height = "0%";
    designBox.style.opacity = "0";
    designBox.style.transition = "2s ease-in-out";
    
    designImg = document.querySelector(".design-background");
    designImg.style.top = "180%";
    designImg.style.height = "60%";
    designImg.style.width = "30%";
    designImg.style.opacity = "0";
    designImg.style.transition = "1s ease-in-out";
}

function unloadSpecs()
{
    container.style.height = "0px";
    container.style.top = "500px";
    container.style.opacity = 0;
    container.style.transition = "0.5s ease-in-out"
    container.style.overflow = "hidden";
    
    body.style.backgroundColor = backgroundInitial;
    body.style.transition = "3s ease-in-out";
    
    specsBox.style.zIndex = "1";
    // specsBox.style.backgroundColor = "white";
    specsBox.style.height = "0%";
    specsBox.style.opacity = "0";
    specsBox.style.transition = "2s ease-in-out";

}

function unloadHistory()
{
    container.style.height = "0px";
    container.style.top = "500px";
    container.style.opacity = 0;
    container.style.transition = "0.5s ease-in-out"
    container.style.overflow = "hidden";

    body.style.backgroundColor = backgroundInitial;
    body.style.transition = "3s ease-in-out";

    historyBox.style.zIndex = "1";
    // historyBox.style.backgroundColor = "white";
    historyBox.style.height = "0%";
    historyBox.style.opacity = "0";
    historyBox.style.transition = "2s ease-in-out";
    
    historyImg = document.querySelector(".history-background");
    historyImg.style.top = "180%";
    historyImg.style.height = "60%";
    historyImg.style.width = "30%";
    historyImg.style.opacity = "0";
    historyImg.style.transition = "1s ease-in-out";
}

function unloadFigures()
{
    container.style.height = "0px";
    container.style.top = "500px";
    container.style.opacity = 0;
    container.style.transition = "0.5s ease-in-out"
    container.style.overflow = "hidden";
    
    body.style.backgroundColor = backgroundInitial;
    body.style.transition = "3s ease-in-out";
    
    figuresBox.style.zIndex = "1";
    // figuresBox.style.backgroundColor = "white";
    figuresBox.style.height = "0%";
    figuresBox.style.opacity = "0";
    figuresBox.style.transition = "2s ease-in-out";
}

function unloadAll()
{
    unloadDesign();
    unloadSpecs();
    unloadHistory();
    unloadFigures();
}

function btnClick(category)
{    
    // h2.style.backgroundColor = "purple";
    // h1.style.backgroundColor = "hotpink";
    // menu.style.backgroundColor = "green";

    

    // alert(menuStatus);

    if (menuStatus == 'closed')
    {
        openMenu();
        menuStatus = category; //this variable can be accessed in order to determine which category is opened (if any) as well as to pass the name of the opened category directly inside the catSelect() function
        // alert(menuStatus);

        switch(category) { //update the menuStatus variable and then load the opened page with the appropriate sub-view
            case 'design':
                loadDesign();
            break;
            case 'specs':
                loadSpecs();
            break;
            case 'history':
                loadHistory();
            break;
            case 'figures':
                loadFigures();
            break;
            default:
                // code block
            break;
        }
    }

    else if (menuStatus != 'closed')
    {
        // alert ('menuStatus ='+menuStatus+' and category = '+category);
        if (category == menuStatus)
        {
            menuStatus = 'closed';
            catDeselect();

            unloadAll();

            closeMenu();
        }   
        
        // alert('menuStatus != closed');
        else if (category != menuStatus)
        {
            // openMenu();
            // menuStatus = category; //this variable can be accessed in order to determine which category is opened (if any) as well as to pass the name of the opened category directly inside the catSelect() function
            // alert(menuStatus);
            // alert ('menuStatus ='+menuStatus+' and category = '+category);

            switch(category) { //update the menuStatus variable and then load the opened page with the appropriate sub-view
                case 'design':
                    menuStatus = category;
                    loadDesign();
                break;
                case 'specs':
                    menuStatus = category;
                    loadSpecs();
                break;
                case 'history':
                    menuStatus = category;
                    // alert ('menuStatus ='+menuStatus+' and category = '+category);
                    loadHistory();
                    // alert('loaded history');
                break;
                case 'figures':
                    menuStatus = category;
                    loadFigures();
                break;
                default:
                    // code block
                break;
            }
        }
    }
}