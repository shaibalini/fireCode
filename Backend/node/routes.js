const express = require("express");
const router = express.Router();
const mobilesSchema = require("./mobiles")

router.get('/mobiles/:id', (req, res, next) => {
    console.log(req.params.id);
    mobilesSchema.findById(req.params.id).then(function (mobiles) {
        res.send(mobiles);
    }).catch((err) => res.send(err));

});

router.post('/uploadImage/:id',async (req, res, next) => {
    console.log("Entered!");
    console.log(req.params.id)
    console.log(req.body)
    var str=req.body.image;
    const mob=new mobilesSchema({
        'image':str
    });

   await mob.save().then(function (mobiles) {
        res.send(mobiles);
    }).catch(next);
});


module.exports = router;