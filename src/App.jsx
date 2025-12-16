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
  ArrowRight,
  Package
} from 'lucide-react'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Gradient Background */}
      <div className="gradient-bg">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
      </div>

      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="container">
          <div className="text-center content-max">
            <h1 className="animate-fade-in delay-1 heading-hero mb-6 md:mb-8">
              유튜브, 아직도 <span className="gradient-text">'감'</span>으로 하시나요?
              <br />
              이제 <span className="text-blue-400">'데이터'</span>로 승부하세요.
            </h1>

            <p className="animate-fade-in delay-2 text-body-lg mb-12 md:mb-14">
              매달 나가는 유료 툴 비용은 그만.
              <br />
              단 한 번의 결제로 평생 쓰는 분석 도구와 떡상 데이터를 드립니다.
            </p>

            <div className="animate-fade-in delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-12">
              <a href="#products" className="btn btn-xl btn-primary">
                평생 소장 툴 구매하기
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://youtube-search-viewer.nomadlab.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xl btn-secondary"
              >
                무료 체험판 써보기
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="animate-fade-in delay-4">
              <span className="badge badge-amber">
                <Zap className="w-4 h-4" />
                하루 선착순 100명 무료 체험 가능
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDEOS ==================== */}
      <section className="section">
        <div className="container">
          <div className="section-header content-max">
            <span className="badge badge-blue mb-4 md:mb-6">
              <Play className="w-4 h-4" />
              실제 시연
            </span>
            <h2 className="heading-section mb-3 md:mb-4">백문이 불여일견</h2>
            <p className="text-body-lg">직접 눈으로 확인하세요</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            <div className="card">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="feature-icon w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500/10">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">블루오션 키워드 발굴 시연</p>
                  <p className="text-xs md:text-sm text-zinc-500">시연 영상</p>
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
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="feature-icon w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10">
                  <Monitor className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">AI 대본 생성 실제 구동 화면</p>
                  <p className="text-xs md:text-sm text-zinc-500">작동 화면</p>
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

      {/* ==================== PRODUCTS ==================== */}
      <section id="products" className="section">
        <div className="container">
          <div className="section-header content-max">
            <h2 className="heading-section mb-3 md:mb-4">입문자부터 전문가까지</h2>
            <p className="text-body-lg">나에게 맞는 단계별 솔루션을 선택하세요</p>
          </div>

          <div className="product-grid">
            {/* ===== 39,900원 - 블루오션 키워드 파인더 ===== */}
            <div className="card product-card">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="feature-icon w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-500/10">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-zinc-400" />
                </div>
                <span className="badge">입문용</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">블루오션 키워드 파인더</h3>

              <div className="flex items-baseline gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="price text-white">39,900원</span>
                <span className="text-sm text-zinc-500">평생 소장</span>
              </div>

              <p className="text-sm md:text-base text-zinc-400 mb-6 md:mb-8 leading-relaxed">
                매달 결제 NO. 프로그램 하나 값으로 평생 소장하는 가성비 끝판왕.
              </p>

              <ul className="feature-list mb-8 md:mb-10 flex-grow">
                <li className="feature-item">
                  <div className="feature-icon bg-cyan-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-zinc-300">키워드 채굴기(Windows) 영구소장</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-cyan-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-zinc-300">'빈집(꿀통)' 자동 발굴</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-cyan-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-zinc-300">12월 떡상 데이터 232개</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-cyan-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-zinc-300">AI 심층 분석집</span>
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/aeYrvgz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-secondary w-full mt-auto"
              >
                39,900원에 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* ===== 199,000원 - 올인원 대본 패키지 (BEST) ===== */}
            <div className="card card-featured product-card relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="badge badge-best">BEST</span>
              </div>

              <div className="flex items-center justify-between mb-6 md:mb-8 mt-2">
                <div className="feature-icon w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Package className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
                </div>
                <span className="badge badge-purple">MD 추천</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">올인원 대본 패키지</h3>

              <div className="flex items-baseline gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="price gradient-text">199,000원</span>
                <span className="text-sm text-zinc-500">평생 소장</span>
              </div>

              <p className="text-sm md:text-base text-zinc-400 mb-6 md:mb-8 leading-relaxed">
                대본 작성부터 트렌드 분석까지. 콘텐츠 제작에 필요한 모든 것.
              </p>

              <ul className="feature-list mb-8 md:mb-10 flex-grow">
                <li className="feature-item">
                  <div className="feature-icon bg-yellow-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-zinc-200 font-medium">떡상 족보 데이터 752개</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-yellow-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-zinc-200 font-medium">대본 자동 완성 툴 제공</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-yellow-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-zinc-200 font-medium">트렌드 키워드 분석집</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-yellow-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-zinc-200 font-medium">업데이트 평생 무료</span>
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/4CvCp94"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-primary w-full mt-auto"
              >
                199,000원에 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* ===== 299,000원 - AI 쇼츠 레이더 PRO ===== */}
            <div className="card product-card">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="feature-icon w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                </div>
                <span className="badge badge-blue">PRO</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">AI 쇼츠 레이더 PRO</h3>

              <div className="flex items-baseline gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="price text-blue-400">299,000원</span>
                <span className="text-sm text-zinc-500">평생 소장</span>
              </div>

              <p className="text-sm md:text-base text-zinc-400 mb-6 md:mb-8 leading-relaxed">
                직원 3명 몫을 혼자 처리합니다. 월 900만원 아끼는 자동화 솔루션.
              </p>

              <ul className="feature-list mb-8 md:mb-10 flex-grow">
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                  </div>
                  <span className="text-zinc-300">AI 실시간 트렌드 감지</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                  </div>
                  <span className="text-zinc-300">떡상 족보 752개 파일 무료 증정</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                  </div>
                  <span className="text-zinc-300">1초 만에 대본 생성</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-blue-500/10">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                  </div>
                  <span className="text-zinc-300">업데이트 평생 무료</span>
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/0LVLXwr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-secondary w-full mt-auto"
              >
                299,000원에 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ===== 무료 체험 배너 ===== */}
          <div className="mt-10 md:mt-14 text-center">
            <a
              href="https://litt.ly/reels_code_official/sale/XdbLaGW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
            >
              <Gift className="w-4 h-4" />
              <span>아직 고민되시나요?</span>
              <span className="text-cyan-400 group-hover:text-cyan-300 font-medium">
                무료 체험판 데이터 먼저 받아보기
              </span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ==================== FOOTER ==================== */}
      <footer className="section py-12 md:py-20">
        <div className="container">
          <div className="text-center content-max">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-10">
              궁금한 점이 있으신가요?
            </h3>

            <a
              href="https://open.kakao.com/o/sTYC6FOh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xl btn-kakao"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 1:1 문의하기
            </a>

            <p className="mt-12 md:mt-16 text-sm text-zinc-600">
              © 2025 Reels Code. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
