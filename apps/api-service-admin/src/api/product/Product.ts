import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  createdAt: Date;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
