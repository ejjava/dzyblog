// 获取URL中的文章ID参数
function getArticleIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// 加载并显示文章内容
function loadArticleContent() {
    const articleId = getArticleIdFromUrl();
    
    if (!articleId) {
        document.getElementById('article-title').textContent = '文章未找到';
        document.getElementById('article-content').textContent = '请从首页或文章列表页正确访问文章。';
        return;
    }

    fetch('../data.json')
        .then(response => response.json())
        .then(articles => {
            const article = articles.find(item => item.ID === articleId);
            
            if (article) {
                // 更新页面内容
                document.title = `${article.标题} - DZY's Blog`;
                document.getElementById('article-title').textContent = article.标题;
                document.getElementById('article-meta').textContent = 
                    `发布于: ${article.创建时间} 更新：${article.修改时间} 本文总阅读量`;
                document.getElementById('article-content').innerHTML = article.内容;
                document.getElementById('article-category').textContent = article.分类;
                document.getElementById('article-category').href = `index.html?category=${encodeURIComponent(article.分类)}`;
            } else {
                document.getElementById('article-title').textContent = '文章未找到';
                document.getElementById('article-content').textContent = '请求的文章不存在或已被删除。';
            }
        })
        .catch(error => {
            console.error('加载文章失败:', error);
            document.getElementById('article-title').textContent = '加载失败';
            document.getElementById('article-content').textContent = '加载文章内容时出错，请稍后再试。';
        });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadArticleContent);
