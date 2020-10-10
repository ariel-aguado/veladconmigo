export default function (fields, pageType, route) {
  const url = `https://velad-conmigo.netlify.app${route.path}`
  const metaData = {
    title: fields.title,
    link: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
    meta: [
      {
        property: 'og:title',
        hid: 'og:title',
        content: fields.title,
      },
      {
        property: 'twitter:title',
        hid: 'twitter:title',
        content: fields.title,
      },
      {
        name: 'description',
        hid: 'og:description',
        content: fields.description,
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content: fields.description,
      },
      {
        property: 'twitter:description',
        hid: 'og:description',
        content: fields.description,
      },
      {
        property: 'og:image',
        hid: 'og:image',
        content: fields.image,
      },
      {
        property: 'twitter:image',
        hid: 'twitter:image',
        content: fields.image,
      },
      {
        property: 'og:url',
        hid: 'og:url',
        content: url,
      },
      {
        property: 'twitter:url',
        hid: 'twitter:url',
        content: url,
      },
    ],
  }

  if (
    pageType === 'articles' ||
    pageType === 'article' ||
    pageType === 'tag' ||
    pageType === 'home'
  ) {
    metaData.meta.push({
      property: 'og:type',
      hid: 'og:type',
      content: 'website',
    })
  }

  if (pageType === 'home') {
    metaData.script = [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          url: 'https://velad-conmigo.netlify.app',
        },
        type: 'application/ld+json',
      },
    ]
  }

  if (pageType === 'article') {
    metaData.meta.push({
      property: 'og:type',
      hid: 'og:type',
      content: 'article',
    })

    metaData.meta.push({
      property: 'og:publish_date',
      content: `${fields.updatedAt}`,
      // content: `${fields.updatedAt}T00:00:00`,
      name: 'publish_date',
    })

    metaData.script = [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          headline: fields.title,
          image: fields.image,
          url: `https://velad-conmigo.netlify.app${fields.slug}`,
          datePublished: `${fields.createdAt}`,
          // datePublished: `${fields.createdAt}T00:00:00`,
          dateCreated: `${fields.createdAt}`,
          // dateCreated: `${fields.createdAt}T00:00:00`,
          dateModified: fields.updatedAt,
          description: fields.description,
          publisher: {
            '@type': 'Organization',
            name: 'VeladConmigo',
            logo: {
              '@type': 'ImageObject',
              url: fields.image,
            },
          },
          author: {
            '@type': 'Person',
            name: `${fields.author}`,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://google.com/article`,
          },
        },
        type: 'application/ld+json',
      },
    ]
  }

  console.log('metadata :>> ', metaData);

  return metaData
}
