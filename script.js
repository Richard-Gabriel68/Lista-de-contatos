let app = new Vue({
    el: '#app',
    data: {
        contato: '',
        lista: [],
        timer: null,
        aviso:''
    },
    methods: {
        add: function(){
            if(this.contato.length > 0){
                this.lista.push(this.contato);

                this.contato='';

                document.querySelector('button').style.display = 'none';
                
            }
        },
        clear: function(){
            this.aviso='';

            document.querySelector('button').style.display = 'inline-block';
        }
    },
    watch: {
        contato: function(){
            if(this.contato.length > 0){
                this.aviso='digitando...';

                if (this.aviso != null){
                clearTimeout(this.timer);
                }

                this.timer = setTimeout(this.clear, 1000);
            }
            
        }
    }
})