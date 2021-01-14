import Image from '../models/images';

export default {
  render(image: Image) {
    return {
      id: image.id,
      path: `http://localhost:3333/uploads/${image.path}`,
    };
  },
  renderMany(products: Image[]) {
    return products.map((image) => this.render(image));
  },
};
