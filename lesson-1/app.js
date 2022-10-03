const app = Vue.createApp(
    {
        data() {
            return {
                showBooks: true,
                title: 'The Final Empire',
                author: 'Brandon Charlie',
                age: 43
            }
        },
        methods: {
            toggleShowBooks() {
                this.showBooks = !this.showBooks
            },
            handleEvent(e) {
                console.log(e, e.type)
            }
        }
    }
)

app.mount('#app')