import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Product from '../models/product';

export default {
  async index(request: Request, response: Response) {
    const productRepository = getRepository(Product);

    const products = await productRepository.find();

    return response.json(products);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const productRepository = getRepository(Product);

    const products = await productRepository.findOneOrFail(id);

    // console.log(id);

    return response.json(products);
  },

  async create(request: Request, response: Response) {
    console.log('Entrou no Create');

    const { name, categoria, medida, preco_final } = request.body;
    console.log(request.body);
    const productRepository = getRepository(Product);

    const product = productRepository.create({
      name,
      categoria,
      medida,
      preco_final,
    });

    await productRepository.save(product);

    return response.status(201).json(product);
  },
};
