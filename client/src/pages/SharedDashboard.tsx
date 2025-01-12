import { Button } from "../components/ui/Button";
import { PlusIcon } from "lucide-react";
import { Card } from "../components/ui/Card";
import { ShareIcon } from "../components/icon/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSharedContents } from "../apis/contentService";
import { ContentTypeFromServer } from "../types/content";
import { ShareContentModal } from "../components/ui/ShareContentModal";
import { useParams } from "react-router-dom";
export const SharedDashboard = () => {
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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { id } = useParams();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const {
    data,
    error,
    isLoading,
  }: { data?: ContentTypeFromServer[]; error?: unknown; isLoading: boolean } =
    useQuery({
      queryKey: ["shared-contents", id],
      queryFn: () => getSharedContents(id as string),
      enabled: !!id,
    });

  if (isLoading) {
    return (
      <div className="ms-56 px-5 flex flex-grow flex-col overflow-auto bg-purple-100 ">
        <div className="flex items-center justify-center h-screen">
          <div className="h-5 w-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ms-56 px-5 flex flex-grow flex-col overflow-auto bg-purple-100 ">
         <div className="flex items-center justify-center h-screen">
        <h1 className="text-center">An error occurred while fetching data.</h1>
        </div>
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
      <ShareContentModal
        isOpen={isShareModalOpen}
        onClose={closeShareModal}
        modalTitle="Share Contents"
      />
      <div className="ms-56 px-5 flex flex-grow flex-col overflow-auto bg-purple-100 ">
        {/* topbar  */}
        <div className="flex justify-end fixed right-0 me-10 flex-grow">
          <Button
            variant="secondary"
            size="md"
            onClick={openShareModal}
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
          {data && Array.isArray(data) ? (
            data?.map((content: ContentTypeFromServer) => {
              return (
                <Card
                  key={content._id}
                  content={content}
                  isContentOwner={false}
                />
              );
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
