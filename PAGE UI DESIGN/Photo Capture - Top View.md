<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Photo Capture - Top View</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
<body class="font-display">
<div class="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden">
<!-- Background Camera View -->
<div class="absolute inset-0 bg-center bg-no-repeat bg-cover" data-alt="Live camera feed showing the user's hair from above." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4dhYEK5ScLcREUUQAWMAUJuXnx-Wo2mN674RUTsLH2h8uuuxHTQyHKkCoznekt8NeyLl5ZH_j1YyQGKzE6YbYT4GMBkKQKTwtewwDKNgmtxkPofpev-liYHz1TXr6e3pxQfBXuZ3b7W2UGA_Ub5DsKyk5S-FktWclt58imCg-aOeiGHjo4D3r1vhwN8SqkBOQEp23HK52o0Dai03YKsQEGk9KEof_WYtTESdsJKerffwdQtuKuEYrEvToLy_XQ0uan6AHulPR1sFe");'>
<div class="absolute inset-0 bg-black/30"></div>
</div>
<!-- AR Overlay & Silhouette -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
<div class="relative h-full w-full max-w-md">
<img class="absolute top-[20%] left-1/2 -translate-x-1/2 w-3/4 opacity-10 border-2 border-dashed border-primary rounded-full" data-alt="Dashed green outline of the top of a head for framing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9HHUhP9NQ0JeA9HuanZDseI-fP63Rb7Byrv8VEv7oKIk3gGyIJithKGcwDAe0kQrpu3s7eC6NdhNuuQHLhTZhX7pPjmWYBZJ6Xo2qJvfNRw2iPLMsbB0C0owkJadSffZfh1pTIEneyAPnF21Ys5k64g1ajbWu1leQwVeexJHpb5jt9Hs3rhDWQ8nxqaohvLVkcaz80vGnu_o_SjbNnnHvcgmvFp691Ryjn9po_EUkI0C_C6Z8B4VedhY_Tp3tPCyb8nms20q9OPmF"/>
<img class="absolute top-[20%] left-1/2 -translate-x-1/2 w-3/4 opacity-10" data-alt="Semi-transparent silhouette showing the ideal top-down photo of hair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQNYZCLNMw6ygvmN5zwPGk-7yIHD9Rze40Ijc20afU9LvQKqxuwXioQEZY1xUGtwiyVglxplSRvA2lg51NOI8Rkx_pNTmVFFIhnjOHGIz6qOtTUcW0CzIvQKdEYHVcoGbdyD-9BDjJbwGh7gL5lN3oRX8CAGn5aSgy0mOsH0vFsYbD0zChSAMM9iijWJCsE7ojmMlKfcihcscai7uGTz_sSW9dFuBushaSTh2cVmHzU4aNCZLbCyPdnUMmR6aJsva1N8RD6dDHRy2D"/>
</div>
</div>
<!-- Main UI Layer -->
<div class="relative z-10 flex h-full flex-col justify-between">
<!-- Top App Bar -->
<header>
<div class="flex items-center p-4 pb-2 justify-between bg-black/20 backdrop-blur-sm">
<button class="flex size-10 shrink-0 items-center justify-center rounded-full text-white">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Photo 2 of 5: Top View</h2>
<button class="flex size-10 shrink-0 items-center justify-center rounded-full text-white">
<span class="material-symbols-outlined text-2xl">help_outline</span>
</button>
</div>
</header>
<!-- Instructions & Feedback -->
<main class="flex flex-col items-center gap-4 px-4">
<div class="flex flex-col items-center gap-2 rounded-xl bg-black/30 p-3 backdrop-blur-sm text-center text-white">
<p class="text-base font-bold leading-normal">Tilt your head down.</p>
<p class="text-sm font-normal leading-tight opacity-80">Camera should look down at your crown.</p>
</div>
<!-- Live Feedback Indicators -->
<div class="flex gap-2">
<div class="flex items-center gap-1.5 rounded-full bg-yellow-500/80 px-2.5 py-1 text-xs font-bold text-yellow-900 backdrop-blur-sm">
<span class="material-symbols-outlined text-sm">light_mode</span>
<span>Too Bright</span>
</div>
<div class="flex items-center gap-1.5 rounded-full bg-blue-400/80 px-2.5 py-1 text-xs font-bold text-blue-900 backdrop-blur-sm">
<span class="material-symbols-outlined text-sm">blur_on</span>
<span>Hold Still</span>
</div>
</div>
</main>
<!-- Bottom Controls -->
<footer class="p-4 pt-8 bg-gradient-to-t from-black/50 to-transparent">
<!-- Helper Animation -->
<div class="mb-6 flex justify-center">
<div class="flex items-center gap-3 rounded-xl bg-black/30 p-2 backdrop-blur-sm">
<div class="flex size-10 items-center justify-center rounded-lg bg-white/10">
<img class="h-8 w-8" data-alt="A simple icon showing a person tilting their head forward." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbm-ODWG3PLvLX46IhAQCNqoiN_EfpCMEBn1Lky5nfP5hoTriHe5SNsGvT_n5lU-60Gzpl33eA1KSgODAutlVZjmfiUOQP0PvZoEz4aMWNQYKx9Zz9cjiZWZNHMC2EFePX6pNwt_wSLeevU07_2Us3eXdG5-NsxvjFm5tOe1UKJrUKXHO3T8CHuiIaPVr8IkAzsdx_811eOE9zRedujFs3VBB5g13F9IA5uzcqBjtP3w46RNhAkQ24iNqSOdiMURN7Jn6gnt4xEcqh"/>
</div>
<p class="text-xs font-normal leading-tight text-white">Watch how to take this photo</p>
</div>
</div>
<!-- Camera Controls -->
<div class="flex items-center justify-around gap-6">
<button class="flex shrink-0 flex-col items-center justify-center gap-1 rounded-full text-white/90">
<div class="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
<span class="material-symbols-outlined text-2xl">photo_library</span>
</div>
<span class="text-xs font-bold">Gallery</span>
</button>
<button class="flex shrink-0 items-center justify-center rounded-full size-20 bg-white ring-4 ring-white/30 text-black">
<div class="absolute flex size-16 items-center justify-center rounded-full bg-primary text-background-dark">
<span class="material-symbols-outlined !text-4xl" style="font-variation-settings: 'FILL' 1, 'wght' 700;">camera</span>
</div>
</button>
<div class="flex shrink-0 flex-col items-center justify-center gap-1 text-white/90">
<div class="relative flex items-center">
<input class="peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-white/20 backdrop-blur-sm checked:bg-primary transition-colors focus:outline-none" id="auto-capture-toggle" type="checkbox"/>
<span class="pointer-events-none absolute left-0.5 top-0.5 block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
</div>
<label class="text-xs font-bold" for="auto-capture-toggle">Auto</label>
</div>
</div>
</footer>
</div>
</div>
</body></html>