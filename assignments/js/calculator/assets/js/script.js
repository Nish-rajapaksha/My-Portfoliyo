$('.num').click(function () {
    $('#display').val($('#display').val()+$(this).val());
});

$(".clr").click(function () {
    $('#display').val(" ");
});


