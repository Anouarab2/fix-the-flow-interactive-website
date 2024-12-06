// funtie aanrooepen
function showSidebar(){
// de class selecteren
    const sidebar = document.querySelector('.sideBar')
// aangeven dat hij laten zien moet worden
    sidebar.style.display = 'flex'
}

// funtie aanroepen
function closeSidebar(){
// de class selecteren 
    const sidebar = document.querySelector('.sideBar')
// aangeven dat hij verstopt moet worden     
    sidebar.style.display = 'none'
}
