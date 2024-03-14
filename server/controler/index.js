const db = require('../data/index'); 

module.exports = {

    
    getcateg: async function(req, res) {
        try {
            const test = await db.categ.findAll({});

            res.send(test);
        } catch (error) {
           throw error
        }
    },
    addcateg  :async function(req, res) { 
       try { 
        const jane = await db.categ.create({
            name: req.body.name,
        }) 
    res.send(jane)
 }
 catch (error) {
    throw error
 }

    },

    // addcateg ,getcateg 



    getCours: async function(req, res) {
        try {
            const test = await db.school.findAll({});

            res.send(test);
        } catch (error) {
           throw error
        }
    },
    addCours:async function(req, res) { 
       try { 
        const jane = await db.school.create({
            name: req.body.name,
            description: req.body.description,
            exemple:req.body.exemple
        }) 
    res.send(jane)
 }
 catch (error) {
    throw error
 }

    },

    getOneCours:async function(req, res) {
           try { 
            const fnd=req.params.name
            const project = await db.school.findAll({ where: { name: fnd } })
        res.send(project)   
        }
        catch { (error)=> { throw error} }
    } ,
    deletCours : async function ( req,res){
        try {
            const ppm=req.params.id
           
        const dlt = await db.school.destroy({
                where: { id: ppm  }
              }) 
              res.status(202).send('delete ')
        }
        catch (error) {
            throw error
         }
    },
    update:async function ( req,res){
try{ const xyx=req.params.id
   
    await db.school.update({ 
        name: req.body.name , 
        description:req.body.description,
        exemple:req.body.exemple
     }, {
        where: {
            id: xyx
        },
      });
    res.status(201).send('update done')
}
catch (error) {
    console.log(error)
 }
    }
}