const app = new Vue({
    el: '#app',
    methods: {
        getJson(url) { //получаем данные
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.$refs.error.setText(error))
        },
        postJson(url, data) { //запрос
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setText(error))
        },
        putJson(url, data) { //ответ
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setText(error))
        },
        delJson(url, data) { //удаление товара
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setText(error))
        },
    },
});