const instrumentImage = document.getElementById('instrument-image');
const instrumentMenu = document.getElementById('instrument-menu');

const instruments = {
    keyboards: {
        image: 'https://via.placeholder.com/800x400?text=Keyboard+Instruments',
        menu: ['Piano']
    },
    strings: {
        image: 'https://via.placeholder.com/800x400?text=String+Instruments',
        menu: ['Guitar', 'Violin', 'Viola', 'Cello', 'Bass']
    },
    woodwinds: {
        image: 'https://via.placeholder.com/800x400?text=Woodwind+Instruments',
        menu: ['Flute', 'Clarinet', 'Bass Clarinet', 'Alto Saxophone', 'Tenor Saxophone', 'Baritone Saxophone', 'Bassoon', 'Oboe']
    },
    brass: {
        image: 'https://via.placeholder.com/800x400?text=Brass+Instruments',
        menu: ['Trumpet', 'Trombone', 'French Horn', 'Baritone/Euphonium/Tuba']
    },
    percussion: {
        image: '../imgs/drums.jpg',
        menu: ['Drum Set', 'Hand Drums', 'Marimba', 'Vibraphone', 'Steel Pan', 'General Percussion', 'Marching Snare', 'Marching Tenor', 'General Marching']
    }
};

// Event listener for category buttons
document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const { image, menu } = instruments[category];

        // Change image with fade effect
        instrumentImage.style.opacity = 0;
        setTimeout(() => {
            instrumentImage.src = image;
            instrumentImage.style.opacity = 1;
        }, 1000);

        // Update menu content
        instrumentMenu.innerHTML = menu.map(item => `<p>${item}</p>`).join('');
    });
});
