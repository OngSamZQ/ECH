import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainConList, TilingList, PlumbingList, MinorSewer } from "../constants";

const Projects = () => {
  const { hash } = useLocation(); // Get the current location's hash (e.g. #Tiling)

  // Scroll to the section when hash changes
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Extract section ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]); // Runs whenever the hash changes

  return (
    <div>
      {/* MainCon */}
      <div id="MainCon" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8" style={{ color: "#6C2E93" }}>
            永進行(號)建築私人有限公司 <br />
            Eng Chin Hang Construction Pte Ltd
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MainConList.map((project, index) => (
              <div
                key={index}
                className={`p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  project.status === "Completed" ? "bg-violet-100" : "bg-white"
                }`}
              >

                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1" style={{ color: "#6C2E93" }}>
                  {project.project}
                </h3>

                {/* Project Details */}
                <p className="text-lg font-medium text-gray-700 mb-1">
                  <span className="font-bold">Scope of Work:</span> {project.scope}
                </p>
                <p className="text-md font-medium text-gray-600">
                  <span className="font-bold">Status:</span> {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tiling Section */}
      <div id="Tiling" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8" style={{ color: "#6C2E93" }}>
            永進行(號)地磚建築私人有限公司 <br />
            Eng Chin Hang Tiling Construction Pte Ltd
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TilingList.map((project, index) => (
              <div
                key={index}
                className={`p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  project.status === "Completed" ? "bg-violet-100" : "bg-white"
                }`}
              >
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1" style={{ color: "#6C2E93" }}>
                  {project.project}
                </h3>

                {/* Project Details */}
                <p className="text-lg font-medium text-gray-700 mb-1">
                  <span className="font-bold">Scope of Work:</span> {project.scope}
                </p>
                <p className="text-md font-medium text-gray-600">
                  <span className="font-bold">Status:</span> {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plumbing Section */}
      <div id="Plumbing" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8" style={{ color: "#6C2E93" }}>
            永進行(號)卫生水喉私人有限公司 <br />
            Eng Chin Hang Plumbing & Sanitary Pte Ltd
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PlumbingList.map((project, index) => (
              <div
                key={index}
                className={`p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  project.status === "Completed" ? "bg-violet-100" : "bg-white"
                }`}
              >

                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1" style={{ color: "#6C2E93" }}>
                  {project.project}
                </h3>

                {/* Project Details */}
                <p className="text-lg font-medium text-gray-700 mb-1">
                  <span className="font-bold">Scope of Work:</span> {project.scope}
                </p>
                <p className="text-md font-medium text-gray-600">
                  <span className="font-bold">Status:</span> {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Minor Sewer works */}
      <div id="MinorSewer" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8" style={{ color: "#6C2E93" }}>
            Minor Sewer works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MinorSewer.map((project, index) => (
              <div
                key={index}
                className={`p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  project.status === "Completed" ? "bg-violet-100" : "bg-white"
                }`}
              >

                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1" style={{ color: "#6C2E93" }}>
                  {project.project}
                </h3>

                {/* Project Details */}
                <p className="text-lg font-medium text-gray-700 mb-1">
                  <span className="font-bold">Scope of Work:</span> {project.scope}
                </p>
                <p className="text-md font-medium text-gray-600">
                  <span className="font-bold">Status:</span> {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>




    </div>
  );
};

export default Projects;

