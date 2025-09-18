import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// hàm cn gộp className lại cho gọn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
