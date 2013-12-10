from flask.ext.assets import Environment, Bundle

js = Bundle('js/libs/jquery.js',
                'jquery-ui/js/jquery-ui-1.10.2.custom.js',
                'bootstrap/js/bootstrap.min.js',
                'js/libs/bootstrap-select.js',
                'js/libs/Uri.min.js',
                'js/libs/underscore-min.js',
                'js/libs/d3.v3.js',
                'js/libs/d3.layout.cloud.js',
                'fancybox/jquery.mousewheel-3.0.6.pack.js',
                'fancybox/source/jquery.fancybox.pack.js',
                'fancybox/source/helpers/jquery.fancybox-buttons.js',
                'fancybox/source/helpers/jquery.fancybox-media.js',
                'fancybox/source/helpers/jquery.fancybox-thumbs.js',
                'js/misc_functions.js',
                'js/libs/spin.min.js',
                'js/record_list_functions.js',
                'js/tooltip_manager.js',
                'js/feedback_components.js',
                'js/libs/aladin.min.js', 
                'js/facets_components.js',
                'js/query_form.js',
                filters=('yui_js'), output='compressed/all.js')

css = Bundle('bootstrap/css/bootstrap.min.css',
                 'jquery-ui/css/smoothness/jquery-ui-1.10.2.custom.min.css',
                 'fancybox/source/jquery.fancybox.css',
                 'fancybox/source/helpers/jquery.fancybox-buttons.css',
                 'fancybox/source/helpers/jquery.fancybox-thumbs.css',
                 'css/bootstrap_custom.css',
                 'css/styles.css',  filters=('cssmin', 'cssrewrite'), output="compressed/all.css")
