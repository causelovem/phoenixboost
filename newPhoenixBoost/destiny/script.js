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
    setDefauld();

    if (id == "raids")
    {
        boostStruc.type = 'leviafan';
        boostStruc.difficulty = 'normal';
        boostStruc.soloDuo = 'solo';
        boostStruc.heroCount = '1';

        document.getElementById('boostDescription').innerHTML = "Choose type, difficulty and number of characters.";

        $('.preOrder').css("display", "block");
        $('.raidsBoard').css("display", "block");
        document.getElementById('invisibleBoostType').value = "leviafan";
    }
    else
    if (id == "nightfall")
    {
        boostStruc.type = 'nightfall';
        boostStruc.difficulty = 'normal';
        boostStruc.soloDuo = 'solo';
        boostStruc.heroCount = '1';

        document.getElementById('boostDescription').innerHTML = "Choose difficulty, solo/duo and number of characters.";

        $('.preOrder').css("display", "block");
        $('.nightFallBoard').css("display", "block");
        document.getElementById('invisibleBoostType').value = "nightfall";
    }
    else
    if (id == "powerLvling")
    {
        boostStruc.type = 'powerLvling';
        boostStruc.difficulty = '1-200';
        boostStruc.soloDuo = 'solo';
        boostStruc.heroCount = '1';

        document.getElementById('boostDescription').innerHTML = "Choose your power lvl and lvl you want to get after the boost.";

        document.getElementById('curLvl').value = curLvl;
        document.getElementById('disLvl').value = disLvl;

        $('.preOrder').css("display", "block");
        $('.lvlBoard').css("display", "block");
        document.getElementById('invisibleBoostType').value = "powerLvling";
    }
    else
    if (id == "weaponsQuests")
    {
        boostStruc.type = 'weaponsQuests';
        boostStruc.difficulty = 'midaMulty ';
        boostStruc.soloDuo = 'solo';
        boostStruc.heroCount = '1';

        document.getElementById('boostDescription').innerHTML = "Choose what weapons you want to get.";

        $('#chosenWeaponmidaMulty').css("display", "block");

        $('.preOrder').css("display", "block");
        $('.weaponQuestsBoard').css("display", "block");
        document.getElementById('invisibleBoostType').value = "weaponsQuests";
    }
    else
    if (id == "trialsNine")
    {
        boostStruc.type = 'trialsNine';
        boostStruc.difficulty = '';
        boostStruc.soloDuo = 'solo';
        boostStruc.heroCount = '1';

        document.getElementById('boostDescription').innerHTML = "Choose number of characters.";

        $('.preOrder').css("display", "block");
        $('.nineBoard').css("display", "block");
        document.getElementById('invisibleBoostType').value = "trialsNine";
    }
    else
    if (id == "ironBanner")
    {
        boostStruc.type = 'ironBanner';
        boostStruc.difficulty = '20';
        boostStruc.soloDuo = 'solo';
        boostStruc.heroCount = '1';

        document.getElementById('boostDescription').innerHTML = "Choose number of packs of tokens (1 pack = 20 tokens).";
        document.getElementById('tokenNumbers').innerHTML = "20 tokens";

        $('.preOrder').css("display", "block");
        $('.ironBannerBoard').css("display", "block");
        document.getElementById('invisibleBoostType').value = "ironBanner";
    }

    $('.transparentLayer').css("display", "block");

    calcPrice();
}

function checkLvl(el)
{
    let value = Number(el.value);

    if (el.id == "curLvl")
    {
        if (Number(value) >= 329)
            value = 329;
        if (Number(value) <= 1)
            value = 1;

        if ($('#curLvl').val() == '')
            value = 1;

        if ((/[a-z]/i.test(value)) || (/[а-я]/i.test(value)) || (/[+-/()"'=!?@#$%^&*_{},.|]/.test(value)))
            value = 1;

        if ((value >= disLvl) || (Math.abs(value - disLvl) < 10))
        {
            disLvl = value + 10;
            if (Number(disLvl) >= 330)
                disLvl = 330;
            document.getElementById('disLvl').value = disLvl;
        }

        document.getElementById('curLvl').value = value;
        curLvl = value;
    }
    else
    {
        if (Number(value) >= 330)
            value = 330;
        if (Number(value) <= 10)
            value = 10;

        if ($('#curLvl').val() == '')
            value = 200;

        if ((/[a-z]/i.test(value)) || (/[а-я]/i.test(value)) || (/[+-/()"'=!?@#$%^&*_{},.|]/.test(value)))
            value = 200;

        if ((value <= curLvl) || (Math.abs(value - curLvl) < 10))
        {
            curLvl = value - 10;
            if (Number(curLvl) <= 1)
                curLvl = 1;
            document.getElementById('curLvl').value = curLvl;
        }

        document.getElementById('disLvl').value = value;
        disLvl = value;
    }

    boostStruc.difficulty = String(curLvl) + '-' + String(disLvl);
    calcPrice();
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


/*SLIDE OPTION*/
function setDefauld()
{
    for (var i = 0; i < optOpt.length; i++) 
    {
        $('.' + optOpt[i].classList[1] + ' .chosen').css("left", "0");

        $('.' + optOpt[i].classList[1] + ' div').css("color", "#FFF");
        $('.' + optOpt[i].classList[1] + ' div:nth-child(2)').css("color", "#222");
    }

    $('.raidChois .chosen').css("width", "100px");

    $('#midaMini').css("color", "#FFF");
    $('#ratKing').css("color", "#FFF");
    $('#chosenWeaponmidaMini').css("display", "none");
    $('#chosenWeaponratKing').css("display", "none");

    $('#midaMulty').css("color", "#222");
}

function slideOption(el)
{
    if (el.classList[0] == "leviafan")
    {
        boostStruc.type = 'leviafan';
        $('.raidChois .chosen').css("left", "0");
        $('.raidChois .chosen').css("width", "100px");

        document.getElementById('invisibleBoostType').value = "leviafan";
    }
    else
    if (el.classList[0] == "eaterOfWorlds")
    {
        boostStruc.type = 'eaterOfWorlds';
        $('.raidChois .chosen').css("left", "100px");
        $('.raidChois .chosen').css("width", "160px");

        document.getElementById('invisibleBoostType').value = "eaterOfWorlds";        
    }
    else
    if (el.classList[0] == "normal")
    {
        boostStruc.difficulty = 'normal';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "0");
    }
    else
    if (el.classList[0] == "prestige")
    {
        boostStruc.difficulty = 'prestige';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "100px");
    }
    else
    if (el.classList[0] == "solo")
    {
        boostStruc.soloDuo = 'solo';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "0");
    }
    else
    if (el.classList[0] == "duo")
    {
        boostStruc.soloDuo = 'duo';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "70px");
    }
    else
    if (el.classList[0] == "one")
    {
        boostStruc.heroCount = '1';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "0");
    }
    else
    if (el.classList[0] == "two")
    {
        boostStruc.heroCount = '2';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "60px");
    }
    else
    if (el.classList[0] == "three")
    {
        boostStruc.heroCount = '3';
        $('.' + el.parentNode.classList[1] + ' .chosen').css("left", "120px");
    }
    else
    if (el.id == "ironMinus")
    {
        boostStruc.difficulty = String(Number(boostStruc.difficulty) - 20);
        if (boostStruc.difficulty == '0')
            boostStruc.difficulty = '20';
        document.getElementById('tokenNumbers').innerHTML =  boostStruc.difficulty + " tokens";
    }
    else
    if (el.id == "ironPlus")
    {
        boostStruc.difficulty = String(Number(boostStruc.difficulty) + 20);
        if (boostStruc.difficulty == '220')
            boostStruc.difficulty = '200';
        document.getElementById('tokenNumbers').innerHTML =  boostStruc.difficulty + " tokens";
    }
    else
    if ((el.id == "midaMini") || (el.id == "midaMulty") || (el.id == "ratKing"))
    {
        let weap = String(el.id);
        let ind = boostStruc.difficulty.indexOf(weap);

        if (ind == -1)
        {
            boostStruc.difficulty += weap +  " ";
            $('#chosenWeapon' + weap).css("display", "block");
        
            $('#' + weap).css("color", "#222");
        }
        else
        {
            boostStruc.difficulty = boostStruc.difficulty.replace(weap, "");
            $('#chosenWeapon' + weap).css("display", "none");
        
            $('#' + weap).css("color", "#FFF");
        }
    }


    if ((el.id != "midaMini") && (el.id != "midaMulty") && (el.id != "ratKing"))
    {
        $('.' + el.parentNode.classList[1] + ' div').css("color", "#FFF");
        $('.' + el.classList[0]).css("color", "#222");
    }

    calcPrice();
}
/*******/


/*CALC PRICE*/
function calcPrice()
{
    let price = 0;

    if ((boostStruc.type == "leviafan") || (boostStruc.type == "eaterOfWorlds"))
    {
        price = 20;

        if (boostStruc.difficulty == 'prestige')
            price *= 1.5;

        if (boostStruc.heroCount == '2') price *= 1.8;
        else
        if (boostStruc.heroCount == '3') price *= 2.7;
    }
    else
    if (boostStruc.type == "nightfall")
    {
        price = 20;

        if (boostStruc.difficulty == 'prestige')
            price *= 1.5;

        if (boostStruc.soloDuo == 'duo')
            price *= 1.5;

        if (boostStruc.heroCount == '2') price *= 1.8;
        else
        if (boostStruc.heroCount == '3') price *= 2.7;
    }
    else
    if (boostStruc.type == "powerLvling")
    {
        let delim = boostStruc.difficulty.indexOf('-');

        if (delim != -1)
        {
            let start = Number(boostStruc.difficulty.slice(0, delim));
            let end = Number(boostStruc.difficulty.slice(delim + 1));
            
            for (var i = start; i < end; i++)
            {
                if (Number(i) <= 200) price += 1;
                else
                if (Number(i) <= 240) price += 2;
                else
                if (Number(i) <= 260) price += 3;
                else
                if (Number(i) <= 290) price += 4;
                else
                if (Number(i) <= 300) price += 5;
                else
                if (Number(i) <= 320) price += 6;
                else
                if (Number(i) <= 330) price += 7;
            }
        }
    }
    else
    if (boostStruc.type == "weaponsQuests")
    {
        if (boostStruc.difficulty.indexOf("midaMini") != -1)
            price += 10;
        if (boostStruc.difficulty.indexOf("midaMulty") != -1)
            price += 20;
        if (boostStruc.difficulty.indexOf("ratKing") != -1)
            price += 15;
    }
    else
    if (boostStruc.type == "trialsNine")
    {
        price = 20;

        if (boostStruc.heroCount == '2') price *= 1.8;
        else
        if (boostStruc.heroCount == '3') price *= 2.7;
    }
    else
    if (boostStruc.type == "ironBanner")
    {
        price = 0.5 * Number(boostStruc.difficulty);

    }

    price *= coef;

    document.getElementById('boostPrice').innerHTML = price.toFixed(0) + "$";
    document.getElementById('invisiblePrice').value = price.toFixed(0) + " in dollars";

    boostStruc.price = String(price);
}
/*******/

if (document.body.clientWidth > 799)
{

}
else
{
    var mcb = $('.mobCloseButton');
    for (var i = 0; i < mcb.length; i++) 
    {
        mcb[i].innerHTML = '<img src="img/menuCloseButton.png">';
    }

    $('#proceedButton').removeClass('centerButton');
    $('#purchaseButton').removeClass('centerButton');
    $('#submitButton').removeClass('centerButton');
}

var pattern = /^\s*[\.a-zа-я0-9_-]+@[a-zа-я0-9-]+\.([a-zа-я]{1,6}\.)?[a-zа-я]{2,6}\s*$/i;

var coef = 1;
var usdCoef = 1, eurCoef = 0.84, rubCoef = 58.5;
var currency = "usd";

var curLvl = 1;
var disLvl = 200;

var optOpt = $('.optOption');

var boostStruc = {
    type: 'leviafan',
    difficulty: 'normal',
    soloDuo: 'solo',
    heroCount: '1',
    price: '20'
};

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
        $('.preOrder').css("display", "none");
        $('.optionBoard').css("display", "none");
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
        $('.preOrder').css("display", "none");
        $('.optionBoard').css("display", "none");

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
    $('#proceedButton').click(function()
    {
        if (boostStruc.price == 0)
        {
            alert("Choose some weapon, please.");
            return;
        }

        $('.orderBoard').css("display", "block");
        $('.preOrder').css("display", "none");
    });
});

$(document).ready(function()
{
    $('#purchaseButton').click(function()
    {
        if ((checkEmail()) || (checkFullName()))
            return;

        if (document.getElementById('invisibleBoostType').value == "leviafan")
        {
            let boostInfo;
            if (boostStruc.heroCount == '1')
                boostInfo = "Your boost at Leviafan raid (" + boostStruc.difficulty + ") for " + boostStruc.heroCount + " hero costs " + Number(boostStruc.price).toFixed(0);
            else
                boostInfo = "Your boost at Leviafan raid (" + boostStruc.difficulty + ") for " + boostStruc.heroCount + " hero costs " + Number(boostStruc.price).toFixed(0);
            
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "eaterOfWorlds")
        {
            let boostInfo;
            if (boostStruc.heroCount == '1')
                boostInfo = "Your boost at Eater of worlds raid (" + boostStruc.difficulty + ") for " + boostStruc.heroCount + " hero costs " + Number(boostStruc.price).toFixed(0);
            else
                boostInfo = "Your boost at Eater of worlds raid (" + boostStruc.difficulty + ") for " + boostStruc.heroCount + " hero costs " + Number(boostStruc.price).toFixed(0);
                
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "nightfall")
        {
            let boostInfo;
            if (boostStruc.heroCount == '1')
                boostInfo = "Your boost at Nightfall (" + boostStruc.difficulty + ") for " + boostStruc.heroCount + " hero (" + boostStruc.soloDuo + ") costs " + Number(boostStruc.price).toFixed(0);
            else
                boostInfo = "Your boost at Nightfall (" + boostStruc.difficulty + ") for " + boostStruc.heroCount + " heroes (" + boostStruc.soloDuo + ") costs " + Number(boostStruc.price).toFixed(0);
                
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "powerLvling")
        {
            let boostInfo = "Your boost from " + Number(curLvl) + " to " + Number(disLvl) + " costs " + Number(boostStruc.price).toFixed(0);
            
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "weaponsQuests")
        {
            let weap = "";

            if (boostStruc.difficulty.indexOf("midaMini") != -1)
                weap += "Mida Mini-Tool, ";
            if (boostStruc.difficulty.indexOf("midaMulty") != -1)
                weap += "Mida Multy-Tool, ";
            if (boostStruc.difficulty.indexOf("ratKing") != -1)
                weap += "Rat King";

            if (weap.lastIndexOf(", ") == weap.length - 2)
                weap = weap.slice(0, -2);

            let boostInfo = "Your quest for weapon (" + weap + ") costs " + Number(boostStruc.price).toFixed(0);
            
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "trialsNine")
        {
            let boostInfo;
            if (boostStruc.heroCount == '1')
                boostInfo = "Your boost at Trials of Nine for " + boostStruc.heroCount + " hero costs " + Number(boostStruc.price).toFixed(0);
            else
                boostInfo = "Your boost at Trials of Nine for " + boostStruc.heroCount + " heroes costs " + Number(boostStruc.price).toFixed(0);
    
            
            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }
        else
        if (document.getElementById('invisibleBoostType').value == "ironBanner")
        {
            let boostInfo = "Your boost for " + boostStruc.difficulty + " Iron Banner tokens costs " + Number(boostStruc.price).toFixed(0);

            if (currency == "usd")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "$";
            else
            if (currency == "eur")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&euro;";
            else
            if (currency == "rub")
                document.getElementById('submitOrderDetails').innerHTML = boostInfo + "&#8381;";
        }

        document.getElementById('submitEmail').innerHTML = $('#inpEmail').val();
        document.getElementById('submitName').innerHTML = $('#inpName').val();
        document.getElementById('submitMessage').innerHTML = $('#inpMessage').val();

        $('.orderBoard').css("display", "none");
        $('.submitBoard').css("display", "block");
    });
});


