function scrollTrigger(el, value, callback) {
	let triggerPoint = document.documentElement.clientHeight / 100 * (100 - value);
    const trigger = () => {
        if(el.getBoundingClientRect().top <= triggerPoint && !el.classList.contains('is-show')) {
            if(typeof callback === 'function') {
                callback();
                el.classList.add('is-show')
            }
        }
    }

    trigger();

    window.addEventListener('scroll', trigger);
}
function wrapWords(el) {
    el.innerHTML = el.innerText.split(' ').map(word => `<span class="word">${word}</span><span class="white-space"></span>`).join('');
}
(function textAnim() {
    let counterItems = document.querySelectorAll('[data-text-anim]');
    if (counterItems) {

        counterItems.forEach(item => {
            if (item.children.length) {
                Array.from(item.children).forEach(line => {
                    if(line.localName === 'ul' || line.localName === 'ol') {
                        if(line.children.length) {
                            Array.from(line.children).forEach(li => {
                                wrapWords(li)
                            })
                        }
                    } else if (line.localName === 'p') {
                        wrapWords(line)
                    } else {
                        return;
                    }
                })
            } else {
                wrapWords(item)
            }


            let animation = anime({
                targets: item.querySelectorAll('.word'),
                opacity: ['0', '1'],
                easing: 'easeInOutQuad',
                autoplay: false,
                duration: 1000,
                delay: function (el, i, l) {
                    return i * 10;
                },
            });

            window.addEventListener('load', () => {
                scrollTrigger(item, 7, () => {
                    setTimeout(() => { animation.play(); }, item.dataset.delay ? item.dataset.delay : 0);
                })
            })
        })
    }
})();

(function fadeIn() {
    let counterItems = document.querySelectorAll('[data-fadeIn-anim]');
    if (counterItems) {


        counterItems.forEach(item => {
            window.addEventListener('load', () => {
                scrollTrigger(item, 7, () => {
                    setTimeout(() => { item.classList.add('_active') }, item.dataset.delay ? item.dataset.delay : 0);
                })
            })
        })
    }
})();

(function fadeInLeft() {
    let counterItems = document.querySelectorAll('[data-fadeInLeft-anim]');
    if (counterItems) {


        counterItems.forEach(item => {
            window.addEventListener('load', () => {
                scrollTrigger(item, 7, () => {
                    setTimeout(() => { item.classList.add('_active'); }, item.dataset.delay ? item.dataset.delay : 0);
                })
            })
        })
    }
})();

(function fadeInLeft() {
    let counterItems = document.querySelectorAll('[data-fadeInRight-anim]');
    if (counterItems) {

        counterItems.forEach(item => {

            window.addEventListener('load', () => {
                scrollTrigger(item, 7, () => {
                    setTimeout(() => { item.classList.add('_active'); }, item.dataset.delay ? item.dataset.delay : 0);
                })
            })
        })
    }
})();

(function fadeInDown() {
    let counterItems = document.querySelectorAll('[data-fadeInDown-anim]');
    if (counterItems) {

        counterItems.forEach(item => {

            window.addEventListener('load', () => {
                scrollTrigger(item, 7, () => {
                    setTimeout(() => { item.classList.add('_active'); }, item.dataset.delay ? item.dataset.delay : 0);
                })
            })
        })
    }
})();

