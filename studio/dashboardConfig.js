export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6304aa4eb7ef905670ae7776',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-seo-pages-studio',
                  apiId: 'a3e4d15c-1241-4bab-9c30-0cca01175e8c'
                },
                {
                  buildHookId: '6304aa4e13ce425d92cbe7dc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-seo-pages',
                  apiId: 'fd257a16-ff37-4e06-a771-53bae20219f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mufaqar/sanity-nextjs-landing-seo-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-seo-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
