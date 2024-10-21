import DataList from "../DataList";
import FormView from "../FormView";

const MainContent = ({ view }) => {
  return (
    <main className="flex items-center justify-center mt-5">
      {view === "table" ? <DataList /> : <FormView />}
    </main>
  );
};

export default MainContent;
