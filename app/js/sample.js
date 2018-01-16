 $( function() {
  /*
	 * Temporary code 
	 */
	 $("#btn-more-filters").click(function(){
	 	  $("#filters-advanced").toggle();
	 });

   /*
   * Multi select
   */
    $('#country').multiselect({
        selectAll: true,
        minHeight: null,
        showCheckbox: true,
        texts    : {
            placeholder: 'Select Country',
            search     : 'Search States'
        }
    });
    $('#category').multiselect({
        selectAll: true,
        minHeight: null,
        showCheckbox: true,
        texts    : {
            placeholder: 'Select Category',
            search     : 'Search States'
        }
    });

});