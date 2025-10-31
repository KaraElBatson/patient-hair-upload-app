<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>No Hair Detected</title>
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
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display">
<div class="relative flex h-[812px] min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<!-- Background content placeholder -->
<div class="flex-1 bg-center bg-no-repeat bg-cover" data-alt="A blurred photo of a person, representing the photo upload screen in the background." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnVLGTALApX3HKeOC1fs8k4LH881FZHH1Kh-X31pM3t3EkfKjYhblzncbmNuoFHxyUHf4KGYQTHiaYRSyyUIFQsJ6fxU-6NT2yPeeS9URVWyTNpaa2mwFDswJTSz67wmykJyF2XSEoG5RekC7SFfZxztw_mXZidP9fcatEwKMTfOicN-fjwLG3Y1vX_nswoWF1uS0M-rv-dK3OcRWGwD97FLF0o418iZ93BG8O_lymv2ydSpM6R1uJVylEAwWUffmlS_e_INh5F_cO');"></div>
<!-- Scrim -->
<div class="absolute inset-0 flex h-full w-full flex-col justify-end items-stretch bg-black/60">
<!-- BottomSheet/Modal Container -->
<div class="flex flex-col items-stretch bg-background-light dark:bg-background-dark rounded-t-xl">
<!-- BottomSheetHandle -->
<button class="flex h-5 w-full items-center justify-center pt-3 pb-1">
<div class="h-1 w-9 rounded-full bg-gray-200 dark:bg-gray-700"></div>
</button>
<!-- EmptyState Content -->
<div class="flex flex-col px-6 py-6 font-display">
<div class="flex flex-col items-center gap-6">
<div class="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
<span class="material-symbols-outlined text-4xl text-primary">
                                help
                            </span>
</div>
<div class="flex max-w-md flex-col items-center gap-2 text-center">
<p class="text-xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">No Face/Hair Detected</p>
<p class="text-base font-normal leading-normal text-gray-600 dark:text-gray-300">We couldn't detect hair in this photo. Please get closer and ensure your hair is clearly visible and well-lit.</p>
</div>
<button class="flex w-full min-w-[84px] max-w-md cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-gray-900 text-base font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Retake Photo</span>
</button>
</div>
</div>
</div>
</div>
</div>
</body></html>