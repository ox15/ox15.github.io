function googleTranslateElementInit() {
    'use strict';
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'es,it,ru,uk,no,ja,nl,zh,fa,ur',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
