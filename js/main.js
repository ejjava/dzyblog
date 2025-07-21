// main.js - 用于处理文章数据的加载和显示（根目录版本）

// 全局变量
let articlesData = [];
const defaultCover = 'https://www.dmoe.cc/random.php';

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面类型并执行相应逻辑
    if (document.querySelector('#WenZhang-NeiRong')) {
        // 首页 - 显示最近3篇文章
        loadHomePage();
    } else if (document.querySelector('#myUL')) {
        // 文章列表页
        loadArticlesList();
    } else if (document.querySelector('.NeiRong-PaiBan') && window.location.pathname.includes('detail.html')) {
        // 文章详情页
        loadArticleDetail();
    }
});

// 加载首页内容
function loadHomePage() {
    fetchArticlesData().then(data => {
        // 按ID降序排序，获取最新的3篇文章
        const recentArticles = data.sort((a, b) => b.ID - a.ID).slice(0, 3);
        const container = document.getElementById('WenZhang-NeiRong');
        
        // 清空加载中的占位内容
        container.innerHTML = '';
        
        // 为每篇文章创建卡片
        recentArticles.forEach(article => {
            const articleElement = createArticleCard(article);
            container.appendChild(articleElement);
        });
    }).catch(error => {
        console.error('加载文章数据失败:', error);
        document.getElementById('WenZhang-NeiRong').innerHTML = 
            '<p class="error-message">加载文章失败，请刷新重试</p>';
    });
}

// 加载文章列表页
function loadArticlesList() {
    fetchArticlesData().then(data => {
        // 按ID降序排序
        const sortedArticles = data.sort((a, b) => b.ID - a.ID);
        const listContainer = document.getElementById('myUL');
        
        // 清空加载中的占位内容
        listContainer.innerHTML = '';
        
        // 为每篇文章创建列表项
        sortedArticles.forEach(article => {
            const listItem = createArticleListItem(article);
            listContainer.appendChild(listItem);
        });
    }).catch(error => {
        console.error('加载文章列表失败:', error);
        document.getElementById('myUL').innerHTML = 
            '<li class="error-message">加载文章列表失败，请刷新重试</li>';
    });
}

// 加载文章详情页
function loadArticleDetail() {
    // 从URL获取文章ID
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
        document.querySelector('.NeiRong-PaiBan').innerHTML = 
            '<p class="error-message">文章ID参数缺失</p>';
        return;
    }
    
    fetchArticlesData().then(data => {
        const article = data.find(item => item.ID === articleId);
        
        if (!article) {
            document.querySelector('.NeiRong-PaiBan').innerHTML = 
                '<p class="error-message">未找到指定文章</p>';
            return;
        }
        
        // 更新页面内容
        document.querySelector('.NeiRong-BiaoTi').textContent = article.标题;
        document.querySelector('.NeiRong-FaBu').innerHTML = 
            `发布于: ${article.创建时间} 更新：${article.修改时间}`;
        
        // 设置内容区域
        const contentDiv = document.querySelector('.NeiRong-PaiBan');
        contentDiv.innerHTML = article.内容;
        
        // 添加分类信息
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'FenLei-outside';
        categoryDiv.innerHTML = `分类: ${article.分类} | 作者: ${article.作者}`;
        contentDiv.appendChild(categoryDiv);
        
        // 添加返回链接
        const returnLink = document.createElement('a');
        returnLink.href = 'archives.html';
        returnLink.className = 'return-link';
        returnLink.textContent = '← 返回文章列表';
        contentDiv.appendChild(returnLink);
        
    }).catch(error => {
        console.error('加载文章详情失败:', error);
        document.querySelector('.NeiRong-PaiBan').innerHTML = 
            '<p class="error-message">加载文章失败，请刷新重试</p>';
    });
}

// 从JSON文件获取文章数据（根目录版本）
function fetchArticlesData() {
    // 如果已经加载过数据，直接返回
    if (articlesData.length > 0) {
        return Promise.resolve(articlesData);
    }
    
    // 否则从JSON文件加载（根目录下的articles.json）
    return fetch('articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应不正常');
            }
            return response.json();
        })
        .then(data => {
            articlesData = data;
            return data;
        });
}

// 创建文章卡片元素 (用于首页)
function createArticleCard(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'WenZhang';
    
    // 封面图片
    const img = document.createElement('img');
    img.height = 80;
    img.className = 'WenZhang-img';
    img.alt = article.标题;
    img.src = article.封面链接 || defaultCover;
    
    // 内容区域
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // 标题
    const title = document.createElement('h1');
    title.className = 'WenZhang-BiaoTi';
    title.textContent = article.标题;
    
    // 简介
    const desc = document.createElement('p');
    desc.className = 'WenZhang-JieShao';
    desc.textContent = article.简介;
    
    // 查看按钮
    const linkDiv = document.createElement('div');
    linkDiv.style.textAlign = 'right';
    
    const link = document.createElement('a');
    link.href = `detail.html?id=${article.ID}`;
    link.className = 'WenZhang-CaKan';
    link.style.marginRight = '20px';
    link.textContent = '查看';
    
    linkDiv.appendChild(link);
    
    // 组装元素
    cardBody.appendChild(title);
    cardBody.appendChild(desc);
    cardBody.appendChild(linkDiv);
    
    articleDiv.appendChild(img);
    articleDiv.appendChild(cardBody);
    
    return articleDiv;
}

// 创建文章列表项 (用于文章列表页)
function createArticleListItem(article) {
    const listItem = document.createElement('li');
    
    // 创建链接
    const link = document.createElement('a');
    link.href = `detail.html?id=${article.ID}`;
    link.textContent = article.标题;
    
    // 添加额外信息
    const infoSpan = document.createElement('span');
    infoSpan.className = 'article-meta';
    infoSpan.textContent = ` - ${article.分类} (${article.创建时间})`;
    infoSpan.style.color = '#666';
    infoSpan.style.fontSize = '0.9em';
    
    link.appendChild(infoSpan);
    listItem.appendChild(link);
    
    return listItem;
}