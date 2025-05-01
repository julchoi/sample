document.addEventListener('DOMContentLoaded', (e) => {

    //Work List (Menu)
    class workList extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<section class="detail-list">
                    <!-- work list -->
                    <div class="list-group" id="listGroup">

                        <ul class="featured">
                            <li>
                                <p class="list-title">Featured Work</p>
                            </li>
                            <li data-id="1">
                                <a href="ahole.html">
                                    <span>2024</span>
                                    <span>AHOLE</span>
                                    <span>Typeface</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="2">
                                <a href="morii.html">
                                    <span>2024</span>
                                    <span>MORII Magazine</span>
                                    <span>Editorial</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="3">
                                <a href="commdsgn.html">
                                    <span>2024</span>
                                    <span>COMM DSGN</span>
                                    <span>Branding</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="4">
                                <a href="heynike.html">
                                    <span>2024</span>
                                    <span>Hey, Nike!</span>
                                    <span>UX/UI</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <ul class="all">
                            <li>
                                <p class="list-title">All Work</p>
                            </li>
                            <li data-id="5">
                                <a href="airplan.html">
                                    <span>2024</span>
                                    <span>Airplan</span>
                                    <span>UX/UI</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="6">
                                <a href="p2p.html">
                                    <span>2024</span>
                                    <span>Crafty Critter</span>
                                    <span>UX/UI</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="7">
                                <a href="pedaltopetal.html">
                                    <span>2023</span>
                                    <span>Pedal to Petal</span>
                                    <span>Branding</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="8">
                                <a href="yearbook.html">
                                    <span>2023</span>
                                    <span>Yearbook Poster</span>
                                    <span>Editorial</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="9">
                                <a href="empty.hyml">
                                    <span>2022</span>
                                    <span>SOLE Magazine</span>
                                    <span>Editorial</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="10">
                                <a href="empty2.html">
                                    <span>2022</span>
                                    <span>COMM DSGN</span>
                                    <span>Branding</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </section>`
        }
    }

    customElements.define('work-list', workList);

    //m-nav template
    class mNav extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<div class="m-bottom-menu">
            <button class="m-menu-btn">Menu</button>
            <nav class="m-nav">
                <button class="m-nav-close">
                    <img src="assets/images/icons/close.svg" alt="nav close">
                </button>
                <ul>
                    <li>
                        <a href="index.html">Work</a>
                    </li>
                    <li>
                        <a href="archive.html">Archive</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                </ul>
                <div>
                    <a href="">Instagram <img src="assets/images/icons/arrow-dig.svg" alt="go instagram"></a>
                    <a href="">Linkedin <img src="assets/images/icons/arrow-dig.svg" alt="go Linkedin"></a>
                </div>
            </nav>
        </div>`
        }
    }

    customElements.define('m-nav', mNav);

    // 해당 페이지에서 리스트 요소 활성화
    const workDetail = document.querySelectorAll(".detail .list-group > ul > li > a");
    const currentPath = window.location.pathname; // 현재 페이지 경로

    workDetail.forEach((link) => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (linkPath === currentPath) {
            link.parentNode.classList.add("active");
        }
    });


    // image hover시 list도 hover effect
    document.querySelectorAll(".grid .grid-item").forEach((img) => {
        img.addEventListener("mouseenter", function () {
            const id = this.dataset.id; // 이미지의 data-id 값 가져오기
            document.querySelector(`.list-group li[data-id="${id}"]`)?.classList.add("hover");
        });

        img.addEventListener("mouseleave", function () {
            const id = this.dataset.id;

            // hover class 제거
            document.querySelector(`.list-group li[data-id="${id}"]`)?.classList.remove("hover");
        });

        // tablet touch hover effect 
        let touched = false;

        img.addEventListener('touchstart', (e) => {
            if (!touched) {
                e.preventDefault(); // 첫 터치에 링크 이동 막음
                img.classList.add('active');
                touched = true;

                // 다른 요소를 터치하면 상태 초기화
                document.addEventListener('touchstart', function resetTouch(event) {
                    if (!link.contains(event.target)) {
                        link.classList.remove('active');
                        touched = false;
                        document.removeEventListener('touchstart', resetTouch);
                    }
                });
            } else {
                // 두 번째 터치면 링크 이동
                link.classList.remove('active');
                touched = false;
                window.location.href = img.firstElementChild('a').getAttribute('href');
            }
        });


    });
    const scrollContainer = document.querySelector(".work .grid");

    document.querySelectorAll("work-list .list-group li").forEach((list) => {
        list.addEventListener("mouseenter", function () {
            const id = this.dataset.id; // 이미지의 data-id 값 가져오기
            const targetImg = document.querySelector(`.grid .grid-item[data-id="${id}"] a`)
            targetImg?.classList.add("active");

            const containerTop = scrollContainer.getBoundingClientRect().top; // 스크롤 컨테이너가 브라우저 기준에서 얼마나 아래에 있는지
            const imageTop = targetImg.getBoundingClientRect().top; // 타겟이미지가 브라우저 기준에서 얼마나 아래에 있는지지

            const offset = imageTop - containerTop + scrollContainer.scrollTop - 100;

            scrollContainer.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        });

        list.addEventListener("mouseleave", function () {
            const id = this.dataset.id;

            // hover class 제거
            document.querySelector(`.grid .grid-item[data-id="${id}"] a`)?.classList.remove("active");
        });
    });


    //about페이지에서 스크롤시 하단 요소 애니메이션 작업
    let lastScrollTop = 0;
    let ticking = false;
    const targetElement = document.querySelector(".hide-bottom");

    function onScroll() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll - lastScrollTop > 3) {
            targetElement.style.transform = "translateY(100%)";
            targetElement.style.opacity = "0";
        } else if (lastScrollTop - currentScroll > 3) {
            targetElement.style.transform = "translateY(0)";
            targetElement.style.opacity = "1";
        }

        lastScrollTop = currentScroll; // 스크롤 값 갱신
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    });


    // 메인에서 아이템 애니메이션 효과
    const items = document.querySelectorAll('.grid-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // observer.unobserve(entry.target); // 한 번만 실행
            }

            else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach((item) => observer.observe(item));


    // 디테일페이지에서 아이템 애니메이션 효과
    const detailDesc = document.querySelectorAll('.detail > main > .right');

    const detailObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    // 각 .right 안의 자식 요소들에 대해 observer 설정
    detailDesc.forEach((rightSection) => {
        
        const parts = rightSection.children;
        Array.from(parts).forEach((item) => {
            detailObserver.observe(item);
        });
    });



    // mobile bottom menu
    const mMenuBtn = document.querySelector('.m-menu-btn');
    const mMenuNav = document.querySelector('.m-nav');
    const mMenuClose = document.querySelector('.m-nav-close');

    mMenuBtn.addEventListener('click', () => {
        mMenuNav.classList.toggle('active');
    });

    mMenuClose.addEventListener('click', () => {
        mMenuNav.classList.remove('active');
    });

});