import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

let _NAME: string = ''

app.get('/v2/', (req: Request, res: Response) => {
    res.send('Hello, Express.js and TypeScript!');
});

app.get('/v2/login', (req: Request, res: Response) => {
    const name = req.query.name as string;
    _NAME = name;
    res.send(`Hello, ${name}!`);
});

app.get('/v2/run', (req: Request, res: Response) => {
    if (_NAME === '') {
        res.send('Please login first');
        return;
    } else {
        res.send(`${_NAME} is running!`);
    }
});

app.get('/v2/eat', (req: Request, res: Response) => {
    if (_NAME === '') {
        res.send('Please login first');
        return;
    } else {
        res.send(`${_NAME} is eating!`);
    }
});

app.get('/v2/logout', (req: Request, res: Response) => {
    if (_NAME === '') {
        res.send('Please login first');
        return;
    } else {
        _NAME = '';
        res.send(`${_NAME} is gone!`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});