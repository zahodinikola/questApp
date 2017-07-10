'use strict';

questApp.service('questionService', function() {
    return {
        question: {
            text: 'what js-framework is best to use?',
            author: 'Yan Yanich',
            date: '20.12.2017',
            answers:
            [{
                text: 'Angular JS!',
                author: 'Vova Sidoroff',
                date: '20.12.2017',
                rate: 2
            },{
                text: 'Angular JS is the best!',
                author: 'Oleg Kuznecov',
                date:'20.12.2017',
                rate: 3
            }]
        }
    }
})