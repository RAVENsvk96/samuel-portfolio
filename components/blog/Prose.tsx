import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
};

export default function Prose({ children }: ProseProps) {
  return (
    <div
      className="
        mt-12
        max-w-none
        text-slate-300
        sm:mt-16

        [&_h2]:mt-14
        [&_h2]:text-3xl
        [&_h2]:font-bold
        [&_h2]:tracking-tight
        [&_h2]:text-white

        [&_h3]:mt-10
        [&_h3]:text-2xl
        [&_h3]:font-bold
        [&_h3]:tracking-tight
        [&_h3]:text-white

        [&_p]:mt-6
        [&_p]:text-lg
        [&_p]:leading-8

        [&_ul]:mt-6
        [&_ul]:list-disc
        [&_ul]:space-y-3
        [&_ul]:pl-6
        [&_ul]:marker:text-blue-400

        [&_ol]:mt-6
        [&_ol]:list-decimal
        [&_ol]:space-y-3
        [&_ol]:pl-6
        [&_ol]:marker:font-semibold
        [&_ol]:marker:text-blue-400

        [&_li]:pl-1
        [&_li]:leading-8

        [&_strong]:font-semibold
        [&_strong]:text-white

        [&_a]:font-medium
        [&_a]:text-blue-300
        [&_a]:underline
        [&_a]:decoration-blue-400/50
        [&_a]:underline-offset-4
        hover:[&_a]:text-blue-200

        [&_blockquote]:mt-8
        [&_blockquote]:rounded-r-2xl
        [&_blockquote]:border-l-4
        [&_blockquote]:border-blue-400
        [&_blockquote]:bg-white/[0.045]
        [&_blockquote]:px-6
        [&_blockquote]:py-4
        [&_blockquote]:italic
        [&_blockquote]:text-slate-200

        [&_code]:rounded
        [&_code]:bg-white/10
        [&_code]:px-1.5
        [&_code]:py-0.5
        [&_code]:font-mono
        [&_code]:text-sm
        [&_code]:text-blue-200

        [&_pre]:mt-8
        [&_pre]:overflow-x-auto
        [&_pre]:rounded-2xl
        [&_pre]:border
        [&_pre]:border-white/10
        [&_pre]:bg-[#020B1D]
        [&_pre]:p-6
        [&_pre]:text-sm
        [&_pre]:leading-7
        [&_pre]:text-slate-100

        [&_pre_code]:bg-transparent
        [&_pre_code]:p-0
        [&_pre_code]:text-inherit
      "
    >
      {children}
    </div>
  );
}
