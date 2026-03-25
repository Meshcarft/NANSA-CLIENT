import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | NANSA",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← NANSA 홈으로
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2">개인정보처리방침</h1>
        <p className="text-sm text-muted-foreground mb-12">
          시행일: 2025년 1월 1일 · 최종 수정: 2026년 3월 1일
        </p>

        <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
          NANSA(이하 &quot;회사&quot;)는 「개인정보 보호법」 및 관련 법령을 준수하며, 이용자의
          개인정보를 소중히 보호합니다. 이 개인정보처리방침은 회사가 수집·이용·보관·파기하는
          개인정보의 처리 방법에 대해 안내합니다.
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          {/* 제1조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              제1조 (수집하는 개인정보 항목)
            </h2>
            <p className="text-muted-foreground">
              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">① 회원가입 시 (필수)</h3>
                <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-1">
                  <li>이름, 이메일 주소, 비밀번호</li>
                  <li>이용약관 및 개인정보처리방침 동의 여부</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">② 소셜 로그인 시 (Google·Kakao)</h3>
                <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-1">
                  <li>이름, 이메일 주소, 프로필 사진 (각 플랫폼에서 제공하는 공개 정보)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">③ 이력서 작성 시 (선택)</h3>
                <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-1">
                  <li>연락처(전화번호), 자기소개, 경력 사항(회사명, 직책, 근무기간, 업무 내용)</li>
                  <li>학력 사항(학교명, 전공, 학위, 재학기간)</li>
                  <li>프로젝트, 자격증, 수상 내역, 활동 사항</li>
                  <li>포트폴리오 URL, GitHub 링크 등 외부 링크</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">④ 서비스 이용 과정에서 자동 수집</h3>
                <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-1">
                  <li>IP 주소, 접속 일시, 서비스 이용 기록, 기기 및 브라우저 정보</li>
                  <li>쿠키(Cookie) 및 유사 기술을 통해 수집되는 정보</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 제2조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              제2조 (개인정보의 수집 및 이용목적)
            </h2>
            <p className="text-muted-foreground">
              회사는 수집한 개인정보를 다음의 목적으로 이용합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-muted-foreground">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground whitespace-nowrap">
                      이용 목적
                    </th>
                    <th className="text-left py-2 font-semibold text-foreground">수집 항목</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4 whitespace-nowrap align-top">회원 가입 및 관리</td>
                    <td className="py-2 align-top">이름, 이메일, 비밀번호</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 whitespace-nowrap align-top">AI 채용 매칭 서비스</td>
                    <td className="py-2 align-top">이력서 전체 정보, 서비스 이용 기록</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 whitespace-nowrap align-top">커리어 상담 제공</td>
                    <td className="py-2 align-top">이름, 이메일, 이력서 정보</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 whitespace-nowrap align-top">서비스 개선 및 통계</td>
                    <td className="py-2 align-top">접속 기록, 이용 기록 (익명화 처리)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 whitespace-nowrap align-top">공지사항 및 안내 발송</td>
                    <td className="py-2 align-top">이름, 이메일</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 whitespace-nowrap align-top">부정이용 방지 및 보안</td>
                    <td className="py-2 align-top">IP 주소, 기기 정보, 접속 일시</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 제3조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              제3조 (개인정보의 보유 및 이용기간)
            </h2>
            <p className="text-muted-foreground">
              회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              단, 다음의 경우에는 일정 기간 보유합니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-2">
              <li>
                회원 탈퇴 후: 부정이용 방지를 위해 탈퇴일로부터{" "}
                <strong className="text-foreground">30일</strong> 보유 후 파기
              </li>
              <li>
                전자상거래 등에서의 소비자 보호에 관한 법률에 따른 계약 또는 청약철회 기록:{" "}
                <strong className="text-foreground">5년</strong>
              </li>
              <li>
                소비자의 불만 또는 분쟁처리에 관한 기록:{" "}
                <strong className="text-foreground">3년</strong>
              </li>
              <li>
                접속 로그 기록: <strong className="text-foreground">3개월</strong> (통신비밀보호법)
              </li>
            </ul>
          </section>

          {/* 제4조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제4조 (개인정보의 제3자 제공)</h2>
            <p className="text-muted-foreground">
              회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는
              예외로 합니다.
            </p>
            <ol className="list-decimal list-inside text-muted-foreground pl-2 space-y-1">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나 수사기관의 요청이 있는 경우</li>
              <li>
                이용자가 직접 채용 공고에 지원하여 기업에게 이력서 정보를 제공하는 경우 (제공 전
                별도 고지 및 동의)
              </li>
            </ol>
          </section>

          {/* 제5조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제5조 (개인정보 처리 위탁)</h2>
            <p className="text-muted-foreground">
              회사는 서비스 운영을 위해 아래와 같이 개인정보 처리를 외부에 위탁할 수 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-muted-foreground">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">수탁 업체</th>
                    <th className="text-left py-2 font-semibold text-foreground">위탁 업무</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4 align-top">Google LLC</td>
                    <td className="py-2 align-top">소셜 로그인 인증, 클라우드 인프라 운영</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Kakao Corp.</td>
                    <td className="py-2 align-top">소셜 로그인 인증</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-xs">
              * 수탁 업체 및 위탁 업무가 변경될 경우 이 방침을 통해 사전 공지합니다.
            </p>
          </section>

          {/* 제6조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제6조 (정보주체의 권리·의무)</h2>
            <p className="text-muted-foreground">
              이용자는 언제든지 다음의 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-1">
              <li>개인정보 열람 요청</li>
              <li>개인정보 정정·삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
              <li>개인정보 이동 요청 (데이터 이동권)</li>
            </ul>
            <p className="text-muted-foreground">
              권리 행사는 서비스 내 &apos;설정 &gt; 계정 관리&apos; 메뉴 또는
              이메일(support@nansa.com)을 통해 신청하실 수 있으며, 회사는 지체 없이 조치합니다.
            </p>
          </section>

          {/* 제7조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제7조 (쿠키의 사용)</h2>
            <ol className="list-decimal list-inside text-muted-foreground pl-2 space-y-2">
              <li>
                회사는 서비스 이용 편의를 위해 쿠키를 사용합니다. 쿠키는 웹사이트가 사용자의
                브라우저에 저장하는 소량의 데이터로, 로그인 상태 유지, 설정 저장 등에 활용됩니다.
              </li>
              <li>
                이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 서비스 일부 기능
                이용이 제한될 수 있습니다.
              </li>
            </ol>
          </section>

          {/* 제8조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              제8조 (개인정보의 안전성 확보 조치)
            </h2>
            <p className="text-muted-foreground">
              회사는 개인정보 보호를 위해 다음과 같은 조치를 취합니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground pl-2 space-y-1">
              <li>비밀번호 암호화 저장(단방향 해시)</li>
              <li>전송 구간 암호화(TLS/HTTPS)</li>
              <li>개인정보 접근 권한의 최소화 및 접근 로그 관리</li>
              <li>악성코드 방지 시스템 운영</li>
              <li>개인정보 처리 직원 대상 정기 교육</li>
            </ul>
          </section>

          {/* 제9조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제9조 (개인정보 보호책임자)</h2>
            <p className="text-muted-foreground">
              회사는 개인정보 처리에 관한 업무를 총괄하고 관련 불만·피해 구제를 위해 개인정보
              보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-none text-muted-foreground pl-2 space-y-1">
              <li>성명: NANSA 개인정보 보호팀</li>
              <li>이메일: privacy@nansa.com</li>
              <li>운영시간: 평일 10:00 ~ 18:00 (공휴일 제외)</li>
            </ul>
            <p className="text-muted-foreground text-xs">
              개인정보 침해 신고 및 상담은 개인정보보호위원회(privacy.go.kr, ☎ 118)에도 문의하실 수
              있습니다.
            </p>
          </section>

          {/* 제10조 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              제10조 (개인정보처리방침의 변경)
            </h2>
            <p className="text-muted-foreground">
              이 방침은 법령 및 내부 정책 변경에 따라 수정될 수 있습니다. 변경 시 시행 7일 전 서비스
              내 공지사항 또는 이메일을 통해 공지합니다. 이용자에게 불리한 변경의 경우 30일 전
              공지합니다.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 text-xs text-muted-foreground">
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            이용약관
          </Link>
          <Link
            href="/signup"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            회원가입으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
