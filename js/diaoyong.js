// 获取div元素
var contentDiv = document.getElementById("chehuanlan");

// 添加更多的HTML内容
var cardHtml = `
<div class="mdui-appbar mdui-shadow-0 mdui-appbar-scroll-hide mdui-appbar-fixed text-center">
        <div class="mdui-toolbar">
            <a href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-drawer="{target: '#left-drawer'}">
                <i class="mdui-icon material-icons">menu</i>
            </a>
            <a href="javascript:;" class="mdui-typo-title">DZY'blog</a>
            <div class="mdui-toolbar-spacer"></div>

            <a href="javascript:mdui.alert('QQ:914933408<br>版本:20231001<br>网站还在开发中，可能不完善，抱歉!','关于');" class="mdui-btn mdui-btn-icon">

                <i class="mdui-icon material-icons">more_vert</i>
            </a>
        </div>
    </div>
    <div class="mdui-drawer text-center" id="left-drawer">
        <br><br><br>
        <img class="text-center mdui-img-circle" src="http://q2.qlogo.cn/headimg_dl?dst_uin=914933408&spec=100" />
        <br><br>
        <a href="./archives/index.html" class="p-2 w-75 btn btn-outline-dark shou" role="button" aria-pressed="true">搜索</a>
        <br><br>
        <a href="#" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons che">&#xe88a;</i> 首页
        </a><br>
        <a href="./archives/item.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe2bc;</i> 项目
        </a>
        <br>
        <a href="./archives/index.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe85d;</i> 文章
        </a>
        <br>
        <a href="./archives/404.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe01b;</i> 时光
        </a>
        <br>
        <a href="./archives/404.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe5c3;</i> 分类
        </a>
        <br>
        <a href="./archives/404.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i <i class="mdui-icon material-icons">&#xe001;</i> 关于
        </a>
        <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=0)" width="60%" color=#FFFFFF SIZE=1>
        <p>Other</p>
        <a href="./archives/suisuiread.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe87e;</i> 碎碎念
        </a>
        <br>
    </div>
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;


// 获取div元素
var contentDiv = document.getElementById("Footer");

// 添加更多的HTML内容
var cardHtml = `

 <div id="Footer"></div>
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
var cardHtml = `<ul class="nav">
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


// 获取div元素
var contentDiv = document.getElementById("Details");

// 添加更多的HTML内容
var cardHtml = ` <div class="card m-2">
  <div class="card-body">
    <h6>发布时间:2023.8.2</h6>
  
            </script>本站总访问量<span id="busuanzi_value_site_pv"></span>次！
  </div>
</div>
    
    <div class="alert alert-info m-2" role="alert">
        发表违反中华人民共和国法律,不良广告，辱骂等内容，后果自负！
    </div>
    
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;