// نقطة وصول API للمحتوى - قالب عام
// ⚠️ يجب تخصيص المصادر والمعالجات حسب الحاجة
module.exports = {
  getContent: async function(type) {
    // ⚠️ استبدل هذا الكود بمصدر البيانات المناسب لمشروعك
    return [
      { title: '{{CONTENT_TITLE}}', body: '{{CONTENT_BODY}}' }
    ];
  }
};
