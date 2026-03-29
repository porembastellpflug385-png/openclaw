import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  TrendingDown,
  Users,
  Target,
  Database,
  Globe,
  ShieldCheck,
  Flame,
  Smartphone,
  BarChart4,
  Video,
  Radar,
  PieChart,
  Clock,
  DollarSign,
  Activity,
  Wand2,
  UserCheck,
  Scissors,
  Mail,
  Mic,
  Network,
  Fingerprint,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  ShoppingCart,
  LineChart,
  Bot,
  Send,
  Terminal,
  AlertCircle,
  CheckCircle2,
  Loader2,
  FileDown
} from 'lucide-react';

// Apple风格的渐变与毛玻璃预设组件 (支持导出模式下的安全回退)
const GlassCard = ({ children, className = '', isExporting = false }) => (
  <div
    className={`${isExporting ? 'bg-[#121217]' : 'bg-white/5 backdrop-blur-3xl'} border border-white/10 rounded-3xl shadow-2xl ${className}`}
  >
    {children}
  </div>
);

const GradientText = ({ children, className = '', isExporting = false }) => (
  <span
    className={
      isExporting
        ? `text-white font-bold ${className}`
        : `text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 ${className}`
    }
  >
    {children}
  </span>
);

// 提取终端交互组件
const TerminalInteractionSlide = ({ isExporting }) => {
  const [step, setStep] = useState(isExporting ? 2 : 0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isExporting) setStep(2);
  }, [isExporting]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const handleRenderClick = () => {
    if (step !== 0) return;
    setStep(1);
    setTimeout(() => setStep(2), 2500);
  };

  return (
    <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
      {!isExporting && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-indigo-500/10 blur-[100px]"></div>
      )}

      <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
        终端交互：<GradientText isExporting={isExporting}>基于 Telegram 的移动指挥所</GradientText>
      </h2>
      <p className="text-base text-white/50 mb-6 font-light tracking-wide max-w-4xl">
        点击下方 <strong className="text-emerald-400 font-medium">"一键送去渲染"</strong> 按钮，体验 OpenClaw
        中枢如何将人类决策瞬间转化为流水线作业。
      </p>

      <div className="flex space-x-8 relative z-10 h-[440px]">
        {/* 左侧：IM 聊天界面 */}
        <GlassCard
          isExporting={isExporting}
          className="w-3/5 flex flex-col overflow-hidden relative border-t-4 border-t-blue-500 shadow-2xl shadow-blue-500/10"
        >
          <div
            className={`px-6 py-4 border-b border-white/10 flex items-center space-x-3 ${isExporting ? 'bg-[#1A1A22]' : 'bg-white/5'}`}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium text-lg leading-tight">OpenClaw Command</h3>
              <div className="text-[11px] text-emerald-400 flex items-center space-x-1.5 mt-0.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${!isExporting && 'animate-pulse'}`}
                ></span>
                <span>System Online</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 space-y-5 overflow-y-auto flex flex-col pr-4">
            <div className="flex justify-end">
              <div className="bg-blue-600/40 border border-blue-500/30 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-[13px] max-w-[80%] shadow-md">
                /status 调出全线 Agent 今日运行报告
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-black/60 border border-white/10 text-white/80 px-4 py-3 rounded-2xl rounded-tl-sm text-[13px] max-w-[85%] space-y-2 shadow-md">
                <p className="font-medium text-white mb-2">📊 OpenClaw 16:00 运行简报：</p>
                <ul className="space-y-1.5 text-white/60 font-mono text-[11px]">
                  <li className="flex items-center">
                    <span className="text-emerald-400 mr-2">✓</span>[内容] 生成 12 条短片，耗时 14m
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-400 mr-2">✓</span>[分发] TikTok 排期成功 5 条
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-400 mr-2">✓</span>[私域] 自动发送邀约邮件 50 封
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">i</span>[广告] ACOS 21% (安全阈值内)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600/40 border border-blue-500/30 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-[13px] max-w-[80%] shadow-md">
                监控线：有抓取到 Ninja 新款的异常评价吗？
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-black/60 border border-white/10 text-white/80 px-4 py-3 rounded-2xl rounded-tl-sm text-[13px] max-w-[85%] space-y-3 shadow-md">
                <p className="text-orange-400 font-medium flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1.5" /> 监控预警触发：
                </p>
                <p className="text-white/70 leading-relaxed">
                  发现 Ninja 新款 ASIN 在过去 24 小时内{' '}
                  <strong className="text-rose-400 bg-rose-500/20 px-1 rounded">
                    "Plastic smell (塑料异味)"
                  </strong>{' '}
                  关键词差评激增 40%。
                </p>
                <p className="text-emerald-300 bg-emerald-500/10 p-2 rounded border border-emerald-500/20 leading-relaxed">
                  💡 自动反击：已根据预设指令，触发内容线生成 3 篇对标“医疗级陶瓷零涂层”的视频脚本。
                </p>

                {step === 0 && (
                  <div className="flex space-x-2 pt-1">
                    <button
                      onClick={handleRenderClick}
                      className="bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/50 text-emerald-400 px-3 py-1.5 rounded-lg flex items-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />{' '}
                      <span className="font-medium text-xs">一键送去渲染</span>
                    </button>
                    <button className="bg-white/5 border border-white/10 text-white/60 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                      <FileText className="w-3.5 h-3.5" /> <span className="text-xs">查看脚本</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {step > 0 && (
              <div className="flex justify-end">
                <div className="bg-blue-600/40 border border-blue-500/30 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-[13px] max-w-[80%] shadow-md flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" />
                  [执行] 一键送去渲染
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex justify-start">
                <div className="bg-black/60 border border-emerald-500/30 text-white/80 px-4 py-3 rounded-2xl rounded-tl-sm text-[13px] max-w-[85%] space-y-2">
                  <p className="font-medium text-emerald-400 flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Content_Forge_Agent 接管任务
                  </p>
                  <p className="text-white/60 text-[12px] leading-relaxed">
                    正在并行调用 ElevenLabs 生成美音旁白，请求 CapCut API 合成视频帧...
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex justify-start">
                <div className="bg-emerald-900/30 border border-emerald-500/40 text-white/80 px-4 py-3 rounded-2xl rounded-tl-sm text-[13px] max-w-[85%] space-y-2 shadow-md">
                  <p className="font-medium text-emerald-400 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    渲染完成 & 分发就绪
                  </p>
                  <p className="text-white/80 text-[12px] leading-relaxed">
                    ✅ 3 条反击短视频已渲染成功。
                    <br />
                    ✅ 自动推入 Buffer 队列，将于美东时间 <strong className="text-white">19:30</strong>{' '}
                    晚高峰同步至 TikTok & IG Reels。
                  </p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div
            className={`px-6 py-4 border-t border-white/5 flex items-center space-x-3 ${isExporting ? 'bg-[#1A1A22]' : 'bg-black/40 backdrop-blur-xl'}`}
          >
            <div className="flex-1 bg-black/60 border border-white/10 rounded-full px-4 py-2.5 text-white/40 text-[13px] flex items-center">
              输入指令或与 Agent 对话...
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
              <Send className="w-4 h-4 text-white -ml-0.5" />
            </div>
          </div>
        </GlassCard>

        {/* 右侧大盘 */}
        <div className="w-2/5 flex flex-col justify-center space-y-4">
          <h3 className="text-white font-medium text-lg mb-2 flex items-center">
            <Terminal className="w-5 h-5 text-white/50 mr-2" />
            实时 Agent 负载状态
          </h3>

          <GlassCard
            isExporting={isExporting}
            className="p-4 flex items-center justify-between border-l-2 border-l-blue-400 bg-black/20"
          >
            <div className="flex items-center space-x-3">
              <Radar className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-white text-[13px] font-medium">市场嗅探者</div>
                <div className="text-white/40 text-[10px] font-mono mt-0.5 pdf-tight pdf-nudge-up">Market_Scout_Agent</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
              <span
                className={`w-1.5 h-1.5 rounded-full bg-blue-400 ${!isExporting && 'animate-pulse'}`}
              ></span>
              <span className="text-[11px] text-blue-300 font-medium pdf-inline-center pdf-tight">分析全网数据中</span>
            </div>
          </GlassCard>

          <GlassCard
            isExporting={isExporting}
            className={`p-4 flex items-center justify-between border-l-2 ${
              step === 0
                ? 'border-l-orange-400 bg-orange-500/5'
                : step === 1
                  ? 'border-l-emerald-400 bg-emerald-500/10 scale-[1.02]'
                  : 'border-l-slate-400 bg-black/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Video
                className={`w-5 h-5 ${
                  step === 0 ? 'text-orange-400' : step === 1 ? 'text-emerald-400' : 'text-slate-400'
                }`}
              />
              <div>
                <div className="text-white text-[13px] font-medium">内容机床</div>
                <div className="text-white/40 text-[10px] font-mono mt-0.5 pdf-tight pdf-nudge-up">Content_Forge_Agent</div>
              </div>
            </div>
            <div
              className={`flex items-center space-x-2 px-2.5 py-1 rounded border ${
                step === 0
                  ? 'bg-orange-500/20 border-orange-500/40 text-orange-300'
                  : step === 1
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-white/50'
              }`}
            >
              {step === 1 && !isExporting ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <span
                  className={`w-1.5 h-1.5 rounded-full ${step === 0 && !isExporting ? 'bg-orange-400 animate-ping' : 'bg-slate-400'}`}
                ></span>
              )}
              <span className="text-[11px] font-bold pdf-inline-center pdf-tight">
                {step === 0 ? '等待确认渲染' : step === 1 ? '高负载渲染中...' : '空闲 / 待命中'}
              </span>
            </div>
          </GlassCard>

          <GlassCard
            isExporting={isExporting}
            className={`p-4 flex items-center justify-between border-l-2 ${
              step === 2 ? 'border-l-purple-400 bg-purple-500/10' : 'border-l-slate-500 bg-black/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Globe className={`w-5 h-5 ${step === 2 ? 'text-purple-400' : 'text-slate-500'}`} />
              <div>
                <div className="text-white text-[13px] font-medium">流量触手</div>
                <div className="text-white/40 text-[10px] font-mono mt-0.5 pdf-tight pdf-nudge-up">Social_Octopus_Agent</div>
              </div>
            </div>
            <div
              className={`flex items-center space-x-2 px-2.5 py-1 rounded border ${
                step === 2
                  ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                  : 'bg-white/5 border-white/10 text-white/50'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${step === 2 ? 'bg-purple-400' : 'bg-white/40'} ${!isExporting && step === 2 && 'animate-pulse'}`}
              ></span>
              <span className="text-[11px] font-medium pdf-inline-center pdf-tight">
                {step === 2 ? '排期任务 +3' : '挂起 (等待发布排期)'}
              </span>
            </div>
          </GlassCard>

          <GlassCard
            isExporting={isExporting}
            className="p-4 flex items-center justify-between border-l-2 border-l-slate-400 bg-black/20"
          >
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-slate-400" />
              <div>
                <div className="text-white text-[13px] font-medium">转化收割机</div>
                <div className="text-white/40 text-[10px] font-mono mt-0.5 pdf-tight pdf-nudge-up">Harvester_Agent</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
              <span className="text-[11px] text-white/50 pdf-inline-center pdf-tight">监听 Webhook 中</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default function Presentation() {
  const LIVE_STAGE_WIDTH = 1536;
  const LIVE_STAGE_HEIGHT = 864;
  const LIVE_STAGE_PADDING = 24;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [exportState, setExportState] = useState({ active: false, mode: null }); // mode: 'png' | 'pdf'
  const [exportIndex, setExportIndex] = useState(0);
  const [viewportSize, setViewportSize] = useState({
    width: LIVE_STAGE_WIDTH,
    height: LIVE_STAGE_HEIGHT
  });

  // 加载外部 JS
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

  const slides = [
    // Slide 0: 封面
    {
      id: 'cover',
      content: (isExporting) => (
        <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden pb-12">
          {!isExporting && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse duration-[5000ms]"></div>
              <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
            </>
          )}

          <div className="z-10 text-center space-y-8 mt-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Cpu className="w-8 h-8 text-white/70" />
              <span className="text-sm font-semibold tracking-[0.3em] text-white/70 uppercase">
                WOOD WELL LIMITED
              </span>
            </div>
            <h1 className="text-8xl font-semibold tracking-tighter text-white mb-4">
              <GradientText isExporting={isExporting}>OpenClaw.</GradientText>
            </h1>
            <p className="text-2xl font-light tracking-wide text-white/60 max-w-2xl mx-auto leading-relaxed">
              北美营销自动化调度中枢系统 <br />
              <span className="text-lg opacity-70">从 TikTok 种草到 Amazon 放量的全链路无人值守引擎</span>
            </p>
          </div>
        </div>
      )
    },
    // Slide 1: 市场痛点
    {
      id: 'problem',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          <h2 className="text-5xl font-semibold tracking-tight text-white mb-3">
            出海营销的 <GradientText isExporting={isExporting}>第一性原理</GradientText>
          </h2>
          <p className="text-lg text-white/50 mb-8 font-light tracking-wide">没有品牌认知就投站内广告，等于在沙漠里开餐厅。</p>

          <div className="grid grid-cols-3 gap-6">
            <GlassCard isExporting={isExporting} className="p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <TrendingDown className="w-10 h-10 text-rose-400" />
                <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded-full pdf-inline-center pdf-tight pdf-nudge-up">
                  Amazon Data
                </span>
              </div>
              <div>
                <div className="text-6xl font-light text-white mb-2">
                  35<span className="text-3xl">%+</span>
                </div>
                <div className="text-base text-white/70 font-medium tracking-wide">新品初期 ACOS</div>
                <p className="text-sm text-white/40 mt-3 leading-relaxed">
                  纯站内流量成本极高，每获取 $100 销售额需燃烧 $35-$45 广告费，利润被极致压缩。
                </p>
              </div>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <Users className="w-10 h-10 text-amber-400" />
                <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded-full pdf-inline-center pdf-tight pdf-nudge-up">
                  Consumer Trust
                </span>
              </div>
              <div>
                <div className="flex items-baseline space-x-2 mb-2">
                  <div className="text-6xl font-light text-white">
                    71<span className="text-3xl">%</span>
                  </div>
                  <div className="text-xl text-white/40">vs 22%</div>
                </div>
                <div className="text-base text-white/70 font-medium tracking-wide">KOL 信任度对比</div>
                <p className="text-sm text-white/40 mt-3 leading-relaxed">
                  北美消费者对品牌硬广信任度仅 22%，而对真实 UGC 和 KOL 评测的信任度高达 71%。
                </p>
              </div>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <BarChart4 className="w-10 h-10 text-emerald-400" />
                <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded-full pdf-inline-center pdf-tight pdf-nudge-up">
                  Cost per 1M
                </span>
              </div>
              <div>
                <div className="flex items-baseline space-x-2 mb-2">
                  <div className="text-6xl font-light text-white">$3k</div>
                  <div className="text-xl text-white/40">vs $30k</div>
                </div>
                <div className="text-base text-white/70 font-medium tracking-wide">
                  百万曝光成本 (TikTok vs Amazon)
                </div>
                <p className="text-sm text-white/40 mt-3 leading-relaxed">
                  TikTok 达人矩阵获客成本仅为亚马逊 PPC 广告的十分之一，是建立护城河的唯一解。
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      )
    },
    // Slide 2: 核心调度架构
    {
      id: 'architecture',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          {!isExporting && (
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent blur-[100px]"></div>
          )}

          <h2 className="text-5xl font-semibold tracking-tight text-white mb-2">
            宏观大脑：<GradientText isExporting={isExporting}>五线并发的“云端指挥部”</GradientText>
          </h2>
          <p className="text-base text-white/50 mb-8 font-light tracking-wide max-w-4xl">
            我们不是在杂乱地使用各个 AI 工具，而是通过 OpenClaw 中枢将它们缝合，建成一座全自动的现代内容工厂。
          </p>

          <div className="flex space-x-6 mb-8 relative z-10">
            <div
              className={`flex-1 border border-white/10 rounded-2xl p-5 flex items-start space-x-4 ${isExporting ? 'bg-[#1A1A22]' : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md'}`}
            >
              <div className="p-3 bg-emerald-500/20 rounded-xl shrink-0">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1 flex items-center">
                  大脑与手脚分离{' '}
                  <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded uppercase font-bold pdf-inline-center pdf-tight pdf-nudge-up">
                    机器代工
                  </span>
                </h4>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  人只负责制定营销策略，把极其枯燥的<strong className="text-white/90 font-medium pdf-strong-fix">“全网盯盘、批量写文案、定时发视频、深夜回评论”</strong>等脏活累活，全权交由云端脚本执行。
                </p>
              </div>
            </div>

            <div
              className={`flex-1 border border-white/10 rounded-2xl p-5 flex items-start space-x-4 ${isExporting ? 'bg-[#1A1A22]' : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md'}`}
            >
              <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1 flex items-center">
                  智能闭环联动{' '}
                  <span className="ml-2 text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded uppercase font-bold pdf-inline-center pdf-tight pdf-nudge-up">
                    If-Then 触发
                  </span>
                </h4>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  彻底打通数据孤岛。例如：<strong className="text-white/90 font-medium pdf-strong-fix">【监控线】</strong>
                  抓到传统炸锅涂层差评 ➔ 立即触发<strong className="text-white/90 font-medium pdf-strong-fix">【内容线】</strong>
                  生成“零涂层”反击视频 ➔ 自动分发。
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            <GlassCard
              isExporting={isExporting}
              className="p-5 flex flex-col items-center text-center border-t-4 border-t-indigo-500"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 shrink-0">
                <Video className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-base font-medium text-white mb-2">内容生产线</h3>
              <p className="text-[11px] text-white/50 mb-4 flex-1">
                串联 GPT/CapCut/HeyGen，实现从脚本生成到音视频自动合成。
              </p>
              <div className="w-full bg-black/30 rounded p-1.5 text-[10px] font-mono text-indigo-300">
                GPT-4o · ElevenLabs
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-5 flex flex-col items-center text-center border-t-4 border-t-blue-500"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 shrink-0">
                <Radar className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-base font-medium text-white mb-2">竞品监控线</h3>
              <p className="text-[11px] text-white/50 mb-4 flex-1">定时抓取全网竞品动态、价格波动及最新差评，输出反击策略。</p>
              <div className="w-full bg-black/30 rounded p-1.5 text-[10px] font-mono text-blue-300">
                Browser Scraper
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-5 flex flex-col items-center text-center border-t-4 border-t-emerald-500"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 shrink-0">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-medium text-white mb-2">私域分发线</h3>
              <p className="text-[11px] text-white/50 mb-4 flex-1">
                社媒矩阵定时排期发布，独立站留资触发自动化邮件滴灌培育。
              </p>
              <div className="w-full bg-black/30 rounded p-1.5 text-[10px] font-mono text-emerald-300">
                Buffer · Klaviyo
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-5 flex flex-col items-center text-center border-t-4 border-t-orange-500"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 shrink-0">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-base font-medium text-white mb-2">广告优调线</h3>
              <p className="text-[11px] text-white/50 mb-4 flex-1">
                对接亚马逊广告接口，实现 ACOS 超阈值自动熔断及词库扩充。
              </p>
              <div className="w-full bg-black/30 rounded p-1.5 text-[10px] font-mono text-orange-300">
                Helium 10 · Ads API
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-5 flex flex-col items-center text-center border-t-4 border-t-purple-500"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 shrink-0">
                <PieChart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-base font-medium text-white mb-2">数据报告线</h3>
              <p className="text-[11px] text-white/50 mb-4 flex-1">
                跨平台聚合数据，利用 AI 自动生成包含优化建议的每日战报。
              </p>
              <div className="w-full bg-black/30 rounded p-1.5 text-[10px] font-mono text-purple-300">
                Manus AI · Telegram
              </div>
            </GlassCard>
          </div>
        </div>
      )
    },
    // Slide 3: 全链路实操
    {
      id: 'full_link_workflow',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          {!isExporting && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 blur-[100px]"></div>
          )}

          <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
            执行链路：<GradientText isExporting={isExporting}>从内容种草到电商变现的 6 大步骤</GradientText>
          </h2>
          <p className="text-base text-white/50 mb-6 font-light tracking-wide max-w-4xl">
            将业务拆解为 6 大标准化执行模块，结合顶级 AI 工具包，实现高度集约化的流水线作业。
          </p>

          <div className="grid grid-cols-3 gap-x-5 gap-y-4 relative z-10">
            <GlassCard isExporting={isExporting} className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white leading-tight pdf-title-fix">01. 文案中枢</h3>
                  <div className="text-[10px] font-mono text-indigo-400 mt-0.5 pdf-subtitle-fix pdf-nudge-up">GPT-4o</div>
                </div>
              </div>
              <ul className="text-[13px] text-white/60 space-y-1.5 mt-2 font-light leading-relaxed">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>策略输出：生成爆款脚本与分发文案</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>
                    执行频次：<strong className="text-white/90 font-medium">每日更新</strong>，捕捉实时热点
                  </span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white leading-tight pdf-title-fix">02. 视觉与视频物料</h3>
                  <div className="text-[10px] font-mono text-pink-400 mt-0.5 truncate pdf-subtitle-fix pdf-nudge-up">
                    Skill / Banana2 / Seedance / HeyGen
                  </div>
                </div>
              </div>
              <ul className="text-[13px] text-white/60 space-y-1.5 mt-2 font-light leading-relaxed">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>实拍+剪映混合，结合 HeyGen 真人口播</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span className="text-emerald-300 font-medium">集约生产：1周存量1天内做完</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>发布策略：Buffer / Skill 自动+人工辅助</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white leading-tight pdf-title-fix">03. KOL 拓展合作</h3>
                  <div className="text-[10px] font-mono text-orange-400 mt-0.5 pdf-subtitle-fix pdf-nudge-up">
                    Kolr AI / GPT / Auto-Mailer
                  </div>
                </div>
              </div>
              <ul className="text-[13px] text-white/60 space-y-1.5 mt-2 font-light leading-relaxed">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>发邮件联系，进行商务洽谈与送测</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span className="text-white/90">自动化流：筛选 + GPT文案 + 自动邮件触达</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white leading-tight pdf-title-fix">04. 全域多平台运营</h3>
                  <div className="text-[10px] font-mono text-blue-400 mt-0.5 pdf-subtitle-fix pdf-nudge-up">
                    AI群控 / Skill / TikTok Shop
                  </div>
                </div>
              </div>
              <ul className="text-[13px] text-white/60 space-y-1.5 mt-2 font-light leading-relaxed">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>全网内容分发与直播间搭建</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>评论区智能留言回复，无缝引导至私域池</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white leading-tight pdf-title-fix">05. 独立站私域留存</h3>
                  <div className="text-[10px] font-mono text-emerald-400 mt-0.5 pdf-subtitle-fix pdf-nudge-up">Shopify + Semrush</div>
                </div>
              </div>
              <ul className="text-[13px] text-white/60 space-y-1.5 mt-2 font-light leading-relaxed">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>构建高转化率 DTC 品牌官网体验</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>Semrush 赋能 SEO，承接公域自然流量</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <LineChart className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white leading-tight pdf-title-fix">06. 货架电商变现</h3>
                  <div className="text-[10px] font-mono text-purple-400 mt-0.5 pdf-subtitle-fix pdf-nudge-up">
                    Amazon Ads / Manus / GPT
                  </div>
                </div>
              </div>
              <ul className="text-[13px] text-white/60 space-y-1.5 mt-2 font-light leading-relaxed">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span>Amazon 站内精准放量与自动广告优化</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></div>
                  <span className="text-white/90">AI复盘：利用 Manus / GPT 深度总结迭代</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      )
    },
    // Slide 4: 微观 SOP
    {
      id: 'ai_tool_sop',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          {!isExporting && (
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent blur-[120px]"></div>
          )}

          <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
            微观 SOP：<GradientText isExporting={isExporting}>拒绝“一刀切”的基于场景细分流</GradientText>
          </h2>
          <p className="text-base text-white/50 mb-6 font-light tracking-wide max-w-4xl">
            我们将内容矩阵精准拆分为三大独立生成工作流，确保在“出稿效率”与“老外信任感”之间取得完美平衡。
          </p>

          <div className="grid grid-cols-3 gap-6 relative z-10">
            <GlassCard
              isExporting={isExporting}
              className="p-6 border-l-4 border-l-blue-400 flex flex-col h-full"
            >
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-medium text-white">1. 科普与背书流</h3>
              </div>
              <p className="text-[13px] text-white/50 mb-5 flex-1 leading-relaxed">
                <strong>适用场景：</strong>涂层安全、FDA 标准解读。<br />
                利用 AI 的专业感增强信任背书，完全剥离人工出镜成本。
              </p>
              <div className="space-y-2.5">
                <div className="bg-black/40 rounded-lg py-2 px-3 flex items-center space-x-3 border border-white/5">
                  <Wand2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80 pdf-inline-center pdf-tight">GPT-4o Custom 指令生成深度文案</span>
                </div>
                <div className="bg-black/40 rounded-lg py-2 px-3 flex items-center space-x-3 border border-white/5">
                  <Mic className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-xs text-white/80 pdf-inline-center pdf-tight">ElevenLabs 合成 Native 美音</span>
                </div>
                <div className="bg-blue-500/20 rounded-lg py-2 px-3 flex items-center space-x-3 border border-blue-500/30">
                  <UserCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs text-blue-200 font-medium pdf-inline-center pdf-tight">HeyGen 驱动美国女性数字人播报</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-6 border-l-4 border-l-emerald-400 flex flex-col h-full"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Video className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-medium text-white">2. 效果与实测流</h3>
              </div>
              <p className="text-[13px] text-white/50 mb-5 flex-1 leading-relaxed">
                <strong>适用场景：</strong>V型底座清洗、ProSense 牛排实测。<br />
                放弃纯 AI 生成，强调用真实厨房环境打破消费者的防备心理。
              </p>
              <div className="space-y-2.5">
                <div className="bg-black/40 rounded-lg py-2 px-3 flex items-center space-x-3 border border-white/5">
                  <Smartphone className="w-4 h-4 text-white/60 shrink-0" />
                  <span className="text-xs text-white/80 pdf-inline-center pdf-tight">实景 iPhone 拍摄核心痛点对比</span>
                </div>
                <div className="bg-emerald-500/20 rounded-lg py-2 px-3 flex items-center space-x-3 border border-emerald-500/30">
                  <Scissors className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-emerald-200 font-medium pdf-inline-center pdf-tight">CapCut 自动切片 + 美式字幕高亮</span>
                </div>
                <div className="bg-black/40 rounded-lg py-2 px-3 flex items-center space-x-3 border border-white/5">
                  <Wand2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80 pdf-inline-center pdf-tight">Opus Clip 将 YouTube 长视频转短片</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-6 border-l-4 border-l-orange-400 flex flex-col h-full"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-orange-400" />
                <h3 className="text-lg font-medium text-white">3. 纳米达人裂变流</h3>
              </div>
              <p className="text-[13px] text-white/50 mb-5 flex-1 leading-relaxed">
                <strong>适用场景：</strong>建立早期社群信任、获取本地化 UGC。<br />
                低成本高转化的私域漏斗，规避高昂的头部 KOL 坑位费。
              </p>
              <div className="space-y-2.5">
                <div className="bg-orange-500/20 rounded-lg py-2 px-3 flex items-center space-x-3 border border-orange-500/30">
                  <Target className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-xs text-orange-200 font-medium pdf-inline-center pdf-tight">Kolr AI 批量筛选精细达人</span>
                </div>
                <div className="bg-black/40 rounded-lg py-2 px-3 flex items-center space-x-3 border border-white/5">
                  <Mail className="w-4 h-4 text-white/60 shrink-0" />
                  <span className="text-xs text-white/80 pdf-inline-center pdf-tight">GPT 批量生成极具个性的邀约邮件</span>
                </div>
                <div className="bg-black/40 rounded-lg py-2 px-3 flex items-center space-x-3 border border-white/5">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80 pdf-inline-center pdf-tight">Klaviyo 承接流量，Day 2/4/7 滴灌</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      )
    },
    // Slide 5: 群控矩阵
    {
      id: 'matrix_control',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          {!isExporting && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent blur-[120px]"></div>
          )}

          <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
            底层护城河：<GradientText isExporting={isExporting}>全域防封号群控矩阵方案</GradientText>
          </h2>
          <p className="text-base text-white/50 mb-8 font-light tracking-wide max-w-4xl">
            跨境电商群控的死穴在于“设备关联被限流”。我们摒弃单一的 SaaS 工具，采用“三层防御架构”，安全管理
            50+ TikTok/IG 本地化矩阵账号。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <GlassCard isExporting={isExporting} className="p-5 relative overflow-hidden group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-white">官方主账号网络</h3>
              </div>
              <p className="text-[13px] text-white/60 mb-4 font-light leading-relaxed h-[60px]">
                用于 @WoodWell_Official 等官方权威阵地。绝不触碰非官方爬虫，确保品牌核心资产 100% 安全。
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-3">解决方案核心</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[13px] text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>使用官方 API 授权接口</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[13px] text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    <span>工具箱：Buffer / Sprout Social</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-5 relative overflow-hidden group border border-purple-500/30"
            >
              <div className="absolute top-0 right-0 p-3">
                <div className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  效率引擎
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <Network className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-medium text-white">敏捷分发矩阵</h3>
              </div>
              <p className="text-[13px] text-white/60 mb-4 font-light leading-relaxed h-[60px]">
                用于 10-20 个核心品类与生活方式子账号。通过 Skill 等 SaaS 中台解决跨平台内容同步与自动发布痛点。
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-3">解决方案核心</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[13px] text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>AI 文案润色 + 多端一键推送</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[13px] text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    <span>工具箱：Skill / Share Creators</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard
              isExporting={isExporting}
              className="p-5 relative overflow-hidden group border border-orange-500/30"
            >
              <div className="absolute top-0 right-0 p-3">
                <div className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  防封死穴
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                  <Fingerprint className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-xl font-medium text-white">海量铺货基建</h3>
              </div>
              <p className="text-[13px] text-white/60 mb-4 font-light leading-relaxed h-[60px]">
                用于 50+ 个 Affiliate 铺量号。完全物理级风控隔离，彻底解决跨境运营因 IP 和设备高度关联导致的
                Shadowban。
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-3">解决方案核心</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[13px] text-orange-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    <span>底层篡改 Canvas/WebRTC 设备指纹</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[13px] text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    <span>纯净住宅 ISP + 指纹群控系统</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      )
    },
    // Slide 6: 终端交互交互页
    {
      id: 'terminal_interaction',
      content: (isExporting) => <TerminalInteractionSlide isExporting={isExporting} />
    },
    // Slide 7: 实施路径规划
    {
      id: 'roadmap',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          <h2 className="text-5xl font-semibold tracking-tight text-white mb-4">
            落地节奏与 <GradientText isExporting={isExporting}>执行铁律</GradientText>
          </h2>
          <p className="text-xl text-white/50 mb-8 font-light">先手动再自动，先免费再付费，先发布再优化。</p>

          <div className="relative border-l border-white/10 ml-8 space-y-8">
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
              <h3 className="text-2xl font-medium text-white mb-2">
                M1：极客手动期{' '}
                <span className="text-base text-white/40 font-light ml-3">搭建 MVP 闭环</span>
              </h3>
              <p className="text-white/60 text-sm mb-3 max-w-3xl leading-relaxed">
                全面禁用全自动化。团队使用 ChatGPT Plus 撰写脚本，手工使用 CapCut 剪辑。优先跑通 TikTok 到
                Klaviyo 的数据流，利用 Kolr AI 邀约首批 20 个纳米级 KOL。
              </p>
              <div className="flex space-x-3">
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded pdf-inline-center pdf-tight pdf-nudge-up">
                  Target: 12条基准视频
                </span>
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded pdf-inline-center pdf-tight pdf-nudge-up">
                  A+ Content 完稿
                </span>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(96,165,250,0.6)]"></div>
              <h3 className="text-2xl font-medium text-white mb-2">
                M2：半自动部署期{' '}
                <span className="text-base text-white/40 font-light ml-3">VPS 环境与脚本上线</span>
              </h3>
              <p className="text-white/60 text-sm mb-3 max-w-3xl leading-relaxed">
                在 VPS 上正式部署 OpenClaw 环境。上线 TikTok Cron 自动发布任务。根据 M1
                手动测试出的高完播率 Hook，固化 AI 剧本生成指令。Klaviyo 弃购挽回序列上线。
              </p>
              <div className="flex space-x-3">
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded pdf-inline-center pdf-tight pdf-nudge-up">
                  Target: Cron 调度 100% 成功
                </span>
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded pdf-inline-center pdf-tight pdf-nudge-up">
                  工程样品通过 UL/ETL
                </span>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
              <h3 className="text-2xl font-medium text-white mb-2">
                M3：矩阵爆发期{' '}
                <span className="text-base text-white/40 font-light ml-3">全渠道自动化收割</span>
              </h3>
              <p className="text-white/60 text-sm mb-3 max-w-3xl leading-relaxed">
                人力彻底从执行层抽离，转向“策略输入”。OpenClaw 接管日均 5-8 条全网分发。Amazon Vine
                计划启动，配置自动广告结构，为海运到仓的 1000 台现货准备全域流量承接。
              </p>
              <div className="flex space-x-3">
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded pdf-inline-center pdf-tight pdf-nudge-up">
                  Target: FDA 认证通过
                </span>
                <span className="text-xs font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 pdf-inline-center pdf-tight pdf-nudge-up">
                  Amazon 上架就绪
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: 软硬一体化生态
    {
      id: 'ecosystem',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          <h2 className="text-5xl font-semibold tracking-tight text-white mb-4">
            从流量到留存：<GradientText isExporting={isExporting}>软硬一体化护城河</GradientText>
          </h2>
          <p className="text-xl text-white/50 mb-8 font-light">优质的流量需要被伟大的产品承接，打破“一锤子买卖”魔咒。</p>

          <div className="grid grid-cols-2 gap-8">
            <GlassCard isExporting={isExporting} className="p-6 border-t-4 border-t-emerald-500">
              <div className="flex items-center space-x-4 mb-5">
                <Flame className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-medium text-white whitespace-nowrap">Project NorthStar 硬件</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">EC-450: 极致物理创新</strong>
                    <span className="text-[13px] leading-relaxed text-white/60 block">
                      V型聚能防焦底座 (60秒极速清洁) + 零 PTFE 医疗级陶瓷涂层，直击传统炸锅洗不净、有毒害的痛点。
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">PS-650: 极致科技旗舰</strong>
                    <span className="text-[13px] leading-relaxed text-white/60 block">
                      ProSense 边缘 AI 视觉识别，放入食材自动匹配时间温度。双区独立温控，解决多线烹饪难题。
                    </span>
                  </div>
                </li>
              </ul>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-6 border-t-4 border-t-blue-500">
              <div className="flex items-center space-x-4 mb-5">
                <Smartphone className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-medium text-white whitespace-nowrap">WOOD WELL Club 软件</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">米其林级“零失败”曲线</strong>
                    <span className="text-[13px] leading-relaxed text-white/60 block">
                      摒弃死板预设。APP 一键下发由远红外加热管+变频风机组成的动态美拉德反应曲线。
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">Create-to-Earn 创作者生态</strong>
                    <span className="text-[13px] leading-relaxed text-white/60 block">
                      建立垂直 UGC 社区，用户一键复刻达人参数。引入打卡与 MasterClass 订阅，开辟第二增长曲线。
                    </span>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      )
    },
    // Slide 9: 真实 ROI 对比数据
    {
      id: 'impact',
      content: (isExporting) => (
        <div className="flex flex-col justify-center h-full w-full px-24 pb-16 relative">
          {!isExporting && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 blur-[100px]"></div>
          )}

          <h2 className="text-5xl font-semibold tracking-tight text-white mb-4">
            商业终局：<GradientText isExporting={isExporting}>绝对的降维打击</GradientText>
          </h2>
          <p className="text-xl text-white/50 mb-10 font-light">将组织架构变薄，每年节省超过 $200,000 的纯利润空间。</p>

          <div className="grid grid-cols-3 gap-6 z-10">
            <GlassCard isExporting={isExporting} className="p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <DollarSign className="w-8 h-8 text-emerald-400/50" />
              </div>
              <h3 className="text-xl text-white font-medium mb-6">结构性降本</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-light text-white">$8,460</span>
                    <span className="text-sm text-white/40">/ 月</span>
                  </div>
                  <div className="text-[13px] text-emerald-400 mt-1">OpenClaw 架构 (2人 + VPS + API)</div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-baseline space-x-2 opacity-50">
                    <span className="text-2xl font-light text-white line-through decoration-rose-500/50">$25,400</span>
                    <span className="text-xs text-white/40">/ 月</span>
                  </div>
                  <div className="text-[13px] text-white/40 mt-1">传统模式 (8-10人工团队)</div>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 text-sm font-medium p-2.5 rounded-lg text-center mt-3 border border-emerald-500/20">
                  成本缩减 67%
                </div>
              </div>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Clock className="w-8 h-8 text-blue-400/50" />
              </div>
              <h3 className="text-xl text-white font-medium mb-6">时间资产释放</h3>
              <div className="flex flex-col justify-center h-full pb-4">
                <div className="text-6xl font-light text-white mb-2 group-hover:scale-110 transition-transform origin-left duration-500">
                  166<span className="text-3xl text-white/50"> h</span>
                </div>
                <div className="text-base text-white/80 font-medium">每月释放纯执行时间</div>
                <ul className="text-[13px] text-white/40 mt-4 space-y-2">
                  <li>• 自动竞品监控节省 60 小时</li>
                  <li>• 智能内容分发节省 25 小时</li>
                  <li>• 数据报告聚合节省 16 小时</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard isExporting={isExporting} className="p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Activity className="w-8 h-8 text-purple-400/50" />
              </div>
              <h3 className="text-xl text-white font-medium mb-6">产能成倍暴发</h3>
              <div className="space-y-4 pb-2">
                <div>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl font-light text-white">60-90</span>
                    <span className="text-sm text-white/40">条 / 月</span>
                  </div>
                  <div className="text-[13px] text-white/70 mt-1 flex justify-between">
                    <span>高品质短视频产出</span>
                    <span className="text-purple-400 font-bold">3x</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl font-light text-white">
                      90<span className="text-2xl">%</span>+
                    </span>
                  </div>
                  <div className="text-[13px] text-white/70 mt-1 flex justify-between">
                    <span>社群留言/意向回复率</span>
                    <span className="text-purple-400 font-bold">3x</span>
                  </div>
                </div>
                <div className="bg-purple-500/10 text-purple-400 text-sm font-medium p-2.5 rounded-lg text-center mt-3 border border-purple-500/20">
                  全天候在线互动
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      )
    }
  ];

  // ==========================================
  // 高清导出引擎 - 核心黑科技 (Fixed Size Renderer)
  // ==========================================
  const handleDownloadPNG = async () => {
    if (exportState.active) return;
    setExportState({ active: true, mode: 'png' });
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
      setExportIndex(currentSlide);
      await new Promise((resolve) => setTimeout(resolve, 600)); // 等待隐式画布重绘完成

      const captureNode = document.getElementById('export-frame');
      const canvas = await window.html2canvas(captureNode, {
        scale: 2,
        useCORS: true,
        foreignObjectRendering: true,
        backgroundColor: '#0a0a0c',
        logging: false
      });

      const link = document.createElement('a');
      link.download = `WOOD_WELL_Slide_${currentSlide + 1}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error(err);
      alert('PNG 导出失败，请检查网络连接。');
    } finally {
      setExportState({ active: false, mode: null });
    }
  };

  const handleDownloadPDF = async () => {
    if (exportState.active) return;
    setExportState({ active: true, mode: 'pdf' });

    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
      const { jsPDF } = window.jspdf;

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1536, 864] });
      const captureNode = document.getElementById('export-frame');

      for (let i = 0; i < slides.length; i++) {
        setExportIndex(i);
        await new Promise((r) => setTimeout(r, 600)); // 关键：等待每一页的静态剥离态渲染完毕

        const canvas = await window.html2canvas(captureNode, {
          scale: 2,
          useCORS: true,
          foreignObjectRendering: true,
          backgroundColor: '#0a0a0c',
          logging: false
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) pdf.addPage([1536, 864], 'landscape');
        pdf.addImage(imgData, 'JPEG', 0, 0, 1536, 864);
      }

      pdf.save('WOOD_WELL_OpenClaw_Strategy.pdf');
    } catch (err) {
      console.error(err);
      alert('PDF 导出失败，请检查网络连接。');
    } finally {
      setExportState({ active: false, mode: null });
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (exportState.active) return; // 导出期间禁用切页
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, exportState.active]);

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  const liveScale = Math.min(
    (viewportSize.width - LIVE_STAGE_PADDING * 2) / LIVE_STAGE_WIDTH,
    (viewportSize.height - LIVE_STAGE_PADDING * 2) / LIVE_STAGE_HEIGHT,
    1
  );
  const safeLiveScale = Number.isFinite(liveScale) && liveScale > 0 ? liveScale : 1;

  return (
    <>
      {/* 沉浸式导出遮罩 - 向用户展示进度，同时保护后台隐式渲染 */}
      {exportState.active && (
        <div
          data-html2canvas-ignore="true"
          className="fixed inset-0 z-[9999] bg-[#0a0a0c]/90 backdrop-blur-md flex flex-col items-center justify-center text-white"
        >
          <Loader2 className="w-12 h-12 animate-spin text-emerald-400 mb-6" />
          <h2 className="text-2xl font-semibold tracking-wider">
            {exportState.mode === 'pdf' ? '正在进行高级像素级抓取并打包 PDF...' : '正在生成定格高清 PNG 快照...'}
          </h2>
          <p className="text-white/50 mt-4 font-mono text-sm">
            {exportState.mode === 'pdf'
              ? `( 正在处理定格图层 ${exportIndex + 1} / 共 ${slides.length} 页 )`
              : '请稍候...'}
          </p>
          <p className="text-emerald-500/50 mt-8 text-xs tracking-widest uppercase font-bold">
            Please do not close the window
          </p>
        </div>
      )}

      {/* 主展示区 (供用户演讲和交互，带完整的动画和滤镜特效) */}
      <div className="h-screen w-full bg-[#030305] flex items-center justify-center overflow-hidden font-sans selection:bg-emerald-500/30">
        <div className="relative flex items-center justify-center w-full h-full p-3 sm:p-4">
          <div
            className="relative"
            style={{
              width: `${LIVE_STAGE_WIDTH * safeLiveScale}px`,
              height: `${LIVE_STAGE_HEIGHT * safeLiveScale}px`
            }}
          >
        <div
          id="presentation-live-area"
          className="relative bg-[#0a0a0c] rounded-[2.5rem] overflow-hidden shadow-[0_0_120px_rgba(255,255,255,0.03)] border border-white/5"
          style={{
            width: `${LIVE_STAGE_WIDTH}px`,
            height: `${LIVE_STAGE_HEIGHT}px`,
            transform: `scale(${safeLiveScale})`,
            transformOrigin: 'center center'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0 scale-100 z-10 pointer-events-auto'
                  : index < currentSlide
                    ? 'opacity-0 -translate-y-16 scale-95 z-0 pointer-events-none'
                    : 'opacity-0 translate-y-16 scale-105 z-0 pointer-events-none'
              }`}
            >
              {slide.content(false)} {/* live mode, passes false to isExporting */}
            </div>
          ))}

          {/* 顶部状态栏与下载按钮 */}
          <div className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center z-50 pointer-events-none">
            <div className="text-white/30 text-xs font-semibold tracking-[0.2em] uppercase">
              Confidential / Internal Use Only
            </div>

            <div className="flex items-center space-x-4 pointer-events-auto">
              <div className="flex space-x-3 mr-4">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-700 ${idx === currentSlide ? 'w-10 bg-white/80' : 'w-2 bg-white/10'}`}
                  />
                ))}
              </div>

              <button
                onClick={handleDownloadPNG}
                className="flex items-center space-x-2 text-white/80 hover:text-blue-400 transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
              >
                <ImageIcon className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider">存为 PNG</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2 text-white/80 hover:text-emerald-400 transition-all bg-emerald-500/10 hover:bg-emerald-500/20 px-5 py-2 rounded-full border border-emerald-500/30"
              >
                <FileDown className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider">下载全版 PDF</span>
              </button>
            </div>
          </div>

          {/* 底部导航 Dock */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center space-x-6 px-5 py-2.5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentSlide === 0
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-white hover:bg-white/10 active:scale-90 hover:text-emerald-400'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-white/50 font-medium text-sm w-16 text-center tabular-nums tracking-widest pdf-block-center pdf-tight">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentSlide === slides.length - 1
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-white hover:bg-white/10 active:scale-90 hover:text-emerald-400'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      {/* 隐式定格渲染池 (The Magic Off-screen Renderer)
        由于被放置在 z-index:-9999 的最底层，它对用户肉眼不可见，但在 DOM 树中是被真实渲染的。
        固定为 1536x864 的绝对分辨率，彻底防止响应式排版引发的错位。
        传入 isExporting=true，自动剥离所有导致截图引擎崩溃的特效(渐变字、大面积模糊等)。
      */}
      <div className="fixed top-0 left-0 z-[-9999] pointer-events-none opacity-100">
        <div id="export-frame" className="w-[1536px] h-[864px] bg-[#0a0a0c] relative overflow-hidden font-sans text-white">
          {/* 只挂载需要导出的那一页，无动画，纯静态 */}
          <div className="absolute top-0 left-0 w-full h-full">{slides[exportIndex]?.content(true)}</div>

          {/* 静态页眉 */}
          <div className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center z-50">
            <div className="text-white/30 text-xs font-semibold tracking-[0.2em] uppercase">
              Confidential / Internal Use Only
            </div>
            <div className="flex space-x-3 mr-4">
              {slides.map((_, idx) => (
                <div
                  key={`header-dot-${idx}`}
                  className={`h-1 rounded-full ${idx === exportIndex ? 'w-10 bg-white/80' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>
          </div>

          {/* 静态页脚 (无箭头) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center space-x-6 px-5 py-2.5 bg-[#121217] border border-white/10 rounded-full shadow-2xl">
              <span className="text-white/50 font-medium text-sm w-16 text-center tabular-nums tracking-widest pdf-block-center pdf-tight">
                {String(exportIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
