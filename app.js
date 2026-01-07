document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        window.addEventListener('scroll', () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    bar.style.width = bar.style.width;
                }
            });
        });