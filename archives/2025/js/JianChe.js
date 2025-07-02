
    
        document.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;

            // 检查是否滚动到800px
            if (scrollPosition >= 500) {
                // 显示弹窗

                document.querySelector('.HanHuiDingBu').style.visibility = 'visible';
            } else {
                document.querySelector('.HanHuiDingBu').style.visibility = 'hidden';
            }

        });



        document.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const menu = document.querySelector('.CaiDan');

            if (scrollPosition >= 80) {
                // 滚动 ≥8px 时隐藏菜单
                menu.style.visibility = 'hidden';
            } else {
                // 滚动 <80px 时显示菜单
                menu.style.visibility = 'visible';
            }
        });
    