const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>My App v1</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          text-align: center;
        }
        h1 {
          margin-bottom: 0.5rem;
          color: #4A90E2;
        }
        p {
          margin-top: 0;
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from My App v1</h1>
        <p>Your Node.js server is running beautifully!</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('✨ Server running on http://localhost:3000 ✨');
});

