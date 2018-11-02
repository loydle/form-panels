   const form = document.querySelector('.form-tab form');
   const tabs = document.querySelectorAll('.form-tab-item');
   const activeTab = getActiveTab;
   renderActiveTab();

   function getActiveTab() {
       return form.dataset.activeTab;
   }

   function setActiveTab(node, tabName) {
       form.dataset.activeTab = tabName;
       for (tab of document.querySelectorAll('header ul li')) {
           if (tab instanceof HTMLElement) {
               if (tab === node) {
                   tab.classList.add('active');
               } else {
                   tab.classList.remove('active');
               }
           }
       }
       renderActiveTab();
   }

   function showTab(tab) {
       if (tab instanceof HTMLElement) {
           tab.style.display = 'block';
       }
   }

   function hideTab() {
       if (tab instanceof HTMLElement) {
           tab.style.display = 'none';
       }
   }

   function activeThisTab(node) {
       setActiveTab(node, node.dataset.name);
   }

   function renderActiveTab() {
       for (tab of tabs) {
           if (tab instanceof HTMLElement) {
               if (tab.id === activeTab()) {
                   showTab(tab);
               } else {
                   hideTab(tab);
               }
           }
       }
   }

   form.addEventListener('submit', function(e) {
       e.defaultPrevented = false || e.preventDefault();
       var inputs = form.querySelectorAll('input');
       for (i of inputs) {
           console.log(i.value);
       }
   })