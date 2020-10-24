const qs = require('qs');
import humanDate from "~/utils/humanDate";
import readingTime from "~/utils/readingTime";
import markdownToHTML from "~/utils/markdownToHTML";

export const articleFromStrapi = async (context) => {

  let query = qs.stringify(
    { _where:{ slug: context.params.slug }},
    { encode: false }
  );

  const articles = await context.$strapi.find('articulos', query);
  const article = articles[0];
  let gallery = [];

  if (article && article.galeria)
    gallery = article.galeria.map((g, index) => ({name: g.name.replace(g.ext, ''), url: g.url}))
    .sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else if (a > b) return 1;
      return 0;
    })
    .map((g, index) => ({title: index + 1, url: g.url}));

  query = qs.stringify(
    { _where:[{ publico: true }, { '_id_ne': article._id }], _sort: 'createdAt:DESC', _limit: 3 },
    { encode: false }
  );

  const recentArticles = await context.$strapi.find('articulos', query);

  return {
    article: {
      titulo: article.titulo,
      resumen: article.resumen,
      imagen: article.imagen,
      autor: article.autor,
      etiquetas: article.etiquetas,
      slug: article.slug,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt
    },
    recentArticles: recentArticles,
    recentArticlesGridColums: recentArticles.length == 1 ? 'one' : recentArticles.length == 2 ? 'two' : 'three',
    gallery: gallery,
    humanDate: humanDate(article.createdAt),
    readingTime: readingTime(article.contenido),
    content: markdownToHTML(context, article.contenido)
  };
};
