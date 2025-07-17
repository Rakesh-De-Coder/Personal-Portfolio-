const resumeBtns=document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        
        const resumeDetail=document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn=>{
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        resumeDetail.forEach(detail=>{
            detail.classList.remove('active');
        })

        resumeDetail[idx].classList.add('active');
        

    });

});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent page jump

        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the corresponding section
        const target = link.getAttribute('data-target');
        document.querySelector(`.${target}`).classList.add('active');
    });
});
