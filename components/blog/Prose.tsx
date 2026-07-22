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
        text-slate-700

        [&_h2]:mt-14
        [&_h2]:text-3xl
        [&_h2]:font-bold
        [&_h2]:tracking-tight
        [&_h2]:text-slate-900

        [&_h3]:mt-10
        [&_h3]:text-2xl
        [&_h3]:font-bold
        [&_h3]:tracking-tight
        [&_h3]:text-slate-900

        [&_p]:mt-6
        [&_p]:text-lg
        [&_p]:leading-8

        [&_ul]:mt-6
        [&_ul]:list-disc
        [&_ul]:space-y-3
        [&_ul]:pl-6

        [&_ol]:mt-6
        [&_ol]:list-decimal
        [&_ol]:space-y-3
        [&_ol]:pl-6

        [&_li]:pl-1
        [&_li]:leading-8

        [&_strong]:font-semibold
        [&_strong]:text-slate-900

        [&_a]:font-medium
        [&_a]:text-blue-600
        [&_a]:underline
        [&_a]:underline-offset-4
        hover:[&_a]:text-blue-700

        [&_blockquote]:mt-8
        [&_blockquote]:border-l-4
        [&_blockquote]:border-blue-600
        [&_blockquote]:bg-slate-50
        [&_blockquote]:px-6
        [&_blockquote]:py-4
        [&_blockquote]:italic

        [&_code]:rounded
        [&_code]:bg-slate-100
        [&_code]:px-1.5
        [&_code]:py-0.5
        [&_code]:font-mono
        [&_code]:text-sm
        [&_code]:text-slate-900

        [&_pre]:mt-8
        [&_pre]:overflow-x-auto
        [&_pre]:rounded-2xl
        [&_pre]:bg-slate-950
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
