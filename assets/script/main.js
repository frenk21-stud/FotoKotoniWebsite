document.getElementById("currYear").innerHTML = new Date().getFullYear();

//this function gets executed when either the quantity or the option gets changed
function calcPrice() 
{
    var num = document.getElementById("numInput").value;
    var menu = document.getElementById("articleMenu");
    var i = menu.selectedIndex;
    var price;

    switch(i)
    {
        case 1: case 2: case 7: case 11: case 12: case 13:
            price = 500; break;
        case 3:
            price = 300; break;
        case 4:
            price = 50; break;
        case 5: case 10: case 15:
            price = 100; break;
        case 6:
            price = 200; break;
        case 8:
            price = 600; break;
        case 9:
            price = 1000; break;
        case 14:
            price = 10; break;
        default:
            price = 0;
    }

    price *= num;
    if (price!=0)
        document.getElementById("priceInput").value = price;
    else
        document.getElementById("priceInput").value = "";
}

function verifyForm(event) {
    event.preventDefault();
    var isValid = true; //boolean that keeps track of the form's validity
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //already-made regex expression

    //define params for submitForm function
    var fullName = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var article = document.getElementById("articleMenu").value;
    var num = document.getElementById("numInput").value;
    var price = document.getElementById("priceInput").value;
    var desc = document.getElementById("descInput").value;

    //reset errors
    document.getElementById("errorMsg1").innerHTML = "";
    document.getElementById("errorMsg2").innerHTML = "";
    document.getElementById("errorMsg3").innerHTML = "";

    //customize errors
    if (fullName.length < 5)
    {
        document.getElementById("errorMsg1").innerHTML = "Must contain at least 5 characters.";
        isValid = false;
    }
    if (!email.match(emailFormat))
    {
        document.getElementById("errorMsg2").innerHTML = "Invalid email address.";
        isValid = false;
    }
    if (article == "none")
    {
        document.getElementById("errorMsg3").innerHTML = "An article must be chosen.";
        isValid = false;
    }

    //final verification step
    if (isValid == false)
        return;
    else
        submitForm(fullName, email, article, num, price, desc);
}

function submitForm(fullNameParam, emailParam, articleParam, numParam, priceParam, descParam)
{
    var newOrder =
    {
        fullName: fullNameParam,
        email: emailParam,
        article: articleParam,
        num: numParam,
        price: priceParam,
        desc: descParam
    }

    var orders = JSON.parse(localStorage.getItem('newOrder')) || [];
    orders.push(newOrder);
    localStorage.setItem('newOrder', JSON.stringify(orders));

    document.getElementsByClassName("modal_bg")[0].style.display = "block";
}

function handleCheckbox()
{
    var checkbox = document.getElementById("check");
    var wishBtn = document.getElementById("wishBtn")

    if (checkbox.checked == true)
        wishBtn.style.display = "block";
    else
        wishBtn.style.display = "none";
}