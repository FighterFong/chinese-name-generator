module.exports = function (app) {
    app.get('/', (req, res) => res.sendFile('./public-test/index.html'));
};

