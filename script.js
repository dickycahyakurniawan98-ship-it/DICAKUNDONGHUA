// This file acts as a single database for the donghua website,
// and it also contains all the logic for displaying the content.

const donghuaData = [
    {
        id: 1,
        title: "Renegade Immortal",
        poster: "https://i.imgur.com/gKzJ4cK.jpeg",
        status: "ongoing",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/z4y5N2oM6a4" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/Fjqj4cM0fU4" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/S2qT6oXqP-g" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/K_9mX4z0oG0" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/Fjqj4cM0fU4" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/z4y5N2oM6a4" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Battle Through The Heavens",
        poster: "https://placehold.co/700x980/E53E3E/ffffff?text=Poster+2",
        status: "completed",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/videoseries?si=c3z0E98xX9vX_H80&list=PLvHn5b3pL3L3lX8yKj4sJ4X9yX_H80" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/x-6tW6Xf-tU" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/t-9u6jF-J-o" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/Q-8zW8F-y-o" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/Fjqj4cM0fU4" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/z4y5N2oM6a4" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "A Will Eternal",
        poster: "https://placehold.co/700x980/2F855A/ffffff?text=Poster+3",
        status: "ongoing",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/z4y5N2oM6a4" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/S2qT6oXqP-g" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/Fjqj4cM0fU4" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/x-6tW6Xf-tU" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/Q-8zW8F-y-o" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/t-9u6jF-J-o" }
                ]
            },
            {
                title: "Episode 4",
                servers: [
                    { name: "Server 1", url: "https://www.youtube.com/embed/t-9u6jF-J-o" },
                    { name: "Server 2", url: "https://www.youtube.com/embed/Q-8zW8F-y-o" }
                ]
            }
        ]
    }
];

// Logika untuk halaman index.html
if (document.getElementById('latest-episodes')) {
    const latestEpisodesContainer = document.getElementById('latest-episodes');
    const popularEpisodesContainer = document.getElementById('most-popular'); // Menambahkan container untuk Terpopuler
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const mainTitle = document.querySelector('.card-group-title');
    const mobileSearchButton = document.querySelector('.search-icon');

    const createDonghuaCard = (donghua) => {
        const lastEpisodeIndex = donghua.episodes.length - 1;
        const lastEpisodeNumber = lastEpisodeIndex + 1;
        const cardLink = `play.html?id=${donghua.id}&ep=${lastEpisodeIndex}`;

        return `
            <a href="${cardLink}" class="donghua-card block relative">
                <div class="donghua-card-image-container">
                    <img src="${donghua.poster}" alt="${donghua.title}" class="rounded-lg">
                </div>
                <div class="status-badge ${donghua.status === 'ongoing' ? 'ongoing' : 'completed'}">${donghua.status === 'ongoing' ? 'Ongoing' : 'Completed'}</div>
                <div class="episode-badge">Ep ${lastEpisodeNumber}</div>
                <div class="p-2">
                    <h3 class="text-white text-sm font-semibold truncate">${donghua.title}</h3>
                </div>
            </a>
        `;
    };

    const displayDonghua = (donghuas, container) => {
        container.innerHTML = '';
        if (donghuas.length === 0) {
            container.innerHTML = '<p class="col-span-full text-center text-gray-400">Tidak ada hasil ditemukan.</p>';
        } else {
            donghuas.forEach(donghua => {
                const cardHTML = createDonghuaCard(donghua);
                container.innerHTML += cardHTML;
            });
        }
    };

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase();
        const filteredDonghua = donghuaData.filter(donghua =>
            donghua.title.toLowerCase().includes(query)
        );
        displayDonghua(filteredDonghua, latestEpisodesContainer);
        mainTitle.textContent = query ? `Hasil Pencarian untuk "${query}"` : 'Terbaru';

        if (query) {
            // Sembunyikan bagian terpopuler saat mencari
            document.querySelector('#most-popular-section').style.display = 'none';
        } else {
            document.querySelector('#most-popular-section').style.display = 'block';
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('input', handleSearch);
    mobileSearchButton.addEventListener('click', handleSearch);

    // Menampilkan donghua terbaru
    displayDonghua(donghuaData, latestEpisodesContainer);

    // Menampilkan donghua terpopuler
    const shuffled = donghuaData.sort(() => 0.5 - Math.random());
    const popularDonghua = shuffled.slice(0, 6);
    displayDonghua(popularDonghua, popularEpisodesContainer);
}

// Logika untuk halaman play.html
if (document.getElementById('video-player')) {
    const urlParams = new URLSearchParams(window.location.search);
    const donghuaId = parseInt(urlParams.get('id'));
    const episodeIndex = parseInt(urlParams.get('ep') || 0);

    const donghua = donghuaData.find(d => d.id === donghuaId);

    if (donghua) {
        document.getElementById('donghua-title').textContent = donghua.title;

        // Tampilkan server
        const serversContainer = document.getElementById('server-buttons');
        const loadVideo = (url) => {
            const videoPlayer = document.getElementById('video-player');
            videoPlayer.src = url;
        };

        donghua.episodes[episodeIndex].servers.forEach(server => {
            const button = document.createElement('button');
            button.className = 'bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300';
            button.textContent = server.name;
            button.onclick = () => loadVideo(server.url);
            serversContainer.appendChild(button);
        });

        // Muat video episode pertama atau yang dipilih
        loadVideo(donghua.episodes[episodeIndex].servers[0].url);

        // Tampilkan tombol episode
        const episodesContainer = document.getElementById('episode-buttons');
        donghua.episodes.forEach((episode, index) => {
            const button = document.createElement('a');
            button.href = `play.html?id=${donghua.id}&ep=${index}`;
            button.className = `bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ${index === episodeIndex ? 'bg-blue-600' : ''}`;
            button.textContent = `Ep ${index + 1}`;
            episodesContainer.appendChild(button);
        });

        // Tampilkan rekomendasi acak
        const recommendationsContainer = document.getElementById('recommendations');
        const shuffled = donghuaData.sort(() => 0.5 - Math.random());
        const recommended = shuffled.slice(0, 6);

        recommended.forEach(item => {
            const cardLink = `play.html?id=${item.id}&ep=${item.episodes.length - 1}`;
            const cardHTML = `
                <a href="${cardLink}" class="donghua-card block relative">
                    <div class="donghua-card-image-container">
                        <img src="${item.poster}" alt="${item.title}" class="rounded-lg">
                    </div>
                    <div class="status-badge ${item.status === 'ongoing' ? 'ongoing' : 'completed'}">${item.status === 'ongoing' ? 'Ongoing' : 'Completed'}</div>
                    <div class="episode-badge">Ep ${item.episodes.length}</div>
                    <div class="p-2">
                        <h3 class="text-white text-sm font-semibold truncate">${item.title}</h3>
                    </div>
                </a>
            `;
            recommendationsContainer.innerHTML += cardHTML;
        });
    }
}
