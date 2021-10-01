import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-line-theme',
    template: `
        <div class="fixed left-0 top-0 w-full overflow-hidden">
            <div class="h-64 bg-{{ theme.primary }}-600 ease-linear
                      transition-all
                      duration-150"></div>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-current text-{{ theme.primary }}-600 ease-linear
                      transition-all
                      duration-150">
                <path d="M1200 40L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                <path d="M1200 80L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" opacity=".5"></path>
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" opacity=".25"></path>
            </svg>
        </div>

        <div
            class="fixed left-0 bottom-0 w-full overflow-hidden"
            style="transform: rotate(180deg)"
        >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-current text-{{ theme.primary }}-600 ease-linear
                      transition-all
                      duration-150">
                <path d="M1200 80L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" opacity=".5"></path>
            </svg>
        </div>
    `
})

export class LineThemeComponent implements OnInit {
    constructor(public theme: ThemeService) { }

    ngOnInit() { }
}