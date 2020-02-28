new Vue({

    el:'#appjs',

    data:{
       loan:{ principal:0,
        rate:0,
        time:0
       }
    },
    computed: {

        result() {
            let p = this.loan.principal;
            let r = this.loan.rate;
            let t = this.loan.time;
            return ((p * r * t) / 100)
        }
    },

    // watch: {
    //     result: function(value){
    //         var vm = this;
    //         setTimeout(function(){
    //             vm.result=0;
    //         }, 5000);
    //     }

        
    // }
})