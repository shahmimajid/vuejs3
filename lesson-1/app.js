const app = Vue.createApp(
    {
        data() {
            return {
                showBooks: true,
                books: [
                    { title: 'wind of change', author: 'Petar Skalov'},
                    { title: 'Tales of Naruto', author: 'Odo Kagawa'},
                    { title: 'Fish and chips', author: 'Mohawk Gos'},
                    { title: 'Teletubbies', author: 'CN network'},
                ]
            }
        },
        methods: {
            toggleShowBooks() {
                this.showBooks = !this.showBooks
            },
            handleEvent(e, data) {
                console.log(e, e.type)
                if (data) {
                    console.log(data)
                }
            },
            handleMousemove(e) {
                this.x = e.offsetX
                this.y = e.offsetY
            }
        }
    }
)

app.mount('#app')