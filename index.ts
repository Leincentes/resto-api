import app from "./src";
import swaggerDocs from "./src/docs/v1/swagger";

const PORT = process.env.PORT || 4000;
const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // docs
    swaggerDocs(app, PORT, baseURL, { title: 'Restaurant API', version: '1.0.0' });
});
