    document.querySelector('.CaiDan').addEventListener('click', function() {
            const element = document.querySelector('.CheHuaLan');
            if (element.style.left === '-60%' || !element.style.left) {
                element.style.left = '0';
            } else {
                element.style.left = '-60%';
            }
        });