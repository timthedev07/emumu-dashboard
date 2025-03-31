import { BGSVG } from "../bg/bg";
import { Link } from "../components/Link";
import { Section } from "../components/Section";
import { BookSVG } from "../icons/Book";
import { ChatBubbleSVG } from "../icons/ChatBubble";
import { ChecklistSVG } from "../icons/Checklist";
import { CSSVG } from "../icons/CS";
import { DatabaseSVG } from "../icons/Database";
import { ScienceSVG } from "../icons/Science";

export default function Home() {
  return (
    <div className="relative w-full min-w-[600px] min-h-screen flex flex-col items-center">
      <div className="fixed z-0 blur-sm brightness-[0.6]" id="experience-index">
        <BGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover blur-xs" />
      </div>
      <div className="z-10 pt-24 w-full">
        <header className="bg-gray-700/70 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border-2 border-gray-500/40 px-8 py-4 w-max mx-auto">
          <h1 className="text-xl font-semibold">The Emumu Dashboard</h1>
        </header>
        <div className="flex flex-wrap justify-center gap-24 px-24 py-12">
          <Section heading="Notes">
            <Link
              colorScheme="cyan"
              href="https://drive.google.com/drive/folders/1fWGdQ5mXEjrmxTeUZfnZPxtmZmo1_J18?usp=sharing"
              icon={CSSVG}
              name="CS Notes"
            />

            <Link
              colorScheme="emerald"
              href="https://docs.google.com/document/d/1xoXxX0WX7r05Kch7F8ZZmQOpIjJesSqZJZLa1xwgKI4/edit?usp=share_link"
              icon={DatabaseSVG}
              name="Database"
            />
            <Link
              colorScheme="indigo"
              href="https://docs.google.com/document/d/1_zNdrxT2YOng24rdPwErqslvVhh9Ikrbqk3xp8va7Yo/edit?usp=share_link"
              icon={ChatBubbleSVG}
              name="Case Study"
            />
            <Link
              colorScheme="pink"
              href="https://drive.google.com/drive/folders/1f7v2lFe2yAOFFMyycB8H1Gct9BVNuEyb?usp=sharing"
              icon={ScienceSVG}
              name="Physics Notes"
            />
            <Link
              colorScheme="red"
              href="https://docs.google.com/document/d/1sJHKmm32P7dNpsXzcNGJtS3k5NNLiWtnJpdAfGIPlOg/edit?usp=sharing"
              icon={BookSVG}
              name="English P2"
            />
          </Section>
          <Section heading="Tools">
            <Link
              colorScheme="indigo"
              href="https://docs.google.com/spreadsheets/d/1-IS0kzodxX4UwuF8Fv6Y4i0DAdF4Gibhg5g9dIfsArk/edit?usp=sharing"
              icon={ChecklistSVG}
              name="学习打卡"
            />
            <Link
              colorScheme="teal"
              href="https://dl.ibdocs.re/IB%20PAST%20PAPERS%20-%20YEAR/"
              icon={ChecklistSVG}
              name="Past Papers"
            />
          </Section>
        </div>
      </div>
    </div>
  );
}
