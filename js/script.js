/* Descrizione:
Attraverso l'apposita API di Boolean
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

var app = new Vue({
  el:"#app",
  data: {
    emailList: [],
    listLength: 10
  },
  mounted: function(){
    for(var i = 0; i < this.listLength; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        this.emailList.push(response.data.response);
      });
    }
  },

  // Alternativa alla arrow function
  // mounted: function(){
  //   const self = this;
  //   for(var i = 0; i < this.listLength; i++) {
  //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  //     .then(function (response){
  //       self.emailList.push(response.data.response);
  //     });
  //   }
  // },

});
