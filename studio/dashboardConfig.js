export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61b6a92e903f08994eda9f65',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5k7d1yqn',
                  apiId: 'a121a7e2-f4c1-44f8-b6e1-bb72520a5d7c'
                },
                {
                  buildHookId: '61b6a92e9b74916045b13872',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-krfnu8iv',
                  apiId: '7835a788-6ac1-4171-9176-d1675073c21d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azmi2409/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-krfnu8iv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
