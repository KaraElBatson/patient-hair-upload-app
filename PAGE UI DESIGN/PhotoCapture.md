<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Photo Capture - Front View</title>
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
              "success": "#4CAF50",
              "error": "#F44336",
              "neutral": "#BDBDBD",
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
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display">
<div class="relative flex h-screen w-full flex-col bg-background-dark group/design-root overflow-hidden max-w-md mx-auto">
<!-- Header Section -->
<header class="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4 pt-6">
<div class="flex items-center gap-4 text-white">
<button class="flex items-center justify-center p-2 rounded-full">
<span class="material-symbols-outlined text-3xl">arrow_back</span>
</button>
<div class="flex-1">
<h2 class="text-lg font-bold leading-tight">Photo 1 of 5: Front View</h2>
<div class="mt-2 rounded-full bg-white/20">
<div class="h-2 rounded-full bg-primary" style="width: 20%;"></div>
</div>
</div>
<button class="flex items-center justify-center p-2 rounded-full">
<span class="material-symbols-outlined text-3xl">help_outline</span>
</button>
</div>
</header>
<!-- Main Camera View -->
<main class="relative flex-1 flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
<!-- Background Image representing camera feed -->
<img class="absolute inset-0 h-full w-full object-cover opacity-60" data-alt="Camera view of a person's portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPuydUEC91v6u8uhBqZjeqRlyJDHiIK_eX3klAG1ancU0ydMTUQtGOy4IEuPmiCcCTLBL7b4CZLk1iOe5By-PXyzbGjh2He9lTXtyu2LsrK0-ti6lNzj5odfehVJ6stxobI4GU727nVU0EQIXHcGvJR8o_yYeZk0NyAeoGLlGgV6bWdbW-71Qq5FNsZkNxMBxhlM5ytTG_kD6V2Rq2sDGcPbrkrSKpZuh9qGdsIZ9nVSPLVBTr4tA3_aX29d-Bvx5_UQ_-xWGzKk-Z"/>
<!-- AR Overlay and Instructions -->
<div class="absolute inset-0 flex flex-col items-center justify-between p-4 z-10">
<div class="mt-28">
<p class="text-white text-center text-lg bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">Position your face in the outline</p>
</div>
<!-- Head Silhouette -->
<div class="w-full max-w-xs aspect-[3/4] flex items-center justify-center">
<svg class="w-full h-auto drop-shadow-lg" fill="none" viewbox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
<path d="M50 119C74.3023 119 94 99.3023 94 75V55.8C94 36.3377 82.2091 19.3891 65.5 12.6L65.5 12.6C56.6387 8.99596 47.1656 8.86938 38.5 12.6L38.5 12.6C21.7909 19.3891 10 36.3377 10 55.8V75C10 99.3023 29.6977 119 50 119Z" stroke="#4CAF50" stroke-dasharray="8 4" stroke-linecap="round" stroke-width="3"></path>
</svg>
<!-- Ghosted example image -->
<img class="absolute w-4/5 h-auto opacity-10" data-alt="Faint silhouette of a person's head and shoulders." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzKv4ZxN3H6VdxyMblfYliDB-c09947pHUy5UiGWDRp06W9WfKB_hW_V14M7cJ-DJmmCeTQKDa6eyHeZovBOcl-YeQhhenNE_fHOkW7xL-Z14l0wLfpCTUo6ERUeIZHrOk-KYj5fmLoSzTLuucWgXHtzMWnpTcvw4DiQVJmIpy5KFErRe1Qux4CQBWMbztSSN3AOi_DAq09sCazi5kDgAKTK2eWAjUYkEYmh_wx2OHJzqNPFQBHu497GlXfXWDl5yv_AzEF0jSEyAM"/>
</div>
<!-- Spacer -->
<div class="flex-grow"></div>
</div>
<!-- Real-time feedback -->
<div class="absolute left-4 bottom-36 z-10 space-y-2">
<div class="flex items-center gap-2 text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
<span class="material-symbols-outlined text-sm text-success">check_circle</span>
<span class="text-sm font-medium">Distance</span>
</div>
<div class="flex items-center gap-2 text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
<span class="material-symbols-outlined text-sm text-success">check_circle</span>
<span class="text-sm font-medium">Lighting</span>
</div>
<div class="flex items-center gap-2 text-neutral bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
<span class="material-symbols-outlined text-sm text-error">cancel</span>
<span class="text-sm font-medium">Focus</span>
</div>
<div class="flex items-center gap-2 text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
<span class="material-symbols-outlined text-sm text-success">check_circle</span>
<span class="text-sm font-medium">Angle</span>
</div>
<div class="flex items-center gap-2 text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
<span class="material-symbols-outlined text-sm text-success">check_circle</span>
<span class="text-sm font-medium">Background</span>
</div>
</div>
</main>
<!-- Footer with Capture Controls -->
<footer class="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/50 to-transparent p-4 pb-8">
<div class="flex items-center justify-between">
<button class="flex shrink-0 items-center justify-center rounded-full size-12 bg-black/40 text-white backdrop-blur-sm">
<span class="material-symbols-outlined">photo_library</span>
</button>
<button class="flex shrink-0 items-center justify-center rounded-full size-20 bg-success text-black border-4 border-black/30 shadow-lg">
<span class="material-symbols-outlined text-5xl !font-light">photo_camera</span>
</button>
<div class="flex flex-col items-center gap-1.5 text-white">
<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle" name="toggle" type="checkbox"/>
<label class="toggle-label block overflow-hidden h-6 rounded-full bg-neutral/50 cursor-pointer" for="toggle"></label>
</div>
<span class="text-xs font-semibold">Auto</span>
</div>
</div>
</footer>
</div>
<style>
    .toggle-checkbox:checked {
        right: 0;
        border-color: #4CAF50;
    }
    .toggle-checkbox:checked + .toggle-label {
        background-color: #4CAF50;
    }
    </style>
</body></html>