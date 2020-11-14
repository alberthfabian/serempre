const images = {
  serempre: require('../../assets/Img/Serempre.png').default,
  combined: require('../../assets/Img/Combined.png').default,
  detail: require('../../assets/Img/Detail.png').default,
  headphones: require('../../assets/Img/Headphones.png').default,
  path: require('../../assets/Img/Path.png').default,
  shape: require('../../assets/Img/Shape.png').default,
  shot: require('../../assets/Img/Shot.png').default,
  default: require('../../assets/Img/Serempre.png').default, 
}

export const getImg = (image) => {
  let img = images[image];
  if (img === undefined) {
      img = images.default
  }
  return img;
}

export default images;