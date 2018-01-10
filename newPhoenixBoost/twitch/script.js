var twitchWidth = $(".twitchVideo").css( "width");
var twitchHeight = Number(twitchWidth.slice(0,-2))/2;

$(".twitchVideo").css("height", twitchHeight + "px");

var windowWidth = document.body.clientWidth;

var left = -(windowWidth / 2) + twitchHeight;

$(".delimiter").css("left", left + "px");
