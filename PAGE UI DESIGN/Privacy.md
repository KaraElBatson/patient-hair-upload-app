<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Privacy &amp; Consent</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
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
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
      body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden text-[#0d1b16] dark:text-gray-200">
<!-- Top App Bar -->
<div class="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
<div class="flex size-12 shrink-0 items-center justify-start text-[#0d1b16] dark:text-gray-200">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-[#0d1b16] dark:text-gray-100">Privacy &amp; Consent</h2>
<div class="size-12 shrink-0"></div> <!-- Spacer for centering title -->
</div>
<!-- Main Content -->
<main class="flex flex-col flex-1 px-4 pt-6 pb-8">
<!-- Icon -->
<div class="flex justify-center items-center mb-6">
<div class="flex items-center justify-center size-20 rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined !text-4xl">verified_user</span>
</div>
</div>
<!-- Headline Text -->
<h1 class="text-[#0d1b16] dark:text-white tracking-tight text-3xl font-bold leading-tight text-center pb-8">Your Privacy Matters</h1>
<!-- Consent Details Accordions -->
<div class="flex flex-col gap-3">
<details class="flex flex-col rounded-xl border border-[#cfe7dd] dark:border-gray-700 bg-white dark:bg-[#1c3328] px-[15px] py-[7px] group" open="">
<summary class="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
<p class="text-[#0d1b16] dark:text-gray-100 text-base font-medium leading-normal">How We Use Your Photos</p>
<div class="text-[#0d1b16] dark:text-gray-100 group-open:rotate-180 transition-transform">
<span class="material-symbols-outlined !text-xl">expand_more</span>
</div>
</summary>
<p class="text-[#4c9a79] dark:text-gray-300 text-sm font-normal leading-normal pb-2">Your photos are used for AI analysis to track hair progress and provide personalized recommendations. They are anonymized and encrypted.</p>
</details>
<details class="flex flex-col rounded-xl border border-[#cfe7dd] dark:border-gray-700 bg-white dark:bg-[#1c3328] px-[15px] py-[7px] group">
<summary class="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
<p class="text-[#0d1b16] dark:text-gray-100 text-base font-medium leading-normal">Security Features</p>
<div class="text-[#0d1b16] dark:text-gray-100 group-open:rotate-180 transition-transform">
<span class="material-symbols-outlined !text-xl">expand_more</span>
</div>
</summary>
<p class="text-[#4c9a79] dark:text-gray-300 text-sm font-normal leading-normal pb-2">We use end-to-end encryption and secure cloud storage to protect your data. Access is strictly limited to authorized personnel.</p>
</details>
<details class="flex flex-col rounded-xl border border-[#cfe7dd] dark:border-gray-700 bg-white dark:bg-[#1c3328] px-[15px] py-[7px] group">
<summary class="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
<p class="text-[#0d1b16] dark:text-gray-100 text-base font-medium leading-normal">Your Rights</p>
<div class="text-[#0d1b16] dark:text-gray-100 group-open:rotate-180 transition-transform">
<span class="material-symbols-outlined !text-xl">expand_more</span>
</div>
</summary>
<p class="text-[#4c9a79] dark:text-gray-300 text-sm font-normal leading-normal pb-2">You have the right to access, modify, and delete your data at any time through your account settings.</p>
</details>
</div>
<div class="mt-auto pt-8">
<!-- Toggle Item -->
<div class="flex items-center gap-4 bg-transparent min-h-14 justify-between mb-4">
<div class="flex items-center gap-4">
<div class="text-[#0d1b16] dark:text-gray-100 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-2xl">visibility_off</span>
</div>
<p class="text-[#0d1b16] dark:text-gray-200 text-base font-normal leading-normal flex-1">Blur my face in photos</p>
</div>
<div class="shrink-0">
<label class="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-gray-700 p-0.5 has-[:checked]:bg-primary">
<input checked="" class="invisible absolute" type="checkbox"/>
<div class="h-full w-[27px] rounded-full bg-white transition-transform transform translate-x-[20px]" style="box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px;"></div>
</label>
</div>
</div>
<!-- Checkbox for Consent -->
<div class="flex items-start gap-3 mb-6 group">
<input class="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600" id="consent-checkbox" type="checkbox"/>
<div class="flex-1">
<label class="text-sm text-[#0d1b16] dark:text-gray-300" for="consent-checkbox">I understand and agree to the photo usage terms. <a class="font-semibold text-primary/80 hover:text-primary underline" href="#">Read full privacy policy</a>.</label>
</div>
</div>
<!-- Action Buttons -->
<div class="flex flex-col gap-4">
<button class="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-bold text-black shadow-sm transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:text-gray-500 dark:disabled:text-gray-400">
                        I Consent &amp; Continue
                    </button>
<a class="text-center text-sm font-medium text-primary/80 hover:text-primary" href="#">
                        Learn more about data protection
                    </a>
</div>
</div>
</main>
</div>
</body></html>