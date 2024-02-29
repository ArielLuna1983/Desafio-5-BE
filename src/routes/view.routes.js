import express from 'express';
import ProductManager from '../managers/ProductManager';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended:true }));

const pm = new ProductManager();

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
