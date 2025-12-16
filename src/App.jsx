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
  ChevronRight,
  Check,
  ExternalLink
} from 'lucide-react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-[float_3s_ease-in-out_infinite]">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">개발자 본부장이 직접 만든 툴</span>
          </div>

          {/* Main Copy */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            유튜브, 아직도{' '}
            <span className="gradient-text">'감'</span>
            으로 하시나요?
            <br />
            이제{' '}
            <span className="text-blue-400 underline decoration-blue-400/50 underline-offset-4">'데이터'</span>
            로 승부하세요.
          </h1>

          {/* Sub Copy */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            매달 나가는 유료 툴 비용은 그만.
            <br className="hidden md:block" />
            단 한 번의 결제로 평생 쓰는 분석 도구와 떡상 데이터를 드립니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#products"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              <span className="flex items-center justify-center gap-2">
                평생 소장 툴 구매하기
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="https://youtube-search-viewer.nomadlab.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-xl font-semibold text-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:border-gray-500"
            >
              <span className="flex items-center justify-center gap-2">
                무료 체험판 써보기
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Urgency Text */}
          <p className="flex items-center justify-center gap-2 text-yellow-400 text-sm animate-pulse">
            <Zap className="w-4 h-4" />
            하루 선착순 100명 무료 체험 가능
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            백문이 불여일견, 직접 확인하세요
          </h2>
          <p className="text-gray-400 text-center mb-12">실제 작동하는 모습을 영상으로 확인해보세요</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">'이거 진짜 되나요?' 시연 영상</span>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qXkAfQcuUwI"
                  title="시연 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2 */}
            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">프로그램 실제 작동 화면</span>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ldjVFdfpr8g"
                  title="프로그램 작동 화면"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            입문자부터 전문가까지, 단계별 솔루션
          </h2>
          <p className="text-gray-400 text-center mb-12">나에게 맞는 상품을 선택하세요</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Product */}
            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gray-500">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-6 h-6 text-green-400" />
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">입문용</span>
              </div>

              <h3 className="text-xl font-bold mb-2">무료 데이터 맛보기</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-green-400">0원</span>
                <span className="text-gray-500 line-through text-sm">19,000원</span>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                12월 유튜브 떡상 영상 30개를 무료로 확인하고 감을 잡으세요.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  12월 떡상 영상 30개
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  엑셀 파일 즉시 다운로드
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  비용 부담 0원
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/XdbLaGW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-xl border border-green-500/50 text-green-400 font-semibold transition-all duration-300 hover:bg-green-500/20 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  무료 다운로드
                </span>
              </a>
            </div>

            {/* Best Product */}
            <div className="relative glass rounded-2xl p-6 border-2 border-purple-500/50 transition-all duration-300 hover:scale-[1.02] animate-[pulse-glow_3s_ease-in-out_infinite]">
              {/* BEST Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold">
                BEST
              </div>

              <div className="flex items-center gap-2 mb-4 mt-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">가성비 끝판왕</span>
              </div>

              <h3 className="text-xl font-bold mb-2">신호등 판독기 합본팩</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold gradient-text">39,900원</span>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                매달 결제 NO. 프로그램 하나 값으로 평생 소장하는 가성비 끝판왕.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400" />
                  키워드 채굴기(Windows) 영구소장
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400" />
                  '빈집(꿀통)' 자동 발굴
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400" />
                  12월 떡상 데이터 232개
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400" />
                  AI 심층 분석집
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/aeYrvgz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Infinity className="w-4 h-4" />
                  평생 소장하기
                </span>
              </a>
            </div>

            {/* Pro Product */}
            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gray-500">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">PRO</span>
              </div>

              <h3 className="text-xl font-bold mb-2">AI 쇼츠 레이더 PRO</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-400">299,000원</span>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                직원 3명 몫을 혼자 처리합니다. 월 900만원 아끼는 자동화 솔루션.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Brain className="w-4 h-4 text-blue-400" />
                  AI 실시간 트렌드 감지
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                  떡상 족보 752개 파일 무료 증정
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  1초 만에 대본 생성
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  업데이트 평생 무료
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/0LVLXwr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-xl border border-blue-500/50 text-blue-400 font-semibold transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  솔루션 도입하기
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Link Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-gray-400 mb-4">
              아직 AI 솔루션은 부담스럽고, 대본 작성만 필요하신가요?
            </p>
            <a
              href="https://litt.ly/reels_code_official/sale/4CvCp94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
            >
              <span>👉 족보 752개 + 대본 완성 툴 (199,000원) 보러가기</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-6">궁금한 점이 있으신가요?</h3>

          <a
            href="https://open.kakao.com/o/sTYC6FOh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FEE500] text-[#3C1E1E] rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(254,229,0,0.4)]"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡 1:1 문의하기
          </a>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2025 Reels Code. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              디지털 상품 특성상 발송 후 환불 불가.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
