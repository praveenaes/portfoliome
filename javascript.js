const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')

        }
    })
}


// mail submission
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        project : document.getElementById("project").value,
        message : document.getElementById("message").value,
        
    }
    emailjs.send("service_bod858x",parms).then(alert("Email Sent!!"))
}
