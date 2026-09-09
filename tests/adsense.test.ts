import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(__dirname, '..');

describe('Google AdSense Readiness & Monetization Architecture Suite', () => {
  describe('Dedicated Disclaimer Pages (Academic & Safety)', () => {
    const bnDisclaimerPath = path.join(ROOT, 'src', 'pages', 'bn', 'disclaimer.astro');
    const enDisclaimerPath = path.join(ROOT, 'src', 'pages', 'en', 'disclaimer.astro');

    it('both Bengali and English disclaimer pages exist', () => {
      expect(fs.existsSync(bnDisclaimerPath)).toBe(true);
      expect(fs.existsSync(enDisclaimerPath)).toBe(true);
    });

    it('Bengali disclaimer contains safety warnings, Casio trademark notice, and schema', () => {
      const content = fs.readFileSync(bnDisclaimerPath, 'utf8');
      expect(content).toContain('WebPage');
      expect(content).toContain('BreadcrumbList');
      expect(content).toContain('IUPAC');
      expect(content).toContain('Casio');
      expect(content).toContain('ল্যাবরেটরি ও রাসায়নিক নিরাপত্তা');
      expect(content).toContain('বিজ্ঞাপন ও তৃতীয় পক্ষের লিঙ্ক');
    });

    it('English disclaimer contains non-professional advice warning and trademark fair use', () => {
      const content = fs.readFileSync(enDisclaimerPath, 'utf8');
      expect(content).toContain('WebPage');
      expect(content).toContain('BreadcrumbList');
      expect(content).toContain('IUPAC');
      expect(content).toContain('Casio');
      expect(content).toContain('Laboratory & Chemical Safety');
      expect(content).toContain('Advertising & Third-Party Sponsorship');
    });
  });

  describe('Privacy Policy Compliance Disclosures', () => {
    const bnPrivacyPath = path.join(ROOT, 'src', 'pages', 'bn', 'privacy.astro');
    const enPrivacyPath = path.join(ROOT, 'src', 'pages', 'en', 'privacy.astro');

    it('Bengali privacy policy covers Google AdSense, cookies, local storage, and opt-outs', () => {
      const content = fs.readFileSync(bnPrivacyPath, 'utf8');
      expect(content).toContain('Google AdSense');
      expect(content).toContain('localStorage');
      expect(content).toContain('__gads');
      expect(content).toContain('aboutads.info');
      expect(content).toContain('privacy@biggan.me');
    });

    it('English privacy policy covers client-side privacy, storage keys, and ad networks', () => {
      const content = fs.readFileSync(enPrivacyPath, 'utf8');
      expect(content).toContain('Google AdSense');
      expect(content).toContain('localStorage');
      expect(content).toContain('__gads');
      expect(content).toContain('aboutads.info');
      expect(content).toContain('privacy@biggan.me');
    });
  });

  describe('Cookie Consent Mechanism', () => {
    const consentPath = path.join(ROOT, 'src', 'components', 'common', 'CookieConsent.astro');

    it('CookieConsent component exists with accessible buttons and local storage persistence', () => {
      expect(fs.existsSync(consentPath)).toBe(true);
      const content = fs.readFileSync(consentPath, 'utf8');
      expect(content).toContain('cookie-consent-banner');
      expect(content).toContain('biggan_consent');
      expect(content).toContain('requestNonPersonalizedAds');
      expect(content).toContain('openCookieSettings');
    });

    it('BaseLayout renders CookieConsent component', () => {
      const baseLayoutPath = path.join(ROOT, 'src', 'layouts', 'BaseLayout.astro');
      const content = fs.readFileSync(baseLayoutPath, 'utf8');
      expect(content).toContain('CookieConsent');
      expect(content).toContain('<CookieConsent />');
    });

    it('HeadMeta integrates Google Consent Mode v2', () => {
      const headMetaPath = path.join(ROOT, 'src', 'components', 'seo', 'HeadMeta.astro');
      const content = fs.readFileSync(headMetaPath, 'utf8');
      expect(content).toContain('gtag');
      expect(content).toContain('consent');
      expect(content).toContain('ad_storage');
      expect(content).toContain('analytics_storage');
    });
  });

  describe('Footer Links & Legal Discovery', () => {
    const footerPath = path.join(ROOT, 'src', 'components', 'common', 'Footer.astro');

    it('Footer includes links to Disclaimer across languages', () => {
      const content = fs.readFileSync(footerPath, 'utf8');
      expect(content).toContain("getLocalizedPath('/disclaimer', lang)");
      expect(content).toContain('openCookieSettings');
    });
  });

  describe('AdSlot Component & Tool-First UX', () => {
    const adSlotPath = path.join(ROOT, 'src', 'components', 'ads', 'AdSlot.astro');
    const toolLayoutPath = path.join(ROOT, 'src', 'layouts', 'ToolLayout.astro');

    it('AdSlot does not display visible placeholder text when not live or previewing', () => {
      const content = fs.readFileSync(adSlotPath, 'utf8');
      expect(content).toContain('adsbygoogle');
      expect(content).toContain('print:hidden');
      expect(content).not.toContain('CLS = 0 Reserved Dimension • banner');
    });

    it('ToolLayout enforces Tool-First UX: calculator slot comes before ads', () => {
      const content = fs.readFileSync(toolLayoutPath, 'utf8');
      const calcIndex = content.indexOf('<slot name="calculator" />');
      const firstAdIndex = content.indexOf('<AdSlot');
      expect(calcIndex).toBeGreaterThan(-1);
      expect(firstAdIndex).toBeGreaterThan(-1);
      expect(calcIndex).toBeLessThan(firstAdIndex);
    });
  });

  describe('Authorized Digital Sellers (ads.txt)', () => {
    const adsTxtPath = path.join(ROOT, 'public', 'ads.txt');

    it('ads.txt exists and contains valid IAB format declaration', () => {
      expect(fs.existsSync(adsTxtPath)).toBe(true);
      const content = fs.readFileSync(adsTxtPath, 'utf8');
      expect(content).toMatch(/google\.com,\s*pub-\w+,\s*DIRECT,\s*f08c47fec0942fa0/);
    });
  });
});
