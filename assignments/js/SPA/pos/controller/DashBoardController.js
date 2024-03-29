$("#homeContent").css("display", "block");
$("#customerContent").css("display", "none");
$("#itemContent").css("display", "none");
$("#orderContent").css("display", "none");

$(".nav-item1").css("borderBottom", "2px solid black")

$(".nav-item1").click(function () {
    $("#homeContent").css("display", "block");
    $("#customerContent").css("display", "none");
    $("#itemContent").css("display", "none");
    $("#orderContent").css("display", "none");

    $(".nav-item1").css("borderBottom", "2px solid black")
    $(".nav-item2").css("borderBottom", "none")
    $(".nav-item3").css("borderBottom", "none")
    $(".nav-item4").css("borderBottom", "none")
    count();
});

$(".nav-item2").click(function () {
    $("#homeContent").css("display", "none");
    $("#customerContent").css("display", "block");
    $("#itemContent").css("display", "none");
    $("#orderContent").css("display", "none");

    $(".nav-item1").css("borderBottom", "none")
    $(".nav-item2").css("borderBottom", "2px solid black")
    $(".nav-item3").css("borderBottom", "none")
    $(".nav-item4").css("borderBottom", "none")

    clearAllTexts();
});

$(".nav-item3").click(function () {
    $("#homeContent").css("display", "none");
    $("#customerContent").css("display", "none");
    $("#itemContent").css("display", "block");
    $("#orderContent").css("display", "none");

    $(".nav-item1").css("borderBottom", "none")
    $(".nav-item2").css("borderBottom", "none")
    $(".nav-item3").css("borderBottom", "2px solid black")
    $(".nav-item4").css("borderBottom", "none")

    itemClearAllTexts();
});

$(".nav-item4").click(function () {
    $("#homeContent").css("display", "none");
    $("#customerContent").css("display", "none");
    $("#itemContent").css("display", "none");
    $("#orderContent").css("display", "block");

    $(".nav-item1").css("borderBottom", "none")
    $(".nav-item2").css("borderBottom", "none")
    $(".nav-item3").css("borderBottom", "none")
    $(".nav-item4").css("borderBottom", "2px solid black")

    generateOrderId();
    customerIdOption();
    itemCodeOption();
    defaultFocus();


});

function count() {
    $("#customerCount").text(customers.length);
    $("#itemCount").text(items.length);
    $("#orderCount").text(orderDetails.length);
}