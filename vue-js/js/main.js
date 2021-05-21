

const main = new Vue({
    el: '#main',
    data: {
        url: window.href,
        albums: [],
        valoreSelezionato: 'all',
    },
    created() {
        this.getAlbum()
    },
    methods: {
        getAlbum() {
            const urlAlb = `http://localhost/php-ajax-dischi/data/database-jason.php?select=${ this.valoreSelezionato }`;

            axios.get(urlAlb)

                .then(res => {
                    console.log(res.data);
                    this.albums = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        changeGenre() {
            console.log(this.valoreSelezionato);
            this.getAlbum();
        },
    },
});