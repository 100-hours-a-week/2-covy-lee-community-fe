const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

// // 모든 요청을 index.html로 리다이렉트
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
});
