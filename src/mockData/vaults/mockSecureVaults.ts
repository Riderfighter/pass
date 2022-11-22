import type IVault from "../../interfaces/IVault";
import { lumi_passwords } from "../passwords/mockSharedPasswords";

export let secure_vaults: IVault[] = [
  {
    name: "Homework",
    passwords: lumi_passwords
  }
];