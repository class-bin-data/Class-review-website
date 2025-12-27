// 检测窗体滚动
window.onscroll = () => {

    // 背景DOM
    const backgroundElement = document.querySelector(".background");
    const backgroundElementRect = backgroundElement.getBoundingClientRect();

    // 导航DOM
    const navElement = document.querySelector(".nav");

    // 修改导航栏颜色
    if (backgroundElementRect.top < -200) {
        navElement.setAttribute("style", "background-color: black");
    }
    else {
        navElement.setAttribute("style", "background-color: transparent");
    }

    // 产品DOM
    const introduceElement = document.querySelector(".introduce");
    const introduceElementRect = introduceElement.getBoundingClientRect();

    const productElement = document.querySelectorAll(".product-item");

    if (introduceElementRect.bottom >= 0) {
        for (let i = 0; i < productElement.length; i++) {
            productElement[i].classList.add("product-animation");
        }
    }

    if (introduceElementRect.top >= window.innerHeight) {
        for (let i = 0; i < productElement.length; i++) {
            productElement[i].classList.remove("product-animation");
        }
    }

    // 软件DOM
    softwareAnimation(".sociality");
    softwareAnimation(".file");
    softwareAnimation(".security");

    // 下载DOM
    const downloadElement = document.querySelector(".download");
    const downloadElementRect = downloadElement.getBoundingClientRect();

    const downloadPlatformElement = document.querySelector(".download-software");

    if (downloadElementRect.bottom >= 0) {
        downloadPlatformElement.classList.add("download-animation");
    }

    if (downloadElementRect.top >= window.innerHeight) {
        downloadPlatformElement.classList.remove("download-animation");
    }
}

// 软件DOM
function softwareAnimation(className) {
    const softwareElement = document.querySelector(className);
    const softwareElementRect = softwareElement.getBoundingClientRect();

    if (softwareElementRect.bottom >= 0) {
        softwareElement.children[0].classList.add("software-item-left");
        softwareElement.children[1].classList.add("software-item-right");
    }

    if (softwareElementRect.top >= window.innerHeight) {
        softwareElement.children[0].classList.remove("software-item-left");
        softwareElement.children[1].classList.remove("software-item-right");
    }
}
    // 获取所有的item元素
    var items = document.getElementsByClassName('item');
    // 循环遍历每个item
    for (var i = 0; i < items.length; i++) {
        // 获取当前item
        var item = items[i];
        var frame = item.getElementsByClassName('frame')[0];
        var frontBox = frame.getElementsByClassName('front')[0];
        var leftBox = frame.getElementsByClassName('left')[0];
        var rightBox = frame.getElementsByClassName('right')[0];
        // 设置背景图片
        frontBox.style.backgroundImage = 'url(./img/' + (i + 1).toString().padStart(2, '0') + '.jpg)';
        leftBox.style.backgroundImage = 'url(./img/' + (i + 1).toString().padStart(2, '0') + '.jpg)';
        rightBox.style.backgroundImage = 'url(./img/' + (i + 1).toString().padStart(2, '0') + '.jpg)';
    }
    (function () {
        "use strict";
        var shell = document.getElementsByClassName('shell')[0];
        var slider = shell.getElementsByClassName('shell_slider')[0];
        var items = shell.getElementsByClassName('item');
        var prevBtn = shell.getElementsByClassName('prev')[0];
        var nextBtn = shell.getElementsByClassName('next')[0];
        // 定义变量
        var width, height, totalWidth, margin = 20,
            currIndex = 0,
            interval, intervalTime = 3000;
        function init() {
            // 初始化函数
            resize();
            move(Math.floor(items.length / 2));
            bindEvents();
            timer();
        }
        function resize() {
            // 窗口大小变化时调整大小
            width = Math.max(window.innerWidth * .20, 275);
            height = window.innerHeight * .5;
            totalWidth = width * items.length;
            // 设置slider宽度
            slider.style.width = totalWidth + "px";
            // 设置每个item的宽度和高度
            for (var i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = (width - (margin * 2)) + "px";
                item.style.height = height + "px";
            }
        }
        function bindEvents() {
            // 窗口大小变化时调整大小
            window.onresize = resize;
            // 点击prev按钮切换item
            prevBtn.addEventListener('click', () => { prev(); });
            nextBtn.addEventListener('click', () => { next(); });
        }
        init();
        function move(index) {
            // 移动shell到指定的item
            if (index < 1) index = items.length;
            if (index > items.length) index = 1;
            currIndex = index;
            // 遍历所有item
            for (var i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName('frame')[0];
                if (i == (index - 1)) {
                    // 当前item添加active类并设置3D效果
                    item.classList.add('item--active');
                    box.style.transform = "perspective(1200px)";
                } else {
                    // 其他item移除active类并设置3D效果
                    item.classList.remove('item--active');
                    box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                }
            }
            // 移动slider
            slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
            // 设置body背景图片
            var frontBox = items[index - 1].getElementsByClassName('front')[0];
            document.body.style.backgroundImage = frontBox.style.backgroundImage;
        }
        function timer() {
            // 定时器，自动切换shell
            clearInterval(interval);
            interval = setInterval(() => {
                move(++currIndex);
            }, intervalTime);
        }
        // 切换item
        function prev() {
            move(--currIndex);
            timer();
        }
        function next() {
            move(++currIndex);
            timer();
        }
    })(); 