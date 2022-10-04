const app = Vue.createApp(
    {
        data() {
            return {
                showBooks: true,
                url: 'https://shahmimajid.com',
                books: [
                    { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg' },
                    { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg' },
                    { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg' },
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