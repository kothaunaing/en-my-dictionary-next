import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="m-2 flex items-center justify-center">
      <div className="">
        <p className=" leading-loose font-semibold text-xl m-4">
          မြန်မာစာနှင့်ဆိုင်တဲ့ digital resource တွေကို စုစည်းထားတဲ့
          နေရာဖြစ်ပါတယ်။
        </p>
        <div className="flex gap-2 flex-col justify-start items-center ">
          <div className="border p-3">
            <Link className="" href={"/en-mm"}>
              <div className="flex justify-center gap-1">
                <Image
                  src={"en-mm.png"}
                  width={100}
                  height={100}
                  alt="English-Myanmar dictionary icon"
                />
                <Image
                  src={"mm-en.png"}
                  width={100}
                  height={100}
                  alt="English-Myanmar dictionary icon"
                />
              </div>

              <p className="font-semibold text-lg mb-1">
                English-Myanmar Dictionary
              </p>
              <p>မြန်မာ-အင်္ဂလိပ်၊ အင်္ဂလိပ်-မြန်မာ အဘိဓာန်</p>
            </Link>
          </div>
          <div className="border p-3">
            <Link className="" href={"/mm-mm"}>
              <div className="flex justify-center gap-1">
                <Image
                  src={"mm-mm.png"}
                  width={100}
                  height={100}
                  alt="English-Myanmar dictionary icon"
                />
              </div>

              <p className="font-semibold text-lg mb-1">Myanmar Dictionary</p>
              <p>မြန်မာ အဘိဓာန်</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
