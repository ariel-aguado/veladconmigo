export function loadImages() {
  const images = [...document.querySelectorAll('img.lazy:not(.lazy-done)')]

  const setImage = (image) => {
    if (!image.classList.contains('lazy-done')) {
      image.srcset = image.dataset.srcset
      image.sizes = image.dataset.sizes
      image.classList.add('lazy-done')
    }
  }

  images.forEach((image) => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((changes) => {
        changes.forEach((change) => {
          if (change.isIntersecting) {
            setImage(image)
            observer.unobserve(image)
          }
        })
      })

      observer.observe(image)
    } else {
      setImage(image)
    }
  })
}

export function getSrcSet(image, widths) {
  let srcset = '';

  const humanSizes = {
    '245': 'thumbnail',
    '500': 'small',
    '750': 'medium'
  }

  widths.forEach((width) => {
    const url = width == 1000 || width == 200 ? image.url : image.formats[humanSizes[width]].url;
    srcset += `${url} ${width}w, `;
  })

  return srcset.slice(0, -2);
}
