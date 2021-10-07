let theme = localStorage.getItem('mode');

if(theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('home').setAttribute('style', "background: url('images/pexels-big-moon.jpg'); background-repeat: no-repeat; background-size: cover; height: 1000px;");
    document.getElementById('mode').innerText = 'Light';
}

if(theme === 'light') {
  document.getElementById('home').setAttribute('style', "background: url('images/pexels-desk.jpg'); background-repeat: no-repeat; background-size: cover; height: 1000px;");
    document.getElementById('mode').innerText = 'Dark';
}


