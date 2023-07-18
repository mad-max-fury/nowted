import React from "react";
import NoteList from "../../components/modules/dashboard/noteList";
import ViewNote from "../../components/modules/dashboard/viewNote";

const Home = () => {
  return (
    <div className="flex w-full">
      <NoteList />
      <ViewNote />
    </div>
  );
};

export default Home;
