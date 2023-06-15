const server = require("./index");

// ℹ️ Sets the PORT for our app to have access to it
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});


