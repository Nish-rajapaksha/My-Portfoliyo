/* ------ generate order id ------ */
function generateOrderId() {
    if (orderDetails.length != 0) {
        let i=orderDetails.length-1;
        var orderId = orderDetails[i].oId;
        var tempId = parseInt(orderId.split("-")[1]);
        tempId = tempId + 1;
        $("#orderId").val("O-00" + tempId);
    } else {
        $("#orderId").val("O-001");
    }
}
/*customer id load*/
function customerIdOption() {
    $('#selectCustomerId').empty();
    for (let cus of customers) {
        $('#selectCustomerId').append(`<option>${cus.id}</option>`)
    }
}

/*item code load*/
function itemCodeOption() {
    $('#selectItemCode').empty();
    for (let item of items) {
        $('#selectItemCode').append(`<option>${item.code}</option>`)
    }
}
/*customer detail load*/
$('#selectCustomerId').click(function () {
    let cusId = $('#selectCustomerId').val();

    let customer = searchCustomer(cusId);
    $('#txtName').val(customer.name);
    $('#txtAddress').val(customer.address);
    $('#txtContact').val(customer.number);

});

/*item detail load*/
$('#selectItemCode').click(function () {
    let code = $('#selectItemCode').val();
    let item = searchItem(code);

    $('#txtOrderItemName').val(item.itemName);
    $('#qtyOnH').val(item.itemQty);
    $('#price').val(item.price);

    $('#OrderQty').val(" ");

    qtyOnHandCheck();
});
$('#btnAdd').click(function () {
    let oId = $('#orderId').val();
    let orderItemCode = $("#selectItemCode").val();
    let orderItemName = $("#txtOrderItemName").val();
    let orderItemQty = $("#OrderQty").val();
    let orderItemUnitPrice = $("#price").val();
    let orderItemTotal = orderItemQty * orderItemUnitPrice;

    var order = {
        "orderId": oId,
        "orderCode": orderItemCode,
        "orderName": orderItemName,
        "orderQty": orderItemQty,
        "orderUnitPrice": orderItemUnitPrice,
        "orderTotal": orderItemTotal
    }

    if ($('#qtyOnH').val() == 0) {
        $('#btnAdd').attr('disabled', true);
    } else {
        $('#btnAdd').attr('disabled', false);
    }

    if ($("#price").val().length <= 0) {
        $('#selectItemCode').focus();
    } else if (orderItemQty == 0) {
        $('#OrderQty').focus();
    } else {
        let i = searchOrderItem(orderItemCode);

        if (i != null) {

            let qty = parseInt(i.orderQty);
            let tot = parseInt(i.orderTotal);

            qty = qty + parseInt(orderItemQty);
            tot = tot + parseInt(orderItemTotal);

            i.orderQty = qty;
            i.orderTotal = tot;
            loadOrder();
            totalCount();
        } else {
            orders.push(order);
            loadOrder();
            totalCount();
        }


    }
});
$('#btnPurchase').click(function () {

    if ($('#orderDate').val() == "") {
        $('#orderDate').focus();
    } else if ($('#txtName').val().length <= 0) {
        $('#selectCustomerId').focus();
    } else if ($('#txtCash').val().length <= 0) {
        $('#txtCash').focus();
    } else if ($('#txtDiscount').val().length <= 0) {
        $('#txtDiscount').focus();
    } else {
        alert("order purchase success")
        purchase();
        balanceOrder();
        loadOrder();
        itemCountSet();
        copyArray();
    }
});

function copyArray() {
    for (let i = 0; i < orders.length; i++) {
        order = {
            "orderId": orders[i].orderId,
            "orderCode": orders[i].orderCode,
            "orderName": orders[i].orderName,
            "orderQty": orders[i].orderQty,
            "orderUnitPrice": orders[i].orderUnitPrice,
            "orderTotal": orders[i].orderTotal
        }
        allDetails.push(order);
    }
}

$('#btnNew').click(function () {
    newOrder();
});

function qtyOnHandCheck() {
    let qoh = $('#qtyOnH').val();
    if (qoh == 0) {
        $("#btnAdd").attr('disabled', true);
    } else {
        $("#btnAdd").attr('disabled', false);
    }
}

function newOrder() {
    generateOrderId();

    $('#selectCustomerId').val(" ");
    $('#txtName').val(" ");
    $('#txtContact').val(" ");
    $('#txtAddress').val(" ");
    $('#selectItemCode').val(" ");
    $('#txtOrderItemName').val(" ");
    $('#qtyOnH').val(" ");
    $('#price').val(" ");
    $('#OrderQty').val(" ");

    $('#orderTot').text(" ");
    $('#oSubTot').text(" ");
    $('#txtCash').val(" ");
    $('#txtDiscount').val(" ");
    $('#txtBalance').val(" ");

    $('#orderDate').val(" ");

    orders.length = 0;
    loadOrder();
}

function totalCount() {
    let tot = 0;
    if (orders.length == 0) {
        $('#orderTot').text(" ");
    } else {
        for (let i = 0; i < orders.length; i++) {
            tot = tot + orders[i].orderTotal.valueOf();
            $('#orderTot').text(tot);
        }
    }
}

