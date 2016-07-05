jQuery(document).ready(function ($) {
"use strict";

//////////////////////////////////////////////////////////////////////////
//        Sticky
//////////////////////////////////////////////////////////////////////////  
$('#sidebar, #content').stickit({screenMinWidth: 1200});
$('.menu_sticky').stickit({scope: StickScope.Document});


//////////////////////////////////////////////////////////////////////////	
// Menu
//////////////////////////////////////////////////////////////////////////
	
    var mainmenu = $('#menu-top, #mainmenu').superfish({
        delay: 400,
        animation: {
            opacity: 'show'
        },
        speed: 'fast',
        autoArrows: false
    });	
 

//////////////////////////////////////////////////////////////////////////
//        animation
//////////////////////////////////////////////////////////////////////////

jQuery().waypoint && (jQuery(".appear_animation").waypoint(function () {
        if (!jQuery(this).hasClass("animate_css_stlye animate_start")) {
            var e = jQuery(this);
            setTimeout(function () {
                e.addClass("animate_css_stlye animate_start")
            }, 20)
        }
    }, {
        offset: "85%",
        triggerOnce: !0
    }));
    
//////////////////////////////////////////////////////////////////////////
//        Grid images
//////////////////////////////////////////////////////////////////////////  

$(".justified-gallery-post").justifiedGallery({
    rowHeight: 200,
    captions: false,
    margins : 3,
    lastRow : 'justify',
    fixedHeight : false
  });

 $('.justified-gallery-post').magnificPopup({
  type:'image', 
  delegate: 'a',
  gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    }
    

});

 //////////////////////////////////////////////////////////////////////////
//        instafeed
//////////////////////////////////////////////////////////////////////////

var tagName = $(".my_instafeed_user_id").attr("data-tag-name");
                    var feed = new Instafeed({
                        get: "user",
                        limit: 8,
                        accessToken: '1053546849.1677ed0.bf153958b9784e41bf8085e843196816',
                        resolution: "low_resolution",
                        template: '<a class="featured-thumbnail" href="{{link}}"><img src="{{image}}" /><span class="overlay_icons fa fa-share"></span><div class="background_over_image"></div></a>',
                        userId: tagName,
                        clientId: "2db1dab36e844b2b8a36f3a7f08e1517",
                    });
                    feed.run();
	
//////////////////////////////////////////////////////////////////////////
//				Tab
//////////////////////////////////////////////////////////////////////////	
	
    var $tabsNav = $('.tabs'),
        $tabsNavLis = $tabsNav.children('li');
    $tabsNav.each(function () {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true, true).hide()
            .first().show();
       $this.children('li').first().addClass('active').stop(true, true).show();
    });
    $tabsNavLis.on('click', function (e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end()
            .addClass('active');
        $this.parent().next().children('.tab-content').stop(true, true).hide()
            .siblings($this.find('a').attr('href')).fadeIn();
        e.preventDefault();
    });
	
    var $tabsNav = $('.tabs1'),
        $tabsNavLis = $tabsNav.children('li');
    $tabsNav.each(function () {
        var $this = $(this);
        $this.next().children('.tab-content1').stop(true, true).hide()
            .first().show();
       $this.children('li').first().addClass('active').stop(true, true).show();
    });
    $tabsNavLis.on('click', function (e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end()
            .addClass('active');
        $this.parent().next().children('.tab-content1').stop(true, true).hide()
            .siblings($this.find('a').attr('href')).fadeIn();
        e.preventDefault();
    });	
	
	
	    var $tabsNav = $('.hover_tab_post_large'),
        $tabsNavLis = $tabsNav.children('li');
    $tabsNav.each(function () {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true, true).hide()
            .first().show();
       $this.children('li').first().addClass('active').stop(true, true).show();
    });
    $tabsNavLis.on('hover', function (e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end()
            .addClass('active');
        $this.parent().next().children('.tab-content').stop(true, true).hide()
            .siblings($this.find('a').attr('rel')).fadeIn();
        e.preventDefault();
    });

    //////////////////////////////////////////////////////////////////////////
//        Mobile Menu
//////////////////////////////////////////////////////////////////////////  

 if ( $('.sb-toggle-left').length ) {
            $('.sb-toggle-left').click( function(){
                $('#nav-wrapper').toggle(100);
            } ); 
            $("#menu-main-menu .menu-item-has-children > a").append($("<span/>",{class:'arrow_down'}).html('<i class="fa fa-angle-down"></i>'));     
        }
        
        $('#nav-wrapper .menu .arrow_down').click( function() {
            var $submenu = $(this).closest('.menu-item-has-children').find(' > .sub-menu');
            
            if ( $submenu.hasClass('menu-active-class') ) {
                $submenu.removeClass('menu-active-class');
            } else {
                $submenu.addClass('menu-active-class');
            }
            
            return false;
        });

//////////////////////////////////////////////////////////////////////////
//				Go to top
//////////////////////////////////////////////////////////////////////////

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 500) {
			jQuery("#go-top").fadeIn();
		} else {
			jQuery("#go-top").fadeOut();
		}
	});
	$("#go-top").click(function () {
		jQuery("body,html").animate({ scrollTop: 0 }, 800 );
		return false;
	});	

//////////////////////////////////////////////////////////////////////////
//				Video responsive
//////////////////////////////////////////////////////////////////////////

fluidvids.init({
      selector: 'iframe',
      players: ['www.youtube.com', 'player.vimeo.com']
    });	
	
//////////////////////////////////////////////////////////////////////////
//				Audio / Video
//////////////////////////////////////////////////////////////////////////

jQuery('div[data-audio-id]').each(function(){
			var audioid = jQuery(this).attr('data-audio-id');
			var audiourl = jQuery(this).attr('data-audio-url');
			
		       jQuery(this).jPlayer({
		         ready: function () {
		           jQuery(this).jPlayer("setMedia", {
		             m4a: ""+audiourl+"",
		           });
		         },
		         play: function() { // To avoid both jPlayers playing together.
			         jQuery(this).jPlayer("pauseOthers");
					},
		         cssSelectorAncestor: "#jp_container_"+audioid,
		         swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",
		         supplied: "m4a",
		       });
		 });




//////////////////////////////////////////////////////////////////////////
//        Slider and carousel
//////////////////////////////////////////////////////////////////////////
        $(".carousel-item-slider, .single_related_post").owlCarousel({
          items : 1,
          nav:false,
          center: true,
          dots: true,
          loop: true,
          autoplay: true,
          smartSpeed : 900,
          autoplayTimeout: 4000,
          autoplaySpeed: 900,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        },
         onInitialize : function(){
        jQuery('.carousel-item-slider, .single_related_post').removeClass('loading');
      }

        }); 


        $(".carousel-item-slider-4, .header_small_4_carousel").owlCarousel({
          items : 4,
          nav:false,
          dots: true,
          loop: false,
          autoplay: true,
          smartSpeed : 900,
          autoplayTimeout: 4000,
          autoplaySpeed: 900,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
         onInitialize : function(){
        jQuery('.carousel-item-slider-4, .header_small_4_carousel').removeClass('loading');
      }

        }); 

        
    
    $(".single-item-slider, .full-slider-main-home").owlCarousel({
      items : 1,
          nav:true,
          loop: true,
          autoplay: true,
          smartSpeed : 900,
          autoplayTimeout: 4000,
          autoplaySpeed: 900,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          dots: false,
         onInitialize : function(){
        jQuery('.single-item-slider, .full-slider-main-home').removeClass('loading');
      }

        });


//////////////////////////////////////////////////////////////////////////
//				Masonry Grid
//////////////////////////////////////////////////////////////////////////
	
 var $container = $('#content_masonry, #content-large-main-grid-post');
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.box',
            transitionDuration: '0.3s',
            gutter: 30
        });
    });			
	

});