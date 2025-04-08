import Header from "@/components/header";

export default function About() {
  return (
    <div className="bg-linear-to-t from-white from-14% to-[#78c6dd] to-100%">
      <div className="container mx-auto ">
        <Header />
        <div className=" flex flex-row justify-between  items-center pt-20 gap-12 ">
          <div className="flex flex-col">
            <span className="text-2xl">ABOUT US</span>
            <h1 className="font-bold text-6xl">Mind Mend Ai</h1>
            <p className="py-5">
              Welcome to Mind Mend, where we prioritize mental well-being in the{" "}
              <br />
              digital age. We are a dedicated team of technopreneurs passionate{" "}
              <br />
              about making mental health support accessible, affordable, and
              <br />
              personalized for everyone. Our platform harnesses the power of{" "}
              <br />
              Artificial Intelligence to provide innovative tools and resources{" "}
              <br />
              tailored to your unique needs.
            </p>
            <div>
              <button className="shadow-xl rounded-md bg-[#07A5D5] text-white py-2     px-5">
                Sign Up for Free
              </button>
            </div>
          </div>
          <div>
            <img src="images/about1.webp" alt="" className="w-auto h-120" />
          </div>
        </div>
        <section>
          <div className="container mx-auto flex flex-row justify-between items-center p-10">
            <div>
              <h1 className="text-5xl font-bold ">
                Built for go-to-market <br />
                teams, powered by AI
              </h1>
            </div>
            <div className="p-10 gap-5 flex flex-col">
              <p>
                We believe in the power of video to foster human connections and
                empower <br />
                go-to-market professionals to deliver trusted and productive
                buyer <br />
                experiences.
              </p>
              <p>
                We also believe in the power of AI to help sales and marketing
                teams unlock <br />
                their creativity and connect with more prospects than ever
                before.
              </p>
              <p>
                We’re committed to helping our customers grow their revenue
                faster by <br />
                unleashing the potential of video and AI.
              </p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-gray-300 pb-1 "></div>
          <div className="flex flex-row justify-between py-20 px-5">
            <div>
              <h1 className="text-3xl">300+</h1>
              <p>
                Since 2010, Vidyard has grown from a team of <br /> 2 to over
                300.
              </p>
            </div>
            <div>
              <h1>12 million+</h1>
              <p>
                Over 12 million people use Vidyard to <br /> create and share
                videos.
              </p>
            </div>
            <div>
              <h1>160,000</h1>
              <p>160,000 companies choose Vidyard.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
