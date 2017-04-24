(function() {
  var fa = ["fa fa-flag","fa fa-caret-down","fa fa-flag fa-fw","fa fa-rub fa-fw","fa fa-camera-retro fa-fw","fa fa-check-square fa-fw","fa fa-won fa-fw","fa fa-file-text-o fa-fw","fa fa-hand-o-right fa-fw","fa fa-play-circle fa-fw","fa fa-github fa-fw","fa fa-medkit fa-fw","fa fa-caret-down","fa fa-flag","fa fa-rub","fa fa-ruble","fa fa-rouble","fa fa-pagelines","fa fa-stack-exchange","fa fa-arrow-circle-o-right","fa fa-arrow-circle-o-left","fa fa-caret-square-o-left","fa fa-toggle-left","fa fa-dot-circle-o","fa fa-wheelchair","fa fa-vimeo-square","fa fa-try","fa fa-turkish-lira","fa fa-plus-square-o","fa fa-adjust","fa fa-anchor","fa fa-archive","fa fa-arrows","fa fa-arrows-h","fa fa-arrows-v","fa fa-asterisk","fa fa-ban","fa fa-bar-chart-o","fa fa-barcode","fa fa-bars","fa fa-beer","fa fa-bell","fa fa-bell-o","fa fa-bolt","fa fa-book","fa fa-bookmark","fa fa-bookmark-o","fa fa-briefcase","fa fa-bug","fa fa-building-o","fa fa-bullhorn","fa fa-bullseye","fa fa-calendar","fa fa-calendar-o","fa fa-camera","fa fa-camera-retro","fa fa-caret-square-o-down","fa fa-caret-square-o-left","fa fa-caret-square-o-right","fa fa-caret-square-o-up","fa fa-certificate","fa fa-check","fa fa-check-circle","fa fa-check-circle-o","fa fa-check-square","fa fa-check-square-o","fa fa-circle","fa fa-circle-o","fa fa-clock-o","fa fa-cloud","fa fa-cloud-download","fa fa-cloud-upload","fa fa-code","fa fa-code-fork","fa fa-coffee","fa fa-cog","fa fa-cogs","fa fa-comment","fa fa-comment-o","fa fa-comments","fa fa-comments-o","fa fa-compass","fa fa-credit-card","fa fa-crop","fa fa-crosshairs","fa fa-cutlery","fa fa-dashboard","fa fa-desktop","fa fa-dot-circle-o","fa fa-download","fa fa-edit","fa fa-ellipsis-h","fa fa-ellipsis-v","fa fa-envelope","fa fa-envelope-o","fa fa-eraser","fa fa-exchange","fa fa-exclamation","fa fa-exclamation-circle","fa fa-exclamation-triangle","fa fa-external-link","fa fa-external-link-square","fa fa-eye","fa fa-eye-slash","fa fa-female","fa fa-fighter-jet","fa fa-film","fa fa-filter","fa fa-fire","fa fa-fire-extinguisher","fa fa-flag","fa fa-flag-checkered","fa fa-flag-o","fa fa-flash","fa fa-flask","fa fa-folder","fa fa-folder-o","fa fa-folder-open","fa fa-folder-open-o","fa fa-frown-o","fa fa-gamepad","fa fa-gavel","fa fa-gear","fa fa-gears","fa fa-gift","fa fa-glass","fa fa-globe","fa fa-group","fa fa-hdd-o","fa fa-headphones","fa fa-heart","fa fa-heart-o","fa fa-home","fa fa-inbox","fa fa-info","fa fa-info-circle","fa fa-key","fa fa-keyboard-o","fa fa-laptop","fa fa-leaf","fa fa-legal","fa fa-lemon-o","fa fa-level-down","fa fa-level-up","fa fa-lightbulb-o","fa fa-location-arrow","fa fa-lock","fa fa-magic","fa fa-magnet","fa fa-mail-forward","fa fa-mail-reply","fa fa-mail-reply-all","fa fa-male","fa fa-map-marker","fa fa-meh-o","fa fa-microphone","fa fa-microphone-slash","fa fa-minus","fa fa-minus-circle","fa fa-minus-square","fa fa-minus-square-o","fa fa-mobile","fa fa-mobile-phone","fa fa-money","fa fa-moon-o","fa fa-music","fa fa-pencil","fa fa-pencil-square","fa fa-pencil-square-o","fa fa-phone","fa fa-phone-square","fa fa-picture-o","fa fa-plane","fa fa-plus","fa fa-plus-circle","fa fa-plus-square","fa fa-plus-square-o","fa fa-power-off","fa fa-print","fa fa-puzzle-piece","fa fa-qrcode","fa fa-question","fa fa-question-circle","fa fa-quote-left","fa fa-quote-right","fa fa-random","fa fa-refresh","fa fa-reply","fa fa-reply-all","fa fa-retweet","fa fa-road","fa fa-rocket","fa fa-rss","fa fa-rss-square","fa fa-search","fa fa-search-minus","fa fa-search-plus","fa fa-share","fa fa-share-square","fa fa-share-square-o","fa fa-shield","fa fa-shopping-cart","fa fa-sign-in","fa fa-sign-out","fa fa-signal","fa fa-sitemap","fa fa-smile-o","fa fa-sort","fa fa-sort-alpha-asc","fa fa-sort-alpha-desc","fa fa-sort-amount-asc","fa fa-sort-amount-desc","fa fa-sort-asc","fa fa-sort-desc","fa fa-sort-down","fa fa-sort-numeric-asc","fa fa-sort-numeric-desc","fa fa-sort-up","fa fa-spinner","fa fa-square","fa fa-square-o","fa fa-star","fa fa-star-half","fa fa-star-half-empty","fa fa-star-half-full","fa fa-star-half-o","fa fa-star-o","fa fa-subscript","fa fa-suitcase","fa fa-sun-o","fa fa-superscript","fa fa-tablet","fa fa-tachometer","fa fa-tag","fa fa-tags","fa fa-tasks","fa fa-terminal","fa fa-thumb-tack","fa fa-thumbs-down","fa fa-thumbs-o-down","fa fa-thumbs-o-up","fa fa-thumbs-up","fa fa-ticket","fa fa-times","fa fa-times-circle","fa fa-times-circle-o","fa fa-tint","fa fa-toggle-down","fa fa-toggle-left","fa fa-toggle-right","fa fa-toggle-up","fa fa-trash-o","fa fa-trophy","fa fa-truck","fa fa-umbrella","fa fa-unlock","fa fa-unlock-alt","fa fa-unsorted","fa fa-upload","fa fa-user","fa fa-users","fa fa-video-camera","fa fa-volume-down","fa fa-volume-off","fa fa-volume-up","fa fa-warning","fa fa-wheelchair","fa fa-wrench","fa fa-check-square","fa fa-check-square-o","fa fa-circle","fa fa-circle-o","fa fa-dot-circle-o","fa fa-minus-square","fa fa-minus-square-o","fa fa-plus-square","fa fa-plus-square-o","fa fa-square","fa fa-square-o","fa fa-bitcoin","fa fa-btc","fa fa-cny","fa fa-dollar","fa fa-eur","fa fa-euro","fa fa-gbp","fa fa-inr","fa fa-jpy","fa fa-krw","fa fa-money","fa fa-rmb","fa fa-rouble","fa fa-rub","fa fa-ruble","fa fa-rupee","fa fa-try","fa fa-turkish-lira","fa fa-usd","fa fa-won","fa fa-yen","fa fa-align-center","fa fa-align-justify","fa fa-align-left","fa fa-align-right","fa fa-bold","fa fa-chain","fa fa-chain-broken","fa fa-clipboard","fa fa-columns","fa fa-copy","fa fa-cut","fa fa-dedent","fa fa-eraser","fa fa-file","fa fa-file-o","fa fa-file-text","fa fa-file-text-o","fa fa-files-o","fa fa-floppy-o","fa fa-font","fa fa-indent","fa fa-italic","fa fa-link","fa fa-list","fa fa-list-alt","fa fa-list-ol","fa fa-list-ul","fa fa-outdent","fa fa-paperclip","fa fa-paste","fa fa-repeat","fa fa-rotate-left","fa fa-rotate-right","fa fa-save","fa fa-scissors","fa fa-strikethrough","fa fa-table","fa fa-text-height","fa fa-text-width","fa fa-th","fa fa-th-large","fa fa-th-list","fa fa-underline","fa fa-undo","fa fa-unlink","fa fa-angle-double-down","fa fa-angle-double-left","fa fa-angle-double-right","fa fa-angle-double-up","fa fa-angle-down","fa fa-angle-left","fa fa-angle-right","fa fa-angle-up","fa fa-arrow-circle-down","fa fa-arrow-circle-left","fa fa-arrow-circle-o-down","fa fa-arrow-circle-o-left","fa fa-arrow-circle-o-right","fa fa-arrow-circle-o-up","fa fa-arrow-circle-right","fa fa-arrow-circle-up","fa fa-arrow-down","fa fa-arrow-left","fa fa-arrow-right","fa fa-arrow-up","fa fa-arrows","fa fa-arrows-alt","fa fa-arrows-h","fa fa-arrows-v","fa fa-caret-down","fa fa-caret-left","fa fa-caret-right","fa fa-caret-square-o-down","fa fa-caret-square-o-left","fa fa-caret-square-o-right","fa fa-caret-square-o-up","fa fa-caret-up","fa fa-chevron-circle-down","fa fa-chevron-circle-left","fa fa-chevron-circle-right","fa fa-chevron-circle-up","fa fa-chevron-down","fa fa-chevron-left","fa fa-chevron-right","fa fa-chevron-up","fa fa-hand-o-down","fa fa-hand-o-left","fa fa-hand-o-right","fa fa-hand-o-up","fa fa-long-arrow-down","fa fa-long-arrow-left","fa fa-long-arrow-right","fa fa-long-arrow-up","fa fa-toggle-down","fa fa-toggle-left","fa fa-toggle-right","fa fa-toggle-up","fa fa-arrows-alt","fa fa-backward","fa fa-compress","fa fa-eject","fa fa-expand","fa fa-fast-backward","fa fa-fast-forward","fa fa-forward","fa fa-pause","fa fa-play","fa fa-play-circle","fa fa-play-circle-o","fa fa-step-backward","fa fa-step-forward","fa fa-stop","fa fa-youtube-play","fa fa-adn","fa fa-android","fa fa-apple","fa fa-bitbucket","fa fa-bitbucket-square","fa fa-bitcoin","fa fa-btc","fa fa-css3","fa fa-dribbble","fa fa-dropbox","fa fa-facebook","fa fa-facebook-square","fa fa-flickr","fa fa-foursquare","fa fa-github","fa fa-github-alt","fa fa-github-square","fa fa-gittip","fa fa-google-plus","fa fa-google-plus-square","fa fa-html5","fa fa-instagram","fa fa-linkedin","fa fa-linkedin-square","fa fa-linux","fa fa-maxcdn","fa fa-pagelines","fa fa-pinterest","fa fa-pinterest-square","fa fa-renren","fa fa-skype","fa fa-stack-exchange","fa fa-stack-overflow","fa fa-trello","fa fa-tumblr","fa fa-tumblr-square","fa fa-twitter","fa fa-twitter-square","fa fa-vimeo-square","fa fa-vk","fa fa-weibo","fa fa-windows","fa fa-xing","fa fa-xing-square","fa fa-youtube","fa fa-youtube-play","fa fa-youtube-square","fa fa-ambulance","fa fa-h-square","fa fa-hospital-o","fa fa-medkit","fa fa-plus-square","fa fa-stethoscope","fa fa-user-md","fa fa-wheelchair","fa fa-flag","fa fa-maxcdn"];

  var rnd = parseInt(Math.random() * fa.length);
  document.write('<i class="'+fa[rnd]+'"></i>');
})()
