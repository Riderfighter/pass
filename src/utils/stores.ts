import {
  type Writable,
  writable
} from "svelte/store";
import type IVault from "../interfaces/IVault";
import type IPassword from "../interfaces/IPassword";

export const current_vault: Writable<IVault> = writable();
export const current_page: Writable<number> = writable(1);
export const password_list: Writable<IPassword[]> = writable([]);
export const current_password: Writable<IPassword> = writable();
// export const current_vault = writable();