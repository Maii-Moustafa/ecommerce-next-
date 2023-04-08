// import Image from "next/image";
// import Link from "next/link";

import { useState } from "react";
import UserComment from "../components/UserComment";
import { getCommentData } from "../pages/api/comment";

export default function Comment(props) {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, comment);

    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ email, comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div
          // className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              type="email"
              // className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
          //  className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <label htmlFor="comment" className="block sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              // className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
      </div>
      <UserComment />
    </section>
  );
}
