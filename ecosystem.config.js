module.exports = {
  apps: [
    {
      name: 'template-nuxt3-3901',
      script: './.output/server/index.mjs',
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '101.200.179.232',
      ref: 'origin/main',
      repo: 'git@github.com:xsrole/template-nuxt3.git',
      path: '/usr/www/template-nuxt3',
      'post-deploy': 'pnpm i && pnpm run build && PORT=3901 pm2 start',
    },
  },
};
