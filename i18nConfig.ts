// i18nConfig.ts
import * as i18n from "i18n";
import 'i18n';

i18n.configure({
  locales: ["en", "fr", "es", 'pt-br'],
  defaultLocale: "pt-br",
  directory: __dirname + "/locales",
  objectNotation: true, 
});

export default i18n;
