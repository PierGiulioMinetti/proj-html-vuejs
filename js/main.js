const app = new Vue({
    el: '#app',
    data: {
      linkHeader: [
          {
              link: 'HOME'
          },
          {
            link: 'ABOUT US'
           },
           {
            link: 'FACILITIES'
           },
           {
            link: 'MEMBERSHIP'
           },
           {
            link: 'TESTIMONIALS'
           },
           {
            link: 'BLOG'
           },
        ],
      
        footer: [
            {
              link: 'Copyright 2012 - 2020',
              bordo: 'I'
            },
            {
              link: 'Avada Theme by Theme Fusion',
              bordo: 'I'
            },
            {
              link: 'All Right Reserved',
              bordo: 'I'
            },
            {
              link: 'Powered by WordPress'
            }
          ],

        social: [
            {
              nome: 'fab fa-facebook-f',
            },
            {
              nome: 'fab fa-twitter'
            },
            {
              nome: 'fab fa-instagram'
            }

        ]


    }, //-->end data
    


  }) //--> end vueJS