                // navbar position

                const navbar = document.getElementById("navbar");

                window.addEventListener("scroll", () => {
                    if (window.scrollY > 50) {
                        navbar.classList.add("bg-black/40", "backdrop-blur");
                    } else {
                        navbar.classList.remove("bg-black/40", "backdrop-blur");
                    }
                });

                // Dropdown toggle (works for both desktop & mobile)
                function toggleDropdown(menuId, iconId) {
                    let menu = document.getElementById(menuId);
                    let icon = document.getElementById(iconId);

                    if (menu.classList.contains("hidden")) {
                        menu.classList.remove("hidden");
                        icon.style.transform = "rotate(90deg)";
                    } else {
                        menu.classList.add("hidden");
                        icon.style.transform = "rotate(0deg)";
                    }
                }

                // Mobile menu toggle
                const menuBtn = document.getElementById("menuBtn");
                const menuIcon = document.getElementById("menuIcon");
                const closeIcon = document.getElementById("closeIcon");
                const mobileMenu = document.getElementById("mobileMenu");

                menuBtn.addEventListener("click", () => {
                    mobileMenu.classList.toggle("hidden");
                    menuIcon.classList.toggle("hidden");
                    closeIcon.classList.toggle("visible");
                    menuIcon.classList.toggle("opacity-0");
                    menuIcon.classList.toggle("rotate-90");

                    closeIcon.classList.toggle("opacity-100");
                    closeIcon.classList.toggle("rotate-0");
                });


                // underline making
                const links = document.querySelectorAll(".nav-link");

                links.forEach(link => {
                    link.addEventListener("click", function (e) {
                        e.preventDefault();

                        // sab links se active underline hatado
                        links.forEach(l => l.classList.remove("active-link"));

                        // jis pe click hua usko active class do
                        this.classList.add("active-link");
                    });
                });

                // up down arrow
                const scrollBtn = document.getElementById("scrollBtn");
                const scrollIcon = document.getElementById("scrollIcon");

                function scrollToPosition(target) {
                    const start = window.scrollY;
                    const distance = target - start;
                    const duration = 200; // ms
                    let startTime = null;

                    function animation(currentTime) {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        window.scrollTo(0, start + distance * progress);
                        if (progress < 1) requestAnimationFrame(animation);
                    }

                    requestAnimationFrame(animation);
                }

                function updateButton() {
                    const scrollTop = window.scrollY;
                    const scrollHeight = document.documentElement.scrollHeight; // ✅ safe option
                    const clientHeight = window.innerHeight; // ✅ mobile safe

                    if (scrollTop + clientHeight >= scrollHeight - 5) {
                        // bottom reached → arrow up
                        scrollIcon.classList.remove("fa-arrow-down");
                        scrollIcon.classList.add("fa-arrow-up");
                        scrollBtn.onclick = () => scrollToPosition(0);
                    } else if (scrollTop <= 0) {
                        // top reached → arrow down
                        scrollIcon.classList.remove("fa-arrow-up");
                        scrollIcon.classList.add("fa-arrow-down");
                        scrollBtn.onclick = () => scrollToPosition(scrollHeight);
                    }
                }

                // 👇 mobile browsers ke liye scroll aur resize dono listen karo
                window.addEventListener("scroll", updateButton);
                window.addEventListener("resize", updateButton);
                updateButton();


                // swiping bank icons
                const swiper = new Swiper(".mySwiper", {
                    loop: true,
                    slidesPerView: 3, // 3 logos dikhain at a time
                    spaceBetween: 30,
                    autoplay: {
                        delay: 0, // bilkul bhi rukna nahi
                        disableOnInteraction: false,
                    },
                    speed: 3000, // jitna zyada speed utna smooth continuous flow
                    freeMode: true, // lagatar free scrolling effect
                    freeModeMomentum: false, // rukawat na ho
                    breakpoints: {
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    },
                });

                // Services Swiper 
                const swiperServices = new Swiper(".mySwiperServices", {
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    speed: 800,
                    breakpoints: {
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    },
                    navigation: {
                        nextEl: ".swiper-services-next",
                        prevEl: ".swiper-services-prev",
                    },
                    allowTouchMove: false, // swipe sirf arrows se hoga
                });

                // JS for FAQ Accordion
                document.querySelectorAll(".faq-item").forEach(item => {
                    const btn = item.querySelector(".faq-btn");
                    const content = item.querySelector(".faq-content");
                    const icon = item.querySelector(".icon");

                    btn.addEventListener("mouseenter", () => {
                        // open answer
                        content.style.maxHeight = content.scrollHeight + "px";
                        content.style.paddingBottom = "1rem";
                        // icon change plus → minus
                        icon.classList.remove("fa-plus");
                        icon.classList.add("fa-minus");
                    });

                    btn.addEventListener("mouseleave", () => {
                        // close answer
                        content.style.maxHeight = "0px";
                        content.style.paddingBottom = "0";
                        // icon change minus → plus
                        icon.classList.remove("fa-minus");
                        icon.classList.add("fa-plus");
                    });
                });

                //  reviews saying
                new Glide('.glide', {
                    type: 'carousel',
                    autoplay: 4000,
                    perView: 3,
                    gap: 20,
                    breakpoints: {
                        1024: { perView: 2 },
                        768: { perView: 1 }
                    }
                }).mount();

                // Team section
                const bankTeamSwiper = new Swiper('.bank-team-swiper', {
                    loop: true,
                    speed: 800,
                    autoplay: { delay: 5000 },
                    slidesPerView: 1,
                    spaceBetween: 40,
                    pagination: { el: '.swiper-pagination', clickable: true },
                    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                    breakpoints: {
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    },
                });
                // user dp
                // User data fetch
                let user = JSON.parse(localStorage.getItem("user"));
                let miniDp = document.getElementById("miniDp");
                let icon = document.getElementById("floatingUserIcon");

                if (user && user.dp) {
                    miniDp.src = user.dp;
                }

                icon.addEventListener("click", function () {
                    if (user) {
                        if (user.loggedIn) {
                            window.location.href = "account.html";
                        } else {
                            window.location.href = "login.html";
                        }
                    } else {
                        window.location.href = "register.html";
                    }
                });
