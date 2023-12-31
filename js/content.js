
document.addEventListener("DOMContentLoaded", function() {
  var contentData = [
    {
      title: "高中法向量求法（持续更新）",
      text: "简单高效的法向量求法!",
      image: "",
      link: "./archives/2023/10.2.html"
    },
    {
      title: "博客更新了",
      text: "更新了整体框架，评论，图片浏览",
      image: "",
      link: "./archives/2023/8.3.html"
    },
    {
      title: "八月第一天的夜晚",
      text: "这个八月第一天晚上随手拍的一张照片，就简单拿来分享一下",
      image: null,
      link: "./archives/2023/8.2.html"
    },
    {
      title: "Hello World",
      text: "这是我手搓的一个乐射博客",
      image: "https://www.dmoe.cc/random.php",
      link: "./archives/2023/8.1.html"
    }
  ];

  var cardContainer = document.getElementById('cardContainer');
  var cardTemplate = document.getElementById('cardTemplate');

  contentData.forEach(function(data) {
    var newCard = cardTemplate.cloneNode(true);
    newCard.removeAttribute('id');
    newCard.querySelector('.card-title').textContent = data.title;
    newCard.querySelector('.card-text').textContent = data.text;

    var imageUrl = data.image ? data.image : "https://www.dmoe.cc/random.php";
    var randomUrl = imageUrl + "?random=" + Math.random();
    newCard.querySelector('.card-img-top').setAttribute("src", randomUrl);

    var linkElement = newCard.querySelector('.btn');
    linkElement.setAttribute("href", data.link);

    cardContainer.appendChild(newCard);
  });

  // 移除卡片模板
  cardTemplate.remove();
});