export interface Link {
  displayName: string;
  link: string;
}

export enum LinkName {
  FACEBOOK,
  INSTAGRAM,
  MAIL,
  GOOGLE_MAPS,
  PHONE,
}

export const links = new Map<LinkName, Link>([
  [
    LinkName.FACEBOOK,
    {
      displayName: 'Facebook',
      link: 'https://www.facebook.com/pages/category/Sunglasses---Eyewear-Store/Mayor-%C3%93ptica-Puente-Tocinos-100531738307720/',
    },
  ],
  [
    LinkName.MAIL,
    {
      displayName: 'mayoroptica@hotmail.com',
      link: 'mailto:mayoroptica@hotmail.com',
    },
  ],
  [
    LinkName.PHONE,
    {
      displayName: '968 30 23 25',
      link: 'tel:986302325',
    },
  ],
  [
    LinkName.GOOGLE_MAPS,
    {
      displayName: 'Google Maps',
      link: 'https://maps.app.goo.gl/hsraWC2STbVsQN997',
    },
  ],
  [
    LinkName.INSTAGRAM,
    {
      displayName: 'Instagram',
      link: 'https://www.instagram.com/mayoroptica142/',
    },
  ],
]);
