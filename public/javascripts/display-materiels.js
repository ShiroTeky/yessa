
var materiels;
var contenthtml;
var req = new XMLHttpRequest();

req.open("GET","/data/materiels.json",true);
req.onreadystatechange = function displayproducts(){
    if(req.readyState == 4)
    {
        var data = req.responseText;
        materiels = JSON.parse(data);
        
        $.each(materiels.computers,function(key,item){

            var contenthtml = 
            /**Code d'affichage' */
            "<div class='product-essential'>"
                +"<div class='gallery' data-productid='"+key+"'>"
                    +"<div class='picture'>"
                        +"<a href='#' title='"+item.Product+"'>"
                            +"<img alt='' width='400' heigth='316' src='"+item.Image+"' title='"+item.Product+"'/>"
                        +"</a>"
                    +"</div>"
                +"</div>"
                +"<div class='overview'>"
                    +"<h2 class='product-name'>"
                        +"<a href='#'>"+item.Product+"</a>"
                    +"</h2>"
                    +"<div class='manufacturers'>"
                        +"<span class='label'>Manufacturer:</span>"
                        +"<span class='value'>"
                            +"<a href='#'>"+item.Manufacturer+"</a>"
                        +"</span>"
                    +"</div>"
                    +"<div class='short-description'>"
                        item.ShortDescription
                    +"</div>"
                    +"<div class='add-info'>"
                
                        +"<div class='prices'>"
                    
                            +"<span class='price old-price'>"+item.OldPrice+"</span>"
                    
                            +"<span class='price actual-price'>"+item.Price+"</span>"
                    
                        +"</div>"
                    +"</div>"
                +"</div>"
                +"<div class='full-description'>"
                    item.FullDescription
                +"</div>"
            +"</div>"
        /**Fin */

            $(contenthtml).appendTo($(".lists-materiels"));
            /*$('.catalogue').html(content);*/
        });
    }
};
req.send(null);
