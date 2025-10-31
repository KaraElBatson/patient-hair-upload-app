<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Photo Capture - Right Side Profile</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
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
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        body {
            font-family: 'Manrope', sans-serif;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
<!-- Camera Background -->
<div class="absolute inset-0 bg-background-light dark:bg-background-dark">
<img alt="Abstract background image of a person's silhouette against a blurred indoor setting." class="h-full w-full object-cover opacity-80 dark:opacity-60" data-alt="Abstract background image of a person's silhouette against a blurred indoor setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQo6nOMus2B-5fYFYt-BOfnPYGwMzyKbGvBUhMbs2lsK66_seqVQ_8kpgO77pjTBh6ozzzmK12srHk-h1sfCV2e_Jj0fjMsAK1EiDVut4mtiyTaAjR87UbQ5QjVN_nGQM7Vlf5AzqtV3N_a4dpZdaRFJuw1G7uo-cWRPCL9VnVDJb4QGM-x-85DQVtQtnpLDBrKWnC6_qNmHyz1qvf4BEohYSvZd8DD3JcG7LPFR2wJA1lr4y5n2A0DqekNhBWp2Urgx3GkVNm_JBe"/>
<div class="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
</div>
<!-- UI Overlay -->
<div class="relative z-10 flex h-full flex-col text-white">
<!-- Header Section -->
<header class="flex flex-col pt-4">
<!-- Top App Bar -->
<div class="flex items-center bg-transparent px-4 pb-2">
<button class="flex size-12 shrink-0 items-center justify-start text-white dark:text-gray-200">
<span class="material-symbols-outlined !text-2xl">arrow_back</span>
</button>
<h2 class="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-white dark:text-gray-100">Photo 4 of 5</h2>
<div class="flex w-12 items-center justify-end">
<button class="flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-transparent text-base font-bold leading-normal tracking-[0.015em] text-white dark:text-gray-200">
<span class="material-symbols-outlined !text-2xl">help_outline</span>
</button>
</div>
</div>
<!-- Progress Bar -->
<div class="flex flex-col gap-2 px-4 pt-2">
<div class="rounded-full bg-white/20 dark:bg-white/10"><div class="h-2 rounded-full bg-primary" style="width: 80%;"></div></div>
</div>
</header>
<!-- Main Content: Instructions & Camera View -->
<main class="flex flex-1 flex-col items-center justify-center p-4">
<!-- AR Overlay Guide -->
<div class="relative mb-8 w-64 h-80">
<img alt="A white outline of a human head in right side profile used as an alignment guide." class="h-full w-full opacity-40" data-alt="A white outline of a human head in right side profile used as an alignment guide." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-nlnXAr8MnHcIr4ypKUCoXO0h3v3wuvuFOo2i7_9ZrDazRkJObfgoRy61NroNqhOgu9Ueg28xpzJ4dm5QOqLUNKnDaNveZ77Hls2SkvOnssnchPWgc6Oo24JMVoSexDp1G5qGjSM0EEHSRcGTj7NOSCU0q5cCed_DBMbchtpmixOK18iSBPuReY10Jy3dRFSE9jZx80T_1cxNMDzyKfjLQbZLpbnmIhcTDzeKr36X-hP03LXuzrxhbGXeZFCgticbWvl_cFjOHOwh"/>
</div>
<!-- Instructional Text -->
<p class="text-white dark:text-gray-200 text-lg font-medium leading-normal pb-3 pt-1 px-4 text-center bg-black/20 dark:bg-black/40 rounded-lg">
                    Turn your head to show your right side.
                </p>
<!-- Live Feedback Indicators -->
<div class="mt-4 flex flex-wrap justify-center gap-3">
<div class="flex items-center gap-2 rounded-full bg-black/20 dark:bg-black/40 px-3 py-1.5 text-sm font-medium text-primary">
<span class="material-symbols-outlined !text-base">check_circle</span>
<span>Angle Correct</span>
</div>
<div class="flex items-center gap-2 rounded-full bg-black/20 dark:bg-black/40 px-3 py-1.5 text-sm font-medium text-white/70">
<span class="material-symbols-outlined !text-base">lightbulb</span>
<span>Good Lighting</span>
</div>
</div>
</main>
<!-- Footer: Controls -->
<footer class="flex flex-col gap-4 p-4 pb-8">
<!-- Auto-capture Toggle -->
<div class="flex items-center gap-4 bg-black/20 dark:bg-black/40 backdrop-blur-sm rounded-xl px-4 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center shrink-0 size-10 text-white">
<span class="material-symbols-outlined !text-2xl">auto_awesome</span>
</div>
<p class="text-base font-medium leading-normal flex-1 truncate text-white">Auto-capture</p>
</div>
<div class="shrink-0">
<label class="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-white/20 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
<div class="h-full w-[27px] rounded-full bg-white" style="box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px;"></div>
<input checked="" class="invisible absolute" type="checkbox"/>
</label>
</div>
</div>
<!-- Camera Controls -->
<div class="flex items-center justify-center gap-8">
<button class="flex shrink-0 items-center justify-center rounded-full size-12 bg-black/30 dark:bg-black/50 text-white">
<span class="material-symbols-outlined !text-2xl">photo_library</span>
</button>
<button class="flex shrink-0 items-center justify-center rounded-full size-20 border-4 border-white bg-primary text-white">
<span class="material-symbols-outlined !text-4xl">photo_camera</span>
</button>
<button class="flex shrink-0 items-center justify-center rounded-full size-12 bg-black/30 dark:bg-black/50 text-white">
<span class="material-symbols-outlined !text-2xl">flip_camera_android</span>
</button>
</div>
</footer>
</div>
</div>
</body></html>