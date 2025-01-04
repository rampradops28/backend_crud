import express from 'express'
import { fetch , create , update , deleteUser} from '../controller/userController.js'

let router = express.Router()

// router.get('/fetch',fetch)
router.get('/fetch/:id',fetch)

router.post('/create',create)

router.put('/update/:id',update)

router.delete('/delete/:id', deleteUser)

export default router;
