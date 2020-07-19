window.addEventListener('DOMContentLoaded', () => {

    const tabs = function(node){
        const tabsWrapper = document.querySelector(node),
            tabHeader = tabsWrapper.querySelector('.tabheader'),
            tabContent = tabsWrapper.querySelector('.tabcontent'),
            _showTab = function(target){
                const tabId = target.getAttribute('data-tabtarget');
    
                tabContent
                    .querySelector(`[data-tabid=${tabId}]`)
                    .classList.add('tabcontent__item-show');
        
                target.classList.add('tabheader__item-show');
            },
            _hideTabs = function(){
                const tabHeaderItems = tabHeader.querySelectorAll('.tabheader__item'),
                tabContentItems = tabContent.querySelectorAll('.tabcontent__item');
        
                tabHeaderItems.forEach((item, i) => {
                    item.classList.remove('tabheader__item-show');
                });
                
                tabContentItems.forEach((item, i) => {
                    item.classList.remove('tabcontent__item-show');
                });
            };
        
        tabHeader.addEventListener('click', (e) => {
            const target = e.target;
    
            if(target && target.classList.contains('tabheader__item')){
                _hideTabs();
                _showTab(target);
            }
        });

        return {
            showTab: function (node) {
                _showTab(node);
            },
        };
    };

    tabs('.tabs_wrapper1');
    tabs('.tabs_wrapper2');
});