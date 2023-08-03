
    // 角.html的内容
    fetch('Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Footer').innerHTML = data;
        })
        .catch(error => console.error(error));

    // 获取内容.html的内容
    fetch('content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error(error));
        
         // 获取头部.html的内容
    fetch('head.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('head').innerHTML = data;
        })
        .catch(error => console.error(error));