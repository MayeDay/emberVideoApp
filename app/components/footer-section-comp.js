import Component from '@glimmer/component';

export default class FooterSectionCompComponent extends Component {

    model = [
        {
            name: "Personal",
            information: [{
                information_1 : "Facebook",
                information_2 :  "Instagram",
                information_3 : "Twitter",
                information_4 : "GitHub",
                information_5 : "Linkdin"
            }]
        },{
            name: "Projects",
            information: [{
                information_1 : "Java Game Dev",
                information_2 : "Python Coding",
                information_3 : "Ember.js Projects",
                information_4 : "Website Designs",
                information_5 : "MySQL Database Designs"
            }]
        }



    ];
}
