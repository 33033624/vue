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

var  watchExample = new Vue({
    el:'#watch-example',
    data:{
        question:'',
        answer:'i cannot give you an answer until you ask a question'
    },
    watch:{
        question:'',
        answer:function(newVal){
            this.answer = 'waiting for you to stop typing ';
            this.getAnswer()
        }
    },
    methods: {
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
        // ajax请求直到用户输入完毕才会发出
        // 学习更多关于 _.debounce function (and its cousin
        // _.throttle), 参考: https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                var vm = this
                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                vm.answer = 'Thinking...'
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            // 这是我们为用户停止输入等待的毫秒数
            500
        )
    }

})

