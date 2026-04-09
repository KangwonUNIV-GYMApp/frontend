import { Card } from "@/components/ui/card";
import knuIcon from "@/assets/KNUICON.png";

export default function Home() {
    return (
        <div className="bg-sky-300">
            <header>
                <Card className="items-center bg-sky-300">
                    <div className="flex gap-10 items-center">
                        <img src={knuIcon} alt="강원대 로고" className="w-10 h-10" />
                        <div className="font-bold text-white text-3xl">강원대학교 헬스장 현황</div>
                    </div>
                </Card>
            </header>
            <main>
                <div>
                    <p>현재 헬스장 이용자 수</p>
                    <p>00명(0명 이하는 무조건 0으로 표기) (초록(~8명), 노랑(~15명), 빨강(16명~))</p>
                </div>
                <div>
                    <p>헬스장 운영 중 / 헬스장 닫힘</p>
                    <p>헬스장 오픈 시간</p>
                    <p>12:00 ~ 22:00</p>
                    <p>헬스장은 주말과 공휴일은 쉽니다.</p>
                </div>
            </main>
            <footer>
                <p>강원대학교 헬스장 어플리케이션</p>
                <p>본 어플리케이션은 공식이 아니며, 컴퓨터공학과 학생이 비공식적으로 제작한 어플리케이션입니다.</p>
                <p>문의: [EMAIL_ADDRESS]</p>
            </footer>

        </div>
    )
}