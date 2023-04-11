import Link from "next/link";

const freeTrial = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-purple-900">
            Start your free trial 
          </h2>
          <p className="mb-6 font-light text-purple-600 md:text-lg">
            Try Market Platform for 30 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default freeTrial;