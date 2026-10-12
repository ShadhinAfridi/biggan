import { ui, defaultLang, languages, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function switchLangUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let pathname = url.pathname;
  if (!pathname.endsWith('/') && !pathname.includes('.')) {
    pathname = `${pathname}/`;
  }
  
  if (pathname.includes('/404')) {
    return `/${targetLang}/`;
  }

  // Replace leading /{currentLang} with /{targetLang}
  if (pathname.startsWith(`/${currentLang}`)) {
    return pathname.replace(`/${currentLang}`, `/${targetLang}`);
  }
  return `/${targetLang}${pathname}`;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return `/${lang}/`;
  }

  // Preserve query parameters or hashes if present
  const [basePath, ...rest] = cleanPath.split(/([?#].*)/);
  const suffix = rest.join('');

  const endsWithSlash = basePath.endsWith('/');
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(basePath);
  const normalizedBase = (!endsWithSlash && !hasExtension) ? `${basePath}/` : basePath;

  return `/${lang}${normalizedBase}${suffix}`;
}

