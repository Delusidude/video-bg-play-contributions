const checkbox = document.getElementById('instantAutoplay');

chrome.storage.sync.get('instantAutoplay', (data) => {
    checkbox.checked = data.instantAutoplay || false;
});

checkbox.addEventListener('change', () => {
    chrome.storage.sync.set({ instantAutoplay: checkbox.checked });
});
