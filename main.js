document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.setAttribute('defaultMuted', '');
    video.setAttribute('playsinline', '');

    function setVideoBgColor(vid, backgroundElement) {
        const ratio = window.devicePixelRatio || 1;
        const canvas = document.createElement("canvas");
        const videoWidth = 600;
        const videoHeight = 400;
        canvas.width = videoWidth * ratio;
        canvas.height = videoHeight * ratio;
        canvas.style.width = `${videoWidth}px`;
        canvas.style.height = `${videoHeight}px`;
        const ctx = canvas.getContext("2d");
        ctx.scale(ratio, ratio);
        
        setInterval(() => {
            ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
            setRGBVideoColor(canvas, ctx, backgroundElement);
        }, 50);
    }

    function setRGBVideoColor(canvas, ctx, backgroundElement) {
        const p = ctx.getImageData(0, 0, 100, 100).data;
        const colorBoost = 0;
        const colorR = p[0] + colorBoost;
        const colorG = p[1] + colorBoost;
        const colorB = p[2] + colorBoost;
        backgroundElement.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    }

    video.addEventListener("play", function() {
        setVideoBgColor(video, document.getElementById('color-box'));
    });
});




