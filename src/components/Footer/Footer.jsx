import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gradient-to-b from-black to-[#121212] rounded-lg shadow pt-4 text-white">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-center mb-4">
          <a
            href="/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HeroManhwa
            </span>
          </a>
          
        </div>

        <div className="text-center px-[20rem] mb-4">If you want to get excited over manga heroes'great performances with other readers  all over world, HeroManhwa is the best place for you</div>

        <ul class="flex justify-center items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>

        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            HeroManhwa™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
