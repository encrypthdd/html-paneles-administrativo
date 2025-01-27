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



document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('salesReturnsChart').getContext('2d');

    // Obtener el número de días en el mes actual
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    // Generar etiquetas para todos los días del mes
    const labels = Array.from({ length: daysInMonth }, (_, i) => `Día ${i + 1}`);

    // Datos de ejemplo para ventas y devoluciones
    const salesData = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 1000));
    const returnsData = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 200));
    const paymentsData = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 500));

    const salesReturnsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Ventas',
                    data: salesData,
                    borderColor: 'rgba(75, 192, 192, 1)', // Verde
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4 // Suaviza la línea
                },
                {
                    label: 'Abonos',
                    data: paymentsData,
                    borderColor: 'rgba(255, 159, 64, 1)', // Naranja
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Devoluciones',
                    data: returnsData,
                    borderColor: 'rgba(255, 99, 132, 1)', // Rojo
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4 // Suaviza la línea
                }
                
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Ventas y Devoluciones del Mes en Curso',
                    font: {
                        size: 18
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Días del Mes',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Bolivares',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});