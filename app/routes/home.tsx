import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import Resumecard from "~/components/Resumecard";
import { usePuterStore } from "~/lib/puter";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart AI Resume Analyzer" },
    {
      name: "description",
      content: "AI-powered Resume Analyzer made by Arfan Pathan",
    },
    { name: "author", content: "Arfan Pathan" },
    { property: "og:title", content: "Smart AI Resume Analyzer" },
    {
      property: "og:description",
      content: "Made by Arfan Pathan | https://www.linkedin.com/in/arfanpathan",
    },
    { property: "og:url", content: "https://github.com/Arfan2444" },
  ];
}

export default function Home() {
  const { isLoading, auth, kv } = usePuterStore();
  const location = useLocation();

  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setloadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadReusmes = async () => {
      setloadingResumes(true);

      const resumes = (await kv.list("resume:*", true)) as KVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );

      console.log("parsedResumes", parsedResumes);

      setResumes(parsedResumes || []);
      setloadingResumes(false);
    };

    loadReusmes();
  }, []);

  return (
    <main className="bg-[url('/images/sitebg.jpg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          {!loadingResumes && resumes?.length === 0 ? (
            <h2>No resumes found. Upload your first resume to get feedback</h2>
          ) : (
            <h2>Review your submissions and check AI-powered feedback.</h2>
          )}
        </div>
        {!loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/public/images/resume-scan-2.gif"
              alt=""
              className="w-[200px]"
            />
          </div>
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <Resumecard key={resume.id} resume={resume}></Resumecard>
            ))}
          </div>
        )}

        {!loadingResumes && resumes.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link
              to="/upload"
              className="primary-button w-fit text-xl font-semibold"
            >
              Upload Resume
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
