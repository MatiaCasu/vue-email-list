/* Descrizione:
Attraverso l'apposita API di Boolean
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */


var app = new Vue({
  el:"#app",
  data: {
    email: ""
  },
  mounted: function(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
    this.email = response.data.response;
    });
  }
});
