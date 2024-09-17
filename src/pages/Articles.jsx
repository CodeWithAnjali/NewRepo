//Articles.jsx
import React, { useState, useEffect } from "react";

// Dummy Data for Articles
const articlesData = [
  {
    id: 1,
    title: "How to Write a Great Resume",
    category: "Resume Tips",
    tags: ["Career", "Development"],
    description:
      "Learn how to create a winning resume that stands out to employers. This guide covers essential tips and examples.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mBwxj6BBVxXK4dsnJoDdSb5PKd7FDT4ZnoNXQqC8v0P_48oR7hCTNJiJTLHOm1I0Rg&usqp=CAU",
    likes: 10,
    date: "2023-09-01",
  },
  {
    id: 2,
    title: "Ace Your Next Interview",
    category: "Interview Prep",
    tags: ["Career"],
    description:
      "Master the art of interview techniques with these tips and strategies to impress your potential employers.",
    image:
      "https://us.123rf.com/450wm/katikapik/katikapik2012/katikapik201200004/160337051-online-job-search-concept-a-group-of-people-are-looking-for-a-job-selection-of-resumes-and.jpg?ver=6",
    likes: 5,
    date: "2023-08-15",
  },
  {
    id: 3,
    title: "Networking in the Digital Age",
    category: "Networking",
    tags: ["Career", "Technology"],
    description:
      "Discover effective strategies for building a professional network in today’s digital world, including online networking tips.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Zp5P2C3ffv_Ovwol_Z_qmEB52oI26WIwRg&s",
    likes: 8,
    date: "2023-07-20",
  },
  {
    id: 4,
    title: "Negotiating Job Offers",
    category: "Salary Negotiation",
    tags: ["Career"],
    description:
      "Learn how to negotiate job offers effectively, including salary and benefits, to get the best deal possible.",
    image:
      "https://snworksceo.imgix.net/dth/60f51536-11a6-492e-9549-9dc4b8c52922.sized-1000x1000.png?w=1000",
    likes: 15,
    date: "2023-06-10",
  },


  {
    id: 5,
    title: "Ace Your Next Interview",
    category: " Prep",
    tags: ["Caree"],
    description:
      "Master the art of interview techniques with these tips and strategies to impress your potential employers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8DsP-kjYey2Dylcdq5psiWgMglD1O1oDXSgn1lEMU9szX17l0qcS7rOvAPDuZoiN5WI&usqp=CAU",
    likes: 5,
    date: "2023-08-15",
  },
  {
    id: 5,
    title: "Ace Your Next Interview",
    category: "coding Prep",
    tags: ["Care"],
    description:
      "Master the art of interview techniques with these tips and strategies to impress your potential employers.",
    image:
      "https://us.123rf.com/450wm/katikapik/katikapik2012/katikapik201200004/160337051-online-job-search-concept-a-group-of-people-are-looking-for-a-job-selection-of-resumes-and.jpg?ver=6",
    likes: 5,
    date: "2023-08-15",
  },
  {
    id: 1,
    title: "Ace Your Next Interview",
    category: "programing Prep",
    tags: ["Car"],
    description:
      "Master the art of interview techniques with these tips and strategies to impress your potential employers.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/006/400/420/small_2x/intelligence-and-business-analytics-with-key-performance-indicators-dashboard-concept-two-business-colleague-web-designer-discussing-data-and-digital-tablet-photo.jpg",
    likes: 5,
    date: "2023-08-15",
  },
  {
    id: 3,
    title: "Ace Your Next Interview",
    category: "status",
    tags: ["Ca"],
    description:
      "Master the art of interview techniques with these tips and strategies to impress your potential employers.",
    image:
      "https://img.freepik.com/premium-psd/business-people-team-working-laptop-table-isolated-transparent-background_879541-1370.jpg",
    likes: 5,
    date: "2023-08-15",
  },
];

// Dummy Related Articles
const relatedArticles = [
  {
    id: 5,
    title: "Personal Branding Tips",
    tags: ["Career", "Development"],
    image:
      "https://www.fatbit.com/fab/wp-content/uploads/2016/08/personal-branding-24Aug.png",
  },
  {
    id: 6,
    title: "How to Stay Motivated",
    tags: ["Lifestyle"],
    image: "https://www.hubspot.com/hubfs/tom.webp",
  },
  {
    id: 6,
    title: "How to Stay Motivated",
    tags: ["Lifestyle"],
    image: "https://www.bipolarlife.org.au/wp-content/uploads/2022/07/staying-motivated.webp",
  },
  {
    id: 5,
    title: "Personal Branding Tips",
    tags: ["Career", "Development"],
    image:
      "https://startupsmagazine.co.uk/sites/default/files/2023-02/AdobeStock_467741636.jpg",
  },
];

// Job Tips Data
const jobTips = [
  "Tailor your resume to the job you're applying for.",
  "Practice common interview questions and answers.",
  "Research the company before your interview.",
  "Follow up with a thank-you email after interviews.",
  "Use action verbs to describe your experience.",
  "Keep your resume concise and to the point.",
  "Dress appropriately for your interview, even if it's virtual.",
];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState(
    JSON.parse(localStorage.getItem("bookmarkedArticles")) || []
  );
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(3); // Number of articles per page
  const [articles, setArticles] = useState(articlesData);
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem("articleLikes");
    return storedLikes ? JSON.parse(storedLikes) : {};
  });

  const [showTip, setShowTip] = useState(false); // State to control visibility of the tip
  const [currentTip, setCurrentTip] = useState("");
  // Define the showCommentSuccess state
  const [showCommentSuccess, setShowCommentSuccess] = useState(false);

  useEffect(() => {
    // Show job tips every 10 seconds
    const tipInterval = setInterval(() => {
      const randomTip = jobTips[Math.floor(Math.random() * jobTips.length)];
      setCurrentTip(randomTip);
      setShowTip(true);

      // Hide the tip after 4 seconds
      setTimeout(() => setShowTip(false), 4000);
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(tipInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "bookmarkedArticles",
      JSON.stringify(bookmarkedArticles)
    );
  }, [bookmarkedArticles]);

  useEffect(() => {
    localStorage.setItem("articleLikes", JSON.stringify(likes));
  }, [likes]);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleCategoryChange = (category) => setSelectedCategory(category);

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleBookmark = (id) => {
    setBookmarkedArticles((prev) =>
      prev.includes(id)
        ? prev.filter((bookmarkId) => bookmarkId !== id)
        : [...prev, id]
    );
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  const handleSortChange = (e) => setSortOption(e.target.value);

  const handleCommentSubmit = (articleId, comment) => {
    setComments((prev) => ({
      ...prev,
      [articleId]: [...(prev[articleId] || []), comment],
    }));
  };

  const filteredArticles = articlesData
    .filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => article.tags.includes(tag));
      return matchesSearch && matchesCategory && matchesTags;
    })
    .sort((a, b) => {
      if (sortOption === "title") return a.title.localeCompare(b.title);
      if (sortOption === "likes")
        return (likes[b.id] || 0) - (likes[a.id] || 0);
      if (sortOption === "date") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const renderRelatedArticles = () => (
    <div className="related-articles mt-8">
      <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
      <div className="flex flex-wrap gap-4">
        {relatedArticles.map((related) => (
          <div
            key={related.id}
            className="related-article-card bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4"
          >
            <img
              src={related.image}
              alt={related.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-semibold">{related.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      {/* Search Bar */}
      {/* Search Bar and Sort Option in One Line */}
<div className="mb-6 flex items-center justify-between">
  {/* Search Bar */}
  <div className="relative w-full max-w-xs"> {/* Adjust width of search bar */}
    <input
      type="text"
      placeholder="Search articles..."
      value={searchTerm}
      onChange={handleSearch}
      className="w-full px-9 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
    />
    <svg
      className="absolute top-3 right-3 w-5 h-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 4a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7A7 7 0 0011 4zm0 2a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5zM20 20l-4.5-4.5"
      />
    </svg>
  </div>

  {/* Sort Option */}
  <div className="ml-4">
    <select
      value={sortOption}
      onChange={handleSortChange}
      className="px-4 py-2 border rounded-lg shadow-sm"
    >
      <option value="default">Sort By</option>
      <option value="title">Title</option>
      <option value="likes">Likes</option>
      <option value="date">Date</option>
    </select>
  </div>
</div>

     {/* Article List */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {currentArticles.map((article) => (
    <div
      key={article.id}
      className="article-card bg-white shadow-lg rounded-lg p-4 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      {/* Article Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      {/* Article Title & Description */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
        <p className="mt-2 text-gray-600">{article.description}</p>
      </div>

      {/* Like and Bookmark Section */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        {/* Like Button with Heart Icon */}
        <button
          onClick={() => handleLike(article.id)}
          className="flex items-center text-red-500 hover:text-red-700 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
            className="w-5 h-5 mr-1"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span className="text-sm font-medium">{likes[article.id] || 0}</span>
        </button>

       {/* Bookmark Button */}
<button
  onClick={() => handleBookmark(article.id)}
  className={`flex items-center transition-transform transform duration-300 ${
    bookmarkedArticles.includes(article.id)
      ? "text-yellow-600 scale-110" // Filled state
      : "text-yellow-500 hover:text-yellow-600" // Default state
  }`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={bookmarkedArticles.includes(article.id) ? "currentColor" : "none"} // Filled when bookmarked
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 3a3 3 0 00-3 3v15a1 1 0 001 1h15a1 1 0 001-1V6a3 3 0 00-3-3H5zM5 7h14a1 1 0 011 1v11H4V8a1 1 0 011-1z"
    />
  </svg>
</button>
      </div>

      {/* Comment Section */}
      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Add a comment..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              handleCommentSubmit(article.id, e.target.value.trim());
              e.target.value = "";
              setShowCommentSuccess(article.id); // Set success message for that article
              setTimeout(() => setShowCommentSuccess(null), 2000); // Hide after 2 seconds
            }
          }}
          className="w-full px-2 py-1 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        {showCommentSuccess === article.id && (
          <p className="text-green-500 mt-2">
            Comment added successfully!
          </p>
        )}
      </div>
    </div>
  ))}
</div>

      {/* Pagination */}
<div className="flex justify-center items-center mt-6 space-x-4 mb-4">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded ${
      currentPage === 1
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gray-500 text-white"
    }`}
  >
    Previous
  </button>
  <span className="text-lg font-semibold">
    Page {currentPage} of {Math.max(totalPages, 5)} {/* Ensure a minimum of 5 pages */}
  </span>
  <button
    onClick={() =>
      setCurrentPage((prev) => Math.min(prev + 1, Math.max(totalPages, 5)))
    }
    disabled={currentPage === Math.max(totalPages, 5)}
    className={`px-4 py-2 rounded ${
      currentPage === Math.max(totalPages, 5)
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gray-500 text-white"
    }`}
  >
    Next
  </button>
</div>


      {/* Job Tips Pop-up */}
      {showTip && (
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <p>{currentTip}</p>
        </div>
      )}

      <div className="flex space-x-4">
        {relatedArticles.map((article, index) => (
          <div key={index} className="w-1/4 p-4 border rounded-lg shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{article.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
              {article.tags.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
