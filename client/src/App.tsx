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
    <div className="flex ">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div className="ms-56 px-5 flex flex-grow flex-col overflow-hidden bg-purple-100 ">
        {/* topbar  */}
        <div className="flex justify-end  ">
          <Button
            variant="secondary"
            size="md"
            onClick={btnCllicked}
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
          <Button
            variant="primary"
            size="md"
            onClick={btnCllicked}
            text="Add Content"
            startIcon={<PlusIcon size="16" />}
          />
        </div>
        {/* card component  */}
        <div className="flex flex-wrap gap-5 mt-5 flex-grow overflow-y-scroll">
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/BAbEBe4V64k"
            type="youtube"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/BAbEBe4V64k"
            type="youtube"
          />
          <Card
            title="First tweet"
            link="https://x.com/elonmusk/status/1877053020405412042"
            type="twitter"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/BAbEBe4V64k"
            type="youtube"
          />
          <Card
            title="First tweet"
            link="https://x.com/elonmusk/status/1877053020405412042"
            type="twitter"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/BAbEBe4V64k"
            type="youtube"
          />
          <Card
            title="First tweet"
            link="https://x.com/elonmusk/status/1877053020405412042"
            type="twitter"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/BAbEBe4V64k"
            type="youtube"
          />
          <Card
            title="First tweet"
            link="https://x.com/elonmusk/status/1877053020405412042"
            type="twitter"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/BAbEBe4V64k"
            type="youtube"
          />
          <Card
            title="First tweet"
            link="https://x.com/elonmusk/status/1877053020405412042"
            type="twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
