let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/*你好，我叫 cloud
接下来我演示一下我的前端功底
首先我要准备一个 div */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把 div 变成一个八卦图
注意看好了
首先，把 div 变成一个圆*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是阴阳形成的
一黑一白*/
#div1 {
    background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*再加两个神秘的小球*/
#div1:before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    transform: translateY(50%);
}
#div1:after {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    transform: translate(100%,-50%);
}
`;
let string2 = '';
let n = 0;
html.innerHTML = string.substring(0,n);

let step = () => {
    if(n < string.length){
        setTimeout(() => {
            if (string[n] === '\n'){
                string2 += '<br>';
            }else if(string[n] === ' ') {
                string2 += '&nbsp;'
            }else {
                string2 += string[n];
            }
            html.innerHTML = string2;
            style.innerHTML = string.substring(0,n);
            window.scrollTo(0,99999);
            html.scrollTo(0,99999);
            n++;
            step();
        }, 1);
    }
}

step();


