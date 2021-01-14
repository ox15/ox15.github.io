function googleTranslateElementInit() {
    'use strict';
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,de,es,fa,it,ja,nl,no,ru,uk,ur',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
