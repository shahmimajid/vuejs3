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
            }
        }
    }
)

app.mount('#app')