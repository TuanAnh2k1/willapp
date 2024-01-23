// src/i18n.ts

import i18n from 'i18next';

i18n.init({
    fallbackLng: 'en', // Ngôn ngữ mặc định
    resources: {
        en: {
            translation: {
                // Định nghĩa các chuỗi ngôn ngữ ở đây
                welcome: 'Welcome',
            },
        },
        // Thêm các ngôn ngữ khác nếu cần
    },
});

export default i18n;
