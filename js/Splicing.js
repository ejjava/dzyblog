// 获取div元素
var contentDiv = document.getElementById("content");

// 添加更多的HTML内容
var cardHtml = `<div class="card m-2 mdui-ripple">
        <div class="card-body">
            <blockquote class="blockquote">
                <h4 class="article-title"><a class="text-body" href="/2023/8.2/index.html"><span>八月第一天的夜晚</span></a></h4>
                <footer class="blockquote-footer">2023.8.2</cite></footer>
                <a href="" class="badge badge-info">生活</a>
            </blockquote>
            <h6 class="article-title text-body"><a class="text-body" href="/2023/8.2/index.html"><span>这个八月第一天晚上随手拍的一张照片，就简单拿来分享一下</span></a></h6>
        </div>
    </div>
    <div class="card m-2 mdui-ripple">
        <div class="card-body">
            <blockquote class="blockquote">
                <h4 class="article-title"><a class="text-body" href="/2023/8.1/index.html"><span>Hello World</span></a></h4>
                <footer class="blockquote-footer">2023.8.1</cite></footer>
                <a href="" class="badge badge-info">网站历程</a>
            </blockquote>
            <h6 class="article-title text-body"><a class="text-body" href="/2023/8.1/index.html"><span>这是我手搓的一个乐射博客</span></a></h6>
        </div>
    </div>`;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;


// 获取div元素
var contentDiv = document.getElementById("Footer");

// 添加更多的HTML内容
var cardHtml = `



    <div class="container-fluid">
        <h6 class="text-center">&copy;2023DZY's Blog</h6>
        <p class="mb-0 text-center"><a class="nav-link" href="https://getbootstrap.com/">框架:Bootstrap 主题:自己写的^0^</a></p>

    </div>
    
    
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;




// 获取div元素
var contentDiv = document.getElementById("head");

// 添加更多的HTML内容
var cardHtml = `

 <ul class="nav">
        <li class="nav-item">
            <a class="nav-link disabled">DZY's Blog</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="">主页</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./Archiving.html">归档</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="./About.html">关于</a>
        </li>
    </ul>
    <br>
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;