let isFlat = localStorage.getItem('flat');

if(isFlat === 'true') {
    document.body.classList.add("flat-square-mode");
    // document.getElementById('flat-3D').innerHTML = '3D-Theme';
}