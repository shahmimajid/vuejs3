const app = Vue.createApp(
    {
        data() {
            return {
                title: 'The Final Empire',
                author: 'Brandon Charlie',
                age: 43
            }
        },
        methods: {
            changeTitle() {
                this.title = "Words of Radiance"
            }
        }
    }
)

app.mount('#app')