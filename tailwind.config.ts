// ملف إعداد tailwind للقالب العام
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './*.html',
    './*.js',
    './*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
