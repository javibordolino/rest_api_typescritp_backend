import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.1.0',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://promiedos.nyc3.cdn.digitaloceanspaces.com/menu/logo2.jpg');
            height: 80px;
            width: auto;
        }
        .swagger-ui .topbar {
            background-color: blue;
        }
    `,
    customSiteTitle: 'Documentacion REST API Express / TypeScript'
}

export default swaggerSpec
export{
    swaggerUiOptions
}