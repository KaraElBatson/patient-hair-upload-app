<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Review Your Photos</title>
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
                        "content-light": "#0d1b16",
                        "content-dark": "#e0f3eb",
                        "subtle-light": "#e7f3ee",
                        "subtle-dark": "#1a382a",
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
<body class="bg-background-light dark:bg-background-dark font-display text-content-light dark:text-content-dark">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top App Bar -->
<div class="flex items-center p-4 pb-2">
<div class="flex size-12 shrink-0 items-center justify-start text-content-light dark:text-content-dark">
<span class="material-symbols-outlined">arrow_back</span>
</div>
<h1 class="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-content-light dark:text-content-dark">Review Your Photos</h1>
<div class="size-12 shrink-0"></div> <!-- Spacer -->
</div>
<!-- Body Text -->
<p class="px-4 pb-3 pt-1 text-base font-normal leading-normal text-content-light/80 dark:text-content-dark/80">Tap a photo to view it full-screen. Retake any photo that isn't clear.</p>
<!-- Image Grid -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
<div class="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Photo of the front of a person's hair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGcjVsYlHtfa_XVhHBeUevZcCh9kaN4bWEP-o4fEJs7_lM8kWGBja9SMpZ-oJujYTRgQ7m9NNa_erar0IbcrZ4LDrzhw9SQV2KZVk5sBTMyjm6Z48lemS1Mddk3reVtWxtJbEmLxf7cnIVuPIIg5XFl3fmsuQ6-IG4dGRDeig1VclplgG1D_7XPc7U8CQc1bkqmpLvkyLN1MijKRS4CfVHEeONsxKsm8VP57wdHRD9oxvwBPWRPDkJ1YqSPr2BEDmmTguMq-oa5W6e");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div class="relative z-10 flex items-end justify-between p-3">
<p class="text-base font-bold leading-tight text-white">Front</p>
<button class="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
<span class="material-symbols-outlined text-base">refresh</span>
</button>
</div>
</div>
<div class="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Photo of the top of a person's hair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBROtNsiun5Sp5x2geQ7Wy6DvqH3r3PaTrjOim85kJRk38mM_HpEDMgqxja2y8FeeZFEjuci1Ey1ZK6PzNTLgsSSdIUSHq3qcLa5oP8jsdxNxMZ9lbD8j4VGGuAiTICFCHCaM7U3hVzZzVlJdasx_vOTN_4z4vvu-sDZChzcvzPkPNYCNw6Ecq2bLqGo3djapvEkKy_Ogjflj9AstHxMgB73-GuyhDCuBYh1VxWDZJwvp0wUlWUziAXNUPTBuUfxzxKSNO2xkDxDXdq");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div class="relative z-10 flex items-end justify-between p-3">
<p class="text-base font-bold leading-tight text-white">Top</p>
<button class="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
<span class="material-symbols-outlined text-base">refresh</span>
</button>
</div>
</div>
<div class="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Photo of the left side of a person's hair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCA2_KV4D49V9m1WJRdnZhpVdDJ1XEcNeKP3wG6X1SyrOuQaa0WGjG-miaCVmF6GypiUB-yKF0JoipBqefjkpOLai5ZGyOu31gSH6ym8FxrUDAjQkCipyctn9tLZlOCk9I8aA9ICFL4RXsQ8zIF_2ozpdv8cK8MzsHrLGv9qCVW2xaYoOXdQFkll6JgDwJBZxz39f5UWHPPED8WoR9Z4zyxe5KM6kH5JSrXnQK3NORBLZnYU3Rq01WR2rm5HiW_H2rfJVJYyhK6vkb");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div class="relative z-10 flex items-end justify-between p-3">
<p class="text-base font-bold leading-tight text-white">Left</p>
<button class="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
<span class="material-symbols-outlined text-base">refresh</span>
</button>
</div>
</div>
<div class="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Photo of the right side of a person's hair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRAWC2jdfwOrzTfWSu-ur1LrF4vEL-ucc6jtaPVG9tkBi0AmpROlNjLxomlHIc1mCWwHKca2byVdNyHftkcOkno0KMoDULaoUyuqvbZ99skrcSuTXB2J1_LiK5-lIEHfcAo6_h4A6mN5ilC7viBnzBP5fzetgo_1V09J0pqMbituV7pftI_tnY7oxJStysLMN1_SGUCbaRt8lF3e3P-cp_63hjsFx9LDeouIabaLXPZuUDEc1Gq4lT2VyOj47BtqDFNEIe0Vpfcmum");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div class="relative z-10 flex items-end justify-between p-3">
<p class="text-base font-bold leading-tight text-white">Right</p>
<button class="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
<span class="material-symbols-outlined text-base">refresh</span>
</button>
</div>
</div>
<div class="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Photo of the back of a person's hair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4AQK3NMIyHT6Wd10bwpCNeuF7wfHIZtsaXrmxOpQ23aZRB-Dkcrj7-lSxqKQR1oxERNCFd2B0YGumPSkvqMVHJJtNEqPf1TCiGJwyts9FaxbQCyIjXR9orU4btXrq5HjdwCBbEG_2vUoH7rSOOhx5r5NwhwWrWsOoYgKUyUVLg-0gzk3aRKirYW5VELu2YLBbSagRQzdflwbky3CD1cYj2KxPasfld_GLVrcgQupuovpUg2mGhU_HJj97y2AljtrfrgBV4YLjMaZa");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div class="relative z-10 flex items-end justify-between p-3">
<p class="text-base font-bold leading-tight text-white">Back</p>
<button class="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
<span class="material-symbols-outlined text-base">refresh</span>
</button>
</div>
</div>
</div>
<!-- Quality Summary Section -->
<div class="flex flex-col gap-2 p-4 pt-2">
<div class="flex min-h-14 items-center gap-4">
<div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-subtle-light dark:bg-subtle-dark text-primary">
<span class="material-symbols-outlined">check_circle</span>
</div>
<p class="flex-1 truncate text-base font-normal leading-normal text-content-light dark:text-content-dark">5 of 5 photos captured</p>
</div>
<div class="flex min-h-14 items-center gap-4">
<div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-subtle-light dark:bg-subtle-dark text-primary">
<span class="material-symbols-outlined">verified</span>
</div>
<p class="flex-1 truncate text-base font-normal leading-normal text-content-light dark:text-content-dark">All photos meet quality standards</p>
</div>
</div>
<div class="flex-grow"></div> <!-- Spacer to push CTAs to bottom -->
<!-- Action Buttons -->
<div class="sticky bottom-0 z-10 mt-auto flex flex-col gap-2 border-t border-black/10 bg-background-light p-4 pt-3 dark:border-white/10 dark:bg-background-dark">
<button class="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-background-dark text-base font-bold transition-opacity hover:opacity-90">Submit Photos</button>
<button class="flex h-12 w-full items-center justify-center rounded-xl bg-primary/20 text-primary text-base font-bold transition-colors hover:bg-primary/30">Retake Any Photo</button>
</div>
</div>
</body></html>