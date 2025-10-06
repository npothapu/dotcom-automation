import { footerLinks } from "../../index";

export const allSocialLinks: footerLinks[] = [
  {
    linkUrl: "https://twitter.com/USMarineCorps",
    ariaLabel: "twitter",
    urlPattern: /x\.com\/USMarineCorps/i,
  },
  {
    linkUrl: "https://www.youtube.com/user/ourmarines",
    ariaLabel: "youtube",
    urlPattern: /youtube\.com\/user\/ourmarines/i,
  },
  {
    linkUrl: "https://www.snapchat.com/add/USMCRecruiting",
    ariaLabel: "snapchat",
    urlPattern: /snapchat\.com\/@usmcrecruiting/i,
  },
  {
    linkUrl: "https://www.facebook.com/marinecorps",
    ariaLabel: "facebook",
    urlPattern: /facebook\.com.*marinecorps/i,
  },
  {
    linkUrl: "https://www.instagram.com/usmarinecorps/",
    ariaLabel: "instagram",
    urlPattern: /instagram\.com\/usmarinecorps/i,
  },
];

export const internalFooterLinks: footerLinks[] = [
  {
    linkUrl: "https://rmi.marines.com/request-information",
    ariaLabel: "Request Information",
    urlPattern: /rmi\.marines\.com\/request-information/,
  },
  {
    linkUrl: "https://www.marines.com/community-guidelines.html",
    ariaLabel: "Community Guidelines",
    urlPattern: /marines\.com\/community-guidelines/,
  },
  {
    linkUrl: "https://www.marines.com/locations.html",
    ariaLabel: "Locations",
    urlPattern: /marines\.com\/locations/,
  },
  {
    linkUrl: "https://www.marines.mil/",
    ariaLabel: "Marines.mil",
    urlPattern: /www\.marines\.mil/,
  },
  {
    linkUrl: "https://www.marines.com/privacy-policy.html",
    ariaLabel: "Privacy Policy",
    urlPattern: /marines\.com\/privacy-policy/,
  },
  {
    linkUrl: "https://www.marines.com/sitemap.html",
    ariaLabel: "Sitemap",
    urlPattern: /marines\.com\/sitemap/,
  },
];
