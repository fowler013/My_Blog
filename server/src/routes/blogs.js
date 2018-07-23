import { Router } from 'express';
import Table from '../table';

let router = Router();
const blogsTable = new Table('Blogs');
const tagTable = new Table('Tags')

router.get('/', (req, res) => {
    blogsTable.getAll()
        .then((blogs) => {
            res.json(blogs);
        }).catch((err) => {
            res.send(err);
        });

});

router.get('/:id', (req, res) => {
    blogsTable.getOne(req.params.id)
        .then((blog) => {
            res.json(blog);
        }).catch((err) => {
            res.send(err);
        });
});


router.post('/', (req, res) => {
    console.log(req.body);
    let { author, title, content, tag } = req.body;

    console.log(author);
    blogsTable.insert({ author, title, content })
        .then(() => {
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500)
        })

});

router.put('/:id', (req, res) => {
    console.log(req.body);
    blogsTable.update(req.params.id, req.body)
        .then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});


router.delete('/:id', (req, res) => {
    console.log(req.body);
    blogsTable.delete(req.params.id)
        .then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

export default router;