const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector('.toggle'),
      searchBtn = body.querySelector('.search-box'),
      modeSwitch = body.querySelector('.toggle-switch'),
      modeText = body.querySelector('.mode-text');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if(body.classList.contains('dark')){
        modeText.innerText = 'Modo Claro';
    }else{
        modeText.innerText = 'Modo Oscuro'; 
    }
});

const notificationIcon = document.querySelector('.notification-icon');
const chatIcon = document.querySelector('.chat-icon');
const profile = document.querySelector('.profile');

const dropdowns = document.querySelectorAll('.notification-dropdown, .chat-dropdown, .profile-dropdown');

notificationIcon.addEventListener('click', () => {
    const notificationDropdown = document.querySelector('.notification-dropdown');
    notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
    hideOtherDropdowns(notificationDropdown);
});

chatIcon.addEventListener('click', () => {
    const chatDropdown = document.querySelector('.chat-dropdown');
    chatDropdown.style.display = chatDropdown.style.display === 'block' ? 'none' : 'block';
    hideOtherDropdowns(chatDropdown);
});

profile.addEventListener('click', () => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    hideOtherDropdowns(profileDropdown);
});

function hideOtherDropdowns(activeDropdown) {
    dropdowns.forEach(dropdown => {
        if (dropdown !== activeDropdown) {
            dropdown.style.display = 'none';
        }
    });
}
