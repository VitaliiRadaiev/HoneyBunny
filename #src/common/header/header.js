let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let closeBtn = document.querySelector('.nav__close');
if(burger && nav) {
    window.addEventListener('scroll', () => {
        burger.classList.toggle('is-scroll', window.pageYOffset > 100);
    })

    burger.addEventListener('click', () => {
        nav.classList.add('open');

        if(document.documentElement.clientWidth < 768) {
            document.body.classList.add('lock');
        }
    })
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
        document.body.classList.remove('lock');
    })
}


let sidePanel = document.querySelector('.nav');
if(sidePanel) {
    let items = document.querySelectorAll('.nav__item');


    const setActiveItem = (id) => {
        items.forEach(item => {
            if(item.dataset.id === id) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }

    items.forEach(item => {
        let id = item.dataset.id;

        item.addEventListener('click', (e) => {
            e.preventDefault();
            let el = document.querySelector(`[data-id="${id}"]:not(.nav__item)`);
            if(el) {

                if(document.documentElement.clientWidth < 768) {

                    window.scrollTo({
                        top: el.offsetTop - 20,
                        behavior: 'smooth',
                    })
    
                    nav.classList.remove('open');
                    document.body.classList.remove('lock');

                } else {
                    window.scrollTo({
                        top: el.offsetTop - 40,
                        behavior: 'smooth',
                    })
    
                }
            }
        })
    })

    let mainSections = document.querySelectorAll('[data-id]:not(.nav__item)');
	if (mainSections.length) {

        const defineVisibleSection = () => {
            mainSections.forEach(section => {
				let top = section.getBoundingClientRect().top;
				let bottom = section.getBoundingClientRect().bottom;
				let halfHeightOfWindow = document.documentElement.clientHeight / 2;

				if (top < halfHeightOfWindow && bottom >= halfHeightOfWindow) {
					if(section.dataset.id) {
						setActiveItem(section.dataset.id);
					}
				}

			})
        }
        defineVisibleSection();

		window.addEventListener('scroll', defineVisibleSection);
	}

}