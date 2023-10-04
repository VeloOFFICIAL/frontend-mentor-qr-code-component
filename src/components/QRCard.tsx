import Image from "next/image";

export default function QRCard() {
  return (
    <div className="relative flex w-[330px] flex-col items-center justify-center gap-6 rounded-2xl bg-white p-4">
      <Image
        className="rounded-xl"
        src="/images/image-qr-code.png"
        alt="qrcode"
        width={400}
        height={400}
      />
      <div className="flex flex-col gap-2 pb-6 text-center">
        <h1 className="leading-0 text-2xl font-bold text-textPrimary">
          Improve your front-end skills by building projects
        </h1>
        <p className="inline-block text-base text-textSecondary">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
