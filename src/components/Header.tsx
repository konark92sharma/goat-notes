import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header><Link href="/">
    <Image src={"/goatius.png"} alt={""}></Image></Link></header>
  )
}

export default Header