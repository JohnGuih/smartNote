const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const DBconnection = require('./db/DBconnection');
const UserModel = require('./db/model/UserModel');
const jsonwebtoken = require('jsonwebtoken');
const { Encrypt, Decrypt } = require('./utils/crypto');
const { JWTsign } = require('./utils/jsonwebtoken');
const AuthMiddleware = require('./middleware');
const NoteModel = require('./db/model/NoteModel');

app.use(cors({
  origin: 'http://localhost'
}));

app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  console.log(req.path);
  next();
})

app.use("/", AuthMiddleware);

const startServer = async () => {
  try {
    const db = new DBconnection();
    await db._connect();
    console.log('Connected to database');

    app.post('/auth', async (req, res) => {
      const { login, password } = req.body;
      if (!login || !password) {
        res.status(400).send({ error: 'Invalid login or password' });
        return;
      }
      const foundUser = await UserModel.findOne({ email: login });
      if (!foundUser) {
        res.status(400).send({ error: 'User not found' });
        return;
      }

      const decryptedPassword = Decrypt(foundUser.password);
      if (password !== decryptedPassword) {
        res.status(400).send({ error: 'Invalid password' });
        return;
      }

      const JWTtoken = JWTsign({ id: foundUser._id, role: 'user' });
      res.send({ ok: true, token: JWTtoken });
    });

    app.post('/signup', async (req, res) => {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        res.status(400).send({ error: 'Invalid data' });
        return;
      }

      const foundUser = await UserModel.findOne({ email: email });
      if (foundUser) {
        res.status(400).send({ error: 'User already exists' });
        return;
      }

      const encryptedPassword = Encrypt(password);

      UserModel.create({ name, email, password: encryptedPassword })
        .then(user => {
          const JWTtoken = JWTsign({ id: user._id, role: 'user' });
          res.send({ ok: true, token: JWTtoken });
        })
        .catch((err) => {
          console.error('Failed to create user', err);
          res.status(500).send({ error: 'Failed to create user' });
        });
    });

    app.post('/note', async (req, res) => {
      const { noteID, title, content } = req.body;
      if (!title || !content) {
        res.status(400).send({ error: 'Invalid data' });
        return;
      }

      if (noteID) {
        const foundNote = await NoteModel.findOne({ _id: noteID });
        if (!foundNote) {
          res.status(400).send({ error: 'Note not found' });
          return;
        }
        foundNote.title = title;
        foundNote.content = content;
        await foundNote.save();
        res.send({ ok: true });
      } else {
        const userInfo = req.userInfo;
        NoteModel.create({ user: userInfo.id, title, content })
          .then(note => {
            res.send({ ok: true, noteID: note._id });
          })
          .catch((err) => {
            console.error('Failed to create note', err);
            res.status(500).send({ error: 'Failed to create note' });
          });
      }

    });

    app.get('/note', async (req, res) => {
      const userInfo = req.userInfo;
      const notes = await NoteModel.find({ user: userInfo.id });
      res.send({ ok: true, notes });
    });

    app.get('/note/:noteID', async (req, res) => {
      const { noteID } = req.params;
      const userInfo = req.userInfo;
      const note = await NoteModel.findOne({ _id: noteID, user: userInfo.id });
      if (!note) {
        res.status(400).send({ error: 'Note not found' });
        return;
      }
      res.send({ ok: true, note });
    });

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database', err);
  }
};

startServer();