import { Navbar1 } from "@/components/modules/shared/navbar1"

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="">
    <Navbar1 className="max-w-[1440px] mx-auto"/>
    {children}
    </section>
}