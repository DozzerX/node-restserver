// PUERTO

process.env.PORT = process.env.PORT || 3000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del token 60s * 60m * 24h * 30dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
// SEED de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarollo';

// ENTORNO
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;