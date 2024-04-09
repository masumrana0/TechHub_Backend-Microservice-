import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder | null> => {
  const result = await Order.create(payload);
  return result;
};

const getSpecificOrderHistory = async (
  id: string,
): Promise<IOrder[] | null> => {
  const result = await Order.find({
    user: id,
  });
  return result;
};

export const OrderService = {
  createOrder,
  getSpecificOrderHistory,
};
