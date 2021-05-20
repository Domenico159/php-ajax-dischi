

const main = new Vue({
    el: '#main',
    data: {
        url: window.href,
        albums: [],
    },
    created() {
        this.getAlbum()
    },
    methods: {
        getAlbum() {
            const urlAlb = 'http://localhost/php-ajax-dischi/data/database-jason.php';

            axios.get(urlAlb)

                .then(res => {
                    console.log(res.data);
                    this.albums = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
});