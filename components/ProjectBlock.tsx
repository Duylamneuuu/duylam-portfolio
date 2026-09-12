import { Frame } from "@/components/Frame";
import type { Project, WorkImage } from "@/lib/site";

type ProjectBlockProps = {
  project: Project;
};

export function ProjectBlock({ project }: ProjectBlockProps) {
  const [first, second, third] = project.frames;

  return (
    <article className="project" id={project.id}>
      <header className="project-head">
        <span className="project-index">{project.index}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </header>
      <p className="project-summary">{project.summary}</p>

      {project.id === "sushiloop" ? (
        <SushiLoopFrames project={project} />
      ) : project.id === "giaotrinh" && first && second && third ? (
        <GiaoTrinhFrames project={project} first={first} second={second} third={third} />
      ) : project.id === "clubdrop" && first && second && third ? (
        <ClubdropFrames project={project} first={first} second={second} third={third} />
      ) : (
        <Frame
          image={project.hero}
          priority={project.id === "giaotrinh"}
          className="hero-frame"
          sizes="(max-width: 1200px) 100vw, 1120px"
        />
      )}

      <div className="facts">
        <div>
          <h3>{project.storyLabel}</h3>
          <p>{project.story}</p>
        </div>
        <div>
          <h3>What this shaped</h3>
          <ul>
            {project.shaped.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>AI</h3>
          <p>{project.ai}</p>
        </div>
        <div>
          <h3>Status</h3>
          <p className="status">{project.status}</p>
        </div>
      </div>
    </article>
  );
}

function GiaoTrinhFrames({
  project,
  first,
  second,
  third,
}: {
  project: Project;
  first: WorkImage;
  second: WorkImage;
  third: WorkImage;
}) {
  return (
    <>
      <Frame
        image={project.hero}
        priority
        className="hero-frame"
        sizes="(max-width: 1200px) 100vw, 1120px"
      />
      <div className="grid-2">
        <Frame image={first} sizes="(max-width: 860px) 100vw, 540px" />
        <Frame image={second} sizes="(max-width: 860px) 100vw, 540px" />
      </div>
      <div className="grid-portrait">
        <Frame image={third} className="phone" sizes="280px" />
        <p className="caption">
          The mobile feed keeps the same structure: categories, school context, and
          listings that can be scanned without opening a chat thread.
        </p>
      </div>
    </>
  );
}

function ClubdropFrames({
  project,
  first,
  second,
  third,
}: {
  project: Project;
  first: WorkImage;
  second: WorkImage;
  third: WorkImage;
}) {
  return (
    <>
      <Frame
        image={project.hero}
        className="hero-frame"
        sizes="(max-width: 1200px) 100vw, 1120px"
      />
      <Frame
        image={first}
        className="hero-frame"
        sizes="(max-width: 1200px) 100vw, 1120px"
      />
      <div className="tall-pair">
        <Frame
          image={second}
          className="frame--crop"
          sizes="(max-width: 860px) 100vw, 540px"
        />
        <Frame
          image={third}
          className="frame--crop"
          sizes="(max-width: 860px) 100vw, 540px"
        />
      </div>
    </>
  );
}

function SushiLoopFrames({ project }: { project: Project }) {
  return (
    <div className="sushiloop-layout">
      <Frame
        image={project.hero}
        className="sushiloop-hero"
        sizes="(max-width: 860px) 70vw, 420px"
      />
      <div className="sushiloop-support">
        {project.frames.map((frame) => (
          <Frame key={frame.src} image={frame} sizes="(max-width: 860px) 45vw, 320px" />
        ))}
      </div>
    </div>
  );
}
