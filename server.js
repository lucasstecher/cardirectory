const app = require('./config/express')();
const PORT = app.get('PORT');

app.listen(PORT, () => {
    console.log(`🚀 Server created at port ${PORT}`);
});