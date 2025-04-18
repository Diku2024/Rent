import { defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  projects: [
// // //   use: {
// //     headless: true,
// //     viewport: { width: 1280, height: 720 },
// //     actionTimeout: 0,
// //     ignoreHTTPSErrors: true,
//   },
 
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']   
       },
      
    }



});
