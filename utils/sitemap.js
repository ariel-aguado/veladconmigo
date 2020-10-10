// import kebabCase from 'lodash/kebabCase';
import axios from 'axios';

export const fetchSitemapRoutes = async () => {
  const routes = [];
  // const client = new StoryblokClient({
  //   accessToken: process.env.STORYBLOK_KEY
  // })

  // const {
  //   data: articlesData
  // } = await client.get('cdn/links', {
  //   starts_with: 'articles/',
  // });

  const {data: articlesData} = await axios.get('https://strapi-velad-conmigo.herokuapp.com/articulos');

  // const {
  //   data: tagsData
  // } = await client.get('cdn/tags')

  // const tags =

  Object.values(articlesData.map((article) => article.slug)).forEach((slug) =>
    routes.push(`articulos/${slug}`)
  );

  // tagsData.tags.forEach((tag) => routes.push(`/topics/${kebabCase(tag.name)}`))

  return routes;
}
