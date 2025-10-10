import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center 
    justify-between gap-20 md:gap-20 py-20">
      
      <div className="text-center md:text-left flex-1 m-15">
        <h2 className="text-3xl text-purple-400 font-semibold mb-2">
          Hey there, I'm
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-600 mb-4 leading-tight">
          Govind Kr Yadav
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-6">
          Backend & DevOps Engineer
        </h3>
        <p className="text-indigo-800 text-lg leading-relaxed mb-8 max-w-xl">
          I’m a passionate Backend and DevOps Engineer skilled in{" "}
          <span className="text-blue-400 font-medium">Node.js</span>,{" "}
          <span className="text-blue-400 font-medium">Express</span>,{" "}
          <span className="text-blue-400 font-medium">MongoDB</span>, and{" "}
          <span className="text-blue-400 font-medium">AWS</span>. I love building
          scalable systems and mentoring others in modern backend development and
          cloud automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="mailto:govind803556@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            Hire Me
          </a>
          <a
  href="#projects"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }}
  className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300"
>
  See My Projects
</a>

        </div>
      </div>

      <div className="flex justify-center md:justify-end flex-1 m-15">
        <div className="relative w-75 h-80 md:w-90 md:h-90 rounded-full overflow-hidden 
        border-4 border-purple-700 shadow-[0_0_30px_rgba(59,130,246,0.5)] 
        hover:scale-105 transition-transform duration-500">
          <img
          src={"/profile/govind_yadav.jpg"}
            alt="Govind Kumar Yadav"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

    </section>
  );
}
