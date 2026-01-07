// 移除原本的 marineAnimals 和 knowledgeArticles 陣列定義
// 改為從 JSON 檔案載入

let marineAnimals = [];
let knowledgeArticles = [];

// 全域變數 - 標記資料是否已載入
let isDataLoaded = false;

// 使用 async/await 來載入 JSON 資料
async function loadData() {
    try {
        // 載入動物資料
        const animalsResponse = await fetch('./data/animals.json');
        marineAnimals = await animalsResponse.json();
        
        // 載入知識文章
        const knowledgeResponse = await fetch('./data/knowledge.json');
        knowledgeArticles = await knowledgeResponse.json();
        
        isDataLoaded = true;
        
        // 初始化應用程式
        initializeApp();
    } catch (error) {
        console.error('載入資料失敗:', error);
        // 可以顯示錯誤訊息給使用者
        showErrorMessage();
    }
}

// 初始化應用程式
function initializeApp() {
    renderAnimalCards(marineAnimals);
    renderKnowledgeList(knowledgeArticles);
    setupEventListeners();
    initMap();
    updateAboutStats();
    showPage('pokedex');
}

// 錯誤處理函數
function showErrorMessage() {
    const animalGrid = document.getElementById('animalGrid');
    if (animalGrid) {
        animalGrid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>無法載入資料，請檢查網路連線或稍後再試。</p>
            </div>
        `;
    }
}

// 頁面元素 - 移動到最上方，確保在其他函數之前定義
const pages = {
    pokedex: document.getElementById('pokedexPage'),
    animalDetail: document.getElementById('animalDetailPage'),
    knowledge: document.getElementById('knowledgePage'),
    about: document.getElementById('aboutPage'),
    article: document.getElementById('articlePage')
};

const animalGrid = document.getElementById('animalGrid');
const knowledgeList = document.getElementById('knowledgeList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const advancedFilter = document.getElementById('advancedFilter');
const filterApply = document.getElementById('filterApply');
const filterCancel = document.getElementById('filterCancel');
const sortBtn = document.getElementById('sortBtn');
const sortOptions = document.getElementById('sortOptions');
const categoryButtons = document.querySelectorAll('.category-btn');
const backToPokedexBtn = document.getElementById('backToPokedex');
const backToKnowledgeBtn = document.getElementById('backToKnowledge');
const tabButtons = document.querySelectorAll('.tab-btn');
const pokedexLink = document.getElementById('pokedexLink');
const knowledgeLink = document.getElementById('knowledgeLink');
const aboutLink = document.getElementById('aboutLink');
const homeLink = document.getElementById('homeLink');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

// 關於我們頁面的統計數字
const statAnimals = document.getElementById('statAnimals');
const statArticles = document.getElementById('statArticles');

// 當前狀態
let currentFilter = {
    category: 'all',
    size: [],
    depth: [],
    trait: [],
    habitat: []
};
let currentSort = 'default';
let currentAnimalId = 1;
let currentMap = null;
let pendingFilter = {...currentFilter}; // 暫存的篩選條件

// 刪除重複的 DOMContentLoaded 事件監聽器
// 只保留一個 DOMContentLoaded 事件監聽器
document.addEventListener('DOMContentLoaded', function() {
    // 改為載入資料
    loadData();
});

// 設置事件監聽器
function setupEventListeners() {
    // 檢查元素是否存在
    if (!filterBtn) {
        console.error('filterBtn 元素不存在');
        return;
    }
    
    // 篩選按鈕
    filterBtn.addEventListener('click', function() {
        advancedFilter.classList.toggle('active');
        // 重置暫存篩選為當前篩選
        pendingFilter = {...currentFilter};
        // 更新暫存篩選的勾選狀態
        updateFilterCheckboxes();
    });

    // 排序按鈕
    sortBtn.addEventListener('click', function() {
        sortOptions.classList.toggle('active');
    });

    // 篩選應用按鈕
    filterApply.addEventListener('click', function() {
        // 確保資料已載入
        if (!isDataLoaded) {
            console.log('資料尚未載入，無法應用篩選');
            return;
        }
        // 應用暫存篩選
        currentFilter = {...pendingFilter};
        advancedFilter.classList.remove('active');
        applyFiltersAndSort();
    });

    // 篩選重置按鈕
    filterCancel.addEventListener('click', function() {
        // 確保資料已載入
        if (!isDataLoaded) {
            console.log('資料尚未載入，無法重置');
            return;
        }
        
        // 重置所有篩選條件為初始狀態
        pendingFilter = {
            category: 'all',
            size: [],
            depth: [],
            trait: [],
            habitat: []
        };
        
        // 同時也重置當前篩選，這樣會立即生效
        currentFilter = {...pendingFilter};
        
        // 更新篩選勾選狀態
        updateFilterCheckboxes();
        
        // 關閉篩選面板
        advancedFilter.classList.remove('active');
        
        // 重置類別按鈕（全部類別）
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('.category-btn.all').classList.add('active');
        
        // 重置搜尋框
        searchInput.value = '';
        
        // 重置排序到預設
        currentSort = 'default';
        sortBtn.innerHTML = '<i class="fas fa-sort-amount-down"></i><span>排序: 預設</span>';
        
        // 重新應用篩選，顯示所有動物
        applyFiltersAndSort();
    });

    // 排序選項
    document.querySelectorAll('.sort-options button').forEach(button => {
        button.addEventListener('click', function() {
            // 確保資料已載入
            if (!isDataLoaded) return;
            
            const sortText = this.textContent;
            currentSort = this.getAttribute('data-sort');
            sortBtn.innerHTML = '<i class="fas fa-sort-amount-down"></i><span>排序: ' + sortText + '</span>';
            sortOptions.classList.remove('active');
            applyFiltersAndSort();
        });
    });

    // 類別按鈕
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 確保資料已載入
            if (!isDataLoaded) return;
            
            const category = this.getAttribute('data-category');
            
            // 更新按鈕狀態
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 更新篩選
            currentFilter.category = category;
            applyFiltersAndSort();
        });
    });

    // 進階篩選選項
    document.querySelectorAll('.advanced-filter input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const filterType = this.getAttribute('data-filter');
            const value = this.value;
            
            if (this.checked) {
                if (!pendingFilter[filterType].includes(value)) {
                    pendingFilter[filterType].push(value);
                }
            } else {
                const index = pendingFilter[filterType].indexOf(value);
                if (index > -1) {
                    pendingFilter[filterType].splice(index, 1);
                }
            }
        });
    });

    // 搜尋輸入
    searchInput.addEventListener('input', function() {
        // 確保資料已載入
        if (isDataLoaded) {
            applyFiltersAndSort();
        }
    });

    // 返回按鈕
    backToPokedexBtn.addEventListener('click', function() {
        showPage('pokedex');
    });

    backToKnowledgeBtn.addEventListener('click', function() {
        showPage('knowledge');
    });

    // 標籤切換
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 更新按鈕狀態
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 顯示對應內容
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId + 'Content').classList.add('active');
            
            // 如果是位置標籤，初始化地圖
            if (tabId === 'location' && currentMap) {
                setTimeout(() => {
                    currentMap.invalidateSize();
                }, 100);
            }
        });
    });

    // 導航連結
    pokedexLink.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        showPage('pokedex');
    });

    knowledgeLink.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        showPage('knowledge');
    });

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        showPage('about');
    });

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(pokedexLink);
        showPage('pokedex');
    });

    // 移動端菜單按鈕
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // 點擊外部關閉下拉選單
    document.addEventListener('click', function(e) {
        if (!sortBtn.contains(e.target) && !sortOptions.contains(e.target)) {
            sortOptions.classList.remove('active');
        }
        
        if (!filterBtn.contains(e.target) && !advancedFilter.contains(e.target)) {
            advancedFilter.classList.remove('active');
        }
        
        // 關閉移動端菜單
        if (window.innerWidth <= 768 && !mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove('active');
        }
    });
}

// 更新篩選勾選狀態
function updateFilterCheckboxes() {
    document.querySelectorAll('.advanced-filter input[type="checkbox"]').forEach(checkbox => {
        const filterType = checkbox.getAttribute('data-filter');
        const value = checkbox.value;
        checkbox.checked = pendingFilter[filterType].includes(value);
    });
}

// 渲染動物卡片
function renderAnimalCards(animals) {
    animalGrid.innerHTML = '';
    
    // 如果沒有資料，顯示訊息
    if (!animals || animals.length === 0) {
        animalGrid.innerHTML = '<div class="no-data">暫無資料</div>';
        return;
    }
    
    animals.forEach(animal => {
        const categoryText = getCategoryText(animal.category);
        const rarityText = getRarityText(animal.rarity);
        const rarityClass = animal.rarity;
        
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.setAttribute('data-id', animal.id);
        card.innerHTML = 
            '<img src="' + animal.image + '" alt="' + animal.name + '" class="animal-image">' +
            '<div class="animal-info">' +
                '<div class="animal-name">' + animal.name + '</div>' +
                '<div class="scientific-name">' + animal.scientific + '</div>' +
                '<div class="animal-rarity ' + rarityClass + '">' + rarityText + '</div>' +
                '<div class="animal-category">' + categoryText + '</div>' +
            '</div>';
        
        card.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            showAnimalDetail(id);
        });
        
        animalGrid.appendChild(card);
    });
}

// 渲染小知識列表
function renderKnowledgeList(articles) {
    knowledgeList.innerHTML = '';
    
    // 如果沒有資料，顯示訊息
    if (!articles || articles.length === 0) {
        knowledgeList.innerHTML = '<div class="no-data">暫無小知識</div>';
        return;
    }
    
    articles.forEach(article => {
        const item = document.createElement('div');
        item.className = 'knowledge-item';
        item.setAttribute('data-id', article.id);
        item.innerHTML = 
            '<img src="' + article.image + '" alt="' + article.title + '" class="knowledge-image">' +
            '<div class="knowledge-content">' +
                '<h3 class="knowledge-title">' + article.title + '</h3>' +
                '<p class="knowledge-subtitle">' + article.subtitle + '</p>' +
            '</div>';
        
        item.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            showArticle(id);
        });
        
        knowledgeList.appendChild(item);
    });
}

// 顯示動物詳情
function showAnimalDetail(id) {
    // 確保資料已載入
    if (!isDataLoaded || marineAnimals.length === 0) {
        console.log('資料尚未載入，無法顯示詳情');
        return;
    }
    
    const animal = marineAnimals.find(a => a.id === id);
    if (!animal) return;
    
    currentAnimalId = id;
    
    // 更新詳情頁內容
    document.getElementById('detailAnimalName').textContent = animal.name;
    document.getElementById('detailScientific').textContent = animal.scientific;
    document.getElementById('detailCategory').textContent = getCategoryText(animal.category);
    document.getElementById('detailRarity').textContent = getRarityText(animal.rarity);
    document.getElementById('detailRarity').className = 'animal-rarity ' + animal.rarity;
    document.getElementById('detailImage').src = animal.image;
    document.getElementById('detailImage').alt = animal.name;
    
    // IUCN狀態
    const iucnElement = document.getElementById('iucnStatus');
    iucnElement.textContent = animal.iucnText + ' (' + animal.iucn + ')';
    iucnElement.className = 'iucn-status ' + animal.iucn.toLowerCase();
    
    document.getElementById('detailSize').textContent = getSizeText(animal.size);
    document.getElementById('detailDepth').textContent = getDepthText(animal.depth);
    document.getElementById('detailSocial').textContent = getSocialText(animal.social);
    document.getElementById('detailHabitat').textContent = getHabitatText(animal.habitat);
    document.getElementById('detailDescription').textContent = animal.description;
    
    // 更新特徵標籤內容
    const featuresContent = document.getElementById('featuresContent');
    featuresContent.innerHTML = '<ul class="tab-list"></ul>';
    const featuresList = featuresContent.querySelector('.tab-list');
    
    if (animal.features && animal.features.length > 0) {
        animal.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = '<div class="tab-title">' + feature.title + '</div><div>' + feature.desc + '</div>';
            featuresList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.innerHTML = '<div class="tab-title">基本特徵</div><div>' + animal.description + '</div>';
        featuresList.appendChild(li);
    }

        // 更新習性標籤內容
    const behaviorContent = document.getElementById('behaviorContent');
    behaviorContent.innerHTML = '<ul class="tab-list"></ul>';
    const behaviorList = behaviorContent.querySelector('.tab-list');
    
    if (animal.behavior && animal.behavior.length > 0) {
        animal.behavior.forEach(behavior => {
            const li = document.createElement('li');
            li.innerHTML = '<div class="tab-title">' + behavior.title + '</div><div>' + behavior.desc + '</div>';
            behaviorList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.innerHTML = '<div class="tab-title">習性</div><div>暫無詳細習性資料</div>';
        behaviorList.appendChild(li);
    }
    
    // 更新知識標籤內容
    const knowledgeContent = document.getElementById('knowledgeContent');
    knowledgeContent.innerHTML = '<ul class="tab-list"></ul>';
    const knowledgeList = knowledgeContent.querySelector('.tab-list');
    
    if (animal.knowledge && animal.knowledge.length > 0) {
        animal.knowledge.forEach(knowledge => {
            const li = document.createElement('li');
            li.innerHTML = '<div class="tab-title">' + knowledge.title + '</div><div>' + knowledge.desc + '</div>';
            knowledgeList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.innerHTML = '<div class="tab-title">知識</div><div>暫無相關知識資料</div>';
        knowledgeList.appendChild(li);
    }
    
 // 更新位置標籤內容 - 地圖放在文字上方
    const locationContent = document.getElementById('locationContent');
    locationContent.innerHTML = '';
    
    if (animal.locations && animal.locations.length > 0) {
        // 先添加地圖容器
        const mapDiv = document.createElement('div');
        mapDiv.id = 'animalDetailMap';
        mapDiv.style.height = '300px';
        mapDiv.style.width = '100%';
        mapDiv.style.borderRadius = '8px';
        mapDiv.style.marginBottom = '1.5rem';
        mapDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        locationContent.appendChild(mapDiv);
        
        // 添加位置介紹文字
        const locationIntro = document.createElement('p');
        locationIntro.id = 'locationIntro';
        locationIntro.textContent = animal.locationIntro || '分佈於以下地區：';
        locationIntro.style.marginBottom = '1rem';
        locationIntro.style.fontSize = '1.1rem';
        locationIntro.style.color = 'var(--dark-gray)';
        locationContent.appendChild(locationIntro);
        
        // 添加位置列表
        const locationList = document.createElement('ul');
        locationList.className = 'tab-list';
        locationContent.appendChild(locationList);
        
        animal.locations.forEach(location => {
            const li = document.createElement('li');
            li.innerHTML = '<div class="tab-title">' + location.place + '</div><div>' + location.detail + '</div>';
            locationList.appendChild(li);
        });
        
        // 初始化地圖
        setTimeout(() => {
            initAnimalDetailMap(animal.locations);
        }, 100);
    } else {
        const noLocation = document.createElement('p');
        noLocation.textContent = '此生物的分佈資料正在收集中。';
        locationContent.appendChild(noLocation);
    }
    
    // 重置標籤到特徵
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="features"]').classList.add('active');
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('featuresContent').classList.add('active');
    
    showPage('animalDetail');
}

// 初始化動物詳情頁的地圖
function initAnimalDetailMap(locations) {
    // 移除現有地圖
    if (window.detailMap) {
        window.detailMap.remove();
    }
    
    const mapElement = document.getElementById('animalDetailMap');
    if (!mapElement) return;
    
    // 如果沒有位置資料，不顯示地圖
    if (!locations || locations.length === 0) return;
    
    // 建立地圖
    window.detailMap = L.map('animalDetailMap').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(window.detailMap);
    
    // 添加位置標記
    const locationCoords = {
        "澳大利亞": [-23, 133],
        "墨西哥": [27, -114],
        "菲律賓": [13, 124],
        "馬爾地夫": [4, 73],
        "台灣": [23, 121],
        "夏威夷": [21, -157],
        "加利福尼亞": [36, -119],
        "日本": [36, 138],
        "印度尼西亞": [-2, 118],
        "泰國": [15, 100],
        "中國": [35, 105],
        "美國": [37, -95],
        "加拿大": [60, -95],
        "巴西": [-10, -55],
        "南非": [-30, 25],
        "紐西蘭": [-41, 174],
        "英國": [55, -3],
        "挪威": [62, 10],
        "冰島": [65, -18],
        "阿拉斯加": [64, -150],
        "地中海": [38, 15],
        "加勒比海": [15, -75]
    };
    
    const markers = [];
    
    locations.forEach(location => {
        const coords = locationCoords[location.place];
        if (coords) {
            const marker = L.marker(coords).addTo(window.detailMap)
                .bindPopup(`<strong>${location.place}</strong><br>${location.detail}`);
            markers.push(coords);
        }
    });
    
    // 調整地圖視圖以顯示所有標記
    if (markers.length > 0) {
        if (markers.length === 1) {
            // 只有一個標記時，放大顯示
            window.detailMap.setView(markers[0], 5);
        } else {
            // 多個標記時，調整視圖顯示所有標記
            const bounds = L.latLngBounds(markers);
            window.detailMap.fitBounds(bounds, {padding: [50, 50]});
        }
    } else {
        // 沒有對應的座標，顯示世界地圖
        window.detailMap.setView([20, 0], 2);
    }
}

// 標籤切換時，如果切換到位置標籤，重新調整地圖大小
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // 更新按鈕狀態
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // 顯示對應內容
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId + 'Content').classList.add('active');
        
        // 如果是位置標籤，重新調整地圖大小
        if (tabId === 'location' && window.detailMap) {
            setTimeout(() => {
                window.detailMap.invalidateSize();
            }, 100);
        }
    });
});

// 顯示文章
function showArticle(id) {
    // 確保資料已載入
    if (!isDataLoaded || knowledgeArticles.length === 0) {
        console.log('資料尚未載入，無法顯示文章');
        return;
    }
    
    const article = knowledgeArticles.find(a => a.id === id);
    if (!article) return;
    
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleImage').src = article.image;
    document.getElementById('articleImage').alt = article.title;
    document.getElementById('articleBody').innerHTML = article.content;
    
    showPage('article');
}

// 顯示頁面
function showPage(pageName) {
    // 隱藏所有頁面
    Object.values(pages).forEach(page => {
        if (page) page.style.display = 'none';
    });
    
    // 顯示目標頁面
    if (pages[pageName]) {
        pages[pageName].style.display = 'block';
    }
    
    // 如果是圖鑑頁面，確保篩選和排序面板關閉
    if (pageName === 'pokedex') {
        advancedFilter.classList.remove('active');
        sortOptions.classList.remove('active');
    }
    
    // 關閉移動端菜單
    if (window.innerWidth <= 768) {
        mainNav.classList.remove('active');
    }
}

// 設置導航連結活動狀態
function setActiveNav(activeLink) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// 應用篩選和排序
function applyFiltersAndSort() {
    // 確保資料已載入
    if (!isDataLoaded || marineAnimals.length === 0) {
        console.log('資料尚未載入，無法應用篩選排序');
        return;
    }
    
    let filteredAnimals = [...marineAnimals];
    
    // 文本搜索篩選
    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
        filteredAnimals = filteredAnimals.filter(animal => 
            animal.name.toLowerCase().includes(searchText) || 
            animal.scientific.toLowerCase().includes(searchText) ||
            getCategoryText(animal.category).toLowerCase().includes(searchText)
        );
    }
    
    // 類別篩選
    if (currentFilter.category !== 'all') {
        filteredAnimals = filteredAnimals.filter(animal => animal.category === currentFilter.category);
    }
    
    // 體形篩選
    if (currentFilter.size.length > 0) {
        filteredAnimals = filteredAnimals.filter(animal => currentFilter.size.includes(animal.size));
    }
    
    // 深度篩選
    if (currentFilter.depth.length > 0) {
        filteredAnimals = filteredAnimals.filter(animal => currentFilter.depth.includes(animal.depth));
    }
    
    // 特性篩選
    if (currentFilter.trait.length > 0) {
        filteredAnimals = filteredAnimals.filter(animal => {
            return currentFilter.trait.some(trait => animal.traits?.includes(trait));
        });
    }
    
    // 棲息地篩選
    if (currentFilter.habitat.length > 0) {
        filteredAnimals = filteredAnimals.filter(animal => currentFilter.habitat.includes(animal.habitat));
    }
    
    // 排序
    filteredAnimals.sort((a, b) => {
        switch(currentSort) {
            case 'size-asc':
                return sizeOrder(a.size) - sizeOrder(b.size);
            case 'size-desc':
                return sizeOrder(b.size) - sizeOrder(a.size);
            case 'rarity-asc':
                return rarityOrder(a.rarity) - rarityOrder(b.rarity);
            case 'rarity-desc':
                return rarityOrder(b.rarity) - rarityOrder(a.rarity);
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'iucn-asc':
                return iucnOrder(a.iucn) - iucnOrder(b.iucn);
            case 'iucn-desc':
                return iucnOrder(b.iucn) - iucnOrder(a.iucn);
            case 'depth-asc':
                return depthOrder(a.depth) - depthOrder(b.depth);
            case 'depth-desc':
                return depthOrder(b.depth) - depthOrder(a.depth);
            default:
                return a.id - b.id;
        }
    });
    
    renderAnimalCards(filteredAnimals);
}

// 初始化地圖
function initMap() {
    if (currentMap) {
        currentMap.remove();
    }
    
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    currentMap = L.map('map').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(currentMap);
    
    // 添加一些預設標記
    L.marker([-23, 133]).addTo(currentMap)
        .bindPopup('澳大利亞<br>寧格魯礁 (3-6月)');
        
    L.marker([27, -114]).addTo(currentMap)
        .bindPopup('墨西哥<br>加利福尼亞灣 (5-9月)');
        
    L.marker([13, 124]).addTo(currentMap)
        .bindPopup('菲律賓<br>董索與奧斯洛布 (全年，11-5月高峰)');
        
    L.marker([4, 73]).addTo(currentMap)
        .bindPopup('馬爾地夫<br>阿里環礁 (8-11月)');
        
    L.marker([23, 121]).addTo(currentMap)
        .bindPopup('台灣<br>東部海域 (4-9月)');
}

// 更新地圖標記
function updateMap(locations) {
    if (!currentMap) {
        initMap();
        return;
    }
    
    // 清除現有標記
    currentMap.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            currentMap.removeLayer(layer);
        }
    });
    
    // 添加新標記（這裡使用示例位置）
    const locationCoords = {
        "澳大利亞": [-23, 133],
        "墨西哥": [27, -114],
        "菲律賓": [13, 124],
        "馬爾地夫": [4, 73],
        "台灣": [23, 121],
        "夏威夷": [21, -157],
        "加利福尼亞": [36, -119],
        "日本": [36, 138],
        "印度尼西亞": [-2, 118],
        "泰國": [15, 100]
    };
    
    locations.forEach(location => {
        const coords = locationCoords[location.place];
        if (coords) {
            L.marker(coords).addTo(currentMap)
                .bindPopup(location.place + '<br>' + location.detail);
        }
    });
    
    // 調整地圖視圖以顯示所有標記
    if (locations.length > 0) {
        const markers = Object.keys(locationCoords)
            .filter(key => locations.some(loc => loc.place === key))
            .map(key => locationCoords[key]);
        
        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers);
            currentMap.fitBounds(bounds, {padding: [50, 50]});
        }
    }
}

// 更新關於我們統計
function updateAboutStats() {
    statAnimals.textContent = marineAnimals.length;
    statArticles.textContent = knowledgeArticles.length;
}

// 輔助函數
function getCategoryText(category) {
    const categories = {
        'shark': '鯊魚類',
        'whale': '鯨豚類',
        'seaslug': '海兔類',
        'coral': '珊瑚類',
        'jellyfish': '水母類',
        'crustacean': '甲殼類',
        'ray': '鰩魟類',
        'seahorse': '海馬類',
        'octopus': '頭足類',
        'turtle': '海龜類',
        'seabird': '海鳥類',
        'other': '其他'
    };
    return categories[category] || '其他';
}

function getRarityText(rarity) {
    const rarities = {
        'common': '常見',
        'uncommon': '少見',
        'rare': '稀有',
        'very-rare': '罕有'
    };
    return rarities[rarity] || '未知';
}

function getSizeText(size) {
    const sizes = {
        'micro': '微距 (<5cm)',
        'small': '小型 (5-30cm)',
        'medium': '中型 (30cm-2m)',
        'large': '大型 (2-10m)',
        'giant': '巨型 (>10m)'
    };
    return sizes[size] || '未知';
}

function getDepthText(depth) {
    const depths = {
        'sunlight': '日光帶 (0-200m)',
        'twilight': '暮光帶 (200-1000m)',
        'midnight': '午夜區 (1000m+)',
        'abyssal': '深海平原 (4000-6000m)',
        'hadal': '超深淵帶 (&gt;6000m)'
    };
    return depths[depth] || '未知';
}

function getSocialText(social) {
    const socials = {
        'solitary': '獨居',
        'small-groups': '小群',
        'schooling': '群居',
        'colonial': '群體'
    };
    return socials[social] || '未知';
}

function getHabitatText(habitat) {
    const habitats = {
        'coral-reef': '珊瑚礁',
        'open-ocean': '開闊海域',
        'deep-sea': '深海',
        'coastal': '沿海',
        'arctic': '極地',
        'kelp-forest': '海藻森林',
        'mangrove': '紅樹林',
        'estuary': '河口'
    };
    return habitats[habitat] || '未知';
}

function sizeOrder(size) {
    const order = { 'micro': 1, 'small': 2, 'medium': 3, 'large': 4, 'giant': 5 };
    return order[size] || 0;
}

function rarityOrder(rarity) {
    const order = { 'common': 1, 'uncommon': 2, 'rare': 3, 'very-rare': 4 };
    return order[rarity] || 0;
}

function iucnOrder(iucn) {
    const order = { 'LC': 1, 'NT': 2, 'VU': 3, 'EN': 4, 'CR': 5, 'EW': 6, 'EX': 7, 'DD': 8 };
    return order[iucn] || 9;
}

function depthOrder(depth) {
    const order = { 'sunlight': 1, 'twilight': 2, 'midnight': 3, 'abyssal': 4, 'hadal': 5 };
    return order[depth] || 0;
}