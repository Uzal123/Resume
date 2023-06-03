import React, { useRef, useEffect } from "react";
import "./App.css";
import ReactToPrint from "react-to-print";
import { AiFillGithub } from "react-icons/ai";

function App() {
  let componentRef = useRef();

  useEffect(() => {
    document.title = "Ujjwal Resume";
  }, []);
  return (
    <div className="">
      <h2 className="text-white text-center  sm:hidden ">
        Please view in desktop mode or download
      </h2>
      <div className="flex justify-center">
        <ReactToPrint
          trigger={() => (
            <button className=" bg-red-500 text-white px-8 py-4 my-8 rounded-md">
              Download!
            </button>
          )}
          content={() => componentRef}
        />
      </div>

      <div className="hidden sm:flex justify-center">
        <div
          id="resume"
          className="pt-8 page"
          ref={(el) => (componentRef = el)}
        >
          <div className="relative flex justify-between w-full bg-lightGray px-8">
            <div className="py-6">
              <div>
                <h2 className="text-5xl py-2 font-semibold font-customGray">
                  <span className=" ">UJJWAL </span>
                  <span className="">PASWAN</span>
                </h2>
              </div>
              <div>
                <h2>Computer Science Engineer</h2>
              </div>
            </div>
            <div className="absolute right-8 top-8 hidden">
              <img
                src="profile.jpg"
                alt=""
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
          </div>
          <div className="w-full flex px-8 pt-4 text-sm">
            <div className="w-2/5">
              <div className="grid gap-1 border-b-2 border-r-2 py-4">
                <div className="flex ">
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
                  <p className="">+91 8310235365</p>
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
                  <a
                    href="https://ujjwalpaswan.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    ujjwalpaswan.me
                  </a>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="h-6 w-6"
                    viewBox="0 0 50 50"
                    stroke="#000000"
                  >
                    {" "}
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/ujjwal-paswan-a71b9a205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    ujjwal-paswan-a71b9a205
                  </a>
                </div>
                <div className="flex">
                  <AiFillGithub className="h-6 w-6" />
                  <a
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/Uzal123"
                  >
                    Uzal123
                  </a>
                </div>
              </div>
              <div className="border-r-2 border-b-2">
                <h2 className="text-2xl font-bold py-4">SKILLS</h2>
                <div className="flex w-full justify-between pr-8">
                  <div>
                    <h2 className="text-md font-semibold">Front end skills</h2>
                    <ul className="list-disc pl-8 pb-4">
                      <li>Html</li>
                      <li>CSS</li>
                      <li>Sass</li>
                      <li>Tailwind Css</li>
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>Reactjs</li>
                      <li>Nextjs</li>
                      <li>Bootstrap</li>
                    </ul>
                    <h2 className="text-md font-semibold">Other Skills</h2>
                    <ul className="list-disc pl-8 pb-4">
                      <li>C/C++</li>
                      <li>Oracle SQL</li>
                      <li>UI/UX Design</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-md font-semibold">Back end Skills</h2>
                    <ul className="list-disc pl-8 pb-4">
                      <li>Nodejs</li>
                      <li>Swagger</li>
                      <li>Nestjs</li>
                      <li>GraphQL</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                    </ul>

                    <h2 className="text-md font-semibold">Web/Cloud Tools</h2>
                    <ul className="list-disc pl-8 pb-4">
                      <li>Nginx</li>
                      <li>PM2</li>
                      <li>Git/Github</li>
                      <li>AWS - S3</li>
                      <li>AWS - EC2</li>
                      <li>Github Actions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 border-r-2">
                <h2 className="text-2xl font-bold pt-4">EDUCATION</h2>

                <div>
                  <h2 className="text-md font-bold">
                    HIGH SCHOOL<span>(76%)</span>
                  </h2>
                  <p>SRI KRISHNA INSTITUTE OF TECHNOLOGY</p>
                  <p>Bangalore</p>
                  <p>Computer Science Engineering</p>
                  <p> 2019 - 2023 </p>
                </div>
                <div>
                  <h2 className="text-md font-bold">
                    HIGER SECONDARY SCHOOL<span className="">(64.5%)</span>
                  </h2>
                  <p>GOLDENGATE INT'L COLLEGE</p>
                  <p>Kathmandu</p>
                  <p> 2017 - 2019 </p>
                </div>
              </div>
              <div className="h-6 border-r-2"></div>
            </div>
            <div className="w-3/5">
              <div className="border-b-2 pl-4 pb-4">
                <div className="flex ">
                  <h2 className="text-2xl font-bold py-2">ABOUT ME</h2>
                </div>
                <p>
                  Innovative optimized solution seeker. Excited to be in
                  deployment phase of my new career as an Engineer. Highly
                  Focused with the comprehensive knowledge of designing and
                  developing the layout, visual apprearance and usabilty of a
                  website.
                </p>
              </div>
              <div className="border-b-2 pl-4 pb-4">
                <h2 className="text-2xl font-bold py-4">EXPERIENCE</h2>
                <div className="grid gap-4">
                  <div>
                    <p className="text-md font-bold">
                      Mevi Technologies
                      <span className="font-normal">
                        {" "}
                        - (Oct 2022 - Nov 2022)
                      </span>
                    </p>
                    <h2>Web Developer Intern</h2>

                    <h2>- Developing webpages according to the clients need</h2>
                  </div>
                </div>
              </div>

              <div className="border-b-2 pl-4 pb-4">
                <h2 className="text-2xl font-bold py-4">PROJECTS</h2>
                <div className="grid gap-4">
                  <div>
                    <div className="flex items-center">
                      <a
                        href="https://motoghar.com"
                        className="text-md font-bold items-center flex"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MotoGhar{" "}
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
                      </a>

                      <a
                        className="underline items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/Uzal123/bikeapp"
                      >
                        <AiFillGithub className="h-6 w-6" />
                      </a>
                    </div>
                    <h2 className="">
                      - MotoGhar is an online marketplace for buying, selling,
                      and renting vehicles. It is functional in Nepal.
                    </h2>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <a
                        href="https://nammaskit.live"
                        className="text-md font-bold items-center flex"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Namma SKIT{" "}
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
                      </a>

                      <a
                        className="underline items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Uzal123/nammaSkit"
                      >
                        <AiFillGithub className="h-6 w-6" />
                      </a>
                    </div>
                    <h2>
                      - Student Information and Management System build for
                      SKIT. Manages and views student records according to the
                      user role.
                    </h2>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <a
                        href="https://ujjwalpaswan.me"
                        className="text-md font-bold items-center flex"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mini Profile{" "}
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
                      </a>

                      <a
                        className="underline items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Uzal123/MiniProfile"
                      >
                        <AiFillGithub className="h-6 w-6" />
                      </a>
                    </div>
                    <h2>
                      - A single page website created with Nextjs and styled
                      with Tailwind to show my projects.
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
    </div>
  );
}

export default App;
