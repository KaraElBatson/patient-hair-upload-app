<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Photo Review - Hair Analysis</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
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
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display">
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div class="flex flex-col h-full grow">
<!-- Header Section -->
<header class="p-4 flex flex-col items-center">
<div class="flex w-full flex-row items-center justify-center gap-3 py-5">
<div class="h-2 w-2 rounded-full bg-[#cfe7dd]"></div>
<div class="h-2 w-2 rounded-full bg-[#cfe7dd]"></div>
<div class="h-2 w-2 rounded-full bg-primary"></div>
<div class="h-2 w-2 rounded-full bg-[#cfe7dd]"></div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow flex flex-col px-4 space-y-6">
<!-- Image Preview -->
<div class="flex w-full grow @container">
<div class="w-full gap-1 overflow-hidden @[480px]:gap-2 aspect-[3/4] flex">
<div class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-xl flex-1" data-alt="A clear, well-lit photo of the back of a person's head, showing their hair." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1qFzvKrwt18UAbfg32IpH45LnRfhLeXOytPtNACRonqjGawDvrDmAnOlSIY4FsJisc68OOjuHRYjxD83fiQnVeiZIiB0mNm2UUQ-uyq5lg1oDTtRXemBp6poEa-jCOccvmSjh1CVUweyWmnMkBiNelTQ4pp9a6NIjlGvikzM8VxUxR9QQwwqS0GndAccfyGKS__cVKa1WXJpMvYOYxuzx4x26l8uA0imIT7YjLUJK7-9-lJHFFb12J4It8FcuGzUTNtVKtAX1rpm6");'></div>
</div>
</div>
<!-- Quality Checklist Section -->
<div class="flex flex-col gap-2">
<div class="flex items-center gap-4 bg-background-light dark:bg-background-dark px-2 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="text-[#0d1b16] flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-10">
<span class="material-symbols-outlined text-primary">check_circle</span>
</div>
<p class="text-[#0d1b16] dark:text-gray-200 text-base font-normal leading-normal flex-1 truncate">Good lighting</p>
</div>
</div>
<div class="flex items-center gap-4 bg-background-light dark:bg-background-dark px-2 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="text-[#0d1b16] flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-10">
<span class="material-symbols-outlined text-primary">check_circle</span>
</div>
<p class="text-[#0d1b16] dark:text-gray-200 text-base font-normal leading-normal flex-1 truncate">In focus</p>
</div>
</div>
<div class="flex items-center gap-4 bg-background-light dark:bg-background-dark px-2 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="text-[#0d1b16] flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-10">
<span class="material-symbols-outlined text-primary">check_circle</span>
</div>
<p class="text-[#0d1b16] dark:text-gray-200 text-base font-normal leading-normal flex-1 truncate">Hair is centered</p>
</div>
</div>
</div>
</main>
<!-- Footer with CTAs -->
<footer class="p-6 sticky bottom-0 bg-background-light dark:bg-background-dark">
<div class="flex flex-col gap-4">
<button class="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                        Looks Good, Continue
                    </button>
<button class="flex h-12 w-full items-center justify-center rounded-xl border border-primary/30 dark:border-primary/50 bg-transparent px-6 text-base font-bold text-primary transition-colors hover:bg-primary/10">
                        Retake Photo
                    </button>
</div>
</footer>
</div>
</div>
</body></html>