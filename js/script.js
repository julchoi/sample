document.addEventListener('DOMContentLoaded', (e) => {

    //Work List template (Menu)
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

    //m-nav template (Mobile bottom menu button)
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
                        <a href="playground.html">Playground</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                </ul>
                <div>
                    <a href="https://www.instagram.com/julchoi.studio/">Instagram <img src="assets/images/icons/arrow-dig.svg" alt="go instagram"></a>
                    <a href="https://www.linkedin.com/in/julie-c-454063305/">Linkedin <img src="assets/images/icons/arrow-dig.svg" alt="go Linkedin"></a>
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


    // list hover 시 해당 이미지 위치로 스크롤 이동
    document.querySelectorAll("work-list .list-group li").forEach((list) => {
        list.addEventListener("mouseenter", function () {
            const id = this.dataset.id; // 이미지의 data-id 값 가져오기
            const targetImg = document.querySelector(`.grid .grid-item[data-id="${id}"] a`)
            targetImg?.classList.add("active");

            const imageTop = targetImg.getBoundingClientRect().top; // 타겟이미지가 브라우저 기준에서 얼마나 아래에 있는지지
            const offset = window.scrollY + imageTop - 100;

            window.scrollTo({
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




    // 메인에서 아이템 애니메이션 효과
    const items = document.querySelectorAll('.grid-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            const target = entry.target;

            if (entry.isIntersecting) {
                target.classList.add('show');
            }

            else {
                target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach((item) => observer.observe(item));



    // 디테일 페이지 요소 애니메이션 효과

    const parts = document.querySelectorAll('.detail > main > .right > *');
    parts.forEach(el => {
        el.setAttribute('data-aos', 'fade-down');
    });


    // 페이지네이션 요소 aos 속성 및 offset 추가
    const pagenation = document.querySelector('.pagenation');
    pagenation.setAttribute('data-aos', 'fade-down');
    pagenation.setAttribute('data-aos-offset', '40');

    // AOS 초기화
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        anchorPlacement: 'top-bottom',
        offset: 80
    });


    // 강제로 다시 체크해서 상단 요소도 애니메이션하게
    setTimeout(() => {
        AOS.refreshHard();
        window.scrollTo(0,0);
    }, 150); // 짧은 지연 후 위치 다시 계산




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