import { useState } from "react";
import { Button } from "./components/ui/Button";
import { Camera, PlusIcon } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  const btnCllicked = () => {
    alert("clicked");
  };
  return (
    <>
      <h1>test </h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        variant="primary"
        size="sm"
        onClick={btnCllicked}
        text="Primary"
        startIcon={<PlusIcon size="16" />}
        endIcon={<Camera size="16" />}
      />

      <Button
        variant="secondary"
        size="md"
        onClick={btnCllicked}
        text="Primary"
        startIcon={<PlusIcon size="16" />}
        endIcon={<PlusIcon size="16" />}
      />

      <Button
        variant="primary"
        size="lg"
        onClick={btnCllicked}
        text="Primary"
        startIcon={<PlusIcon size="16" />}
        endIcon={<PlusIcon size="16" />}
      />
    </>
  );
}

export default App;
