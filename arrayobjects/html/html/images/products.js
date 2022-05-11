var products = [{ "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 }, { "id": 102, "name": "Football", "image": "football.png", "price": 120 }, { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 }, { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 }, { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }];
$(document).ready(function () {

    for (let i = 0; i < products.length; i++) {
        var txt = '<div id=' + products[i].id + ' class="product"><img src=' + products[i].image + '></img><h3 class="title"><a class="prodid" href="#">Product ' + products[i].id + '</a></h3><span>Price: $' + products[i].price + '.00</span><a class="add-to-cart"  pid="' + i + '" href="#">Add To Cart</a>';
        $("#products").append(txt);
    }
});