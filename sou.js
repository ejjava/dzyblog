// 搜索功能
function myFunction() {
    try {
        const input = document.getElementById('myInput');
        const filter = input.value.toUpperCase();
        const ul = document.getElementById('myUL');
        const li = ul.getElementsByTagName('li');

        for (let i = 0; i < li.length; i++) {
            const a = li[i].getElementsByTagName('a')[0];
            if (a) {
                const txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    } catch (error) {
        console.error('搜索出错:', error);
    }
}

// 初始化搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('myInput');
    if (input) {
        input.addEventListener('keyup', myFunction);
        console.log('基础搜索功能已初始化');
    }
});
