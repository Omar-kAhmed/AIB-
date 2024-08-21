

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector(".close");
    let body = document.querySelector(".body");
    let open_profile = document.getElementById("icon");

    btn.addEventListener('click', () => {
        body.classList.remove('profile');
    });

    open_profile.addEventListener('click', () => {
        body.classList.add('profile');
    });

    document.getElementById('userForm').addEventListener('submit', saveUser);
    loadUsers();
});

function openUserForm(user = null) {
    document.getElementById('userFormContainer').style.display = 'flex';
    if (user) {
        document.getElementById('formTitle').innerText = 'Edit User';
        document.getElementById('userId').value = user.id;
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('role').value = user.role;
    } else {
        document.getElementById('formTitle').innerText = 'Add New User';
        document.getElementById('userForm').reset();
        document.getElementById('userId').value = '';
    }
}

function closeUserForm() {
    document.getElementById('userFormContainer').style.display = 'none';
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <i id="ico" onclick='editUser(${JSON.stringify(user)})' class="fa-solid fa-pen-to-square fa-sm" style="color: #FFD43B;"></i>
               <i id="ico" onclick='deleteUser(${user.id})' class="fa-solid fa-trash fa-sm" style="color: #FFD43B;"></i>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function editUser(user) {
    openUserForm(user);
}

function deleteUser(id) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.id != id);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}


function saveUser(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (!name || !email || !role) {
        alert('All fields are required!');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (userId) {
        // Edit user
        users = users.map(user => user.id == userId ? { id: userId, name, email, role } : user);
    } else {
        // Check for unique email
        if (users.some(user => user.email === email)) {
            alert('A user with this email already exists.');
            return;
        }

        // Add new user
        const id = Date.now();
        users.push({ id, name, email, role });
    }

    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
    closeUserForm();
}


const languagetranslation= {


    en: {

        home: 'Home',
        report: 'Report',
        user: 'User',
        english: 'English',
        arabic: 'Arabic',
        sign: 'Sign Up',
        welcome: 'Welcome To AIB Reporty...The Ultimate Destination of Data Reports',
        copy: '© 2024 AIB August Intenship | All Rights Resrved',
        facebook: 'FaceBook',
        linkedin: 'Linkedin',
        instagram: 'Instagram'


    },


    ar : {
        home: ' الرئيسية',
        report: 'التقرير',
        user: 'المستخدم',
        english: 'اللغه الانجليزيه',
        arabic: 'اللغة العربية',
        sign: 'تسجيل الدخول',
        welcome: ' مرحبًا بكم في تقرير AIB...الوجهة النهائية لتقرير البيانات',
        copy: '© 2024 AIB August Intenship | جميع الحقوق محفوظة',
        facebook: 'فيسبوك',
        linkedin: 'لينكدان',
        instagram: 'انستاجرام'
    }


    
}

