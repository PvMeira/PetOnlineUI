export const primaryPaths = {
  home: "/",
  login: "/login",
  sales: "/sales",
  storage: "/storage",
  services: "/services",
  notFound: "/404",
};

export const paths = {
  sales: {
    index: `${primaryPaths.sales}/index`,
    new: `${primaryPaths.sales}/new`,
  },
  storage: {
    new: `${primaryPaths.storage}/new`,
    edit: `${primaryPaths.storage}/:id`,
  },
  services: {
    new: `${primaryPaths.services}/new`,
    edit: `${primaryPaths.services}/:id`,
  },
};
