const tabs = document.querySelectorAll('button');

function setActiveTab(selectedTab){
    tabs.forEach((tab)=>{
        tab.classList.remove('active');
    })

    selectedTab.classList.add('active');
}

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>setActiveTab(tab))
});

export default tabs;

