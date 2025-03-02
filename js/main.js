// 产品数据
const productData = {
    car: {
      images: [
        "img/car1.jpg", "img/car2.jpg", "img/car3.jpg", "img/car4.jpg",
        "img/car5.jpg", "img/car6.jpg", "img/car7.jpg", "img/car8.jpg"
      ],
      titles: ["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8"]
    },
    bathroom: {
      images: [
        "img/bath1.jpg", "img/bath2.jpg", "img/bath3.jpg", "img/bath4.jpg",
        "img/bath5.jpg", "img/bath6.jpg", "img/bath7.jpg", "img/bath8.jpg"
      ],
      titles: ["bathroom1", "bathroom2", "bathroom3", "bathroom4", "bathroom5", "bathroom6", "bathroom7", "bathroom8"]
    },
    sports: {
      images: [
        "img/sports1.jpg", "img/sports2.jpg", "img/sports3.jpg", "img/sports4.jpg",
        "img/sports5.jpg", "img/sports6.jpg", "img/sports7.jpg", "img/sports8.jpg"
      ],
      titles: ["sports1", "sports2", "sports3", "sports4", "sports5", "sports6", "sports7", "sports8"]
    },
    furniture: {
      images: [
        "img/furniture1.jpg", "img/furniture2.jpg", "img/furniture3.jpg", "img/furniture4.jpg",
        "img/furniture5.jpg", "img/furniture6.jpg", "img/furniture7.jpg", "img/furniture8.jpg"
      ],
      titles: ["furniture1", "furniture2", "furniture3", "furniture4", "furniture5", "furniture6", "furniture7", "furniture8"],
    },
    electronics: {
      images: [
        "img/electronics1.jpg", "img/electronics2.jpg", "img/electronics3.jpg", "img/electronics4.jpg",
        "img/electronics5.jpg", "img/electronics6.jpg", "img/electronics7.jpg", "img/electronics8.jpg"
      ],
      titles: ["electronics1", "electronics2", "electronics3", "electronics4", "electronics5", "electronics6", "electronics7", "electronics8"],
    },
    machinery: {
      images: [
        "img/machinery1.jpg", "img/machinery2.jpg", "img/machinery3.jpg", "img/machinery4.jpg",
        "img/machinery5.jpg", "img/machinery6.jpg", "img/machinery7.jpg", "img/machinery8.jpg"
      ],
      titles:  ["machinery1", "machinery2", "machinery3", "machinery4", "machinery5", "machinery6", "machinery7", "machinery8"]
    }	
  };

// 切换产品
function changeProducts(category) {
    // ⭕️ 直接获取最新的语言，而不是用旧的
    const lang = localStorage.getItem("selectedLanguage") || "zh-CN"; 
    window.currentCategory = category; // 记录当前分类（用于语言切换）

    if (productData[category]) {
        let modalImages = document.querySelectorAll("#lb-uEaQGEDnpx .carousel-item img"); // 轮播图的图片
        let modalItems = document.querySelectorAll("#lb-uEaQGEDnpx .carousel-item"); // 轮播图的 `carousel-item`

        for (let i = 0; i < 8; i++) {
            let imgElement = document.getElementById(`product${i + 1}`);
            let linkElement = document.getElementById(`link${i + 1}`);
            let titleElement = document.getElementById(`title${i + 1}`);

            if (!imgElement || !linkElement || !titleElement) continue;

            let imageSrc = productData[category].images[i]; // 获取图片路径
            let titleKey = productData[category].titles[i]; // 🔹 获取翻译 Key

            imgElement.src = imageSrc; // 更新产品中心图片
            linkElement.href = imageSrc; // 更新点击放大的链接
            titleElement.innerText = translations[lang][titleKey] || titleKey; // 🔹 这里应用翻译

            // 更新轮播图的图片
            if (modalImages[i]) {
                modalImages[i].src = imageSrc;
                modalImages[i].alt = translations[lang][titleKey] || titleKey; // 🔹 这里应用翻译
            }

            // 确保轮播项的 `active` 状态
            modalItems.forEach(item => item.classList.remove("active"));
            if (modalItems[0]) modalItems[0].classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // ⭕ 获取上次用户选择的语言（localStorage 或 URL 参数）
    const savedLang = localStorage.getItem("selectedLanguage") || "zh-CN";

    // ✅ 确保页面内容按用户选择的语言翻译
    applyLanguage(savedLang);

    // ✅ 让下拉框的默认选项跟随用户上次的选择
    const languageSelector = document.getElementById("languageSelector");
    if (languageSelector) {
        languageSelector.value = savedLang;
    }
});
