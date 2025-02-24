nebula-odyssey/
├── package.json
├── next.config.js
├── vercel.json
├── .vercelignore
├── README.md
├── public/
│   └── assets/
│       ├── sprites/
│       │   ├── player.png
│       │   └── enemy.png
│       └── levels/
│           ├── world1-level1.json
│           └── world2-level1.json
├── src/
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js
│   │   ├── loading.js
│   │   ├── game.js
│   │   └── api/
│   │       └── level.js
│   ├── components/
│   │   ├── LoadingScreen.js
│   │   ├── GameCanvas.js
│   │   ├── LevelSelect.js
│   │   ├── UI.js
│   │   └── WorldSelector.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── game.css
│   ├── lib/
│   │   ├── gameEngine.js
│   │   └── levelData.js
│   └── config/
│       ├── gameConfig.js
│       └── levels.js
└── server/
    ├── server.js
    └── db.js
