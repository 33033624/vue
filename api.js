/**
 * Created by super on 16/12/8.
 */

/*
* 首先安装
* npm install vue
* 全局安装  npm install vue -g
*
* */
var Vue= require('vue');
var data = {a:1};
var vm = new Vue({
    data:data
})
console.log(vm.a == data.a);
/*
* 获取属性内部的属性值
* */
console.log(vm.$data == data);

/*
* 当实例对应的data中的属性值a变化的时候触发这个函数
*
* */
vm.$watch('a',function(newVal,oldVal){
  console.log(newVal);
  console.log(oldVal);
    console.log(this);
});
data.a=2;//会触发上面的毁掉函数


var vm = new Vue({
    data:{
        a:3
    },
    //created是Vue的生命周期 在创建的时候执行
    created:function(){
        console.log('created')
        console.log('创建实例的时候执行');
        console.log(this.a);//this就是我们创建的这个实例
        //但是下面的vn并不是我们的创建的实例 而是上面我们创建的vn  因为这个时候这个实例还没创建成功
        console.log(vm.a)
    },
    beforeCompile:function(){
        console.log('beforeCompile')
    },
    compiled:function(){
        console.log('compiled')
    },
    ready:function(){
        console.log('ready')
    },
    attached:function(){
        console.log('attached')
    },
    detached:function(){
        console.log('detached')
    },
    beforeDestory:function(){
        console.log('beforeDestory')
    },
    destoryed:function(){
        console.log('destoryed')
    },


});


