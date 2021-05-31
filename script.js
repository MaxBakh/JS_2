// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];

// //Функция для формирования верстки каждого товара

// const renderGoodsItem = (title, price, img = 'item.png') => {
//     return `<div class="goods_item">
//         <img src="${img}" alt="">
//         <h3>${title}</h3>
//         <p>${price}</p>
//         <button class="buy_btn">Buy</button>
//         </div>`
// };

// // собирать все товары в один список и записывать его в контейнер .goods-list
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
//     document.querySelector('.goods_list').innerHTML = goodsList;
// };

// renderGoodsList(goods);

// // https://via.placeholder.com/150





class ProductsList {
    constructor(container = '.goods_list') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Shirt', price: 150 },
            { id: 2, title: 'Socks', price: 50 },
            { id: 3, title: 'Jacket', price: 350 },
            { id: 4, title: 'Shoes', price: 250 },
        ];
    }
    render() {
        const listHtml = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new productItem(product);
            this.allProducts.push(productObj);
            listHtml.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
            console.log(sum);
        }
    }

}




///класс для товара, который будет возвращать html-разметку
class productItem {
    constructor(product, img = 'https://via.placeholder.com/150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="goods_item">
               <img scr="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                 <button class="buy_btn">Buy</button>
                </div>`;
    }

}



///


const list = new ProductsList();
list.render();
list.getSum();




//классы для корзины(добывлениеб удаление), отобрыжение элементов корзины
class Basket {
    addGoods() {

    }
    removeGoods() {

    }

}

class ElemBasket {

}