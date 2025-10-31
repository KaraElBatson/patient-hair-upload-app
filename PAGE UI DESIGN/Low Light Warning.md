<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Low Light Warning</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
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
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-gray-100 font-display">
<div class="relative h-screen w-full overflow-hidden bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBooectvlhrffz33wXWFyZjf8r25Kgk34kRVB4h8Fv6bVMo9f9joJbu-lHIuxpl8J0ILwJ2jFYqko1_Vp9GGGjHyQjySwaLGV-sylo9UtOUPW3OypH09oCwmg0_NRdNsAAkmvL4MmF1X1UzK3ZK_LDi1B_9leN2bH3GmoW13L4Xlb4PJ9_WXy9eK_9u4BiD3U6586BAyPrCzXm5hV6TrhXyOxclxXaUQ8qBrvbxeQiNabYVpn5I72l9_IGM3Sut1vZB63B2imC2lDX3");'>
<div class="absolute inset-0 bg-background-dark/50"></div>
<main class="relative z-10 flex h-full items-end justify-center p-4">
<!-- Modal Container -->
<div class="w-full max-w-md rounded-xl bg-background-light p-6 text-center shadow-lg dark:bg-background-dark">
<div class="flex flex-col items-center">
<!-- Icon -->
<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
<span class="material-symbols-outlined text-4xl text-gray-700 dark:text-gray-300">lightbulb</span>
</div>
<!-- HeadlineText -->
<h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">It's a bit dark</h2>
<!-- BodyText -->
<p class="mt-2 text-base text-gray-600 dark:text-gray-300">
                    Find better lighting for clearer photos. For the best results, find a brighter spot.
                </p>
<!-- ButtonGroup -->
<div class="mt-6 flex w-full flex-col items-stretch space-y-3">
<button class="flex h-12 w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-gray-900">
<span class="truncate">Find Better Light</span>
</button>
<button class="flex h-12 w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 px-5 text-base font-bold leading-normal tracking-[0.015em] text-gray-900 dark:bg-white/10 dark:text-white">
<span class="truncate">Continue Anyway</span>
</button>
</div>
</div>
</div>
</main>
</div>
</body></html>