const express = require('express');
const router = express.Router();


const { getCours, addCours, getOneCours,deletCours,update ,addcateg ,getcateg } = require('../controler/index');
 
router.get('/get',getCours)
router.get('/:name',getOneCours)
router.post('/add',addCours)
router.delete('/:id',deletCours)
router.put('/:id',update)



router.get('/gett',getcateg)
router.post('/addd',addcateg)


module.exports = router;