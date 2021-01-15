import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Image from '../models/images';
import Product from '../models/product';
import productView from '../views/product_view';
import * as Yup from 'yup';

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

    const data = {
      name,
      categoria,
      medida,
      preco_final,
      image,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      categoria: Yup.string().required(),
      medida: Yup.string().required(),
      preco_final: Yup.string().required(),
      image: Yup.object().shape({ path: Yup.string().required() }),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const product = productRepository.create(data);

    console.log('Vai Salvar');
    await productRepository.save(product);
    console.log('Salvou');

    return response.status(201).json(product);
  },
};
