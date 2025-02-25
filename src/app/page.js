import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className=" ">
      <div className="border-b p-2">
        <h1 className="font-bold text-2xl">MyLexicon</h1>
      </div>
      <div className="m-2 ">
        <p className=" leading-loose font-semibold text-xl m-4">
          မြန်မာစာနှင့်ဆိုင်တဲ့ digital resource တွေကို စုစည်းထားတဲ့
          နေရာဖြစ်ပါတယ်။
        </p>
        <div className="flex gap-2 flex-col justify-start items-center ">
          <div className="border p-3 hover:opacity-75">
            <Link className="" href={"/en-mm"}>
              <div className="flex justify-center gap-1">
                <Image
                  src={"/en-mm.png"}
                  width={100}
                  height={100}
                  alt="English-Myanmar dictionary icon"
                />
                <Image
                  src={"/mm-en.png"}
                  width={100}
                  height={100}
                  alt="
                  Myanmar-English dictionary icon"
                />
              </div>

              <p className="font-semibold text-lg mb-1">
                English-Myanmar Dictionary
              </p>
              <p>မြန်မာ-အင်္ဂလိပ်၊ အင်္ဂလိပ်-မြန်မာ အဘိဓာန်</p>
            </Link>
          </div>
          <div className="border p-3 hover:opacity-75">
            <Link className="" href={"/mm-mm"}>
              <div className="flex justify-center gap-1">
                <Image
                  src={"/mm-mm.png"}
                  width={100}
                  height={100}
                  alt="Myanmar dictionary icon"
                />
              </div>

              <p className="font-semibold text-lg mb-1">Myanmar Dictionary</p>
              <p>မြန်မာ အဘိဓာန်</p>
            </Link>
          </div>
          <div className="border p-3 hover:opacity-75">
            <Link className="" href={"/mm-spelling"}>
              <div className="flex justify-center gap-1">
                <Image
                  src={"/mm-spelling.jpeg"}
                  width={100}
                  height={100}
                  alt="Myanmar spelling icon"
                />
              </div>

              <p className="font-semibold text-lg mb-1">Myanmar Spelling</p>
              <p>မြန်မာ စာလုံးပေါင်းသတ်ပုံကျမ်း</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
