<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Photo Guidelines &amp; Help</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
    body {
      font-family: 'Manrope', sans-serif;
    }
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark">
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-gray-200 group/design-root overflow-x-hidden">
<!-- Top App Bar -->
<div class="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 justify-between backdrop-blur-sm">
<div class="flex size-12 shrink-0 items-center">
<span class="material-symbols-outlined text-2xl text-[#333333] dark:text-gray-200">arrow_back</span>
</div>
<h2 class="text-[#333333] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Photo Guidelines &amp; Help</h2>
<div class="w-12"></div>
</div>
<!-- Segmented Buttons -->
<div class="flex px-4 py-3">
<div class="flex h-11 flex-1 items-center justify-center rounded-xl bg-gray-200/50 dark:bg-background-dark/80 p-1">
<label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-background-light has-[:checked]:dark:bg-gray-700 has-[:checked]:shadow-sm has-[:checked]:text-primary dark:has-[:checked]:text-primary text-gray-500 dark:text-gray-400 text-sm font-semibold leading-normal">
<span class="truncate">Requirements</span>
<input checked="" class="invisible w-0" name="guidelines-tab" type="radio" value="Requirements"/>
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-background-light has-[:checked]:dark:bg-gray-700 has-[:checked]:shadow-sm has-[:checked]:text-primary dark:has-[:checked]:text-primary text-gray-500 dark:text-gray-400 text-sm font-semibold leading-normal">
<span class="truncate">FAQ</span>
<input class="invisible w-0" name="guidelines-tab" type="radio" value="FAQ"/>
</label>
</div>
</div>
<div class="flex flex-col space-y-8 px-4 pb-32">
<!-- Photo Requirements Section -->
<div>
<h1 class="text-[#333333] dark:text-gray-200 tracking-tight text-[32px] font-bold leading-tight text-left pb-3 pt-6">How to Take the Perfect Photos</h1>
<div class="flex flex-col space-y-1">
<!-- ListItem: Lighting -->
<div class="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-12">
<span class="material-symbols-outlined">light_mode</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#333333] dark:text-gray-200 text-base font-semibold leading-normal">Lighting</p>
<p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Natural light is best, avoid shadows and harsh glares.</p>
</div>
</div>
</div>
<!-- ListItem: Background -->
<div class="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-12">
<span class="material-symbols-outlined">wallpaper</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#333333] dark:text-gray-200 text-base font-semibold leading-normal">Background</p>
<p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Use a plain, solid-colored background that contrasts with you.</p>
</div>
</div>
</div>
<!-- ListItem: Angles -->
<div class="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-12">
<span class="material-symbols-outlined">camera</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#333333] dark:text-gray-200 text-base font-semibold leading-normal">Angles</p>
<p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Provide photos from the front, side, and back of your head.</p>
</div>
</div>
</div>
<!-- ListItem: Focus -->
<div class="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-12">
<span class="material-symbols-outlined">center_focus_strong</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#333333] dark:text-gray-200 text-base font-semibold leading-normal">Focus</p>
<p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Make sure your hair is in sharp focus, not blurry.</p>
</div>
</div>
</div>
</div>
</div>
<!-- Visual Examples Section -->
<div>
<h3 class="text-2xl font-bold tracking-tight text-[#333333] dark:text-gray-200 pb-4">See the Difference</h3>
<div class="space-y-6">
<!-- Image Comparison: Lighting -->
<div>
<p class="font-semibold mb-2 text-[#333333] dark:text-gray-300">Lighting</p>
<div class="grid grid-cols-2 gap-4">
<div class="flex flex-col">
<img class="w-full h-auto object-cover rounded-xl aspect-[3/4]" data-alt="A portrait of a person with good, even lighting on their face and hair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVbbiGIntvg3_1l5W4zoC2M3E8Ua19YG93Fua3qOxR4zohZUTG1fS2Sw_CF_SlR1uOp1MFxmDY0BkAFYE-JCUuU0QykQ6iGJfVnuOyZx36FOXb4sGFHDAA8336bqtl99WKIVDWHCPd626pmoKaUkaUVoPIZGnKyzdxihtlKLWfqphaqSB01sBz1l2kqHzBr1oZDuP9m2RTZ7M7Q3rZiPwCOS6jeRfUL1gciuRkKhhogbHon-5AuHMfl-jSPP6kLWlrYYo4y-Xsb8QQ"/>
<div class="flex items-center gap-1.5 pt-2">
<span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<span class="text-sm font-medium text-gray-600 dark:text-gray-300">Good</span>
</div>
</div>
<div class="flex flex-col">
<img class="w-full h-auto object-cover rounded-xl aspect-[3/4]" data-alt="A portrait of a person with harsh shadows and poor lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Hrcxs5TXyQ-pXjIp49Ps_pbO8Ra7g2gc9pqo_pNnckh5-K2H4ffKC4jPQdmSIY4VFrCflmZZH-ch9HhMrQ0Ti7BNzx3eaa1qFcqyDep7WfmqLnrXpufX2AGhrnzQL5IWojvzShpxcvxUKEVWKrP2BcaXOMnTuXL8e33KpuycMDMpOhz92QTUn65Z-VJkFnJMMdHH3gNz6xsh_PdzAjCZr_r4IdR6RuHVsMhOnCwnNn5Y2R5cvNsYtH3e9k_GoUyX1NIEN9jdIH2v"/>
<div class="flex items-center gap-1.5 pt-2">
<span class="material-symbols-outlined text-red-500 text-lg">cancel</span>
<span class="text-sm font-medium text-gray-600 dark:text-gray-300">Try Again</span>
</div>
</div>
</div>
</div>
<!-- Image Comparison: Background -->
<div>
<p class="font-semibold mb-2 text-[#333333] dark:text-gray-300">Background</p>
<div class="grid grid-cols-2 gap-4">
<div class="flex flex-col">
<img class="w-full h-auto object-cover rounded-xl aspect-[3/4]" data-alt="A portrait with a clean, plain background that contrasts with the subject." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8pzuwf8AsaCK-6-K15WiU8yG_1wGcpEKtPzAOZ0_d6kdu43DYrSSorZY69EOFPm2OKcbV7haIx4RGepJ-e_BlxzB4FpISYE8JIgWLHp7ZGeU3SApku4GR4_qW0PuncsXwecenDwOTWHqUESvB2Nh2G1isbAl2ZBkzH75PgM0m118r4TG2vCl8BPJKkXc3moLXFAwXXCKeHN5IXDB6VoaZIz56ER2IWp4d2mWhsmLWLiC2L6gTVj40a9YUaUEYkJo2EMXJV3Tyy6ae"/>
<div class="flex items-center gap-1.5 pt-2">
<span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<span class="text-sm font-medium text-gray-600 dark:text-gray-300">Good</span>
</div>
</div>
<div class="flex flex-col">
<img class="w-full h-auto object-cover rounded-xl aspect-[3/4]" data-alt="A portrait with a busy, cluttered background that distracts from the subject." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqpY3BGP63Y1-8RUEKrD5iiJI53CHfAgXMJ9L5XgI-G1cePeHEVoWfJB0v694nbHcUp_BmQ3-4mVDl6g3apUr0CnPdT2aoJdPznPvxbFyBCh3LCeIztsFgDgGkFtkU9b0NoTjj2IWTI8f2w8tAjKvw2R9gaGFVvqOHWs45xvboKsUE3cNVT2Tset8GbZygALMR0L3xlWpGUgYtxv-bgtwO4V84lRHFroBFl-VrWdiGhwS_O7NDHHN8W4rCUgq2yJwiih-xXbHwZtXV"/>
<div class="flex items-center gap-1.5 pt-2">
<span class="material-symbols-outlined text-red-500 text-lg">cancel</span>
<span class="text-sm font-medium text-gray-600 dark:text-gray-300">Try Again</span>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- FAQ Section -->
<div>
<h3 class="text-2xl font-bold tracking-tight text-[#333333] dark:text-gray-200 pb-2 pt-6">Frequently Asked Questions</h3>
<div class="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
<!-- Accordion Item 1 -->
<details class="group py-3">
<summary class="flex cursor-pointer items-center justify-between list-none">
<p class="font-semibold text-[#333333] dark:text-gray-200">Why are these photos needed?</p>
<span class="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<p class="mt-2 text-gray-500 dark:text-gray-400">High-quality photos allow our specialists to accurately assess your hair's condition, texture, and needs to provide the best possible recommendations.</p>
</details>
<!-- Accordion Item 2 -->
<details class="group py-3">
<summary class="flex cursor-pointer items-center justify-between list-none">
<p class="font-semibold text-[#333333] dark:text-gray-200">Can I use old photos?</p>
<span class="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<p class="mt-2 text-gray-500 dark:text-gray-400">We require recent photos (taken within the last week) to ensure the analysis reflects your hair's current state. Hair can change quickly due to various factors.</p>
</details>
<!-- Accordion Item 3 -->
<details class="group py-3">
<summary class="flex cursor-pointer items-center justify-between list-none">
<p class="font-semibold text-[#333333] dark:text-gray-200">What if my hair is wet?</p>
<span class="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<p class="mt-2 text-gray-500 dark:text-gray-400">Please take photos when your hair is clean, dry, and in its natural state. Wet hair does not allow for an accurate assessment of its texture and volume.</p>
</details>
</div>
</div>
</div>
<!-- Contact Support Footer -->
<div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark dark:to-transparent">
<div class="flex flex-col items-center gap-4 rounded-xl p-6 bg-background-light dark:bg-gray-800 shadow-xl shadow-black/5">
<h4 class="text-xl font-bold text-[#333333] dark:text-gray-200">Still Have Questions?</h4>
<p class="text-center text-sm text-gray-500 dark:text-gray-400">Our support team is here to help you with any issues you might be facing.</p>
<button class="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-background-dark transition-transform active:scale-95">Contact Support</button>
</div>
</div>
</div>
</body></html>