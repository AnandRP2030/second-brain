import { Button } from "../components/ui/Button";
import { PlusIcon } from "lucide-react";
import { Card } from "../components/ui/Card";
import { ShareIcon } from "../components/icon/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useState } from "react";

export const Dashboard = () => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const btnCllicked = () => {
    alert("clicked");
  };
  return (
    <>
      <CreateContentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalTitle="Save Content"
      />
      <div className="flex ">
        <div className="flex-shrink-0 ">
          <Sidebar />
        </div>
        <div className="ms-56 px-5 flex flex-grow flex-col overflow-auto bg-purple-100 ">
          {/* topbar  */}
          <div className="flex justify-end fixed right-0 me-10 flex-grow">
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
              onClick={openModal}
              text="Add Content"
              startIcon={<PlusIcon size="16" />}
            />
          </div>
          {/* card component  */}
          <div className="flex flex-wrap gap-5  flex-grow overflow-y-scroll mt-20">
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
    </>
  );
}


