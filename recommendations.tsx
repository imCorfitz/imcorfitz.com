import Image from 'next/image'

import Testimonial03 from '@/public/images/testimonial-03.jpg'
import Testimonial04 from '@/public/images/testimonial-04.jpg'

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Recommendations</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={Testimonial03} width={56} height={56} alt="Testimonial 03" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Mary Christopher</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Designer Lead at Inventa Inc.</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">“ Working with James on projects is a breath of fresh air. He is an extremely talented dev, with an outstanding work ethic, eye for detail, and speed. James doesn't just execute and deliver incredible codes but works with you to challenge the product or flow at hand to create the best possible solution. ”</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={Testimonial04} width={56} height={56} alt="Testimonial 04" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Harry Kastelli</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">CEO & Founder Mark Corp.</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">“ James is an excellent developer. He is not just quick to evaluate and translate ideas into high-fidelity codes, but he's also well-versed in UX strategy. While working together, James handled our external partnership with Design Agencies, and delivered weekly progress reports with fresh ideas. ”</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}