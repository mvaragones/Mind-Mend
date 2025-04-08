import Image from "next/image";
import Header from "@/components/header";
export default function Home() {
  return (
    <div className=" bg-linear-to-t from-white from-14% to-[#78c6dd] to-100%">
      <Header />
      <div className="container mx-auto ">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <h1 className="text-3xl">Welcome to</h1>
            <span className="text-6xl font-bold">Mind Mend Ai</span>
          </div>
          <div>
            <img src="images/illus.png" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <img src="images/h1.png" />
          </div>
          <div>
            <div className="border-1 shadow-xl border-white rounded-md items-center p-5 ">
              <h1 className="text-gray-600"> Register Now</h1>
              <p className="pt-5 pb-8 text-xs text-gray-400 ">
                Don't wait until problems escalate. Register and seek help now
                to take the <br /> first step towards a healthier, happier you.
                Prioritizing your mental health is a <br />
                sign of strength and an essential part of overall well-being.
                Reach out today <br />
                and discover the support you need to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
