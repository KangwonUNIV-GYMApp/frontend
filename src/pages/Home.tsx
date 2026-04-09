import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CongestionCard from "@/components/home/CongestionCard";
import OperationInfoCard from "@/components/home/OperationInfoCard";

export default function Home() {
    // 제공해 주신 테스트용 Mock 데이터입니다. 
    // mockData[0], mockData[1] 등으로 바꿔보며 4가지 케이스를 테스트할 수 있습니다.
    const mockData = [
        { state: "운영중", peopleNumber: "5명" },
        { state: "운영 중", peopleNumber: "13명" },
        { state: "운영 중", peopleNumber: "22명" },
        { state: "미운영", peopleNumber: "미운영 중 입니다." }
    ];

    // 테스트할 데이터를 여기서 고르세요: (0, 1, 2, 3)
    const currentData = mockData[3];

    // 인원수 숫자형 파싱 처리 (0 이하 무조건 0)
    let currentPeople = 0;
    // 인원 문자열에서 숫자 부분만 추출
    const parsedCount = parseInt(currentData.peopleNumber.replace(/[^0-9-]/g, ''));
    if (!isNaN(parsedCount)) {
        currentPeople = parsedCount <= 0 ? 0 : parsedCount;
    }

    // 운영 상태 불리언 파싱 (운영중, 운영 중 지원 / 미운영 제외)
    const isOpen = currentData.state.includes("운영") && !currentData.state.includes("미운영");

    return (
        <div className="flex flex-col h-full bg-sky-200">
            {/* 1. 공통 헤더 */}
            <Header />

            <main className="flex flex-col gap-4 px-4 grow">
                {/* 2. 혼잡도 카드 */}
                <CongestionCard
                    isOpen={isOpen}
                    currentPeople={currentPeople}
                    rawCountText={currentData.peopleNumber}
                />

                {/* 3. 운영 정보 카드 */}
                <OperationInfoCard isOpen={isOpen} />
            </main>

            {/* 4. 공통 푸터 */}
            <Footer />
        </div>
    )
}