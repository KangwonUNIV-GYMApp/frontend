import { RouterProvider } from "react-router-dom";
import router from "@/router";

import { useEffect, useState } from "react";
import Spinner from "./components/ui/Spinner";

export default function App() {
  // return <RouterProvider router={router} />;
  const [isLoading, setIsLoading] = useState(true);
  // 예시: 3초 뒤에 로딩이 끝나도록 설정해 봅니다.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">스피너 테스트 화면</h1>

      {/* 로딩 중일 때(isLoading이 true) 스피너를 보여주고, 끝나면 완료 메시지를 보여줍니다 */}
      {isLoading ? (
        // 크기와 색상을 프롭스로 다양하게 테스트해 볼 수 있습니다.
        <Spinner size={15} color="#897878" />
      ) : (
        <p className="text-green-500 font-bold">데이터 로딩 완료!</p>
      )}
    </div>
  );
}