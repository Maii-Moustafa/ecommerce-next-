// import Image from "next/image";

import { useRouter } from "next/router";

// import Link from "next/link";

export default function UserComment(props) {
  //   const router = useRouter();
  const { data } = props;
  console.log(data);
  //   if (!data?.length) <p>No comments yet</p>;

  //   const handleComment=(id)
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            Michael Gough
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {/* <time pubdate datetime="2022-02-08" title="February 8th, 2022">
              Feb. 8, 2022
            </time> */}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
    </article>
  );
}
