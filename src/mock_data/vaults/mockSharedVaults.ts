import type IVault from "../../interfaces/IVault";
import { lumi_passwords } from "../passwords/mockSharedPasswords";

export let shared_vaults: IVault[] = [
  {
    name: "Lumi's seed phrases",
    passwords: lumi_passwords
  }
];