import { Button } from "./components/ui/Button";
import { PlusIcon } from "lucide-react";
import { Card } from "./components/ui/Card";
import { ShareIcon } from "./components/icon/ShareIcon";
import { Sidebar } from "./components/ui/Sidebar";

function App() {
  const btnCllicked = () => {
    alert("clicked");
  };
  return (
    <>
      <Sidebar />
      <Card />
      <Button
        variant="primary"
        size="md"
        onClick={btnCllicked}
        text="Add Content"
        startIcon={<PlusIcon size="16" />}
      />

      <Button
        variant="secondary"
        size="md"
        onClick={btnCllicked}
        text="Share Brain"
        startIcon={<ShareIcon />}
      />
    </>
  );
}

export default App;
