import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Image from '../models/images';
import Product from '../models/product';
import productView from '../views/product_view';

export default {
  async index(request: Request, response: Response) {
    const productRepository = getRepository(Product);

    const products = await productRepository.find();

    return response.json(productView.renderMany(products));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const productRepository = getRepository(Product);

    const product = await productRepository.findOneOrFail(id);

    return response.json(productView.render(product));
  },

  async create(request: Request, response: Response) {
    console.log('Create Request');
    console.log(request.file.filename);

    const { name, categoria, medida, preco_final } = request.body;

    const requestImage = request.file.filename;
    const image = { path: requestImage };

    // console.log(request.body);
    const productRepository = getRepository(Product);

    const product = productRepository.create({
      name,
      categoria,
      medida,
      preco_final,
      adwadaimage,
    });

    console.log('Vai Salvar');
    await productRepository.save(product);
    console.log('Salvou');

    return response.status(201).json(product);
  },
};
