import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProjects from "./components/NewProjects";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProjects />
    </main>
  );
}

export default App;
