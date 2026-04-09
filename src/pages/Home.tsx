import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Users, Clock } from "lucide-react";
import knuIcon from "@/assets/KNUICON.png";

export default function Home() {
    // 제공해 주신 테스트용 Mock 데이터입니다. 
    // mockData[0], mockData[1] 등으로 바꿔보며 4가지 케이스를 테스트할 수 있습니다.
    const mockData = [
        { 상태: "운영중", 인원: "5명" },
        { 상태: "운영 중", 인원: "13명" },
        { 상태: "운영 중", 인원: "22명" },
        { 상태: "미운영", 인원: "미운영 중 입니다." }
    ];

    // 테스트할 데이터를 여기서 고르세요: (0, 1, 2, 3)
    const currentData = mockData[3];

    // 인원수 숫자형 파싱 처리 (0 이하 무조건 0)
    let currentPeople = 0;
    // 인원 문자열에서 숫자 부분만 추출
    const parsedCount = parseInt(currentData.인원.replace(/[^0-9-]/g, ''));
    if (!isNaN(parsedCount)) {
        currentPeople = parsedCount <= 0 ? 0 : parsedCount;
    }

    // 운영 상태 불리언 파싱 (운영중, 운영 중 지원 / 미운영 제외)
    const isOpen = currentData.상태.includes("운영") && !currentData.상태.includes("미운영");

    // 혼잡도 뱃지 및 색상 로직 처리
    let statusText = "여유";
    let statusColor = "bg-emerald-500 hover:bg-emerald-600";

    if (!isOpen) {
        statusText = "-";
        statusColor = "bg-slate-400 hover:bg-slate-500";
    } else if (currentPeople >= 16) {
        statusText = "혼잡";
        statusColor = "bg-red-500 hover:bg-red-600 text-white";
    } else if (currentPeople >= 9) {
        statusText = "보통";
        statusColor = "bg-amber-400 hover:bg-amber-500 text-black";
    }

    return (
        <div className="flex flex-col h-full bg-sky-200">
            {/* 1. 헤더 영역 */}
            <header className="px-4 mt-40 mb-10">
                <Card className="relative overflow-hidden border-none shadow-md bg-linear-to-br from-sky-400 to-sky-500 py-13">
                    {/* 디자인용 빛 반사 효과 (우측 상단 원) */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center px-4">
                        <img src={knuIcon} alt="강원대 로고" className="w-[80px] drop-shadow-lg mb-3" />
                        <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md text-center">
                            강원대학교 헬스장 현황
                        </h1>
                    </div>
                </Card>
            </header>

            <main className="flex flex-col gap-4 px-4 grow">
                {/* 2. 현재 혼잡도 카드 (Progress, Badge 활용) */}
                <Card className="shadow-sm border-slate-100 bg-white/90 backdrop-blur-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl flex justify-between items-center text-slate-800">
                            <span className="flex items-center gap-2 font-bold"><Users className="w-5 h-5 text-sky-500" /> 현재 이용 현황</span>
                            <Badge className={`${statusColor} transition-colors pointer-events-none text-sm px-3 py-1 shadow-sm`}>
                                {statusText}
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end gap-2">
                            {isOpen ? (
                                <>
                                    <span className="text-4xl font-extrabold text-slate-900">{currentPeople}</span>
                                    <span className="text-sm font-medium text-slate-500 mb-1">명</span>
                                </>
                            ) : (
                                <span className="text-xl font-bold text-slate-600 my-1">{currentData.인원}</span>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* 3. 운영 정보 카드 (Alert, Badge 활용) */}
                <Card className="shadow-sm border-slate-100 bg-white/90 backdrop-blur-md text-xl">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl flex justify-between items-center text-slate-800">
                            <span className="flex items-center gap-2 font-bold"><Clock className="w-5 h-5 text-sky-500" /> 운영 정보</span>
                            {isOpen ? (
                                <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 pointer-events-none text-sm px-3 py-1">
                                    운영 중
                                </Badge>
                            ) : (
                                <Badge variant="destructive" className="pointer-events-none text-sm px-3 py-1">
                                    운영 종료
                                </Badge>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <div className="flex justify-between items-center p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                            <span className="text-slate-600 font-medium">평일 운영시간</span>
                            <span className="font-bold text-slate-900">12:00 ~ 22:00</span>
                        </div>

                        <Alert className="mt-1 bg-sky-50 border-sky-100/50 text-sky-900">
                            <Info className="h-5 w-5 text-sky-600" />
                            <AlertTitle className=" font-bold text-lg">주말 및 공휴일 휴무</AlertTitle>
                            <AlertDescription className=" text-sky-700/80 leading-relaxed mt-1.5 text-lg">
                                헬스장은 평일에만 운영됩니다. 주말과 법정 공휴일은 이용할 수 없으니 방문에 참고해 주시기 바랍니다.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </main>

            {/* 4. 푸터 영역 */}
            <footer className="mt-auto px-4 pb-8 pt-6 text-center text-lg text-slate-400 bg-gray-200">
                <p className="font-semibold mb-1 text-slate-500">KNU GYM Application</p>
                <div className="flex flex-col items-center gap-1">
                    <p>본 앱은 강원대학교 공식 애플리케이션이 아니며,</p>
                    <p>컴퓨터공학과 학생이 비공식적으로 개발·운영 중입니다.</p>
                </div>
                <p className="mt-3">건의/문의: <a href="mailto:knugym@example.com" className="underline hover:text-sky-500 transition-colors">kim10914@naver.com</a></p>
            </footer>
        </div>
    )
}