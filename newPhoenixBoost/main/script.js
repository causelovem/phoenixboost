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
        $('.contacts').css("display", "block");
    });
});

$(document).ready(function()
{
    $('.closeButton').click(function()
    {
        $('.transparentLayer').css("display", "none");
        $('.faq').css("display", "none");
        $('.contacts').css("display", "none");
    });
});

$(document).ready(function()
{
    $('.transparentLayer').click(function()
    {
        $('.faq').css("display", "none");
        $('.contacts').css("display", "none");
        $('.menu').css("width", "0");
        $('.transparentLayer').css("display", "none");
    });
});


if (document.body.clientWidth < 800) 
{
    $(".closeButton img").attr("src","img/menuCloseButton.png");
    if (Number(document.body.clientHeight) < Number(document.body.clientWidth))
    {
        $("body").css("height", "800px");
        $(".main").css("height", "800px");
    }
}

var games = ["overwatch", "destiny", "blackDesert"];

function mouselogPlacements(event) 
{
    if (document.body.clientWidth >= 800)
    {
        if (event.type == "mouseover")
        {
            var gameNum = Number((String(event.target.id)).slice(-1));

            $('#' + games[gameNum]).css("width", "42%");
            $('#' + games[gameNum] + " .gameLogo").css("top", "calc(50vh - 130px)");        
            for (var i = 0; i < games.length; i++) 
                if (i != gameNum)
                    $('#' + games[i]).css("width", "29%");   
        }
        else if (event.type == "mouseout")
            for (var i = 0; i < games.length; i++) 
            {
                $('#' + games[i] + " .gameLogo").css("top", "calc(50vh - 100px)");
                $('#' + games[i]).css("width", "33.33%");   
            }
    }
}


