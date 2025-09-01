export default function About() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">About This Project</h1>
      <p className="mt-4 text-gray-600">
        Smart AI Resume Analyzer built by <b>Arfan Pathan</b>.
      </p>
      <div className="mt-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/arfanpathan"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/arfanpathan"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
