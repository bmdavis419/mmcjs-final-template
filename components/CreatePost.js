import axios from "axios";
import React, { useState } from "react";

export default function CreatePost(props) {
  const { addPost } = props;

  // TODO #1: make state for a new post

  // TODO #4: make a function called fSubmit that will make a post request to /api/posts
  // the data of the request should be the new post
  // the response of the request should be used with the new post state to pass the post data, id, and an empty array of comments to addPost

  return (
    <div className="mx-8 p-4 border-4 border-blue-500 rounded-lg">
      <h2 className="text-orange-500 font-bold text-2xl text-center underline">
        Create New Post
      </h2>
      <div className="mb-2">
        <label className="ml-2 block font-light text-orange-800">
          post name
        </label>
        <input
          onChange={(e) => {
            setNewPost({ ...newPost, name: e.target.value });
          }}
          value={newPost.name}
          type="text"
          className="bg-gray-200 p-2 w-full"
        ></input>
      </div>
      <div className="mb-2">
        <label className="ml-2 block font-light text-orange-800">
          post content
        </label>
        <textarea
          onChange={(e) => {
            setNewPost({ ...newPost, content: e.target.value });
          }}
          value={newPost.content}
          className="bg-gray-200 p-2 w-full"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          onClick={fSubmit}
          className="bg-orange-500 hover:bg-orange-300 text-white text-lg font-bold px-3 py-2 rounded-full"
        >
          Create
        </button>
      </div>
    </div>
  );
}
