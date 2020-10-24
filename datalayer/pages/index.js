const qs = require('qs');

export const lastSixArticlesFromStrapi = async ($strapi) => {
  const query = qs.stringify(
    { _where:{publico: true}, _sort: 'createdAt:DESC', _limit: 6 },
    { encode: false }
  );
  const articles = await $strapi.find('articulos', query);
  return {
    articles: articles
  }
}
