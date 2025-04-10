import Header from "@/components/header";
import { PhoneCall, Mail, MapPin, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function contact() {
  return (
    <div>
      <Header />
      <div className="">
        <div className="flex flex-col justify-center items-center py-5">
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
      </div>
      <div className=" gap-10 container mx-auto  flex flex-row justify-center items-center bg-amber-500 w-300 h-150">
        {/* contactinformation */}
        <div className="flex flex-col justify-center items-center  bg-black w-125 h-125">
          <h1 className="text-white">Contact Information</h1>
          <p className="text-white">Say something to start a live chat!</p>
          <div>
            <div className="flex flex-col pt-20 ">
              <div className="flex flex-row pt-5">
                {" "}
                <PhoneCall color="#FFFFFF" />{" "}
                <p className="text-white px-2 "> +09281975209 </p>
              </div>
              <div className="flex flex-row pt-5">
                <Mail color="#FFFFFF" />{" "}
                <p className="text-white px-2">markvincentaragones@gmail.com</p>
              </div>
              <div className="flex flex-row pt-5">
                <MapPin color="#FFFFFF" />{" "}
                <p className="text-white">
                  2525 Onyx St. San andres bukid manila{" "}
                </p>
              </div>
              {/* Socmed */}
              <div className="flex flex-row">
                <div>
                  <img
                    src="images/facebook.svg"
                    className="bg-white  w-auto h-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* First Name & Last Name */}
          <div>
            <div className="flex flex-row gap-3">
              <div>
                <span>First Name</span>
                <Input />
              </div>
              <div>
                <span>Last Name</span>
                <Input />
              </div>
            </div>
          </div>
          {/* email & phone number */}
          <div className="flex flex-row gap-3">
            <div>
              <span>Email</span> <Input />
            </div>
            <div>
              <span>Phone No.</span> <Input />
            </div>
          </div>
          {/* Select Subject? */}
          <div>
            <h1> Select Subject?</h1>
            {/* <RadioGroup /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
