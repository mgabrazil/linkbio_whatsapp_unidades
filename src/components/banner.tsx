import Image from "next/image";
export function Banner() {
  return (
    <div className="relative">
      <Image
        src="/images/UnipaperB.png"
        alt="Novidades Objetivo"
        width={1410}
        height={1116}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
