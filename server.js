const express = require('express');
const app = express();
const path = require('path');
const { getUserProfile, getRepositories, GITHUB_USERNAME } = require('./services/github');

// Set port
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', async (req, res) => {
    try {
        const [profile, repos] = await Promise.all([
            getUserProfile(),
            getRepositories()
        ]);

        res.render('index', {
            profile,
            repos,
            username: GITHUB_USERNAME,
            error: null
        });
    } catch (error) {
        console.error(error);
        res.render('index', {
            profile: null,
            repos: [],
            username: GITHUB_USERNAME,
            error: 'Error al cargar los datos del portafolio.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
