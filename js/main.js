const [form] = document.forms;
const tabLinks = document.querySelectorAll('header ul li');
const tabContents = form.querySelectorAll('section');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.target.classList.add('active');
        tabContents.forEach(content => {
            /* show or hide content if content.id match clicked link.name */
            if (content.id === e.target.getAttribute('name')) {
                content.hidden = false;
            } else {
                content.hidden = true;
            }
        });
        /* remove active state to all other links than currently clicked */
        for (link of tabLinks) {
            if (link !== e.target) {
                link.classList.remove('active');
            }
        }
    });
});
