import React, { useState, useEffect } from 'react'

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return a placeholder that matches the size/background to prevent layout shift
    return <div className="w-full h-full bg-black"></div>
  }

  return <>{children}</>
}

export const SystemArchitectureSvg = () => (
  <ClientOnly>
    <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="440" height="200" fill="#000"></rect>
      <defs>
        <pattern id="dots-hld" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.9" fill="#ffffff08"></circle>
        </pattern>
        <marker id="arr-hld" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#3B82F6"></path>
        </marker>
        <marker id="arr-faint" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#3b82f655"></path>
        </marker>
        <radialGradient id="packet-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="1"></stop>
          <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.6"></stop>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <rect width="440" height="200" fill="url(#dots-hld)"></rect>
      <line x1="78" y1="100" x2="104" y2="100" stroke="#3B82F6" strokeWidth="1.8" strokeDasharray="4 3" markerEnd="url(#arr-hld)">
        <animate attributeName="strokeDashoffset" from="0" to="-14" dur="0.9s" repeatCount="indefinite"></animate>
      </line>
      <path d="M160 92 C 176 92, 176 60, 192 60" stroke="#3b82f6aa" strokeWidth="1.6" fill="none" markerEnd="url(#arr-hld)"></path>
      <path d="M160 108 C 176 108, 176 140, 192 140" stroke="#3b82f6aa" strokeWidth="1.6" fill="none" markerEnd="url(#arr-hld)"></path>
      <line x1="266" y1="60" x2="300" y2="62" stroke="#3b82f6aa" strokeWidth="1.6" markerEnd="url(#arr-hld)"></line>
      <line x1="266" y1="140" x2="300" y2="136" stroke="#3b82f6aa" strokeWidth="1.6" markerEnd="url(#arr-hld)"></line>
      <rect x="14" y="76" width="64" height="48" rx="9" fill="#111" stroke="#ffffff18" strokeWidth="1.2"></rect>
      <circle cx="46" cy="96" r="11" fill="#1D4ED8" opacity="0.9"></circle>
      <circle cx="46" cy="92" r="4.2" fill="#fff"></circle>
      <path d="M35 106 Q46 99 57 106" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round"></path>
      <text x="46" y="138" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="700" fontFamily="sans-serif">Client</text>
      <text x="46" y="148" textAnchor="middle" fontSize="7" fill="#ffffff45" fontFamily="sans-serif">Browser · App</text>
      <rect x="104" y="78" width="56" height="44" rx="9" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.8">
        <animate attributeName="strokeOpacity" values="0.55;1;0.55" dur="2.4s" repeatCount="indefinite"></animate>
      </rect>
      <circle cx="120" cy="100" r="3" fill="#60A5FA"></circle>
      <path d="M123 100 L140 88 M123 100 L140 112 M123 100 L144 100" stroke="#60A5FA" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
      <circle cx="142" cy="88" r="2.4" fill="#3B82F6"></circle>
      <circle cx="142" cy="112" r="2.4" fill="#3B82F6"></circle>
      <circle cx="146" cy="100" r="2.4" fill="#3B82F6"></circle>
      <text x="132" y="138" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="700" fontFamily="sans-serif">Load Balancer</text>
      <text x="132" y="148" textAnchor="middle" fontSize="7" fill="#60A5FA" fontFamily="sans-serif">Routes traffic</text>
      <rect x="194" y="40" width="72" height="40" rx="8" fill="#111" stroke="#ffffff18" strokeWidth="1.2"></rect>
      <rect x="206" y="50" width="48" height="6" rx="2" fill="#3B82F6" opacity="0.9"></rect>
      <rect x="206" y="60" width="48" height="6" rx="2" fill="#1D4ED8" opacity="0.6"></rect>
      <circle cx="248" cy="53" r="1.8" fill="#60A5FA">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"></animate>
      </circle>
      <text x="230" y="74" textAnchor="middle" fontSize="7.5" fill="#CBD5E1" fontWeight="600" fontFamily="sans-serif">App Server</text>
      <rect x="194" y="120" width="72" height="40" rx="8" fill="#111" stroke="#ffffff18" strokeWidth="1.2"></rect>
      <rect x="206" y="130" width="48" height="6" rx="2" fill="#3B82F6" opacity="0.9"></rect>
      <rect x="206" y="140" width="48" height="6" rx="2" fill="#1D4ED8" opacity="0.6"></rect>
      <circle cx="248" cy="133" r="1.8" fill="#60A5FA">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" begin="0.8s" repeatCount="indefinite"></animate>
      </circle>
      <text x="230" y="154" textAnchor="middle" fontSize="7.5" fill="#CBD5E1" fontWeight="600" fontFamily="sans-serif">App Server</text>
      <rect x="300" y="40" width="78" height="44" rx="9" fill="#111" stroke="#ffffff18" strokeWidth="1.2"></rect>
      <path d="M314 50 L308 62 L314 62 L310 72 L324 58 L317 58 L322 50 Z" fill="#60A5FA"></path>
      <text x="332" y="59" textAnchor="start" fontSize="9" fill="#fff" fontWeight="700" fontFamily="sans-serif">Cache</text>
      <text x="332" y="70" textAnchor="start" fontSize="6.6" fill="#ffffff45" fontFamily="sans-serif">Redis · Fast</text>
      <rect x="300" y="112" width="78" height="50" rx="9" fill="#111" stroke="#ffffff18" strokeWidth="1.2"></rect>
      <ellipse cx="324" cy="128" rx="14" ry="4.5" fill="#1D4ED8" opacity="0.85"></ellipse>
      <rect x="310" y="128" width="28" height="14" fill="#1A2744"></rect>
      <ellipse cx="324" cy="142" rx="14" ry="4.5" fill="#1D4ED8" opacity="0.6"></ellipse>
      <text x="356" y="130" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="700" fontFamily="sans-serif">DB</text>
      <text x="349" y="155" textAnchor="middle" fontSize="6.8" fill="#ffffff45" fontFamily="sans-serif">SQL · Replicas</text>
      <circle r="6" fill="url(#packet-glow)">
        <animate attributeName="cx" values="78;104;160;230;300;300" keyTimes="0;0.2;0.4;0.65;0.9;1" dur="3s" repeatCount="indefinite"></animate>
        <animate attributeName="cy" values="100;100;100;60;62;62" keyTimes="0;0.2;0.4;0.65;0.9;1" dur="3s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0;1;1;1;1;0" keyTimes="0;0.1;0.4;0.65;0.9;1" dur="3s" repeatCount="indefinite"></animate>
      </circle>
      <circle r="2" fill="#FFFFFF">
        <animate attributeName="cx" values="78;104;160;230;300;300" keyTimes="0;0.2;0.4;0.65;0.9;1" dur="3s" repeatCount="indefinite"></animate>
        <animate attributeName="cy" values="100;100;100;60;62;62" keyTimes="0;0.2;0.4;0.65;0.9;1" dur="3s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0;1;1;1;1;0" keyTimes="0;0.1;0.4;0.65;0.9;1" dur="3s" repeatCount="indefinite"></animate>
      </circle>
      <circle r="5.5" fill="url(#packet-glow)" opacity="0.85">
        <animate attributeName="cx" values="78;104;160;230;300;300" keyTimes="0;0.2;0.4;0.65;0.9;1" dur="3s" begin="1.5s" repeatCount="indefinite"></animate>
        <animate attributeName="cy" values="100;100;100;140;136;136" keyTimes="0;0.2;0.4;0.65;0.9;1" dur="3s" begin="1.5s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0;1;1;1;1;0" keyTimes="0;0.1;0.4;0.65;0.9;1" dur="3s" begin="1.5s" repeatCount="indefinite"></animate>
      </circle>
    </svg>
  </ClientOnly>
)

export const LowLevelDesignSvg = () => (
  <ClientOnly>
    <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="420" height="200" fill="#000"></rect>
      <defs>
        <pattern id="dots-lld2" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="11" cy="11" r="0.8" fill="#ffffff06"></circle>
        </pattern>
        <marker id="realize-arr" markerWidth="11" markerHeight="11" refX="9.5" refY="5.5" orient="auto">
          <path d="M0,0 L11,5.5 L0,11 Z" fill="#0f0f0f" stroke="#8b5cf6" strokeWidth="1.3"></path>
        </marker>
        <radialGradient id="poly-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="1"></stop>
          <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.6"></stop>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <rect width="420" height="200" fill="url(#dots-lld2)"></rect>
      <line x1="210" y1="74" x2="210" y2="104" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3">
        <animate attributeName="strokeDashoffset" from="0" to="-14" dur="0.9s" repeatCount="indefinite"></animate>
      </line>
      <line x1="95" y1="104" x2="325" y2="104" stroke="#8b5cf6" strokeWidth="1.5"></line>
      <line x1="95" y1="104" x2="95" y2="124" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#realize-arr)">
        <animate attributeName="strokeDashoffset" from="0" to="-14" dur="0.9s" repeatCount="indefinite"></animate>
      </line>
      <line x1="325" y1="104" x2="325" y2="124" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#realize-arr)">
        <animate attributeName="strokeDashoffset" from="0" to="-14" dur="0.9s" repeatCount="indefinite"></animate>
      </line>
      <circle r="4.5" fill="url(#poly-glow)">
        <animate attributeName="cx" values="210;210;95;95" keyTimes="0;0.4;0.85;1" dur="3s" repeatCount="indefinite"></animate>
        <animate attributeName="cy" values="74;104;104;124" keyTimes="0;0.4;0.85;1" dur="3s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" repeatCount="indefinite"></animate>
      </circle>
      <circle r="4.5" fill="url(#poly-glow)">
        <animate attributeName="cx" values="210;210;325;325" keyTimes="0;0.4;0.85;1" dur="3s" begin="1.5s" repeatCount="indefinite"></animate>
        <animate attributeName="cy" values="74;104;104;124" keyTimes="0;0.4;0.85;1" dur="3s" begin="1.5s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" begin="1.5s" repeatCount="indefinite"></animate>
      </circle>
      <rect x="142" y="14" width="136" height="58" rx="6" fill="#0f0f0f" stroke="#8b5cf6" strokeWidth="1.6">
        <animate attributeName="strokeOpacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite"></animate>
      </rect>
      <rect x="142" y="14" width="136" height="28" rx="6" fill="#1e1b4b"></rect>
      <rect x="142" y="36" width="136" height="6" fill="#1e1b4b"></rect>
      <text x="210" y="25" textAnchor="middle" fontSize="8" fill="#a78bfa" fontFamily="monospace">«interface»</text>
      <text x="210" y="37" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700" fontFamily="sans-serif">Shape</text>
      <text x="210" y="58" textAnchor="middle" fontSize="9" fill="#c4b5fd" fontFamily="monospace">+ area(): double</text>
      <rect x="33" y="124" width="124" height="56" rx="6" fill="#0f0f0f" stroke="#6366f1" strokeWidth="1.2"></rect>
      <rect x="33" y="124" width="124" height="22" rx="6" fill="#1e1b4b80"></rect>
      <rect x="33" y="140" width="124" height="6" fill="#1e1b4b80"></rect>
      <text x="95" y="139" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700" fontFamily="sans-serif">Circle</text>
      <text x="95" y="166" textAnchor="middle" fontSize="9" fill="#818cf8" fontFamily="monospace">area → π·r²</text>
      <rect x="263" y="124" width="124" height="56" rx="6" fill="#0f0f0f" stroke="#6366f1" strokeWidth="1.2"></rect>
      <rect x="263" y="124" width="124" height="22" rx="6" fill="#1e1b4b80"></rect>
      <rect x="263" y="140" width="124" height="6" fill="#1e1b4b80"></rect>
      <text x="325" y="139" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700" fontFamily="sans-serif">Rectangle</text>
      <text x="325" y="166" textAnchor="middle" fontSize="9" fill="#818cf8" fontFamily="monospace">area → w·h</text>
    </svg>
  </ClientOnly>
)

export const SystemDesignScenariosSvg = () => (
  <ClientOnly>
    <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="420" height="200" fill="#000"></rect>
      <defs>
        <pattern id="dots-scen" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.7" fill="#ffffff05"></circle>
        </pattern>
      </defs>
      <rect width="420" height="200" fill="url(#dots-scen)"></rect>
      
      {/* Question bubble */}
      <g>
        <rect x="30" y="40" width="180" height="60" rx="30" fill="#1f1f1f" stroke="#ffffff10"></rect>
        <circle cx="210" cy="90" r="15" fill="#1f1f1f"></circle>
        <circle cx="220" cy="100" r="8" fill="#1f1f1f"></circle>
        <circle cx="30" cy="70" r="20" fill="#f59e0b"></circle>
        <text x="30" y="76" textAnchor="middle" fontSize="16" fill="#000" fontWeight="700">🦸</text>
        <text x="120" y="60" textAnchor="middle" fontSize="10" fill="#e0e0e0" fontFamily="sans-serif">What if two services update</text>
        <text x="120" y="75" textAnchor="middle" fontSize="10" fill="#e0e0e0" fontFamily="sans-serif">the same data simultaneously?</text>
      </g>
      
      {/* Answer bubble */}
      <g>
        <rect x="210" y="110" width="180" height="70" rx="30" fill="#2563eb" stroke="#60a5fa"></rect>
        <circle cx="390" cy="145" r="20" fill="#ffffff"></circle>
        <text x="390" y="151" textAnchor="middle" fontSize="16" fill="#000" fontWeight="700">🧑‍💻</text>
        <text x="300" y="130" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">That's a race condition /</text>
        <text x="300" y="145" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">lost-update. Handle it</text>
        <text x="300" y="160" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">with locking, versioning or idempotency...</text>
      </g>
    </svg>
  </ClientOnly>
)

export const DsaPatternsSvg = () => (
  <ClientOnly>
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="480" height="400" fill="#000"></rect>
      <defs>
        <pattern id="grid-dsap" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#ffffff08" strokeWidth="1"></path>
        </pattern>
      </defs>
      <rect width="480" height="400" fill="url(#grid-dsap)"></rect>
      <line x1="20" y1="200" x2="460" y2="200" stroke="#ffffff12" strokeWidth="1"></line>
      <text x="240" y="30" textAnchor="middle" fontSize="9" fill="#ffffff40" fontFamily="monospace" letterSpacing="2">SLIDING WINDOW PATTERN</text>
      <g>
        <rect x="2" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="24" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">3</text>
        <text x="24" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">0</text>
      </g>
      <g>
        <rect x="50" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="72" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">1</text>
        <text x="72" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">1</text>
      </g>
      <g>
        <rect x="98" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="120" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">4</text>
        <text x="120" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">2</text>
      </g>
      <g>
        <rect x="146" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="168" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">1</text>
        <text x="168" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">3</text>
      </g>
      <g>
        <rect x="194" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="216" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">5</text>
        <text x="216" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">4</text>
      </g>
      <g>
        <rect x="242" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="264" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">9</text>
        <text x="264" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">5</text>
      </g>
      <g>
        <rect x="290" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="312" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">2</text>
        <text x="312" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">6</text>
      </g>
      <g>
        <rect x="338" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="360" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">6</text>
        <text x="360" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">7</text>
      </g>
      <g>
        <rect x="386" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="408" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">5</text>
        <text x="408" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">8</text>
      </g>
      <g>
        <rect x="434" y="84" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="456" y="111" textAnchor="middle" fontSize="15" fill="#ffffff80" fontFamily="monospace">3</text>
        <text x="456" y="140" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">9</text>
      </g>
      <rect x="2" y="84" width="188" height="44" rx="4" fill="#3b82f6" fillOpacity="0.22">
        <animate attributeName="x" values="2;290;2" keyTimes="0;0.5;1" dur="8s" repeatCount="indefinite"></animate>
      </rect>
      <rect x="-1" y="78" width="194" height="56" rx="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5 3">
        <animate attributeName="x" values="-1;287;-1" keyTimes="0;0.5;1" dur="8s" repeatCount="indefinite"></animate>
        <animate attributeName="strokeDashoffset" from="0" to="-16" dur="1.2s" repeatCount="indefinite"></animate>
      </rect>
      <text y="72" textAnchor="middle" fontSize="8" fill="#60a5fa" fontFamily="monospace" fontWeight="600">L
        <animate attributeName="x" values="24;312;24" keyTimes="0;0.5;1" dur="8s" repeatCount="indefinite"></animate>
      </text>
      <text y="72" textAnchor="middle" fontSize="8" fill="#60a5fa" fontFamily="monospace" fontWeight="600">R
        <animate attributeName="x" values="168;456;168" keyTimes="0;0.5;1" dur="8s" repeatCount="indefinite"></animate>
      </text>
      <text x="240" y="190" textAnchor="middle" fontSize="8.5" fill="#ffffff20" fontFamily="monospace">Sliding Window · Subarray Problems</text>
      <text x="240" y="234" textAnchor="middle" fontSize="9" fill="#ffffff40" fontFamily="monospace" letterSpacing="2">TWO POINTERS PATTERN</text>
      <g>
        <rect x="2" y="284" width="44" height="44" rx="5" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="1.5"></rect>
        <text x="24" y="311" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="700" fontFamily="monospace">2</text>
        <text x="24" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">0</text>
      </g>
      <g>
        <rect x="50" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="72" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">4</text>
        <text x="72" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">1</text>
      </g>
      <g>
        <rect x="98" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="120" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">6</text>
        <text x="120" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">2</text>
      </g>
      <g>
        <rect x="146" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="168" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">8</text>
        <text x="168" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">3</text>
      </g>
      <g>
        <rect x="194" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="216" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">10</text>
        <text x="216" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">4</text>
      </g>
      <g>
        <rect x="242" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="264" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">12</text>
        <text x="264" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">5</text>
      </g>
      <g>
        <rect x="290" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="312" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">14</text>
        <text x="312" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">6</text>
      </g>
      <g>
        <rect x="338" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="360" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">16</text>
        <text x="360" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">7</text>
      </g>
      <g>
        <rect x="386" y="284" width="44" height="44" rx="5" fill="#111" stroke="#ffffff18" strokeWidth="1"></rect>
        <text x="408" y="311" textAnchor="middle" fontSize="15" fill="#ffffff45" fontWeight="400" fontFamily="monospace">18</text>
        <text x="408" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">8</text>
      </g>
      <g>
        <rect x="434" y="284" width="44" height="44" rx="5" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="1.5"></rect>
        <text x="456" y="311" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="700" fontFamily="monospace">20</text>
        <text x="456" y="340" textAnchor="middle" fontSize="9" fill="#ffffff25" fontFamily="monospace">9</text>
      </g>
      <text y="272" textAnchor="middle" fontSize="8" fill="#60a5fa" fontFamily="monospace" fontWeight="600">L
        <animate attributeName="x" values="24;168;24" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"></animate>
      </text>
      <text y="272" textAnchor="middle" fontSize="8" fill="#60a5fa" fontFamily="monospace" fontWeight="600">R
        <animate attributeName="x" values="456;312;456" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"></animate>
      </text>
      <line x1="24" y1="338" x2="168" y2="338" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2">
        <animate attributeName="strokeDashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite"></animate>
      </line>
      <line x1="456" y1="338" x2="312" y2="338" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2">
        <animate attributeName="strokeDashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite"></animate>
      </line>
      <circle r="3" fill="#60a5fa" cy="338">
        <animate attributeName="cx" values="24;168;24" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0.3;1;0.3" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"></animate>
      </circle>
      <circle r="3" fill="#60a5fa" cy="338">
        <animate attributeName="cx" values="456;312;456" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" values="0.3;1;0.3" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"></animate>
      </circle>
      <text x="240" y="384" textAnchor="middle" fontSize="8.5" fill="#ffffff20" fontFamily="monospace">Two Pointers · Target Sum</text>
    </svg>
  </ClientOnly>
)

// Add more SVG components here as needed
 