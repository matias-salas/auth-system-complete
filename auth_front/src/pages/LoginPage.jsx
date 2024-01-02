import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '@/context/AuthContext';

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="shield.svg" alt="logo" />
          Auth System
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={loginUser}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <hr className="my-4" />

              {/* Google Button */}
              <button type="button" className="w-full flex items-center justify-center space-x-2 text-gray-900 bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-primary-800">
                <svg className="w-5 h-5" viewBox="0 0 48 48" version="1.1" >
                  <g id="Icons" stroke="none" cliprulestrokewidth="1" fill="none" fillRule="evenodd">
                    <g id="Color-" transform="translate(-400.000000, -1043.000000)">
                      <g id="chrome" transform="translate(400.000000, 1043.000000)">
                        <path d="M5.7954035,8.36130434 C16.9522782,-4.62351526 37.639151,-2.06037988 45.3727574,13.1072081 C39.9288251,13.1091897 31.4040328,13.1055761 26.786937,13.1072081 C23.4382318,13.1083738 21.2761308,13.0322537 18.9347285,14.2648621 C16.1820632,15.7138239 14.1051274,18.3997073 13.3801164,21.5544341 L5.7954035,8.36130434 L5.7954035,8.36130434 Z" id="chrome-icon-path" fill="#EA4335">
                        </path>
                        <path d="M16.015461,23.9991346 C16.015461,28.3998753 19.5936811,31.9800817 23.9919804,31.9800817 C28.3901632,31.9800817 31.9683834,28.3998753 31.9683834,23.9991346 C31.9683834,19.5985104 28.3901632,16.0181875 23.9919804,16.0181875 C19.5936811,16.0181875 16.015461,19.5985104 16.015461,23.9991346 L16.015461,23.9991346 Z" id="chrome-icon-path" fill="#4285F4">
                        </path>
                        <path d="M27.0876366,34.4456482 C22.6105798,35.7761751 17.371347,34.3006354 14.5014777,29.3468879 C12.3108329,25.5655987 6.52286114,15.4823164 3.89206021,10.8973955 C-5.32185953,25.0194695 2.61924235,44.2642006 19.3464574,47.5489026 L27.0876366,34.4456482 L27.0876366,34.4456482 Z" id="chrome-icon-path" fill="#34A853">
                        </path>
                        <path d="M31.4014697,16.0181875 C35.1303309,19.4863704 35.9427207,25.102234 33.4168909,29.4566966 C31.5138971,32.7374352 25.4402549,42.9884614 22.4966379,47.9523505 C39.730883,49.0147671 52.2944399,32.1238121 46.6195946,16.0181875 L31.4014697,16.0181875 L31.4014697,16.0181875 Z" id="chrome-icon-path" fill="#FBBC05">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Sign in with Google</span>
              </button>
              {/* Facebook Button */}

              <button type="button" className="w-full flex items-center justify-center space-x-2 text-gray-900 bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-primary-800">
                <svg className="w-5 h-5" viewBox="0 0 48 48" version="1.1">

                  <title>Facebook-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs>

                  </defs>
                  <g id="Icons" stroke="none" cliprulestrokewidth="1" fill="none" fillRule="evenodd">
                    <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                      <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook">
                      </path>
                    </g>
                  </g>
                </svg>
                <span>Sign in with Facebook</span>
              </button>


              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
