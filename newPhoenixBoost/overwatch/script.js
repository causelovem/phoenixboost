/*BUTTONS TO GO*/
function goToBlockByID(id)
{
    if (document.body.clientWidth < 800)
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

    if (document.body.clientWidth > 799)
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
            $('#inpEmail').css("box-shadow", "0 5px 0 0 #26C281");
        }
    }
    else
    {
        if ($('#inpEmail').val() == '')
        {
            $('#inpEmail').css("border-bottom", "2px solid #C33C3C");
            $('#inpEmail').css("margin-bottom", "29px");
            return 1;
        }
        else
        if ($('#inpEmail').val().search(pattern) != 0)
        {
            $('#inpEmail').css("border-bottom", "2px solid #C33C3C");
            $('#inpEmail').css("margin-bottom", "29px");
            return 1;
        }
        else
        {
            $('#inpEmail').css("border-bottom", "1px solid #rgba(0,0,0,0.2");
            $('#inpEmail').css("margin-bottom", "30px");
        }
    }

    return 0;
}

function checkFullName()
{
    if (document.body.clientWidth > 799)
    {
        if ($('#inpName').val() == '')
        {
            $('#inpName').css("box-shadow", "0 5px 0 0 #C33C3C");
            return 1;
        }
        else
        {
            $('#inpName').css("box-shadow", "0 5px 0 0 #26C281");
        }
    }
    else
    {
        if ($('#inpName').val() == '')
        {
            $('#inpName').css("border-bottom", "2px solid #C33C3C");
            $('#inpName').css("margin-bottom", "29px");
            return 1;
        }
        else
        {
            $('#inpName').css("border-bottom", "2px solid #rgba(0,0,0,0.2)");
            $('#inpName').css("margin-bottom", "30px");
        }  
    }

    return 0;
}
/*******/


/*RANKBOOST*/
function countRankPrice()
{
    boostPrice = 0;

    for (var i = Number(curSR); i < Number(disSR); i++)
    {
        if (Number(i) <= 1499) boostPrice += 0.02;
        else
        if (Number(i) <= 1999) boostPrice += 0.03;
        else
        if (Number(i) <= 2499) boostPrice += 0.04;
        else
        if (Number(i) <= 2999) boostPrice += 0.05;
        else
        if (Number(i) <= 3499) boostPrice += 0.09;
        else
        if (Number(i) <= 3749) boostPrice += 0.22;
        else
        if (Number(i) <= 3999) boostPrice += 0.26;
        else
        if (Number(i) <= 4099) boostPrice += 0.5;
        else
        if (Number(i) <= 4199) boostPrice += 0.8;
        else
        if (Number(i) <= 4299) boostPrice += 1.3;
        else
        if (Number(i) <= 4400) boostPrice += 1.7;
    }

    boostPrice *= coef;

    if (soloDuo == "duo")
        boostPrice *= 1.75;

    if (currency == "usd")
    {
        document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "$";
        document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " in dollars";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " in Euro";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " in rubles";
    }
}

function getRank(sr, side)
{
    var tmpRank = 1;
    if (Number(sr) <= 1499)
        tmpRank = 1;
    else
    if (Number(sr) <= 1999)
        tmpRank = 2;
    else
    if (Number(sr) <= 2499)
        tmpRank = 3;
    else
    if (Number(sr) <= 2999)
        tmpRank = 4;
    else
    if (Number(sr) <= 3499)
        tmpRank = 5;
    else
    if (Number(sr) <= 3999)
        tmpRank = 6;
    else
    if (Number(sr) <= 4199)
        tmpRank = 7;
    else
    if (Number(sr) >= 4200)
        tmpRank = 8;

    if (side == "left")
        curRank = tmpRank;
    else
        disRank = tmpRank;
}

function displayLeftPic(sr)
{
    side = "left";

    if (Number(sr) >= 4350)
        sr = 4350;
    if (Number(sr) <= 1)
        sr = 1;

    if ($('#curSR').val() == '')
        sr = 1;

    if ((/[a-z]/i.test(sr)) || (/[а-я]/i.test(sr)) || (/[+-/()"'=!?@#$%^&*_{},.|]/.test(sr)))
        sr = 1;

    displayPic(sr);
}

function displayRightPic(sr)
{
    side = "right";

    if (Number(sr) >= 4400)
        sr = 4400;
    if (Number(sr) <= 50)
        sr = 50;

    if ($('#disSR').val() == '')
        sr = 50;

    if ((/[a-z]/i.test(sr)) || (/[а-я]/i.test(sr)) || (/[+-/()"'=!?@#$%^&*_{},.|]/.test(sr)))
        sr = 50;

    displayPic(sr);
}

function displayPic(sr)
{
    if (side == "left")
    {
        $("#" + side + "Rank" + curRank).css("display", "none");
        curSR = sr;
        getRank(sr, side);

        if ((Number(curSR) >= Number(disSR)) || ((Math.abs(disSR - curSR) < 50)))
        {
            $("#rightRank" + disRank).css("display", "none");
            disSR = curSR - (-50);

            if (disSR >= 4400)
                disSR = 4400;
            getRank(disSR, "right");
            $("#rightRank" + disRank).css("display", "block");
        }

        if ((curSR >= 3500) && (soloDuo == "duo"))
        {
            $("#leftRank" + curRank).css("display", "none");

            soloDuo = "solo"
            document.getElementById('invisibleSoloDuo').value = "Solo";
            alert('Sorry, the duo boost service is available only up to 3500SR');
            $('.chosen').css("top", "0");
            $('.duo').css("opacity", "0.6");
            $('.solo').css("opacity", "1");
            curSR = 3450;
            disSR = 3500;
            getRank(curSR, "left");

            getRank(disSR, "right");
            $("#rightRank" + disRank).css("display", "block");
        }

        $("#leftRank" + curRank).css("display", "block");
    }
    else
    {
        $("#" + side + "Rank" + disRank).css("display", "none");
        disSR = sr;
        getRank(sr, side);

        if ((Number(disSR) <= Number(curSR)) || (Math.abs(disSR - curSR) < 50))
        {
            $("#leftRank" + curRank).css("display", "none");
            curSR = disSR - 50;

            if (curSR <= 1)
                curSR = 1;
            getRank(curSR, "left");
            $("#leftRank" + curRank).css("display", "block");
        }

        if ((disSR > 3500) && ((soloDuo == "duo")))
        {
            $("#leftRank" + curRank).css("display", "none");

            soloDuo = "solo"
            document.getElementById('invisibleSoloDuo').value = "Solo";
            alert('Sorry, the duo boost service is available only up to 3500SR');
            $('.chosen').css("top", "0");
            $('.duo').css("opacity", "0.6");
            $('.solo').css("opacity", "1");
            curSR = 3450;
            disSR = 3500;
            getRank(disSR, "right");

            getRank(curSR, "left");
            $("#leftRank" + curRank).css("display", "block");
        }

        $("#rightRank" + disRank).css("display", "block");
    }

    document.getElementById('curSR').value = curSR;
    document.getElementById('disSR').value = disSR;

    countRankPrice();
}
/*******/


/*PLACEMENT*/
function countPlacementsPrice()
{
    placementsPrice = 0;

    if (document.getElementById('invisiblePlacementsRank').value == "low rank")
        placementsPrice = 15 * coef;
    else
    if (document.getElementById('invisiblePlacementsRank').value == "diamond")
        placementsPrice = 20 * coef;
    else
    if (document.getElementById('invisiblePlacementsRank').value == "master")
        placementsPrice = 30 * coef;
    else
    if (document.getElementById('invisiblePlacementsRank').value == "grand master")
        placementsPrice = 45 * coef;
    else
    if (document.getElementById('invisiblePlacementsRank').value == "fresh diamond")
        placementsPrice = 20 * coef;
    else
    if (document.getElementById('invisiblePlacementsRank').value == "fresh master")
        placementsPrice = 30 * coef;

    if (currency == "usd")
    {
        document.getElementById('placementsPrice').innerHTML = placementsPrice.toFixed(0) + "$";
        document.getElementById('invisiblePrice').value = placementsPrice.toFixed(0) + " in dollars";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('placementsPrice').innerHTML = placementsPrice.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = placementsPrice.toFixed(0) + " in Euro";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('placementsPrice').innerHTML = placementsPrice.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = placementsPrice.toFixed(0) + " in rubles";
    }
}
function mouselogPlacements(event) 
{
    if (event.type == "mouseover")
    {
        if (placements != event.target.id)
            $('#' + event.target.id).css("filter", "drop-shadow(-3px -3px 0px #c2c2c2) drop-shadow(3px -3px 0px #c2c2c2) drop-shadow(-3px 3px 0px #c2c2c2) drop-shadow(3px 3px 0px #c2c2c2)");
    }
    else
    if (event.type == "mouseout")
    {
        if (placements != event.target.id)
            $('#' + event.target.id).css("filter", "none");
    }
    else
    if (event.type == "click")
    {
        $('#' + placements).css("filter", "none");
        placements = event.target.id;
        $('#' + placements).css("filter", "drop-shadow(-3px -3px 0px #C33C3C) drop-shadow(3px -3px 0px #C33C3C) drop-shadow(-3px 3px 0px #C33C3C) drop-shadow(3px 3px 0px #C33C3C)");
        
        if (placements == "placementIcon1")
        {
            document.getElementById('invisiblePlacementsRank').value = "low rank"
            document.getElementById('invisiblePrevRank').value = "Yes";
        }
        else
        if (placements == "placementIcon2")
        {
            document.getElementById('invisiblePlacementsRank').value = "diamond"
            document.getElementById('invisiblePrevRank').value = "Yes";
        }
        else
        if (placements == "placementIcon3")
        {
            document.getElementById('invisiblePlacementsRank').value = "master"
            document.getElementById('invisiblePrevRank').value = "Yes";
        }
        else
        if (placements == "placementIcon4")
        {
            document.getElementById('invisiblePlacementsRank').value = "grand master"
            document.getElementById('invisiblePrevRank').value = "Yes";
        }
        else
        if (placements == "placementIcon5")
        {
            document.getElementById('invisiblePlacementsRank').value = "fresh diamond"
            document.getElementById('invisiblePrevRank').value = "No";
        }
        else
        if (placements == "placementIcon6")
        {
            document.getElementById('invisiblePlacementsRank').value = "fresh master"
            document.getElementById('invisiblePrevRank').value = "No";
        }
    }

    countPlacementsPrice();
}
/*******/


/*ANTIDECAY*/
function countAntiDecayPrice()
{
    antiDecayPrice = 0;

    if (document.getElementById('invisibleAntiDecayRank').value == "diamond")
        antiDecayPrice = 15 * coef;
    else
    if (document.getElementById('invisibleAntiDecayRank').value == "master")
        antiDecayPrice = 25 * coef;
    else
    if (document.getElementById('invisibleAntiDecayRank').value == "grand master")
        antiDecayPrice = 35 * coef;

    if (currency == "usd")
    {
        document.getElementById('antiDecayPrice').innerHTML = antiDecayPrice.toFixed(0) + "$";
        document.getElementById('invisiblePrice').value = antiDecayPrice.toFixed(0) + " in dollars";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('antiDecayPrice').innerHTML = antiDecayPrice.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = antiDecayPrice.toFixed(0) + " in Euro";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('antiDecayPrice').innerHTML = antiDecayPrice.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = antiDecayPrice.toFixed(0) + " in rubles";
    }
}

function mouselogDecay(event) 
{
    if (event.type == "mouseover")
    {
        if (antidecay != event.target.id)
            $('#' + event.target.id).css("filter", "drop-shadow(-3px -3px 0px #c2c2c2) drop-shadow(3px -3px 0px #c2c2c2) drop-shadow(-3px 3px 0px #c2c2c2) drop-shadow(3px 3px 0px #c2c2c2)");
    }
    else
    if (event.type == "mouseout")
    {
        if (antidecay != event.target.id)
            $('#' + event.target.id).css("filter", "none");
    }
    else
    if (event.type == "click")
    {
        $('#' + antidecay).css("filter", "none");
        antidecay = event.target.id;
        $('#' + antidecay).css("filter", "drop-shadow(-3px -3px 0px #C33C3C) drop-shadow(3px -3px 0px #C33C3C) drop-shadow(-3px 3px 0px #C33C3C) drop-shadow(3px 3px 0px #C33C3C)");
    
        if (antidecay == "antiDecayImg1")
            document.getElementById('invisibleAntiDecayRank').value = "diamond"
        else
        if (antidecay == "antiDecayImg2")
            document.getElementById('invisibleAntiDecayRank').value = "master"
        else
        if (antidecay == "antiDecayImg3")
            document.getElementById('invisibleAntiDecayRank').value = "grand master"
    }

    countAntiDecayPrice()
}
/*******/


if (document.body.clientWidth > 799)
{
    var img = Math.floor(Math.random() * 4) + 1;
    $('.main').css("background-image", "url('img/bg" + img + ".jpg')");
}
else
{
    var img = Math.floor(Math.random() * 4) + 1;
    $('.main').css("background-image", "url('img/bg" + img + "_mobile.jpg')");

    var mcb = $('.mobCloseButton');
    for (var i = 0; i < mcb.length; i++) 
    {
        mcb[i].innerHTML = '<img src="img/menuCloseButton.png">';
    }

    $('#purchaseButton').removeClass('centerButton');
    $('#submitButton').removeClass('centerButton');
}


for (var i = 2; i < 9; i++)
{
    $("#leftRank" + i).css("display", "none");
    $("#rightRank" + i).css("display", "none");
}

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

document.getElementById('curSR').value = curSR;
document.getElementById('disSR').value = disSR;

document.getElementById('invisibleSoloDuo').value = "Solo";
countRankPrice();

var placements = "placementIcon2";
document.getElementById('invisiblePlacementsRank').value = "diamond";
document.getElementById('invisiblePrevRank').value = "Yes";
$('#placementIcon2').css("filter", "drop-shadow(-3px -3px 0px #C33C3C) drop-shadow(3px -3px 0px #C33C3C) drop-shadow(-3px 3px 0px #C33C3C) drop-shadow(3px 3px 0px #C33C3C)");
countPlacementsPrice();

var antidecay = "antiDecayImg2";
document.getElementById('invisibleAntiDecayRank').value = "master";
$('#antiDecayImg2').css("filter", "drop-shadow(-3px -3px 0px #C33C3C) drop-shadow(3px -3px 0px #C33C3C) drop-shadow(-3px 3px 0px #C33C3C) drop-shadow(3px 3px 0px #C33C3C)");
countAntiDecayPrice();

document.getElementById('inpEmail').value = "";
document.getElementById('inpName').value = "";
document.getElementById('inpMessage').value = "";

document.getElementById('invisibleBoostType').value = "rank boost";

// document.getElementById('faq').scrollTop = 0;
// document.getElementById('contacts').scrollTop = 0;

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


$(document).ready(function(){ $('#leftUp').click(function() { displayLeftPic(Number(curSR) + 50); });});
$(document).ready(function(){ $('#rightUp').click(function() { displayRightPic(Number(disSR) + 50); });});
$(document).ready(function(){ $('#leftDown').click(function() { displayLeftPic(Number(curSR) - 50); });});
$(document).ready(function(){ $('#rightDown').click(function() { displayRightPic(Number(disSR) - 50); });});


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

                                                                               // $('body').addClass('fixed');
        //document.body.style.overflow = 'hidden';
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
        //document.body.style.overflow = 'scroll';
                                                                               // $('body').removeClass('fixed');
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


