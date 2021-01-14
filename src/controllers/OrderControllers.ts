import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Order from '../models/order';

export default {
  async index(request: Request, response: Response) {
    const orderRepository = getRepository(Order);

    const orders = await orderRepository.find();

    return response.json(orders);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orderRepository = getRepository(Order);

    const orders = await orderRepository.findOneOrFail(id);

    // console.log(id);

    return response.json(orders);
  },

  async create(request: Request, response: Response) {
    console.log('Entrou no Create');

    const { name, address, contact, delivery, products } = request.body;
    console.log(request.body);
    const orderRepository = getRepository(Order);

    const order = orderRepository.create({
      name,
      address,
      contact,
      delivery,
      products,
    });

    await orderRepository.save(order);

    return response.status(201).json(order);
  },
};
