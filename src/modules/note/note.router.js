import { Router } from "express";
const router = Router()
import * as noteController from "./controller/note.js"

router.get('/', noteController.getNotes)
router.post('/add', noteController.addNote)
router.put('/update/:id/:userId', noteController.updateNote)
router.delete('/delete/:id/:userId', noteController.deleteNote)

export default router