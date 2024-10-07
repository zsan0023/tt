const params = new URLSearchParams(window.location.search);
const songUrl = params.get('song');
const audioPlayer = document.getElementById('audio-player');
const songNameElement = document.getElementById('song-name');
const lyricsElement = document.getElementById('lyrics');

audioPlayer.src = decodeURIComponent(songUrl);
songNameElement.textContent = audioPlayer.src.split('/').pop().replace('.mp3', '');

// 这里需要一个函数来加载并显示歌词
function loadLyrics(songName) {
    // 假设你的歌词文件和MP3文件同名，但是扩展名是.lrc
    fetch(`music/${songName}.lrc`)
    .then(response => response.text())
    .then(lyrics => {
        lyricsElement.textContent = lyrics;
    })
    .catch(error => {
        console.error('歌词加载失败', error);
    });
}

loadLyrics(audioPlayer.src.split('/').pop().replace('.mp3', ''));

// 同步歌词滚动的逻辑可以根据需要添加
