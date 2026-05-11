const ReviewsSection = () => {
  return (
    <div id="reviews-tab" className="tab-content">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Customer Reviews</h2>
        <button
          onclick="window.location.href = 'ReviewModal.html'"
          className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-2 rounded-md text-sm font-medium border border-amazon-secondary"
        >
          Write a Review
        </button>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex text-amazon-secondary">
            <i data-lucide="star" className="w-5 h-5 fill-current"></i>
            <i data-lucide="star" className="w-5 h-5 fill-current"></i>
            <i data-lucide="star" className="w-5 h-5 fill-current"></i>
            <i data-lucide="star" className="w-5 h-5 fill-current"></i>
            <i data-lucide="star" className="w-5 h-5 fill-current"></i>
          </div>
          <span className="text-lg font-bold">4.8 out of 5</span>
        </div>
        <span className="text-sm text-gray-600">1,245 global ratings</span>
      </div>

      {/* <!-- Review List --> */}
      <div className="space-y-6" id="reviewList">
        {/* <!-- Review 1 --> */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
              JD
            </div>
            <div>
              <p className="font-bold text-sm">John Doe</p>
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-sm mb-1">
            Best laptop I've ever owned
          </h4>
          <p className="text-xs text-gray-500 mb-2">
            Reviewed in Bangladesh on January 15, 2025
          </p>
          <p className="text-sm">
            The M2 Max chip is incredibly fast. I use this for video editing and
            3D rendering, and it handles everything smoothly. Battery life is
            amazing too!
          </p>
        </div>

        {/* <!-- Review 2 --> */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
              SA
            </div>
            <div>
              <p className="font-bold text-sm">Sarah Ahmed</p>
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3"></i>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-sm mb-1">Great for development work</h4>
          <p className="text-xs text-gray-500 mb-2">
            Reviewed in Bangladesh on January 10, 2025
          </p>
          <p className="text-sm">
            Perfect for coding and running multiple VMs. The display is stunning
            and the keyboard is comfortable for long coding sessions.
          </p>
        </div>

        {/* <!-- Review 3 --> */}
        <div className="border-b border-gray-200 pb-6 hidden review-item">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
              MK
            </div>
            <div>
              <p className="font-bold text-sm">Mehedi Khan</p>
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-sm mb-1">Worth every taka!</h4>
          <p className="text-xs text-gray-500 mb-2">
            Reviewed in Bangladesh on January 5, 2025
          </p>
          <p className="text-sm">
            Expensive but absolutely worth it. The build quality is premium and
            performance is unmatched.
          </p>
        </div>

        {/* <!-- Review 4 --> */}
        <div className="border-b border-gray-200 pb-6 hidden review-item">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
              RH
            </div>
            <div>
              <p className="font-bold text-sm">Rahim Hossain</p>
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                <i data-lucide="star" className="w-3 h-3"></i>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-sm mb-1">
            Excellent for creative work
          </h4>
          <p className="text-xs text-gray-500 mb-2">
            Reviewed in Bangladesh on December 28, 2024
          </p>
          <p className="text-sm">
            As a graphic designer, this laptop handles Photoshop and Illustrator
            like a breeze. Highly recommended!
          </p>
        </div>
      </div>

      <button
        id="loadMoreBtn"
        onclick="loadMoreReviews()"
        className="mt-6 px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
      >
        Load More Reviews
      </button>
    </div>
  );
};

export default ReviewsSection;
