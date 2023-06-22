import sectionList from "../sectionsList";
import Sections from "./Sections";

function Main() {
  return (
    <main>
      {sectionList.map((section) => {
        return (
          <Sections
            key={section.id}
            section={section}
          />
        );
      })}
    </main>
  );
}

export default Main;
