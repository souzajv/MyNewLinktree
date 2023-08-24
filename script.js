function toggleMode() {
    const hmtl = document.documentElement
 
    if(hmtl.classList.contains('light')) {
        hmtl.classList.remove('light') 
    } else {
    html.classList.add('light')
    }
}