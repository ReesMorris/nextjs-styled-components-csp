import express from 'express';
import next from 'next';
import { ServerResponse } from 'http';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res as ServerResponse);
  });

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
