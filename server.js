// ملف الخادم - قالب عام
// ⚠️ يجب تخصيص القيم والمتغيرات حسب الحاجة
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// مثال على متغيرات عامة
const SITE_TITLE = process.env.SITE_TITLE || '{{SITE_TITLE}}';

app.use(express.static('public'));

app.get('/', (req, res) => {
  // ⚠️ استبدل المسار أو المحتوى حسب مشروعك
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
