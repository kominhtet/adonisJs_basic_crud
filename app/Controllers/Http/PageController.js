'use strict'

class PageController {
    index({view}){
        return view.render('index');
    }
}

module.exports = PageController
