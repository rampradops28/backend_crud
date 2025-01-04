const express = require('express')
let router = express.Router()

router.get("/",(req,res) => {
    res.send("user information")
})

router.get("/newuser",(req,res) => {
    res.send("new user information")
})

router.get("/deleted",(req,res) => {
    res.send("news Deleted")
})

router.post("/createuser",(req,res) => {
    res.send("Add new user")
})

router
    .route('/:id')
    .get((req,res) => {
        console.log(req.usery)
        res.send("retrive id value "+req.params.id)
    })
    .put((req,res) => {
        res.send("update this id "+req.params.id)
    })
    .delete((req,res) => {
        res.send("delete this id "+req.params.id)
    })
    router.post("/createuser",(req,res) => {
        res.send("Add new user")
    })

const users = [{name: "raja"},{name: "rani"},{name: "sepoy"}]

router.param('id',(req,res,next,id) => {
    console.log(id)
    req.usery = users[id]
    next()
})
// router.get('/:id',(req,res) => {
//     res.send("retrive id value "+req.params.id)
// })

// router.put('/:id',(req,res) => {
//     res.send("update this id "+req.params.id)
// })

// router.delete('/:id',(req,res) => {
//     res.send("delete this id "+req.params.id)
// })

module.exports = router;