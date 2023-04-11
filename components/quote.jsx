/* eslint-disable @next/next/no-img-element */
const quote = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-purple-400 "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <p className="text-xl font-medium text-purple-900 md:text-2xl">
              Market is just awesome. It contains tons of predesigned components
              and pages starting from login screen to complex dashboard.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://i.pinimg.com/474x/60/b4/7e/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div
                data-aos="fade-right"
                data-aos-delay="30"
                data-aos-duration="800"
                className="pr-3 font-medium text-purple-900"
              >
                Mohit Sweque
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="30"
                data-aos-duration="800"
                className="pl-3 text-sm font-bold text-purple-500"
              >
                CEO Tailwind
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-purple-400 "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <p className="text-xl font-medium text-purple-900 md:text-2xl">
              This website looks really cool. The design used is very attractive
              to the user attention. I highly recommend this website.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="data:image/png;base64,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"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div
                data-aos="fade-right"
                data-aos-delay="30"
                data-aos-duration="800"
                className="pr-3 font-medium text-purple-900"
              >
                Maria Swevage
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="30"
                data-aos-duration="800"
                className="pl-3 text-sm font-bold text-purple-500"
              >
                Lead UI/UX Designer Travellio
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default quote;
