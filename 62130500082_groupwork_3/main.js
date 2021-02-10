const app = {
    data() {
        return {
            pictures: [
                { image: "./image/1.jpg", text: "Death Standing", like: false },
                { image: "./image/2.jpg", text: "Blair Witch", like: false },
                { image: "./image/3.jpg", text: "Cyberpunk", like: false }
            ]
        }
    },

    methods: {
        toggleDone(index) {
            this.pictures[index].like = !this.pictures[index].like
        }
    },
    computed: {
        countLikes() {
            return this.pictures.filter(t => t.like).length
        }
    }
}
Vue.createApp(app).mount('#app')