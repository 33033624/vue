/**
 * Created by super on 16/12/8.
 */

var vm = new Vue({
    el:"#example",
    data:{
        message:'12333'
    },
    computed:{
        haha:function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        reverse:function(){
            return this.message.split('').reverse().join()
        }
    }
})




vm.message ="goodbye"

