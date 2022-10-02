---
to: src/<%= serviceType %>/<%= name %>/pages/HomePage/logger.ts
---
import { logger } from '@lubycon/logger';

export const homePageLogger = logger.getPageLogger('<%= serviceType %>/<%= name %>/home_page');
