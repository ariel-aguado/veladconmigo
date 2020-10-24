const qs = require('qs');

export const articlesFromStrapi = async (totalArticles, numPages, articlesPerPage, $strapi) => {

  if (totalArticles == 0) {
    const articlesCount = await $strapi.count('articulos');
    if (articlesCount == 0) throw new Error('No se encontraron artículos');
    totalArticles = articlesCount;
    numPages = Math.ceil(totalArticles / articlesPerPage);
  }

  const query = qs.stringify(
    { _where:{ publico: true }, _sort: 'createdAt:DESC' },
    { encode: false }
  );

  const articles = await $strapi.find('articulos', query);

  return {
    articles: articles,
    tags: [...new Set(articles.map(article => article.etiquetas.split(',').map(tag => tag.trim())).reduce((tags, tag) => tags.concat(tag)))],
    totalArticles: totalArticles,
    numPages: numPages
  }
}
