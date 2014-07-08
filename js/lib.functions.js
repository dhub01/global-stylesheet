

function openDashWindow(cls, modal){
    var acls = '';
    
    if(modal === 0){
        acls = 'oLayer'; //modal window
        close= "onclick='closeDashWindow(\""+cls+"\");'";
    } else {
        acls = 'nLayer';
        close= "";
    }

    var zIndex  = getHighestZIndex();
    
    var xInd = parseFloat(zIndex) + 100;
    var yInd = parseFloat(zIndex) + 50;

    $("."+cls).css('z-index',xInd).fadeIn();
    
    var divElem = $("<div id='"+cls+"overlay' class='overlayContainer "+acls+"' "+close+" style='z-index:"+yInd+"'></div>");
    divElem.css('z-index',yInd).appendTo('body').fadeIn();
}

function openModalWindow(cls){
    var zIndex  = getHighestZIndex();
    
    var xInd = parseFloat(zIndex) + 100;
    var yInd = parseFloat(zIndex) + 50;
    
    $("."+cls).css('z-index',xInd).fadeIn();
    
    var divElem = $("<div id='"+cls+"overlay' class='overlayContainer oLayer'></div>");
    divElem.css('z-index',yInd).appendTo('body').fadeIn();
}

function getHighestZIndex(){
    var maxZ = Math.max.apply(null,$.map($('body > *'), function(e,n){
           if($(e).css('position') == 'absolute')
                return parseInt($(e).css('z-index'))||1 ;
           })
    );
    return maxZ;
}

function closeDashWindow(cls){
    $("."+cls+", #"+cls+"overlay").hide();
}

function closeTagChildrenWindows(){
    var divElems = ".tagChildrenDropDown, .tagChildrenWindow, #tagChildrenDropDownoverlay, #tagChildrenWindowoverlay";
    $(divElems).hide();
}

function selectArticle(param){
    var varF = $(param).val();
 
    if(varF == 'families'){
        openModalWindow('selectFamiliesWindow');
    } else {
        openModalWindow('selectRoomsWindow');
    }
}

function toggleAlertPanel()
{
    if( $('.alertPanel').is(":visible") ) {
        $('.alertFlipper').show();
        $('.alertUpArrow').hide();

        $('.alertPanel').slideUp("slow", function(){
            $('.alerts').css({ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 });
        });
    } else {
        $('.alertFlipper').hide();
        $('.alertUpArrow').show();

        $('.alerts').css({ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 });
        $('.alertPanel').slideDown();
    }
}

function activeAlert(){
    $('.alertMsg').addClass('alertActive');
    $('.alertFlipper').addClass('alertFlipperActive');
}

function neutralAlert(){
    $('.alertMsg').removeClass('alertActive');
    $('.alertFlipper').removeClass('alertFlipperActive');
}

