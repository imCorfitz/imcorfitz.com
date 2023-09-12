import Image from 'next/image'

import EducationIcon01 from '@/public/images/education-icon-01.svg'
import EducationIcon02 from '@/public/images/education-icon-02.svg'

export default function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Education</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EducationIcon01} width={24} height={24} alt="Purdue University" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">May 2017 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2020</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Master of Technology Science</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Purdue University</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Throughout my years at Purdue, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EducationIcon02} width={24} height={26} alt="San Jose State UniversitySan Jose State University" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">May 2013 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2017</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Bachelor of Technology</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">San Jose State UniversitySan Jose State University</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Throughout my years at SJSU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}