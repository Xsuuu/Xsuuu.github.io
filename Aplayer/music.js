const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,//自动播放
    order: 'random',
    audio: [
        {
            name: '소녀의 고백',
            artist: 'Crepe (크레페)',
            url: 'Aplayer/Crepe (크레페) - 소녀의 고백 (少女的告白) [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/C少女.jpg',
        },
        {
            name: '解忧曲',
            artist: '者思范',
            url: 'Aplayer/者思范 - 解忧曲 [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/者解忧曲.jpg',
        },
        {
            name: 'Kiss The Rain',
            artist: '李闰珉 (이루마)',
            url: 'Aplayer/李闰珉 (이루마) - Kiss The Rain (雨的印记) [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/李雨的印记.jpg',
        },
        {
            name: '언제나 너의 곁에서',
            artist: 'Crepe (크레페)',
            url: 'Aplayer/Crepe (크레페) - 언제나 너의 곁에서 (Always By Your Side) [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/CAlways.jpg',
        },
        {
            name: 'Kimbara Chieko',
            artist: 'DJ OKAWARI',
            url: 'Aplayer/DJ OKAWARI - Represent feat_ Kimbara Chieko [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/DJ.jpg',
        },
        {
            name: 'secret base ～君がくれたもの～',
            artist: 'ZONE (ゾーン)',
            url: 'Aplayer/ZONE (ゾーン) - secret base ～君がくれたもの～ (Secret Base～你给我的所有～) (Piano Version) [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/ZONE.jpg',
        },
        {
            name: '静かな夜に、君と話そう',
            artist: '坂本昌一郎 (Jun_A)',
            url: 'Aplayer/坂本昌一郎 (Jun_A) - 静かな夜に、君と話そう (安静的夜晚、和你在一起) [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/坂本.jpg',
        },
        {
            name: '눈처럼 하얀 마음은 받을 수 없어',
            artist: 'Crepe (크레페)',
            url: 'Aplayer/Crepe (크레페) - 눈처럼 하얀 마음은 받을 수 없어 (无法接受像雪一样白的心) [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/C无法.jpg',
        },
        {
            name: '青石巷',
            artist: '魏琮霏',
            url: 'Aplayer/魏琮霏 - 青石巷 [最优化的质量和大小] [高质量].mp3',
            cover: 'Aplayer/img/魏青石巷.jpg',
        },
    ]
});
