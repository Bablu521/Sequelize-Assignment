import { Router } from "express";
const router = Router()
import * as userController from "./controller/user.js"

router.get('/', userController.getUsers)
router.post('/signup', userController.signup)
router.get('/signin', userController.signin)
router.put('/update', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)
router.get('/search1', userController.searchUserWithLetter)
router.get('/search2', userController.searchUserAgeBetween)
router.get('/search3', userController.searchOldestUsers)
router.get('/search4', userController.searchUserbyUsingIN)


export default router