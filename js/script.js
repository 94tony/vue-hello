var pippo = new Vue({
    el: '#app'  ,    // nome  id per collegare 
    data: {
        message: 'Hello World', //stampa il contenuto su un div con il nome della classe  in questo caso {{ message }} <- andrà inserito così
        text: '',   // attraverso v-model assegnerà un valore all'input e contemporaneamente stabilirà il contenuto di h1 {{text}} 
        img:'https://via.placeholder.com/150'   //attraverso v-bind
    
    }
    
    
    })