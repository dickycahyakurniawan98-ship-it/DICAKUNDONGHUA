// This file acts as a simple database for the donghua website.
// It contains all the data needed for each donghua, including their ID, title, poster image,
// status (ongoing/completed), and a list of episodes with video server URLs.

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
                    // Example YouTube embed links
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
