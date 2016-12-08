/**
 * Created by super on 16/12/8.
 */
var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue'
    }
})
var app2 = new Vue({
    el:'#app2',
    data:{
        message:'You loaded this page on '+new Date().getMilliseconds()

    }


});

var app3 = new Vue({
    el:'#app3',
    data:{
        seen:true,
        noseen:false
    }

});
var app4 = new Vue({
    el:'#app4',
    data:{
        todos:[
            {name:1},{name:2}
        ]

    }


});

var app5  = new Vue({
    el:'#app5',
    data:{
        message:'我是要修改的message'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')

        }
    }

});

var app6 = new Vue({
    el:'#app6',
    data:{
        message:'我是ng-model实现双向数据绑定的'
    }

})


Vue.component('todo-item',{
    props:['title'],
    template:'<li>{{title.text}}</li>'

})
var app7 = new Vue({
    el:'#app7',
    data:{
        groceryList:[
            {text:'1'},
            {text:'2'},
            {text:'3'}
        ]
    }

})





var app8 = new Vue({
    el:'#app8',
    data:{
        url:"http://www.baidu.com"
    },
    /*
    * methods是专门用来书写事件绑定的
    *
    * */
    methods: {
        clickFn: function () {
            alert('v-on')
        }
    }

})


