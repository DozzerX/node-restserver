// PUERTO

process.env.PORT = process.env.PORT || 3000;


// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ENTORNO
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://dozzer:burberry1@cluster0-h1qyh.mongodb.net/cafe';
}

process.env.URLDB = urlDB;