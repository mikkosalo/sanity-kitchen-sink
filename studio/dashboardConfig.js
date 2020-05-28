export default {
  widgets: [
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
                  buildHookId: '5ecf96f43aba6001ab1a12ad',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y4xyici2',
                  apiId: '96012710-76cd-4a45-9b7e-605d2529da9b'
                },
                {
                  buildHookId: '5ecf96f53dbc29580eb43fc2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v8un35ht',
                  apiId: 'cf45c570-19b9-4aed-9761-0cdc840209f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikkosalo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v8un35ht.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
