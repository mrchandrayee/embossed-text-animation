# Embossed Text Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/embossed-text-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 20.5-second, 720 × 1280 screen recording.

## Five text effects shown in the video
1. **EMBOSS** — dark navy heavy text with cyan/black opposing shadows and a subtle press animation.
2. **SHINE** — a moving cyan/white highlight travels across gradient-filled text.
3. **RISE** — the text floats vertically and tilts in 3D.
4. **CLICK** — a raised embossed text button depresses when clicked.
5. **WAVE!** — individual letters move up and down with staggered delays.

## Interactions
- Select numbered buttons 01–05 to switch demos.
- Use Previous / Next arrow buttons or keyboard arrow keys.
- Copy CSS copies the current effect's CSS snippet.
- Click the CLICK demo text to press it.

## Run
Extract the ZIP and open `index.html` in a modern browser. No package installation or external libraries required.

## Source fidelity
The video exposes portions of the original CSS. Readable declarations were transcribed where possible, including `.demo-text` color/weight/letter spacing and text-shadow, the `press` animation duration, the `shine` linear-gradient color stops, the `rise` transform and keyframe structure, the `click` padding/radius/transition/shadow, and staggered `.wave span:nth-child(...)` animation delays. Some declarations and complete keyframes were not fully readable, so the runnable implementation reconstructs those parts rather than claiming byte-for-byte recovery.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
