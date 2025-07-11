# قالب موقع عام (Template)

هذا القالب مبني على نسخة موقعك الحالية بعد تعميم جميع النصوص، الروابط، الصور، والشعارات إلى متغيرات قابلة للتخصيص.

## طريقة الاستخدام

1. استبدل جميع المتغيرات من الشكل `{{VARIABLE_NAME}}` بالقيم التي تناسب مشروعك (يدويًا أو عبر سكريبت بناء).
2. راجع التعليقات داخل الملفات لمعرفة أماكن التخصيص المهمة.
3. يمكنك تخصيص أي جزء من القالب عبر تعديل المتغيرات أو استبدال الصور والشعارات.
4. المتغيرات تغطي كل العناصر الثابتة (نصوص، روابط، صور، شعارات، عناوين، بيانات تواصل، ...). راجع الأقسام أدناه لأمثلة المتغيرات.

### أمثلة للمتغيرات في القالب:

- **الصفحة الرئيسية وملفات الأدوات:**
  - `{{SITE_NAME}}`, `{{SITE_TITLE}}`, `{{SITE_DESCRIPTION}}`, `{{LOGO_PATH}}`, `{{FAVICON_PATH}}`, `{{NAV_HOME}}`, `{{NAV_ABOUT}}`, ...
  - `{{TOOLS_PAGE_TITLE}}`, `{{TOOLS_PAGE_DESCRIPTION}}`, `{{TOOL_TITLE}}`, `{{TOOL_DESCRIPTION}}`, `{{TOOL_BUTTON_TEXT}}`, ...

- **ملفات المقالات (article-html.html, article-simple.html):**
  - `{{ARTICLE_TITLE}}`, `{{ARTICLE_DESCRIPTION}}`, `{{ARTICLE_AUTHOR}}`, `{{ARTICLE_DATE}}`, `{{ARTICLE_CATEGORY}}`, `{{ARTICLE_HERO_IMAGE}}`, ...
  - جميع العناوين والفقرات وقوائم النصوص تم تحويلها إلى متغيرات واضحة.

- **test-sheets.js:**
  - `{{SHEET_URL}}`: رابط Google Sheets أو مصدر البيانات الخارجي.
  - `{{DEFAULT_CATEGORY}}`: التصنيف الافتراضي للمقالات.

### مثال عملي لتخصيص ملف test-sheets.js:
```js
// ضع هنا رابط Google Sheets الخاص بك
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/xxxxxx/gviz/tq?tqx=out:json';
```

### ملاحظات:
- جميع المتغيرات بين {{}} يجب استبدالها قبل النشر.
- يمكنك إضافة متغيرات جديدة حسب حاجتك أو حذف غير المستخدم.

## المجلدات والملفات الأساسية
- جميع الملفات الضرورية لتشغيل الموقع موجودة هنا (js, ts, html, إعدادات).
- لا يوجد مجلدات src أو components أو pages بشكل منفصل، بل كل شيء في ملفات مستقلة.

## ملاحظات مهمة
- إذا وجدت ملفًا يحتوي على عبارة "غير قابل للتعميم" أو لا يناسب جميع المشاريع، ستجد ملاحظة واضحة عنه هنا.
- ملفات الإنتاج مثل dist وnode_modules غير مشمولة في القالب.
- يجب استبدال جميع المتغيرات قبل النشر النهائي.

## الدعم
لأي استفسار أو تخصيص إضافي، راجع التعليقات داخل الملفات أو تواصل مع مطور القالب.
