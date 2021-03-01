const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

var testList = [{ postTitle: "제목 1", postDate: "2021.02.24", postContent: "첫 번째 포스트" }
, { postTitle: "제목 2", postDate: "2021.02.23", postContent: "두 번째 포스트" }];


app.use(bodyParser.json()); //json 형태로 데이터 송수신
app.use(bodyParser.urlencoded({ extended: true }));

/* URL Mapping */
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
});

app.get('/api/posts', (req, res) => {
    setTimeout(() => {res.send(testList)}, 1000);
    
});

app.listen(port, () => console.log(`Listening on port ${port}`));