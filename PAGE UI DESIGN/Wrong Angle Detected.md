        <!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Wrong Angle Detected</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#ec1313",
              "background-light": "#f8f6f6",
              "background-dark": "#221010",
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
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex h-[812px] min-h-screen w-full flex-col group/design-root overflow-hidden bg-white dark:bg-black">
<!-- Background Image/Camera View -->
<img alt="A blurred background image of a person's hair, representing the camera view." class="absolute inset-0 h-full w-full object-cover" data-alt="A blurred background image of a person's hair, representing the camera view." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkPC67bcZFZj6mxQ9axTClL0Op0M977MF__H61YfH5r0dHWjSXZreXCqouFJE6NvR_EIYmEdV-vnQaGtptlvI7nCkczjVPugXnAx6pfJeHKpUOI-hmn3aemm0PvMl0lIIfLeYZOhcJD7FBFGOATsrBHquiS59-3DyOuNNZfSiHmco90nc93jrXQiewsth1eqv9_VxMZXWB2-PR7HKMRQgMuxTMhpf3rmdgJVtlR3nl-HCJ6L99I9CG3p-OeVRltVySe0tmokruu6U5"/>
<!-- Overlay -->
<div class="absolute inset-0 flex h-full w-full flex-col items-stretch justify-end bg-black/60">
<!-- Bottom Sheet -->
<div class="flex flex-col items-stretch rounded-t-xl bg-background-light dark:bg-background-dark">
<!-- BottomSheetHandle -->
<div class="flex h-5 w-full items-center justify-center pt-3">
<div class="h-1 w-9 rounded-full bg-gray-300 dark:bg-gray-600"></div>
</div>
<!-- Content -->
<div class="flex flex-col items-center gap-4 px-4 pb-6 pt-5 text-center">
<!-- Icon -->
<div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
<span class="material-symbols-outlined text-4xl text-primary">
                            rotate_right
                        </span>
</div>
<!-- HeadlineText -->
<h2 class="font-display text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100">Wrong Angle Detected</h2>
<!-- BodyText -->
<p class="font-display text-base font-normal leading-normal text-gray-600 dark:text-gray-300">
                        This looks like a <span class="font-semibold text-gray-800 dark:text-gray-200">side view</span>, but we need a <span class="font-semibold text-gray-800 dark:text-gray-200">front view</span>. Please provide a clear front view photo so we can analyze your hair correctly.
                    </p>
<!-- SingleButton -->
<div class="flex w-full pt-4">
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90">
<span class="truncate">Try Again</span>
</button>
</div>
</div>
</div>
</div>
</div>
</body></html>