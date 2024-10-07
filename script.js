document.addEventListener('DOMContentLoaded', function() {
    const songs = [
        { name: '单车-陈奕迅', mp3: 'music/单车-陈奕迅.mp3', lrc: 'music/单车-陈奕迅.lrc' },
        { name: '多远都要在一起-G.E.M.邓紫棋', mp3: 'music/多远都要在一起-G.E.M.邓紫棋.mp3', lrc: 'music/多远都要在一起-G.E.M.邓紫棋.lrc' },
        { name: '大鱼-周深', mp3: 'music/大鱼-周深.mp3', lrc: 'music/大鱼-周深.lrc' },
        { name: '当你-林俊杰', mp3: 'music/当你-林俊杰.mp3', lrc: 'music/当你-林俊杰.lrc' },
        { name: '稻香-周杰伦', mp3: 'music/稻香-周杰伦.mp3', lrc: 'music/稻香-周杰伦.lrc' }
    ];

    const songListElement = document.querySelector('.song-list');
    const audioPlayer = document.getElementById('audio-player');

    songs.forEach(song => {
        const div = document.createElement('div');
        div.textContent = song.name;
        div.className = 'song-item';
        div.addEventListener('click', () => playSong(song));
        songListElement.appendChild(div);
    });

    function playSong(song) {
        audioPlayer.src = song.mp3;
        audioPlayer.load(); // 加载新的音频资源
        audioPlayer.play(); // 播放音频
    }
});

function playSong(song) {
    window.open(`play.html?song=${encodeURIComponent(song.url)}`, '_blank');
}
