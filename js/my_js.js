
// a function to get element id so we have not each time to type document.getElementById
function elId(id)
{
    return document.getElementById(id);
}

// function to minus product when number of products is only > 1 & calculate the Total
function minus_product()
{
    var num = parseInt(elId('quantity').textContent);
    var price = parseInt(elId('item-price').textContent);

    if( num <= 1 )
        alert('You have to purchase at least 1 item ')

    else
    {
        elId('quantity').textContent = num - 1;
        elId('total-price').textContent = price * (num - 1);
    } 
        
}

// function to increase number of product & calculate the Total
function plus_product()
{
    var num = parseInt (elId('quantity').textContent);
    var price = parseInt(elId('item-price').textContent);

    elId('quantity').textContent = num + 1;
    elId('total-price').textContent = price * (num + 1);

}


// function for add item to favoit or remove it 
function like_or_dislike_item()
{
    var getClass = (elId('favorite')).getAttribute('class');

    // test the class if it s far fa-heart means the item is not in favorite or it's in favorite(fas fa-heart) 
    if( getClass == "far fa-heart" )
    {
        elId('favorite').setAttribute('class','fas fa-heart');
        elId('favorite').style.color = "red";

    }
    else if( getClass == "fas fa-heart" )
    {
        elId('favorite').setAttribute('class','far fa-heart');
        elId('favorite').style.color = "";
    }

}

function delete_item()
{
    var cartItem = elId('cart-item0');
    var confirmation = confirm("Do you want realy To delete this Item");
    if( confirmation )
    {
        cartItem.innerHTML = "";
        var parag = document.createElement('p');
        parag.textContent = "You have no Item to pay !";
        parag.style.textAlign = "center";

        cartItem.appendChild(parag);

    }
}