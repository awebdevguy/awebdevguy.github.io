let theme = localStorage.getItem('mode');

if(theme === 'dark') {
    document.body.classList.add("dark-mode");
    // document.getElementById('profile-pic').setAttribute('src', "images/profile_banff.jpg");
    document.getElementById('mode').innerText = 'Sunny';
}

if(theme === 'sunny') {
    document.body.classList.add("bright-mode");
    // document.getElementById('profile-pic').setAttribute('src', "images/profile_banff.jpg");
    document.getElementById('mode').innerText = 'Bland';
}

if(theme === 'bland') {
    // document.getElementById('profile-pic').setAttribute('src', "images/profile_banff_bw.jpg");
    document.getElementById('mode').innerText = 'Dark';
}