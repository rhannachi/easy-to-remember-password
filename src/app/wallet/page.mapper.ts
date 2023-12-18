import type { WalletType } from "@/types"
import { generatePassword } from "@/helpers"
import HdKey from "hdkey"
import { CardType } from "./page.state"

export const cardsMapper = (hdKey: HdKey, wallet: WalletType[]): CardType[] =>
  wallet.map(cardMapper(hdKey))

export const cardMapper =
  (hdKey: HdKey) =>
  ({
    link,
    path,
    hasNumeric,
    hasSymbol,
    hasUppercase,
    hasLowercase,
    username,
    length,
  }: WalletType): CardType => ({
    link,
    hasLowercase,
    hasNumeric,
    hasSymbol,
    hasUppercase,
    length,
    username,
    uuid: path,
    password: generatePassword(hdKey, path),
  })
