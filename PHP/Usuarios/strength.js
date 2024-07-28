/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {

    var pluginName = "strength",
        defaults = {
           strengthClass: 'strength',
            strengthMeterClass: 'strength_meter',
            strengthButtonClass: 'button_strength',
            strengthButtonText: 'Mostrar contraseña',
            strengthButtonTextToggle: 'Ocultar Contraseña'
        };

       // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {


            var characters = 0;
            var capitalletters = 0;
            var loweletters = 0;
            var number = 0;
            var special = 0;

            var upperCase= new RegExp('[A-Z]');
            var lowerCase= new RegExp('[a-z]');
            var numbers = new RegExp('[0-9]');
            var specialchars = new RegExp('([!,%,&,@,#,$,^,*,?,_,~])');

            function GetPercentage(a, b) {
                    return ((b / a) * 100);
                }

                function check_strength(thisval,thisid){
                    if (thisval.length > 7) {
                     characters = 1;
                     $('#plongitud').addClass('green').html(); 
                    } else {
                     characters = 0; 
                     $('#plongitud').removeClass('green');
                    };
                    if (thisval.match(upperCase)) { 
                        capitalletters = 1;
                        $('#pmayuscula').addClass('green').html();
                    } else { 
                      capitalletters = 0; 
                      $('#pmayuscula').removeClass('green');
                    };
                    if (thisval.match(lowerCase)) { 
                      loweletters = 1;
                      $('#pminuscula').addClass('green').html();
                    }  else { 
                      loweletters = 0; 
                      $('#pminuscula').removeClass('green');
                    };
                    if (thisval.match(numbers)) {
                     number = 1;
                     $('#pnumerico').addClass('green').html();
                    }  else {
                     number = 0;
                     $('#pnumerico').removeClass('green');
                     };
                    if (thisval.match(specialchars)) {
                     special = 1;
                      $('#pespecial').addClass('green');
                    }  else { 
                    special = 0;
                    $('#pespecial').removeClass('green'); 
                    };
                 
                    var total = characters + capitalletters + loweletters + number + special;
                    var totalpercent = GetPercentage(7, total).toFixed(0);
                    get_total(total,thisid,special);
                }

            function get_total(total,thisid,special){

                  var thismeter = $('div[data-meter="'+thisid+'"]');
                  var elemid = $('div[data-meter="'+thisid+'"]');
                if(total == 0){
                      thismeter.removeClass().html('');
                      // $("#btnpass").attr('disabled','disabled');
                }else if (total <= 1  ) {
                   thismeter.removeClass();
                   thismeter.addClass('veryweak').html('<p>Contraseña: Muy debil </p>');
                } else if (total == 2){
                   thismeter.removeClass();
                   thismeter.addClass('weak').html('<p>Contraseña: debil </p>');
                   // $("#btnpass").attr('disabled','disabled');
                } else if(total == 3){
                   thismeter.removeClass();
                   thismeter.addClass('medium').html('<p>Contraseña: medio</p>');
                   // $("#btnpass").attr('disabled','disabled');
                } else if(total == 4){
                   thismeter.removeClass();
                   thismeter.addClass('medium').html('<p>Contraseña: medio alto</p>');
                   // $("#btnpass").attr('disabled','disabled');
                } else {
                  thismeter.removeClass();
                  thismeter.addClass('strong').html('<p>Contraseña: fuerte </p>');
                   $('#pass_2').removeAttr('disabled');
                   // $("#btnpass").removeAttr('disabled');
                   // var va=1; 
                   // $('#vari1').val(va);
                   
                } 
                //console.log(total);
            }





            var isShown = false;
            var strengthButtonText = this.options.strengthButtonText;
            var strengthButtonTextToggle = this.options.strengthButtonTextToggle;


            thisid = this.$elem.attr('id');
            this.$elem.addClass(this.options.strengthClass).attr('data-password',thisid).after('<input style="display:none" class="form-control '+this.options.strengthClass+'" data-password="'+thisid+'" type="password" id="secretkey" name="secretkey" value="" maxlength="12" minlength="7"><a id="btnMostrarPass" style="cursor:pointer;" onclick="mostrarPassword();"><i class="fas fa-eye"></i> Mostrar Contraseña</a><div class="'+this.options.strengthMeterClass+'"><div data-meter="'+thisid+'"><p></p></div></div>');
             
            this.$elem.bind('keyup keydown', function(event) {
                thisval = $('#'+thisid).val();
                $('input[type="text"][data-password="'+thisid+'"]').val(thisval);
                check_strength(thisval,thisid);
                
            });

             $('input[type="text"][data-password="'+thisid+'"]').bind('keyup keydown', function(event) {
                thisval = $('input[type="text"][data-password="'+thisid+'"]').val();
                console.log(thisval);
                $('input[type="password"][data-password="'+thisid+'"]').val(thisval);
                check_strength(thisval,thisid);
                
            });



            $(document.body).on('click', '.'+this.options.strengthButtonClass, function(e) {
                e.preventDefault();

               thisclass = 'hide_'+$(this).attr('class');




                if (isShown) {
                    $('input[type="text"][data-password="'+thisid+'"]').hide();
                    $('input[type="password"][data-password="'+thisid+'"]').show().focus();
                    $('a[data-password-button="'+thisid+'"]').removeClass(thisclass).html(strengthButtonText);
                    isShown = false;

                } else {
                    $('input[type="text"][data-password="'+thisid+'"]').show().focus();
                    $('input[type="password"][data-password="'+thisid+'"]').hide();
                    $('a[data-password-button="'+thisid+'"]').addClass(thisclass).html(strengthButtonTextToggle);
                    isShown = true;
   
                }


               
            });


         
            
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );


