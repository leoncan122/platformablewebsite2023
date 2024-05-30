export default function Benefits({data}) {
  return (
    <section className="mx-auto container py-14">
      <h3 className="text-3xl text-center px-2 md:px-16 mb-10 font-bold">
       {data?.benefitshHeading}
      </h3>
       <div className="grid  rounded-lg gap-5 grid-cols-5 grid-rows-4">
          {data?.bentoBox?.map((box, index) => (
            <div
              key={index}
              className={`rounded-lg p-10 h-[500px] gap-10 flex items-start ${
                index % 2 != 0 ? "flex-col-reverse justify-end " : "flex-col"
              }  ${bentoBoxes.find(i => i.id === box.id)?.colSpan} row-span-1 ${bentoBoxes.find(i => i.id === box.id)?.bgColor}`}
            >
              <div>
                {box.label && (
                  <div className="text-lg text-[#3425C9] mb-2 font-medium">{box.label}</div>
                )}
                {box.title && (
                  <h1 className="text-2xl mb-4 font-semibold">{box.title}</h1>
                )}
                {box.text && <p className="text-base">{box.text}</p>}
              </div>
              {/* {box.linkText && (
            <span className="flex cursor-pointer font-lg flex-row mt-32 items-center justify-start">
              {box.linkText} {box.link && <a href={box.link}>dsa</a>}
            </span>
          )} */}
              <img src={box?.image?.data?.attributes?.url} alt={`benefit ${box.title}`} className="  bg-[#E6DCFF] h-56 rounded-xl w-full" />
            </div>
          ))}
        </div>
    </section>
  );
}

const bentoBoxes = [
  {
    id: 3,
    colSpan: 'col-span-3',
    bgColor: "bg-[#F7F6FF]",
    title: "Access comprehensive reports",
    subtitle:
      "Stay informed with detailed analysis on the latest trends, regulatory updates, and market developments in open banking.",
    label: "In-depth Market Insights",
    linkText: "Read the research",
    link: "#",
  },
  {
    id: 4,
    colSpan: 'col-span-2',
    bgColor: "bg-[#EFFFF8]",
    icon: <div className="text-7xl p-4"></div>,
    title: "Personalized consultationsExclusive Analyst Calls",
    subtitle:
      "Engage with our experts to get tailored advice and insights specific to your business challenges and goals.g",
    label: "Exclusive Analyst Calls",
  },
  {
    id: 1,
    colSpan: 'col-span-2',
    bgColor: "bg-[#EFFFF8]",
    title:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    subtitle:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    label: "Comprehensive Data Access",
  },
  {
    id: 2,
    colSpan: 'col-span-3',
    bgColor: "bg-[#F7F6FF]",
    title: "International insights",
    subtitle:
      "Gain insights from global markets to ensure your strategies are well-rounded and internationally compliant.",
    label: "Global Market Coverage",
    linkText: "Visit the Github CoPilot Trust Center",
    link: "#",
  },
  {
    id: 5,
    colSpan: 'col-span-3',
    bgColor: "bg-[#F7F6FF]",
    title: "Access comprehensive reports",
    subtitle:
      "Stay informed with detailed analysis on the latest trends, regulatory updates, and market developments in open banking.",
    label: "In-depth Market Insights",
    linkText: "Read the research",
    link: "#",
  },
  {
    id: 6,
    colSpan: 'col-span-2',
    bgColor: "bg-[#EFFFF8]",
    icon: <div className="text-7xl p-4"></div>,
    title: "Personalized consultationsExclusive Analyst Calls",
    subtitle:
      "Engage with our experts to get tailored advice and insights specific to your business challenges and goals.g",
    label: "Exclusive Analyst Calls",
  },
  {
    id: 7,
    colSpan: 'col-span-5',
    bgColor: "bg-[#F7F6FF]",
    title:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    subtitle:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    label: "Comprehensive Data Access",
  },

  // Repeat as needed
];
