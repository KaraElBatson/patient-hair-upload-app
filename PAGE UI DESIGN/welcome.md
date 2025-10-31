<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Hair Journey Onboarding</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#13ec92",
            "background-light": "#f6f8f7",
            "background-dark": "#10221a",
          },
          fontFamily: {
            "display": ["Manrope", "sans-serif"]
          },
          borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
      },
    }
  </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body>
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root font-display overflow-x-hidden" style='font-family: Manrope, "Noto Sans", sans-serif;'>
<div class="flex flex-col flex-1">
<div class="flex w-full grow @container pt-3">
<div class="w-full gap-1 overflow-hidden @[480px]:gap-2 aspect-[1/1] flex max-h-[40vh] px-4">
<div class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-xl flex-1" data-alt="Abstract illustration of flowing hair lines in soft, warm colors." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzXzoxbYrzQCnKlGDRFp_m9YfdvUqPqidIScWNngdrae7Yyuqgrnao2sc_Kufq-w_Ei1khBOtbfdwRnuNUWHjTLwM7rz0kciDFrYJyzuntpSgKCEHP0iQ143a6IRztVLjMdZJecfBpXYcy7rp47nrV1I1SVLfGXoBjiRYJmiqHNarGKAQkXIE2ATx4-LTkMsz6uFwfLnW0fqPrgkDCyTLt3KVqm3AWg1njjPT5_LAerTKwg4Uh1vSmz-IrNAR1QfMrrF2GDN1ZRHW2");'></div>
</div>
</div>
<div class="flex flex-col p-4 pb-0">
<h1 class="text-[#0d1b16] dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Let's Capture Your Hair Journey</h1>
<p class="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">We'll guide you through taking 5 photos from different angles.</p>
</div>
<div class="flex flex-col gap-4 p-4">
<div class="flex items-center gap-4 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700/50 rounded-lg px-4 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="text-[#0d1b16] dark:text-white flex items-center justify-center shrink-0 size-10">
<span class="material-symbols-outlined text-2xl">schedule</span>
</div>
<p class="text-[#0d1b16] dark:text-white text-base font-normal leading-normal flex-1 truncate">Takes about 2-3 minutes</p>
</div>
</div>
</div>
</div>
<div class="flex flex-col sticky bottom-0 bg-background-light dark:bg-background-dark pt-2 pb-5 px-4 gap-3 border-t border-slate-200 dark:border-slate-800">
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-primary text-[#0d1b16] text-base font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Get Started</span>
</button>
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-transparent text-primary text-base font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Why do we need these photos?</span>
</button>
</div>
</div>
</body></html>