const btn = document.getElementById("start-btn");
const audio = document.getElementById("bg-audio");
const container = document.getElementById("lyrics-container");

// Lyrics (dummy example with timestamps)
const lyrics = [
    { time: 0, text: "I'm on the run with you, my sweet love" },
    { time: 3.8, text: "There's nothing wrong contemplating God" },
    { time: 6.8, text: "Under the chemtrails over the country club" },
    { time: 13.8, text: "Wearing our jewels in the swimming pool" },
    { time: 17.7, text: "Me and my sister just playin' it cool" },
    { time: 20.6, text: "Under the chemtrails over the country club" },
    { time: 30, text: "Take out your turquoise and all of your jewels" },
    { time: 36.7, text: "Go to the market, the kids' swimming pools" },
    { time: 43.3, text: "Baby, what's your sign? My moon's in Leo" },
    { time: 49, text: "My Cancer is sun" },
    { time: 51, text: "You won't play, you're no fun" },
    { time: 57.6, text: "Well, I don't care what they think" },
    { time: 61, text: "Drag racing my little red sports car" },
    { time: 65, text: "I'm not unhinged or unhappy, I'm just wild" },
    { time: 72, text: "I'm on the run with you, my sweet love" },
    { time: 75, text: "There's nothing wrong contemplating God" },
    { time: 79, text: "Under the chemtrails over the country club" },
    { time: 85, text: "THANK YOUUU...." }
];


// Fade-in button after page load
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        btn.classList.add("fade-in");
    }, 1500);
});

// Start process on button click
btn.addEventListener("click", () => {
    btn.classList.remove("fade-in");
    btn.classList.add("fade-out");
    audio.play();
    startLyrics();
});

// Sync and scroll lyrics
function startLyrics() {
    lyrics.forEach((line, i) => {
        const div = document.createElement("div");
        div.className = "lyric-line";
        div.id = `line-${i}`;
        div.textContent = line.text;
        container.appendChild(div);
    });

    audio.addEventListener("timeupdate", () => {
        const current = audio.currentTime;
        let currentIndex = 0;

        for (let i = 0; i < lyrics.length; i++) {
            if (current >= lyrics[i].time) currentIndex = i;
        }

        document.querySelectorAll(".lyric-line").forEach((el, i) => {
            el.classList.toggle("active", i === currentIndex);
        });

        const offset = Math.max(0, currentIndex - 2);
        container.style.transform = `translateY(-${offset * 40}px)`;
    });
}
