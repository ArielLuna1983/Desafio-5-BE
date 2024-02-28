import express from 'express';
import exphbs from 'express-handlebars';
import ProductManager from '../managers/ProductManager';

const router = express.Router();
const pm = new ProductManager();

router.engine('hbs', exphbs());
router.set('view engine', 'hbs');
router.set('views', path.join(__dirname, '../views'));

router.use(express.static('../public'));

router.get('/', async (req, res) => {
    try {
        const products = await pm.getProducts();
        res.render('home', { products });
    } catch (error) {
        res.status(500).send('Error al renderizar la vista home');
    }
});

router.get('/realtimeproducts', async (req, res) => {
    try {
        const products = await pm.getProducts();
        res.render('realTimeProducts', { products });
    } catch (error) {
        res.status(500).send('Error al renderizar la vista realTimeProducts');
    }
});

export default router;
