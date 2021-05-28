const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

//Функция для формирования верстки каждого товара

const renderGoodsItem = (title, price, img = 'item.png') => {
    return `<div class="goods_item">
        <img src="${img}" alt="">
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="buy_btn">Buy</button>
        </div>`
};

// собирать все товары в один список и записывать его в контейнер .goods-list
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods_list').innerHTML = goodsList;
};

renderGoodsList(goods);

// https://via.placeholder.com/150