import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | NANSA",
};

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold mb-2">이용약관</h1>
        <p className="text-sm text-muted-foreground mb-12">
          시행일: 2025년 1월 1일 · 최종 수정: 2026년 3월 1일
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          {/* 제1장 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제1장 총칙</h2>

            <div className="space-y-3">
              <h3 className="font-semibold">제1조 (목적)</h3>
              <p className="text-muted-foreground">
                이 약관은 NANSA(이하 &quot;회사&quot;)가 운영하는 AI 기반 커리어 매칭 플랫폼
                &quot;NANSA&quot;(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의
                권리·의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제2조 (정의)</h3>
              <p className="text-muted-foreground">
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  &quot;서비스&quot;란 회사가 제공하는 AI 기반 채용 정보 매칭, 이력서 작성, 커리어
                  상담, 포트폴리오 관리 등 일체의 서비스를 의미합니다.
                </li>
                <li>
                  &quot;이용자&quot;란 이 약관에 동의하고 서비스를 이용하는 개인을 의미합니다.
                </li>
                <li>
                  &quot;회원&quot;이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 서비스를
                  지속적으로 이용할 수 있는 자를 의미합니다.
                </li>
                <li>
                  &quot;AI 에이전트&quot;란 회사가 인공지능 기술을 활용하여 회원의 커리어 정보를
                  분석하고 적합한 채용 공고를 자동으로 매칭·추천하는 자동화 시스템을 의미합니다.
                </li>
                <li>
                  &quot;이력서&quot;란 회원이 서비스 내에서 작성·저장하는 경력, 학력, 기술 스택 등
                  직업 관련 정보를 담은 문서를 의미합니다.
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제3조 (약관의 효력 및 변경)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  이 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력이
                  발생합니다.
                </li>
                <li>
                  회사는 합리적인 사유가 발생할 경우 「약관의 규제에 관한 법률」 등 관련 법령을
                  위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.
                </li>
                <li>
                  약관이 변경되는 경우, 회사는 변경 사항을 시행일 7일 전부터 서비스 내 공지사항 또는
                  이메일을 통해 공지합니다. 단, 이용자에게 불리한 변경의 경우 30일 전부터
                  공지합니다.
                </li>
                <li>
                  공지 후에도 계속 서비스를 이용하는 경우, 변경된 약관에 동의한 것으로 간주합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제2장 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제2장 서비스 이용</h2>

            <div className="space-y-3">
              <h3 className="font-semibold">제4조 (이용계약의 성립)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  이용계약은 이용자가 이 약관에 동의하고 회원가입을 신청한 후, 회사가 이를
                  승낙함으로써 성립됩니다.
                </li>
                <li>
                  회사는 다음 각 호에 해당하는 경우 회원가입 신청을 거절하거나 사후에 이용계약을
                  해지할 수 있습니다.
                  <ul className="list-disc list-inside mt-1 pl-4 space-y-1">
                    <li>타인의 정보를 도용하거나 허위 정보를 기재한 경우</li>
                    <li>만 14세 미만인 경우</li>
                    <li>이전에 서비스 이용 정지·제한을 받은 이력이 있는 경우</li>
                    <li>기타 서비스 운영상 부적절하다고 판단되는 경우</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제5조 (서비스의 제공)</h3>
              <p className="text-muted-foreground">회사는 다음과 같은 서비스를 제공합니다.</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>AI 기반 채용 공고 매칭 및 추천</li>
                <li>이력서 작성 및 관리</li>
                <li>포트폴리오 작성 및 관리</li>
                <li>커리어 상담 및 멘토 연결</li>
                <li>기업 정보 및 채용 공고 열람</li>
                <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제6조 (서비스 이용 시간)</h3>
              <p className="text-muted-foreground">
                서비스는 원칙적으로 연중무휴, 24시간 제공됩니다. 단, 시스템 점검, 서버 장애,
                천재지변 등 불가피한 사유로 일시 중단될 수 있으며, 이 경우 사전에 공지합니다.
              </p>
            </div>
          </section>

          {/* 제3장 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제3장 AI 서비스 관련 사항</h2>

            <div className="space-y-3">
              <h3 className="font-semibold">제7조 (AI 매칭 서비스)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  회사의 AI 에이전트는 회원이 등록한 이력서, 기술 스택, 커리어 목표 등을 분석하여
                  최적의 채용 공고를 자동으로 매칭·추천합니다.
                </li>
                <li>
                  AI 매칭 결과는 참고 자료이며, 최종 지원 결정은 회원 본인이 직접 판단하여야 합니다.
                </li>
                <li>
                  AI 에이전트의 추천이 회원의 채용을 보장하지 않으며, 회사는 AI 매칭 결과의 정확성에
                  대해 법적 책임을 지지 않습니다.
                </li>
                <li>
                  회원은 AI 서비스 개선을 위해 자신의 서비스 이용 데이터가 활용될 수 있음에
                  동의합니다. 단, 개인정보처리방침에 따라 익명화 처리됩니다.
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제8조 (자동화된 의사결정)</h3>
              <p className="text-muted-foreground">
                회원은 자동화된 AI 의사결정에만 의존하지 않을 권리가 있으며, 필요한 경우 인적 검토를
                요청할 수 있습니다. 관련 문의는 고객지원 이메일로 접수해 주시기 바랍니다.
              </p>
            </div>
          </section>

          {/* 제4장 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제4장 회원의 의무</h2>

            <div className="space-y-3">
              <h3 className="font-semibold">제9조 (회원의 의무)</h3>
              <p className="text-muted-foreground">
                회원은 다음 각 호의 행위를 하여서는 안 됩니다.
              </p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>타인의 정보 도용 또는 허위 정보 등록</li>
                <li>서비스 내 정보의 무단 수집, 크롤링, 스크래핑</li>
                <li>서비스의 정상적인 운영을 방해하는 행위</li>
                <li>회사의 사전 승낙 없이 서비스를 이용한 영리 목적 활동</li>
                <li>타인의 명예를 훼손하거나 불이익을 주는 행위</li>
                <li>음란물, 혐오 표현 등 불법·유해 콘텐츠 게시</li>
                <li>관련 법령 및 이 약관을 위반하는 기타 행위</li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제10조 (계정 관리)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>회원은 계정(이메일 및 비밀번호)을 스스로 관리할 책임이 있습니다.</li>
                <li>계정의 부정 사용을 인지한 경우 즉시 회사에 통보하여야 합니다.</li>
                <li>
                  회원 본인의 부주의로 인한 계정 도용 피해에 대해 회사는 책임을 지지 않습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제5장 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제5장 지식재산권 및 면책</h2>

            <div className="space-y-3">
              <h3 className="font-semibold">제11조 (지식재산권)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  서비스에 포함된 소프트웨어, 디자인, 텍스트, 로고 등 모든 지식재산권은 회사에
                  귀속됩니다.
                </li>
                <li>
                  회원이 서비스 내에 작성·등록한 이력서, 포트폴리오 등 콘텐츠의 저작권은 해당
                  회원에게 있습니다. 다만, 회원은 서비스 운영을 위한 목적으로 회사가 해당 콘텐츠를
                  사용할 수 있도록 비독점적 이용 권한을 회사에 부여합니다.
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제12조 (면책조항)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  회사는 천재지변, 전쟁, 해킹 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지
                  않습니다.
                </li>
                <li>
                  회사는 회원 상호 간 또는 회원과 제3자 간에 발생한 분쟁에 개입할 의무가 없습니다.
                </li>
                <li>
                  AI 매칭 결과 및 커리어 상담 내용은 정보 제공 목적이며, 구체적인 채용 결과를
                  보장하지 않습니다.
                </li>
                <li>
                  서비스 내 연결된 외부 링크(기업 채용 페이지 등)의 내용에 대해 회사는 책임지지
                  않습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제6장 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">제6장 기타</h2>

            <div className="space-y-3">
              <h3 className="font-semibold">제13조 (서비스 이용 제한)</h3>
              <p className="text-muted-foreground">
                회사는 회원이 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우,
                경고·일시정지·영구이용정지 등의 조치를 취할 수 있습니다.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제14조 (준거법 및 관할법원)</h3>
              <p className="text-muted-foreground">
                이 약관의 해석 및 회사와 회원 간의 분쟁에 관해서는 대한민국 법률을 준거법으로 하며,
                분쟁이 발생할 경우 회사의 주소지를 관할하는 법원을 전속 관할 법원으로 합니다.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">제15조 (문의)</h3>
              <p className="text-muted-foreground">
                이용약관과 관련한 문의사항은 아래 연락처로 접수해 주시기 바랍니다.
              </p>
              <ul className="list-none space-y-1 text-muted-foreground pl-2">
                <li>이메일: support@nansa.com</li>
                <li>운영시간: 평일 10:00 ~ 18:00 (공휴일 제외)</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 text-xs text-muted-foreground">
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            개인정보처리방침
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
