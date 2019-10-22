
var Cite = require('citation-js');

// Set variables
var cite = new Cite();
var opt = {
    format: 'string'
};

// Make shorter ref to function
var parseAsync = Cite.parse.input.async.chain;

$(function(){
    $("#refModal .close").click(function(ev){
        console.log("You tried to close the modal");
        $("#refModal").css("display", "none");
    });

    $('.bibtex').click(function(ev) {
        var bibtexURL = ev.target.getAttribute('src');

        $.ajax(bibtexURL).done(function(data){
            
            parseAsync(data).then(function(data){
                $("#refModal").css("display", "block");
                const opts = { format: 'html', lang: 'en-US' }
                const bibData = cite.set(data)
                $("#bibtex-apa").html(bibData.format('bibliography', {
                    template: 'apa',
                    ...opts
                }));
                $("#bibtex-vancouver").html(bibData.format('bibliography', {
                    template: 'vancouver',
                    ...opts
                }));
                $("#bibtex-harvard").html(bibData.format('bibliography', {
                    template: 'harvard1',
                    ...opts
                }));
                $("#bibtex-url").attr("href", bibtexURL);
                $("#bibtex-vancouver .csl-left-margin").remove();
            });
        });
        return true;
    });

});