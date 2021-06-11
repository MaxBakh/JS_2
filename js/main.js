const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app', //для работы Vue
    data: {
        userSearch: '', //для поиска товара
        showCart: false, //одля отображения корзины
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [], //массив для фильтра товара(отфильтрованного)
        imgCart: 'https://placehold.it/50x100',
        products: [],
        imgProduct: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url) {  //подгружаем данные с "сервера"
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === item.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({ quantity: 1 }, item);//создание нового объекта на основе двух, указанных в параметрах
                            this.cartItems.push(prod)
                        }
                    }
                })
        },
        remove(item) { //удаление из корзины
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i'); //поиск товара не зависимо от регистра
            this.filtered = this.filtered.filter(el => regexp.test(el.product_name)); //проверяем введенные данные
        }
    },
    mounted() { // == window.onload, отображение после полной загрузки
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data.contents) { //обходим массив 
                    this.cartItems.push(item); //наполныям массив cartItems содержимым
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let item of data) {
                    this.products.push(item);
                    this.filtered.push(item);
                }
            })
    }

});



