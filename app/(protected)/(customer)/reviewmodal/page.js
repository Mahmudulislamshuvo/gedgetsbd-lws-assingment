import React from "react";

const ReviewModal = () => {
  return (
    <div className="max-w-250 mx-auto w-full p-6">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-normal">Create Review</h1>

        <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            className="w-16 h-16 object-cover border border-gray-200 rounded"
            alt="Item"
          />
          <h2 className="font-bold text-sm">
            Apple MacBook Pro M2 - Space Gray, 16GB RAM, 512GB SSD
          </h2>
        </div>

        <form className="space-y-10">
          {/* <!-- 1. Overall Rating --> */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Overall rating</h3>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="group transition-transform hover:scale-110"
              >
                <i
                  data-lucide="star"
                  className="w-8 h-8 text-gray-300 fill-current group-hover:text-amazon-yellow"
                ></i>
              </button>
              <button
                type="button"
                className="group transition-transform hover:scale-110"
              >
                <i
                  data-lucide="star"
                  className="w-8 h-8 text-gray-300 fill-current group-hover:text-amazon-yellow"
                ></i>
              </button>
              <button
                type="button"
                className="group transition-transform hover:scale-110"
              >
                <i
                  data-lucide="star"
                  className="w-8 h-8 text-gray-300 fill-current group-hover:text-amazon-yellow"
                ></i>
              </button>
              <button
                type="button"
                className="group transition-transform hover:scale-110"
              >
                <i
                  data-lucide="star"
                  className="w-8 h-8 text-gray-300 fill-current group-hover:text-amazon-yellow"
                ></i>
              </button>
              <button
                type="button"
                className="group transition-transform hover:scale-110"
              >
                <i
                  data-lucide="star"
                  className="w-8 h-8 text-gray-300 fill-current group-hover:text-amazon-yellow"
                ></i>
              </button>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* <!-- 2. Add a photo --> */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Add a photo or video</h3>
            <p className="text-sm">
              Shoppers find images and videos more helpful than text alone.
            </p>
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-amazon-blue transition-colors gap-2">
              <i data-lucide="camera" className="w-8 h-8 text-gray-400"></i>
              <span className="text-xs text-gray-500">Add media</span>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* <!-- 3. Headline --> */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Add a headline</h3>
            <input
              type="text"
              placeholder="What's most important to know?"
              className="w-full border border-gray-300 rounded p-2 outline-none focus:ring-1 focus:ring-amazon-blue"
            />
          </section>

          <hr className="border-gray-200" />

          {/* <!-- 4. Written review --> */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Add a written review</h3>
            <textarea
              rows="6"
              placeholder="What did you like or dislike? What did you use this product for?"
              className="w-full border border-gray-300 rounded p-4 outline-none focus:ring-1 focus:ring-amazon-blue"
            ></textarea>
          </section>

          <div className="border-t border-gray-200 pt-8 flex justify-end">
            <button
              type="submit"
              className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-8 py-2 rounded-md shadow-sm border border-amazon-secondary font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
