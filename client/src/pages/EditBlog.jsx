export const EditBlog = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">

      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

      {/* imgUrl */}
      <form className="space-y-5">

        <div>
          <label className="block text-sm font-medium mb-1">
            Image Url
          </label>
          <input
            type="text"
            placeholder="Enter image url"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Blog Content
          </label>
          <textarea
            rows="6"
            placeholder="Write your blog content..."
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* author name*/}
        <div>
          <label className="block text-sm font-medium mb-1">
            Author Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-2 py-2"
            placeholder="Enter author name"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-3">

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Update Blog
          </button>

          <button
            type="button"
            className="border px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
};


