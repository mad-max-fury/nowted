import { useIsFetching, useIsMutating } from "@tanstack/react-query";

export default function Loader() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  if (!isFetching && !isMutating) return null;

  return (
    <div className="flex justify-center absolute top-0 left-0 bottom-0 right-0 items-center h-screen bg-[#181818] z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
}
