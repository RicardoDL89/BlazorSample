/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProductService } from "../product.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";
import { OrderItemFindManyArgs } from "../../orderItem/base/OrderItemFindManyArgs";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        price: true,
        stock: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        price: true,
        stock: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        price: true,
        stock: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          price: true,
          stock: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          price: true,
          stock: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/orderItems")
  @ApiNestedQuery(OrderItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async findOrderItems(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<OrderItem[]> {
    const query = plainToClass(OrderItemFindManyArgs, request.query);
    const results = await this.service.findOrderItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orderItems")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async connectOrderItems(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItems: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderItems")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async updateOrderItems(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItems: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderItems")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async disconnectOrderItems(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItems: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }
}
