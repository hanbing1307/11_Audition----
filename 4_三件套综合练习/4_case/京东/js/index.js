// 实现模糊查询
 // 获取输入框
let keyword = document.querySelector('.keyword');
// 获取搜索的下拉列表
let searchHelper = document.querySelector('.search-helper'); 

// 定义数组，存储搜索内容   （实际中是绑定数据库，不需要写）
let searchArr = ['小米手机', '华为手机', '三星手机', '魅族手机', 'vivo手机', '苹果手表'];

// 给输入框绑定内容改变事件
keyword.oninput = function(){
    // 用户改变信息时也要随之改变内容
    searchHelper.innerHTML = '';
    for(let i = 0; i < searchArr.length; i++){
        if(searchArr[i].indexOf(keyword.value) != -1){
            searchHelper.innerHTML += '<p>' +searchArr[i]+ '</p>' 
            searchHelper.getElementsByClassName.display = 'block';
        }
    }
}

// 鼠标离开时，模糊查询的内容消失
keyword.onblur = function(){
    searchHelper.style.display = 'none';
}

// 鼠标悬浮时变颜色


//实现轮播图的切换
let img = document.querySelector('.img');

let imgArr = ['lbt1.jpg', 'lbt2.jpg', 'lbt3.jpg', 'lbt4', 'lbt5']; 

let count = 0;

// 定义函数,用来切换图片的路径
function cutImg(){
    img.src = './images/' + imgArr[count];
}

// 设置定时器,每隔3秒切换图片
let timer = setInterval(function(){
    count++;
    cutImg();
}, 3000);