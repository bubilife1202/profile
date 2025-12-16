import {
  Zap,
  Download,
  Sparkles,
  Play,
  Monitor,
  Gift,
  Check,
  ExternalLink,
  Target,
  Brain,
  FileText,
  TrendingUp,
  Clock,
  MessageCircle,
  ArrowRight
} from 'lucide-react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      {/* ========== HERO ========== */}
      <section className="section min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center w-full">

          <h1 className="animate-in delay-1 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            유튜브, 아직도 <span className="gradient-text">'감'</span>으로 하시나요?
            <br />
            이제 <span className="text-blue-400">'데이터'</span>로 승부하세요.
          </h1>

          <p className="animate-in delay-2 text-base sm:text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
            매달 나가는 유료 툴 비용은 그만.
            <br />
            단 한 번의 결제로 평생 쓰는 분석 도구와 떡상 데이터를 드립니다.
          </p>

          <div className="animate-in delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#products" className="btn btn-lg btn-primary">
              평생 소장 툴 구매하기
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://youtube-search-viewer.nomadlab.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-secondary"
            >
              무료 체험판 써보기
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="animate-in delay-4">
            <span className="badge badge-amber">
              <Zap className="w-3.5 h-3.5" />
              하루 선착순 100명 무료 체험 가능
            </span>
          </div>

        </div>
      </section>

      {/* ========== VIDEOS ========== */}
      <section className="section">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">
              <Play className="w-3.5 h-3.5" />
              실제 시연
            </span>
            <h2 className="section-title">백문이 불여일견</h2>
            <p className="section-desc">직접 눈으로 확인하세요</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="card">
              <div className="flex items-center gap-3 mb-5">
                <div className="feature-icon bg-orange-500/10">
                  <Play className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">'이거 진짜 되나요?'</p>
                  <p className="text-xs text-zinc-500">시연 영상</p>
                </div>
              </div>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/qXkAfQcuUwI"
                  title="시연 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-5">
                <div className="feature-icon bg-blue-500/10">
                  <Monitor className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">프로그램 실제 작동</p>
                  <p className="text-xs text-zinc-500">작동 화면</p>
                </div>
              </div>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/ldjVFdfpr8g"
                  title="프로그램 작동 화면"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ========== PRODUCTS ========== */}
      <section id="products" className="section">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <span className="badge badge-purple mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              프리미엄 솔루션
            </span>
            <h2 className="section-title">입문자부터 전문가까지</h2>
            <p className="section-desc">나에게 맞는 단계별 솔루션을 선택하세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* FREE */}
            <div className="card flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="feature-icon w-12 h-12 rounded-xl bg-emerald-500/10">
                  <Gift className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="badge badge-emerald">입문용</span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-left">무료 데이터 맛보기</h3>

              <div className="flex items-baseline gap-2 mb-4 text-left">
                <span className="price text-emerald-400">0원</span>
                <span className="price-old">19,000원</span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 text-left leading-relaxed">
                12월 유튜브 떡상 영상 30개를 무료로 확인하고 감을 잡으세요.
              </p>

              <ul className="feature-list mb-8 flex-grow text-left">
                <li className="feature-item">
                  <div className="feature-icon bg-emerald-500/10">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  12월 떡상 영상 30개
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-emerald-500/10">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  엑셀 파일 즉시 다운로드
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-emerald-500/10">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  비용 부담 0원
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/XdbLaGW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-outline-emerald w-full"
              >
                <Download className="w-4 h-4" />
                무료 다운로드
              </a>
            </div>

            {/* BEST */}
            <div className="card card-best flex flex-col h-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold">
                BEST
              </div>

              <div className="flex items-center justify-between mb-6 mt-2">
                <div className="feature-icon w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <span className="badge badge-purple">가성비 끝판왕</span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-left">블루오션 키워드 파인더</h3>

              <div className="flex items-baseline gap-2 mb-4 text-left">
                <span className="price gradient-text">39,900원</span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 text-left leading-relaxed">
                매달 결제 NO. 프로그램 하나 값으로 평생 소장하는 가성비 끝판왕.
              </p>

              <ul className="feature-list mb-8 flex-grow text-left">
                <li className="feature-item">
                  <div className="feature-icon bg-yellow-500/10">
                    <Check className="w-3 h-3 text-yellow-400" />
                  </div>
                  키워드 채굴기(Windows) 영구소장
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  '빈집(꿀통)' 자동 발굴
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-purple-500/10">
                    <Check className="w-3 h-3 text-purple-400" />
                  </div>
                  12월 떡상 데이터 232개
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-pink-500/10">
                    <Check className="w-3 h-3 text-pink-400" />
                  </div>
                  AI 심층 분석집
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/aeYrvgz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-primary w-full"
              >
                평생 소장하기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* PRO */}
            <div className="card flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="feature-icon w-12 h-12 rounded-xl bg-blue-500/10">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <span className="badge badge-blue">PRO</span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-left">AI 쇼츠 레이더 PRO</h3>

              <div className="flex items-baseline gap-2 mb-4 text-left">
                <span className="price text-blue-400">299,000원</span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 text-left leading-relaxed">
                직원 3명 몫을 혼자 처리합니다. 월 900만원 아끼는 자동화 솔루션.
              </p>

              <ul className="feature-list mb-8 flex-grow text-left">
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Brain className="w-3 h-3 text-blue-400" />
                  </div>
                  AI 실시간 트렌드 감지
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <FileText className="w-3 h-3 text-blue-400" />
                  </div>
                  떡상 족보 752개 파일 무료 증정
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Clock className="w-3 h-3 text-blue-400" />
                  </div>
                  1초 만에 대본 생성
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <TrendingUp className="w-3 h-3 text-blue-400" />
                  </div>
                  업데이트 평생 무료
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/0LVLXwr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-outline-blue w-full"
              >
                <Sparkles className="w-4 h-4" />
                솔루션 도입하기
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========== ADDITIONAL ========== */}
      <section className="section py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <p className="text-zinc-300 mb-4">
              아직 AI 솔루션은 부담스럽고, 대본 작성만 필요하신가요?
            </p>
            <a
              href="https://litt.ly/reels_code_official/sale/4CvCp94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
            >
              족보 752개 + 대본 완성 툴 (199,000원) 보러가기
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ========== FOOTER ========== */}
      <footer className="section py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">

          <h3 className="text-xl sm:text-2xl font-bold mb-8">궁금한 점이 있으신가요?</h3>

          <a
            href="https://open.kakao.com/o/sTYC6FOh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-[#FEE500] text-[#191919] hover:bg-[#FDD835] border-none"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡 1:1 문의하기
          </a>

          <p className="mt-12 text-sm text-zinc-600">
            © 2025 Reels Code. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  )
}

export default App
