const penals = document.querySelectorAll('.penal')

function taggleOpen(){
    this.classList.taggle('open');
}

function toggleActive(e){
    console.log(e.propertyName)
    if (e.propertyName.includes('flex')){
        this.classList.taggle('open-active')
    }
}

penals.forEach(penal => penal.addEventListener('click', taggleOpen))
penals.forEach(penal => penal.addEventListener('transitionend', toggleActive))