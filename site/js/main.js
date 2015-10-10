require.config({
    baseUrl: './js',
    paths: {
        jquery: 'lib/jquery.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min'
    },
    shim:{
    underscore:{
        exports:'_'
    },
    backbone:{
        deps:['underscore'],
        exports:'Backbone'
    }
    }
});

require(['jquery','underscore','backbone'],function($,_,Backbone){

})