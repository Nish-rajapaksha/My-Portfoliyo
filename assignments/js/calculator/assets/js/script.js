$('.num').click(function () {
    $('#display').val($('#display').val()+$ (this).val());

    console.log($('#display').val()+$ (this).val());
});

$(".clr").click(function () {
    $('#display').val(" ");
});

$(".sum").click(function () {
    num1 =$('#display').val();
    optr="+";
    $('#display').val(" ");


});
$(".sub").click(function () {
    num1 =$('#display').val();
    optr="-";
    $('#display').val(" ");


});
$(".divd").click(function () {
    num1 =$('#display').val();
    optr="/";
    $('#display').val(" ");


});
$(".mul").click(function () {
    num1 =$('#display').val();
    optr="*";
    $('#display').val(" ");


});

$(".fResult").click(function (){
    num2 =$('#display').val();
    result();

});
function result(){
    var r=null;
  switch (optr) {
      case "-" : r = parseFloat(num1) - parseFloat(num2);
      $('#display').val(r);break;

      case "+" : r = parseFloat(num1) + parseFloat(num2);
          $('#display').val(r);break;

      case "*" : r = parseFloat(num1) * parseFloat(num2);
          $('#display').val(r);break;

      case "/" : r = parseFloat(num1) / parseFloat(num2);
          $('#display').val(r);break;

  }


}
var num1,num2,optr;

