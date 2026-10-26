import Image from "next/image";
export function Banner() {
  return (
    <div className="relative">
      <Image
        src="/images/bannerUni.png"
        alt="Novidades Objetivo"
        width={1410}
        height={1056}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
