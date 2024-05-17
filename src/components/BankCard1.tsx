import { formatAmount } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const BankCards1 = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href={"/"} className="bank-card ">
        <div className="bank-card_content1">
          <div>
            <h1 className="text-16 text-white font-semibold">{account.name}</h1>
            <p className="font-ibm-plex-serif font-black text-white">{formatAmount(account.currentBalance)}</p>
          </div>


          <article className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●●/●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon1">
          <Image
            src={"/icons/Paypass.svg"}
            alt="Paypass"
            height={24}
            width={20}
          />

          <Image
            src={"icons/mastercard.svg"}
            alt="mastercard"
            height={32}
            width={45}
            className="ml-5"
          />

          <Image 
          src={"icons/Lines.svg"}
          alt="lines"
          width={316}
          height={190}
          className="absolute top-0 left-0"
          />
        </div>

      </Link>


    </div>
  )
}

export default BankCards1