export interface Link {
  displayName: string;
  link: string;
  icon: string,
}

export enum LinkName {
  FACEBOOK,
  INSTAGRAM,
  MAIL,
  GOOGLE_MAPS,
  PHONE,
  GITHUB,
}

export const links = new Map<LinkName, Link>([
  [
    LinkName.FACEBOOK,
    {
      displayName: 'Facebook',
      link: 'https://www.facebook.com/pages/category/Sunglasses---Eyewear-Store/Mayor-%C3%93ptica-Puente-Tocinos-100531738307720/',
      icon: 'fab fa-facebook-f'
    },
  ],
  [
    LinkName.MAIL,
    {
      displayName: 'mayoroptica@hotmail.com',
      link: 'mailto:mayoroptica@hotmail.com',
      icon: 'fas fa-envelope'
    },
  ],
  [
    LinkName.PHONE,
    {
      displayName: '968 30 23 25',
      link: 'tel:986302325',
      icon: 'fas fa-phone'
    },
  ],
  [
    LinkName.GOOGLE_MAPS,
    {
      displayName: 'C. Mayor, 142, 30006 Murcia',
      link: 'https://maps.app.goo.gl/hsraWC2STbVsQN997',
      icon: 'fa-solid fa-location-dot'
    },
  ],
  [
    LinkName.INSTAGRAM,
    {
      displayName: 'Instagram',
      link: 'https://www.instagram.com/mayoroptica142/',
      icon: 'fa-brands fa-instagram'
    },
  ],
    [
    LinkName.GITHUB,
    {
      displayName: 'Github',
      link: 'https://github.com/AntonioMrtz',
      icon: 'fab fa-github'
    },
  ],
]);
