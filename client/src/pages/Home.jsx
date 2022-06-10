import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <Projects />
      </div>
        <hr />
        <Clients />
    </>
  );
}
