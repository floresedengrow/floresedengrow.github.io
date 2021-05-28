$(function () {
    $(".b-html").append($('<div>').load("https://static2.floresdeleden.com.ar/socialnetwork.html"));
    $("body").append($('<div>').load("https://static2.floresdeleden.com.ar/whatsapp.html"));

    $(".ef-level-1 > li > a").first().text("TODOS");
    $(".eshop-filter-select > .wnd-filter-select > option").first().text("TODOS");
});