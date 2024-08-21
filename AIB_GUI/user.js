let btn = document.querySelector(".outer");
let body = document.querySelector(".body");
let open_profile = document.getElementById("icon");


btn.addEventListener('click', () => {
    body.classList.remove('profile');
});

open_profile.addEventListener('click', () => {
    body.classList.add('profile');
    
});
