const penals = document.querySelectorAll('.penal')

function taggleOpen(){
    this.classList.taggle('open');
}

penals.forEach(penal => penal.addEventListener('click'))