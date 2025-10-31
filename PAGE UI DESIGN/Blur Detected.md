<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Blur Detected</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;display=swap" rel="stylesheet"/>
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
<div class="relative h-screen w-full bg-background-light dark:bg-background-dark">
<!-- Background: Blurred Photo Screen -->
<div class="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat blur-sm" data-alt="A blurred background image of a person's hair." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA92r79AhfaO34RnQTvKem8aWhgNJvMdefhZx6jlsdmcYSIUeg_JoCQzfnZWq2L30N1pIR2X4ndMI9WX0vrA2mO7k-gYEj5ybn8R01e9peJpvg-D0nxcUU-39DzUW2N-wTCWfGYHG_bPn6K3L7In_KiWsdNvC1twO0Uo9TojKcOJsUJanPLuE2LOYJpy_hVXXo0p2_pMj0kFpaQJgozOiVEIqMQwlS7fEGuI0oMqmjm6leg-kdA5_w6wrMzonceQ-JmSGJDrwhomTAM");'></div>
<div class="absolute inset-0 bg-black/50 dark:bg-background-dark/70"></div>
<!-- Modal Overlay -->
<div class="relative flex h-full items-end justify-center p-4">
<div class="flex w-full max-w-md flex-col items-center gap-6 rounded-t-xl bg-background-light p-6 pb-8 dark:bg-background-dark">
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40">
<span class="material-symbols-outlined text-3xl text-red-500 dark:text-red-400" data-icon="blur_on">
                        blur_on
                    </span>
</div>
<div class="flex w-full flex-col items-center gap-2 text-center">
<h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">Blur Detected</h1>
<p class="text-sm text-gray-600 dark:text-gray-400">Hold your phone steady and tap to focus before taking the picture.</p>
</div>
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary py-3 px-4 text-sm font-bold text-background-dark transition-opacity hover:opacity-90">
<span class="truncate">Retake Photo</span>
</button>
</div>
</div>
</div>
</body></html>