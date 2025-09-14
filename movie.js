// This file acts as a simple database for the donghua website.
// It contains all the data needed for each donghua, including their ID, title, poster image,
// status (ongoing/completed), and a list of episodes with video server URLs.

const donghuaData = [
    {
        id: 1,
        title: "Renegade Immortal",
        poster: "https://i.imgur.com/mGXAPTG.jpeg",
        status: "ongoing",
        episodes: [
            {
                title: "Episode 1",
                servers: [
                    { name: "Server 1", url: "https://www.dailymotion.com/embed/video/x7y0hgy?autoplay=1," },
                    { name: "Server 2", url: "https://www.dailymotion.com/embed/video/x7y0hgy?autoplay=1," }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://www.dailymotion.com/embed/video/x7y0hgy?autoplay=1," },
                    { name: "Server 2", url: "https://www.dailymotion.com/embed/video/x7y0hgy?autoplay=1," }
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
                    { name: "Server 1", url: "https://example.com/video2-1.mp4" },
                    { name: "Server 2", url: "https://example.com/video2-2.mp4" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://example.com/video2-3.mp4" },
                    { name: "Server 2", url: "https://example.com/video2-4.mp4" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://example.com/video2-5.mp4" },
                    { name: "Server 2", url: "https://example.com/video2-6.mp4" }
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
                    { name: "Server 1", url: "https://example.com/video3-1.mp4" },
                    { name: "Server 2", url: "https://example.com/video3-2.mp4" }
                ]
            },
            {
                title: "Episode 2",
                servers: [
                    { name: "Server 1", url: "https://example.com/video3-3.mp4" },
                    { name: "Server 2", url: "https://example.com/video3-4.mp4" }
                ]
            },
            {
                title: "Episode 3",
                servers: [
                    { name: "Server 1", url: "https://example.com/video3-5.mp4" },
                    { name: "Server 2", url: "https://example.com/video3-6.mp4" }
                ]
            },
            {
                title: "Episode 4",
                servers: [
                    { name: "Server 1", url: "https://example.com/video3-7.mp4" },
                    { name: "Server 2", url: "https://example.com/video3-8.mp4" }
                ]
            },
        ]
    }
];

const playData = donghuaData;


