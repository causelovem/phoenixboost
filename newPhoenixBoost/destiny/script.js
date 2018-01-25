/*BUTTONS TO GO*/
function goToBlockByID(id)
{
    if (document.body.clientWidth <= 800)
    {
        $('.menu').css("width", "0");

        $('.transparentLayer').css("display", "none");
    }

    var scroll_el = $('#' + id).attr('href');
    if ($(scroll_el).length != 0) 
    {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
}
/*******/

/*PROCESS ORDER*/
function processOrder(id)
{
    if (id == "buttonRank")
    {
        countRankPrice();
        document.getElementById('invisibleBoostType').value = "rank boost";
    }
    else
    if (id == "buttonPlacement")
    {
        countPlacementsPrice();
        document.getElementById('invisibleBoostType').value = "placements";
    }
    else
    if (id == "buttonDecay")
    {
        countAntiDecayPrice();
        document.getElementById('invisibleBoostType').value = "anti-decay";
    }

    $('.transparentLayer').css("display", "block");
    $('.orderBoard').css("display", "block");
}
/*******/


/*CHECKING EMAIL AND NAME*/
function checkEmail()
{
    if ($('#inpEmail').val() == '')
    {
        $('#inpEmail').css("box-shadow", "0 5px 0 0 #C33C3C");
        return 1;
    }
    else
    if ($('#inpEmail').val().search(pattern) != 0)
    {
        $('#inpEmail').css("box-shadow", "0 5px 0 0 #C33C3C");
        return 1;
    }
    else
    {
        $('#inpEmail').css("box-shadow", "0 5px 0 0 #B69D70");
    }

    return 0;
}

function checkFullName()
{
    if ($('#inpName').val() == '')
    {
        $('#inpName').css("box-shadow", "0 5px 0 0 #C33C3C");
        return 1;
    }
    else
    {
        $('#inpName').css("box-shadow", "0 5px 0 0 #B69D70");
    }

    return 0;
}
/*******/


var pattern = /^\s*[\.a-zа-я0-9_-]+@[a-zа-я0-9-]+\.([a-zа-я]{1,6}\.)?[a-zа-я]{2,6}\s*$/i;

var curRank = 1;
var disRank = 1;

var curSR = 1;
var disSR = 50;

var side = "left";
var coef = 1;
var usdCoef = 1, eurCoef = 0.84, rubCoef = 58.5;
var currency = "usd";

var soloDuo = "solo";

// document.getElementById('invisibleSoloDuo').value = "Solo";

document.getElementById('inpEmail').value = "";
document.getElementById('inpName').value = "";
document.getElementById('inpMessage').value = "";

$(document).ready(function()
{
    $('.burgerIcon').click(function()
    {
        $('.menu').css("width", "100%");
        $('.transparentLayer').css("display", "block");
    });
});

$(document).ready(function()
{
    $('#menuClose').click(function()
    {
        $('.menu').css("width", "0");
        $('.transparentLayer').css("display", "none");
    });
});

$(document).ready(function()
{
    $('.solo').click(function()
    {
        soloDuo = "solo"
        document.getElementById('invisibleSoloDuo').value = "Solo";
        $('.chosen').css("top", "0");
        $('.duo').css("opacity", "0.6");
        $('.solo').css("opacity", "1");

        countRankPrice();
    });
});


$(document).ready(function()
{
    $('.duo').click(function()
    {
        if ((disSR > 3500) || (curSR > 3500))
        {
            soloDuo = "solo"
            document.getElementById('invisibleSoloDuo').value = "Solo";
            alert('Sorry, the duo boost service is available only up to 3500SR');
            $('.chosen').css("top", "0");
            $('.duo').css("opacity", "0.6");
            $('.solo').css("opacity", "1");
            displayRightPic(3500);
        }
        else
        {
            soloDuo = "duo"
            document.getElementById('invisibleSoloDuo').value = "Duo";
            $('.chosen').css("top", "30px");
            $('.duo').css("opacity", "1");
            $('.solo').css("opacity", "0.6");
        }

        countRankPrice();
    });
});

$(document).ready(function()
{
    $('.faqButton').click(function()
    {
        if (document.body.clientWidth <= 800)
        {
            $('.menu').css("width", "0");

            $('.transparentLayer').css("display", "none");
        }

        $('.transparentLayer').css("display", "block");
        $('.faq').css("display", "block");
    });
});

$(document).ready(function()
{
    $('.contactButton').click(function()
    {
        if (document.body.clientWidth <= 800)
        {
            $('.menu').css("width", "0");

            $('.transparentLayer').css("display", "none");
        }

        $('.transparentLayer').css("display", "block");
        $('.contacts2').css("display", "block");
    });
});

$(document).ready(function()
{
    $('.closeButton').click(function()
    {
        $('.transparentLayer').css("display", "none");
        $('.orderBoard').css("display", "none");
        $('.submitBoard').css("display", "none");
        $('.faq').css("display", "none");
        $('.contacts2').css("display", "none");
    });
});

$(document).ready(function()
{
    $('.transparentLayer').click(function()
    {
        $('.orderBoard').css("display", "none");
        $('.submitBoard').css("display", "none");
        $('.faq').css("display", "none");
        $('.contacts2').css("display", "none");
        $('.menu').css("width", "0");

        $('.transparentLayer').css("display", "none");
    });
});

$(document).ready(function()
{
    $('.backButton').click(function()
    {
        $('.orderBoard').css("display", "block");
        $('.submitBoard').css("display", "none");
    });
});

$(document).ready(function()
{
    $('#purchaseButton').click(function()
    {
        if ((checkEmail()) || (checkFullName()))
            return;

        if (document.getElementById('invisibleBoostType').value == "rank boost")
        {
            if (currency == "usd")
            document.getElementById('submitOrderDetails').innerHTML = "Your boost from "
             + Number(curSR) + " to " + Number(disSR) + " costs "
               + boostPrice.toFixed(0) + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = "Your boost from "
                 + Number(curSR) + " to " + Number(disSR) + " costs "
                   + boostPrice.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = "Your boost from "
                 + Number(curSR) + " to " + Number(disSR) + " costs "
                   + boostPrice.toFixed(0) + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "placements")
        {
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = "Your placements to "
                 + document.getElementById('invisiblePlacementsRank').value + " costs "
                   + placementsPrice.toFixed(0) + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = "Your placements to "
                 + document.getElementById('invisiblePlacementsRank').value + " costs "
                   + placementsPrice.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = "Your placements to "
                 + document.getElementById('invisiblePlacementsRank').value + " costs "
                   + placementsPrice.toFixed(0) + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "anti-decay")
        {
            if (currency == "usd")
            document.getElementById('submitOrderDetails').innerHTML = "Your anti-decay at the rank of "
             + document.getElementById('invisibleAntiDecayRank').value + " costs "
               + antiDecayPrice.toFixed(0) + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = "Your anti-decay at the rank of "
                 + document.getElementById('invisibleAntiDecayRank').value + " costs "
                   + antiDecayPrice.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = "Your anti-decay at the rank of "
                 + document.getElementById('invisibleAntiDecayRank').value + " costs "
                   + antiDecayPrice.toFixed(0) + "&#8381;";
        }

        document.getElementById('submitEmail').innerHTML = $('#inpEmail').val();
        document.getElementById('submitName').innerHTML = $('#inpName').val();
        document.getElementById('submitMessage').innerHTML = $('#inpMessage').val();

        $('.orderBoard').css("display", "none");
        $('.submitBoard').css("display", "block");
    });
});


