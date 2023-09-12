import Education from "@/components/education";
import Experience from "@/components/experience";
import Awards from "@/components/awards";
import Recommendations from "@/components/recommendations";
import WidgetSkills from "@/components/widget-skills";
import WidgetLanguages from "@/components/widget-languages";
import WidgetReferences from "@/components/widget-references";

export const metadata = {
  title: "Resume - Corfitz",
  description: "Page description",
};

export default function Resume() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">My resume</h1>
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-12">
              <Education />
              <Experience />
              <Awards />
              <Recommendations />
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetSkills />
          <WidgetLanguages />
          <WidgetReferences />
        </div>
      </aside>
    </div>
  );
}
