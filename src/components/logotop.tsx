import Image from "next/image";
export function LogosTop() {
  return (
    <div className="flex items-center justify-center gap-16 sm:gap-32 lg:gap-46">
      <Image
        src="/images/Logo-Unipaper.png"
        alt="Unipaper"
        width={4096}
        height={892}
        priority
        className="h-[33px] w-auto sm:h-10"
      />
    </div>
  );
}
