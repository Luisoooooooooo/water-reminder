let intervalId;
let timeLeft = 2 * 60 * 60;

function startTimer() {
    intervalId = setInterval(() => {
        timeLeft--;
        chrome.storage.local.set({ timeLeft });

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            timeLeft = 2 * 60 * 60;
            chrome.storage.local.set({ timeLeft });

            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon.png',
                title: '¡Es hora de beber agua!',
                message: 'Recuerda beber un vaso de agua para mantenerte hidratado.',
                priority: 2
            });

            startTimer();
        }
    }, 1000);
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ timeLeft });
});

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get('timeLeft', (data) => {
        timeLeft = data.timeLeft || timeLeft;
        startTimer();
    });
});
