<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Left Side Profile Capture</title>
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
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
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
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex h-screen w-full flex-col group/design-root overflow-hidden bg-gray-900">
<!-- Background Camera View -->
<div class="absolute inset-0 bg-cover bg-center" data-alt="Abstract image of a blurred face, representing a camera view." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7HOsUNEgE0rtuFi2YTCVegxKOzIOC8rOcjWgEuP2IoryXMXO6zOgYu3BjyND7PT6HGLTBqZCCCmprkL8V4XOH6cWYwAf9ge7adDvvijJzf3Nbla03ybIsc0xC4QrKlAajYq3XOd4zmht33UQMJwHEwmhY80bDHQNSa6q6SKWFePa9X5MKXO5x9ZbThiMJXszmSj6npiTzbF7kBJsxvCe3nelTDuTsYkcz3cCHr82ZjVaX2cnWrCyqENTzI4iejEpEdQ1Dp547gOny');"></div>
<div class="absolute inset-0 bg-black/30"></div>
<!-- AR Overlay & Silhouette -->
<div class="absolute inset-0 flex items-center justify-center">
<svg class="h-auto w-[65vw] max-w-sm text-primary opacity-30 drop-shadow-lg" fill="currentColor" viewbox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
<path d="M116.1,2.1c-13.8,1.3-26.1,6.5-36.9,15.5c-15.1,12.7-25.2,30.3-29.2,50C48.4,72.6,47,77.7,46,82.8c-2,10.2-2,20.4,0,30.6c0.9,4.8,2.4,9.4,4.4,13.8c-2.4,3.2-4.5,6.6-6.2,10.3c-7.9,16.8-9.4,35.6-4.4,53.2c5.8,20.5,19.8,37.3,39.6,46.1c5.5,2.4,11.3,4.2,17.2,5.2c15.1,2.6,30.3,1.3,45.2-2.1c8.4-1.9,16.5-5.1,23.9-9.5c10-5.8,18.8-13.5,25.8-22.9c10.4-13.8,16.1-30.2,16.8-47.3c0.3-8.8-1.2-17.6-4.5-25.8c-1.8-4.5-4.2-8.8-7.1-12.8c4.3-7.8,6-16.7,5.1-25.6c-1.3-12.2-7.1-23.4-16.7-31.5c-9.7-8.1-22-12.7-35.1-12.7c-5.8,0-11.6,0.9-17.1,2.6c-4.4,1.4-8.8,3.2-13,5.4c-4.9-11.2-11.9-21.2-21-29.3C126.3,3.7,121.3,2.5,116.1,2.1z"></path>
</svg>
<svg class="absolute h-auto w-[65vw] max-w-sm text-white opacity-90 drop-shadow-lg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
<path d="M116.1,2.1c-13.8,1.3-26.1,6.5-36.9,15.5c-15.1,12.7-25.2,30.3-29.2,50C48.4,72.6,47,77.7,46,82.8c-2,10.2-2,20.4,0,30.6c0.9,4.8,2.4,9.4,4.4,13.8c-2.4,3.2-4.5,6.6-6.2,10.3c-7.9,16.8-9.4,35.6-4.4,53.2c5.8,20.5,19.8,37.3,39.6,46.1c5.5,2.4,11.3,4.2,17.2,5.2c15.1,2.6,30.3,1.3,45.2-2.1c8.4-1.9,16.5-5.1,23.9-9.5c10-5.8,18.8-13.5,25.8-22.9c10.4-13.8,16.1-30.2,16.8-47.3c0.3-8.8-1.2-17.6-4.5-25.8c-1.8-4.5-4.2-8.8-7.1-12.8c4.3-7.8,6-16.7,5.1-25.6c-1.3-12.2-7.1-23.4-16.7-31.5c-9.7-8.1-22-12.7-35.1-12.7c-5.8,0-11.6,0.9-17.1,2.6c-4.4,1.4-8.8,3.2-13,5.4c-4.9-11.2-11.9-21.2-21-29.3C126.3,3.7,121.3,2.5,116.1,2.1z"></path>
</svg>
</div>
<div class="relative z-10 flex h-full w-full flex-col justify-between">
<!-- Header -->
<header class="flex flex-col gap-3 p-4 pt-6 bg-gradient-to-b from-black/50 to-transparent">
<!-- Top Nav -->
<div class="flex items-center justify-between gap-4">
<button class="flex items-center justify-center p-2 text-white rounded-full bg-black/20 backdrop-blur-sm">
<span class="material-symbols-outlined !text-2xl">arrow_back</span>
</button>
<h1 class="flex-1 text-base font-bold text-center text-white truncate">Photo 3 of 5: Left Side Profile</h1>
<button class="flex items-center justify-center p-2 text-white rounded-full bg-black/20 backdrop-blur-sm">
<span class="material-symbols-outlined !text-2xl">help_outline</span>
</button>
</div>
<!-- Progress Bar -->
<div class="flex flex-col gap-1.5">
<div class="w-full rounded bg-white/20 backdrop-blur-sm"><div class="h-2 rounded bg-primary" style="width: 60%;"></div></div>
</div>
</header>
<!-- Main Content Area -->
<main class="flex flex-col items-center justify-start flex-1 gap-4 px-4 pt-4">
<!-- Live Feedback Bar -->
<div class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full bg-primary/20 backdrop-blur-md">
<span class="material-symbols-outlined !text-base !text-primary">check_circle</span>
<span class="text-primary">Good Lighting</span>
</div>
<!-- Instructional Text -->
<p class="text-lg font-bold leading-tight tracking-tight text-center text-white drop-shadow-md">
                    Turn your head to show your left side.
                </p>
<p class="text-sm font-normal leading-normal text-center text-white/80 drop-shadow-md">
                    Ensure hair from temple to neck is visible.
                </p>
</main>
<!-- Footer Controls -->
<footer class="flex flex-col items-center gap-6 p-4 pb-8 bg-gradient-to-t from-black/50 to-transparent">
<div class="flex items-center justify-between w-full max-w-sm gap-6">
<button class="flex flex-col items-center justify-center text-white gap-1.5 opacity-80">
<div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm">
<span class="material-symbols-outlined !text-2xl">photo_library</span>
</div>
</button>
<button class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg ring-4 ring-white/30">
<span class="text-4xl text-black material-symbols-outlined">photo_camera</span>
</button>
<button class="flex flex-col items-center justify-center text-white gap-1.5">
<div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm">
<span class="material-symbols-outlined !text-2xl !text-primary">model_training</span>
</div>
<span class="text-xs font-bold text-primary">AUTO</span>
</button>
</div>
</footer>
</div>
</div>
</body></html>               