// 加载JSON数据
function loadArticles(callback) {
    fetch('data/articles.json')
        .then(response => {
            if (!response.ok) throw new Error('网络响应不正常');
            return response.json();
        })
        .then(data => callback(data))
        .catch(error => {
            console.error('加载文章失败:', error);
            alert('文章加载失败，请刷新重试');
        });
}

// 主页初始化（显示最新3篇文章）
function initHomePage() {
    loadArticles(function(articles) {
        const container = document.getElementById('WenZhang-NeiRong');
        if (!container) return;
        
        container.innerHTML = '';
        
        const validArticles = articles.filter(a => a.标题 && a.简介);
        validArticles.sort((a, b) => parseInt(b.ID) - parseInt(a.ID));
        
        validArticles.slice(0, 3).forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'WenZhang';
            const randomCover = `https://www.dmoe.cc/random.php?t=${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
            
            articleDiv.innerHTML = `
              <img height="80" class="WenZhang-img" 
                     src="${article.封面链接 || randomCover}" 
                     alt="${article.标题}" 
                     onerror="this.src='${randomCover}'">
                <div class="card-body">
                    <h1 class="WenZhang-BiaoTi">${article.标题}</h1>
                    <p class="WenZhang-JieShao">${article.简介}</p>
                    <div style="text-align: right;">
                        <a href="./detail.html?id=${article.ID}" 
                           class="WenZhang-CaKan" 
                           style="margin-right: 20px;">查看</a>
                    </div>
                </div>
                <br>
                <br>
            `;
            container.appendChild(articleDiv);
        });
    });
}

// 文章列表页初始化（archives.html）
function initArchivePage() {
    loadArticles(function(articles) {
        const container = document.getElementById('myUL');
        if (!container) return;
        
        container.innerHTML = '';
        
        const validArticles = articles.filter(a => a.标题 && a.简介);
        validArticles.sort((a, b) => parseInt(b.ID) - parseInt(a.ID));
        
        validArticles.forEach(article => {
            const li = document.createElement('li');
            const dateStr = article.修改时间.replace(/年|月/g, '-').replace('日', '');
            li.innerHTML = `
                <a href="detail.html?id=${article.ID}">
                    ${dateStr}-${article.标题}-${article.分类}
                </a><br>
            `;
            container.appendChild(li);
        });

        // 确保搜索功能在文章加载后工作
        setTimeout(() => {
            const input = document.getElementById('myInput');
            if (input) {
                input.addEventListener('keyup', myFunction);
                console.log('搜索功能已初始化');
            }
        }, 100);
    });
}

// 文章详情页初始化（detail.html）
function initDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const container = document.getElementById('NeiRong');
    
    if (!container) return;
    
    if (!articleId) {
        container.innerHTML = '<h1>文章不存在</h1><a href="archives.html">返回文章列表</a>';
        return;
    }
    
    loadArticles(function(articles) {
        const article = articles.find(a => a.ID === articleId);
        
        if (!article || !article.标题) {
            container.innerHTML = '<h1>文章不存在</h1><a href="archives.html">返回文章列表</a>';
            return;
        }
        
        container.innerHTML = `
            <div id="NeiRong-KaPian" class="NeiRong">
                <h1 class="NeiRong-BiaoTi">${article.标题}</h1>
                <p class="NeiRong-FaBu">
                    发布于:${article.创建时间} 
                    更新：${article.修改时间} 
                    阅读量<span id="busuanzi_value_page_pv"></span>次
                </p>
                <hr width="80%">
                <br>
                <div class="NeiRong-PaiBan">
                    ${article.内容}
                </div>
            </div>
            
            <div class="FenLei">
                <h2 class="NeiRong-h2">分类</h2>
                <hr width="80%">
                <div class="lianxi">
                    <br>
                    <a href="archives.html">${article.分类}</a>
                    <br>
                </div>
            </div>
        `;
    });
}

// 根据当前页面初始化
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('detail.html')) {
        initDetailPage();
    } else if (window.location.pathname.endsWith('archives.html')) {
        initArchivePage();
        // 双重保险初始化搜索
        setTimeout(() => {
            const input = document.getElementById('myInput');
            if (input) {
                input.addEventListener('keyup', myFunction);
                console.log('二次搜索功能初始化');
            }
        }, 500);
    } else {
        initHomePage();
    }
});