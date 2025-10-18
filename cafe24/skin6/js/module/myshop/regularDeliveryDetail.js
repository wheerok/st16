document.addEventListener('DOMContentLoaded', function() {
    const firstIcon = document.querySelector('.accordion-icon');
    if (firstIcon) toggleAccordion(firstIcon);

    const accordionIcons = document.querySelectorAll('.accordion-icon');
    accordionIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // 이벤트 버블링 방지
            toggleAccordion(this);
        });
    });

    function toggleAccordion(icon) {
        const header = icon.closest('.accordion-header');
        const content = header.nextElementSibling;
        const isActive = content.classList.contains('active');

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.accordion-icon').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            content.classList.add('active');
            icon.classList.add('active');
        }
    }

    document.querySelectorAll('[data-tooltip]').forEach(el => {
        el.setAttribute('data-tooltip', el.innerText);
    });

    document.querySelectorAll('.accordion-title').forEach(titleBlock => {
        const setItems = titleBlock.querySelectorAll('.set-item');
        const toggleBtn = titleBlock.querySelector('.set-toggle');

        if (setItems.length > 2) {
            setItems.forEach((item, idx) => {
                if (idx >= 2) item.classList.add('hidden');
            });

            toggleBtn.style.display = 'inline-block';

            toggleBtn.addEventListener('click', () => {
                const isExpanded = toggleBtn.classList.toggle('expanded');

                setItems.forEach((item, idx) => {
                    if (idx >= 2) {
                        item.classList.toggle('hidden', !isExpanded);
                    }
                });

                toggleBtn.textContent = isExpanded ? '접기' : '더보기';
            });
        }
    });
});