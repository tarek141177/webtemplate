// {{SHEET_URL}}: ضع هنا رابط Google Sheets الخاص بك أو أي مصدر بيانات خارجي
const SHEET_URL = '{{SHEET_URL}}';

fetch(SHEET_URL)
  .then(res => res.text())
  .then(text => {
    // معالجة البيانات القادمة من Google Sheets
    const jsonData = JSON.parse(text.substring(47).slice(0, -2));
    const rows = jsonData.table.rows.map(row => ({
      title: row.c[0]?.v,
      author: row.c[1]?.v,
      slug: row.c[2]?.v,
      excerpt: row.c[3]?.v,
      body: row.c[4]?.v,
      image: row.c[5]?.v,
      published: row.c[6]?.v,
      category: row.c[7]?.v || '{{DEFAULT_CATEGORY}}'
    }));
    // مثال: طباعة جميع المقالات
    console.log('جميع المقالات:');
    rows.forEach((article, index) => {
      console.log(`${index + 1}. ${article.title} (${article.slug})`);
    });
    // يمكنك تخصيص البحث أو العرض حسب الحاجة
    // ...
  })
  .catch(err => {
    console.error('حدث خطأ في جلب البيانات:', err);
  });

// ملاحظة:
// - استبدل {{SHEET_URL}} برابط Google Sheets الخاص بك.
// - يمكنك تخصيص طريقة التعامل مع البيانات حسب احتياجك.
