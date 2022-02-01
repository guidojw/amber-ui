'use strict';
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
<<<<<<< HEAD
  reporter: 'dot',
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
=======
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
>>>>>>> b1f5f42 (v3.20.2...v4.1.1)
  browser_start_timeout: 120,
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI ? '--no-sandbox' : null,
        '--headless',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
<<<<<<< HEAD
        '--window-size=1440,900'
      ].filter(Boolean),
    }
  }
=======
        '--window-size=1440,900',
      ].filter(Boolean),
    },
  },
>>>>>>> b1f5f42 (v3.20.2...v4.1.1)
};
