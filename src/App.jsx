import {
  Zap,
  Sparkles,
  Play,
  Monitor,
  Gift,
  Check,
  ExternalLink,
  Target,
  MessageCircle,
  ArrowRight,
  Package,
  Shield,
  ChevronDown,
  TrendingUp
} from 'lucide-react'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="container">
          <a href="#" className="logo">
            <div className="logo-icon">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            릴스코드
          </a>
          <a href="#products" className="header-btn">
            구매하기
          </a>
        </div>
      </header>

      {/* Gradient Background */}
      <div className="gradient-bg">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
      </div>

      {/* ==================== HERO ==================== */}
      <section className="hero" style={{paddingTop: '120px'}}>
        <div className="container">
          <div className="text-center content-max">
            <h1 className="animate-fade-in delay-1 heading-hero" style={{marginBottom: '24px'}}>
              구독자 0명도 터지는
              <br />
              <span className="gradient-text">알고리즘 치트키</span>
            </h1>

            <p className="animate-fade-in delay-2 text-body-lg" style={{marginBottom: '40px'}}>
              매달 나가는 유료 툴 비용은 그만.
              <br />
              단 한 번의 결제로 평생 쓰는 분석 도구와 떡상 데이터를 드립니다.
            </p>

            <div className="animate-fade-in delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="btn btn-xl btn-primary">
                평생 소장하기
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://youtube-search-viewer.nomadlab.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xl btn-ghost"
              >
                무료 체험판 써보기
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="animate-fade-in delay-4" style={{marginTop: '16px'}}>
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
            <h2 className="heading-section">직접 눈으로 확인하세요</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* 비디오 카드 1 */}
            <div className="card video-card">
              <div className="video-header">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="video-title">블루오션 키워드 발굴 시연</h3>
              </div>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/qXkAfQcuUwI?controls=0&modestbranding=1&rel=0"
                  title="블루오션 키워드 발굴 시연"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 비디오 카드 2 */}
            <div className="card video-card">
              <div className="video-header">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="video-title">올인원 대본 패키지 시연영상</h3>
              </div>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/ldjVFdfpr8g?controls=0&modestbranding=1&rel=0"
                  title="올인원 대본 패키지 시연영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 비디오 카드 3 */}
            <div className="card video-card">
              <div className="video-header">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="video-title">AI 쇼츠 레이더 시연영상</h3>
              </div>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/mzar3HMcxgE?controls=0&modestbranding=1&rel=0"
                  title="AI 쇼츠 레이더 시연영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 비디오 카드 4 */}
            <div className="card video-card">
              <div className="video-header">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="video-title">조회수 급상승 영상 리스트 752개</h3>
              </div>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/jlBB_5K2I20?controls=0&modestbranding=1&rel=0"
                  title="조회수 급상승 영상 리스트 752개"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ==================== STORY ==================== */}
      <section className="section">
        <div className="container">
          <div className="story-section content-max">
            <p className="story-label">왜 만들었냐고요?</p>
            <h2 className="story-title">
              솔직히 <span style={{color: '#f472b6'}}>억울해서</span> 만들었습니다.
            </h2>
            <div className="story-content">
              <p>
                매달 수십만 원씩 내는 분석 툴, 정작 쓰는 기능은 몇 개 안 됩니다.
                <br />
                구독 취소하면 데이터도 사라지고, 다시 보려면 또 결제해야 합니다.
              </p>
              <p>
                그래서 <strong>한 번 사면 영원히 내 것</strong>이 되는 도구를 만들었습니다.
                <br />
                더 이상 매달 결제할 필요 없이, 평생 사용하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ==================== PRODUCTS ==================== */}
      <section id="products" className="section" style={{marginBottom: '80px'}}>
        <div className="container">
          <div className="section-header section-header-compact content-max">
            <h2 className="heading-section">입문자부터 전문가까지</h2>
            <p className="text-body-lg">나에게 맞는 단계별 솔루션을 선택하세요</p>
          </div>

          <div className="product-grid">
            {/* ===== 39,900원 - 블루오션 키워드 파인더 ===== */}
            <div className="card product-card">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-zinc-400" />
                </div>
                <span className="badge">입문용</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">블루오션 키워드 파인더</h3>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="price-strike">월 9,900원</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="price text-white">39,900<span className="price-unit">원</span></span>
                <span className="text-sm text-zinc-500">평생 소장</span>
              </div>

              <p className="text-base leading-relaxed mb-8" style={{color: '#cccccc'}}>
                매달 결제 NO. 프로그램 하나 값으로 평생 소장하는 가성비 끝판왕.
              </p>

              <ul className="feature-list flex-grow">
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>키워드 채굴기 영구소장</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>'빈집(꿀통)' 자동 발굴</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>12월 떡상 데이터 <strong>232개</strong></span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>AI 심층 분석집</span>
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/aeYrvgz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-secondary w-full"
                style={{marginTop: '32px'}}
              >
                39,900원에 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* ===== 199,000원 - 올인원 대본 패키지 (BEST) ===== */}
            <div className="card card-featured product-card relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="badge badge-best">BEST</span>
              </div>

              <div className="flex items-center justify-between mb-6 mt-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Package className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">올인원 대본 패키지</h3>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="price gradient-text">199,000<span className="price-unit">원</span></span>
                <span className="text-sm text-zinc-500">평생 소장</span>
              </div>

              <p className="text-base leading-relaxed mb-8" style={{color: '#cccccc'}}>
                대본 작성부터 트렌드 분석까지. 콘텐츠 제작에 필요한 모든 것.
              </p>

              <ul className="feature-list flex-grow">
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span className="font-medium" style={{color: '#e5e5e5'}}>떡상 족보 데이터 <strong>752개</strong></span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span className="font-medium" style={{color: '#e5e5e5'}}>대본 자동 완성 툴 제공</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span className="font-medium" style={{color: '#e5e5e5'}}>트렌드 키워드 분석집</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span className="font-medium" style={{color: '#e5e5e5'}}>업데이트 평생 무료</span>
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/4CvCp94"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-primary w-full"
                style={{marginTop: '32px'}}
              >
                199,000원에 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* ===== 299,000원 - AI 쇼츠 레이더 PRO ===== */}
            <div className="card product-card">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                </div>
                <span className="badge badge-blue">PRO</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">AI 쇼츠 레이더 PRO</h3>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="price text-blue-400">299,000<span className="price-unit">원</span></span>
                <span className="text-sm text-zinc-500">평생 소장</span>
              </div>

              <p className="text-base leading-relaxed mb-8" style={{color: '#cccccc'}}>
                직원 3명 몫을 혼자 처리합니다. 월 900만원 아끼는 자동화 솔루션.
              </p>

              <ul className="feature-list flex-grow">
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>AI 실시간 트렌드 감지</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>떡상 족보 <strong>752개</strong> 파일 무료 증정</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>1초 만에 대본 생성</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon" style={{background: 'rgba(0, 255, 204, 0.15)'}}>
                    <Check className="w-4 h-4" style={{color: '#00FFCC'}} />
                  </div>
                  <span style={{color: '#cccccc'}}>업데이트 평생 무료</span>
                </li>
              </ul>

              <a
                href="https://litt.ly/reels_code_official/sale/0LVLXwr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-secondary w-full"
                style={{marginTop: '32px'}}
              >
                299,000원에 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ===== 무료 체험 배너 - Full Width ===== */}
          <div style={{marginTop: '80px', marginBottom: '40px'}}>
            <a
              href="https://litt.ly/reels_code_official/sale/XdbLaGW"
              target="_blank"
              rel="noopener noreferrer"
              className="free-trial-banner"
            >
              <Gift className="w-5 h-5" />
              <span>구독자 100명인데 조회수 10만? 12월 알고리즘이 선택한 '기적의 영상' 232개 (무료)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ===== 신뢰 배지 ===== */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="trust-badge">
              <Shield className="w-4 h-4" />
              바이러스 Clean · 100% 안전
            </div>
          </div>

          {/* ===== 비교표 ===== */}
          <div className="comparison-section mt-12">
            <div className="comparison-card old">
              <p className="comparison-label" style={{color: '#ef4444'}}>직접 분석</p>
              <p className="comparison-value" style={{color: '#fca5a5'}}>30시간+</p>
              <p className="comparison-desc">수작업 키워드 분석</p>
            </div>
            <div className="vs-badge">VS</div>
            <div className="comparison-card new">
              <p className="comparison-label" style={{color: '#10b981'}}>릴스코드</p>
              <p className="comparison-value" style={{color: '#6ee7b7'}}>3초</p>
              <p className="comparison-desc">자동화 분석 완료</p>
            </div>
          </div>

          {/* ===== FAQ ===== */}
          <div className="faq-section content-max">
            <h3 className="text-xl md:text-2xl font-bold text-center" style={{marginBottom: '40px'}}>자주 묻는 질문</h3>

            <div className="faq-item">
              <div className="faq-question">
                <span>Mac에서도 사용 가능한가요?</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              <div className="faq-answer">
                현재 Windows 전용입니다. Mac 버전은 추후 업데이트 예정입니다.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>평생 소장이 정말인가요?</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              <div className="faq-answer">
                네, 한 번 구매하시면 평생 사용 가능합니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ==================== FOOTER ==================== */}
      <footer style={{marginTop: '60px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="text-center content-max">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{marginBottom: '32px'}}>
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

            <p style={{marginTop: '48px', fontSize: '14px', color: '#888888'}}>
              © 2025 Reels Code. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Kakao Button */}
      <a
        href="https://open.kakao.com/o/sTYC6FOh"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-kakao"
        aria-label="카카오톡 상담"
      >
        <MessageCircle />
      </a>
    </div>
  )
}
