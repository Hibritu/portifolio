import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills | Hibritu Diresss",
  description: "Laravel, Node.js, Express, Flutter, Next.js skills",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="container mx-auto px-6 sm:px-10">
        <Skills />
      </div>
    </main>
  );
}
