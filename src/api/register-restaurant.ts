import { api } from "@/lib/axios";

export interface registerRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant(body:  registerRestaurantBody) {
  await api.post("/restaurants", body);
}
