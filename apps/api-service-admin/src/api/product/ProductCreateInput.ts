import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price?: number | null;
  stock?: number | null;
};
