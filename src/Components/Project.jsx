// ProjectCards.jsx
export default function ProjectCards() {
  const projects = [
    {
      id: 1,
      title: "E-commerce UI",
      desc: "Modern shopping experience",
      img: "https://via.placeholder.com/400x250",
      rotate: "-3", // initial tilt
    },
    {
      id: 2,
      title: "Dashboard Design",
      desc: "Analytics & insights",
      img: "https://via.placeholder.com/400x250",
      rotate: "2",
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "Creative personal branding",
      img: "https://via.placeholder.com/400x250",
      rotate: "-2",
    },
    {
      id: 4,
      title: "Mobile App UI",
      desc: "Cross-platform design system",
      img: "https://via.placeholder.com/400x250",
      rotate: "3",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Featured Projects</h2>

        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`w-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:rotate-0 rotate-[${project.rotate}deg]`}
            >
              {/* Title */}
              <div className="bg-blue-500 text-white py-2 px-4 text-center font-semibold text-lg">
                {project.title}
              </div>

              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Description */}
              <div className="p-5 text-center">
                <p className="text-gray-600 text-sm">{project.desc}</p>

                {/* Button */}
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
