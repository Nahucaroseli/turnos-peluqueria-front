export type Service = {
    "id":number,
    "name":string,
    "price":number
}

export type CreateService = Omit<Service,"id">;