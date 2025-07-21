document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const blogGrid = document.getElementById('blogGrid');
    const tagList = document.getElementById('tagList');
    const searchInput = document.getElementById('searchInput');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // 存储所有博客文章和标签
    let allPosts = [];
    let allTags = new Set();
    let activeTag = 'all';
    
    // 从JSON文件加载数据
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            allPosts = data.posts;
            
            // 提取所有标签
            allPosts.forEach(post => {
                post.tags.forEach(tag => allTags.add(tag));
            });
            
            // 显示所有文章和标签
            displayPosts(allPosts);
            displayTags();
            
            // 设置搜索事件
            setupSearch();
        });
  
    
    // 显示博客文章
    function displayPosts(posts) {
        blogGrid.innerHTML = '';
        
        if (posts.length === 0) {
            blogGrid.innerHTML = '<p class="no-results">没有找到匹配的文章</p>';
            return;
        }
        
        posts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <h2>${post.title}</h2>
                <p class="excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="date">${post.date}</span>
                    <div class="tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            // 点击卡片跳转到详情页
            blogCard.addEventListener('click', () => {
                window.location.href = `detail.html?id=${post.id}`;
            });
            
            blogGrid.appendChild(blogCard);
        });
    }
    
    // 显示标签分类
    function displayTags() {
        tagList.innerHTML = '';
        
        // 添加"全部"标签
        const allTag = document.createElement('span');
        allTag.className = activeTag === 'all' ? 'tag active' : 'tag';
        allTag.textContent = '全部';
        allTag.addEventListener('click', () => {
            activeTag = 'all';
            displayPosts(allPosts);
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            allTag.classList.add('active');
        });
        tagList.appendChild(allTag);
        
        // 添加其他标签
        allTags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = activeTag === tag ? 'tag active' : 'tag';
            tagElement.textContent = tag;
            tagElement.addEventListener('click', () => {
                activeTag = tag;
                const filteredPosts = allPosts.filter(post => post.tags.includes(tag));
                displayPosts(filteredPosts);
                document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
                tagElement.classList.add('active');
            });
            tagList.appendChild(tagElement);
        });
    }
    
    // 设置搜索功能
    function setupSearch() {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            
            if (!searchTerm) {
                if (activeTag === 'all') {
                    displayPosts(allPosts);
                } else {
                    const filteredPosts = allPosts.filter(post => post.tags.includes(activeTag));
                    displayPosts(filteredPosts);
                }
                return;
            }
            
            const filteredPosts = allPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.excerpt.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            
            displayPosts(filteredPosts);
        });
    }
});


// 主题管理器
const ThemeManager = {
    // 初始化主题
    init() {
        // 监听storage事件（跨页面同步）
        window.addEventListener('storage', (event) => {
            if (event.key === 'theme') {
                this.applyTheme(event.newValue);
            }
        });
        
        // 应用当前主题
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(savedTheme);
    },
    
    // 应用主题
    applyTheme(theme) {
        document.body.dataset.theme = theme === 'dark' ? 'dark' : '';
        this.updateThemeIcon(theme === 'dark');
    },
    
    // 更新主题图标
    updateThemeIcon(isDark) {
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.innerHTML = isDark 
                ? `<svg class="theme-icon" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>`
                : `<svg class="theme-icon" viewBox="0 0 24 24"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/></svg>`;
        }
    },
    
    // 切换主题
    toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // 保存到localStorage
        localStorage.setItem('theme', newTheme);
        
        // 应用新主题
        this.applyTheme(newTheme);
        
        // 触发storage事件（跨页面同步）
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'theme',
            newValue: newTheme,
            oldValue: currentTheme,
            storageArea: localStorage
        }));
    }
};

// 初始化主题管理器
ThemeManager.init();

// 主题切换按钮事件
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => ThemeManager.toggleTheme());
    }
});