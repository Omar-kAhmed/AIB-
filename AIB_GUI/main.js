const translations = {
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
    ar: {
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
};

const langaugeselector = document.querySelector("select");

langaugeselector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationkey = element.getAttribute('data-i18n');
        
            element.textContent = translations[language][translationkey];
        
    });

};


window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loading-container').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
  });
  