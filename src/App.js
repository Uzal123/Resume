
import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="pt-8 page">
        <div className="relative flex justify-between w-full bg-lightGray px-8">
          <div className="py-6">
            <div>
              <h2 className="text-5xl py-2 font-semibold font-customGray">
                <span className="font-extralight ">UJJWAL </span>
                <span className="">PASWAN</span>
              </h2>
            </div>
            <div>
              <h2>WEB DEVELOPER</h2>
            </div>
          </div>
          <div className="absolute right-8 top-8">
            <img
              src="profile.jpg"
              alt=""
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
        </div>
        <div className="w-full flex px-8 pt-8">
          <div className="w-2/5">
            <div className="grid gap-2 border-b-2 border-r-2 py-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p>+918592031812</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>ujwalpaswan1214@gmail.com</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Bangalore, IN</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <p>ujjwalprofile.vercel.app</p>
              </div>
            </div>
            <div className="border-r-2 border-b-2">
              <h2 className="text-2xl font-bold py-4">SKILLS</h2>
              <ul className="list-disc pl-8 pb-4">
                <li>Html</li>
                <li>Css</li>
                <li>Tailwind Css</li>
                <li>Javascript</li>
                <li>Reactjs</li>
                <li>Nextjs</li>
                <li>Nodejs</li>
                <li>Bootstrap</li>
                <li>Git/Github</li>
                <li>MongoDB</li>
                <li>Web Design</li>
                <li>Strong Communication</li>
              </ul>
            </div>
            <div className="grid gap-4 border-r-2">
              <h2 className="text-2xl font-bold pt-4">EDUCATION</h2>

              <div>
                <h2 className="text-md font-bold">HIGER SECONDARY SCHOOL</h2>
                <p>GOLDENGATE INT'L COLLEGE</p>
                <p></p>
                <p> 2017 - 2019 </p>
              </div>
              <div>
                <h2 className="text-md font-bold">HIGH SCHOOL</h2>
                <p>SRI KRISHNA INSTITUTE OF TECHNOLOGY</p>
                <p>Computer Science Engineering</p>
                <p> 2019 - 2023 </p>
              </div>
            </div>
            <div className="h-12 border-r-2"></div>
          </div>
          <div className="w-3/5">
            <div className="border-b-2 pl-4 pb-4">
              <h2 className="text-2xl font-bold pt-4 py-2">ABOUT ME</h2>
              <p>
                I am a qualified and professional web developer with five years
                of experience in database administration and website design.
                Strong creative and analytical skills. Team player with an eye
                for detail.
              </p>
            </div>

            <div className="border-b-2 pl-4 pb-4">
              <h2 className="text-2xl font-bold py-4">
                PROJECTS AND EXPERIENCE
              </h2>
              <div className="grid gap-4">
                <div>
                  <h2 className="text-md font-bold">Mini Profile</h2>
                  <h2>
                    - A single page website created with Nextjs and styled with
                    Tailwind
                  </h2>
                </div>
                <div>
                  <h2 className="text-md font-bold">Portfolio Website</h2>
                  <h2>- A single page react app.</h2>
                </div>
                <div>
                  <h2 className="text-md font-bold">Nike Store</h2>
                  <h2>
                    - A single page website created with Nextjs and styled with
                    Tailwind
                  </h2>
                </div>
                <div>
                  <h2 className="text-md font-bold">Travel Company</h2>
                  <h2>
                    - A single page website created with Nextjs and styled with
                    Tailwind
                  </h2>
                </div>
              </div>
            </div>
            <div className=" pl-4">
              <h2 className="text-2xl font-bold py-4">CERTIFICATION</h2>
              <div className="grid gap-4">
                <div>
                  <h2 className="text-md font-bold">
                    Front-End Web Development with React
                  </h2>
                  <h2>
                    The Hong Kong University of Science and Technology -{" "}
                    <span className="font-semibold">Coursera</span>
                  </h2>
                  <p>May 12, 2021</p>
                </div>
                <div>
                  <h2 className="text-md font-bold">
                    Front-End UI Frameworks and Tools: Bootstrap 4
                  </h2>
                  <h2>
                    The Hong Kong University of Science and Technology -{" "}
                    <span className="font-semibold">Coursera</span>
                  </h2>
                  <p>Apr 18, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
