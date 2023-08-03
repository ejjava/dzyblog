var mBody = document.querySelector("body");// 获取body
var previewImg = document.querySelector(".preview-img");// 获取预览图
var mContainer = document.querySelector(".preview-img .container");// 获取预览图显示区域
var mImg = document.querySelector(".preview-img .container img");// 获取显示图片
var mClose = document.querySelector(".preview-img .container .close");// 获取关闭按钮
var mDescription = document.getElementById("captain");// 获取图片描述

// 显示图片描述
function ShowDescription(str){

    // 更改描述
    mDescription.innerHTML = str;
}

// 显示预览图
function showPreviewImg(url) {
        
    // 设置图片路径
    mImg.setAttribute("src", url);
    // 设置为弹性布局
    previewImg.style.display = "flex";
    previewImg.style.justifyContent = "center";
    previewImg.style.alignItems = "center";
    // 设置预览图大小
    setPreviewImgWH();
    // 当弹出预览图时下面不允许滚动
    mBody.style.overflow = "hidden"    
}

// 设置预览图大小
function setPreviewImgWH() {

    // 获取当前窗口宽度
    let windowWidth = window.innerWidth;
    // 获取当前窗口高度
    let windowHeight = window.innerHeight;
    // 判断当宽度小于高度时，使用宽度
    if (windowWidth < windowHeight) {
        // 设置图片宽高
        mImg.style.width = windowWidth * 0.8 + "px";
        mImg.style.height = "auto";
    } else {
        // 设置图片宽高
        mImg.style.height = windowHeight * 0.8 + "px";
        mImg.style.width = "auto";
    }
}

// 关闭按钮点击事件
mClose.onclick = function () {
    closePreviewImg();
}

// 预览图上点击事件取消冒泡
mContainer.onclick = function (event) {
    event.stopPropagation();
}

// 点击预览图之外的地方 关闭预览图
previewImg.onclick = function (event) {
    closePreviewImg();
}

// 关闭预览图
function closePreviewImg() {
    previewImg.style.display = "none";
    mBody.style.overflow = "scroll"
}

// 屏幕尺寸改变事件
window.onresize = function () {
    // 判断只有预览图显示的时候才设置大小
    if (previewImg.style.display != "none") {
        // 设置预览图大小
        setPreviewImgWH();
    }
};