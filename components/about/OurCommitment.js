import React from "react";

export default function OurCommitment({ data }) {
  return (
    <>
      {/* Our Commitment */}

      <div id="ourCommitment" className="container mx-auto text-white pt-16 pb-20">
        <div id="header" className="flex gap-3 mb-10">
          <img src="/logo_icon_white.png" alt="Platofrmable logo" />
          <h4 className="font-bold">{data?.ourCommitment_title}</h4>
        </div>
        <article className="grid gap-32">
          {data?.commitments?.map((commit) => (
            <div className="grid grid-cols-[1fr_3fr] gap-7">
              <div className="flex flex-col gap-y-5 px-10 justify-center border-r-2 border-white">
                <img src={commit.commitment_img?.data?.attributes.url} alt="" />
                <p>{commit?.commitment_text}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: commit?.commitment_description,
                }}
                // className="lg:w-3/6 2xl:w-4/7"
              />
            </div>
          ))}
        </article>
      </div>
    </>
  );
}
