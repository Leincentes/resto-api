import { Request, Response } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

interface SwaggerDocsOptions {
    title: string;
    version: string;
}

const generateSwaggerSpec = (baseURL: string, options: SwaggerDocsOptions) => {
    return swaggerJSDoc({
        definition: {
            openapi: '3.0.0',
            info: {
                title: options.title,
                version: options.version
            },
            servers: [{ url: baseURL }]
        },
        // TODO
        apis: [
            './src/docs/v1/login-register.yaml',
            './src/docs/v1/user.yaml',
            './src/docs/v1/restaurants.yaml',
            './src/docs/v1/food.yaml',
            './src/docs/v1/category.yaml',
        ]
    });
};

const swaggerDocs = (app: any, port: any, baseURL: string, options: SwaggerDocsOptions) => {
    const swaggerSpec = generateSwaggerSpec(baseURL, options);

    // Route handler for serving Swagger UI
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    // Route handler for serving Swagger JSON
    app.get('/api/v1/docs/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Docs are available on ${baseURL}/api/v1/docs`);
};

export default swaggerDocs;