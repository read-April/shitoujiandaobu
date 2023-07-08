window.addEventListener("load", function () {
    // 获取元素
    let select = this.document.querySelector('.select');
    let start = this.document.querySelector('.start');
    let resultVictory = this.document.querySelector('.resultVictory');
    let resultLose = this.document.querySelector('.resultLose');
    let resultAlike = this.document.querySelector('.resultAlike');
    let pcImg = this.document.querySelector('#pcImg');
    let wjImg = this.document.querySelector('#wjImg');
    let bu = this.document.querySelector('#bu');
    let jiandao = this.document.querySelector('#jiandao');
    let shitou = this.document.querySelector('#shitou');
    let nextgame = this.document.querySelectorAll('.nextgame');
    let quitgame = this.document.querySelectorAll('.quitgame');
    let arr = ['img/bu.jpg', 'img/jiandao.jpg', 'img/shitou.jpg'];
    let wjVictory = this.document.querySelector('#wjVictory');
    let wjLose = this.document.querySelector('#wjLose');
    let wjAlike = this.document.querySelector('#wjAlike');
    let pcVictory = this.document.querySelector('#pcVictory');
    let pcLose = this.document.querySelector('#pcLose');
    let pcAlike = this.document.querySelector('#pcAlike');
    let index;
    let dsp;

    let sheng = this.document.querySelector('#sheng');
    let bai = this.document.querySelector('#bai');


    let a = 0;
    let b = 0;

    sheng.addEventListener('click', function () {
        if (a == 0) {
            sheng.innerHTML = '取消百分百胜';
            a = 1;
        } else if (a == 1) {
            sheng.innerHTML = '百分百胜';
            a = 0;
        }
        // 两个挂不能同时开
        if (a == 1 && b == 1) {
            alert('不要太贪心噢,\n两个挂不能同时开,程序会坏掉的喂！！！');
            sheng.innerHTML = '百分百胜';
            a = 0;
        } else {
        }
        console.log(a, b);
    })
    bai.addEventListener('click', function () {
        if (b == 0) {
            bai.innerHTML = '取消百分百败';
            b = 1;
        } else if (b == 1) {
            bai.innerHTML = '百分百败';
            b = 0;
        }
        // 两个挂不能同时开
        if (a == 1 && b == 1) {
            alert('不要太贪心噢,\n两个挂不能同时开,程序会坏掉的喂！！！');
            bai.innerHTML = '百分百败';
            b = 0;
        } else {
        }
    })






    // 定义图片随机变化的函数
    function x() {
        index = Math.floor(Math.random() * 3);
        pcImg.src = arr[index];
    }


    // 进入网页时电脑随机变化
    let p = setInterval(x, 300);

    // 将所有胜负平记录赋值为0
    wjVictory.innerHTML = wjLose.innerHTML = wjAlike.innerHTML
        = pcVictory.innerHTML = pcLose.innerHTML = pcAlike.innerHTML = 0;
    // 点击开始游戏
    start.addEventListener('click', function () {
        select.style.display = "block";
        start.style.display = "none";
        dsp = setInterval(x, 20);
    })


    // 玩家出布的情况下
    bu.addEventListener('click', function () {
        wjImg.src = 'img/bu.jpg';
        clearInterval(dsp);
        clearInterval(p);

        // 开挂情况下
        // 百分百胜情况下
        if (a == 1) {
            index = 3;
            select.style.display = "none";
            resultVictory.style.display = "block";
            wjVictory.innerHTML = parseInt(wjVictory.innerHTML) + 1;
            pcLose.innerHTML = parseInt(pcLose.innerHTML) + 1;
            pcImg.src = arr[2];
        }
        // 百分百败的情况下
        else if (a == 0 && b == 1) {
            select.style.display = "none";
            resultLose.style.display = "block";
            pcVictory.innerHTML = parseInt(pcVictory.innerHTML) + 1;
            wjLose.innerHTML = parseInt(wjLose.innerHTML) + 1;
            pcImg.src = arr[1];

            index = 3;
        } else {
            index;
        }

        // 正常情况下
        if (index == 0) {
            select.style.display = "none";
            resultAlike.style.display = "block";
            wjAlike.innerHTML = parseInt(wjAlike.innerHTML) + 1;
            pcAlike.innerHTML = parseInt(pcAlike.innerHTML) + 1;
        } else if (index == 1) {
            select.style.display = "none";
            resultLose.style.display = "block";
            pcVictory.innerHTML = parseInt(pcVictory.innerHTML) + 1;
            wjLose.innerHTML = parseInt(wjLose.innerHTML) + 1;
        } else if (index == 2) {
            select.style.display = "none";
            resultVictory.style.display = "block";
            wjVictory.innerHTML = parseInt(wjVictory.innerHTML) + 1;
            pcLose.innerHTML = parseInt(pcLose.innerHTML) + 1;
        }

    })


    // 玩家出剪刀的情况下
    jiandao.addEventListener('click', function () {
        wjImg.src = 'img/jiandao.jpg';
        clearInterval(dsp);
        clearInterval(p);

        // 开挂情况下
        // 百分百胜情况下
        if (a == 1) {
            index = 3;
            select.style.display = "none";
            resultVictory.style.display = "block";
            wjVictory.innerHTML = parseInt(wjVictory.innerHTML) + 1;
            pcLose.innerHTML = parseInt(pcLose.innerHTML) + 1;
            pcImg.src = arr[0];
        }
        // 百分百败的情况下
        else if (a == 0 && b == 1) {
            index = 3;
            select.style.display = "none";
            resultLose.style.display = "block";
            pcVictory.innerHTML = parseInt(pcVictory.innerHTML) + 1;
            wjLose.innerHTML = parseInt(wjLose.innerHTML) + 1;
            pcImg.src = arr[2];
        } else {
            index;
        }

        // 正常情况下
        if (index == 0) {
            select.style.display = "none";
            resultVictory.style.display = "block";
            wjVictory.innerHTML = parseInt(wjVictory.innerHTML) + 1;
            pcLose.innerHTML = parseInt(pcLose.innerHTML) + 1;
        } else if (index == 1) {
            select.style.display = "none";
            resultAlike.style.display = "block";
            wjAlike.innerHTML = parseInt(wjAlike.innerHTML) + 1;
            pcAlike.innerHTML = parseInt(pcAlike.innerHTML) + 1;
        } else if (index == 2) {
            select.style.display = "none";
            resultLose.style.display = "block";
            pcVictory.innerHTML = parseInt(pcVictory.innerHTML) + 1;
            wjLose.innerHTML = parseInt(wjLose.innerHTML) + 1;
        }

    })


    // 玩家出石头的情况下
    shitou.addEventListener('click', function () {
        wjImg.src = 'img/shitou.jpg';
        clearInterval(dsp);
        clearInterval(p);

        // 百分百胜情况下
        if (a == 1) {
            index = 3;
            select.style.display = "none";
            resultVictory.style.display = "block";
            wjVictory.innerHTML = parseInt(wjVictory.innerHTML) + 1;
            pcLose.innerHTML = parseInt(pcLose.innerHTML) + 1;
            pcImg.src = arr[1];
        } else if (a == 0 && b == 1) {
            select.style.display = "none";
            resultLose.style.display = "block";
            pcVictory.innerHTML = parseInt(pcVictory.innerHTML) + 1;
            wjLose.innerHTML = parseInt(wjLose.innerHTML) + 1;
            pcImg.src = arr[0];
            index = 3;
        } else {
            index;
        }

        // 正常情况下
        if (index == 0) {
            select.style.display = "none";
            resultLose.style.display = "block";
            pcVictory.innerHTML = parseInt(pcVictory.innerHTML) + 1;
            wjLose.innerHTML = parseInt(wjLose.innerHTML) + 1;
        } else if (index == 1) {
            select.style.display = "none";
            resultVictory.style.display = "block";
            wjVictory.innerHTML = parseInt(wjVictory.innerHTML) + 1;
            pcLose.innerHTML = parseInt(pcLose.innerHTML) + 1;
        } else if (index == 2) {
            select.style.display = "none";
            resultAlike.style.display = "block";
            wjAlike.innerHTML = parseInt(wjAlike.innerHTML) + 1;
            pcAlike.innerHTML = parseInt(pcAlike.innerHTML) + 1;
        }
    })

    // 当玩家点击继续游戏时
    for (let i = 0; i < nextgame.length; i++) {
        nextgame[i].addEventListener('click', function () {
            start.style.display = "none";
            resultAlike.style.display = "none";
            resultVictory.style.display = "none";
            resultLose.style.display = "none";
            select.style.display = "block";
            dsp = setInterval(x, 20)
        })
    }

    // 点击退出游戏时
    for (let j = 0; j < quitgame.length; j++) {
        quitgame[j].addEventListener('click', function () {
            // \u0020空格符
            alert('您这局游戏有' + wjVictory.innerHTML + '胜局,\u0020有' + wjLose.innerHTML + '败局,\u0020有' + wjAlike.innerHTML + '平局');
            wjVictory.innerHTML = wjLose.innerHTML = wjAlike.innerHTML
                = pcVictory.innerHTML = pcLose.innerHTML = pcAlike.innerHTML = 0;
            start.style.display = "block";
            resultAlike.style.display = "none";
            resultVictory.style.display = "none";
            resultLose.style.display = "none";
            select.style.display = "none";
            p = setInterval(x, 300)
        })
    }


})


