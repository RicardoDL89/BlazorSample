import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
};
