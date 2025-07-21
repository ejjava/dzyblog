// 获取文章数据并渲染到首页
document.addEventListener('DOMContentLoaded', function() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('WenZhang-NeiRong');
            const template = document.getElementById('WenZhang-KaPian');
            
            // 清空模板
            container.innerHTML = '';
            
            // 按ID降序排序（ID越大越新）
            const sortedData = data.sort((a, b) => b.ID - a.ID);
            
            // 只取最新的3篇文章
            const latestArticles = sortedData.slice(0, 3);
            
            // 为每篇文章创建卡片
            latestArticles.forEach(article => {
                const card = template.cloneNode(true);
                card.style.display = 'block';
                
                // 设置文章信息
                const title = card.querySelector('.WenZhang-BiaoTi');
                title.textContent = article.标题;
                
                const desc = card.querySelector('.WenZhang-JieShao');
                desc.textContent = article.简介;
                
                const link = card.querySelector('.WenZhang-CaKan');
                link.href = `./archives/详情.html?id=${article.ID}`;
                
                // 处理封面图片
                const img = card.querySelector('.WenZhang-img');
                if (article.封面链接) {
                    img.src = article.封面链接;
                } else {
                    // 使用随机图片API，并添加时间戳确保每张图片不同
                    img.src = `https://www.dmoe.cc/random.php?${Date.now() + Math.random()}`;
                    img.onerror = function() {
                        // 如果随机图片加载失败，使用默认占位图
                        this.src = 'https://via.placeholder.com/150?text=No+Cover';
                    };
                }
                
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('加载文章数据失败:', error);
            const container = document.getElementById('WenZhang-NeiRong');
            container.innerHTML = '<p>加载文章失败，请稍后再试。</p>';
        });
});
