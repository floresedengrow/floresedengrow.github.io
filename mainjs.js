$(function () {
    $(".b-html").append($('<div>').load("https://static2.floresdeleden.com.ar/socialnetwork.html"));
    $("body").append($('<div>').load("https://static2.floresdeleden.com.ar/whatsapp.html"));

    $(".ef-level-1 li a").first().text("TODOS");
    $(".eshop-filter-select .wnd-filter-select option:selected").first().text("TODOS");
    $(".product-price-content").text(function(i, v) {
        return v.replace(/\,00/, "");
    });

    $(".checkout-submit-next").hover(function() { console.log('Aqui');});

}); 

(function() {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener('load', function() {
            $(".ef-level-1 li a").first().text("TODOS");
            $(".eshop-filter-select .wnd-filter-select option:selected").first().text("TODOS");
            $(".product-price-content").text(function(i, v) {
              return v.replace(/\,00/, "");
            });
        });
        origOpen.apply(this, arguments);
    };
})();