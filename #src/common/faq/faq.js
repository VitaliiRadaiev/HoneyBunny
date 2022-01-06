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
}