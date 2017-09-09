function countRankPrice()
{
    boostPrice = 0;

    for (var i = Number(curSR); i < Number(disSR); i++)
    {
        if (Number(i) <= 1499) boostPrice += 0.02 * coef;
        else
        if (Number(i) <= 1999) boostPrice += 0.03 * coef;
        else
        if (Number(i) <= 2499) boostPrice += 0.04 * coef;
        else
        if (Number(i) <= 2999) boostPrice += 0.05 * coef;
        else
        if (Number(i) <= 3499) boostPrice += 0.09 * coef;
        else
        if (Number(i) <= 3749) boostPrice += 0.18 * coef;
        else
        if (Number(i) <= 3999) boostPrice += 0.22 * coef;
        else
        if (Number(i) <= 4099) boostPrice += 0.5 * coef;
        else
        if (Number(i) <= 4199) boostPrice += 0.8 * coef;
        else
        if (Number(i) <= 4299) boostPrice += 1.3 * coef;
        else
        if (Number(i) <= 4400) boostPrice += 1.7 * coef;
    }

    if ($('#soloDuo').prop('checked'))
    {
        boostPrice = boostPrice * 1.5;
    }

    if (currency == "usd")
    {
        document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "$";
        document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " в долларах";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " в евро";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " в рублях";
    }
}

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
        document.getElementById('invisiblePrice').value = antiDecayPrice.toFixed(0) + " в долларах";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('antiDecayPrice').innerHTML = antiDecayPrice.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = antiDecayPrice.toFixed(0) + " в евро";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('antiDecayPrice').innerHTML = antiDecayPrice.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = antiDecayPrice.toFixed(0) + " в рублях";
    }
}

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
        document.getElementById('invisiblePrice').value = placementsPrice.toFixed(0) + " в долларах";
    }
    else
    if (currency == "eur")
    {
        document.getElementById('placementsPrice').innerHTML = placementsPrice.toFixed(0) + "&euro;";
        document.getElementById('invisiblePrice').value = placementsPrice.toFixed(0) + " в евро";
    }
    else
    if (currency == "rub")
    {
        document.getElementById('placementsPrice').innerHTML = placementsPrice.toFixed(0) + "&#8381;";
        document.getElementById('invisiblePrice').value = placementsPrice.toFixed(0) + " в рублях";
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

        if ((curSR >= 3500) && ($('#soloDuo').prop('checked')))
        {
            $("#leftRank" + curRank).css("display", "none");

            $('#soloDuo').prop('checked', false);
            document.getElementById('invisibleSoloDuo').value = "Solo";
            alert('Извините, услуга дуо буста предоставляется только до 3500SR');
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

        if ((disSR > 3500) && ($('#soloDuo').prop('checked')))
        {
            $("#leftRank" + curRank).css("display", "none");

            $('#soloDuo').prop('checked', false);
            document.getElementById('invisibleSoloDuo').value = "Solo";
            alert('Извините, услуга дуо буста предоставляется только до 3500SR');
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

function checkPrevRank()
{
    if (document.getElementById('prevRank').value == "yes")
    {
        $('#placementsPrevImg').css("display", "block");
        $('#placementsFreshImg').css("display", "none");
        $('#placementsPrice').css("display", "block");
        $('#placementsOrderButton').css("display", "block");
        $('#placementsGames').css("display", "block");

        $('#placementsPrev1').css("filter", "none");
        $('#placementsPrev1').css("width", "110px");
        $('#placementsPrev2').css("filter", "none");
        $('#placementsPrev2').css("width", "110px");
        $('#placementsPrev3').css("filter", "none");
        $('#placementsPrev3').css("width", "110px");
        $('#placementsPrev4').css("filter", "none");
        $('#placementsPrev4').css("width", "110px");

        $('#placementsPrev6').css("filter", "none");
        $('#placementsPrev6').css("width", "110px");
        $('#placementsPrev7').css("filter", "none");
        $('#placementsPrev7').css("width", "110px");

        $('#placementsPrev5').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev5').css("width", "120px");
        document.getElementById('invisiblePlacementsRank').value = "diamond";
        countPlacementsPrice();
    }
    else
    if (document.getElementById('prevRank').value == "no")
    {
        $('#placementsPrevImg').css("display", "none");
        $('#placementsFreshImg').css("display", "block");
        $('#placementsPrice').css("display", "block");
        $('#placementsOrderButton').css("display", "block");
        $('#placementsGames').css("display", "block");

        $('#placementsFresh6').css("filter", "none");
        $('#placementsFresh6').css("width", "150px");
        $('#placementsFresh5').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsFresh5').css("width", "160px");
        document.getElementById('invisiblePlacementsRank').value = "diamond";
        countPlacementsPrice();
    }
    else
    if (document.getElementById('prevRank').value == "prevRank")
    {
        $('#placementsPrevImg').css("display", "none");
        $('#placementsFreshImg').css("display", "none");
        $('#placementsPrice').css("display", "none");
        $('#placementsOrderButton').css("display", "none");
        $('#placementsGames').css("display", "none");
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

function noneBoostType()
{
    if (boostTypeMas[curType] == "БУСТ РАНГА")
    {
        $('#rankBoost').css("display", "none");
        $('.rankBoard').css("display", "none");
    }
    else
    if (boostTypeMas[curType] == "КАЛИБРОВКА")
    {
        $('#placements').css("display", "none");
        $('.placementsBoard').css("display", "none");
    }
    else
    if (boostTypeMas[curType] == "anti-decay")
    {
        $('#antiDecay').css("display", "none");
        $('.antiDecayBoard').css("display", "none");
    }
}

function blockBoostType()
{
    if (boostTypeMas[curType] == "БУСТ РАНГА")
    {
        $('#rankBoost').css("display", "block");
        $('.rankBoard').css("display", "block");

        $('#leftChange').css("display", "block");
        $('#rightChange').css("display", "block");

        document.getElementById('changeBoostTextLeft').innerHTML = "anti-decay";
        document.getElementById('changeBoostTextRight').innerHTML = "КАЛИБРОВКА";
        
        countRankPrice();
    }
    else
    if (boostTypeMas[curType] == "КАЛИБРОВКА")
    {
        $('#placements').css("display", "block");
        $('.placementsBoard').css("display", "block");

        $('#leftChange').css("display", "block");
        $('#rightChange').css("display", "block");

        document.getElementById('changeBoostTextLeft').innerHTML = "БУСТ РАНГА";
        document.getElementById('changeBoostTextRight').innerHTML = "anti-decay";
        
        countPlacementsPrice();
    }
    else
    if (boostTypeMas[curType] == "anti-decay")
    {
        $('#antiDecay').css("display", "block");
        $('.antiDecayBoard').css("display", "block");

        $('#leftChange').css("display", "block");
        $('#rightChange').css("display", "block");

        document.getElementById('changeBoostTextLeft').innerHTML = "КАЛИБРОВКА";
        document.getElementById('changeBoostTextRight').innerHTML = "БУСТ РАНГА";
        
        countAntiDecayPrice();
    }
}

for (var i = 2; i < 9; i++)
{
    $("#leftRank" + i).css("display", "none");
    $("#rightRank" + i).css("display", "none");
}

var curRank = 1;
var disRank = 1;

var curSR = 1;
var disSR = 50;

var boostPrice = 1;
var antiDecayPrice = 25;
var placementsPrice = 25;
var side = "left";
var coef = 1;
var usdCoef = 1, eurCoef = 0.84, rubCoef = 58.5;
var currency = "usd";

var boostTypeMas = ["БУСТ РАНГА", "КАЛИБРОВКА", "anti-decay"];
var curType = 0;
var maxType = 3;

var pattern = /^\s*[\.a-zа-я0-9_-]+@[a-zа-я0-9-]+\.([a-zа-я]{1,6}\.)?[a-zа-я]{2,6}\s*$/i;

document.getElementById('curSR').value = curSR;
document.getElementById('disSR').value = disSR;

document.getElementById('inpEmail').value = "";
document.getElementById('inpName').value = "";
document.getElementById('inpMessage').value = "";

document.getElementById('faq').scrollTop = 0;
document.getElementById('contacts').scrollTop = 0;

$(document).ready(function()
{
    $('#soloDuo').prop('checked', false);
});

document.getElementById('invisibleSoloDuo').value = "Solo";

document.getElementById('boostPrice').innerHTML = boostPrice.toFixed(0) + "$";
document.getElementById('invisiblePrice').value = boostPrice.toFixed(0) + " в долларах";

document.getElementById('invisibleBoostType').value = "БУСТ РАНГА";

document.getElementById('invisiblePlacementsRank').value = "diamond";
document.getElementById('invisibleAntiDecayRank').value = "master";

$(document).ready(function()
{
    $('#antiDecay6').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
    $('#antiDecay6').css("width", "160px");
});
document.getElementById('antiDecayPrice').innerHTML = antiDecayPrice + "$";

document.getElementById('prevRank').value = "prevRank";
document.getElementById('placementsPrice').innerHTML = placementsPrice + "$";

$(document).ready(function()
{
    $('#soloDuo').click(function()
    {
        if ($('#soloDuo').prop('checked'))
        {
            if ((disSR > 3500) || (curSR > 3500))
            {
                $('#soloDuo').prop('checked', false);
                document.getElementById('invisibleSoloDuo').value = "Solo";
                alert('Извините, услуга дуо буста предоставляется только до 3500SR');
                displayRightPic(3500);
            }
            else
            {
                document.getElementById('invisibleSoloDuo').value = "Duo";
            }
        }
        else
        {
            document.getElementById('invisibleSoloDuo').value = "Solo";
        }

        countRankPrice();
    });
});

$(document).ready(function()
{
    $('#twitchButton').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function(){ $('#leftUp').click(function() { displayLeftPic(Number(curSR) + 50); });});
$(document).ready(function(){ $('#rightUp').click(function() { displayRightPic(Number(disSR) + 50); });});
$(document).ready(function(){ $('#leftDown').click(function() { displayLeftPic(Number(curSR) - 50); });});
$(document).ready(function(){ $('#rightDown').click(function() { displayRightPic(Number(disSR) - 50); });});

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
    $('#rankOrderButton').click(function()
    {
        $('.rankBoard').css("display", "none");
        $('.orderBoard').css("display", "block");

        $('#leftChange').css("display", "none");
        $('#rightChange').css("display", "none");
    });
});

$(document).ready(function()
{
    $('#placementsOrderButton').click(function()
    {
        $('.placementsBoard').css("display", "none");
        $('.orderBoard').css("display", "block");

        $('#leftChange').css("display", "none");
        $('#rightChange').css("display", "none");
    });
});

$(document).ready(function()
{
    $('#antiDecayOrderButton').click(function()
    {
        $('.antiDecayBoard').css("display", "none");
        $('.orderBoard').css("display", "block");

        $('#leftChange').css("display", "none");
        $('#rightChange').css("display", "none");
    });
});

$(document).ready(function()
{
    $('#backButton1').click(function()
    {
        $('.orderBoard').css("display", "none");

        blockBoostType();

        $('#checkEmail').css("display", "none");
        $('#checkEmailValidation').css("display", "none");
        $('#checkFullName').css("display", "none");

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
        $('.submitBoard').css("display", "none");
        $('.orderBoard').css("display", "block");

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

        $('.orderBoard').css("display", "none");
        $('.submitBoard').css("display", "block");

        document.getElementById('orderText2').innerHTML = "Dear " + document.getElementById('inpName').value + "!";

        if (boostTypeMas[curType] == "БУСТ РАНГА")
        {
            if (currency == "usd")
            document.getElementById('orderText3').innerHTML = "ВАШ БУСТ С "
             + Number(curSR) + " ДО " + Number(disSR) + " СТОИТ "
               + boostPrice.toFixed(0) + "$";
            else
            if (currency == "eur")
                document.getElementById('orderText3').innerHTML = "ВАШ БУСТ С "
                 + Number(curSR) + " ДО " + Number(disSR) + " СТОИТ "
                   + boostPrice.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('orderText3').innerHTML = "ВАШ БУСТ С "
                 + Number(curSR) + " ДО " + Number(disSR) + " СТОИТ "
                   + boostPrice.toFixed(0) + "&#8381;";
        }
        else
        if (boostTypeMas[curType] == "КАЛИБРОВКА")
        {
            if (currency == "usd")
                document.getElementById('orderText3').innerHTML = "ВАША КАЛИБРОВКА ДО "
                 + document.getElementById('invisiblePlacementsRank').value + " СТОИТ "
                   + placementsPrice.toFixed(0) + "$";
            else
            if (currency == "eur")
                document.getElementById('orderText3').innerHTML = "Your КАЛИБРОВКА to "
                 + document.getElementById('invisiblePlacementsRank').value + " СТОИТ "
                   + placementsPrice.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('orderText3').innerHTML = "Your КАЛИБРОВКА to "
                 + document.getElementById('invisiblePlacementsRank').value + " СТОИТ "
                   + placementsPrice.toFixed(0) + "&#8381;";
        }
        else
        if (boostTypeMas[curType] == "anti-decay")
        {
            if (currency == "usd")
            document.getElementById('orderText3').innerHTML = "ВАШ anti-decay НА РАНГЕ "
             + document.getElementById('invisibleAntiDecayRank').value + " СТОИТ "
               + antiDecayPrice.toFixed(0) + "$";
            else
            if (currency == "eur")
                document.getElementById('orderText3').innerHTML = "ВАШ anti-decay НА РАНГЕ "
                 + document.getElementById('invisibleAntiDecayRank').value + " СТОИТ "
                   + antiDecayPrice.toFixed(0) + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('orderText3').innerHTML = "ВАШ anti-decay НА РАНГЕ "
                 + document.getElementById('invisibleAntiDecayRank').value + " СТОИТ "
                   + antiDecayPrice.toFixed(0) + "&#8381;";
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
    $('#usd').click(function()
    {
        coef = usdCoef;
        currency = "usd";
        document.getElementById('currency').innerHTML = '<i class="fa fa-usd" aria-hidden="true"></i>';

        countRankPrice();
        countAntiDecayPrice();
        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#eur').click(function()
    {
        coef = eurCoef;
        currency = "eur";
        document.getElementById('currency').innerHTML = '<i class="fa fa-eur" aria-hidden="true"></i>';

        countRankPrice();
        countAntiDecayPrice();
        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#rub').click(function()
    {
        coef = rubCoef;
        currency = "rub";
        document.getElementById('currency').innerHTML = '<i class="fa fa-rub" aria-hidden="true"></i>';

        countRankPrice();
        countAntiDecayPrice();
        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#antiDecay5').click(function()
    {
        document.getElementById('invisibleAntiDecayRank').value = "diamond";
        $('#antiDecay5').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#antiDecay5').css("width", "160px");

        $('#antiDecay6').css("filter", "none");
        $('#antiDecay6').css("width", "150px");
        $('#antiDecay7').css("filter", "none");
        $('#antiDecay7').css("width", "150px");

        countAntiDecayPrice();
    });
});

$(document).ready(function()
{
    $('#antiDecay6').click(function()
    {
        document.getElementById('invisibleAntiDecayRank').value = "master";
        $('#antiDecay6').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#antiDecay6').css("width", "160px");

        $('#antiDecay5').css("filter", "none");
        $('#antiDecay5').css("width", "150px");
        $('#antiDecay7').css("filter", "none");
        $('#antiDecay7').css("width", "150px");

        countAntiDecayPrice();
    });
});

$(document).ready(function()
{
    $('#antiDecay7').click(function()
    {
        document.getElementById('invisibleAntiDecayRank').value = "grand master";
        $('#antiDecay7').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#antiDecay7').css("width", "160px");

        $('#antiDecay5').css("filter", "none");
        $('#antiDecay5').css("width", "150px");
        $('#antiDecay6').css("filter", "none");
        $('#antiDecay6').css("width", "150px");

        countAntiDecayPrice();
    });
});

$(document).ready(function()
{
    $('#lowRank').click(function()
    {
        document.getElementById('invisiblePlacementsRank').value = "low rank";
        $('#placementsPrev1').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev1').css("width", "120px");
        $('#placementsPrev2').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev2').css("width", "120px");
        $('#placementsPrev3').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev3').css("width", "120px");
        $('#placementsPrev4').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev4').css("width", "120px");

        $('#placementsPrev5').css("filter", "none");
        $('#placementsPrev5').css("width", "110px");
        $('#placementsPrev6').css("filter", "none");
        $('#placementsPrev6').css("width", "110px");
        $('#placementsPrev7').css("filter", "none");
        $('#placementsPrev7').css("width", "110px");

        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#placementsPrev5').click(function()
    {
        document.getElementById('invisiblePlacementsRank').value = "diamond";
        $('#placementsPrev5').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev5').css("width", "120px");

        $('#placementsPrev1').css("filter", "none");
        $('#placementsPrev1').css("width", "110px");
        $('#placementsPrev2').css("filter", "none");
        $('#placementsPrev2').css("width", "110px");
        $('#placementsPrev3').css("filter", "none");
        $('#placementsPrev3').css("width", "110px");
        $('#placementsPrev4').css("filter", "none");
        $('#placementsPrev4').css("width", "110px");

        $('#placementsPrev6').css("filter", "none");
        $('#placementsPrev6').css("width", "110px");
        $('#placementsPrev7').css("filter", "none");
        $('#placementsPrev7').css("width", "110px");

        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#placementsPrev6').click(function()
    {
        document.getElementById('invisiblePlacementsRank').value = "master";
        $('#placementsPrev6').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev6').css("width", "120px");

        $('#placementsPrev1').css("filter", "none");
        $('#placementsPrev1').css("width", "110px");
        $('#placementsPrev2').css("filter", "none");
        $('#placementsPrev2').css("width", "110px");
        $('#placementsPrev3').css("filter", "none");
        $('#placementsPrev3').css("width", "110px");
        $('#placementsPrev4').css("filter", "none");
        $('#placementsPrev4').css("width", "110px");

        $('#placementsPrev5').css("filter", "none");
        $('#placementsPrev5').css("width", "110px");
        $('#placementsPrev7').css("filter", "none");
        $('#placementsPrev7').css("width", "110px");

        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#placementsPrev7').click(function()
    {
        document.getElementById('invisiblePlacementsRank').value = "grand master";
        $('#placementsPrev7').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsPrev7').css("width", "120px");

        $('#placementsPrev1').css("filter", "none");
        $('#placementsPrev1').css("width", "110px");
        $('#placementsPrev2').css("filter", "none");
        $('#placementsPrev2').css("width", "110px");
        $('#placementsPrev3').css("filter", "none");
        $('#placementsPrev3').css("width", "110px");
        $('#placementsPrev4').css("filter", "none");
        $('#placementsPrev4').css("width", "110px");

        $('#placementsPrev5').css("filter", "none");
        $('#placementsPrev5').css("width", "110px");
        $('#placementsPrev6').css("filter", "none");
        $('#placementsPrev6').css("width", "110px");

        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#placementsFresh5').click(function()
    {
        document.getElementById('invisiblePlacementsRank').value = "fresh diamond";
        $('#placementsFresh5').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsFresh5').css("width", "160px");

        $('#placementsFresh6').css("filter", "none");
        $('#placementsFresh6').css("width", "150px");

        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#placementsFresh6').click(function()
    {
        document.getElementById('invisiblePlacementsRank').value = "fresh master";
        $('#placementsFresh6').css({'filter': 'drop-shadow(0 0 25px rgba(56, 215, 240, 1)) brightness(1.5)'});
        $('#placementsFresh6').css("width", "160px");

        $('#placementsFresh5').css("filter", "none");
        $('#placementsFresh5').css("width", "150px");

        countPlacementsPrice();
    });
});

$(document).ready(function()
{
    $('#leftChange').click(function()
    {
        noneBoostType();

        if (--curType == -1)
            curType = maxType - 1;

        document.getElementById('invisibleBoostType').value = boostTypeMas[curType];
    
        blockBoostType();
    });
});

$(document).ready(function()
{
    $('#rightChange').click(function()
    {
        noneBoostType();

        if (++curType == maxType)
            curType = 0;

        document.getElementById('invisibleBoostType').value = boostTypeMas[curType];
    
        blockBoostType();
    });
});
