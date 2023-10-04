export default function Home() {
  return (
    <div className="flex-col">
      <header className="text-gray-600 body-font bg-white position: fixed left-0 right-0 top-0">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex  font-medium items-center text-gray-900  w-[160px] h-[90px] cursor-pointer">
            <img
              src="https://shoppealtech.com/images/svg/shoppeal.svg"
              alt="Shoppeal Logo"
              className=" text-white  bg-indigo rounded-full ml-2 "
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-8 hover:text-[#00b6d8] cursor-pointer font-bold">
              Home
            </a>
            <a className="mr-8 hover:text-[#00b6d8] cursor-pointer font-bold">
              About Us
            </a>
            <a className="mr-8 hover:text-[#00b6d8] cursor-pointer font-bold">
              Courses
            </a>
            <a className="mr-8 hover:text-[#00b6d8] cursor-pointer inline-flex items-center font-bold">
              Services
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a className="mr-8 hover:text-[#00b6d8] cursor-pointer font-bold">
              For Companies
            </a>
            <a className="mr-8 hover:text-[#00b6d8] cursor-pointer font-bold">
              Contact Us
            </a>
          </nav>
          <button className="inline-flex items-center bg-[#00b6d8] text-white border-0 py-2.5 px-5 focus:outline-none rounded-lg text-base mt-4 md:mt-0 mr-5 font-bold">
            Login
          </button>
        </div>
      </header>
      <section className="text-gray-400 bg-[#daf9ff] body-font ">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-black">
              Technology is just a tool <br /> unless allied with
            </h1>
            <h1 className="title-font sm:text-5xl text-3xl mb-4  text-[#00b6d8] font-bold">
              learning system
            </h1>
            <p className="mb-8 leading-relaxed text-[#fd7e14] font-bold text-1xl">
              India's Top 10 E- Learning Startup Recognize by SiliconIndia
              <br />
              StartUp City
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#00b6d8] border-0 py-2 px-6 focus:outline-none cursor-pointer rounded-lg text-lg">
                For Student
              </button>
              <button className="ml-4 inline-flex text-white  bg-[#00b6d8] border-0 py-2 px-6 focus:outline-none cursor-pointer rounded-lg text-lg">
                For Mentor
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://shoppealtech.com/images/home-hero.png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-white body-font">
        <div className="flex flex-wrap m-8 justify-evenly">
          <div className="p-4 lg:w-1/6 bg-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-12 h-12 object-cover object-center sm:mb-0 mb-4"
                src="https://shoppealtech.com/images/live.png"
              />
              <div className="flex-grow sm:pl-8">
                <p className="title-font text-sm text-black">Live Session</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/6 bg-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg  w-12 h-12 object-cover object-center sm:mb-0 mb-4"
                src="https://shoppealtech.com/images/remote.png"
              />
              <div className="flex-grow sm:pl-8">
                <p className="title-font text-sm text-black">Remote Learning</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/6 bg-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg  w-12 h-12 object-cover object-center sm:mb-0 mb-4"
                src="https://shoppealtech.com/images/mentor.png"
              />
              <div className="flex-grow sm:pl-8">
                <p className="title-font text-sm text-black">
                  Industrial Expert
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/6 bg-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-12 h-12  object-cover object-center sm:mb-0 mb-4"
                src="https://shoppealtech.com/images/money.png"
              />
              <div className="flex-grow sm:pl-8">
                <p className="title-font text-sm text-black">Value For Money</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/6 bg-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg  w-12 h-12 object-cover object-center sm:mb-0 mb-4"
                src="https://shoppealtech.com/images/community.png"
              />
              <div className="flex-grow sm:pl-8">
                <p className="title-font text-sm text-black">
                  Community Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container px-5 py8 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-gray-900">
              Why we are the best?
            </h1>
            <p className="text-xl w-full leading-relaxed text-gray-400 font-bold">
              We are the best because we are complete for your learning
            </p>
          </div>
          <div className="flex flex-wrap -m-5 items-center justify-center">
            <div className="w-72 p-3">
              <div className="border bg-gray-100 p-6 rounded-lg h-96">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-2 ">
                  <img
                    src="https://shoppealtech.com/images/top10.png"
                    alt="shoppealtech.com"
                  />
                </div>
                <h2 className="text-2xl text-[#006b7e] title-font mb-8 mt-2 font-extrabold">
                  Guaranteed Internship
                </h2>
                <p className="leading-relaxed mt-4 text-sm text-gray-500">
                  We Provide Guaranteed Internship after Training Program.
                  Minimum tenure of 1 Month and Maximum tenure of 6 Months
                </p>
              </div>
            </div>
            <div className="w-72 p-3">
              <div className="border bg-gray-100 p-6 rounded-lg h-96">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-2">
                  <img
                    src="https://shoppealtech.com/images/gaurantee.png"
                    alt="shoppealtech.com"
                  />
                </div>
                <h2 className="text-2xl text-[#006b7e] title-font mb-8 mt-2 font-extrabold">
                  5 Certificate in One Training
                </h2>
                <p className="leading-relaxed mt-4 text-sm text-gray-500">
                  We Provide 5 certification including letters in our all
                  training Programs. We gets add on in your resume
                </p>
              </div>
            </div>
            <div className="w-72 p-3 ">
              <div className="border bg-gray-100 p-6 rounded-lg h-96">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-2">
                  <img
                    src="https://shoppealtech.com/images/certificate.png"
                    alt="shoppealtech.com"
                  />
                </div>
                <h2 className="text-2xl text-[#006b7e] title-font mb-8 mt-2 font-extrabold">
                  Research and Innovation
                </h2>
                <p className="leading-relaxed mt-4 text-sm text-gray-500">
                  Our Course curriculum has been design by Industrial Expert by
                  Research and Innovation of Advance learning
                </p>
              </div>
            </div>
            <div className="w-72 p-3">
              <div className="border bg-gray-100 p-6 rounded-lg h-96">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-2">
                  <img
                    src="https://shoppealtech.com/images/research.png"
                    alt="shoppealtech.com"
                  />
                </div>
                <h2 className="text-2xl text-[#006b7e] title-font mb-8 mt-2 font-extrabold">
                  India's Top 10 E-Learning Startup
                </h2>
                <p className="leading-relaxed mt-4 text-sm text-gray-500">
                  Shoppeal has been recognize by SiliconIndia StartUp City as
                  Top 10 E-Learning Startup in India 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font mt-12 ">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full flex-col justify-items-start pl-12 ">
            <p className="text-xl w-full leading-relaxed text-gray-400 font-bold mb-3">
              courses
            </p>
            <h1 className="sm:text-4xl text-2xl font-bold title-font  text-gray-900">
              Find the Best Course For You
            </h1>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap m-8 ">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-36 w-full object-cover object-center p-2 "
                  src="https://shoppealtech.com/images/app-course.jpg"
                  alt="blog"
                />
                <div className="flex flex-row item-center justify-evenly my-3 ">
                  <img src="/assets/star.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400">4.7 | 5k+ Enrolled |</p>
                  <img src="/assets/youtube.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ">
                    Live Session | 6 Weeks
                  </p>
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl text-gray-900 mb-3 font-bold">
                    Master In Front-End
                    <br />
                    Development
                  </h1>
                  <p className="leading-relaxed mb-3 bg-[#4b8555] rounded-sm text-white text-sm inline-block p-1">
                    Guaranted Internship
                  </p>
                  <div className="flex items-center flex-wrap  justify-between mt-10">
                    <p className="text-[#4b8555] inline-flex items-center md:mb-2 lg:mb-0 font-bold text-lg">
                      ₹ 5499/ -
                    </p>
                    <span className="text-black mrp line-through">₹ 9999</span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <button className="inline-flex bg-[#8bc34a] border-0 py-3 px-6 focus:outline-none cursor-pointer rounded-lg text-sm text-black font-bold">
                        ENROLL NOW
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-36 w-full object-cover object-center p-2 "
                  src="https://shoppealtech.com/images/fullstack-course.jpg"
                  alt="blog"
                />
                <div className="flex flex-row item-center justify-evenly my-3 ">
                  <img src="/assets/star.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400">4.7 | 5k+ Enrolled |</p>
                  <img src="/assets/youtube.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ">
                    Live Session | 6 Weeks
                  </p>
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                    Master In Back-End
                    <br />
                    Development
                  </h1>
                  <p className="leading-relaxed mb-3 bg-[#4b8555] rounded-sm text-white text-sm inline-block p-1">
                    Guaranted Internship
                  </p>
                  <div className="flex items-center flex-wrap  justify-between mt-10">
                    <p className="text-[#4b8555] inline-flex items-center md:mb-2 lg:mb-0 font-bold text-lg">
                      ₹ 5499/ -
                    </p>
                    <span className="text-black mrp line-through">₹ 9999</span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <button className="inline-flex bg-[#8bc34a] border-0 py-3 px-6 focus:outline-none cursor-pointer rounded-lg text-sm text-black font-bold">
                        ENROLL NOW
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-36 w-full object-cover object-center p-2 "
                  src="https://shoppealtech.com/images/graphic-course.jpg"
                  alt="blog"
                />
                <div className="flex flex-row item-center justify-evenly my-3 ">
                  <img src="/assets/star.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400">4.7 | 5k+ Enrolled |</p>
                  <img src="/assets/youtube.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ">
                    Live Session | 6 Weeks
                  </p>
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                    Master In Full Stack
                    <br />
                    Development
                  </h1>
                  <p className="leading-relaxed mb-3 bg-[#4b8555] rounded-sm text-white text-sm inline-block p-1">
                    Guaranted Internship
                  </p>
                  <div className="flex items-center flex-wrap  justify-between mt-10">
                    <p className="text-[#4b8555] inline-flex items-center md:mb-2 lg:mb-0 font-bold text-lg">
                      ₹ 5499/ -
                    </p>
                    <span className="text-black mrp line-through">₹ 9999</span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <button className="inline-flex bg-[#8bc34a] border-0 py-3 px-6 focus:outline-none cursor-pointer rounded-lg text-sm text-black font-bold">
                        ENROLL NOW
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap m-8 ">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-36 w-full object-cover object-center p-2 "
                  src="https://shoppealtech.com/images/hr-course.jpg"
                  alt="blog"
                />
                <div className="flex flex-row item-center justify-evenly my-3 ">
                  <img src="/assets/star.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400">4.7 | 5k+ Enrolled |</p>
                  <img src="/assets/youtube.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ">
                    Live Session | 6 Weeks
                  </p>
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl text-gray-900 mb-3 font-bold">
                    Master In MEAN Stack
                  </h1>
                  <p className="leading-relaxed mb-3 bg-[#4b8555] rounded-sm text-white text-sm inline-block p-1">
                    Guaranted Internship
                  </p>
                  <div className="flex items-center flex-wrap  justify-between mt-10">
                    <p className="text-[#4b8555] inline-flex items-center md:mb-2 lg:mb-0 font-bold text-lg">
                      ₹ 5499/ -
                    </p>
                    <span className="text-black mrp line-through">₹ 9999</span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <button className="inline-flex bg-[#8bc34a] border-0 py-3 px-6 focus:outline-none cursor-pointer rounded-lg text-sm text-black font-bold">
                        ENROLL NOW
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-36 w-full object-cover object-center p-2 "
                  src="https://shoppealtech.com/images/marketing-course.jpg"
                  alt="blog"
                />
                <div className="flex flex-row item-center justify-evenly my-3 ">
                  <img src="/assets/star.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400">4.7 | 5k+ Enrolled |</p>
                  <img src="/assets/youtube.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ">
                    Live Session | 6 Weeks
                  </p>
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                    Master In MERN Stack
                  </h1>
                  <p className="leading-relaxed mb-3 bg-[#4b8555] rounded-sm text-white text-sm inline-block p-1">
                    Guaranted Internship
                  </p>
                  <div className="flex items-center flex-wrap  justify-between mt-10">
                    <p className="text-[#4b8555] inline-flex items-center md:mb-2 lg:mb-0 font-bold text-lg">
                      ₹ 5499/ -
                    </p>
                    <span className="text-black mrp line-through">₹ 9999</span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <button className="inline-flex bg-[#8bc34a] border-0 py-3 px-6 focus:outline-none cursor-pointer rounded-lg text-sm text-black font-bold">
                        ENROLL NOW
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-36 w-full object-cover object-center p-2 "
                  src="https://shoppealtech.com/images/python-course.jpg"
                  alt="blog"
                />
                <div className="flex flex-row item-center justify-evenly my-3 ">
                  <img src="/assets/star.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400">4.7 | 5k+ Enrolled |</p>
                  <img src="/assets/youtube.png" alt="" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ">
                    Live Session | 6 Weeks
                  </p>
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                    Master In Python
                  </h1>
                  <p className="leading-relaxed mb-3 bg-[#4b8555] rounded-sm text-white text-sm inline-block p-1">
                    Guaranted Internship
                  </p>
                  <div className="flex items-center flex-wrap  justify-between mt-10">
                    <p className="text-[#4b8555] inline-flex items-center md:mb-2 lg:mb-0 font-bold text-lg">
                      ₹ 5499/ -
                    </p>
                    <span className="text-black mrp line-through">₹ 9999</span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <button className="inline-flex bg-[#8bc34a] border-0 py-3 px-6 focus:outline-none cursor-pointer rounded-lg text-sm text-black font-bold">
                        ENROLL NOW
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-[#00b6d8] border-0 py-3 px-4 focus:outline-none cursor-pointer rounded-lg text-sm font-bold">
            Explore More Courses
          </button>
        </div>
      </section>

      <section className="text-gray-white body-font">
        <div className="container px-5 py-36 mx-auto">
          <h1 className="text-5xl  title-font text-gray-900 mb-12 text-center font-bold">
            What's Our Student Say About Us
          </h1>

          <div className="flex flex-wrap m-8">
            <div className="p-4 md:w-1/2 w-full ">
              <div className="h-full bg-white shadow-2xl p-8 rounded">
                <div className="flex flex-row items-center justify-start mb-2">
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                </div>
                <hr className="mb-2" />
                <p className="leading-relaxed mb-6 font-bold text-lg text-gray-600">
                  “ it is really worth it to take this course inplace of a
                  weekend pizza ,it can make u eligible to buy pizza
                  everyday,the course struture is well design ,it is better than
                  various courses in market that charge money in lakhs ”
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white shadow-2xl p-8 rounded">
                <div className="flex flex-row items-center justify-start mb-2">
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                </div>
                <hr className="mb-2" />
                <p className="leading-relaxed mb-6 font-bold text-lg text-gray-600">
                  “ it is really worth it to take this course inplace of a
                  weekend pizza ,it can make u eligible to buy pizza
                  everyday,the course struture is well design ,it is better than
                  various courses in market that charge money in lakhs ”
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap m-8">
            <div className="p-4 md:w-1/2 w-full ">
              <div className="h-full bg-white shadow-2xl p-8 rounded">
                <div className="flex flex-row items-center justify-start mb-2">
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                </div>
                <hr className="mb-2" />
                <p className="leading-relaxed mb-6 font-bold text-lg text-gray-600">
                  “ The course is a step by step guide, to digital marketing. it
                  gives an overview of all the basic fundamentals to digital
                  marketing ”
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white shadow-2xl p-8 rounded">
                <div className="flex flex-row items-center justify-start mb-2">
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                  <img src="/assets/star.png" alt="" className="w-4 h-4 m-1" />
                </div>
                <hr className="mb-2" />
                <p className="leading-relaxed mb-6 font-bold text-lg text-gray-600">
                  “ The most complete guide to iOS & Swift App Development,
                  starting from 0 to 100. Amazing course with a lot of material
                  that will guide you step by step in order to be able to
                  understand basic and more complex concepts of programming with
                  Swift “
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-0  mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">
              Over 200+ College and Institute Learning With Us
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-1/5 h-1/5">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center mb-4"
                  src="https://shoppealtech.com/images/dypatil.png"
                />
              </div>
            </div>
            <div className="p-4 w-1/5 h-1/5">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center mb-4"
                  src="https://shoppealtech.com/images/jbm.png"
                />
              </div>
            </div>
            <div className="p-4 w-1/5 h-1/5">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center mb-4"
                  src="https://shoppealtech.com/images/nmims.png"
                />
              </div>
            </div>
            <div className="p-4 w-1/5 h-1/5">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg  w-28 h-28 object-cover object-center mb-4"
                  src="https://shoppealtech.com/images/IIM.svg"
                />
              </div>
            </div>
            <div className="p-4 w-1/5 h-1/5">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center mb-4"
                  src="https://shoppealtech.com/images/iit.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-900">
              Kickstart Your Career With Shoppeal Tech
            </h1>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#00b6d8]  border-0 py-4 px-6 focus:outline-none rounded text-sm">
                CERTIFICATE COURSE
              </button>
              <button className="ml-4 inline-flex text-white bg-[#00b6d8] border-0 py-4 px-6 focus:outline-none rounded text-sm">
                ADVANCE COURSE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* next change goes here  */}

      <footer className="text-gray-600 body-font bg-[#dffaff]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">
              CONTACT US
            </h2>
            <nav className="list-none mb-10">
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  Contact us if need help withanything
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  support@shoppealtech.com
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  +91 7304663195
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  Kalyan, Maharashtra - 421306
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  MEAN Stack
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  UDYAM-MH-33-0152813
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  Python Programming
                </a>
              </li>
              <li className="mt-2">
                <a className="text-gray-600 hover:text-gray-800 text-sm">
                  Request a Call Back
                </a>
              </li>

              <div className="inline-flex sm:ml-auto  mt-6 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </div>
              <li className="mt-4">
                <img
                  src="https://shoppealtech.com/images/silicon.png"
                  alt=""
                  className="w-36"
                />
              </li>
            </nav>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 cursor-pointer">
                WHO ARE WE
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    About Us
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Services
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Team
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Blog
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Terms & Condition
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Refund Policy
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    FAQs
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 cursor-pointer">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Certification Courses
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Advance Courses
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Placement Assistant
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Software Service
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Digital Marketing
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Web Hosting
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Training Program
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Software Service
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    For Mentor
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    For Companies
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 cursor-pointer">
                CERTIFICATION
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    App Development
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Web Development
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Digital Marketing
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Human Resources
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Full Stack Development
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Graphic Designing
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Python Programming
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Summer Internship
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Verify Certificate
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 cursor-pointer">
                ADVANCE COURSES
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    App Development
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Web Development
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Digital Marketing
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    MERN Stack
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    MEAN Stack
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Full Stack Development
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Graphic Designing
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Python Programming
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                    Request a Call Back
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#dffaff]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap item-center sm:flex-row">
            <p className="text-gray-500 text-sm w-full text-center">
              Copyright © 2023 All rights reserved with Shoppeal Tech | This
              template is made with by Shoppeal Tech
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
