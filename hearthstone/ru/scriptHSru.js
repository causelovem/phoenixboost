function countPrice()
{
    price = 0;

    for (var i = curRank - 1; i >= disRank; i--)
    {
        if (Number(i) <= 0) price += 14 * coef;
        else
        if (Number(i) <= 4) price += 9.5 * coef;
        else
        if (Number(i) <= 9) price += 4.5 * coef;
        else
        if (Number(i) <= 14) price += 3 * coef;
        else
        if (Number(i) <= 19) price += 1.7 * coef;
        else
        if (Number(i) <= 25) price += 1 * coef;
    }


    if (currency == "usd")
    {
        document.getElementById('boostPrice').innerHTML = price + "$";
        document.getElementById('invisiblePrice').value = price + " в долларах";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('boostPrice').innerHTML = price.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = price.toFixed(0) + " в евро";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('boostPrice').innerHTML = price.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = price.toFixed(0) + " в рублях";
    }
}

function displayLeftPic(rank)
{
    side = "left";

    if (Number(rank) >= 25)
        rank = 25;
    if (Number(rank) <= 1)
        rank = 1;

    if ($('#curRank').val() == '')
        rank = 25;

    if ((/[a-z]/i.test(rank)) || (/[а-я]/i.test(rank)) || (/[+-/()"'=!?@#$%^&*_{},.|]/.test(rank)))
        rank = 25;

    displayPic(rank);
}

function displayRightPic(rank)
{
    side = "right";

    if (Number(rank) >= 24)
        rank = 24;
    if (Number(rank) <= 0)
        rank = 0;

    if ($('#disRank').val() == '')
        rank = 24;

    if ((/[a-z]/i.test(rank)) || (/[а-я]/i.test(rank)) || (/[+-/()"'=!?@#$%^&*_{},.|]/.test(rank)))
        rank = 24;

    displayPic(rank);
}

function displayPic(rank)
{
    if (side == "left")
    {
        $("#" + side + "Rank" + curRank).css("display", "none");
        curRank = rank;

        if (Number(curRank) <= Number(disRank))
        {
            $("#rightRank" + disRank).css("display", "none");
            disRank = curRank - 1;
            $("#rightRank" + disRank).css("display", "block");
        }
    }
    else
    {
        $("#" + side + "Rank" + disRank).css("display", "none");
        disRank = rank;

        if (Number(disRank) >= Number(curRank))
        {
            $("#leftRank" + curRank).css("display", "none");
            curRank = disRank - (-1);
            $("#leftRank" + curRank).css("display", "block");
        }
    }

    document.getElementById('curRank').value = curRank;
    if (disRank == 0)
        document.getElementById('disRank').value = "legend";
    else
        document.getElementById('disRank').value = disRank;

    $("#" + side + "Rank" + rank).css("display", "block");

    countPrice();
}

function checkServer()
{
    if (document.getElementById('server').value != "server")
    {
        $('#checkServer').css("display", "none");
        $('#server').css("box-shadow", "none");
    }
}

function checkEmail()
{
    if ($('#inpEmail').val() != '')
    {
        $('#checkEmail').css("display", "none");
        $('#inpEmail').css("box-shadow", "none");
    }

    if ($('#inpEmail').val().search(pattern) == 0)
    {
        $('#checkEmailValidation').css("display", "none");
        $('#inpEmail').css("box-shadow", "none");
    }
}

function checkFullName()
{
    if ($('#inpName').val() != '')
    {
        $('#checkFullName').css("display", "none");
        $('#inpName').css("box-shadow", "none");
    }
}

for (var i = 1; i < 25; i++)
{
    $("#leftRank" + i).css("display", "none");
    $("#rightRank" + (i - 1)).css("display", "none");
}

for (var i = 1; i < 3; i++)
{
    $("#deck" + i).css("display", "none");
}

var curRank = 25;
var disRank = 24;
var price = 1;
var side = "left";
var curDeck = 0;
var maxDeck = 3;
var deckCode = [];
var coef = 1;
var usdCoef = 1, eurCoef = 0.86, rubCoef = 59.1;
var currency = "usd";

var pattern = /^\s*[\.a-zа-я0-9_-]+@[a-zа-я0-9-]+\.([a-zа-я]{1,6}\.)?[a-zа-я]{2,6}\s*$/i;

/*secretMage*/
deckCode[0] = "AAECAf0EBMAB7gLFBIGyAg1xwwG7ApUDqwTmBJYF7AWjtgLXtgKHvQLBwQKYxAIA";
/*valetMage*/
deckCode[1] = "AAECAf0ECMUE7QSKB+wHvwj7DKG3Aum6AguKAcABuwKVA8kDqwSWBaO2Ate2AsHBApjEAgA=";
/*faceShaman*/
deckCode[2] = "AAECAaoIApG8ApS9Ag6BBOUH8AeTCfqqAvuqAqC2Aoe8AtG8Ava9Avm/ApHBApvCAuvCAgA=";

document.getElementById('curRank').value = curRank;
document.getElementById('disRank').value = disRank;

document.getElementById('inpEmail').value = "";
document.getElementById('inpName').value = "";
document.getElementById('inpMessage').value = "";

document.getElementById('server').value = "server";

document.getElementById('faq').scrollTop = 0;
document.getElementById('contacts').scrollTop = 0;

document.getElementById('boostPrice').innerHTML = price + "$";
document.getElementById('invisiblePrice').value = price + " в долларах";


document.getElementById('code').innerHTML = deckCode[0];

$(document).ready(function()
{
    $('.button').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function(){ $('#leftUp').click(function() { displayLeftPic(Number(curRank) - 1); });});
$(document).ready(function(){ $('#rightUp').click(function() { displayRightPic(Number(disRank) - 1); });});
$(document).ready(function(){ $('#leftDown').click(function() { displayLeftPic(Number(curRank) + 1); });});
$(document).ready(function(){ $('#rightDown').click(function() { displayRightPic(Number(disRank) + 1); });});

$(document).ready(function()
{
    $('#inpEmail').blur(function()
    {
        if ($('#inpEmail').val().search(pattern) != 0)
        {
            $('#checkEmail').css("display", "none");
            $('#checkEmailValidation').css("display", "block");
            $('#inpEmail').css({'box-shadow': '0 0 0 2px rgba(207, 0, 15, 1)'});
        }
    });

});

$(document).ready(function()
{ 
    $('#orderButton').click(function()
    {
        if (document.getElementById('server').value == "server")
        {
            $('#checkServer').css("display", "block");
            $('#server').css({'box-shadow': '0 0 0 2px rgba(207, 0, 15, 1)'});
        }
        else
        {
            $('.board1').css("display", "none");
            $('.board2').css("display", "block");
        }
    });
});

$(document).ready(function()
{
    $('#backButton1').click(function()
    {
        $('.board2').css("display", "none");
        $('.board1').css("display", "block");

        $('#checkServer').css("display", "none");
        $('#checkEmail').css("display", "none");
        $('#checkEmailValidation').css("display", "none");
        $('#checkFullName').css("display", "none");

        $('#server').css("box-shadow", "none");
        $('#inpEmail').css("box-shadow", "none");
        $('#inpName').css("box-shadow", "none");

        document.getElementById('inpEmail').value = "";
        document.getElementById('inpName').value = "";
        document.getElementById('inpMessage').value = "";
    });
});

$(document).ready(function()
{
    $('#backButton2').click(function()
    {
        $('.board3').css("display", "none");
        $('.board2').css("display", "block");

        $('#checkEmail').css("display", "none");
        $('#checkEmailValidation').css("display", "none");
        $('#checkFullName').css("display", "none");

        $('#inpEmail').css("box-shadow", "none");
        $('#inpName').css("box-shadow", "none");

        // document.getElementById('inpEmail').value = "";
        // document.getElementById('inpName').value = "";
        // document.getElementById('inpMessage').value = "";
    });
});

$(document).ready(function()
{
    $('#purchaseButton').click(function()
    {
        if ($('#inpEmail').val() == '')
        {
            $('#checkEmailValidation').css("display", "none");
            $('#checkEmail').css("display", "block");
            $('#inpEmail').css({'box-shadow': '0 0 0 2px rgba(207, 0, 15, 1)'});
            
            if ($('#inpName').val() == '')
            {
                $('#checkFullName').css("display", "block");
                $('#inpName').css({'box-shadow': '0 0 0 2px rgba(207, 0, 15, 1)'});
            }
            return;
        }

        if ($('#inpEmail').val().search(pattern) != 0)
        {
            return;
        }

        if ($('#inpName').val() == '')
        {
            $('#checkFullName').css("display", "block");
            $('#inpName').css({'box-shadow': '0 0 0 2px rgba(207, 0, 15, 1)'});
            return;
        }

        $('.board2').css("display", "none");
        $('.board3').css("display", "block");

        document.getElementById('orderText2').innerHTML = "Уважаемый " + document.getElementById('inpName').value + "!";

        if (disRank == 0)
        {
            if (currency == "usd")
                document.getElementById('orderText3').innerHTML = "Ваш буст с "
                 + Number(curRank) + " до " + "LEGEND" + " на сервере "
                  + document.getElementById('server').value + " стоит "
                   + price + "$";
            else
            if (currency == "eur")
                document.getElementById('orderText3').innerHTML = "Ваш буст с "
                 + Number(curRank) + " до " + "LEGEND" + " на сервере "
                  + document.getElementById('server').value + " стоит "
                   + price.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('orderText3').innerHTML = "Ваш буст с "
                 + Number(curRank) + " до " + "LEGEND" + " на сервере "
                  + document.getElementById('server').value + " стоит "
                   + price.toFixed(0) + "&#8381;";
        }
        else
        {
            if (currency == "usd")
                document.getElementById('orderText3').innerHTML = "Ваш буст с "
                 + Number(curRank) + " до " + Number(disRank) + " на сервере "
                  + document.getElementById('server').value + " стоит "
                   + price + "$";
            else
            if (currency == "eur")
                document.getElementById('orderText3').innerHTML = "Ваш буст с "
                 + Number(curRank) + " до " + Number(disRank) + " на сервере "
                  + document.getElementById('server').value + " стоит "
                   + price.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('orderText3').innerHTML = "Ваш буст с "
                 + Number(curRank) + " до " + Number(disRank) + " на сервере "
                  + document.getElementById('server').value + " стоит "
                   + price.toFixed(0) + "&#8381;";
        }
    });
});

$(document).ready(function()
{
    $('#faqButton').click(function()
    {
        $('.transparentLayer').css("display", "block");
        $('#faq').css("display", "block");
    });
});

$(document).ready(function()
{
    $('#contactsButton').click(function()
    {
        $('.transparentLayer').css("display", "block");
        $('#contacts').css("display", "block");
    });
});

$(document).ready(function()
{
    $('.transparentLayer').click(function()
    {
        $('.transparentLayer').css("display", "none");

        document.getElementById('faq').scrollTop = 0;
        document.getElementById('contacts').scrollTop = 0;

        $('#faq').css("display", "none");
        $('#contacts').css("display", "none");
    });
});

$(document).ready(function()
{
    $('#rightDeck').click(function()
    {
        $("#deck" + curDeck).css("display", "none");

        if (++curDeck == maxDeck)
            curDeck = 0;

        $("#deck" + curDeck).css("display", "block");
        document.getElementById('code').innerHTML = deckCode[curDeck];
    });
});

$(document).ready(function()
{
    $('#leftDeck').click(function()
    {
        $("#deck" + curDeck).css("display", "none");

        if (--curDeck == -1)
            curDeck = maxDeck - 1;

        $("#deck" + curDeck).css("display", "block");
        document.getElementById('code').innerHTML = deckCode[curDeck];
    });
});

$(document).ready(function()
{
    $('#usd').click(function()
    {
        coef = usdCoef;
        currency = "usd";
        document.getElementById('currency').innerHTML = '<i class="fa fa-usd" aria-hidden="true"></i>';
        // $('#currencyButton ul').css("display", "none");

        countPrice();
    });
});

$(document).ready(function()
{
    $('#eur').click(function()
    {
        coef = eurCoef;
        currency = "eur";
        document.getElementById('currency').innerHTML = '<i class="fa fa-eur" aria-hidden="true"></i>';
        // $('#currencyButton ul').css("display", "none");

        countPrice();
    });
});

$(document).ready(function()
{
    $('#rub').click(function()
    {
        coef = rubCoef;
        currency = "rub";
        document.getElementById('currency').innerHTML = '<i class="fa fa-rub" aria-hidden="true"></i>';
        // $('#currencyButton ul').css("display", "none");

        countPrice();
    });
});
