// 'use client';

// import { useState } from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import { ProfileView } from './components/profile-view';
// import { EditProfileView } from './components/edit-profile-view';
// import { useSelector } from 'react-redux';
// import { RootState } from './store/store';
// import { useRouter } from 'next/navigation';
// import { Feed } from './components/feed';
// import { Header } from './components/header';
// import PhotoGallery from './components/photo-gallery';
// import ImagePost from './image-post/page';
// import VideoGallery from './video-gallery/page';  // Import the VideoGallery component

// function ProfileContainer({ onAddPost, onChooseFile }: { onAddPost: () => void; onChooseFile: () => void }) {
//   const isEditing = useSelector((state: RootState) => state.profile.isEditing);
//   return isEditing ? (
//     <EditProfileView />
//   ) : (
//     <ProfileView onAddPost={onAddPost} onChooseFile={onChooseFile} />
//   );
// }

// export default function Page() {
//   const [activeView, setActiveView] = useState<'feed' | 'profile' | 'photoGallery' | 'videoGallery' | 'imagePost'>('feed');
//   const router = useRouter();

//   const handleAddPost = () => {
//     router.push('/initialView');
//   };

//   const handleChooseFile = () => {
//     setActiveView('photoGallery');
//   };

//   const handleFeedClick = () => {
//     setActiveView('feed');
//   };

//   const handlePhotoGalleryNext = () => {
//     setActiveView('videoGallery');
//   };

//   const handleVideoGalleryNext = () => {
//     setActiveView('imagePost');
//   };

//   return (
//     <Provider store={store}>
//       <div className="min-h-screen bg-white">
//         <Header />
//         <main className="container mx-auto max-w-4xl py-4">
//           {activeView === 'feed' && <Feed />}
//           {activeView === 'profile' && (
//             <ProfileContainer onAddPost={handleAddPost} onChooseFile={handleChooseFile} />
//           )}
//           {activeView === 'photoGallery' && <PhotoGallery onNext={handlePhotoGalleryNext} />}
//           {activeView === 'videoGallery' && <VideoGallery onNext={handleVideoGalleryNext} />}
//           {activeView === 'imagePost' && <ImagePost />}
//         </main>
//         <footer className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-md text-center">
//           {activeView !== 'feed' && (
//             <button
//               onClick={handleFeedClick}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Back to Feed
//             </button>
//           )}
//         </footer>
//       </div>
//     </Provider>
//   );
// }

"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ProfileView } from "./components/profile-view";
import { EditProfileView } from "./components/edit-profile-view";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useRouter } from "next/navigation";
import { Feed } from "./components/feed";
import { Header } from "./components/header";
import PhotoGallery from "./components/photo-gallery";
import ImagePost from "./image-post/page";
import VideoGallery from "./video-gallery/page";

interface ProfileContainerProps {
  onAddPost: () => void;
  onChooseFile: () => void;
}

function ProfileContainer({ onAddPost, onChooseFile }: ProfileContainerProps) {
  const isEditing = useSelector((state: RootState) => state.profile.isEditing);
  return isEditing ? (
    <EditProfileView />
  ) : (
    <ProfileView onAddPost={onAddPost} onChooseFile={onChooseFile} />
  );
}

export default function Page() {
  const [activeView, setActiveView] = useState<
    "feed" | "profile" | "photoGallery" | "videoGallery" | "imagePost"
  >("feed");
  const router = useRouter();

  const handleAddPost = () => {
    router.push("/initialView");
  };

  const handleChooseFile = () => {
    setActiveView("photoGallery");
  };

  const handleFeedClick = () => {
    setActiveView("feed");
  };

  const handlePhotoGalleryNext = () => {
    setActiveView("videoGallery");
  };

  const handleVideoGalleryNext = () => {
    setActiveView("imagePost");
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto max-w-4xl py-4">
          {activeView === "feed" && <Feed />}
          {activeView === "profile" && (
            <ProfileContainer
              onAddPost={handleAddPost}
              onChooseFile={handleChooseFile}
            />
          )}
          {activeView === "photoGallery" && (
            <PhotoGallery onNext={handlePhotoGalleryNext} />
          )}
          {activeView === "videoGallery" && (
            <VideoGallery onNext={handleVideoGalleryNext} />
          )}
          {activeView === "imagePost" && <ImagePost />}
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-md text-center">
          {activeView !== "feed" && (
            <button
              onClick={handleFeedClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Back to Feed
            </button>
          )}
        </footer>
      </div>
    </Provider>
  );
}
