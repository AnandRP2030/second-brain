import { Button } from "../components/ui/Button";
import { PlusIcon } from "lucide-react";
import { Card } from "../components/ui/Card";
import { ShareIcon } from "../components/icon/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserContents } from "../apis/contentService";
import { ContentTypeFromServer } from "../types/content";

export const Dashboard = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <MainSection />
      </div>
    </>
  );
};

export const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const btnCllicked = () => {
    alert("clicked");
  };

  const {
    data: contents,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["contents"],
    queryFn: getUserContents,
  });
  console.log("conten", contents);

  if (isLoading) {
    return (
      <div className="ms-56 px-5 flex flex-grow flex-col overflow-auto bg-purple-100 ">
        <h1 className="text-center"> Loading..</h1>
      </div>
    );
  }

  return (
    <>
      <CreateContentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalTitle="Save Content"
      />
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
          {contents ? (
            contents.map((content: ContentTypeFromServer) => {
              return <Card key={content._id} content={content} />;
            })
          ) : (
            <div>
              <h2> No Contents</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
