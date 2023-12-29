const bar = document.querySelector('#bar')
const cross = document.querySelector('#cross')
const navlink = document.querySelector('.navbars')
const heroField = document.querySelector('.cancel')

bar.addEventListener('click',()=>{
    navlink.classList.remove('deactive');
    bar.classList.add('deactive');
    cross.classList.remove('deactive','visibility');
})
cross.addEventListener('click',()=>{
    navlink.classList.remove('deactive');
    cross.classList.add('deactive');
    bar.classList.remove('deactive');
    navlink.classList.add('deactive');
})
heroField.addEventListener('click',()=>{
    navlink.classList.add('deactive');
    bar.classList.remove('deactive');
    cross.classList.add('deactive');
})