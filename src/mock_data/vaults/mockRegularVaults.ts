import type IVault from "../../interfaces/IVault";
import { passwords } from "../passwords/mockAllPasswords";
import { friends_passwords } from "../passwords/mockFriendsPasswords";

export let vaults: IVault[] = [
  {
    name: "Personal",
    passwords: passwords
  },
  {
    name: "Friends",
    passwords: friends_passwords
  },
  {
    name: "Personal (1)",
    passwords: passwords
  }
];