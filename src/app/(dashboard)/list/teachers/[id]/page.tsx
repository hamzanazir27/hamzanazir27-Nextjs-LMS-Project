import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 flex p-4 flex-col gap-4 xl:flex-row">
      {/* Left  */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user info card  */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src=".jpg"
                width={144}
                height={144}
                alt=""
                className="h-36 w-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Hamza Nazir</h1>
              <p className="text-sm text-gray-500">
                loream ipsum dolor sit amet, consectetur
              </p>
              <div className="flex  items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" height={14} width={14} />
                  <span className="ml-2">A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" height={14} width={14} />
                  <span className="ml-2">January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" height={14} width={14} />
                  <span className="ml-2">abc@gmail.componey</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" height={14} width={14} />
                  <span className="ml-2">+32 232 232</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex-1"></div>
        </div>
        {/* bottom */}
        <div></div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3">R</div>
    </div>
  );
};

export default SingleTeacherPage;
