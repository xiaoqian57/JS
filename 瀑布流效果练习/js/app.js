window.onload = function() {
    imgLocation("container", "box");
    var imgData = {
        "data": [{
            "src": "img/1.jpg"
        }, {
            "src": "img/2.jpg"
        }, {
            "src": "img/3.jpg "
        }, {
            "src": "img/4.jpg"
        }, {
            "src": "img/5.jpg"
        }, {
            "src": "img/6.jpg"
        }, {
            "src": "img/7.jpg"
        }, {
            "src": "img/8.jpg"
        }, {
            "src": "img/9.jpg"
        }, {
            "src": "img/10.jpg"
        }]
    }
    window.onscroll = function() {
        if (checkFlag()) {
            var cparent = document.getElementById("container");
            for (var i = 0; i < imgData.data.length; i++) {
                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);
                var boximg = document.createElement("div");
                boximg.className = "box_img";
                ccontent.appendChild(boximg);
                var img = document.createElement("img");
                img.src = imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container", "box");
        }
    }
}

function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElements(cparent, "box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    console.log("最后一张图片高度距顶部的距离：" + lastContentHeight);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("scrollTop:" + scrollTop);
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.log("最后一个距顶部高度：" + lastContentHeight + "; " + "滚动高度：" + scrollTop + "; " + "页面高度：" + pageHeight);
    var shortestContentHeight = 0;
    var a = ccontent[ccontent.length - cols],
        b = ccontent[ccontent.length - 1];
    var min = a.offsetTop;
    for (var i = a; i <= b; i++) {
        if (i.offsetTop < min) {
            min = i.offsetTop;
        }
    }
    console.log("最后一行最短的：" + min);
    /*if (lastContentHeight < scrollTop + pageHeight) {
        return true;
    }*/
    if (min < scrollTop + pageHeight) {
        return true;
    }
}

var cols;

function imgLocation(parent, content) {
    //将parent下的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElements(cparent, content);
    var imgWidth = ccontent[0].offsetWidth;
    cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth * cols + "px; margin: 0 auto;";

    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        } else {
            //把下一行的图片放在上一行最低高度的那张
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getminHeightLocation(BoxHeightArr, minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
            console.log(minHeight);
        }
    }
}

function getminHeightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElements(parent, content) {
    var contentArr = [];
    var allContents = parent.getElementsByTagName("*");
    for (var i = 0; i < allContents.length; i++) {
        if (allContents[i].className == content) {
            contentArr.push(allContents[i]);
        }
    }
    return contentArr;
}
