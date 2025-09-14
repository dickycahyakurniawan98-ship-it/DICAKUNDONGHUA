// This file contains the main logic for the website, handling the dynamic content
// and user interactions.

document.addEventListener('DOMContentLoaded', () => {
    // Check the current page to run the correct script.
    if (document.getElementById('latest-episodes')) {
        renderHomePage();
    } else if (document.getElementById('donghua-player')) {
        renderPlayPage();
    }
});

// --- Home Page Logic (index.html) ---
function renderHomePage() {
    const latestContainer = document.getElementById('latest-episodes');
    const mostPopularContainer = document.getElementById('most-popular');

    // Create cards for both sections.
    donghuaData.forEach(donghua => {
        const card = createDonghuaCard(donghua);
        latestContainer.appendChild(card);
    });

    // For simplicity, we'll just copy the latest episodes to the popular section.
    // In a real app, you would have different logic here (e.g., sorting by views).
    donghuaData.forEach(donghua => {
        const card = createDonghuaCard(donghua);
        mostPopularContainer.appendChild(card);
    });
}

function createDonghuaCard(donghua) {
    const cardLink = document.createElement('a');
    // Link to the play page, passing the donghua ID and the latest episode number.
    const latestEpisodeIndex = donghua.episodes.length - 1;
    cardLink.href = `play.html?id=${donghua.id}&ep=${latestEpisodeIndex}`;
    cardLink.className = 'donghua-card';

    const statusClass = donghua.status === 'ongoing' ? 'bg-blue-500' : 'bg-green-500';
    const statusText = donghua.status === 'ongoing' ? 'Ongoing' : 'Completed';

    cardLink.innerHTML = `
        <div class="donghua-card-image-container">
            <img src="${donghua.poster}" alt="${donghua.title}">
            <span class="status-badge ${statusClass}">${statusText}</span>
            <span class="episode-badge">Ep ${donghua.episodes.length}</span>
        </div>
        <div class="p-3">
            <h3 class="text-sm font-semibold truncate text-white">${donghua.title}</h3>
        </div>
    `;
    return cardLink;
}

// --- Play Page Logic (play.html) ---
function renderPlayPage() {
    const params = new URLSearchParams(window.location.search);
    const donghuaId = parseInt(params.get('id'));
    let currentEpIndex = parseInt(params.get('ep'));

    const donghua = playData.find(d => d.id === donghuaId);

    if (!donghua) {
        // Handle case where donghua is not found
        document.getElementById('main-content').innerHTML = '<div class="text-center text-red-500">Donghua tidak ditemukan.</div>';
        return;
    }

    // Set the initial title and video player.
    document.getElementById('donghua-title').textContent = donghua.title;
    updateVideoPlayer(donghua, currentEpIndex);
    createEpisodeButtons(donghua, currentEpIndex);
    renderRecommendations(donghuaId);
}

function updateVideoPlayer(donghua, epIndex) {
    const videoPlayer = document.getElementById('video-player');
    const serverContainer = document.getElementById('server-buttons');
    const currentEpisode = donghua.episodes[epIndex];

    if (!currentEpisode || !currentEpisode.servers.length) {
        videoPlayer.src = '';
        serverContainer.innerHTML = '<p class="text-red-400">Video tidak tersedia untuk episode ini.</p>';
        return;
    }

    // Set the video source to the first server by default
    videoPlayer.src = currentEpisode.servers[0].url;

    // Create server buttons dynamically
    serverContainer.innerHTML = '';
    currentEpisode.servers.forEach((server, serverIndex) => {
        const button = document.createElement('button');
        button.textContent = server.name;
        button.className = 'bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300';
        button.onclick = () => {
            videoPlayer.src = server.url;
            // Highlight the active server button
            document.querySelectorAll('#server-buttons button').forEach(btn => btn.classList.remove('bg-blue-600', 'hover:bg-blue-500'));
            button.classList.add('bg-blue-600', 'hover:bg-blue-500');
        };
        serverContainer.appendChild(button);
    });

    // Highlight the first server button by default
    if (serverContainer.firstElementChild) {
        serverContainer.firstElementChild.classList.add('bg-blue-600', 'hover:bg-blue-500');
    }
}

function createEpisodeButtons(donghua, currentEpIndex) {
    const episodesContainer = document.getElementById('episode-buttons');
    episodesContainer.innerHTML = '';

    donghua.episodes.forEach((episode, index) => {
        const button = document.createElement('a');
        button.href = `play.html?id=${donghua.id}&ep=${index}`;
        button.textContent = `Episode ${index + 1}`;
        button.className = `px-4 py-2 rounded-md transition duration-300 ${index === currentEpIndex ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`;
        episodesContainer.appendChild(button);
    });
}

function renderRecommendations(currentDonghuaId) {
    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = '';

    // Get a shuffled list of donghua data
    const shuffledDonghua = [...playData].sort(() => 0.5 - Math.random());
    let recommendations = [];

    // Select 6 random donghua that are not the current one
    let count = 0;
    for (const d of shuffledDonghua) {
        if (d.id !== currentDonghuaId) {
            recommendations.push(d);
            count++;
            if (count >= 6) break;
        }
    }

    // Render the cards
    recommendations.forEach(donghua => {
        const cardLink = document.createElement('a');
        const latestEpisodeIndex = donghua.episodes.length - 1;
        cardLink.href = `play.html?id=${donghua.id}&ep=${latestEpisodeIndex}`;
        cardLink.className = 'donghua-card';

        const statusClass = donghua.status === 'ongoing' ? 'bg-blue-500' : 'bg-green-500';
        const statusText = donghua.status === 'ongoing' ? 'Ongoing' : 'Completed';

        cardLink.innerHTML = `
            <div class="donghua-card-image-container">
                <img src="${donghua.poster}" alt="${donghua.title}">
                <span class="status-badge ${statusClass}">${statusText}</span>
                <span class="episode-badge">Ep ${donghua.episodes.length}</span>
            </div>
            <div class="p-3">
                <h3 class="text-sm font-semibold truncate text-white">${donghua.title}</h3>
            </div>
        `;
        recommendationsContainer.appendChild(cardLink);
    });
}
