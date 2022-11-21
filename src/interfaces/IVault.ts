import type IPassword from "./IPassword";

export default interface IVault {
  name: string,
  passwords: IPassword[]
}
