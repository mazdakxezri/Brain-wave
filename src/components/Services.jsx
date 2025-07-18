import Heading from "./Heading";
import Section from "./Section";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlock the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[30rem] sm:h-[35rem] md:h-[39rem] mb-5 p-4 sm:p-6 md:p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest AI"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>

            <div className="relative z-1 max-w-[15rem] sm:max-w-[17rem] ml-auto">
              <h4 className="h4 mb-2 sm:mb-4 text-xl sm:text-2xl">Smartest AI</h4>
              <p className="body-2 mb-[2rem] sm:mb-[3rem] text-n-3 text-sm sm:text-base">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2 text-sm sm:text-base">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-3 sm:py-4 border-t border-n-6"
                  >
                    <img width={20} height={20} src={check} className="mt-1" />
                    <p className="ml-3 sm:ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating />
          </div>

          <div className="relative z-1 grid gap-4 sm:gap-5 lg:grid-cols-2">
            <div className="relative min-h-[30rem] sm:min-h-[35rem] md:min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  width={630}
                  height={750}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-2 sm:mb-4 text-xl sm:text-2xl">Photo editing</h4>
                <p className="body-2 mb-[2rem] sm:mb-[3rem] text-n-3 text-sm sm:text-base">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="p-3 sm:p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-8 sm:py-12 px-3 sm:px-4 xl:px-8">
                <h4 className="h4 mb-2 sm:mb-4 text-xl sm:text-2xl">Video generation</h4>
                <p className="body-2 mb-[1.5rem] sm:mb-[2rem] text-n-3 text-sm sm:text-base">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-8 h-8 sm:w-10 sm:h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} alt={item} width={20} height={20} className="sm:w-6 sm:h-6" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[15rem] sm:h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  alt="Scary robot"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
