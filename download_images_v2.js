const fs = require('fs');
const path = require('path');

const images = [
    { url: 'https://shop-phinf.pstatic.net/20251127_86/173267562854378p4k_PNG/45464119047125010_1349137453.png', name: 'season1.png' },
    { url: 'https://shop-phinf.pstatic.net/20251127_39/1732675681600f7D0E_PNG/45464171926618721_1180295173.png', name: 'season2.png' },
    { url: 'https://shop-phinf.pstatic.net/20251127_107/1732675549887O7H8w_PNG/45464041005888805_2066601815.png', name: 'traces.png' }
];

const download = async (url, dest) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        fs.writeFileSync(dest, buffer);
        console.log(`Successfully downloaded ${dest} (${buffer.length} bytes)`);
    } catch (error) {
        console.error(`Error downloading ${dest}:`, error);
    }
};

const main = async () => {
    const dir = path.join(__dirname, 'public', 'books');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    for (const img of images) {
        await download(img.url, path.join(dir, img.name));
    }
};

main();
