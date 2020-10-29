const qs = require('qs');

export const articlesByTagFromStrapi = async (context) => {

  let query = qs.stringify(
    { _where:{ 'etiquetas_contains': context.$route.params.slug }},
    { encode: false }
  );

  const articles = await context.$strapi.find('articulos', query);

  return {
    articles: articles,
    articlesByTagGridColums: articles.length == 1 ? 'one' : articles.length == 2 ? 'two' : 'three'
  };
};
