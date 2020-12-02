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
      sectionEleven: [
        {
          title: 'COME FIND US',
          firstP: '12345 North Main Street  New York, NY 55555555 ',
          secondP: 'Phone: 1.8000.555.6789 Email:info@your-domain.com'
        },
        {
          title: 'RECENT POSTS',
          icon:   'fas fa-chevron-right',   
          firstP: 'Train with free weiughts or your body weight?',       
          nutrition: 'Nutritional advice that will keep your traininig'
        },
        {
          title: 'OPENING TIMES',
          firstP: 'Weekdays Monday-Friday  ',
          weekHours: '09:00 - 19:00 ',
          secondP: 'Weekends Saturday - Sunday',
          weekEndHours : ' 09:00 - 21:00'
        }
      ],
      imgDiscount: './img/gym_ad-compressor.jpg',
        footer: [
            {
              link: ' © Copyright 2012 - 2020',
            },
            {
              link: 'Avada Theme by Theme Fusion',
            },
            {
              link: 'All Right Reserved',
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