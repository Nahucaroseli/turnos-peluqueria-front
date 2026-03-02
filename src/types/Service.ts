export type Service = {
    "id":number,
    "name":string,
    "price":number
}

export type ServiceFormValues = Omit<Service,"id">;
