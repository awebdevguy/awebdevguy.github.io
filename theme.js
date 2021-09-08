let isDark = localStorage.getItem('dark');

if(isDark === 'true') {
    document.body.classList.add("dark-mode");
    document.getElementById('profile-pic').setAttribute('src', "images/profile_banff_bw.jpg");
    document.getElementById('dark').innerText = 'Light-Mode';
}