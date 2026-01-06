 // 海洋生物數據 - 所有資料都來自JavaScript
        const marineAnimals = [
            {
                id: 1,
                name: "鯨鯊",
                scientific: "Rhincodon typus",
                category: "shark",
                rarity: "rare", // 稀有度：common, uncommon, rare, very-rare
                size: "giant",
                depth: "sunlight",
                social: "solitary",
                habitat: "open-ocean",
                traits: ["filter-feeder", "gentle", "migratory"],
                image: "images/whale shark.jpg",
                description: "鯨鯊是現存世界上體型最大的魚類，身長可達18公尺以上。儘管體型龐大，但鯨鯊是濾食性動物，主要攝食浮游生物和小型魚類。牠們性格溫和，移動緩慢，常出現在熱帶和溫帶海洋的表層水域。鯨鯊具有獨特的斑點花紋，每隻個體的斑點排列都不同，可用於識別個體。",
                iucn: "EN", // IUCN狀態：LC, NT, VU, EN, CR, EW, EX, DD
                iucnText: "瀕危",
                features: [
                    {title: "體型與外觀", desc: "鯨鯊擁有寬闊扁平的頭部，巨大的口部可寬達1.5公尺，體表佈滿白色斑點和橫紋。"},
                    {title: "濾食系統", desc: "鯨鯊透過吸水過濾浮游生物，每小時可過濾超過6000公升的海水。"},
                    {title: "皮膚結構", desc: "鯨鯊皮膚厚度可達10公分，具有減阻功能，有助於其在水中高效移動。"},
                    {title: "壽命", desc: "鯨鯊壽命可達70-100年，是海洋中最長壽的魚類之一。"}
                ],
                behavior: [
                    {title: "遷徙行為", desc: "鯨鯊會進行長距離季節性遷徙，追隨浮游生物大量繁殖的海域。"},
                    {title: "覓食方式", desc: "鯨鯊會垂直覓食，白天在深水區，夜晚則上升到表層水域攝食。"},
                    {title: "繁殖習性", desc: "鯨鯊是卵胎生動物，雌性一次可懷孕300多個胚胎，孕期可能長達數年。"},
                    {title: "社交行為", desc: "鯨鯊通常獨居，但在食物豐富的區域會形成臨時性群體。"}
                ],
                knowledge: [
                    {title: "發現歷史", desc: "鯨鯊於1828年首次被科學描述，但直到1980年代才開始有系統的研究。"},
                    {title: "保育現狀", desc: "由於漁業副捕獲和船隻撞擊等威脅，鯨鯊數量在過去75年減少了50%以上。"},
                    {title: "研究重要性", desc: "鯨鯊被稱為「海洋中的駱駝」，其遷徙模式有助於科學家了解海洋生態系統。"},
                    {title: "生態角色", desc: "作為頂級濾食者，鯨鯊在控制浮游生物數量和營養循環中扮演重要角色。"}
                ],
                locations: [
                    {place: "澳大利亞", detail: "寧格魯礁 (3-6月)"},
                    {place: "墨西哥", detail: "加利福尼亞灣 (5-9月)"},
                    {place: "菲律賓", detail: "董索與奧斯洛布 (全年，11-5月高峰)"},
                    {place: "馬爾地夫", detail: "阿里環礁 (8-11月)"},
                    {place: "台灣", detail: "東部海域 (4-9月)"}
                ],
                locationIntro: "鯨鯊分佈於全球熱帶和溫帶海域，常見於以下地區："
            },
            {
                id: 2,
                name: "藍鯨",
                scientific: "Balaenoptera musculus",
                category: "whale",
                rarity: "very-rare",
                size: "giant",
                depth: "sunlight",
                social: "small-groups",
                habitat: "open-ocean",
                traits: ["largest-animal", "filter-feeder", "migratory"],
                image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
                description: "藍鯨是地球上已知最大的動物，體長可達30公尺，體重超過170噸。藍鯨是鬚鯨的一種，透過喉腹褶擴張吞入大量海水，再以鯨鬚過濾其中的磷蝦和小型甲殼動物。藍鯨的叫聲非常響亮，可在數百公里外被探測到。",
                iucn: "EN",
                iucnText: "瀕危"
            },
            {
                id: 3,
                name: "大堡礁珊瑚",
                scientific: "Acropora spp.",
                category: "coral",
                rarity: "common",
                size: "medium",
                depth: "sunlight",
                social: "colonial",
                habitat: "coral-reef",
                traits: ["reef-builder", "symbiotic"],
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "大堡礁珊瑚是構成澳大利亞大堡礁的主要珊瑚種類，與蟲黃藻形成共生關係。珊瑚蟲從藻類獲取養分，同時為藻類提供保護和二氧化碳。珊瑚礁是海洋中生物多樣性最高的生態系統之一。",
                iucn: "VU",
                iucnText: "易危"
            },
            {
                id: 4,
                name: "燈籠魚",
                scientific: "Myctophidae",
                category: "other",
                rarity: "common",
                size: "small",
                depth: "twilight",
                social: "schooling",
                habitat: "deep-sea",
                traits: ["bioluminescent", "vertical-migration"],
                image: "https://images.unsplash.com/photo-1534768680526-8af785bcf008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                description: "燈籠魚是深海中最常見的魚類之一，具有生物發光器官，用於吸引獵物、迷惑捕食者和同種識別。它們進行垂直遷徙，白天在深水區，夜晚上升到表層覓食。",
                iucn: "LC",
                iucnText: "無危"
            },
            {
                id: 5,
                name: "大王魷",
                scientific: "Architeuthis dux",
                category: "octopus",
                rarity: "very-rare",
                size: "large",
                depth: "midnight",
                social: "solitary",
                habitat: "deep-sea",
                traits: ["deep-sea", "predator", "large-eyes"],
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "大王魷是最大的無脊椎動物之一，身長可達13公尺。牠們生活在深海，擁有動物界中最大的眼睛（直徑達27公分），以適應黑暗的深海環境。大王魷是抹香鯨的主要食物來源。",
                iucn: "DD",
                iucnText: "數據缺乏"
            },
            {
                id: 6,
                name: "綠蠵龜",
                scientific: "Chelonia mydas",
                category: "turtle",
                rarity: "uncommon",
                size: "medium",
                depth: "sunlight",
                social: "solitary",
                habitat: "coastal",
                traits: ["long-lived", "migratory", "endangered"],
                image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                description: "綠蠵龜是海洋中的爬行動物，已經存在了超過1億年。它們會長距離遷徙回到出生地產卵。綠蠵龜面臨的主要威脅包括棲息地破壞、漁業副捕獲和海洋污染。",
                iucn: "EN",
                iucnText: "瀕危"
            },
            {
                id: 7,
                name: "小丑魚",
                scientific: "Amphiprioninae",
                category: "other",
                rarity: "common",
                size: "small",
                depth: "sunlight",
                social: "small-groups",
                habitat: "coral-reef",
                traits: ["symbiotic", "sequential-hermaphrodite"],
                image: "https://images.unsplash.com/photo-1581338834647-b5fb8e29d53b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "小丑魚以其與海葵的共生關係而聞名。小丑魚體表有黏液保護，不受海葵刺細胞傷害，同時為海葵提供清潔和食物殘渣。小丑魚是順序性雌雄同體，群體中最大的個體會變成雌性。",
                iucn: "LC",
                iucnText: "無危"
            },
            {
                id: 8,
                name: "藍環章魚",
                scientific: "Hapalochlaena",
                category: "octopus",
                rarity: "uncommon",
                size: "micro",
                depth: "sunlight",
                social: "solitary",
                habitat: "coastal",
                traits: ["poisonous", "camouflage"],
                image: "https://images.unsplash.com/photo-1599236442363-9ec6d6ca6b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "藍環章魚體型雖小，卻是世界上最毒的海洋生物之一。當受到威脅時，牠們身上的藍色環會閃爍發光作為警告。其毒液含有河豚毒素，足以在幾分鐘內使人類致命。",
                iucn: "LC",
                iucnText: "無危"
            },
            {
                id: 9,
                name: "座頭鯨",
                scientific: "Megaptera novaeangliae",
                category: "whale",
                rarity: "rare",
                size: "giant",
                depth: "sunlight",
                social: "small-groups",
                habitat: "open-ocean",
                traits: ["acrobatic", "singing", "migratory"],
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
                description: "座頭鯨以其長胸鰭和複雜的歌聲聞名。牠們是著名的「海洋歌手」，雄性座頭鯨會唱出長達20分鐘的複雜歌曲。座頭鯨也是卓越的雜技演員，經常躍出水面拍打胸鰭和尾鰭。",
                iucn: "LC",
                iucnText: "無危"
            },
            {
                id: 10,
                name: "大白鯊",
                scientific: "Carcharodon carcharias",
                category: "shark",
                rarity: "uncommon",
                size: "large",
                depth: "sunlight",
                social: "solitary",
                habitat: "coastal",
                traits: ["predator", "apex-predator"],
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                description: "大白鯊是海洋中的頂級掠食者，以其龐大體型和強大咬合力聞名。牠們擁有卓越的感官系統，能夠偵測數公里外的獵物。大白鯊在海洋生態系統中扮演重要角色，幫助控制其他物種的數量。",
                iucn: "VU",
                iucnText: "易危"
            }
        ];

        // 小知識數據
        const knowledgeArticles = [
            {
                id: 1,
                title: "海洋生物發光之謎",
                subtitle: "探索深海中的自然燈光秀",
                image: "https://images.unsplash.com/photo-1534768680526-8af785bcf008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                content: "<p>生物發光是海洋中最迷人的現象之一，特別是在黑暗的深海環境中。據估計，約90%的深海生物具有某種形式的生物發光能力。</p><p>海洋生物發光主要透過兩種方式：一種是通過自身細胞內的化學反應產生光（如螢火蟲），另一種是與發光細菌共生。後者在許多魚類和魷魚中常見，它們有專門的器官來培養這些細菌。</p><p>生物發光在海洋生態系統中扮演多種角色：吸引獵物、迷惑捕食者、同種識別和求偶展示。例如，琵琶魚使用發光的「釣竿」吸引好奇的小魚，而某些魷魚則在受到攻擊時釋放發光雲霧來迷惑捕食者。</p><p>科學家正在研究海洋生物發光的化學機制，希望從中開發新的生物技術和醫學應用，如生物感測器和顯影劑。</p>"
            },
            {
                id: 2,
                title: "珊瑚白化危機",
                subtitle: "氣候變化如何威脅珊瑚礁生態系統",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                content: "<p>珊瑚白化是全球珊瑚礁面臨的最嚴重威脅之一。當海水溫度異常升高時，珊瑚會排出與其共生的蟲黃藻，導致珊瑚失去顏色和主要營養來源，這就是珊瑚白化。</p><p>白化的珊瑚並沒有立即死亡，但如果高溫持續數週，珊瑚將因缺乏營養而餓死。自1980年代以來，全球珊瑚白化事件變得越來越頻繁和嚴重，影響了世界上大多數珊瑚礁。</p><p>大堡礁在2016年、2017年和2020年經歷了三次大規模白化事件，導致近一半的珊瑚死亡。除了溫度壓力，海洋酸化、污染和過度捕撈也加劇了珊瑚礁的衰退。</p><p>保護珊瑚礁需要全球共同努力減少溫室氣體排放，同時建立海洋保護區並實施可持續的漁業管理。一些科學家也在研究培育耐熱珊瑚品種，以幫助珊瑚礁適應氣候變化。</p>"
            },
            {
                id: 3,
                title: "鯨魚歌聲的奧秘",
                subtitle: "海洋巨人的溝通藝術",
                image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
                content: "<p>鯨魚的歌聲是海洋中最複雜和迷人的聲音之一，特別以座頭鯨的歌曲最為著名。這些歌曲可以持續10到20分鐘，並能在數百公里外的水域被聽到。</p><p>研究表明，鯨魚歌曲具有類似人類語言的结构，包括音節、短語和主題。每隻鯨魚的歌曲都在不斷演變，同一地區的鯨魚會唱相似的歌曲，但這些歌曲每年都會發生變化。</p><p>鯨魚歌聲的主要功能包括求偶展示、個體識別和領地宣示。雄性座頭鯨在繁殖季節會不斷唱歌，可能是為了吸引雌性或與其他雄性競爭。</p><p>然而，海洋噪音污染（船隻航行、聲納和工業活動）嚴重干擾了鯨魚的溝通，導致它們無法有效覓食、導航和尋找伴侶。這對已經面臨其他威脅的鯨魚族群造成了額外壓力。</p>"
            }
        ];

        // 頁面元素
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

        // 初始化
        document.addEventListener('DOMContentLoaded', function() {
            renderAnimalCards(marineAnimals);
            renderKnowledgeList(knowledgeArticles);
            setupEventListeners();
            initMap();
            
            // 更新關於我們頁面的統計數字
            updateAboutStats();
            
            // 顯示初始頁面
            showPage('pokedex');
        });

        // 設置事件監聽器
        function setupEventListeners() {
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
                // 應用暫存篩選
                currentFilter = {...pendingFilter};
                advancedFilter.classList.remove('active');
                applyFiltersAndSort();
            });

            // 篩選取消按鈕
            filterCancel.addEventListener('click', function() {
                // 取消暫存篩選，恢復為當前篩選
                pendingFilter = {...currentFilter};
                updateFilterCheckboxes();
                advancedFilter.classList.remove('active');
            });

            // 排序選項
            document.querySelectorAll('.sort-options button').forEach(button => {
                button.addEventListener('click', function() {
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
                applyFiltersAndSort();
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
            
            // 更新位置標籤內容
            const locationContent = document.getElementById('locationContent');
            locationContent.innerHTML = '';
            
            if (animal.locations && animal.locations.length > 0) {
                const locationIntro = document.createElement('p');
                locationIntro.id = 'locationIntro';
                locationIntro.textContent = animal.locationIntro || '分佈於以下地區：';
                locationContent.appendChild(locationIntro);
                
                const locationList = document.createElement('ul');
                locationList.className = 'tab-list';
                locationContent.appendChild(locationList);
                
                animal.locations.forEach(location => {
                    const li = document.createElement('li');
                    li.innerHTML = '<div class="tab-title">' + location.place + '</div><div>' + location.detail + '</div>';
                    locationList.appendChild(li);
                });
                
                // 添加地圖
                const mapDiv = document.createElement('div');
                mapDiv.id = 'map';
                locationContent.appendChild(mapDiv);
                
                // 更新地圖
                setTimeout(() => {
                    updateMap(animal.locations);
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

        // 顯示文章
        function showArticle(id) {
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