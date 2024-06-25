import Image from "next/image";
import moment from "moment";

export default function Home() {
  let date = new Date();
  let formattedDate = moment(date).format("LLLL");
  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-950">
        <div
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-[64px]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563eb] ☐to-[#f59e0b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
            <div className="mx-4 max-w-2xl text-center">
              <h1 className="txt-4xl font-bold tracking-tight sm:text-6xl">
                Toronto
              </h1>
            </div>
            <div>
              <img
                src={`https://flagcdn.com/48x36/ca.png`}
                alt="country flag"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="text-center py-4">
            <h3>Weather Forcast for {formattedDate}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
