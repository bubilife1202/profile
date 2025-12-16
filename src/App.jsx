import { useState, useEffect } from 'react'
import {
  Rocket,
  Zap,
  Download,
  Crown,
  Sparkles,
  Play,
  Monitor,
  Gift,
  Star,
  TrendingUp,
  FileSpreadsheet,
  Brain,
  Clock,
  Infinity,
  MessageCircle,
  ArrowRight,
  Check,
  ExternalLink,
  ChevronDown,
  Target,
  BarChart3,
  Gem
} from 'lucide-react'
import './index.css'

function App() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center px-5 sm:px-8 pt-12 pb-20">
        <div className="max-w-4xl mx-auto w-full">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8 sm:mb-10 animate-float">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">개발자 본부장이 직접 만든 툴</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up opacity-0 stagger-2">
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] sm:leading-[1.15] tracking-tight mb-6 sm:mb-8">
              <span className="text-gray-100">유튜브, 아직도</span>
              <br className="sm:hidden" />
              <span className="gradient-text"> '감'</span>
              <span className="text-gray-100">으로 하시나요?</span>
              <br />
              <span className="text-gray-100">이제 </span>
              <span className="text-blue-400 relative">
                '데이터'
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#3b82f6"/>
                      <stop offset="1" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-gray-100">로 승부하세요.</span>
            </h1>
          </div>

          {/* Sub Copy */}
          <div className="animate-fade-in-up opacity-0 stagger-3">
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl leading-relaxed">
              매달 나가는 유료 툴 비용은 그만.
              <br />
              <span className="text-gray-300">단 한 번의 결제</span>로 평생 쓰는 분석 도구와 떡상 데이터를 드립니다.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up opacity-0 stagger-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#products"
                className="btn-primary group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg"
              >
                <span>평생 소장 툴 구매하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://youtube-search-viewer.nomadlab.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg text-gray-300"
              >
                <span>무료 체험판 써보기</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Urgency Badge */}
          <div className="animate-fade-in-up opacity-0 stagger-5">
            <div className="inline-flex items-center gap-2 text-amber-400/90 text-sm font-medium">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400/10">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <span>하루 선착순 100명 무료 체험 가능</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </section>

      {/* Video Section */}
      <section
        id="videos"
        data-animate
        className={`relative py-20 sm:py-28 px-5 sm:px-8 ${isVisible.videos ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              <Play className="w-4 h-4" />
              <span>실제 시연</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              백문이 불여일견
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">직접 눈으로 확인하세요</p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Video 1 */}
            <div className="card-hover glass rounded-3xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10">
                  <Play className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">'이거 진짜 되나요?'</p>
                  <p className="text-sm text-gray-400">시연 영상</p>
                </div>
              </div>
              <div className="video-container aspect-video bg-black/50 rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qXkAfQcuUwI"
                  title="시연 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="card-hover glass rounded-3xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                  <Monitor className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">프로그램 실제 작동</p>
                  <p className="text-sm text-gray-400">작동 화면</p>
                </div>
              </div>
              <div className="video-container aspect-video bg-black/50 rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full"
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

      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Products Section */}
      <section
        id="products"
        data-animate
        className={`relative py-20 sm:py-28 px-5 sm:px-8 ${isVisible.products ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
              <Gem className="w-4 h-4" />
              <span>프리미엄 솔루션</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              입문자부터 전문가까지
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">나에게 맞는 단계별 솔루션을 선택하세요</p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">

            {/* Free Product */}
            <div className="card-hover glass rounded-3xl p-6 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10">
                  <Gift className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                  입문용
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">무료 데이터 맛보기</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-emerald-400 price-tag">0원</span>
                <span className="text-gray-500 line-through text-sm">19,000원</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                12월 유튜브 떡상 영상 30개를 무료로 확인하고 감을 잡으세요.
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {['12월 떡상 영상 30개', '엑셀 파일 즉시 다운로드', '비용 부담 0원'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/XdbLaGW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-emerald-500/30 text-emerald-400 font-semibold transition-all duration-300 hover:bg-emerald-500/10 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>무료 다운로드</span>
              </a>
            </div>

            {/* Best Product */}
            <div className="relative md:-mt-4 md:mb-[-16px]">
              <div className="best-card card-hover glass-strong rounded-3xl p-6 sm:p-7 flex flex-col h-full animate-glow">
                {/* Best Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold shadow-lg">
                  BEST
                </div>

                <div className="flex items-center justify-between mb-5 mt-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">
                    가성비 끝판왕
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">블루오션 키워드 파인더</h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold gradient-text price-tag">39,900원</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  매달 결제 NO. 프로그램 하나 값으로 평생 소장하는 가성비 끝판왕.
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    { icon: Star, text: '키워드 채굴기(Windows) 영구소장', color: 'text-yellow-400' },
                    { icon: BarChart3, text: "'빈집(꿀통)' 자동 발굴", color: 'text-blue-400' },
                    { icon: FileSpreadsheet, text: '12월 떡상 데이터 232개', color: 'text-purple-400' },
                    { icon: Brain, text: 'AI 심층 분석집', color: 'text-pink-400' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5">
                        <item.icon className={`w-3 h-3 ${item.color}`} />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://litt.ly/reels_code_official/sale/aeYrvgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold"
                >
                  <Infinity className="w-4 h-4" />
                  <span>평생 소장하기</span>
                </a>
              </div>
            </div>

            {/* Pro Product */}
            <div className="card-hover glass rounded-3xl p-6 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                  PRO
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">AI 쇼츠 레이더 PRO</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-400 price-tag">299,000원</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                직원 3명 몫을 혼자 처리합니다. 월 900만원 아끼는 자동화 솔루션.
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  { icon: Brain, text: 'AI 실시간 트렌드 감지' },
                  { icon: FileSpreadsheet, text: '떡상 족보 752개 파일 무료 증정' },
                  { icon: Clock, text: '1초 만에 대본 생성' },
                  { icon: TrendingUp, text: '업데이트 평생 무료' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10">
                      <item.icon className="w-3 h-3 text-blue-400" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/0LVLXwr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-blue-500/30 text-blue-400 font-semibold transition-all duration-300 hover:bg-blue-500/10 active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>솔루션 도입하기</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Link Section */}
      <section
        id="additional"
        data-animate
        className={`relative py-16 sm:py-20 px-5 sm:px-8 ${isVisible.additional ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 sm:p-10 text-center">
            <p className="text-gray-300 text-base sm:text-lg mb-5">
              아직 AI 솔루션은 부담스럽고, 대본 작성만 필요하신가요?
            </p>
            <a
              href="https://litt.ly/reels_code_official/sale/4CvCp94"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg sm:text-xl text-purple-400 hover:text-purple-300 transition-colors font-semibold"
            >
              <span>족보 752개 + 대본 완성 툴 (199,000원)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 sm:py-20 px-5 sm:px-8">
        <div className="section-divider mx-auto max-w-4xl mb-16" />

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-8">궁금한 점이 있으신가요?</h3>

          <a
            href="https://open.kakao.com/o/sTYC6FOh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FEE500] text-[#191919] rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(254,229,0,0.3)] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>카카오톡 1:1 문의하기</span>
          </a>

          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-gray-500 text-sm">
              © 2025 Reels Code. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
