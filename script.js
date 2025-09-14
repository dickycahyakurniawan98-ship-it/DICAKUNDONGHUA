// This file contains all data and logic for the website.
// The donghuaData array acts as a simple database.
const donghuaData = [
    {
        id: 1,
        title: "Renegade Immortal",
        poster: "https://placehold.co/500x700/805ad5/white?text=Renegade+Immortal",
        status: "ongoing",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    // Contoh tautan YouTube embed
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Judul Donghua 2",
        poster: "https://placehold.co/500x700/E53E3E/white?text=Poster+2",
        status: "completed",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Judul Donghua 3",
        poster: "https://placehold.co/500x700/38A169/white?text=Poster+3",
        status: "ongoing",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
            {
                title: "Episode 4",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/M7lc1UVf-VE" }
                ]
            },
        ]
    }
];

// Logika untuk halaman indeks
document.addEventListener("DOMContentLoaded", function() {
    const latestContainer = document.getElementById('latest-episodes');
    const popularContainer = document.getElementById('most-popular');

    // Filter donghua untuk bagian terbaru
    const latestDonghua = donghuaData.slice(0, 3);
    latestDonghua.forEach(donghua => {
        latestContainer.appendChild(createDonghuaCard(donghua));
    });

    // Filter donghua untuk bagian terpopuler (saat ini sama dengan terbaru)
    const popularDonghua = donghuaData.slice(0, 3);
    popularDonghua.forEach(donghua => {
        popularContainer.appendChild(createDonghuaCard(donghua));
    });
});

function createDonghuaCard(donghua) {
    const cardLink = document.createElement('a');
    const latestEpisodeIndex = donghua.episodes.length;
    cardLink.href = `play.html?id=${donghua.id}&ep=${latestEpisodeIndex}`;
    cardLink.className = 'donghua-card';

    const cardContent = `
        <div class="donghua-card-image-container">
            <img src="${donghua.poster}" alt="${donghua.title}" class="w-full h-full object-cover">
            <span class="status-badge ${donghua.status}">${donghua.status}</span>
            <span class="episode-badge">Ep ${donghua.episodes.length}</span>
        </div>
        <div class="p-4">
            <h3 class="text-white text-md font-semibold truncate">${donghua.title}</h3>
        </div>
    `;
    cardLink.innerHTML = cardContent;
    return cardLink;
}


// Logika untuk halaman pemutaran video
window.addEventListener('load', function() {
    console.log("Halaman pemutaran video dimuat.");

    const urlParams = new URLSearchParams(window.location.search);
    const donghuaId = parseInt(urlParams.get('id'));
    const episodeNumber = parseInt(urlParams.get('ep')) || 1;

    // Temukan data donghua yang cocok
    const donghua = donghuaData.find(d => d.id === donghuaId);

    if (donghua) {
        document.getElementById('donghua-page-title').textContent = donghua.title;
        document.getElementById('donghua-title').textContent = donghua.title;
        
        // Atur episode dan server
        const videoPlayer = document.getElementById('video-player');
        const serverButtonsContainer = document.getElementById('server-buttons');
        const episodeButtonsContainer = document.getElementById('episode-buttons');

        function loadVideo(episodeIndex, serverIndex) {
            console.log(`Memuat video untuk episode ${episodeIndex + 1}, server ${serverIndex + 1}`);
            const episode = donghua.episodes[episodeIndex];
            const server = episode.servers[serverIndex];
            videoPlayer.src = server.url;
            
            // Perbarui tombol server
            serverButtonsContainer.innerHTML = '';
            episode.servers.forEach((s, index) => {
                const serverButton = document.createElement('button');
                serverButton.textContent = s.name;
                serverButton.className = `px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${index === serverIndex ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`;
                serverButton.onclick = () => loadVideo(episodeIndex, index);
                serverButtonsContainer.appendChild(serverButton);
            });
        }
        
        // Buat tombol episode
        donghua.episodes.forEach((episode, index) => {
            const episodeButton = document.createElement('button');
            episodeButton.textContent = `Episode ${index + 1}`;
            episodeButton.className = `px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${index === episodeNumber - 1 ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`;
            episodeButton.onclick = () => {
                // Perbarui URL dengan episode baru tanpa memuat ulang
                history.pushState(null, '', `play.html?id=${donghuaId}&ep=${index + 1}`);
                
                // Perbarui tampilan tombol
                document.querySelectorAll('#episode-buttons button').forEach(btn => btn.classList.remove('bg-red-600', 'text-white'));
                episodeButton.classList.add('bg-red-600', 'text-white');
                
                // Muat video baru untuk episode yang dipilih
                loadVideo(index, 0); // Selalu muat server pertama
            };
            episodeButtonsContainer.appendChild(episodeButton);
        });

        // Muat episode yang diminta atau episode terbaru secara default
        loadVideo(episodeNumber - 1, 0);

        // Bagian rekomendasi
        const recommendationsContainer = document.getElementById('recommendations');
        recommendationsContainer.innerHTML = '';
        const allOtherDonghua = donghuaData.filter(d => d.id !== donghuaId);
        
        // Ambil 6 donghua secara acak
        const shuffled = allOtherDonghua.sort(() => 0.5 - Math.random());
        const recommendedDonghua = shuffled.slice(0, 6);

        recommendedDonghua.forEach(item => {
            const cardElement = createDonghuaCard(item);
            recommendationsContainer.appendChild(cardElement);
        });
    } else {
        document.getElementById('main-content').innerHTML = '<p class="text-center text-xl text-gray-400">Donghua tidak ditemukan.</p>';
    }
});
