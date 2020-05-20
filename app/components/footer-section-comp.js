import Component from '@glimmer/component';

export default class FooterSectionCompComponent extends Component {

    model = [
        {
            name: "Personal",
            information: [{
                information_1 : "Facebook",
                information_2 : "Instagram",
                information_3 : "Twitter",
                information_4 : "GitHub",
                information_5 : "Linkdin",

                link_1 : "https://www.facebook.com/OriginalMaye",
                link_2 : "https://www.instagram.com/0riginal_maye/?hl=en",
                link_3 : "https://twitter.com/ThyFilthyNoob",
                link_4 : "https://github.com/MayeDay",
                link_5: "https://www.linkedin.com/in/james-maye-b1b944139/"
            }]
        },{
            name: "Projects",
            information: [{
                information_1 : "Java Game Dev",
                information_2 : "Javascript Coding",
                information_3 : "Ember.js Projects",
                information_4 : "Website Designs",
                information_5 : "MySQL Database Designs",

                link_1 : "https://github.com/MayeDay/First-Attempt-at-GameMaking",
                link_2 : "https://github.com/MayeDay/Javascript-Form",
                link_3 : "https://github.com/MayeDay/EmberPractice",
                link_4 : "https://github.com/MayeDay/DaddyWaddy",
                link_5 : "https://github.com/MayeDay/Airline-System"

            }]
        }



    ];
}
