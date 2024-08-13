function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
}

function updateTimer() {
    chrome.storage.local.get('timeLeft', (data) => {
        const timeLeft = data.timeLeft || 0;
        document.getElementById('timer').innerText = formatTime(timeLeft);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    setInterval(updateTimer, 1000);
});
