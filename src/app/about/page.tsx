import Header from "@/components/header";

export default function About() {
  return (
    <div className="bg-gradient-to-t from-white from-[14%] to-[#78c6dd] to-[100%]">
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-20 gap-12">
          <div className="flex flex-col text-center lg:text-left">
            <span className="text-2xl">ABOUT US</span>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
              Mind Mend Ai
            </h1>
            <p className="py-5 text sm:text-lg">
              Welcome to Mind Mend, where we prioritize mental well-being <br />
              in the digital age. We are a dedicated team of technopreneurs
              <br /> passionate about making mental health support accessible,
              <br />
              affordable, and personalized for everyone. Our platform harnesses{" "}
              <br />
              the power of Artificial Intelligence to provide innovative tools
              and <br />
              resources tailored to your unique needs.
            </p>
            <div>
              <button className="shadow-xl rounded-md bg-[#07A5D5] text-white py-2 px-5">
                Sign Up for Free
              </button>
            </div>
          </div>
          <div>
            <img
              src="images/about1.webp"
              alt="About Mind Mend"
              className="w-150 max-w-md mx-auto"
            />
          </div>
        </div>

        <section className="pt-20">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Built for go-to-market <br />
                teams, powered by AI
              </h1>
            </div>
            <div className="p-20 md:p-10 gap-4 flex flex-col md:text-left text-base sm:text-lg  ">
              <p>
                We believe in the power of video to foster human connections
                <br /> and empower go-to-market professionals to deliver trusted
                and <br /> productive buyer experiences.
              </p>
              <p>
                We also believe in the power of AI to help sales and marketing
                teams unlock their creativity and connect with more prospects
                than ever before.
              </p>
              <p>
                We’re committed to helping our customers grow their revenue
                faster by unleashing the potential of video and AI.
              </p>
            </div>
          </div>
          <div className="w-300 h-100 rounded-md bg-linear-to-b from-white-500 to-indigo-100">
            <div>
              <h1>Our Team</h1>
              <p>
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="m-10 flex md-flex-row justify-center items-center gap-8">
              <div>
                {/* card */}
                <div className="bg-white w-50 h-70 flex flex-col justify-center shadow-2xl rounded-md ">
                  {/* card header */}
                  <div className="flex justify-center px-1 py-1">
                    <img
                      src="images/allenganda.jpg"
                      className="w-auto h-30 rounded-md"
                    />
                  </div>
                  {/* card content */}
                  <div className="text-center">
                    <h1 className="font-bold sm:text-2xl"> Allen Spayne</h1>
                    <span>Senior Developer</span>
                    <p> asdasdsadsag qweqweqw asdgfdfa qwrqweqw asdas</p>
                  </div>
                </div>
              </div>
              {/* background */}
              <div className="bg-white w-50 h-70 flex flex-col justify-center shadow-2xl rounded-md">
                {/* header */}
                <div className="flex justify-center px-1 py-1">
                  <img
                    src="images/mark.jpg"
                    className="w-auto h-30 rounded-md"
                  />
                </div>
                {/* content */}
                <div className="text-center">
                  <h1 className="font-bold sm:text-2xl">Mark Aragones</h1>
                  <span>Senior Front-end developer</span>
                  <p>da da da da da da da da ga ga ga ga ga ga</p>
                </div>
              </div>
              {/* card */}
              <div className="bg-white w-50 h-70 flex flex-col justify-center shadow-2xl rounded-md">
                {/* header */}
                <div className="flex justify-center px-1 py-1 ">
                  <img
                    src="images/lawrenz.jpg"
                    className="w-auto h-30 rounded-md"
                  />
                </div>
                {/* content */}
                <div>
                  <h1 className="font-bold text-2xl">Lawrenz CashG</h1>
                  <span>Full Stack</span>
                  <p>asd sad asd asd asd asd asd asd asd asd asd asd</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0.5 w-full bg-gray-300 mt-10 mb-16"></div>

          <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left gap-10 px-4 sm:px-5">
            <div>
              <h1 className="text-3xl font-bold">5</h1>
              <p>
                Since 2024, Mind Mend Ai has grown from a team of <br /> 2 to
                over 5.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">12 million+</h1>
              <p>
                Over 12 million people use Mind Mend Ai to <br /> create and
                share videos.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">160,000</h1>
              <p>160,000 companies choose Vidyard.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
