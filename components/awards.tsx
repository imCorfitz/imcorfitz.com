export default function Awards() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Awards</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start mb-1">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#FACC15" fillRule="nonzero" d="M10 20a.665.665 0 0 1-.471-.195l-2.471-2.472H3.334a.666.666 0 0 1-.667-.666v-3.724L.196 10.47a.666.666 0 0 1 0-.942l2.47-2.472V3.333c0-.368.299-.666.668-.666h3.724L9.528.195c.262-.26.683-.26.944 0l2.47 2.472h3.725c.369 0 .667.298.667.666v3.724l2.471 2.472c.26.26.26.682 0 .942l-2.471 2.472v3.724a.666.666 0 0 1-.667.666h-3.724l-2.471 2.472c-.13.13-.301.195-.472.195Zm0-6.364a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Z" />
              </svg>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">2023</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Best Creative Tech Dev</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Business Insider</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">This recognition not only affirmed my abilities as a web developer but also highlighted my unique approach to problem-solving.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start mb-1">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#FACC15" fillRule="nonzero" d="M10 20a.665.665 0 0 1-.471-.195l-2.471-2.472H3.334a.666.666 0 0 1-.667-.666v-3.724L.196 10.47a.666.666 0 0 1 0-.942l2.47-2.472V3.333c0-.368.299-.666.668-.666h3.724L9.528.195c.262-.26.683-.26.944 0l2.47 2.472h3.725c.369 0 .667.298.667.666v3.724l2.471 2.472c.26.26.26.682 0 .942l-2.471 2.472v3.724a.666.666 0 0 1-.667.666h-3.724l-2.471 2.472c-.13.13-.301.195-.472.195Zm0-6.364a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Z" />
              </svg>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">2022</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Best Creative Product Dev</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Bloomerg Tech</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">This recognition not only affirmed my abilities as a web developer but also highlighted my unique approach to problem-solving.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}