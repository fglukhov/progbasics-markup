$(window).resize(function() {
  $("body").css("width","");
  pupMakeup();
  makeup();
});

$(window).load(function() {
  
  $("body").css("width",$("body").width()-1).css("width",$("body").width()+1);
  makeup();
});


$(window).scroll(function() {
  if ($(".fixed-menu").length) {
    if ($(window).scrollTop() > $(".header").outerHeight() - 50) {
      $(".fixed-menu").fadeIn(150)
    } else {
      $(".fixed-menu").fadeOut(150)
    }
  }
});

$(document).ready(function () {

  

  $(".main-menu a").click(function() {
    
    $("html,body").animate({
      scrollTop: $("a[name='"+$(this).attr("href").replace("#","")+"']").offset().top - 58
    },1000);
    
    return false;
  });

  if (!$.support.transition) {
    $.fn.transition = $.fn.animate;
  }

  reviewsSlider();

  $(".success-slider").successSlider();

  $(".success-slider .ttl").click(function() {
    $(".success-slider").find(".expandable").slideDown(250);
    $(".success-slider").find(".slide").addClass("slide-expanded");
  });
  
  $(".success-slider .success-collapse").click(function() {
    $(".success-slider").find(".expandable").slideUp(250);
    $(".success-slider").find(".slide").removeClass("slide-expanded");
  });

  $(".about-carousel .jcarousel").jcarousel({
    scroll: 3,
    wrap: "circular"
  });

  $(".notebook-hint-trigger").click(function() {
    $(this).toggleClass("notebook-hint-trigger-act")
  });
  
  $(".how-block .controlDiv").click(function() {
    $(".how-notebook .tooltip-custom").fadeOut(150);
    $(".tooltip-popup").not(".way-tooltip-popup").fadeOut(150,function() {
      $(this).remove();
    });
    $(this).parents(".how-block").find(".v-cont").html("<iframe width='713' height='446' src='"+$(this).attr("vid")+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
    $(this).hide();
  })
  
  $(".video-2 .controlDiv").click(function() {
    $(this).parents(".video-2").find(".v-cont").html("<iframe width='526' height='319' src='"+$(this).attr("vid")+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
    $(this).hide();
  })

  $(".tooltip-custom").tooltipCustom();
  
  programCalendar();
  
  $("#way-slider").slider({
    step: 1,
    range: "min",
    min: 0,
    max: 500,
    animate: "slow",
    slide: function(event, ui) {
      pos = ui.value;
      
      $(".move-slider-hint").fadeOut(250);
      
    },
    stop: function(event, ui) {
      pos = ui.value;
      
      $(".way-tooltips .tooltip-popup").fadeOut(150);
      
      if (pos < 50) {
        $( "#way-slider" ).slider( "value", 0 );
        $("#way-tooltip-1").show().css("opacity",0).css("margin-bottom",-55).animate({
          marginBottom: 0,
          opacity:1
        },300);
      }
      
      if (pos >= 50 && pos < 150) {
        $( "#way-slider" ).slider( "value", 100 );
        $("#way-tooltip-2").show().css("opacity",0).css("margin-bottom",-55).animate({
          marginBottom: 0,
          opacity:1
        },300);
      }
      
      if (pos >= 150 && pos < 250) {
        $( "#way-slider" ).slider( "value", 200 );
        $("#way-tooltip-3").show().css("opacity",0).css("margin-bottom",-55).animate({
          marginBottom: 0,
          opacity:1
        },300);
      }
      
      if (pos >= 250 && pos < 350) {
        $( "#way-slider" ).slider( "value", 300 );
        $("#way-tooltip-4").show().css("opacity",0).css("margin-bottom",-55).animate({
          marginBottom: 0,
          opacity:1
        },300);
      }
      
      if (pos >= 350 && pos < 450) {
        $( "#way-slider" ).slider( "value", 400 );
        $("#way-tooltip-5").show().css("opacity",0).css("margin-bottom",-55).animate({
          marginBottom: 0,
          opacity:1
        },300);
      }
      
      if (pos >= 450) {
        $( "#way-slider" ).slider( "value", 500 );
        $("#way-tooltip-6").show().css("opacity",0).css("margin-bottom",-55).animate({
          marginBottom: 0,
          opacity:1
        },300);
      }
      
    }
  });
  
  $(".way-block .ico-novice").click(function() {
    $(".way-tooltip-popup").fadeOut(150);
    $("#way-slider").slider( "value", 0 );
    $("#way-tooltip-1").show().css("opacity",0).css("margin-bottom",-55).animate({
      marginBottom: 0,
      opacity:1
    },300);
  })
  
  $(".way-block .ico-guru").click(function() {
    $(".way-tooltip-popup").fadeOut(150);
    $("#way-slider").slider( "value", 500 );
    $("#way-tooltip-6").show().css("opacity",0).css("margin-bottom",-55).animate({
      marginBottom: 0,
      opacity:1
    },300);
  })

  var curDate = new Date();
  
  curDate.setDate(curDate.getDate() + 7 - curDate.getUTCDay());
  
  var endDate = new Date(curDate.getFullYear(),curDate.getMonth(),curDate.getDate());
  
  $(".countdown").each(function() {
    $(this).countdown({
      until: endDate,
      layout : "<div class='cd-section'><div class='cd-num'>{dnn}</div> {dl}</div><div class='cd-section'><div class='cd-num'>{hnn}</div> {hl}</div><div class='cd-section'><div class='cd-num'>{mnn}</div> {ml}</div>"
    });
  });
  
  
  $(".main-slider").mainSlider();

  $("input:checkbox").each(function() {
    if ($(this).is(":disabled")) {
      $(this).parents(".form-item").addClass("disabled")
    }
  });
  
  $("input:radio").each(function() {
    if ($(this).is(":disabled")) {
      $(this).parents(".form-item").addClass("disabled")
    }
  });

  if ($("input:checkbox").length) {
    $("input:checkbox").iCheck()
  }
  
  if ($("input:radio").length) {
    $("input:radio").iCheck()
  }

  $(".form-text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $(".form-phone").mask("+7 (999) 999-99-99");

  validateForms();


  makeup();
  
  
});

function makeup() {

  $("input.form-submit").each(function () {
    if ($(this)[0].tagName == "INPUT" && !$(this).parents("div").find("div.form-submit").length) {
      var divBtn = $("<div></div>");
      var submit = $(this);
      divBtn.attr("class",$(this).attr("class")).attr("id",$(this).attr("id")).html("<span>" + $(this).val() + "</span>");
      $(this).after(divBtn);
      $(this).hide();
      
      if ($(this).is(":disabled")) {
        divBtn.addClass("button-disabled")
      }
      
      divBtn.on("click",function () {
        submit.click();
      });
    }
    
  });
  
  $("input:text, input:password, textarea").each(function() {
    $(this).addClass("initial");
    
    if ($(this).prop("tagName") == "INPUT") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      if ($(this).hasClass("form-phone")) {
        $(this).focus(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      } else {
        $(this).keydown(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      }
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      $(this).focus();
    });
    
  });
  
}

function validateForms() {
  
  $(".common-form form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        error.insertAfter(element).wrap("<div class='error-wrapper' />");
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error-wrapper").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find(".form-email").length) {
      $(this).find(".form-email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный адрес!"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    
  });  
    
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
  });
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + ($(window).height() - popup.outerHeight(true))/2;
  if (pupTop < 20) pupTop = 20;
  $(".tint").css("height",$(window).height()).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",($(window).width()-popup.outerWidth(true))/2 - 20);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + ($(window).height()-popup.outerHeight(true))/2);
  }
  
}

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  if (!popup.children(".popup-shadow").length) {
    popup.append("<div class='popup-shadow' />");
  } 
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
}

jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    var lister = slider.find(".lister");
    
    lister.find(".item").eq(0).addClass("act");
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    var listerItems = lister.find(".item");
    
    lister.css("background-position",lister.find(".act").offset().left-2000+lister.find(".act").outerWidth()/2+"px"+" 0");
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
    
      listerItems.on("click",function () {
        if (!$(this).hasClass("act")) {
          listerItems.removeClass("act");
          $(this).addClass("act");
          slides.fadeOut(500).removeClass("slide-act");
          slides.eq($(this).index()).fadeIn(500).addClass("slide-act");
          //sliderMakeup();
          lister.css("background-position",lister.find(".act").offset().left-2000+lister.find(".act").outerWidth()/2+"px"+" 0");
          
          sliderAnimate(slider.find(".slide-act").prevAll(".slide").length);
          
        }
      });
      
      // listerItems.bind("mouseover",function () {
        // $(this).click();
      // });
      
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          listerItems.filter(".act").next().click();
        } else {
          listerItems.eq(0).click();
        }
      });
      
      
      
      slider.find(".slides").after("<div class='next' />");
      slider.find(".slides").after("<div class='prev' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex < sliderSize-1) {
          curIndex++;
          lister.find(".item").eq(curIndex).click();
        } else {
          lister.find(".item").eq(0).click();
        }
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex > 0) {
          curIndex--;
          lister.find(".item").eq(curIndex).click();
        } else {
          lister.find(".item").eq(slides.length-1).click();
        }
      });
      
    }
    
    sliderAnimate(0);
    
  }
})( jQuery );

(function( jQuery ) {
  jQuery.fn.successSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    if (sliderSize > 1) {
    
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex < sliderSize-1) {
          curIndex++;
          slider.find(".slide-act").hide().removeClass("slide-act");
          slides.eq(curIndex).fadeIn(250).addClass("slide-act");
        } else {
          slider.find(".slide-act").hide().removeClass("slide-act");
          slides.eq(0).fadeIn(250).addClass("slide-act");
        }
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex > 0) {
          curIndex--;
          slider.find(".slide-act").hide().removeClass("slide-act");
          slides.eq(curIndex).fadeIn(250).addClass("slide-act");
        } else {
          slider.find(".slide-act").hide().removeClass("slide-act");
          slides.eq(slides.length-1).fadeIn(250).addClass("slide-act");
        }
      });
      
    }
  }
})( jQuery );

function programCalendar() {
  var tabs = $(".program-calendar-item");
  var tabContents = $(".course-descr");
  
  if (!tabs.hasClass("act")) {
    //tabs.first().addClass("act");
  }
  
  tabContents.hide();
  //tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
  
  //tabContents.find(".course-descr-pt").css("left",tabs.first().position().left + 45 - 16)
  
  tabs.eq(0).addClass("act");
  tabContents.eq(0).show();
  
  tabContents.find(".course-descr-pt").css("left",tabs.eq(0).position().left + 45 - 16)
  
  tabs.click(function() {
    if (!tabs.parents().hasClass("tabs-triggered")) {
      tabContents.hide();
      
      if (!tabs.hasClass("act")) {
        tabContents.filter("[rel='"+$(this).attr("rel")+"']").slideDown(250);
      } else {
        tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(250);
      }
      
      tabs.removeClass("act");
      $(this).addClass("act");
      
      
      
    }
    
    tabContents.find(".course-descr-pt").css("left",$(this).position().left + 45 - 16)
  });
  
  tabContents.find(".close").click(function() {
    tabContents.slideUp(250);
    tabs.removeClass("act");
  })
  
  
}

(function( jQuery ) {
  jQuery.fn.tooltipCustom = function() {
    
    $(this).click(function(){
      
      var trigger = $(this);
      
      trigger.addClass("trigger-act");
    
      $(".tooltip-popup").not(".way-tooltip-popup").each(function() {
        $(this).fadeOut(150,function() {
          $(this).remove();
        })
      });
    
      var $tooltip = $("<div class='tooltip-popup' id='"+trigger.attr("rel")+"' />");
      
      $tooltip.html("<div class='tooltip-cont'><div class='close'></div>"+$(".tooltip-content[rel='"+trigger.attr("rel")+"']").html()+"</div>");
      
      if (trigger.hasClass("tooltip-l")) {
        $tooltip.addClass("tooltip-popup-l");
      }
      
      if (trigger.hasClass("tooltip-r")) {
        $tooltip.addClass("tooltip-popup-r");
      }
      
      if (trigger.hasClass("tooltip-t")) {
        $tooltip.addClass("tooltip-popup-t");
      }
      
      if (trigger.hasClass("tooltip-b")) {
        $tooltip.addClass("tooltip-popup-b");
      }
      
      $tooltip.css({
        left: trigger.offset().left,
        top: trigger.offset().top
      });
      
      
      $("body").append($tooltip);
      
      $tooltip.fadeIn(150);
      
      if (trigger.hasClass("tooltip-l") || trigger.hasClass("tooltip-r")) {
        $tooltip.css("margin-top", -$tooltip.height()/2 + trigger.height()/2);
      }
      
      if (trigger.hasClass("tooltip-b")) {
        $tooltip.css("margin-top", trigger.height() + 25);
      }
      
      if (trigger.hasClass("tooltip-r")) {
        $tooltip.css("margin-left", trigger.width() + 25);
      }
      
      if (trigger.hasClass("tooltip-t")) {
        $tooltip.css("margin-top", - $tooltip.height() - 25);
      }
      
      $tooltip.find(".close").click(function() {
        $tooltip.fadeOut(150,function() {
          $tooltip.remove();
          $(".tooltip-custom").removeClass("trigger-act");
        })
      });
    
    });
    
    
  }
})( jQuery );

function reviewsSlider() {
  var slides = $(".reviews-slide");
  var lister = $(".reviews-lister");
  
  var sliderSize = slides.length;
  
  for (i=0;i<sliderSize;i++) {
    lister.append("<div class='item' />");
  }
  
  lister.find(".item").eq(0).addClass("act");
  
  slides.hide();
  
  slides.eq(0).show().addClass("slide-act");
  
  lister.find(".item").click(function() {
    lister.find(".item").removeClass("act");
    slides.removeClass("slide-act").hide();
    slides.eq($(this).prevAll(".item").length).fadeIn(250).addClass("slide-act");
    $(this).addClass("act");
  });
  
}

function sliderAnimate(index) {
  if (index == 0) {
    $(".slide-1 .pic img").transition({ 
      perspective: '500px',
      rotateY: '180deg'
    },10,function() {
      $(".slide-1 .pic img").transition({ 
        perspective: '500px',
        rotateY: '0deg'
      },1000);
    });
  }
  
  if (index == 1) {
    $(".slide-2 .pic img").transition({ 
      perspective: '500px',
      rotateY: '180deg'
    },10,function() {
      $(".slide-2 .pic img").transition({ 
        perspective: '500px',
        rotateY: '0deg'
      },1000);
    });
  }
  
  if (index == 2) {
    $(".slide-3 .pic img").transition({ 
      perspective: '500px',
      rotateY: '180deg'
    },10,function() {
      $(".slide-3 .pic img").transition({ 
        perspective: '500px',
        rotateY: '0deg'
      },1000);
    });
  }
  
  if (index == 3) {
    $(".slide-4 .pic img").transition({ 
      perspective: '500px',
      rotateY: '180deg'
    },10,function() {
      $(".slide-4 .pic img").transition({ 
        perspective: '500px',
        rotateY: '0deg'
      },1000);
    });
    
  }
  
  if (index == 4) {
    $(".slide-5 .pic img").transition({ 
      perspective: '500px',
      rotateY: '180deg'
    },10,function() {
      $(".slide-5 .pic img").transition({ 
        perspective: '500px',
        rotateY: '0deg'
      },1000);
    });
    
  }
  
}