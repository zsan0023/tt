document.addEventListener('DOMContentLoaded', function() {
    const songs = getSongs();
    const songListElement = document.getElementById('song-list');
    songs.forEach(song => {
        const div = document.createElement('div');
        div.textContent = song.name;
        div.addEventListener('click', () => playSong(song));
        songListElement.appendChild(div);
    });
});

function getSongs() {
    const songs = [];
    // 假设你的MP3文件放在同一个目录下的"music"文件夹里
    const musicFolder = 'music/';
    const songFiles = ['song1.mp3', 'song2.mp3', 'song3.mp3']; // 这里替换成实际的文件名
    songFiles.forEach(file => {
        const song = {
            name: file.replace('.mp3', ''),
            url: musicFolder + file
        };
        songs.push(song);
    });
    return songs;
}

function playSong(song) {
    window.open(`play.html?song=${encodeURIComponent(song.url)}`, '_blank');
}
