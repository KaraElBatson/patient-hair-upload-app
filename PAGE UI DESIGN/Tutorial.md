<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Photo Guide Tutorial</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script>
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
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-size: 24px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<header class="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
<div class="flex size-12 shrink-0 items-center justify-start text-zinc-900 dark:text-zinc-50">
<span class="material-symbols-outlined">arrow_back</span>
</div>
<h1 class="text-zinc-900 dark:text-zinc-50 text-base font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Step 1 of 3</h1>
<div class="flex w-12 items-center justify-end">
<p class="text-zinc-500 dark:text-zinc-400 text-sm font-bold leading-normal tracking-[0.015em] shrink-0">Skip</p>
</div>
</header>
<main class="flex-1 flex flex-col">
<div class="px-4 py-2 text-center">
<h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-50">A quick guide to great photos</h2>
</div>
<div class="w-full grow py-3">
<div class="w-full flex items-center justify-center p-4">
<img class="aspect-[4/3] w-full max-w-sm h-auto object-cover rounded-xl shadow-lg" data-alt="Animated illustration showing a person taking a selfie for hair analysis." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-yATnqvPrUr5tSz4up9mzImwcvlFtGYFoQRJA7KIwWovN0MP9T7kAoIlqAYr6lZZzShJirukdtttyHhVyBK-tCmbX_t_MZ0-BHtLfSQVNnClY8zWfdTJkzwNjHz-QRSJvmWBIj3OA225mOHn6j0TRVspEmv_TQsFzXyszTrf5xRTAieHETsx94JD4WBN6R2zc9TVFVKvIUE6vJWCR_hTWgdzncQamd_9mvamziX1mdwVxCobM_EtLX0IysDb7d70w1j2u-WC_8I0e"/>
</div>
</div>
<div class="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden snap-x snap-mandatory">
<div class="flex items-stretch p-4 pt-0 gap-4">
<div class="flex w-screen max-w-sm snap-center shrink-0 flex-col gap-4 rounded-xl bg-white dark:bg-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5">
<div class="flex items-center gap-3">
<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined">light_mode</span>
</div>
<p class="text-zinc-900 dark:text-zinc-50 text-base font-bold leading-normal">Find Good Lighting</p>
</div>
<p class="text-zinc-600 dark:text-zinc-300 text-sm font-normal leading-normal">Use natural, even light and avoid shadows. A plain, neutral background works best.</p>
<div class="grid grid-cols-2 gap-3 mt-2">
<div>
<img class="aspect-square w-full rounded-lg object-cover" data-alt="A woman in good, even lighting, which is a 'Do' example." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDddEUHpS1U_871pni82AugPbfEvU34LqcKI4Q3mhFSM5-uZ2qj2pGyDmNmILi1DHpfRO3MoaoCZFO9QeFO_O-KMvMbE-YJL70g7otiCNKIsR0sdqLDdobT46k62-zOhYXiH01TKqKoMUfAxra-A5LnkhsD1DEZGn35G3x2NADJtHSt3fI-rPOD6c-AYBPQpt1oZIZjZWiv9mJfWs3kOb223mR3ekmZLRgf5c2NgbkljfZTa_NQkACDNA2vPIQ8gZ8mOe8OW1edbOGr"/>
<div class="mt-2 flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-green-500 text-base">check_circle</span>
<p class="text-xs font-semibold text-green-600 dark:text-green-400">Do</p>
</div>
</div>
<div>
<img class="aspect-square w-full rounded-lg object-cover filter grayscale" data-alt="A woman in harsh shadows, which is a 'Don't' example." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2v1qnk4xk-MDPoKvw4FipgeL1KpWn4ssWlUmQs3TttxvhUuKsZ01nfQKet2hf8TkGndQwELCP-pC-OsR4TirjDAjhUi_EgcnqyX3bMYUnS7ZqmIuS6R-D-LpL3D8IoOFGR5DZzFTZ9sWAVng9zmAQOqE6vwYFxu3dwVTmuOopo7YyfN1gGI5CieYAPdNR19uduOqctCb6xSYfPBJ0DPxGrNEFGsP5Xtka-Bwlx9eEqoHE3_e5Ca-m6aOAC4OHnCt0ywD3PvRlSIJ"/>
<div class="mt-2 flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-red-500 text-base">cancel</span>
<p class="text-xs font-semibold text-red-600 dark:text-red-400">Don't</p>
</div>
</div>
</div>
</div>
<div class="flex w-screen max-w-sm snap-center shrink-0 flex-col gap-4 rounded-xl bg-white dark:bg-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5">
<div class="flex items-center gap-3">
<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined">center_focus_strong</span>
</div>
<p class="text-zinc-900 dark:text-zinc-50 text-base font-bold leading-normal">Keep it Clear &amp; Focused</p>
</div>
<p class="text-zinc-600 dark:text-zinc-300 text-sm font-normal leading-normal">Hold your phone at arm's length, keep it steady, and ensure your hair is in sharp focus.</p>
<div class="grid grid-cols-2 gap-3 mt-2">
<div>
<img class="aspect-square w-full rounded-lg object-cover" data-alt="A clear, focused portrait, which is a 'Do' example." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8U8FrVfSukExi0OPkaKb6vuP30dJ_ZEjk_b7-JEkJMx1SgNcgOzy5yVjm315bowtbaNBRVh6sYLt8_51LBUa1sE9cYPhDuzWWJTOEwylGvwY44MfU1TETAtQxDIUjTKR1z9_cdpqMNblXuZpxaKmfsVgfWbtsLT-qR_WG36tPT-_JMFjqR_uwspHOwn9780BC-moGgOycPIeKfVL9c8fb8qnRqNTRhqoVVHj8MBNWM3fN53Ea7Sn9l9K1eK68cMY7CsoIa4z-XgTP"/>
<div class="mt-2 flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-green-500 text-base">check_circle</span>
<p class="text-xs font-semibold text-green-600 dark:text-green-400">Do</p>
</div>
</div>
<div>
<img class="aspect-square w-full rounded-lg object-cover filter blur-sm" data-alt="A blurry portrait, which is a 'Don't' example." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB4ppDiOMkxqcfbvg2v5h4h-fZYDVoqFOUEgPULekaPbNCysOOlMUEkQ-HzlE3FscjWni9T7oq-3XP7mrz4fbKwDwJNWUZLEsqp-8j1xW_7kQ61Xt0ADNbzdrXM-c7R8ASzkQD0ElC9iOQOknJcjKDZQ7Bqb-IE7CKN7_ifjiNryL3aqqLyTS8czaRDzyC_6yTEsyVYBNDwGxQD9Ijuz-tmqU-6rwqEGKA2INKHefhpCfGEova2PRtRN0ntMjtDuk6WOIrTCOuV8Gc"/>
<div class="mt-2 flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-red-500 text-base">cancel</span>
<p class="text-xs font-semibold text-red-600 dark:text-red-400">Don't</p>
</div>
</div>
</div>
</div>
<div class="flex w-screen max-w-sm snap-center shrink-0 flex-col gap-4 rounded-xl bg-white dark:bg-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5">
<div class="flex items-center gap-3">
<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined">collections</span>
</div>
<p class="text-zinc-900 dark:text-zinc-50 text-base font-bold leading-normal">Capture All 5 Angles</p>
</div>
<p class="text-zinc-600 dark:text-zinc-300 text-sm font-normal leading-normal">We need five angles to get the full picture: Front, Back, Left Side, Right Side, and Top.</p>
<div class="grid grid-cols-5 gap-2 mt-2">
<div class="flex flex-col items-center gap-1.5 text-center">
<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-background-light dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"><span class="material-symbols-outlined">sentiment_satisfied</span></div>
<p class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Front</p>
</div>
<div class="flex flex-col items-center gap-1.5 text-center">
<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-background-light dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"><span class="material-symbols-outlined">straighten</span></div>
<p class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Back</p>
</div>
<div class="flex flex-col items-center gap-1.5 text-center">
<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-background-light dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"><span class="material-symbols-outlined">arrow_back</span></div>
<p class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Left</p>
</div>
<div class="flex flex-col items-center gap-1.5 text-center">
<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-background-light dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"><span class="material-symbols-outlined">arrow_forward</span></div>
<p class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Right</p>
</div>
<div class="flex flex-col items-center gap-1.5 text-center">
<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-background-light dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"><span class="material-symbols-outlined">arrow_upward</span></div>
<p class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Top</p>
</div>
</div>
</div>
</div>
</div>
</main>
<footer class="sticky bottom-0 bg-background-light dark:bg-background-dark p-4 pt-2 border-t border-zinc-200 dark:border-zinc-700/50">
<div class="flex w-full items-center justify-between gap-4 py-3">
<button class="flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<div class="flex flex-row items-center justify-center gap-2">
<div class="h-2 w-4 rounded-full bg-primary"></div>
<div class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
<div class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
</div>
<button class="flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
<button class="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-zinc-900 text-base font-bold leading-normal tracking-[0.015em]">
<span class="truncate">I'm Ready to Start</span>
</button>
</footer>
</div>
</body></html>