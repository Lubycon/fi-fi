const breakpoints = [576, 768, 992, 1200] as const;
export const mq = breakpoints.map(breakpoint => `@media (min-width: ${breakpoint}px)`);
