
        window.addEventListener('load', function() {
            var updateNotification = document.getElementById('update-notification');

            // 模拟每次启动都有更新
            var hasUpdate = true;

            if (hasUpdate) {
                updateNotification.style.transform = 'translateX(0)';
                updateNotification.style.opacity = '1';
                setTimeout(function() {
                    updateNotification.style.transform = 'translateX(100%)';
                    updateNotification.style.opacity = '0';
                }, 3000); // 过3秒后自动隐藏
            }



        });
    