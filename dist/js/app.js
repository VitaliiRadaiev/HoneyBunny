let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	//SlideToggle
function _slideUp(target, duration = 500) {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
function _slideDown (target, duration = 500) {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
function _slideToggle (target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================







//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================






function createTabs(containerName = false, triggersName = false, tabsName = false) {
	let container = document.querySelector(`${containerName}`);
	if (container) {
		let allTriggers = container.querySelectorAll(`${triggersName}`);
		let allTabs = container.querySelectorAll(`${tabsName}`);

		if (allTriggers.length) {
			allTriggers.forEach(trigger => {
				trigger.addEventListener('click', (e) => {
					e.preventDefault();
					const id = trigger.getAttribute('href').replace('#', '');

					trigger.classList.add('active');

					allTriggers.forEach(i => {
						if (i == trigger) {
							return
						}
						i.classList.remove('active');
					});

					allTabs.forEach(tab => {
						if (tab.id == id) {
							tab.classList.add('active')
						} else {
							tab.classList.remove('active');
						}
					})

				})
			})
		}

	}
}

//createTabs('.tabs', '.tab-trigger', '.tab-content')


function setSameHeight(items) {
    if(!items.length) return;

    let maxHeight = Math.max(...Array.from(items).map(i => i.clientHeight));
    items.forEach(i => i.style.minHeight = maxHeight + 'px');
}

function setCounterAnim() {
	let couterItems = document.querySelectorAll('[data-counter]');
    if (couterItems) {
        couterItems.forEach(item => {
            let animation = anime({
                targets: item,
                textContent: [0, item.dataset.counter || 0],
                round: 1,
                easing: 'linear',
                autoplay: false,
                duration: 1000
            });
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio >= 0.7) {
                            animation.play();
                            observer.disconnect();
                        }
                    });
                },
                {
                    threshold: 0.7
                }
            );

            observer.observe(item);
        })
    }
}

setCounterAnim();

let anchors = document.querySelectorAll('.anchor');
if(anchors.length) {
	anchors.forEach(anchor => {
		if(!anchor.getAttribute('href').match(/#\w+$/gi)) return;
		
		let id = anchor.getAttribute('href').match(/#\w+$/gi).join('').replace('#', '');
		anchor.addEventListener('click', (e) => {

			let el = document.getElementById(id);
			if(el) {
				e.preventDefault();
				window.scrollTo({
					top: el.offsetTop,
					behavior: 'smooth',
				})
			}

		})
	})
}

function trimString(el, stringLength = 0) {
	let str = el.innerText;
	if(str.length <= stringLength) return;
	el.innerText = [...str].slice(0, stringLength).join('') + '...';
}

function numberCounterAnim() {
		
	let counterItems = document.querySelectorAll('[data-number-counter-anim]');
	if (counterItems) {
		
		counterItems.forEach(item => {
			let animation = anime({
				targets: item,
				textContent: [0, item.innerText],
				round: 1,
				easing: 'linear',
				autoplay: false,
				duration: 1000
			});
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.intersectionRatio >= 0.7) {
							animation.play();
							observer.disconnect();
						}
					});
				},
				{
					threshold: 0.7
				}
			);

			observer.observe(item);
		})
	}

};
	
//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				input.classList.add('_mask');
				Inputmask('+7(999) 999 9999', {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
		}
	}
}
;
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

};
	let tickers = document.querySelectorAll('.ticker');
if(tickers.length) {
    tickers.forEach(ticker => {
        let dataSlider = new Swiper(ticker, {
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            spaceBetween: 40,
            speed: 15000,
            loop: true,
        });
    })
};
	let workWithUsSlider = document.querySelector('.work-whith-us__slider .swiper-container');
if(workWithUsSlider) {
    let dataSlider = new Swiper(workWithUsSlider, {
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
    });
    
};
	let girls = document.querySelector('.girls');
if (girls) {

    let dataSlider = new Swiper(girls.querySelector('.swiper-container'), {
        speed: 800,
        watchOverflow: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: girls.querySelector('.slider-button.next'),
            prevEl: girls.querySelector('.slider-button.prev'),
        },
        breakpoints: {
        	320: {
                slidesPerView: 1,
                spaceBetween: 0,
        	},
        	992: {
                slidesPerView: 1,
                spaceBetween: 40,
        	},
        },
    });
}; 
	let faqList = document.querySelector('.faq__list');
if(faqList) {
    let items = Array.from(faqList.children);
    
    items.forEach(item => {
        let text = item.querySelector('.faq__text');

        item.addEventListener('click', () => {
            item.classList.toggle('open');
            _slideToggle(text);

            
            if(items.some(i => i.classList.contains('open'))) {
                faqList.classList.add('one-is-open');
            } else {
                faqList.classList.remove('one-is-open');
            }
        })
    })
}; 
	// ==== Popup form handler====

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
	for(let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if(curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('.popup_content')) {
				popupClose(e.target.closest('.popup'));
			}
		});

	}
}

function popupClose(popupActive, doUnlock = true) {
	if(unlock) {
		popupActive.classList.remove('open');
		if(doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
	let targetPadding = document.querySelectorAll('._lp');
	if(targetPadding.length) {
		for (let index = 0; index < targetPadding.length; index++) {
			const el = targetPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	if(lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	let targetPadding = document.querySelectorAll('._lp');

	setTimeout(function() {
		if(targetPadding.length) {
			for (let index = 0; index < targetPadding.length; index++) {
				const el = targetPadding[index];
				el.style.paddingRight = '0px';
			}
		}

		for( let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() { 
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if(e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// === Polyfill ===
	(function() {
		if(!Element.prototype.closest) {
			Element.prototype.closest = function(css) {
				var node = this;
				while(node) {
					if(node.matches(css)) return node;
					else node == node.parentElement;
				}
				return null;
			};
		}
	})();

	(function() {
		if(!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.mozMatchesSelector;
		}
	})();
// === AND Polyfill ===; 
	{
    let popupGalleryAll = document.querySelectorAll('.popup-gallery');
    if (popupGalleryAll.length) {
        popupGalleryAll.forEach(gallery => {
            let thumb;
            let mySwiper;
            let slider = gallery.querySelector('.popup-gallery__slider');

            thumb = new Swiper(gallery.querySelector('.popup-gallery__thumb .swiper-container'), {
                observer: true,
                observeParents: true,
                speed: 800,
                watchOverflow: true,
                preloadImages: false,
                freeMode: true,
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                lazy: {
                    loadPrevNext: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    }
                },
            });




            mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
                effect: 'fade',
                observer: true,
                observeParents: true,
                speed: 800,
                preloadImages: false,
                slidesPerView: 1,
                spaceBetween: 0,
                freeMode: true,
                lazy: {
                    loadPrevNext: true,
                },
                thumbs: {
                    swiper: thumb,
                },
                navigation: {
                    nextEl: gallery.querySelector('.slider-btn-next'),
                    prevEl: gallery.querySelector('.slider-btn-prev'),
                },
            });




        })
    }
};


	let workCardTitles = document.querySelectorAll('.work-card__title');
	if(workCardTitles.length && document.documentElement.clientWidth > 767.98) {
		setSameHeight(workCardTitles);
	}

});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	if(isMobile.iOS()) {
		document.body.classList.add('_is-mobile-ios');
	}

	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("min");
da.init();;
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

; 

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});

