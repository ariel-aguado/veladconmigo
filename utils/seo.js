export const createSEOMeta = (data) => [
  {
    hid: 'og:title',
    property: 'og:title',
    content: data.title
  },
  {
    hid: 'description',
    name: 'description',
    content: data.description
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: data.image
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url,
  },
  {
    property: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    property: 'twitter:handle',
    content: 'velad-conmigo'
  },
  {
    property: 'twitter:creator',
    content: 'velad-conmigo'
  },
]
