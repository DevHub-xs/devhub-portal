import { trigger, state, style, transition, animate, keyframes, query, stagger, group } from '@angular/animations';

/**
 * Modern UI Animations Library
 * Smooth 60fps animations for delightful user experience
 */

// Fade animations
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 }))
  ])
]);

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0 }))
  ])
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('200ms ease-out', style({ opacity: 0 }))
  ])
]);

// Slide animations
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
      style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
      style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
      style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const slideInDown = trigger('slideInDown', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
      style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

// Scale animations
export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('300ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
      style({ transform: 'scale(1)', opacity: 1 }))
  ])
]);

export const scaleInOut = trigger('scaleInOut', [
  transition(':enter', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('300ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
      style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('200ms ease-out', 
      style({ transform: 'scale(0.8)', opacity: 0 }))
  ])
]);

// List animations
export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('50ms', [
        animate('400ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

// Router animations
export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 0
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-50px)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(50px)' }),
        animate('300ms 100ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ])
]);

// Modal/Dialog animations
export const modalAnimation = trigger('modalAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('200ms ease-out', style({ opacity: 1 })),
    query('.modal-content', [
      style({ transform: 'scale(0.9) translateY(-50px)', opacity: 0 }),
      animate('300ms 100ms cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
    ])
  ]),
  transition(':leave', [
    query('.modal-content', [
      animate('200ms ease-out', 
        style({ transform: 'scale(0.9) translateY(-50px)', opacity: 0 }))
    ]),
    animate('200ms ease-out', style({ opacity: 0 }))
  ])
]);

// Toast notification animation
export const toastAnimation = trigger('toastAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
      style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('200ms ease-out', 
      style({ transform: 'translateX(100%)', opacity: 0 }))
  ])
]);

// Hover state animation
export const hoverScale = trigger('hoverScale', [
  state('default', style({ transform: 'scale(1)' })),
  state('hovered', style({ transform: 'scale(1.05)' })),
  transition('default <=> hovered', animate('200ms ease-out'))
]);

// Loading spinner animation
export const spinAnimation = trigger('spinAnimation', [
  transition('* => *', [
    animate('1000ms linear', keyframes([
      style({ transform: 'rotate(0deg)', offset: 0 }),
      style({ transform: 'rotate(360deg)', offset: 1 })
    ]))
  ])
]);

// Ripple effect animation
export const rippleAnimation = trigger('rippleAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0.5 }),
    animate('600ms ease-out', style({ transform: 'scale(4)', opacity: 0 }))
  ])
]);

// Bounce animation
export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
      style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
      style({ opacity: 1, transform: 'scale(1.05)', offset: 0.5 }),
      style({ transform: 'scale(0.95)', offset: 0.7 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ])
]);

// Shake animation (for errors)
export const shakeAnimation = trigger('shakeAnimation', [
  transition('* => shake', [
    animate('400ms', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-10px)', offset: 0.1 }),
      style({ transform: 'translateX(10px)', offset: 0.2 }),
      style({ transform: 'translateX(-10px)', offset: 0.3 }),
      style({ transform: 'translateX(10px)', offset: 0.4 }),
      style({ transform: 'translateX(-10px)', offset: 0.5 }),
      style({ transform: 'translateX(10px)', offset: 0.6 }),
      style({ transform: 'translateX(-10px)', offset: 0.7 }),
      style({ transform: 'translateX(10px)', offset: 0.8 }),
      style({ transform: 'translateX(0)', offset: 1 })
    ]))
  ])
]);

// Pulse animation
export const pulseAnimation = trigger('pulseAnimation', [
  transition('* => pulse', [
    animate('1000ms', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(1.05)', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ])
]);

// Expand/Collapse animation
export const expandCollapse = trigger('expandCollapse', [
  state('collapsed', style({ height: '0', overflow: 'hidden', opacity: 0 })),
  state('expanded', style({ height: '*', overflow: 'visible', opacity: 1 })),
  transition('collapsed <=> expanded', animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
]);

// Rotation animation
export const rotateAnimation = trigger('rotateAnimation', [
  state('default', style({ transform: 'rotate(0deg)' })),
  state('rotated', style({ transform: 'rotate(180deg)' })),
  transition('default <=> rotated', animate('300ms ease-in-out'))
]);
