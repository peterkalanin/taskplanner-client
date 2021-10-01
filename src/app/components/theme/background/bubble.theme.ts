import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-bubble-theme',
    template: `
        <div class="fixed left-0 top-0 w-full overflow-hidden">
            <div class="h-64 bg-{{ theme.primary }}-600 ease-linear
                      transition-all
                      duration-150"></div>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-current text-{{ theme.primary }}-600 ease-linear
                      transition-all
                      duration-150">
                      <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839"
     cx="96.737045"
     cy="25.335894"
     r="31.094049" />
  <circle
     style="stroke-width:14.9082;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-8"
     cx="243.57005"
     cy="55.854126"
     r="40.882915" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-7"
     cx="408.82916"
     cy="17.274473"
     r="31.094049" />
  <ellipse
     style="stroke-width:23.5021;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5"
     cx="663.33972"
     cy="42.610367"
     rx="66.794624"
     ry="62.188099" />
  <ellipse
     style="stroke-width:18.6396;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7"
     cx="840.69098"
     cy="18.227547"
     rx="52.975048"
     ry="49.321594" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6"
     cx="961.16443"
     cy="44.786701"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-8"
     cx="535.50867"
     cy="57.581577"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-6"
     cx="300.57584"
     cy="21.880999"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-5-7-6-5"
     cx="176.19962"
     cy="58.733204"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-8-1"
     cx="567.75427"
     cy="24.184263"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-5-7-6-8-5"
     cx="758.92517"
     cy="36.852207"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:23.5021;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-1"
     cx="1161.9961"
     cy="21.880997"
     rx="66.794624"
     ry="62.188099" />
  <ellipse
     style="stroke-width:23.5021;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-0"
     cx="499.80807"
     cy="-28.790785"
     rx="66.794624"
     ry="62.188099" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.25"
     id="path839-7-3"
     cx="1000.7678"
     cy="11.516316"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-7-8"
     cx="1060.6526"
     cy="42.610363"
     r="31.094049" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-5-8"
     cx="157.77351"
     cy="23.032631"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-5-5"
     cx="337.42801"
     cy="70.249519"
     rx="14.523354"
     ry="13.49409" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-54"
     cx="13.819575"
     cy="10.364683"
     r="31.094049" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.25"
     id="path839-5-7-6-8-5-8"
     cx="1008.8292"
     cy="72.55278"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-5-7-6-8-5-0"
     cx="1089.4434"
     cy="90.978882"
     rx="14.523354"
     ry="13.49409" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-7-7"
     cx="360.46066"
     cy="-3.4548929"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-7-86"
     cx="909.78888"
     cy="-3.1553378e-07"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.25403225"
     id="path839-7-5"
     cx="467.56238"
     cy="80.614204"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-7-9"
     cx="209.59691"
     cy="-3.7411382e-07"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.25"
     id="path839-7-52"
     cx="269.48178"
     cy="-10.364682"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-7-4"
     cx="596.5451"
     cy="76.007683"
     r="31.094049" />
  <circle
     style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-7-0"
     cx="912.09216"
     cy="86.37236"
     r="31.094049" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-5-0"
     cx="74.856041"
     cy="55.278309"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.25"
     id="path839-5-7-6-5-9"
     cx="118.61804"
     cy="73.704414"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.25"
     id="path839-5-7-6-5-6"
     cx="803.83881"
     cy="80.614204"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-5-4"
     cx="846.44916"
     cy="72.55278"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-5-7-6-5-51"
     cx="798.08063"
     cy="44.913624"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-5-84"
     cx="739.34741"
     cy="77.159309"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill;fill-opacity:0.5"
     id="path839-5-7-6-5-1"
     cx="435.31671"
     cy="87.523994"
     rx="14.523354"
     ry="13.49409" />
  <ellipse
     style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
     id="path839-5-7-6-5-92"
     cx="397.31287"
     cy="62.188099"
     rx="14.523354"
     ry="13.49409" />
            </svg>
        </div>

        <div
            class="fixed left-0 bottom-0 w-full overflow-hidden"
            style="transform: rotate(180deg)"
        >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-current text-{{ theme.primary }}-600 ease-linear
                      transition-all
                      duration-150">
                      <circle
                        style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.25"
                        id="path839"
                        cx="96.737045"
                        cy="25.335894"
                        r="31.094049" />
                    <circle
                        style="stroke-width:14.9082;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-8"
                        cx="243.57005"
                        cy="55.854126"
                        r="40.882915" />
                    <circle
                        style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-7"
                        cx="408.82916"
                        cy="17.274473"
                        r="31.094049" />
                    <ellipse
                        style="stroke-width:23.5021;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-5"
                        cx="663.33972"
                        cy="42.610367"
                        rx="66.794624"
                        ry="62.188099" />
                    <ellipse
                        style="stroke-width:18.6396;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.5"
                        id="path839-5-7"
                        cx="840.69098"
                        cy="18.227547"
                        rx="52.975048"
                        ry="49.321594" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.25"
                        id="path839-5-7-6"
                        cx="961.16443"
                        cy="44.786701"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-5-7-6-8"
                        cx="535.50867"
                        cy="57.581577"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-5-7-6-6"
                        cx="300.57584"
                        cy="21.880999"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-5-7-6-5"
                        cx="176.19962"
                        cy="58.733204"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.5"
                        id="path839-5-7-6-8-1"
                        cx="567.75427"
                        cy="24.184263"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.25"
                        id="path839-5-7-6-8-5"
                        cx="758.92517"
                        cy="36.852207"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:23.5021;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-5-1"
                        cx="1161.9961"
                        cy="21.880997"
                        rx="66.794624"
                        ry="62.188099" />
                    <ellipse
                        style="stroke-width:23.5021;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.5"
                        id="path839-5-0"
                        cx="499.80807"
                        cy="-28.790785"
                        rx="66.794624"
                        ry="62.188099" />
                    <circle
                        style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-7-3"
                        cx="1000.7678"
                        cy="11.516316"
                        r="31.094049" />
                    <circle
                        style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-7-8"
                        cx="1060.6526"
                        cy="42.610363"
                        r="31.094049" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.5"
                        id="path839-5-7-6-5-8"
                        cx="157.77351"
                        cy="23.032631"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.25"
                        id="path839-5-7-6-5-5"
                        cx="337.42801"
                        cy="70.249519"
                        rx="14.523354"
                        ry="13.49409" />
                    <circle
                        style="stroke-width:11.3386;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-54"
                        cx="13.819575"
                        cy="10.364683"
                        r="31.094049" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill; fill-opacity:0.5"
                        id="path839-5-7-6-8-5-8"
                        cx="1008.8292"
                        cy="72.55278"
                        rx="14.523354"
                        ry="13.49409" />
                    <ellipse
                        style="stroke-width:5.1049;stroke-linejoin:round;paint-order:markers stroke fill"
                        id="path839-5-7-6-8-5-0"
                        cx="1089.4434"
                        cy="90.978882"
                        rx="14.523354"
                        ry="13.49409" />
            </svg>
        </div>
    `
})

export class BubbleThemeComponent implements OnInit {
    constructor(public theme: ThemeService) { }

    ngOnInit() { }
}